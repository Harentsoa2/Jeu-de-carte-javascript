let prompt = require("prompt-sync")();

const jeu = require("./afficherResultatETjeu");

while (true) {
    jeu.c();

    let continuer = prompt("Voulez-vous continuer ? (oui) : ");
    if (continuer.toLowerCase() !== "oui") {
        console.log("Merci d'avoir joué!");
        break;
    }
}
