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

var lettersString = "abcdefghijklmnopqrstuvwxyz".split("")[0];
var maxGuesses = 8;
var remainingGuesses = 0;
var wins = 0;
var guessedLetters = [];
var currentWord = [];
var currentWordIndex;
var wordBlanks;
