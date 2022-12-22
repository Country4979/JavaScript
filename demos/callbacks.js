const legolas = {
    name: 'Legolas',
    attackSpeed: 20,
    attackDamage: 10
}

const aragorn = {
    name: 'Aragorn',
    attackSpeed: 15,
    attackDamage: 15
}

const gimly = {
    name: 'Gimly',
    attackSpeed: 7,
    attackDamage: 20
}

function atacar(personaje, callback) { //   si callback === attackWithSword(personaje)
    let attack = callback(personaje) //     let attack
    console.log(`${personaje.name} ataca con un ataque ${attack.weapon} causando ${attack.damage} de daño a velocidad ${attack.speed}`)
}

function attackWithSword(person) {
    return {
        weapon: 'Sword',
        damage: person.attackDamage + 16,
        speed: person.attackSpeed + 33
    }
}

function attackWithBowAndArrow(person) {
    return {
        weapon: 'Bow & Arrow',
        damage: person.attackDamage + 10,
        speed: person.attackSpeed + 23
    }
}

function attackWithAxe(person) {
    return {
        weapon: 'Axe',
        damage: person.attackDamage + 30,
        speed: person.attackSpeed + 9
    }
}

atacar(gimly, attackWithAxe)
atacar(aragorn, attackWithAxe)
atacar(aragorn, attackWithSword)
atacar({name: 'Saruman'}, attackWithBowAndArrow)