
let prompt = require("prompt-sync")();

function choisirCarte() {
    console.log("Information: \n1 -> Feu \n2 ->plante \n3 -> Eau");
    let choix = prompt("Choisissez une carte (1-3) : ");
    return choix;
}

function determineGagnant(joueur, bot) {
    if ((joueur == 1 && bot + 1 == 2) ||
        (joueur == 2 && bot + 1 == 3) ||
        (joueur == 3 && bot + 1 == 1)) {
        return "gagne";
    } else if (joueur - 1 == bot) {
        return "egalite";
    } else {
        return "perdu";
    }
}

exports.first = choisirCarte
exports.b = determineGagnant