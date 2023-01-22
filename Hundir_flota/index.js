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
   
    // ✅CREAR LOS BARCOS PARA LOS JUGADORES
    game.setUpGame.shipsToPlayers(playerA)
    game.setUpGame.shipsToPlayers(playerB)
    //console.log(playerB.ships[0].PORTAAVIONES.life) // <-- Acceso a life Funcina
    //console.log(playerB.ships[0].PORTAAVIONES.figure) // <-- Acceso a figure funciona
    //console.log(playerB.ships)
    //COLOCAR LOS BARCOS DE JUGADOR A
      //TODO meter todo esto en una función
        //mejorar esa función para que coloque todos los barcos ella sola
    game.setUpGame.placeShips(playerA, playerA.ships[0].PORTAAVIONES, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[1].BUQUE, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[2].SUBMARINO, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[3].SUBMARINO, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[4].CRUCERO, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[5].CRUCERO, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[6].CRUCERO, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[7].LANCHA, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[8].LANCHA, playerAGrid)
    game.setUpGame.placeShips(playerA, playerA.ships[9].LANCHA, playerAGrid)
    
    //MOSTRAR TABLERO COMPLETO JUGADOR A
    print_Grid(playerAGrid)
    console.log()
    //COLOCAR LOS BARCOS DE JUGADOR B 
    //TODO meter todo esto en una función
        //mejorar esa función para que coloque todos los barcos ella sola
    game.setUpGame.placeShips(playerB, playerB.ships[0].PORTAAVIONES, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[1].BUQUE, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[2].SUBMARINO, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[3].SUBMARINO, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[4].CRUCERO, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[5].CRUCERO, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[6].CRUCERO, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[7].LANCHA, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[8].LANCHA, playerBGrid)
    game.setUpGame.placeShips(playerB, playerB.ships[9].LANCHA, playerBGrid)
   
    //MOSTRAR TABLERO COMPLETO JUGADOR B
    printLine(`${playerB.name} Game Board`)
    print_Grid(playerBGrid)

//TODO JUEGO COMIENZA

//TODO TITULO DE JUEGO COMIENZA

//REPETICIÓN DE TURNOS 200 DISPAROS (100 POR JUGADOR)
    //TURNO DEL JUGADOR A
        //Disparo:
        //game.toShoot(playerA)
            //random x e y ¿e igualarlo a playerAshoot?
            //ver si se ha realizado --> Ver la función de encontrar elementos de ¿pruebaas2?
                //si se ha realizado, volver a disparar
                //si no se ha realizado,
                        //añadirlo al Log del jugador
                        //ver si tocado o agua
                            //Si agua
                                //figurita de agua en ambos tableros
                                //función nextplayer
                            //Si tocado
                                //figurita de fuego en ambos tableros
                                //restar vida al jugador
                                    
                                //función restar vida al barco
                                    //si vida barco = 0 --> mensaje de barco hundido
                                    //si no, nada
                                //nextplayer                              
           
    //TURNO JUGADOR B
        //mismo que A


//✅ JUEGO TERMINA
printHeading('THE BATTTLESHIP SIMULATOR HAS ENDED')
console.log()

//✅ MOSTRAR RESULTADOS
//printHeading(`THE WINNER IS: ${game.toWin()}`)