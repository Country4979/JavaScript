
class BARCO {
    constructor (figure, length, firstPosition, lastposition) {
        this.figure = figure;
        this.length = length;
        this.firstPosition = firstPosition;
        this.lastPosition = lastposition;
    }
}
const LANCHA = new BARCO('🛶  |', 1,['x0', 'y0'], ['x1', 'y1'])
const LANCHA1 = new BARCO('🛶  |', 1,['x0', 'y0'], ['x1', 'y1'])
const LANCHA2 = new BARCO('🛶  |', 1, ['x0', 'y0'], ['x1', 'y1'])
const LANCHA3 = new BARCO('🛶  |', 1, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO1 = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO2 = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO3 = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const SUBMARINO = new BARCO(' 🛳  |', 3, ['x0', 'y0'], ['x1', 'y1'])
const SUBMARINO1 = new BARCO(' 🛳  |', 3, ['x0', 'y0'], ['x1', 'y1'])
const SUBMARINO2 = new BARCO(' 🛳  |', 3, ['x0', 'y0'], ['x1', 'y1'])
const BUQUE = new BARCO(' 🛥  |', 4, ['x0', 'y0'], ['x1', 'y1'])
const FIGURE_SHOOT = ['  💧  ', '  🔥  ']
   /* placeShipX: function(x, y, figure, myGrid){
        let x1  = random(0, 10 - length);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
        let y1 = Math.floor(Math.random() * 10);
            if(grid[y1][x1] == EMPTY && grid[y1][x1+1] == EMPTY && grid[y1][x1+2] == EMPTY && grid[y1][x1+3] == EMPTY && x1 < 10 && x1 >= 0){
                for(let i = 0; i < BUQUE.length; i++){
                    grid[y1][x1] = figure;
                    x1++;
                }
            }
    }*/

const PORTAAVIONES = new BARCO('🚢  |', 5, ['x0', 'y0'], ['x1', 'y1'])
let Typeship = [PORTAAVIONES, BUQUE, SUBMARINO1, SUBMARINO2, CRUCERO1, CRUCERO2, CRUCERO3, LANCHA1, LANCHA2, LANCHA3]
const EMPTY = ' -  |'

const LINEAINFERIOR = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const LINEAINFERIOR1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const LINEAINFERIOR2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];

let gridSize = 10;
let playerAGrid = create_Grid(gridSize);
let playerBGrid = create_Grid(gridSize);
let x = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10
let y = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10;


const playerA = {
    name: 'Player A',
    grid: playerAGrid,
    life: 5,
    shoots: 1,
    shootCoordsLog: [],
    shootCoords: []
}

const playerB = {
    name: 'Player B',
    grid: playerBGrid,
    life: 5,
    shoots: 1,
    shootCoordsLog: [],
    shootCoords: []
}
let shoot = 1;

//EL TABLERO


//print_Grid(enemyGrid, true);
//print_Grid(myGrid)  // Omitimos el segundo parámetro porque enemyGrid será false

function create_Grid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
        grid[i][j] = EMPTY;
        }
    }
    return grid
}
function create_Headers(size) {     //Los cabeceros de las columnas
    let result = ' |  ';
    for (let i = 65; i < size + 65; i++) {
        result += String.fromCharCode(i) + '  |  ';
    }
    return ' | (INDEX)' + result
}

function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}//FUNCIONES DEL PORTAAVIONES

function PortaavionesH(figure, grid) {            //Función para colocar los barcos el portaaviones en el eje X
    let x1  = random(0, 10 - PORTAAVIONES.length);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);            //Obligo a colocarlo entre el  0 y el 10 y en celda EMPTY
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] = EMPTY && x < 10 && x >= 0){
            grid[y1][x1] = figure;
            x1++;
        }
}

function PortaavionesV(figure, grid) {            //Función para colocar los barcos el portaaviones en el eje Y
    let y1  = random(0, 10 - PORTAAVIONES.length);                    
    let x1 = Math.floor(Math.random() * 10);
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] = EMPTY && y < 10 && y >= 0){
            grid[y1][x1] = figure;
            y1++;
        }
    return y1 - 4
}

function placePortaaviones(playerGrid){                          //Decide si se dispondrá en posición vertical u horizontal
    let a = random(0, 10)
    if (a % 2 == 0) {
        PortaavionesH(PORTAAVIONES.figure, playerGrid)
    }
    else{
        PortaavionesV(PORTAAVIONES.figure, playerGrid)
    }
}

//FUNCIONES BUQUE
function placeBuqueX(figure, grid){               //Coloca el buque en el eje X
    let x1  = random(0, 10 - BUQUE.length);                     
    let y1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY || grid[y1][x1+3] != EMPTY && x < 10 && x >= 0){ //Obligo que todas las celdas consecutivas sean EMPTY y entre en el tablero
        x1  = random(0, 10 - BUQUE.length);                     
        y1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < BUQUE.length; i++){
        grid[y1][x1] = figure;
        x1++;
    }
}

function placeBuqueV(figure, grid){               //Coloca el buque en el eje Y
    let y1  = random(0, 10 - BUQUE.length);                     
    let x1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY || grid[y1+2][x1] != EMPTY || grid[y1+3][x1] != EMPTY && y < 10 && y >= 0){
        y1  = random(0, 10 - BUQUE.length);                     
        x1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < BUQUE.length; i++){
        grid[y1][x1] = figure;
        y1++;
    }
}

function placeBuque(playerGrid){                                 //Decide si se dispondrá en posición vertical u horizontal                              
    let a = random(0, 10)
    if (a % 2 == 0) {
        placeBuqueX(BUQUE.figure, playerGrid)
    }
    else{
        placeBuqueV(BUQUE.figure, playerGrid)
    }
}

//FUNCIONES SUBMARINOS

function placeSubmarinoX(figure, grid) {           //Coloca el submarino en el eje X
    let x1  = random(0, 10 - SUBMARINO.length);                     
    let y1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY  && x < 10 && x >= 0){
        x1  = random(0, 10 - SUBMARINO.length);                     
        y1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < SUBMARINO.length; i++){
        grid[y1][x1] = figure;
        x1++;
    }
}

function placeSubmarinoV(figure, grid) {           //Coloca el submarino en el eje Y
    let y1  = random(0, 10 - SUBMARINO.length);                     
    let x1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY || grid[y1+2][x1] != EMPTY && y < 10 && y >= 0){
        y1  = random(0, 10 - SUBMARINO.length);                     
        x1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < SUBMARINO.length; i++){
        grid[y1][x1] = figure;
        y1++;
    }
}

function placeSubmarino(playerGrid){                              //Decide si se dispondrá en posición vertical u horizontal
    
    for(let i = 0; i < 2; i++){                         //Coloca 2 submarinos
        let a = random(0, 10)
        if (a % 2 == 0) {
            placeSubmarinoX(SUBMARINO.figure, playerGrid)
        }
        else{
            placeSubmarinoV(SUBMARINO.figure, playerGrid)
        }
    }
}

//FUNCIONES CRUCERO

function placeCruceroX(figure, grid) {           //Coloca el crucero en el eje X
    let x1  = random(0, 10 - CRUCERO.length);                     
    let y1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY  && x < 10 && x >= 0){
        x1  = random(0, 10 - CRUCERO.length);                     
        y1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < CRUCERO.length; i++){
        grid[y1][x1] = figure;
        x1++;
    }
}

function placeCruceroV(figure, grid) {           //Coloca el crucero en el eje Y
    let y1  = random(0, 10 - CRUCERO.length);                     
    let x1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY && y < 10 && y >= 0){
        y1  = random(0, 10 - CRUCERO.length);                     
        x1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < CRUCERO.length; i++){
        grid[y1][x1] = figure;
        y1++;
    }
}

function placeCrucero(playerGrid){
    
    for(let i = 0; i < 3; i++){                     //Coloca 3 cruceros
        let a = random(0, 10)
        if (a % 2 == 0) {
            placeCruceroX(CRUCERO.figure, playerGrid)
        }
        else{
            placeCruceroV(CRUCERO.figure, playerGrid)
        }
    }
}

//FUNCIÓN PARA COLOCAR LAS LANCHAS

function placeLancha(playerGrid) { 
    let y1 = Math.floor(Math.random() * 10);                     
    let x1 = Math.floor(Math.random() * 10);
    for(let i = 0; i < 3; i++){                 //Coloca 3 lanchas
        while (playerGrid[y1][x1] != EMPTY  && y < 10 && y >= 0 && x < 10 && x >= 0){
            y1 = Math.floor(Math.random() * 10);                    
            x1 = Math.floor(Math.random() * 10);
        }    
        playerGrid[y1][x1] = LANCHA.figure; 
    }
}
function printHeading(text) {
    const pad = '='.repeat(text.length)
    console.log(`==========${pad}==========`)
    console.log(`========= ${text} =========`)
    console.log(`==========${pad}==========`)
}
function printLine(text) {
    const pad = '='.repeat(text.length)
    console.log(text)
    console.log(`${pad}`)
}
/*Imprinmir grid

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
            // Si es el tablero del jugador contrario, los barcos los mostrará como celdas vacías.
            if (isEnemy && cell == LANCHA.figure || isEnemy && cell == CRUCERO.figure || isEnemy && cell == SUBMARINO.figure || isEnemy && cell == BUQUE.figure || isEnemy && cell == PORTAAVIONES.figure) {
                rowStr += EMPTY
                
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

function random(min, max) {                     //Función para generar un número aleattorio entre dos números
    return Math.floor((Math.random() * (max - min + 1)) + min)
}
*/

//function usePrinter() {
    
    function print_Grid(grid, isEnemy = false,) {   // Imprimimos el tablero metiendo el parámetro tablero y si es el del player A o del Player B. En el primero podemos ver los barcos y en el segundo, no
        const headers = create_Headers(grid.length);
        console.log(LINEAINFERIOR.join('_'))
        console.log(LINEAINFERIOR1.join('|'))
        console.log(headers);
        console.log(LINEAINFERIOR2.join('|'))
        for (let i = 0; i < grid.length; i++) {
            let rowStr = ' |    ' + i + '    | ';       // Los cabeceros de las filas
            for (let cell of grid[i]) {
                if (isEnemy && cell == LANCHA.figure || isEnemy && cell == CRUCERO.figure || isEnemy && cell == SUBMARINO.figure || isEnemy && cell == BUQUE.figure || isEnemy && cell == PORTAAVIONES.figure) {
                    rowStr += EMPTY + ' '
                    
                } else {
                    rowStr += cell + ' ';
                }
            }
            console.log(LINEAINFERIOR1.join('|'))
            console.log(rowStr);
            console.log(LINEAINFERIOR2.join('|'))
        }
    }
    
    function printShoot(nshoot, player, cX, cY){ //NO ESTÁ FUNCIONANDO
        if (player.grid[cY][cX] != EMPTY){
            player.grid[cY][cX] = FIGURE_SHOOT[1]
            console.log('Shoot #' + nshoot + 'pointing to ' + cXcY +': ' + FIGURE_SHOOT[1])
        }
        else{
            player.grid[cY][cX] = FIGURE_SHOOT[0]
            console.log('Shoot #' + nshoot + 'pointing to ' + cXcY +': ' + FIGURE_SHOOT[0]) //cX = Coordenada x; cY = coordenada Y; figure = Agua o Tocado
        }
    }
    const playerACoords = [];
    const playerBCoords = [];
    let shootCoords = [];
    let stringCoords = shootCoords.toString()
    
//FUNCIÓN VER REGISTRO --> NO FUNCIONA
    function testLog (player){ 
        //let coordLog = ['1,6', '0,2', '8, 9', '7,5'];
        //let testLog = player.shootCoordsLog.includes(stringCoords)
        if (player.shootCoordsLog.includes(stringCoords)){
            console.log('Repetir disparo')
            return false
        }else{
            console.log('disparo válido')
            return true
        }
    }   
    
    let headers = create_Headers(gridSize)

    function lettter (shootCoordsY) {
        let numbers = headers.split(' ')
        console.log(numbers)
        let token = numbers[shootCoordsY + 5]
        console.log(token)
    }

    function toShoot(player){  //SOLUCIONAR PROBLEMAS CON LAS REFERENCIAS
        let x1 = random(1, 9); //Intervalo entre 1 y 9 para el aleatorio pq las filas tienen un índice 0 = i
        let y1 = Math.floor(Math.random() * 10);
        //Coordenadas del disparo y se las paso a shootCoords
        shootCoords[0] = x1;
        shootCoords[1] = y1;
        console.log(shootCoords)
        //teste del nuevo diapro
        const isValidShoot = testLog(player)
        if(isValidShoot != true){
            console.log(shooting)
            //Añado el string de las nuevas coordenadas al Log del jugador
            player.shootCoordsLog.push(stringCoords) //player.shootCoords.push(playerB.shootCoords.map(e =>e))    
        }
        return y1
    }
    
        
   /*function update_Shoot(shootCoords, coordLog) {
        if (coordLog.indexOf(shootCoords) === -1) { //Este valor no está en el índice del array 
            coordLog.push(shootCoords);
            console.log('Añado el valor ' + shootCoords + ' a array shootCoords')
        }
        else if (coordLog.indexOf(shootCoords) > -1) { //este valor está en el índice del array
            console.log('Este disparo ya se ha realizado')
        }
    //}
    //coord_Shoot()
    //update_Shoot(shootCoords, coordLog)
    //console.log(shootCoords)
*/

/*    return {
    printHeading,
    printLine,
        print_Grid
    }*/
//}
// //Colocamos un buqe en el tablero del PlayerA
function game(){
    
    while (shoot < 4 && playerA.life != 0 && playerB.life != 0) {
        if (shoot % 2 == 0){
            printLine("Round " + playerB.shoots + " for " + next_player())
            toShoot(playerB);
            console.log(`Shoot #${playerB.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)
            console.log()
            printLine('Own board')
            print_Grid(playerBGrid)
            console.log()
            printLine('Enemy board')
            print_Grid(playerAGrid, true)
            console.log()
            
            //to_win();
        } 
        else {
            printLine("Ronda " + playerA.shoots + " for " + next_player())
            toShoot(playerA);
            console.log(`Shoot #${playerA.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)
            console.log()
            printLine('Own board')
            print_Grid(playerAGrid)
            console.log()
            printLine('Enemy board')
            print_Grid(playerBGrid, true)
            console.log()
            //to_win()
        }
        shoot++
    }
    printLine("Ronda " + playerB.shoots + " for " + next_player());
    toShoot(playerB);
    console.log(`Shoot #${playerB.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)
    console.log()
    printLine('Own board')
    print_Grid(playerBGrid)
    console.log()
    printLine('Enemy board')
    print_Grid(playerAGrid, true)
    console.log()
}



function next_player(){
    if ((shoot == 0) || (playerA.shoots <= playerB.shoots)) {
        playerA.shoots++;
        return playerA.name
    }else{
        playerB.shoots++;
        return playerB.name
    }
}

placePortaaviones(playerAGrid)
placePortaaviones(playerBGrid)
placeBuque(playerAGrid)
placeBuque(playerBGrid)
placeSubmarino(playerAGrid)
placeSubmarino(playerBGrid)
placeCrucero(playerAGrid)
placeCrucero(playerBGrid)
placeLancha(playerAGrid)
placeLancha(playerBGrid)

console.log(playerA.name)
print_Grid(playerAGrid)
console.log()
console.log(playerB.name)
console.log()
print_Grid(playerBGrid)
game()
console.log(playerA.shootCoordsLog)
console.log(playerB.shootCoordsLog)


console.log(`Shoot #${playerB.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)



