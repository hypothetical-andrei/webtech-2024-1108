class Robot {
    constructor (name) {
        this.name = name
    }
    move () {
        console.log(`${this.name} is moving`)
    }
}

const r0 = new Robot('type0')
r0.move()

class Weapon {
    constructor (name) {
        this.name = name
    }
    fire () {
        console.log(`${this.name} is firing`)
    }
}

class CombatRobot extends Robot {
    constructor (name) {
        super(name)
        this.weapons = []
    }
    addWeapon (w) {
        this.weapons.push(w)
    }
    fire () {
        this.weapons.forEach(w => {
            w.fire()
        })
    }
}

let r1 = new CombatRobot('type1')
r1.addWeapon(new Weapon('pew pew laser'))
r1.fire()
r1.move()

Robot.prototype.fly = function (distance) {
    console.log(`${this.name} flies ${distance}`)
}

r1.fly(1000)