// needs to register key press to initiate program

//initial object



let wordGame = {
    guess: 12,
    loss: 0,
    win: 0,
    spaceWords: ["moon","star","event horizon","graviton","black hole", "coronal mass ejection", "olympus mons", "nasa","spirit", "opportunity","edwin hubble","alpha centauri","neutron star","singularity","jpl","oumuamua","apollo","buzz aldrin","project starshot","space x","esa","yutu","seti","neil armstrong","challenger","oort cloud","large magellanic cloud","hubble deep field","mars","venus","jupiter","uranus","neptune","mercury","kuiper belt","neo","meteor","comet","kepler space telescope","quasar","sun spot","exoplanets","parsec","pluto","earth","iss","sea of tranquility","io","ganymede","europa","titan","callisto","relativity","stephen hawking","hawking radiation","accretion disk","pulsar","white dwarf","brown dwarf","m class","sagittarius a","super nova","betelgeuse","orion","sirius","arcturus"],

   //selects random word
   
    randWord: function() {
      return this.spaceWords[Math.floor(Math.random() * this.spaceWords.length)];
    },


    //seperates selected word into array of its letters 
    
    

    //count the number of letters 
    //display blank spaces equal to number of letters

//display win and lose counter
//display guess counter

//track user key strokes and compare letters in choosen word to user choices 
    //if user input matches chosen word's letters, display letter in appropriate blank 
    //if user input doesn't match chosen word's letters, subtract one from guess counter. 

//if all the letters in chosen word are selected, add one to win counter and restart. 
//if all the guesses are used, add one to lose counter and restart. 

}

// var randWordArray = wordGame.randWord.split(" ");


let secretWord = console.log(wordGame.randWord());
