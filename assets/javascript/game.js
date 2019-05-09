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
userKeys: [],

//selects random word
   
randSpaceWord: function() {
  return this.spaceWords[Math.floor(Math.random() * this.spaceWords.length)];
},

// splits chosen word into individual strings for each letter and space

spaceWordArray: function () {
  
 lettersArray = Array.from(wordGame.randSpaceWord()); 
  
    // creates a blank for each letter and space in array

  for (var i = 0; i < wordGame.randSpaceWord.length; i++) 
  {
    this.lettersArray[i] = "_";
  } 
},


// identfies and stores user keystrokes

input: function (){
  var keyLog = document.getElementById("keylog").value;
  document.getElementById("keyCollector").innerHTML = keyLog;
},


// compares user keystrokes with letters stored in lettersArray
    // matches are displayed
    // misses subtract one from guesses


    // if guesses === 0, add one to losses and restart 



// if all letters from lettersArray are chosen by user then add one to wins and restart


}


// calls function to generate random word 

wordGame.randSpaceWord();  //why do words not generate when functions are called?
wordGame.spaceWordArray();

//wins counter

var winsCounter = document.getElementById("wins") 
  winsCounter.innerHTML = wordGame.wins; 

// losses counter 

var lossesCounter = document.getElementById("losses") 
  lossesCounter.innerHTML = wordGame.losses; 

// guesses remaining counter

var guessesCounter = document.getElementById("guesses") 
  guessesCounter.innerHTML = wordGame.guesses; 


//chosen word 

var chosenWord = document.getElementById("word") 
  chosenWord.innerHTML = wordGame.lettersArray;





  // logs keypresses

// function input(){
//   var keyLog = document.getElementById("keylog").value;
//   document.getElementById("keyCollector").innerHTML = keyLog;
// }




// var userGuesses = function() {
//   function eventHandler(event) {
//     console.log(event.type);
//     console.log(event.keyCode);
//     console.log(String.fromCharCode(event.keyCode));
//   }
// };

// var textAreaElement = document.getElementById("keylog") [0];
// textAreaElement.addEventListener("keyup",eventHandler,false);
