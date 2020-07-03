// Programme Shi Fu Mi

// *** Display a wellcome message
alert("Bonjour et bienvennue");

// *** Get user name
var userName = prompt("Veuillez entrer votre nom");

// *** Repeat code until one player reach 3 victory
var score = { "user": 0, "computer": 0 }

while (score.user<3 && score.computer<3) {

    // *** Input user choice
    var userChoice = prompt(userName + ", veuillez choisir : pierre, feuille ou ciseaux?\nScore actuel : \t" + 
                            userName + " " + score.user +
                            " \t computer " + score.computer);

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
    var winningCombination = ["pierreciseaux", "feuillepierre", "ciseauxfeuille"];
    var combination = userChoice + computerChoice;

    if (userChoice===computerChoice);
    else if (winningCombination.includes(combination)) score.user++;
    else score.computer++;
    }

// Check final score and display the winner
if (score.user==3) alert("Bravo " + userName + ", vous avez gagné");
else alert(userName + ", vous avez perdu");
