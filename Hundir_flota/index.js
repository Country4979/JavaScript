//LAS IMPORTACIONES  
import usePrinter from './printer.js'
const { printHeading, printLine, print_Grid } = usePrinter()
import game from './game.js'
import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES } from './data.js'
import { EMPTY, gridSize, playerAGrid, playerBGrid } from './board.js'


//✅ TÍTULO
printHeading('THE BATTTLESHIP SIMULATOR')
console.log('                        By Javier Girón López')
    //Texto con el título
//TODO SETUP DEL JUEGO

    //✅CREAR EL TABLERO DE JUGADOR A
    printLine(`${playerA.name} Game Board`)
    //print_Grid(playerA.grid)
    console.log()
    //✅CREAR EL TABLERO DE JUGADOR B
    console.log()
    // ✅CREAR LOS BARCOS PARA LOS JUGADORES
    game.setUpGame.shipsToPlayers(playerA)
    game.setUpGame.shipsToPlayers(playerB)
    //console.log(playerB.ships[0].PORTAAVIONES.life) // <-- Acceso a life Funcina
    //console.log(playerB.ships[0].PORTAAVIONES.figure) // <-- Acceso a figure funciona
    //console.log(playerB.ships)
    //COLOCAR LOS BARCOS DE JUGADOR A
    
    
    //COLOCAR LOS BARCOS DE JUGADOR B 
    //TODO meter todo esto en una función
        //mejorar esa función para que coloque todos los barcos ella sola
    game.setUpGame.placeShips(playerB, playerB.ships[0].PORTAAVIONES, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[1].BUQUE, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[2].SUBMARINO, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[3].SUBMARINO, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[4].CRUCERO, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[5].CRUCERO, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[6].CRUCERO, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[7].LANCHA, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[8].LANCHA, playerBGrid)
    //game.setUpGame.placeShips(playerB, playerB.ships[9].LANCHA, playerBGrid)
    printLine(`${playerB.name} Game Board`)
    
    
  
    // console.log(playerB)
    
    //MOSTRAR TABLERO COMPLETO JUGADOR A
    
    //MOSTRAR TABLERO COMPLETO JUGADOR B
    print_Grid(playerBGrid)

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