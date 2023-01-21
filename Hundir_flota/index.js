//LAS IMPORTACIONES  
import usePrinter from './printer.js'
const { printHeading, printLine, print_Grid } = usePrinter()
import game from './game.js'
import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES } from './data.js'
import { gridSize } from './board.js'


//✅ TÍTULO
printHeading('THE BATTTLESHIP SIMULATOR')
console.log('                        By Javier Girón López')
    //Texto con el título
//TODO SETUP DEL JUEGO

    //✅CREAR EL TABLERO DE JUGADOR A
    printLine(`${playerA.name} Game Board`)
    print_Grid(playerA.grid)
    console.log()
    //✅CREAR EL TABLERO DE JUGADOR B
    printLine(`${playerB.name} Game Board`)
    print_Grid(playerB.grid)
    console.log()
        // ✅CREAR LOS BARCOS PARA LOS JUGADORES
        game.setUpGame.shipsToPlayers(playerA)
        game.setUpGame.shipsToPlayers(playerB)
        //console.log(playerB.ships[0].PORTAAVIONES.life)
        //console.log(playerB.ships)
        //COLOCAR LOS BARCOS DE JUGADOR A


        //COLOCAR LOS BARCOS DE JUGADOR B

        game.setUpGame.placeShips(playerB, 0, PORTAAVIONES)

    //MOSTRAR TABLERO COMPLETO JUGADOR A

    //MOSTRAR TABLERO COMPLETO JUGADOR B

//TODO JUEGO COMIENZA

//TODO TITULO DE JUEGO COMIENZA

//REPETICIÓN DE TURNOS 200 DISPAROS (50 POR JUGADOR)
    //TURNO DEL JUGADOR A

    //TURNO JUGADOR B

//✅ JUEGO TERMINA
printHeading('THE BATTTLESHIP SIMULATOR HAS ENDED')
console.log()

//✅ MOSTRAR RESULTADOS
printHeading(`THE WINNER IS: ${game.toWin()}`)