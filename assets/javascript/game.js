// needs to register key press to initiate program

// initial object 
var wordGame = {
wins: 0,
losses: 0,
guesses: 0,
spaceWords: ["moon","star","event horizon","graviton","black hole", "coronal mass ejection", "olympus mons", "nasa","spirit", "opportunity","edwin hubble","alpha centauri","neutron star","singularity","jpl","oumuamua","apollo","buzz aldrin","project starshot","space x","esa","yutu","seti","neil armstrong","challenger","oort cloud","large magellanic cloud","hubble deep field","mars","venus","jupiter","uranus","neptune","mercury","kuiper belt","neo","meteor","comet","kepler space telescope","quasar","sun spot","exoplanets","parsec","pluto","earth","iss","sea of tranquility","io","ganymede","europa","titan","callisto","relativity","stephen hawking","hawking radiation","accretion disk","pulsar","white dwarf","brown dwarf","m class","sagittarius a","super nova","betelgeuse","orion","sirius","arcturus"],
lettersArray: [],
//selects random word
   
randSpaceWord: function() {
  return this.spaceWords[Math.floor(Math.random() * this.spaceWords.length)];
},



// splits chosen word into individual strings for each letter and space
spaceWordArray: function () {
  
 lettersArray = this.randSpaceWord.split(""); //split method does not seem to work. What is the correct sytax for use in object?
  
// creates a blank for each letter and space in array

  for (var i = 0; i < wordGame.randSpaceWord.length; i++) 
  {
    this.lettersArray[i] = "_";
  } 
},

}

