//this class provides a way to generate correct coordinates in an Earth-like map
class LatLng {
    //this receives the lat and long so it can be validated and returned in an object
    constructor(lat, lng) {
        //this validates the passed lat and long so we enforce
        //valid objects only!!
        if (lat < -90 || lat > 90) throw new Error("wrong latitude")
        if (lng < -180 || lng > 180) throw new Error("wrong longitude")

        //if we have reached this point, that means the lat and long are correct
        
        //assigment to an empty object specified by the keyword 'this'
        this.lat = lat
        this.lng = lng

        //here we have an implicit return statement which returns an object like
        // {
        //     lat: 44, 
        //     lng: 23
        // }
    }
}

//this is a base class for every character in my game, be it an elf, wizard or 
//anything else

//this class defines base properties and methods for every single character
class GameCharacter {
    constructor(name, latLong){
        //this is a collection of properties for every single character
        this.name = name
        this.lifePoints = 100
        this.location = latLong
    }

    //this method is inherited by every single game character in my game
    receiveHit(strength) {
        console.log(`My name is ${this.name} and I have lost ${strength} points of life`)
        this.lifePoints -= strength

        //here we can use this so invoke a method like die() which belongs to this class
        if (this.lifePoints <= 0) this.die()
    }

    //this method is inherited by every single game character in my game
    die() {
        //the keyword 'this' here means the current object we are in
        console.log("generic die!" + this.name)
    }
}

//this Warrior class inherits from GameCharacter some of its properties and methods
//thanks to the extends keyword
class Warrior extends GameCharacter {
    constructor(name, swordType, latLong) {
        //here we call to the super constructor
        super(name, latLong)
        //you can also delete generic properties but be careful, you might
        //be incurring in an error for some methods needing this generic value
        //delete this.name

        //this is a specific property of Warriors (elves don't have a sword)
        this.swordType = swordType
    }

    attackWithSword() {
        console.log(`my name is ${this.name} and I am using my spear`)
    }
}

class Elf extends GameCharacter {
    constructor(name, armorType, latLong) {
        super(name, latLong)
        this.armorType = armorType
    }

    shootArrow() {
        console.log(`i am shooting an arrow, and my name is ${this.name}`)
    }

    //die is now defined locally, so it wins to the GameCharacter die method
    //if we didn't write the die method here, you would invoke the die super method
    die() {
        console.log("die from elf with special things that happen when an elf dies")
        //this is optional, i can call the super (GameCharacter) die method
        super.die()
    }
}

//should you want to create an instance of each class, you can do this
//remember that elf10 and warrior1000 are called technically instances
//elf10 is an instance of Elf class
//warrior1000 is an instance of Warrior class
//elf10 and warrior1000 are of type Elf and type Warrior, therefore 
//subtypes of GameCharacter
//same as Human, Dog, Cat as subtypes of Mammal
//var elf10 = new Elf("Legolas the Elf", "gold", new LatLng(10, 20))
//var warrior1000 = new Warrior("Conan the warrior", "tizona", new LatLng(10, 20))