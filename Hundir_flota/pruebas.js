/*DISPARO
let vacio = ['rojo', 'verde', 'azul']
let barco = ['barco1', 'barco2']
let superbarco = ['superbarco1', 'superbarco2']
let board = [vacio, barco, superbarco]
let x = board[Math.floor(Math.random() * board.length)]
let y = board[Math.floor(Math.random() * board.length)]

console.log(board)

console.log(x, y)*/

//JUGADORES
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
    life: 55,//[LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES], // hacer un .lenghtCuantos impactos me quedan
    causedA_inherit: [], // Daños causados en A
    _shoots: [] //Coordenadas de disparos realizados
}

//DISPAROS
const FIGURE_SHOOT = ['  💧  ', '  🔥  ']

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

// JUEGO
// TODO HACER QUE MIRE QUIEN GANA EN CADA RONDA Y QUE PARE CUANDO CUALQUIER LIFEPLAYER.LIFE SEA CERO
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
