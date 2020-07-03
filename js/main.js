// Programme Shi Fu Mi

// *** Display a wellcome message
alert("Bonjour et bienvennue");


// *** Get user name
var userName = prompt("Veuillez entrer votre nom");

// *** Input user choice
var userChoice = prompt("Veuillez entrer choisir : pierre, feuille ou ciseaux");

// *** Computer choice
function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var possibleChoice = ["pierre", "feuille", "ciseaux"];
var computerChoice = possibleChoice[entierAleatoire(0,2)];

alert("Choix de l'ordinateur : " + computerChoice);

// *** Check and display who is the winner
//  - La pierre bat les ciseaux
//  - La feuille bat la pierre
//  - Les ciseaux battent la feuille

// solution 1
if (userChoice===computerChoice) alert("ex aequo");
else if (userChoice==="pierre") {
    if ( computerChoice=== "ciseaux") alert("Vous avez gagné");
    else  alert("Vous avez perdu");
}
else if (userChoice==="feuille") {
    if ( computerChoice=== "pierre") alert("Vous avez gagné");
    else  alert("Vous avez perdu");
}
else { // userChoice==="ciseaux"
    if ( computerChoice=== "feuille") alert("Vous avez gagné");
    else  alert("Vous avez perdu");
}

// solution 2 - use of swith instruction to improve code readibility
if (userChoice===computerChoice) alert("ex aequo");
else switch (userChoice) {
    case "pierre" :
        if ( computerChoice=== "ciseaux") alert("Vous avez gagné");
        else  alert("Vous avez perdu");
        break;

    case "feuille" :
        if ( computerChoice=== "pierre") alert("Vous avez gagné");
        else  alert("Vous avez perdu");
        break;
    
    case "ciseaux" :
        if ( computerChoice=== "feuille") alert("Vous avez gagné");
        else  alert("Vous avez perdu");
        break;
}

// solution 3 - analysing solution 1, make appear winning pair
var winningCombination = ["pierreciseaux", "feuillepierre", "ciseauxfeuille"];
var combination = userChoice + computerChoice;

if (userChoice===computerChoice) alert("ex aequo");
else if (winningCombination.includes(combination)) alert("Vous avez gagné");
else alert("Vous avez perdu");