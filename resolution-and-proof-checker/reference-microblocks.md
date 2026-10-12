Il est possible d’ancrer un microblock qui fait référence à d’autres microblocks. Cette technique permet de

mutualiser du stockage sur la blockchain

améliorer la lisibilité des objets

La référence n’est possible qu’entre des microblocks gérés par un même opérateur

Syntaxe
La référence a un microblock est structurée de la façon suivante



"cmts://resolve/al/B304934D7D323D412621A6A8A9FB4919/h/123"
id de la VB └───────────────────────────────────┘  └──┘ hauteur dans la VB
Il y a deux façon de référencer un microblock en utilisant le mot clé __resolution_link__ ou sans utilisation de mot clé.

Prenons un exemple dans lequel les informations relatives au débiteur sont ancrées dans un microblock avec un ancrage onchain suivant



Debiteur = {
applicationId: "...",
chainStorageInDays: 360,
data: {
nom: "Durand",
prenom: "Pierre",
},
};
On peut alors construire une créance qui fait référence à ce débiteur



Creance = {
applicationId: "...",
chainStorageInDays: 720,
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
Il est également possible d’utiliser la syntaxe sans mot clé.



Creance = {
applicationId: "...",
chainStorageInDays: 720,
data: {
nom: "Facture de fourniture d'énergie",
reference: "F-2025-11873",
emetteur: "EDF",
date: "2023-12-05",
principal: 358.2,
interet: 12.5,
debiteur: "cmts://resolve/al/B304934D7D323D/h/123",
},
};
Durée de vie
On remarque que les différentes virtual blockchain ont des durées de vie différentes (chainStorageInDays). L’impact est que la validité du microblock creance est en fait de 360 jours car celle du microblock debiteur référencé est de 360 jours. Il faut donc être très attentif aux durées de vie pour éviter d’invalider les preuves plus vite que prévu. 