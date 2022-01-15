//project mixed messages
//object that includes three arrays of different string messages 

const arrays = {

firstArray: ['Dogs', 'Cats', 'Humans', 'Dolphins', 'Horses', 'Spiders'],

secondArray : [' are about as intelligent as a two-year-old', ' stick their butts in your face? They are doing so as a gesture of friendship.', 
' are the only creatures with chins.', ' sleep standing up.', ' make a variety of sounds including whistles, clicks, squawks, squeaks, moans, barks, groans and yelps.',
' have 8 legs and spin silk.'],

thirdArray : [' Small but very poisonous.', ' Always expensive and rare.', ' They are most sane.', ' Very friendly.', ' Think that you are pathetic.', ' Anannoyingly happy.'  ],

}

//a function that randomly extracts an index from the array

 Array.prototype.sample = function(){
    return this[Math.floor(Math.random()*this.length)];
  }

//assigning every array to a variable


let creature = arrays.firstArray.sample();
let fact = arrays.secondArray.sample();
let description = arrays.thirdArray.sample();


// combine them together for an easy .log 

let mixer = creature + fact + description;

console.log(mixer)


