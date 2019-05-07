// needs to register key press to initiate program

// initial object 
var wordGame = {
wins: 0,
losses: 0,
guesses: 0,
spaceWords: ["moon","star","event horizon","graviton","black hole", "coronal mass ejection", "olympus mons", "nasa","spirit", "opportunity","edwin hubble","alpha centauri","neutron star","singularity","jpl","oumuamua","apollo","buzz aldrin","project starshot","space x","esa","yutu","seti","neil armstrong","challenger","oort cloud","large magellanic cloud","hubble deep field","mars","venus","jupiter","uranus","neptune","mercury","kuiper belt","neo","meteor","comet","kepler space telescope","quasar","sun spot","exoplanets","parsec","pluto","earth","iss","sea of tranquility","io","ganymede","europa","titan","callisto","relativity","stephen hawking","hawking radiation","accretion disk","pulsar","white dwarf","brown dwarf","m class","sagittarius a","super nova","betelgeuse","orion","sirius","arcturus"],

//selects random word
   
randSpaceWord: function() {
  return this.spaceWords[Math.floor(Math.random() * this.spaceWords.length)];
},

// splits random word into array

spaceWordArray: function () {
        
}


}

