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
    totalA_inherit: [], // Cuantos impactos me quedan
    causedB_inherit: [] // Daños causados en B
}

let playerB = {
    nombre: 'PLAYER B',
    shoot: 0, //Disparos realizados - Cada bucle es un ciclo while
    total_inherit: [], // Cuantos impactos me quedan
    causedA_inherit: [] // Daños causados en A
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

// JUEGO
while (shoot < 6) {
    if (shoot % 2 == 0){
        console.log("Ronda " + playerA.shoot + " for " + next_player() + "\n" + "==============");
    } else {
        console.log("Ronda " + playerB.shoot + " for " + next_player() + "\n" + "==============")
    }
    shoot++
}
