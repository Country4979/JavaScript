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
    //console.log(playerA.ships)
    //COLOCAR LOS BARCOS
    //TODO LOS BARCOS SE PISAN
    //TODO meter todo esto en una función
    //mejorar esa función para que coloque todos los barcos ella sola
    game.setUpGame.playerShip(playerA, playerAGrid)
    //game.setUpGame.playerShip(playerB, playerBGrid)


    
    //MOSTRAR TABLERO COMPLETO JUGADOR A
    printLine(`${playerA.name} Game Board`)
    print_Grid(playerAGrid)
    console.log(playerA.ships[0].PORTAAVIONES.position)
    /*console.log(playerA.ships[1].BUQUE.position)
    console.log(playerA.ships[2].SUBMARINO.position)
    console.log(playerA.ships[3].SUBMARINO.position)
    console.log(playerA.ships[4].CRUCERO.position)
    console.log(playerA.ships[5].CRUCERO.position)
    console.log(playerA.ships[6].CRUCERO.position)
    console.log(playerA.ships[7].LANCHA.position)
    console.log(playerA.ships[8].LANCHA.position)
    console.log(playerA.ships[9].LANCHA.position)*/

    console.log()
    //MOSTRAR TABLERO COMPLETO JUGADOR B
    //printLine(`${playerB.name} Game Board`)
    //print_Grid(playerBGrid)

//✅ JUEGO COMIENZA
printHeading('THE BATTTLESHIP SIMULATOR STARTS')
console.log()
//game.start()
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
