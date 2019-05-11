// spent too long trying to make this work. In retrospect, I should have switched to the basic assignment so I could have turned in something functional. Live and learn! Still, learned a lot trying to get it running so I feel ok about it. 

// initial object 
var wordGame = {
wins: 0,
losses: 0,
guesses: 12,
spaceWords: ["moon","star","event horizon","graviton","black hole", "coronal mass ejection", "olympus mons", "nasa","spirit", "opportunity","edwin hubble","alpha centauri","neutron star","singularity","jpl","oumuamua","apollo","buzz aldrin","project starshot","space x","esa","yutu","seti","neil armstrong","challenger","oort cloud","large magellanic cloud","hubble deep field","mars","venus","jupiter","uranus","neptune","mercury","kuiper belt","neo","meteor","comet","kepler space telescope","quasar","sun spot","exoplanets","parsec","pluto","earth","iss","sea of tranquility","io","ganymede","europa","titan","callisto","relativity","stephen hawking","hawking radiation","accretion disk","pulsar","white dwarf","brown dwarf","m class","sagittarius a","super nova","betelgeuse","orion","sirius","arcturus"],
lettersArray: [],
blanksArray: [],
match: false,
userGuess: [],



gameStart: function () { //how do I call it onkeyup? tried document.onkeyup(wordGame.gameStart()); doesn't work
  wordGame.randSpaceWord();  
  wordGame.spaceWordArray();
  wordGame.blanks();
},

//selects random word
   
randSpaceWord: function() {
  return this.spaceWords[Math.floor(Math.random() * this.spaceWords.length)];
},

// splits chosen word into individual strings for each letter and space

spaceWordArray: function () {
  
 lettersArray = Array.from(wordGame.randSpaceWord()); 
},

//generates blanks for each letter in random word 

blanks: function () {

 for (var i = 0; i < wordGame.spaceWordArray.length; i++)  //for each element in word array, push _ to blanks array 
  {
    blanksArray.push(this.lettersArray[i] = "_"); // i know this won't work because the equals operator is for assignment which doesn't make sense in this context.
    
    //also tried this 
    // blanksArray.push(this.lettersArray[i].replace(lettersArray, "_"));
    // but it breaks random word generation but does not generate errors in console. 
    //why are dashes not pushing to blanksArray?
  } 
},
 
// displays list of user key strokes. Stores user keystrokes in variable.

input: function () {
     
   var userKeys = document.getElementById("keylog").value;
  document.getElementById("keyCollector").innerHTML = userKeys; // I was unable to track keystrokes without requiring an input field. Tried variations of document.onkeyup to no avail. 
},


// compares user keystrokes with letters stored in lettersArray
    
guessCheck: function () {
  // wordGame.userGuess = document.getElementById("keylog").value;
  wordGame.secretWord = document.getElementById("word");
  for (var i = 0; i < wordGame.secretWord.length; i++) {
    if (wordGame.userKeys == wordGame.secretWord[i].innerHTML) {
      // display matched letter. I have been unable to figure out how to make matches display. 
    } else {
      wordGame.guesses--; // misses subtract one from guesses
    }
  } 
    if (wordGame.guesses === 0) {
      wordGame.losses++; //addes one to losses upon defeat
      alert("You lose! Try again!"); //message upon defeat
      wordGame.gameStart(); //restart 
    }
  // if all letters from lettersArray are chosen by user then add one to wins and restart
},
}



// calls functions to run game
// document.onkeyup(wordGame.gameStart()); doesn't work :(
// refresh page to generate new word
wordGame.gameStart();

//wins counter
var winsCounter = document.getElementById("wins"); 
  winsCounter.innerHTML = wordGame.wins; 

// losses counter 
var lossesCounter = document.getElementById("losses"); 
  lossesCounter.innerHTML = wordGame.losses; 

// guesses remaining counter
var guessesCounter = document.getElementById("guesses"); 
  guessesCounter.innerHTML = wordGame.guesses; 

//chosen word 
var chosenWord = document.getElementById("word"); 
  chosenWord.innerHTML = this.lettersArray; //should be blanksArray but does seem to push. will return undefined.

