// needs to register key press to initiate program
    //keyup function to start 
    //have it update on keyup

// initial object 
var wordGame = {
wins: 0,
losses: 0,
guesses: 12,
spaceWords: ["moon","star","event horizon","graviton","black hole", "coronal mass ejection", "olympus mons", "nasa","spirit", "opportunity","edwin hubble","alpha centauri","neutron star","singularity","jpl","oumuamua","apollo","buzz aldrin","project starshot","space x","esa","yutu","seti","neil armstrong","challenger","oort cloud","large magellanic cloud","hubble deep field","mars","venus","jupiter","uranus","neptune","mercury","kuiper belt","neo","meteor","comet","kepler space telescope","quasar","sun spot","exoplanets","parsec","pluto","earth","iss","sea of tranquility","io","ganymede","europa","titan","callisto","relativity","stephen hawking","hawking radiation","accretion disk","pulsar","white dwarf","brown dwarf","m class","sagittarius a","super nova","betelgeuse","orion","sirius","arcturus"],
lettersArray: [],
blanksArray: [],
match: false,
userGuess: "",



gameStart: function () { //why does it not run when key is initially pressed? 
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

 for (var i = 0; i < wordGame.randSpaceWord.length; i++) 
  {
    blanksArray.push(this.lettersArray[i] = "_"); //why are dashes not pushing to blanksArray?
  } 
},
 
// identfies and stores user keystrokes

input: function () {
 var userKeys = document.getElementById("keylog").value;
  document.getElementById("keyCollector").innerHTML = userKeys; //how to make program track keystrokes without requiring an input field?
},


// compares user keystrokes with letters stored in lettersArray
    
guessCheck: function () {
  wordGame.userGuess = document.getElementById("keylog").value;
  wordGame.secretWord = document.getElementById("word");
  for (var i = 0; i < wordGame.secretWord.length; i++) {
    if (wordGame.userGuess == wordGame.secretWord[i].innerHTML) {
      // display guessed letter
    } else {
      wordGame.guesses--;
    }
  } 
    if (wordGame.guesses === 0) {
      alert("You lose! Try again!")
    }
},



// matches are displayed
    // misses subtract one from guesses


    // if guesses === 0, add one to losses and restart 



// if all letters from lettersArray are chosen by user then add one to wins and restart


}



// calls functions to run game

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
  chosenWord.innerHTML = this.lettersArray;




// var blanksArray = new Array ();

  // for (var i = 0; i < wordGame.randSpaceWord.length; i++) 
  // {
  // blanksArray.push(this.lettersArray[i] = "_");
  // } 

  // document.getElementById("blanks").innerHTML = blanksArray;
 