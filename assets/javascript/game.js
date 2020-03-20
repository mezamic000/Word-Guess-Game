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

function getCurrentWord() {
	selectableWords[Math.floor(Math.random() * selectableWords.length)];
	console.log(selectableWords);
}

function displayBlanks() {
	for (let i = 0; i < getCurrentWord.length; i++) {
		wordBlanks.push("_");
	}
}
