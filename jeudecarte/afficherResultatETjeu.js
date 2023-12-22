const choisirCarte = require("./choisircarteETdeterminantGagnat");
const determineGagnant = require("./choisircarteETdeterminantGagnat");

function afficherResultat(joueur, bot, resultat) {
    let nomsCartes = ["Feu", "Plante", "eau"];
    console.log(`Vous avez choisi la carte ${nomsCartes[joueur - 1]}.`);
    console.log(`L'adversaire a choisi la carte ${nomsCartes[bot]}.`);
    console.log("    ______________________________                                      ");
    console.log("                                                                        ");
    console.log("      "+nomsCartes[joueur - 1]+"       X      " +nomsCartes[bot]+"      ");
    console.log("    _Vous___________Adversaire____                                      ");

    switch (resultat) {
        case "gagne":
            console.log("       ------------------------  ");
            console.log("       |Bravo! Vous l'emportez| ");
            console.log("       ------------------------  ");
            break;
        case "egalite":
            console.log("       -----------------------------------  ");
            console.log("       |Match nul, gagnant cette fois-ci.|  ");
            console.log("       -----------------------------------  ");
            break;
        case "perdu":
            console.log("       ---------------------------  ");
            console.log("       |Dommage! Vous avez perdu.|  ");
            console.log("       ---------------------------  ");
            break;
    }
}

function jeu() {
    let victoires = 0, defaites = 0, egalites = 0;

    for (let i = 0; i < 3; i++) {
        choixJoueur = choisirCarte.first();
        let choixBot = Math.floor(Math.random() * 3);
        let resultat = determineGagnant.b(choixJoueur, choixBot);
        afficherResultat(choixJoueur, choixBot, resultat);

        if (resultat === "gagne") victoires++;
        if (resultat === "egalite") egalites++;
        if (resultat === "perdu") defaites++;
    }

    if (victoires > defaites) {
        console.log("           WIN        ");
        console.log("           WIN        ");
        console.log("           WIN        ");
        console.log("           WIN        ");
        console.log("           WIN        ");

        console.log("       ------------------------------------------  ");
        console.log("       |Félicitations! Vous remportez la partie!|  ");
        console.log("       ------------------------------------------  ");
    } else if (victoires < defaites) {
        console.log("           DEFEAT         ");
        console.log("           DEFEAT         ");
        console.log("           DEFEAT         ");
        console.log("           DEFEAT         ");
        console.log("           DEFEAT         ");

        console.log("       ----------------------------------------  ");
        console.log("       |Fin du jeu, vous avez perdu la partie.|  ");
        console.log("       ----------------------------------------  ");

    } else if (egalites === 3 || victoires == defaites) {
        console.log("          EQUALITY  ");
        console.log("          EQUALITY  ");
        console.log("          EQUALITY  ");
        console.log("          EQUALITY  ");
        console.log("          EQUALITY  ");

        console.log("       ------------------------------------------------  ");
        console.log("       |La partie se termine par une égalité complète!|  ");
        console.log("       ------------------------------------------------  ");
    }
}

exports.c = jeu