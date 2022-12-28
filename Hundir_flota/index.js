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
✅ CELDAS VACÍAS
✅ TÍTULO DE TABLERO
✅ "CONTADOR DE BARCOS" JUGADOR A
✅ "CONTADOR DE BARCOS" JUGADOR B
TODO MENSJE "HAS GANADO"
TODO MENSJE "EMPATE"
*/

//import board.js

// PLAYERS

let playerA = {
    nombre: 'PLAYER A',
    shoot: 0, //Disparos realizados - Cada bucle es un ciclo while
    life: 2,//[LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES], // Cuantos impactos me quedan
    causedB_inherit: [], // Daños causados en B
    _shoots: [] //Coordenadas de disparos realizados
}

let playerB = {
    nombre: 'PLAYER B',
    shoot: 0, //Disparos realizados - Cada bucle es un ciclo while
    life: 2,//[LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES], // hacer un .lenghtCuantos impactos me quedan
    causedA_inherit: [], // Daños causados en A
    _shoots: [] //Coordenadas de disparos realizados


//VARIABLES DE LOS BARCOS, TOCADO Y AGUA
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
let tocado = []
let lifePlayerA = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES]
let lifePlayerB = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES]

//DISPAROS
const FIGURE = ['  💧  ', '  🔥  ']
let shoot = 0;

function next_player(){
    if ((shoot == 0) || (playerA.shoot <= playerB.shoot)) {
        playerA.shoot++;
        return 'A'
    }else{
        playerB.shoot++;
        return 'B'
    }
}

//WIN OR TIE FUNCTIONS

function to_tie() {        //FUNCIÓN EMPATAR
    if (playerA.life > playerB.life) {
        return 'PLAYER  A'
        //console.log('A')
    }
    else if (playerA.life < playerB.life) {
        return 'PLAYER  B'
       // console.log('B')
    }
    else {
        return 'NO WINNER'
        //console.log('TIE: NO WINNER')
    }
}

function to_win() {     //FUNCIÓN GANAR O PERDER
    if (playerA.life == 0){
        return 'PLAYER  B'
        //console.log('B')
    }
    else if (playerB.life == 0){
        return 'PLAYER  A'
        //console.log('A')
    }
    else if (shoot == 100) {
        return to_tie()
        }
}
//TODO hacer un do while del ciclo
// THE GAME
while (shoot < 100 && playerA.life != 0 && playerB.life != 0) {
    if (shoot % 2 == 0){
        console.log("Ronda " + playerA.shoot + " for " + next_player() + "\n" + "==============");
        //function to_shoot();
        to_win();
    } 
    else {
        console.log("Ronda " + playerB.shoot + " for " + next_player() + "\n" + "==============")
        to_win()
    }
    shoot++
}

console.log(
    'And the winnwer is.....' + '\n' +
    '============================='  + '\n' +
    '========= ' + to_win() + ' =========' + '\n' +
    '============================='
)



/*TODO CON UN CALLBACK HACER FUNCION SEGUN LA VIDA DE CADA UNO
let lifeA = playerA.life
let lifeB = playerB.life
function callbaccc(shoot, lifeA, lifeB){
    life A = 0 FIN JUEGO Y SACAR WINNER A
    life B = 0 FIN JUEGO Y SACAR WINNER B
    shoot = 100 FIN JUEGO Y SACAR to_tie()
}
*/




//IMPRESIONES
const LINEA_TITULO = '==================================================='
const SEMILINEA1 = '========='
const SEMILINEA2 = '================='
const SEMILINEA3 = '================' // TODO mejorar para que tenga la misma longitud que RONDA_A y Ronda_B
let n_ronda = ''
const RONDA_A =  'Ronda ' + n_ronda + ' for A' 
const RONDA_B =  'Ronda ' + n_ronda + ' for B'



// ESCRIBIMOS CODIGO
console.log()
console.log(LINEA_TITULO)
console.log(SEMILINEA1 + ' The battleship simulator starts ' + SEMILINEA1) 
console.log(LINEA_TITULO)
console.log()
console.log()

//print_board(board)

console.log(LINEA_TITULO)
console.log(SEMILINEA2 + ' The game starts ' + SEMILINEA2)
console.log(LINEA_TITULO)
console.log()
console.log()

console.log(LINEA_TITULO)
console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)

/*
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

console.log(aleatorioPlayerA)