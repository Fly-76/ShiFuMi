// Programme Shi Fu Mi

// *** Global variables initialization
var possibleChoice = ["pierre", "feuille", "ciseaux"];
var winningCombination = ["pierreciseaux", "feuillepierre", "ciseauxfeuille"];
var score = { 
	"user": 0,
	"computer": 0 
	};
var continu = true;

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
    while (!possibleChoice.includes(uChoice)) {
		var promptStr = userName + ", veuillez choisir : pierre, feuille ou ciseaux?\nScore actuel : \t";
        uChoice = prompt( promptStr + userName + " " + score.user + " \t computer " + score.computer).toLowerCase();
    }
    return uChoice;
}

// *** Chesk if user want to restart the game
function askReplay() {
    var endOfGame = prompt(userName + ", voulez vous recommencer ? (o/n)", "n").toLowerCase();
    return (endOfGame == "o");
}

// *** Generate a random integer value, return the correpoding choice
function getComputerChoice()
{
    return possibleChoice[ Math.floor(Math.random()*3)];
}

// *** Repeat code until one player reach 3 victory
// *** Allow the player to restart the game when finished

while (continu) {
	// score initialization
    score.user = 0;
	score.computer = 0;

    while (score.user<3 && score.computer<3) {

        // *** Input user choice
        var userChoice = getUserChoice();

        // *** Computer choice
        var computerChoice = getComputerChoice();
        alert("Choix de l'ordinateur : " + computerChoice);

        // *** Check result, update score array      
        var combination = userChoice + computerChoice;

        if (userChoice===computerChoice);
        else if (winningCombination.includes(combination)) score.user++;
        else score.computer++;
    }

    // Check final score and display the winner
    if (score.user==3) alert("Bravo " + userName + ", vous avez gagné");
    else alert(userName + ", vous avez perdu");

    // Ask for a new game
    continu = askReplay();
}