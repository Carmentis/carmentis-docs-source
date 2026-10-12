La résolution d’un microblock permet de résoudre les références et de retourner un objet avec des données exploitables ainsi que l’ensemble des preuves associées.

Exemple de résolution
On reprend l’exemple décrit dans le document
Références entre microblocks dans lequel on a ancré les données d’un débiteur et les données d’une créance avec une référence vers le débiteur



Creance = {
applicationId: "...",
data: {
nom: "Facture de fourniture d'énergie",
reference: "F-2025-11873",
emetteur: "EDF",
date: "2023-12-05",
principal: 358.2,
interet: 12.5,
debiteur: {
__resolution_link__: "cmts://resolve/al/B304934D7D323D/h/123",
},
},
};
On suppose que cette créance a été ancrée dans le microblock référencé cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259

La requête envoyée pour la résolution du microblock comprend l’objet suivant



CreancePourResolutiuon = {
linkedMicroblock : "cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259",
policies?: {		
onResolutionFailure?: 'ignore' | 'throw' = 'throw',
onCyclicResolution?: 'ignore' | 'throw' = 'throw',
}
}
Les politiques (policies) détermine le comportement du resolver

onResolutionFailure : politique en cas d'échec de l’algorithme de résolution

onCyclicResolution : politique en cas de détection de cycle dans les références. Les cycles ne peuvent pas apparaitre si les liens (__resolution_link__) ne référence que des microblocks existants au moment de l’ancrage

Le resolver va alors résoudre récursivement tous les liens. A chaque fois qu’un lien est résolu, il est ajouté dans la liste des preuves retournées. Il retourne ainsi l’objet suivant



CreanceReolue = {
// type de la preuve
type: "resolutionProof",
// en-tête de la preuve
info: {
version: 1,
chainId: "", // Id de la chaîne du microblock à résoudre
description: "Resolution proof",
author: "Operator",
date: "2026-10-05", // date de génération, au format ISO
},
proof: {
// microblock à résoudre (ici la créance)
linkedMicroblock: "cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259",
// les données résolues
resolvedMicroblock: {
nom: "Facture de fourniture d'énergie",
reference: "F-2025-11873",
emetteur: "EDF",
date: "2023-12-05",
principal: 358.2,
interet: 12.5,
debiteur: {
nom: "Durand",
prenom: "Pierre",
},
},
proofs: {
// preuve d'authenticité pour tous les liens résolus à savoir le microblock de la créance et le microblock du débiteur
},
},
// signature de la preuve (optionnelle)
proofSignature: {
// ...
},
};
Le resolver met donc à disposition de l’utilisateur toutes les données ancrées avec les preuves associées.

Utilisation du proof checker
La preuve résolue peut être envoyée au proof checker soit directement sous forme de JSON soit sous forme de pdf avec un JSON en pièce jointe (voir
Représentation ).

Le proof checker va vérifier toutes les preuves ainsi que leur cohérence avec les données présentes dans le resolvedMicroblock.