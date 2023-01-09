/*DISPARO
let vacio = ['rojo', 'verde', 'azul']
let barco = ['barco1', 'barco2']
let superbarco = ['superbarco1', 'superbarco2']
let board = [vacio, barco, superbarco]
let x = board[Math.floor(Math.random() * board.length)]
let y = board[Math.floor(Math.random() * board.length)]

console.log(board)

console.log(x, y)
*/
//TODO  Este funciona, pero hay verlo bien para cada tipo de barco
const LANCHA = ['🛶']
const CRUCERO = ['🚤', '🚤']
const SUBMARINO = ['🛳', '🛳', '🛳']
const BUQUE = ['🛥', '🛥', '🛥', '🛥']
const PORTAAVIONES = ['🚢','🚢', '🚢', '🚢', '🚢']
const EMPTY = ' -  |'
//
//JUGADORES
/*
let playerA = {
    name: 'PLAYER A',
    lancha1: LANCHA,
    lancha2: LANCHA,
    lancha3: LANCHA,
    crucero1: CRUCERO,
    crucero2: CRUCERO,
    crucero3: CRUCERO,
    submarino1: SUBMARINO,
    submarino2: SUBMARINO,
    submarino3: SUBMARINO,
    buque1: BUQUE,
    portaaviones1: PORTAAVIONES,
    shoot: 0, //Disparos realizados - Cada bucle es un ciclo while
}
let lifePlayerA = [
    playerA.lancha1.length, playerA.lancha2.length, playerA.lancha3.length, 
    playerA.crucero1.length, playerA.crucero2.length, playerA.crucero3.length,
    playerA.submarino1.length, playerA.submarino2.length, playerA.submarino3.length,
    playerA.buque1.length,
    playerA.portaaviones1.length]

let life = () => playerA.lancha1.length

console.log(playerA.crucero1)
console.log(life)
console.log()

playerA.crucero1.splice(0, 1)
console.log(playerA.crucero1.length)
console.log(playerA.crucero1)
console.log()

playerA.lancha1.splice(0, 1)
console.log(playerA.lancha1.length)
console.log(playerA.lancha1)
console.log()

console.log(life())
*/


/*let lifePlayerA = 
[playerA.lancha1[0], playerA.lancha2[0], playerA.lancha3[0], 
    playerA.crucero1[0], playerA.crucero1[1], playerA.crucero1[0], playerA.crucero1[1], playerA.crucero1[0], playerA.crucero1[1],
    playerA.submarino1[0], playerA.submarino1[1], playerA.submarino1[2],
    playerA.submarino2[0], playerA.submarino2[1], playerA.submarino2[2],
    playerA.submarino3[0], playerA.submarino3[1], playerA.submarino3[2],
    playerA.buque1[0], playerA.buque1[1], playerA.buque1[2], playerA.buque1[3],
    playerA.portaaviones1[0], playerA.portaaviones1[1], playerA.portaaviones1[2], playerA.portaaviones1[3], playerA.portaaviones1[4]]*/
//VIDA BARCOS
/*playerA.lifePlayerA.forEach(vida_barcos)
function vida_barcos() {
    console.log(playerA.lifePlayerA)
}*/


/*
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

/* FUNCIONES DISPARAR Y ACTUALIZACIÓN DEL ARRAY DE LOS DISPAROS
const LANCHA = ['🛶']
const CRUCERO = ['🚤']
const SUBMARINO = ['🛳']
const BUQUE = ['🛥']
const PORTAAVIONES = ['🚢']
//celda vacía = ' -  |'*/


/*
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
console.log(madeShoot)
*/


const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];
/*
//VARIABLES DE LOS BARCOS (es necesario?)
const LANCHA = ['🛶']
const CRUCERO = ['🚤']
const SUBMARINO = ['🛳']
const BUQUE = ['🛥']
const PORTAAVIONES = ['🚢']
const VACIO = [" '' "] // Celda vacía
let lifePlayerA = [LANCHA, LANCHA, LANCHA, [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [BUQUE, BUQUE, BUQUE, BUQUE], [PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES]]
let lifePlayerB = [LANCHA, LANCHA, LANCHA, [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [BUQUE, BUQUE, BUQUE, BUQUE], [PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES]]
*/


//DISPAROS
const FIGURE = ['  💧  ', '  🔥  '];
let shoot = 0;



//EL TABLERO

let gridSize = 10;
let myGrid = create_Grid(gridSize);
let enemyGrid = create_Grid(gridSize);
let x = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10
let y = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10;

//print_Grid(enemyGrid, true);
//print_Grid(myGrid)  // Omitimos el segundo parámetro porque enemyGrid será false

function create_Grid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
        grid[i][j] = ' -  |';
        }
    }
    return grid
}

//Imprinmir grid

function print_Grid(grid, isEnemy = false) {   // Imprimimos el tablero metiendo el parámetro tablero y si es el nuestro o el del enemigo. En el primero podemos ver los barcos y en el segundo, no
    const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
    const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
    const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];
    const headers = create_Headers(grid.length);
    console.log(lineaInferior.join('_'))
    console.log(lineaInferior1.join('|'))
    console.log(headers);
    console.log(lineaInferior2.join('|'))
    for (let i = 0; i < grid.length; i++) {
        let rowStr = ' |    ' + i + '    | ';       // Los cabeceros de las filas
        for (let cell of grid[i]) {
            if (isEnemy && cell == '0') {
                rowStr += ' - '
                
            } else {
                rowStr += cell + ' ';
            }
        }
        console.log(lineaInferior1.join('|'))
        console.log(rowStr);
        console.log(lineaInferior2.join('|'))
    }
}

function create_Headers(size) {     //Los cabeceros de las columnas
    let result = ' |  ';
    for (let i = 65; i < size + 65; i++) {
        result += String.fromCharCode(i) + '  |  ';
    }
    return ' | (INDEX)' + result
}

function place_Lancha(x, y, c, grid) {  //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    for (let i = 0; i < 3; i++){        //Iteramos 3 veces para colocar 1 lancha cada vez.
        let x1  = Math.floor(Math.random() * 10) ;
        let y1 = Math.floor(Math.random() * 10);
        x = x1;
        y = y1;
        grid[y][x] = c;
    }
}

function random(min, max) {                     //Función para generar un número aleattorio entre dos números
    return Math.floor((Math.random() * (max - min + 1)) + min)
}


//FUNCIONES DEL PORTAAVIONES  --> FUNCIONA
function Portaaviones_H(x, y, c, grid) {        //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let x1  = random(0, 5);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);
    x = x1;
    y = y1;
    for (let i = 0; i < 5; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            x++;
        }
}

function Portaaviones_V(x, y, c, grid) {        //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let y1  = random(0, 5);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let x1 = Math.floor(Math.random() * 10);
    x = x1;
    y = y1;
    for (let i = 0; i < 5; i++)
        if (grid[y][x] = ' -  |' && y < 10 && y >= 0){ //Obligo a colocarlo entre el 0 y el 10
            grid[y][x] = c;
            y++;
        }
}

function place_Portaaviones(){
    let a = random(0, 10)
    if (a % 2 == 0) {
        Portaaviones_H(x, y,'🚢  |', myGrid)
    }
    else{
        Portaaviones_V(x, y,'🚢  |', myGrid)
    }
}

//FUNCIONES DEL BUQUE  --> NO FUNCIONA --> PISAR BARCO 
function Buque_H(x, y, c, grid) {    
    let x1  = random(0, 6);                         //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco en el eje X.
    let y1 = Math.floor(Math.random() * 10);        //Obtengo un número aleatorio entre 0 y 10 para el eje Y.
    x = x1;
    y = y1;
    for (let i = 0; i < 4; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            x++;
        }
}

function Buque_V(x, y, c, grid) {    
    let y1 = random(0, 6);                         //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco en el eje Y.
    let x1 = Math.floor(Math.random() * 10);        //Obtengo un número aleatorio entre 0 y 10 para el eje X.
    x = x1;
    y = y1;
    for (let i = 0; i < 4; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            y++;
        }
}

function place_Buque(){
    let a = random(0, 10)
    if (a % 2 == 0) {
        Buque_H(x, y,' 🛥  |', myGrid)
    }
    else{
        Buque_V(x, y,' 🛥  |', myGrid)
    }
}

//FUNCIONES SUBMARINOS --> NO FUNCIONAN --> NO PISAR OTROS BARCOS

function submarino_H(x, y, c, grid) {           //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let x1  = random(0, 7);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);
    x = x1;
    y = y1;
    for (let i = 0; i < 3; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            x++;
        }
}

function submarino_V(x, y, c, grid) {           //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let y1 = random(0, 7);                         //Obtengo un número aleatorio entre 0 y 67 que es el espacio máximo en el que puede colocarse este barco en el eje Y.
    let x1 = Math.floor(Math.random() * 10);        //Obtengo un número aleatorio entre 0 y 10 para el eje X.
    x = x1;
    y = y1;
    for (let i = 0; i < 3; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            y++;
        }
}

function place_Submarino(){
    let a = random(0, 10)
    for(let i = 0; i < 3; i++){
        if (a % 2 == 0) {
            submarino_H(x, y,' 🛳  |', myGrid)
        }
        else{
            submarino_V(x, y,' 🛳  |', myGrid)
        }
    }
}

//FUNCIONES CRUCERO --> NO FUNCIONAN --> NO PISAR OTROS BARCOS

function crucero_H(x, y, c, grid) {           //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let x1  = random(0, 7);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);
    x = x1;
    y = y1;
    for (let i = 0; i < 3; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            x++;
        }
}

function crucero_V(x, y, c, grid) {           //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let y1 = random(0, 7);                         //Obtengo un número aleatorio entre 0 y 67 que es el espacio máximo en el que puede colocarse este barco en el eje Y.
    let x1 = Math.floor(Math.random() * 10);        //Obtengo un número aleatorio entre 0 y 10 para el eje X.
    x = x1;
    y = y1;
    for (let i = 0; i < 3; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            y++;
        }
}

function place_Crucero(){
    let a = random(0, 10)
    for (let i = 0; i < 3; i++){
        if (a % 2 == 0) {
            crucero_H(x, y,'🚤  |', myGrid)
        }
        else{
            crucero_V(x, y,'🚤  |', myGrid)
        }
    }
}

function prueba_H() {     //Me dice si se puede colocar un submarino ahí = true
    let x1 = random(0, 7);
    let y1 = Math.floor(Math.random() * 10);
    var indices = [];
    let cosa = myGrid[x1]
    var idx = cosa.indexOf(' -  |');
    while (idx != -1) {     //Devuelve un array con las posiciones libres
      indices.push(idx);
      idx = cosa.indexOf(' -  |', idx + 1);
    }
    console.log(indices);
    for (let i = 0;i < 3; i++)
    if ((indices[i] + 1) == indices[i+1] && (indices[i] + 2) == indices[i+2]){
        console.log('Coloca el barco aquí')
        return true
    }
    else {
        console.log('No se puede colocar el barco aquí')
        return false
    }   
}
//Colocar los barcos
place_Portaaviones() // Colocamos 1 portaaviones en el tablero del PlayerA
//place_Buque()   //Colocamos un buqe en el tablero del PlayerA
place_Submarino()  //Colocamos 3 submarinos en el tablero del PlayerA
place_Crucero() //Colocamos 3 cruceros en el trablero del PlayerA
place_Lancha(x, y, '🛶  |', myGrid) //Colocamos una lancha en el tablero del playerA
print_Grid(myGrid)
console.log(prueba_H())

