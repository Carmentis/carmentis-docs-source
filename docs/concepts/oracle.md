# Oracle

In the context of blockchain technology, an oracle is a third-party service that provides external data to blockchain 
systems. Blockchains are inherently self-contained, meaning they cannot directly access information outside their network. 
Oracles serve as bridges between the blockchain and the external world, enabling blockchain to interact with 
real-world data, such as market prices, weather conditions, sports scores, or any other data source. 
This functionality is critical for creating decentralized applications that rely on accurate and timely external inputs.

Every time an oracle is asked to answer a request, its response is signed using a cryptographic signature scheme. In a
such way, the response of the oracle is publicly verifiable, non-repudiable in the sense that the oracle cannot
deny to have sign a response, and unforgeable in the sense that no one can pretend to have received a response
from the oracle that the oracle do not have signed. Hence, when the oracle signs a response, it stakes his reputation 
on the validity of the answer.


## Oracles in Carmentis

While Carmentis provides some oracles for instance to verify email addresses, the implementation and the deployment of
oracles go beyond the scope of Carmentis. However, to be usable within the Carmentis protocol, an oracle as beforehand
to be *declared*. This oracle declaration is viewed as an *interface* specifying the expected input provided by the 
oracle caller and the expected output of the oracle. 

For more information about [how to declare an oracle](../how-to/declare-oracle), visit the dedicated documentation page.


<div class="related-pages">
    <p class="title">Related pages</p>
    <div class="pages">
        <a class="page" href="../how-to/create-workspace">
            Create your workspace
        </a>
        <a class="page" href="../how-to/manage-workspace">
            Manage your workspace
        </a>
        <a class="page" href="../how-to/declare-oracle">
            Declare an oracle
        </a>
    </div>
</div>