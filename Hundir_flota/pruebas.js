/*DISPARO
let vacio = ['rojo', 'verde', 'azul']
let barco = ['barco1', 'barco2']
let superbarco = ['superbarco1', 'superbarco2']
let board = [vacio, barco, superbarco]
let x = board[Math.floor(Math.random() * board.length)]
let y = board[Math.floor(Math.random() * board.length)]

console.log(board)

console.log(x, y)

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
*/

// FUNCIONES DISPARAR Y ACTUALIZACIÓN DEL ARRAY DE LOS DISPAROS

//TODO ver por qué no identifica el array dentro del array
let madeShoot = [[5, 7], [1, 6], [2, 4], [9, 8], [6, 9], [5, 3], [5, 0], [5, 1], [5, 4], [5, 5], [5, 6], [5, 8], [5, 9]];
let coordShoot = []
console.log(madeShoot)

//FUNCIÓN COORDENADAS DISPARO

function x_Coord(min, max){     //Valor aleatorio entre 1 y 9 para X
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

function coord_Shoot() {                           
    let x = x_Coord(1, 9); //Intervalo entre 1 y 9 para el aleatorio pq las filas tienen un índice 0 = i
    let y = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10
    //Asigno los valores de x e y al array coordShoot
    coordShoot[0] = x;
    coordShoot[1] = y;
}

function update_Shoot(madeShoot, coordShoot) {
    if (madeShoot.indexOf(coordShoot) === -1) { //Este valor no está en el índice del array 
        madeShoot.push(coordShoot);
        console.log('Añado el valor ' + coordShoot + ' a array madeShoot')
    }
    else if (madeShoot.indexOf(coordShoot) > -1) { //este valor está en el índice del array
        console.log('Este disparo ya se ha realizado')
    }
}

coord_Shoot()
update_Shoot(madeShoot, coordShoot)

