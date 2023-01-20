//LAS IMPORTACIONES  
import usePrinter from './printer.js'
const { printHeading, printLine, create_Headers, print_Grid } = usePrinter()
import { game } from './game.js'
import { BARCO, PLAYER} from './data.js'


//✅ TÍTULO
printHeading('THE BATTTLESHIP SIMULATOR')
console.log('                        By Javier Girón López')
    //Texto con el título
//TODO SETUP DEL JUEGO
    //game.setUp
        //CREAR JUGADOR A

        //CREAR JUGADRO B

        //CREAR EL TABLERO DE JUGADOR A

        //CREAR EL TABLERO DE JUGADOR B

        //COLOCAR LOS BARCOS DE JUGADOR A

        //COLOCAR LOS BARCOS DE JUGADOR B

        //MOSTRAR TABLERO JUGADOR A

        //MOSTRAR TABLERO JUGADOR B

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