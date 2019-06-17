
/*===================================================================
======================= L E T T E R - B A N K =======================
===================================================================*/


// Create varaible to hold characters for guessing
var letters = [
    'A', 'B', 'C', 'D', 'E',
 'F', 'G', 'H', 'I', 'J', 
 'K', 'L', 'M', 'N', 'O', 
 'P', 'Q', 'R', 'S', 'T', 
 'U', 'V', 'W', 'X', 'Y', 
 'Z'
];


/*===================================================================
======================= V A R I A B L E S =======================
===================================================================*/


// Create # variables for each part of the scoreboard: Wins, Loses, Tries, Tries Left
var wins = 0;
var loses = 0;
var tries = 0;
var triesLeft = 26;
var randomization;


/*===================================================================
======================= F U N C T I O N S =======================
===================================================================*/


function resetTheGame() {
    document.getElementById("play-again").className = 'hide';
    document.getElementById("gif").src = '../images/Hypnotic.gif';
    document.getElementById("result-banner").innerText = 'Let\'s Begin';
    document.getElementById().values = '';
    randomization = letters[Math.floor(Math.random() * letters.length)];
}

function playTheGame() {
    
    var imageDisplay;

    switch(true) {
        case usersGuess === 'A': 
        case usersGuess === 'B':
        case usersGuess === 'C':
        case usersGuess === 'D':
        case usersGuess === 'E':
        case usersGuess === 'F': 
        case usersGuess === 'G':
        case usersGuess === 'H':
        case usersGuess === 'I':
        case usersGuess === 'J':
        case usersGuess === 'K': 
        case usersGuess === 'L':
        case usersGuess === 'M':
        case usersGuess === 'N':
        case usersGuess === 'O':
        case usersGuess === 'P': 
        case usersGuess === 'Q':
        case usersGuess === 'R':
        case usersGuess === 'S':
        case usersGuess === 'T':
        case usersGuess === 'U': 
        case usersGuess === 'V':
        case usersGuess === 'W':
        case usersGuess === 'X':
        case usersGuess === 'Y':
        case usersGuess === 'Z':
            imageDisplay = '../images/Winner.gif';
            document.getElementById("play-again").className = 'show';
            resetTheGame();                        
            break;
        default: 
            imageDisplay = '../images/Loser.gif';
            resetTheGame();
            break;
    }
    document.getElementById("result-banner").innerText = message;
    document.getElementById("gif").scr = imageDisplay;
}




/*===================================================================
======================= M A I N - A C T I O N =======================
===================================================================*/




document.onkeyup = function(event) {
    var usersGuess = event.key;
    playTheGame();
}
