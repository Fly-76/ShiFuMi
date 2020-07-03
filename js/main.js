// Programme Shi Fu Mi

// *** Initialize the differents choice
var possibleChoice = ["pierre", "feuille", "ciseaux"];

// *** Display a wellcome message
alert("Bonjour et bienvennue");

// *** Get user name, check:  2< length's name <20
function getUserName(){
    var uName = "";
    while ( !(uName.length<20 && uName.length>2) ) {
        uName = prompt("Veuillez entrer votre nom");
    }
    return uName;
}
var userName = getUserName();

// *** Get user choice, check: choice is something like pierre, feuille, ciseaux
function getUserChoice(){
    var uChoice = "";
    while ( uChoice === "") {
        uChoice = prompt(userName + ", veuillez choisir : pierre, feuille ou ciseaux?\nScore actuel : \t" + 
                                userName + " " + score.user + " \t computer " + score.computer);
        uChoice = uChoice.toLowerCase();
        if (!possibleChoice.includes(uChoice)) uChoice = "";
    }
    return uChoice;
}

// *** Generate an integer value in the range min, max
function randomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// *** Repeat code until one player reach 3 victory
var score = { "user": 0, "computer": 0 }

while (score.user<3 && score.computer<3) {

    // *** Input user choice
    var userChoice = getUserChoice();

    // *** Computer choice
    var computerChoice = possibleChoice[randomInt(0,2)];
    alert("Choix de l'ordinateur : " + computerChoice);

    // *** Check result, update score array
    var winningCombination = ["pierreciseaux", "feuillepierre", "ciseauxfeuille"];
    var combination = userChoice + computerChoice;

    if (userChoice===computerChoice);
    else if (winningCombination.includes(combination)) score.user++;
    else score.computer++;
}

// Check final score and display the winner
if (score.user==3) alert("Bravo " + userName + ", vous avez gagné");
else alert(userName + ", vous avez perdu");
