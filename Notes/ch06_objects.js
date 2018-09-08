/* Object Oriented Programming

* 1. Encapsulation: separating interface from implementation
*   - divide programs into smaller pieces and make each piece responsible
*   for managing its own state
*   - pieces of the program interact through interfaces
*   - interface: a limited set of functions or bindings that provides useful
*   functionality at a more abstract level, hiding its precise implementation
*     - contain specific set of methods and properties
*       - properties that are part of interface are public
*       - properties that outside code shouldn't touch are private
*
* */

// A method is a property that holds function values
let rabbit = {};
rabbit.speak = function(line) {
  console.log(`The rabbit says {line}`);
};

// Methods do something to the object they were called on
// When a function is called as a method, the 'this' binding
// automatically points at the object it was called on
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}`);
}
let whiteRabbit = { type: "white", speak };
let hungryRabbit = { type: "hungry", speak };

whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// The white rabbit says 'Oh my ears and whiskers, how late it's getting!'

// can pass 'this' explicitly by using function's call method
speak.call(hungryRabbit, "Burp!"); // The hungry rabbit says 'Burp!'

// can't refer to the 'this' of the wrapping scope in a regular function
// defined with the function keyword

// Arrow functions don't bind their own 'this' but can see the 'this'
// binding of the scope around them (lexical this) - can reference 'this'
// from inside a local function
function normalize() {
  console.log(this.coords.map(n => n / this.length));
}

/*
* 2. Prototypes - an object used as a fallback source of properties
*   - when object gets request for a property it doesn't have, its
*   prototype will be searched for that property and so on up the
*   prototype chain
*   - 'ancestral' prototype is Object.prototype
*   - functions have Function.prototype and arrays have Array.Prototype
* */

// can use Object.create to create an object with a specific prototype
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("RAWWWRRRR!"); // THe killer rabbit says 'RAWWWRRRR'

/*
* 3. Classes - defines the shape of an object (what methods and properties it has)
*   - an object created from the class "blueprint" is an instance of that class
*   - a constructor function creates an instance of a class
*   - all functions automatically get a property called 'prototype' which by default
*   holds a plain, empty object that derives from Object.prototype
*   - there's a difference between an object having a prototype, and the prototype
*   property that is associated with an object constructor (which holds the prototype
*   for objects created by the constructor)
*   - js classes are constructor functions with a prototype property
* */

// a constructor function
function makeRabbit(type) {
  let rabbit = Object.create(protoRabbit);
  rabbit.type = type;
  return rabbit;
}

// can put "new" keyword in front of a fxn to turn it into a constructor
// an object with the right prototype is automatically created, bound to 'this'
// and returned at the end of the fxn

// this is a constructor
// constructor names are capitalized
function Rabbit(type) {
  this.type = type;
}
// this is an example of adding a property (method) to the object's prototype property
Rabbit.prototype.speak = function(line) {
  console.log(`The ${this.type} rabbit says '${line}`);
};

// make a new rabbit instance
let weirdRabbit = new Rabbit("weird");

// Class Notation!
// New ES6 syntax makes writing classes less AWK
class Rabbit {
  // this is the constructor function
  constructor(type) {
    this.type = type;
  }
  // methods are packed into the constructor's prototype property
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}`);
  }
}

// can use class in expressions which produces a constructor as a value
let object = new class {
  getWord() {
    return "hello";
  }
}();

// overriding existing 'teeth' property in Rabbit.prototype
Rabbit.prototype.teeth = "small";
console.log(killerRabbit.teeth); // small
killerRabbit.teeth = "long, sharp, and bloody";
console.log(killerRabbit.teeth); // long, sharp, and bloody
console.log(whiteRabbit.teeth); // small

/*
* 4. Maps (hash maps)
*   - not safe to use plain objects as maps because they derive from Object.prototype
*   and will inherit all of its properties
*     - can create an object without a prototype to use as a map
*     - can also us the js Map class
*     - w/ plain object, can call Object.keys to return only object's own keys
*     or use hasOwnProperty() method
* */

// create object without prototype
Object.create(null);

// use Map constructor
let ages = new Map();
ages.set("Angi", 25);
ages.set("Austin", 25);
ages.set("Mordecai", 1);


