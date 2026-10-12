---
sidebar_position: 2
---
# Authentication

The authentication allows your application to authenticate a user by its public key using its wallet.

## Prepare your database
The first step is to update a database to identity a user by its public key.
```ts
@Entity()
export class UserEntity {
    // If you identify a user lonley by its public key, you might want to set the public key as the primary key!
    @Column()
    publicKey: string;
    
    // rest of your user entity
}
```

For the sake of simplicity, we will use the `publicKey` as the primary key. Before to authenticate, you have to register
the public key of your user in some way.

## Add authentication endpoints on the back server
Then, to authenticate, we generate a long enough random value acting as a challenge, that the user has to sign with its wallet. 
```ts

@Controller("/login")
export class LoginController {
    
    // for simplicity, we register generated challenge in memory
    private challenges: string[] = [];
    
    // we instantiate the JWT service in the constructor, thanks to DI.
    constructor(
        private jwtService: JwtService,
    ) {}

    /**
     * Generate random challenge. 
     */
    @Public()
    @Get("/challenge")
    getChallenge() {
        const challenge = encoder.encode(randomBytes(32));
        this.challenges.push(challenge);
        return { challenge };
    }

    @Public()
    @Get('/challenge/verify')
    async verifyChallenge(
        @Body('publicKey') publicKey: string,
        @Body('challenge') challenge: string,
        @Body('signature') signature: string
    ) {
        // reject if unknown challenge
        if (!this.challenges.includes(challenge)) {
            throw new BadRequestException("Challenge not found");
        }
        
        // verify signature
        const isVerified = await this.challengeService.verifyChallenge(
            challenge,
            publicKey,
            signature
        )
        if (!isVerified) {
            throw new BadRequestException("Challenge not verified");
        }
        
        // ensure that the user exists
        const userFound = seachUserByPublicKey(publicKey);
        if (!userFound) throw new NotFoundException("User not found");
        
        // we generate a JWT token for the user
        const token = this.jwtService.sign(payload);
        return { token };
    }
}
```

## Add the authentication QRCode on the front server

```tsx
export function CarmentisAuthenticationQRCode({challenge, operatorUrl}: {challenge: string, operatorUrl: string}) {
  
    useEffect(() => {
        // we prevent the rendering if the challenge or the operatorUrl are not set
        if (typeof challenge !== 'string' || typeof operatorUrl !== 'string') {
            return
        }


        const w = new wiClient();
        w.attachQrCodeContainer(`qr`);
        w.setServerUrl(operatorUrl);
        w.attachExtensionButton(`extension-button`);
        w.authenticationByPublicKey(challenge)
            .then(({challenge, signature, publicKey}) => {
                console.log("Authenticated!")
            }).catch((e) => {
                console.error(e)
            });

        return () => {
            w.detach();
        }
    }, [challenge]);

    let QRCodeContent;
    if (!challenge || !operatorUrl) {
        QRCodeContent = <Skeleton height={"150px"} width={"100px"} />
    } else {
        QRCodeContent = <>
            <div id={`qr`}  />
            <button id={`extension-button`}>Use Extension</button>
        </>
    }
    return (
        <>{QRCodeContent}</>
    );
}

```

