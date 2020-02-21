
const wins = 0;
const losses = 0;
const guesses = 12;
const spaceWords = ["moon","star","event horizon","graviton","black hole", "coronal mass ejection", "olympus mons", "nasa","spirit", "opportunity","edwin hubble","alpha centauri","neutron star","singularity","jpl","oumuamua","apollo","buzz aldrin","project starshot","space x","esa","yutu","seti","neil armstrong","challenger","oort cloud","large magellanic cloud","hubble deep field","mars","venus","jupiter","uranus","neptune","mercury","kuiper belt","neo","meteor","comet","kepler space telescope","quasar","sun spot","exoplanets","parsec","pluto","earth","iss","sea of tranquility","io","ganymede","europa","titan","callisto","relativity","stephen hawking","hawking radiation","accretion disk","pulsar","white dwarf","brown dwarf","m class","sagittarius a","super nova","betelgeuse","orion","sirius","arcturus"];
const lettersArray = [];
const blanksArray = [];
const match = false;
const userGuess = null;

//wins counter
document.getElementById("wins").innerHTML = wins;

// losses counter 
document.getElementById("losses").innerHTML = losses;

// guesses remaining counter
document.getElementById("guesses").innerHTML = guesses;

//chosen word 
 //should be blanksArray but does seem to push. will return undefined.
 

 document.onkeyup =(e)=> {
   
  if (e.keyCode >= 49 && e.keyCode <= 90) {
    userGuessed = e.key.toLowerCase();
    // Pass the guessed letter into our updatePage function to run the game logic.
    wordGuessGame.updatePage(wordGuessGame.letterGuessed);
  }

}

gameStart =()=> {//how do I call it onkeyup? tried document.onkeyup(wordGame.gameStart()); doesn't work
  randSpaceWord();  
  spaceWordArray();
  blanks();
}

//selects random word and splits chosen word into individual strings for each letter and space
   
randSpaceWord =()=> {
  let arrPos = Math.floor(Math.random() * spaceWords.length);
  let secretWord = spaceWords[arrPos];
  lettersArray = Array.from(secretWord); 
},

//generates blanks for each letter in random word 

blanks =()=> {

 for (var i = 0; i < lettersArray.length; i++)  //for each element in word array, push _ to blanks array 
  {
    blanksArray.push(this.lettersArray[i] = "_"); // i know this won't work because the equals operator is for assignment which doesn't make sense in this context.
    document.getElementById("word").innerHTML = blanksArray;
  } 
},
 
// compares user keystrokes with letters stored in lettersArray
    
guessCheck =()=> {
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


// calls functions to run game
// document.onkeyup(wordGame.gameStart()); doesn't work :(
// refresh page to generate new word
gameStart();


