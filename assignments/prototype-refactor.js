/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/

class GameObject {
    constructor(obj) {
      this.createdAt = obj.createdAt;
      this.name = obj.name;
      this.dimensions = obj.dimensions;
    }
    destroy = function(){
      return `${this.name} was removed from the game.`;
    }
  }

class CharacterStats extends GameObject {
  constructor(obj) {
    super(obj);
    this.healthPoints = obj.healthPoints;
  }
  takeDamage = function(){
    return `${this.name} took damage`;
  }
}

class Humanoid extends CharacterStats {
  constructor(obj) {
    super(obj);
    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  greet = function(){
    return `${this.name} offers a greeting in ${this.language}`;
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

class Villain extends Humanoid{
    constructor(obj){
        super(obj)
    }
    sneakAttack = function(obj) {
        if (obj.healthPoints > 0) {
          let damageAmount = Math.floor(
            Math.random() *
              (this.dimensions["length"] *
                this.dimensions["width"] *
                this.dimensions["height"])
          );
          obj.healthPoints -= damageAmount;
          let randomWeapon = Math.floor(Math.random() * this.weapons.length);
          if (obj.healthPoints > 0) {
            console.log(
              `${this.name} attacks ${obj.name} with ${
                this.weapons[randomWeapon]
              } for ${damageAmount} damage! ${obj.name} has ${
                obj.healthPoints
              } health points left!`
            );
          } else {
            console.log(
              `${this.name} attacks ${obj.name} with ${this.weapons[randomWeapon]}! ${
                obj.name
              } has no health points left!`
            );
            console.log(obj.destroy());
          }
        }
      };
}

class Hero extends Humanoid{
    constructor(obj){
        super(obj);
    }
    justiceStrike = function(obj) {
        if (obj.healthPoints > 0) {
          let damageAmount = Math.floor(
            Math.random() *
              (this.dimensions["length"] *
                this.dimensions["width"] *
                this.dimensions["height"])
          );
      
          obj.healthPoints -= damageAmount;
          let randomWeapon = Math.floor(Math.random() * this.weapons.length);
          if (obj.healthPoints > 0) {
            console.log(
              `${this.name} attacks ${obj.name} with ${
                this.weapons[randomWeapon]
              } for ${damageAmount} damage! ${obj.name} has ${
                obj.healthPoints
              } health points left!`
            );
          } else {
            console.log(
              `${this.name} attacks ${obj.name} with ${
                this.weapons[randomWeapon]
              } for ${damageAmount}! ${obj.name} has ${
                obj.healthPoints
              } health points left!`
            );
            console.log(obj.destroy());
          }
        }
      };
}

const demon = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 3,
    width: 5,
    height: 1
  },
  healthPoints: 110,
  name: "Beelzebub",
  team: "HellSpawn",
  weapons: ["Fire Breath", "Black Curse", "Poison Bite"],
  language: "Demoniac"
});

const angel = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 3,
    height: 3
  },
  healthPoints: 100,
  name: "Tyrael",
  team: "Arch Angels",
  weapons: ["Light Sword", "Redemption Prayer", "Fist of Mercy"],
  language: "Demoniac"
});

// window.setInterval(function() {
//   if (angel.healthPoints > 0) {
//     angel.justiceStrike(demon);
//   }
//   if (demon.healthPoints > 0) {
//     demon.sneakAttack(angel);
//   }
//   if (angel.healthPoints < 1 || demon.healthPoints < 1) {
//     clearInterval();
//   }
// }, 1000);
