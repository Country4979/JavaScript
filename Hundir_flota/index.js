/* 

*/
import placesShips from './ship_functions.js'
import usePrinter, { EMPTY, LINEAINFERIOR, LINEAINFERIOR1, LINEAINFERIOR2, LINEA_TITULO, SEMILINEA1, SEMILINEA2, SEMILINEA3 } from './printer.js'

import BARCO, { LANCHA, CRUCERO,  SUBMARINO, BUQUE, PORTAAVIONES, FIGURE_SHOOT,} from './data.js'
import { boardGameGrid, playerAGrid, playerBGrid, game } from './game.js'


const {
    PortaavionesH, PortaavionesV, placePortaaviones,
    placeBuqueH, placeBuqueV, placeBuque,
    placeSubmarinoH, placeSubmarinoV, placeSubmarino,
    placeCruceroH, placeCruceroV, placeCrucero,
    placeLancha
    } = placesShips() 
const { printHeading, printLine, create_Headers, print_Grid } = usePrinter()





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
placePortaaviones(playerAGrid)
// ✅ Colocamos un buqe en el tablero del PlayerA
placeBuque(playerAGrid)

// ✅ Colocamos los 2 submarinos en el tablero del Player A
placeSubmarino(playerAGrid)

// ✅ Colocamos los 3 cruceros en el tablero del Player A
placeCrucero(playerAGrid)

//Colocamos las 3 lanchas en el tablero del playerA
placeLancha(playerAGrid)

//Imprimimos es tablero
print_Grid(playerAGrid)
console.log()
//HACEMOS LO MISMO PARA EL PLAYER B
printLine('This is the Player B boardgame')

placePortaaviones(playerBGrid)
placeBuque(playerBGrid)
placeSubmarino(playerBGrid)
placeCrucero(playerBGrid)
placeLancha(playerBGrid)

//Imprimimos es tablero
print_Grid(playerBGrid)
console.log()

print_Grid(playerBGrid)
//EL JUEGO
game()
//RESULTADO

/*GANADORES
console.log(LINEA_TITULO)
console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)
*/