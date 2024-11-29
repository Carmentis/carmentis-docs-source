# Proof of authenticity

With the advance of artificial intelligence used to produce close-to-real data including official documents, 
a shift of paradigm has been initiated, in which a document in considered false unless a proof of authenticity is
provided. A natural following question might be "What kind of proof can we use to prove authenticity"? 

It is exactly this point that Carmentis is trying to address, by providing an easy-to-use and flexible method to generate
and share a proof of authenticity: The core of the proof mechanism is based on both the blockchain and on a cryptographic
hash-based construction called a Merkle-tree. In few words, a Merkle-tree allows one, the prover, to create a so-called *hash root*
over a given set of data. This hash root is anchored in the blockchain, preventing a tampering of this hash root. The prover
then generates a proof of authenticity for a given subset of the data being inputted to compute the hash root. Later, the 
proof verifier, given the hash root anchored in the blockchain, the proof and the subset of data being inputted by the prover
during the proof generation, can efficiently verify the authenticity of the
same subset of the data. 

An interesting property is that all the data being out of the subset used during the proof generation and proof verification
do not have to be revealed. From an efficiency purpose, the Merkle-tree allows a *short* proof and an efficient
proof verification.


Find more information about [how to generate a proof](../how-to/generate-proof) and [how to verify a proof](../how-to/verify-proof)
in the dedicated documentation pages.

<div class="related-pages">
    <p class="title">Related pages</p>
    <div class="pages">
        <a class="page" href="../how-to/get-your-carmentis-wallet">
            Get your wallet
        </a>
         <a class="page" href="../how-to/wallet-usage">
            Wallet usage
        </a>
         <a class="page" href="../how-to/generate-proof">
            Generate a proof
        </a>
        <a class="page" href="../how-to/verify-proof">
            Verify a proof
        </a>
    </div>
</div>