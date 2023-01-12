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
TODO 1x BUQUE (4 CASILLAS)
TODO x3 CRUCEROS (2 CASILLAS)
✅ CELDAS VACÍAS
✅ TÍTULO DE TABLERO
✅ "CONTADOR DE BARCOS" JUGADOR A
✅ "CONTADOR DE BARCOS" JUGADOR B
TODO MENSJE "HAS GANADO"
TODO MENSJE "EMPATE"
*/

//import board.js

//VARIABLES DE LOS BARCOS, TOCADO Y AGUA
const LANCHA = ['🛶']
const CRUCERO = ['🚤']
const SUBMARINO = ['🛳']
const BUQUE = ['🛥']
const PORTAAVIONES = ['🚢']
const VACIO = ['']

// PLAYERS
function Player(name){      //Clase Player con las propiedades name, ships, shoots, life y coordshoot.
    this.name = name
    this.ships = {          //Objeto al que se le añaden los barcos
        lancha1: new this.ship('Lancha', 1, '🛶'),
        lancha2: new this.ship('Lancha', 1, '🛶'),
        lancha3: new this.ship('Lancha', 1, '🛶'),

        crucero1: new this.ship('Crucero', 2, '🚤'),
        crucero2: new this.ship('Crucero', 2, '🚤'),
        crucero3: new this.ship('Crucero', 2, '🚤'),

        submarino1: new this.ship('Submarino', 3, '🛳'),
        submarino2: new this.ship('Submarino', 3, '🛳'),

        buque: new this.ship('Buque', 4, '🛥'),

        portaaviones: new this.ship('Portaavines', 5, '🚢')
    }
    this.shoots = 0,        //Disparos realizados por el jugador
    this.life = ships.lancha1[1] + this.ships.lancha2[1] + ships.lancha3[1] + this.ships.crucero1[1] + this.ships.crucero2[1] + this.ships.crucero3[1] + this.ships.submarino1[1] + this.ships.submarino2[1] + this.ships.buque[1] + this.ships.portaaviones[1]
    this.coordShoot = []    //Coordenadas del disparo
    this.coordAllShoots = []    //Todas las coordenadas para no repetir el disparo
}

function ship(name,nposition,figure){
    this.name = name
    this.nposition = nposition
    this.img = this.
    this.location = []
}

let p = new Player('Player A')
console.log(p.ships)
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
//DISPAROS
const FIGURE = ['  💧  ', '  🔥  '];
let shoot = 0;

//FUNCIÓN NEXT_PLAYER
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
    if (lifeA > lifeB) {
        return 'PLAYER  A'
        //console.log('A')
    }
    else if (lifeA < lifeB) {
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

//TODO hacer un do while del ciclo?
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


//FUNCIONES

// Para elegir un barco al azar: 
const aleatorioPlayerA = lifePlayerA[Math.floor(Math.random() * lifePlayerA.length)]

//GANAR

function the_winner () {
    switch (j=25){
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
}

function to_win () {
    if (tocado_A = lenght_total) {
        console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)
    }
}

console.log(aleatorioPlayerA)
/*
ORDEN PARA PRIMERA IMPRESION

TITULOS

MOSTRAR TABLERO PLAYER A CON LOS BARCOS
    portaaviones
    crucero
    submarino1
    submarino2
    submarino3
    barquito1
    barquito2
    barquito3
    lancha1
    lancha2
    lancha3

LO MISMO PLAYER B

CICLOS 0 - 100
RONDA DE DISPARO

RESULTADO

GANADORES
*/