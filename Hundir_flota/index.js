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
    //✅CREAR EL TABLERO DE JUGADOR B
    
    // ✅CREAR LOS BARCOS PARA LOS JUGADORES
    game.setUpGame.shipsToPlayers(playerA)
    game.setUpGame.shipsToPlayers(playerB)
    //console.log(playerB.ships[0].PORTAAVIONES.life) // <-- Acceso a life Funcina
    //console.log(playerB.ships[0].PORTAAVIONES.figure) // <-- Acceso a figure funciona
    //console.log(playerB.ships)
    //COLOCAR LOS BARCOS DE JUGADOR A
    //TODO LOS BARCOS SE PISAN
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
    
    //COLOCAR LOS BARCOS DE JUGADOR B
    // TODO LOS BARCOS SE PISAN
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
    
    //MOSTRAR TABLERO COMPLETO JUGADOR A
    printLine(`${playerA.name} Game Board`)
    print_Grid(playerAGrid)
    console.log()
    console.log()
    //MOSTRAR TABLERO COMPLETO JUGADOR B
    printLine(`${playerB.name} Game Board`)
    print_Grid(playerBGrid)

//✅ JUEGO COMIENZA
printHeading('THE BATTTLESHIP SIMULATOR STARTS')
console.log()
game.start()
//REPETICIÓN DE TURNOS 200 DISPAROS (100 POR JUGADOR)

    //TURNO DEL JUGADOR A
        //Disparo:
            //✅ver si se ha realizado --> Ver la función de encontrar elementos de ¿pruebaas2?
                //si se ha realizado, volver a disparar
                //✅si no se ha realizado,
                        //✅añadirlo al Log del jugador
                        //ver si tocado o agua
                            //✅Si agua
                                //✅figurita de agua en tablero enemigo
                            //Si tocado
                                //✅figurita de fuego en tablero enemigo
                                //restar vida al jugador
                                    
                                //función restar vida al barco
                                    //si vida barco = 0 --> mensaje de barco hundido
                                    //si no, nada
                                //nextplayer                              
           
    //TURNO JUGADOR B
        //mismo que A


//✅ JUEGO TERMINA


//✅ MOSTRAR RESULTADOS
