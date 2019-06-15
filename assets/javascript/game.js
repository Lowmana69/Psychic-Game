// Create varaible to hold characters for guessing
var letters = [
    'A', 'B', 'C', 'D', 'E',
 'F', 'G', 'H', 'I', 'J', 
 'K', 'L', 'M', 'N', 'O', 
 'P', 'Q', 'R', 'S', 'T', 
 'U', 'V', 'W', 'X', 'Y', 
 'Z'
];

// Create # variables for each part of the scoreboard: Wins, Loses, Tries, Tries Left
var wins = 0;
var loses = 0;
var tries = 0;
var triesLeft = 26;

//Overall browser/window/document function that runs when the player presses a key
document.onkeyup = function(event) {


}
// Letters that were pressed
var playersChose = event.key

// Create a random character generator to cycle through the letters and randomly pick a character
var randomization = letters[Math.floor(Math.random() * letters.length)];

/* Create # of variables to display the counts of: 
    - what character the player chose, 
    - the winning count, 
    - the losing count, 
    - the count of how many tries, 
    - and the countdown of how many tries left.
*/

var playersChoice = document.getElementById("guesses");
var winsCounter = document.getElementById("wins");
var lostCounter = document.getElementById("loses");
var triesCounter = document.getElementById("tries");
var triesLeftCounter = document.getElementById("tries-left");

// Create variables to display the count and guess on the browser

playersChoice.textContent = playersChose;
winsCounter.textContent = wins;
lostCounter.textContent = loses;
triesCounter.textContent = triesCounter;
triesLeftCounter.textContent = triesLeftCounter;

// Create logic for determining the player has won, lost, tries, and tries left

switch (true) {
    case playersChose === 'A':
        console.log{};
        break;
    case playersChose === 'B':
        console.log();
        break;
    case playersChose === 'C':
        console.log{};
        break;
    case playersChose === 'D':
        console.log();
        break;
    case playerChose === 'E':
        console.log();
        break;
    case playersChose === 'F':
        console.log{};
         break;
    case playersChose === 'G':
        console.log();
         break;
    case playersChose === 'H':
        console.log{};
         break;
    case playersChose === 'I':
        console.log();
         break;
    case playerChose === 'J':
        console.log();
         break;
    case playersChose === 'K':
        console.log{};
        break;
    case playersChose === 'L':
        console.log();
        break;
    case playersChose === 'M':
        console.log{};
        break;
    case playersChose === 'N':
        console.log();
        break;
    case playerChose === 'O':
        console.log();
        break;
    case playersChose === 'P':
        console.log{};
        break;
    case playersChose === 'Q':
        console.log();
        break;
    case playersChose === 'R':
        console.log{};
        break;
    case playersChose === 'S':
        console.log();
        break;
    case playerChose === 'T':
        console.log();
        break;
    case playersChose === 'U':
        console.log{};
        break;
    case playersChose === 'V':
        console.log();
        break;
    case playersChose === 'W':
        console.log{};
        break;
    case playersChose === 'X':
        console.log();
        break;
    case playerChose === 'Y':
        console.log();
        break;
    case playersChose === 'Z':
        console.log();
        break;
    default:
        console.log();
}

// Create variable that receives the letter that has been clicked
var guessByPlayer = playersChose.document.getElementById("guesses").value;