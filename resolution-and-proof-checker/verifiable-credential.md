Carmentis gère les Identifiants vérifiables (appelés aussi certificats vérifiables ou Verifiable credentialsou VP).

Les certificats vérifiables (VP) sont émis par un émetteur (par exemple un huissier) pour le compte d’un détenteur (par exemple un mandataire social) et peuvent être vérifiés par le proof checker (vérificateur). Les VP sont signés par la clé privée de l'émetteur.

La présentation d’un certificat vérifiable (Verifiable Presentation VP) est l’objet que le détenteur construit pour montrer son certificat à un vérificateur. La VP contient les affirmations (claims) signées cryptographiquement.  Une VP est signée par la clé privée du détenteur.

Une VP est ancrée de la façon suivante dans un champ __vp__ (Verifiable Presentation) avec la précision du format (ietf).



const expediteur = {
id: "414067330", // = SIREN
timestamp: "2025-09-16T08:00:00Z",
corporate_officer: {
__vp__: {
__sdjwt_ietf__ : "eyJ0eXAiOiJ2YytzZC1qd3QiLCJhbGciOiJFZERTQSJ9"
}
};
La résolution retournera les claims de la VP



const expediteur = {
id: "414067330", // = SIREN
timestamp: "2025-09-16T08:00:00Z",
corporate_officer: {
nom: "Badiche",
prenom: "Xavier",
date_naissance: "1973-12-20",
iat: "...", // émis à (timestamp)
exp: "...", // date d'expiration (timestamp)
nbg: "...", // not before (timestamp)
iss: "did:jwk:....", // clé publique de l'émetteur
sub: "did:", // clé de wallet (subject)
}
};
A ce stade, il n’y a pas de résolution sur l’identité de l’émetteur mais la possibilité de cette fonctionnalité pousse à bien ancrer une Présentation et non uniquement les claims. 