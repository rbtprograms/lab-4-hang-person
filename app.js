'use strict';
//getting input from the field
var userGuess = document.getElementById('guess');
var guessed = userGuess.value.trim().toLowerCase();
//displaying the input letters(behind 1 for some reason)
var displayLetters = "";
//guess function
function letterGuess() {
    var guessed = userGuess.value.trim().toLowerCase();
    console.log(guessed);
    //updates letters in string
    if (displayLetters.includes(guessed)){
        alert('You already guessed ' + guessed + ', please try another');
        displayLetter += "";
    } else {
        displayLetters += guessed + ", ";
    }
    
    //changes the text on screen for display
    var p = document.getElementById('inputDisplay');
    p.textContent = displayLetters;
}

function getWord(pastaWords){
    //random number the length of the string
    var index = randomNumber(pastaWords.length);
    console.log(index);
    //actually gets item from array
    var pasta = pastaWords[index];
    console.log(pasta);
    var p1 = document.getElementById('wordOnScreen');
    p1.textContent = pasta;
    
    var pastaSpl = pasta.split("");
    console.log(pastaSpl);
    console.log(pastaSpl.includes(guessed));
}
getWord(words);
var acquiredWord = getWord.value;
console.log();

function matchLetter(){


}

function randomNumber(amount){
    //random number generator, adjusts with string length
    return Math.floor(Math.random(amount) * words.length);

}




// still trying to get this working wordLength and testSTRING VAR
function wordLength(sample){
    return sample.length;
    console.log(sample.length);
}
getWord(words);


// random line test