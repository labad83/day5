var elf = {
    lifePoints: 100,
    armorType: "gold",
    location: {
        lat: 10,
        lng: 20
    },
    shootArrow: function () {
        console.log("i am shooting an arrow")
    },
    receiveHit: function (strength) {
        this.lifePoints -= strength

        if (this.lifePoints <= 0)   this.die()
    },
    moveTo: function (latLong) {

    },
    attack: function () {

    },
    die: function () {
        console.log("this character is over")
    }
}

console.log(elf.lifePoints)
elf.shootArrow()
elf.receiveHit(20)
elf.receiveHit(20)
elf.receiveHit(20)
elf.receiveHit(20)
elf.receiveHit(20)

console.log(elf.lifePoints)