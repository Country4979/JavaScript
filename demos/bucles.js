let i=1
do {
    console.log('Hola', i)
    i++
} while (i < 10)


const fighters = ["Bud Spencer", "Chuck Norris", "Van Damme"]

//bucle con for desde el principio
for (let i=0; i<fighters.length; i++) {
    const fighter = fighters[i]
    console.log(fighter)
}
//de forma decreciente desde el final
for (let i = fighters.length - 1; i >= 0; i--) { //fighters.lenght === 3, por eso es figters.lenght -1
    const fighter = fighters[i]
    console.log(fighter)
}
//for..in traduce automáticamente a (let i=0; i<fighters.length; i++). Se refiere a la posición.
for(let i in fighters) {
    const fighter = fighters[i]
    console.log(fighter)  
}
// for..of captura directamente el elemento dentro del array. Se refiere al valor.
for(const fighter of fighters) {
    console.log (fighter)
}

let j = 0
while(j > 3) { //OJO. Tenemos que modificar de alguna forma las variables que intervienen en el criterio de evaluación.!!!!
    console.log(j)
    j++ //Asegurarnos que cada bucle es diferente, si no, el bucle es infinito.
}