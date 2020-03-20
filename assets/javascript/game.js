var selectableWords = [
	"legislature",
	"democratic",
	"american",
	"constitution",
	"states",
	"presidents",
	"freedom",
	"Independence",
	"liberty",
	"patriotic",
	"washington",
	"senate",
	"congressional"
];

var lettersString = "abcdefghijklmnopqrstuvwxyz".split("");
var maxGuesses = 8;
var remainingGuesses = 0;
var wins = 0;
var guessedLetters = [];
var currentWord = [];
var currentWordIndex;
var wordBlanks = [];
var playersGuess;

function getCurrentWord() {
	currentWord =
		selectableWords[Math.floor(Math.random() * selectableWords.length)];
	console.log(selectableWords);
}

function displayBlanks() {
	for (let i = 0; i < getCurrentWord.length; i++) {
		wordBlanks.push("_");
		document.write.getElementById("currentWord");
	}
}

function startGame() {
	getCurrentWord();
	displayBlanks();
}
startGame();

document.onkeydown = function(event) {
	var playersGuess = event.key.toLowerCase();
	console.log(playersGuess);
	if (lettersString.includes(playersGuess) == false) {
		console.log("Invalid entry");
	} else if (guessedLetters.includes(playersGuess)) {
		console.log("That letter has been selected");
	} else {
	}
};
