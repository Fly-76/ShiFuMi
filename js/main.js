// Programme Shi Fu Mi

// *** Display a wellcome message
alert("Bonjour et bienvennue");


// *** Get user name
var userName = prompt("Veuillez entrer votre nom");

// *** Input user choice
var userChoice = prompt("Veuillez entrer choisir : Pierre, Feuille ou Ciseaux");

// *** Computer choice
function entierAleatoire(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var possibleChoice = ["Pierre", "Feuille", "Ciseaux"];
var computerChoice = possibleChoice[entierAleatoire(0,1)];

alert("Choix de l'ordinateur : " + computerChoice);
