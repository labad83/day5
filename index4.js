function LatLng(lat, lng) {
    if (lat < -90 || lat > 90) throw new Error("wrong latitude")
    if (lng < -180 || lng > 180) throw new Error("wrong longitude")

    this.lat = lat
    this.lng = lng
}

function Elf(name, armorType, latLong) {
    this.name = name
    this.lifePoints = 100
    this.armorType = armorType
    this.location = latLong

    this.newAbility = function () {

    }
}

Elf.prototype.shootArrow = function () {
    console.log(`i am shooting an arrow, and my name is ${this.name}`)
}

Elf.prototype.receiveHit = function (strength) {
    console.log(`My name is ${this.name} and I have lost ${strength} points of life`)
    this.lifePoints -= strength

    if (this.lifePoints <= 0) this.die()
}

Elf.prototype.moveTo = function (latLong) {

}

Elf.prototype.attack = function () {

}

Elf.prototype.die = function () {
    console.log("this character is over")
}

var elf1 = new Elf("dan", "silver", new LatLng(10, -20))
var elf2 = new Elf("legolas", "silver", new LatLng(20, -20))
console.log(elf1)
console.log(elf1.location.lng)
elf1.shootArrow()
elf2.shootArrow()
// console.log(typeof elf1)
