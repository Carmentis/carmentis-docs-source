Une opérateur peut avoir besoin de données signées via un autre opérateur. L’application peut faire le pont entre les deux opérateurs afin de demander à un premier opérateur de signer des données pour utiliser ces données dans le deuxième opérateur.

Signature des données
On prend ici l’exemple d’un mandataire social dont le KYC a été réalisé par un premier huissier et dont on souhaite utiliser l’identité dans le cadre d’un deuxième opérateur.

La demande de signature s’effectue de la manière suivante



mandataireSocial = {
context: {
purpose: "Signature de l'identité du mandataire social",
},
payload: {
nom: "Dupont",
prenom: "Jean",
mandat: "Président",
},
};
L’opérateur retourne un JSON signé



mandataireSocialSigné = {
signatureType: "json-canonical+utf8",
signature: "nICVdQIgsA+fS1RxG0Neiz",
signatureEncoding: "base64",
publicKey: "did:jwk:eyJhbGciOiJQU",
context: {
signedAt: 1789743188398,
purpose: "Signature de l'identité du mandataire social",
},
payload: {
nom: "Dupont",
prenom: "Jean",
mandat: "Président",
},
};
Ancrage des données
Les données signées peuvent être ancrées de la façon suivante



envoi = {
applicationId: "...",
data: {
date: "2026-03-03",
destinataire: {
email: "adupont@gmail.com",
},
expediteur: {
raisonSociale: "Cabot",
siren: "123456789",
madataire: {
__signature__: {
signatureType: "json-canonical+utf8",
signature: "nICVdQIgsA+fS1RxG0Neiz",
signatureEncoding: "base64",
publicKey: "did:jwk:eyJhbGciOiJQU",
context: {
signedAt: 1789743188398,
purpose: "Signature de l'identité du mandataire social",
},
payload: {
nom: "Dupont",
prenom: "Jean",
mandat: "Président",
},
},
},
},
},
};
Résolution
La résolution du microblock donne le résultat suivant



envoiResolu = {
type: "resolutionProof",
info: {},
proof: {
// microblock à résoudre (ici la créance)
linkedMicroblock: "cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259",
// les données résolues
resolvedMicroblock: {
raisonSociale: "Cabot",
siren: "123456789",
mandataire: {
nom: "Dupont",
prenom: "Jean",
mandat: "Président",
},
},
proofs: {},
},
proofSignature: {},
};
La signature des données du mandataire est vérifiée.