const LANCHA1 = ['🛶']
const LANCHA2 = ['🛶']
const LANCHA3 = ['🛶']
const CRUCERO1 = ['🚤', '🚤']
const CRUCERO2 = ['🚤', '🚤']
const CRUCERO3 = ['🚤', '🚤']
const SUBMARINO1 = ['🛳', '🛳', '🛳']
const SUBMARINO2 = ['🛳', '🛳', '🛳']
const SUBMARINO3 = ['🛳', '🛳', '🛳']
const BUQUE = ['🛥', '🛥', '🛥', '🛥']
const PORTAAVIONES = ['🚢', '🚢', '🚢', '🚢', '🚢']
const VACIO = ['']
const AGUA = ['💧']
const TOCADO = ['🔥']
let tocado = []
let lifePlayerA = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES];
let totalLifePlayerA = lifePlayerA.map(elem => elem.length)
let totalPlayerA = totalLifePlayerA.reduce((a, b) => a + b, 0);

//Funciones para controlar la vida de cada jugador

function playerA_fleet() {
    totalLifePlayerA = lifePlayerA.map(elem => elem.length);    //mapea la variable lifePlayerA y devuelve los elementos de cada array
    totalPlayerA = totalLifePlayerA.reduce((a, b) => a + b, 0);  //Suma los elementos del array totalLifePlayerA
    console.log(totalPlayerA)
    return true
}

function playerB_fleet() {
    totalLifePlayerB = lifePlayerB.map(elem => elem.length);    //mapea la variable lifePlayerA y devuelve los elementos de cada array
    totalPlayerB = totalLifePlayerB.reduce((a, b) => a + b, 0);  //Suma los elementos del array totalLifePlayerA
    console.log(totalPlayerB)
    return true
}

//PRUEBAS
console.log(totalLifePlayerA)
console.log(playerA_fleet())
PORTAAVIONES.pop()
SUBMARINO3.pop()
console.log(playerA_fleet())
console.log(totalPlayerA)
