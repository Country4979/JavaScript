/* 

*/
import { LINEAINFERIOR, LINEAINFERIOR1, LINEAINFERIOR2, LINEA_TITULO, SEMILINEA1, SEMILINEA2, SEMILINEA3 } from './printer.js'
import usePrinter from './printer.js'
import { LANCHA, CRUCERO,  SUBMARINO, BUQUE, PORTAAVIONES, FIGURE_SHOOT, EMPTY } from './data.js'
import { boardGameGrid, playerAGrid, playerBGrid, x, y } from './game.js'
import {
    PortaavionesH, PortaavionesV, placePortaaviones,
    placeBuqueX, placeBuqueV, placeBuque,
    placeSubmarinoX, placeSubmarinoV, placeSubmarino,
    placeCruceroX, placeCruceroV, placeCrucero,
    placeLancha
    } from './ship_functions.js'
const { printHeading, printLine, create_Headers, print_Grid } = usePrinter()
//import board.js




function ship(name,nposition,figure){
    this.name = name
    this.nposition = nposition
    this.img = this.
    this.location = []
}


/*let life = 0;
let playerA = {
    nombre: 'PLAYER A',
    shoot: 0, //Disparos realizados - Cada bucle es un ciclo while
    lifePlayerA: [LANCHA, LANCHA, LANCHA, [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [BUQUE, BUQUE, BUQUE, BUQUE], [PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES]],
    causedB_inherit: [], // Daños causados en B
    shootsA: [] //Coordenadas de disparos realizados
}
let lifeA = PlayerA.lifePlayerA.forEach(function(a) {life += a.length})

let playerB = {
    nombre: 'PLAYER B',
    shoot: 0, //Disparos realizados - Cada bucle es un ciclo while
    lifePlayerB: [LANCHA, LANCHA, LANCHA, [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [BUQUE, BUQUE, BUQUE, BUQUE], [PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES]],   
    causedA_inherit: [], // Daños causados en A
    shootsB: [] //Coordenadas de disparos realizados
}
let lifeB = PlayerB.lifePlayerB.forEach(function(a) {life += a.length})
*/



//FUNCIONES


//GANAR



//MOSTRAR TÍTULOS

printHeading(' The Battleship simulator starts ')
console.log()
printHeading(' This the is board game ')
console.log()

//TABLERO
print_Grid(boardGameGrid)
console.log()

//EL JUEGO COMIENZA
printHeading(' The game starts ')
console.log()

//MOSTRAR TABLERO PLAYER A CON LOS BARCOS
printLine('This is the Player A boardgame')

//Colocar los barcos
// ✅ Colocamos 1 portaaviones en el tablero del PlayerA
placePortaaviones()
// ✅ Colocamos un buqe en el tablero del PlayerA
placeBuque()

// ✅ Colocamos los 2 submarinos en el tablero del Player A
//placeSubmarino()

// ✅ Colocamos los 3 cruceros en el tablero del Player A
placeCrucero()

//Colocamos las 3 lanchas en el tablero del playerA
placeLancha(x, y, LANCHA.figure, playerAGrid)

//Imprimimos es tablero
print_Grid(playerAGrid)
console.log()
//HACEMOS LO MISMO POARA EL PLAYER B
printLine('This is the Player B boardgame')


// ✅ Colocamos 1 portaaviones en el tablero del PlayerA
//placePortaaviones()
// ✅ Colocamos un buqe en el tablero del PlayerA
//placeBuque()

// ✅ Colocamos los 2 submarinos en el tablero del Player A
//placeSubmarino()

// ✅ Colocamos los 3 cruceros en el tablero del Player A
//placeCrucero()

//Colocamos las 3 lanchas en el tablero del playerA
//placeLancha(x, y, LANCHA.figure, myGrid)

print_Grid(playerBGrid)
//CICLOS 0 - 100
//RONDA DE DISPARO

//RESULTADO

/*GANADORES
console.log(LINEA_TITULO)
console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)
*/