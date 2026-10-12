L’opérateur Carmentis permet de stocker des informations onchain (sur la chaîne) ou offchain (hors chaîne).

Un stockage offchain a plusieurs cas d’usage

Stockage d’information susceptible d'être supprimée. On pense par exemple à des informations à caractère personnel qui pourrait être supprimées à la demande de la personne.

Stockage d’information trop lourde pour être stockée sur la chaîne.

Le principe du stockage offchain est que les données sont stockées en clair par l’application mais qu’une signature des données est ancrée onchain.

Obtention du hash des données
Supposons qu’on souhaite ancrer offchain les informations identifiant le débiteur à savoir



Debiteur = {
nom: "Durand",
prenom: "Pierre"
}
Ces données sont envoyées à l’opérateur qui répond avec le hash des données



RetourDebiteur = {
digestData: {
ABCD1234: {
__salt__: "123456AB",
nom: "Durand",
prenom: "Pierre",
},
},
digest: {
digest: "ABCD1234",
type: "json",
encoding: "canonical",
digestAlg: "sha256",
},
};
Le rôle de l’opérateur est ici de garantir le format de la chaîne de caractère qui représente le JSON. En particulier, l’opérateur va gérer les espaces et va trier le JSON afin qu’un même JSON donne toujours le même digest.

Ancrage du hash
Ce retour de l’opérateur permet d’ancrer une créance avec une référence par exemple à un débiteur avec aucune donnée à caractère personnel.



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
__digest__: {
digest: "ABCD1234",
type: "json",
encoding: "canonical",
digestAlg: "sha256",
},
},
},
};
Résolution
Au moment de la résolution, les données en clair sont passées dans l’objet offchainData qui est ajouté à l’objet envoyé au resolver.



CreancePourResolution = {
linkedMicroblock : "cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259",
policies?: {		
onResolutionFailure?: 'ignore' | 'throw' = 'throw',
onCyclicResolution?: 'ignore' | 'throw' = 'throw',
},
digestData : {
ABC1234: {
__salt__: "123456AB",
nom: "Durand",
prenom: "Pierre"
}
}
}
Le proofchecker remplace le __digest__ dans le microblock par les données en clair et valide que ces données en clair correspondent bien au __digest__ (validation de la preuve)



CreanceResolue = {
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
// preuve d'authenticité pour tous les liens résolus à savoir le microblock de la créance et le microblock du débiteur qui était stocké offchain
},
digestData: {
ABC1234: {
__salt__: "123456AB",
nom: "Durand",
prenom: "Pierre",
},
},
},
// signature de la preuve (optionnelle)
proofSignature: {
// ...
},
};
Ré-ancrage onchain de données offchain
Supposons qu’on veuille ancrer les informations offchain d’un débiteur. On peut ancrer les informations de ce débiteur sur une durée infini car il ne s’agit pas de données à caractère personnel.



Debiteur = {
applicationId: "...",
chainStorageInDays: null,
data: {
__digest__: {
digest: "ABCD1234",
type: "json",
encoding: "canonical",
digestAlg: "sha256",
},
},
channels: [],
actors: [],
channelAssignations: [],
actorAssignations: [],
author: "..",
};
On suppose que le microblock est référencé par cmts://resolve/al/3008327736206FA139A/h/598.

On suppose qu’on souhaite ancrer un constat qui est un document d’une durée de 25 ans et au sujet duquel une personne concernée ne peut demander de supprimer ses données.

L’ancrage du constat doit donc comporter également les données offchain. Il s’écrit de la manière suivante



Constat = {
applicationId: "...",
chainStorageInDays: 9000,
data: {
nom: "Constat",
creance: {
reference: "F-2025-11873",
emetteur: "EDF",
date: "2023-12-05",
principal: 358.2,
interet: 12.5,
},
debiteur: {
__resolution_link__: "cmts://resolve/al/3008327736206FA139A/h/598",
__digest_data__: {
ABC1234: {
__salt__: "123456AB",
nom: "Durand",
prenom: "Pierre",
},
},
},
},
channels: [],
actors: [],
channelAssignations: [],
actorAssignations: [],
author: "...",
};
Le fait d’ancrer les données offchain permet

d’ancrer la preuve du débiteur

d’utiliser les données à caractère personnel que dans le cadre du constat.

La résolution commence par la résolution des __resolution_link__ qui sont vérifiés puis vérifie la cohérence des __digest_data__ avec les __digest__

Le retour de la résolution est ensuite classique



ConstatResolu = {
type: "resolutionProof",
info: {},
proof: {
// microblock à résoudre (ici la créance)
linkedMicroblock: "cmts://resolve/al/A1480947BF02147CC62FE8163C/h/259",
// les données résolues
resolvedMicroblock: {
nom: "Constat",
creance: {
reference: "F-2025-11873",
emetteur: "EDF",
date: "2023-12-05",
principal: 358.2,
interet: 12.5,
},
debiteur: {
nom: "Durand",
prenom: "Pierre",
},
},
proofs: {},
},
proofSignature: {},
};
Utilisation dans le cadre du RGPD
Ce système de stockage offchain permet de gérer les droits des personnes concernées à la suppression. Il reviens à l’application de retrouver les données de la personne concernée pour les  supprimer.

Ce système ne permet pas de gérer le droit à la rectification sur ce qui est déjà ancré.