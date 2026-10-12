L’ancrage des données onchain est la méthode la plus simple. Les avantages de cette méthode sont les suivantes

Les données sont irréfutables

Les données sont signées

Les données sont stockées de façon distribuées

Le stockage a une durée de vie.

L’information peut être gérée de façon asymétrique.

Pour fixer les idées, on va prendre comme exemple un contrat de cession de créances dans lequel il y a 3 parties : le cédant, le cessionnaire et le débiteur.

L’ancrage s’effectue via la méthode wallet/{wallet_id}/anchor

Création de la virtual blockchain
L’objet ci-dessous décrit une cession de créance entre un cédant et un cessionnaire.



const cessionCreance = {
applicationId: "1E89377BFCDF8165059AA97",
chainStorageInDays: 3600,
gasPriceInAtomics: 1000,
data: {
creance: {
nom: "Facture de fourniture d'énergie",
reference: "F-2025-11873",
emetteur: "EDF",
date: "2023-12-05",
principal: 358.2,
interet: 12.5,
debiteur: { nom: "Durand", prenom: "Pierre" },
},
acte: {
reference: "CES-2026-0087",
date: "2026-09-02",
empreinte_acte: "sha256:4b1e...",
cedant: { nom: "Cabot" },
cessionnaire: { nom: "EOS" },
},
transaction: {
prix: 15.2,
date_jouissance: "2026-10-02",
date_paiement_prix: "2026-11-02",
},
},
channels: [
{ name: "public", public: true },
{ name: "creance", public: false },
{ name: "transaction", public: false },
],
actors: [{ name: "débiteur" }, { name: "cédant" }, { name: "cessionnaire" }],
channelAssignations: [
{ channelName: "creance", fieldPath: "this.creance.*" },
{ channelName: "transaction", fieldPath: "this.transaction.*" },
{ channelName: "transaction", fieldPath: "this.acte.*" },
{ channelName: "public", fieldPath: "this.acte.empreinte_acte" },
],
actorAssignations: [
{ channelName: "creance", actorName: "débiteur" },
{ channelName: "creance", actorName: "cédant" },
{ channelName: "creance", actorName: "cessionnaire" },
{ channelName: "transaction", actorName: "cédant" },
{ channelName: "transaction", actorName: "cessionnaire" },
],
author: "commissaire de justice Alexandre et Associés",
};
Les différents éléments sont les suivants

applicationId : Id de l’application

chainStorageInDays : durée de stockage de la chaîne en jour. Au delà toute la vitrual blockchain disparait.

gasPriceInAtomics : coût maximal en token alloué à l’opération d’ancrage. Plus il est élevé, plus la demande d’ancrage sera traitée rapidement.  Le gas price est défini pour chaque microblock

data : données à ancrer dans le microblock

author : nom de l’opérateur configuré dans l’opérateur.

channels : liste des canaux. Les données des canaux publics sont accessibles à l’importe qui, les données des canaux privés sont accessibles uniquement aux acteurs désignés. De nouveaux canaux peuvent être défini au fur et à mesure des ancrages des blocks.

actors : liste des acteurs. De nouveaux acteurs peuvent être introduits au fur et à mesure de l’ancrage des blocks. Le lien entre un utilisateur réel et un acteur est réalisé par l’application (opérateur)

channelAssignations : assignation des données aux canaux. Dans l’exemple l’empreinte de l’acte est la seule donnée publique qui permet à quelqu’un qui dispose de l’original de l’acte de vérifier qu’il est conforme. Cette information doit être fournie à chaque microblock. Les * indiquent que l’ensemble des champs sont assignés.

actorAssignations : assignation des acteurs aux canaux. Les cédants et cessionnaires ont accès à toutes les informations mais le débiteur ne connait pas les informations de la transaction en particulier il ne connait pas le prix de cession.  Il faut au moins un acteur et un canal pour que les données soient accessibles.

Enchainement des microblocks
L’enchaînement des microblocks permet de suivre le déroulement de la suite des opérations. La suite des opérations pourraient être

La signature de la transaction par le cédant

La signature de la transaction par le cessionnaire

Le paiement du prix de cession

La notification du débiteur

Chaque microblock est horodaté. On accède aux différents microblocks grâce à leur niveau dans la blockchain virtuelle.

On donne ci-dessous l’exemple du microblock qui ancre la notification du débiteur



const notificationDebiteur = {
applicationId: "1E89377BFCDF8165059AA97",
virtualBlockchainId: "92F3EA839720A2444922E9",
gasPriceInAtomics: 800,
data: {
notification: {
date: "2026-11-03"
},
},
channelAssignations: [
{ channelName: "creance", fieldPath: "this.*" },
]
};
virtualBlockchainId : Id de la blockchain créée à l'étape ci-dessus

gasPriceInAtomics : le gas price peut être différent de celui de l'étape précédente

channelAssignations : on note que l’objet l’information de notification est accessible aux 3 acteurs.