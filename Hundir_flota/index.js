/* 
✅ ENUNCIADO ARRANQUE JUEGO 
✅ ENUNCIADO "JUEGO COMIENZA"
TODO JUGADOR A
TODO JUGADOR B
TODO TEXTO Ownboard
TODO PANTALLA JUGADOR A
TODO PANTALLA JUGADOR B
TODO contador RONDA PARA A
TODO contador RONDA PARA B
TODO CONTADOR DE DISPAROS PARA JUGADOR A
TODO CONTADOR DE DISPAROS PARA JUGADOR B
TODO DISPAROS DONDE APUNTA
TODO RESULTADO DEL DISPARO
✅ constante LANCHA
✅ constante CRUCERO
✅ constante SUBMARINO
✅ constante BUQUE
✅ constante PORTAAVIONES
✅ constante VACÍO
✅ constante AGUA
✅ constante TOCADO
TODO x2 SUBMARINOS (3 CASILLAS)
TODO x3 LANCHAS (1 CASILLA)
TODO 1x PORTAAVIONES (5 CASILLAS)
TODO 1x BUQUE (4 CASILLAS)
TODO x3 CRUCEROS (2 CASILLAS)
TODO 4 TABLEROS
TODO 10 FILAS CON INICIO EN LETRAS
TODO COLUMNAS CON INICIO EN NÚMERO
TODO CELDAS VACÍAS
TODO TÍTULO DE TABLERO
TODO "CONTADOR DE BARCOS" JUGADOR A
TODO "CONTADOR DE BARCOS" JUGADOR B
TODO MENSJE "HAS GANADO"
TODO MENSJE "EMPATE"
*/

//VARIABLES DE LOS BARCOS Y TOCADO, HUNDIDO Y AGUA
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
let lifePlayerA = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES]
let lifePlayerB = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES]

//const lenght_total = 3 * LANCHA.length + 3 * CRUCERO.length + 2 * SUBMARINO.length + BUQUE.length + PORTAAVIONES.length  //tocados totales para ganar

//JUGADORES
let playerA = {
    nombre = 'PLAYER A',
    fire = [], //Disparos realizados - Cada bucle es un ciclo while
    totalA_inherit = lenght_total - daños // Cuantos impactos me quedan
    causedB_inherit = [] // Daños causados en B
}

let playerB = {
    nombre = 'PLAYER B',
    fire = [], //Disparos realizados - Cada bucle es un ciclo while
    total_inherit = lenght_total - daños // Cuantos impactos me quedan
    causedA_inherit = [] // Daños causados en A
}

const EMPATE = '¡EMPATE!'


let tocado_A = 24
let tocado_B = []
let winner = the_winner()

//VARIABLES VICTORIA



//IMPRESIONES
const LINEA_TITULO = '==================================================='
const SEMILINEA1 = '========='
const SEMILINEA2 = '================='
const SEMILINEA3 = '================' // TODO mejorar para que tenga la misma longitud que RONDA_A y Ronda_B
let n_ronda = ''
const RONDA_A =  'Ronda ' + n_ronda + ' for A' 
const RONDA_B =  'Ronda ' + n_ronda + ' for B'
//impresion ronda A
console.log(RONDA_A)
console.log(SEMILINEA3)
//impresion ronda B
console.log(RONDA_B)
console.log(SEMILINEA3)


// ESCRIBIMOS CODIGO
console.log()
console.log(LINEA_TITULO)
console.log(SEMILINEA1 + ' The battleship simulator starts ' + SEMILINEA1) 
console.log(LINEA_TITULO)
console.log()
console.log()

console.log(LINEA_TITULO)
console.log(SEMILINEA2 + ' The game starts ' + SEMILINEA2)
console.log(LINEA_TITULO)
console.log()
console.log()

console.log(LINEA_TITULO)
console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)


//FUNCIONES

// Para elegir un barco al azar: 
const aleatorioPlayerA = lifePlayerA[Math.floor(Math.random() * lifePlayerA.length)]

//GANAR

function the_winner () {
    switch ()
    case (playerA.totalA_inherit > playerB.totalB_inherit):
        winner = playerA.nombre;
        break
    case (playerA.totalA_inherit < playerB.totalB_inherit):
        winner = playerB.nombre;
        break
    default:
        winner = EMPATE;
        break;
}

function to_win () {
    if (tocado_A = lenght_total) {
        console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)
    }
}