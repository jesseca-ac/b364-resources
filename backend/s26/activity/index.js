// console.log("Hello World");

// Create an object using object literals
let trainer = {};

// Initialize/add the object properties and methods

// Properties
trainer.name = 'Ash Ketchum';
trainer.age = 10;
trainer.pokemon = ['Pikachu', 'Charizard', 'Squirtle', 'Bulbasaur'];
trainer.friends = {
	kanto: ['Brock', 'Misty'],
	hoenn: ['May', 'Max']
}

// Methods
trainer.talk = function() {
	// console.log('Pikachu! I choose you!');

	return 'Pikachu! I choose you!';
}

// Check if all properties and methods were properly added
console.log(trainer);

// Access object properties using dot notation
console.log('Result of dot notation:');
console.log(trainer.name);
// Access object properties using square bracket notation
console.log('Result of square bracket notation:');
console.log(trainer['pokemon']);
// Access the trainer "talk" method
console.log('Result of talk method');
trainer.talk();

// Create a constructor function for creating a pokemon
function Pokemon(name,level) {

	// Properties
	this.name = name;
	this.level = level;
	this.health = 2 * level;
	this.attack = level;

	// Methods
	// Will accept an object as a target
	this.tackle = function(target) {

	    // Reduces the target object's health property by subtracting and reassigning it's value the the pokemon's attack
	    target.health -= this.attack;
	    
	    // If the health of the target is less than or equal to 0
	    if (target.health <= 0) {
	    	// Invokes the faint method from the target object
	        target.faint()
	    } else {
	    	// Prints the target's name and message after it has been reassigned a different value
	    	console.log( target.name +"'s health is now reduced to " + target.health);
	    }

		return this.name + " tackled " + target.name;

	};

	// Method is invoked in the tackle method
	this.faint = function(){
	    // console.log( this.name +" fainted");
	    return this.name +" fainted"
	}

}

// Create/instantiate a new pokemon
let pikachu = new Pokemon("Pikachu",12);
console.log(pikachu);

// Create/instantiate a new pokemon
let geodude = new Pokemon("Geodude", 8);
console.log(geodude);

// Create/instantiate a new pokemon
let mewtwo = new Pokemon("Mewtwo", 100);
console.log(mewtwo);

// Invoke the tackle method and target a different object
geodude.tackle(pikachu);
console.log(pikachu);

// Invoke the tackle method and target a different object
mewtwo.tackle(geodude);
console.log(geodude);

//Do not modify
//For exporting to test.js
try{
    module.exports = {

        trainer: typeof trainer !== 'undefined' ? trainer : null,
        Pokemon: typeof Pokemon !== 'undefined' ? Pokemon : null

    }
} catch(err){

}