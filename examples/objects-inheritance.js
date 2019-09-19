 /** OBJECT CREATION **/

const user = {
  id: 343434343,
  firstName: "Billy",
  lastName: "Goat",
  preferences: { theme: "dark", subscribed: true }
};

// The example above is more performant than:
const newUser = new Object();
newUser.firstName = "Billy";
newUser.lastName = "Goat";
newUser.id = 343434343;
newUser.preferences = new Object();
newUser.preferences.theme = "dark";
newUser.preferences.subscribed = true;

console.log("user", user);
//   "user" Object {
//     firstName: "Billy",
//     id: 343434343,
//     lastName: "Goat",
//     preferences: Object {
//       subscribed: true,
//       theme: "dark"
//     }
//   }
console.log("newUser", newUser);
//   "newUser" Object {
//     firstName: "Billy",
//     id: 343434343,
//     lastName: "Goat",
//     preferences: Object {
//       subscribed: true,
//       theme: "dark"
//     }
//   }


/** INHERITANCE **/

const arr = []
console.log(arr.__proto__)
// outputs methods on prototype inherit from Array()

const obj = []
console.log(obj.__proto__)
// outputs methods on prototype inherit from Object()


function Actor(name, role){
  this.name = name
  this.role = role
}

function Fighter(name, weapon){
  // chain constructor
  Actor.call(this, name, 'fighter')
  // new Fighter property 
  this.weapon = weapon
}


// Copy prototypes
Fighter.prototype = Object.create(Actor.prototype);

// Add method to Actor prototype
Actor.prototype.sayHello = function () {
  return `The ${this.role} ${this.name} says 'greetings!'.`;
}
// Add method to Fighter prototype
Fighter.prototype.lunge = function(){
  return `${this.name} lunged forward with his ${this.weapon}!`
}

let minstrel = new Actor('Freddy', 'minstrel')
console.log(minstrel.sayHello())
// "The minstrel Freddy says 'greetings!'."

const philip = new Fighter('Philip', 'sword')/** OBJECT CREATION **/

const user = {
  id: 343434343,
  firstName: "Billy",
  lastName: "Goat",
  preferences: { theme: "dark", subscribed: true }
};

// The example above is more performant than:
const newUser = new Object();
newUser.firstName = "Billy";
newUser.lastName = "Goat";
newUser.id = 343434343;
newUser.preferences = new Object();
newUser.preferences.theme = "dark";
newUser.preferences.subscribed = true;

console.log("user", user);
//   "user" Object {
//     firstName: "Billy",
//     id: 343434343,
//     lastName: "Goat",
//     preferences: Object {
//       subscribed: true,
//       theme: "dark"
//     }
//   }
console.log("newUser", newUser);
//   "newUser" Object {
//     firstName: "Billy",
//     id: 343434343,
//     lastName: "Goat",
//     preferences: Object {
//       subscribed: true,
//       theme: "dark"
//     }
//   }

/** INHERITANCE **/

const arr = [];
console.log(arr.__proto__);
// outputs methods on prototype inherit from Array()

const obj = [];
console.log(obj.__proto__);
// outputs methods on prototype inherit from Object()

function Actor(name, role) {
  this.name = name;
  this.role = role;
}

function Fighter(name, weapon) {
  // chain constructor
  Actor.call(this, name, "fighter");
  // new Fighter property
  this.weapon = weapon;
}

// Copy prototypes
Fighter.prototype = Object.create(Actor.prototype);

// Add method to Actor prototype
Actor.prototype.sayHello = function() {
  return `The ${this.role} ${this.name} says 'greetings!'.`;
};
// Add method to Fighter prototype
Fighter.prototype.lunge = function() {
  return `${this.name} lunged forward with his ${this.weapon}!`;
};

let minstrel = new Actor("Freddy", "minstrel");
console.log(minstrel.sayHello());
// "The minstrel Freddy says 'greetings!'."

const philip = new Fighter("Philip", "sword");
console.log(philip.lunge());
// "Philip lunged forward with his sword!"

// This sayHello prototype is not inherited unless we link the prototypes like above
console.log(philip.sayHello());
// "The fighter Philip says 'greetings!'."

console.log(philip.lunge())
// "Philip lunged forward with his sword!"

// This sayHello prototype is not inherited unless we link the prototypes like above
console.log(philip.sayHello())
// "The fighter Philip says 'greetings!'."
