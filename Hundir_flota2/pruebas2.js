
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
const PORTAAVIONES = new BARCO('🚢  |', 5, ['x0', 'y0'], ['x1', 'y1'])

const WATER = ' 💧 |';
const FIRE = '🔥 |';

const  GRID_DAMAGE = [ ` ${WATER} |`, ` ${FIRE} |`]
let coords = []

let typeShip = [PORTAAVIONES, BUQUE, SUBMARINO1, SUBMARINO2, CRUCERO1, CRUCERO2, CRUCERO3, LANCHA1, LANCHA2, LANCHA3]
const EMPTY = ' -  |'

const LINEAINFERIOR = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const LINEAINFERIOR1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const LINEAINFERIOR2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];

let gridSize = 10;
let playerAGrid = create_Grid(gridSize);
let playerBGrid = create_Grid(gridSize);



const playerA = {
    name: 'Player A',
    grid: playerAGrid,
    life: 5,
    shoots: 1,
    shootCoordsLog: [6,5],
    shootCoords: [[6,5], [0,1]],
    portaaviones: [],
 /*   shipCoords(player, typeShip, life){     //MÉTODO PARA PONER LA POSICION DEL BARCO -- ver como hacer para que el numeo d ciclos = vida barco
                            //cOMO ES EN ORDEN¿?
        let x1 = randomCoords[0];
        let y1 = randomCoords[1];
        let totalposition = []
        for(let i = 0; i < (life-1); i++){
                totalposition.push(randomCoords.map(e => e))
                console.log(`Posicion total: ${totalposition}`)
                randomCoords[0] = ++x1
                this.typeShip.push(randomCoords.map(e => e))
        }
    }*/
}
let shootCoordsLogA = [6,5]

const playerB = {
    name: 'Player B',
    grid: playerBGrid,
    life: 5,
    shoots: 1,
    shootCoordsLog: [],
    shootCoords: []
}
let shootCoordsLogB = []
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
}
//FUNCIONES DEL PORTAAVIONES

let randomCoords = [];
let initialCoords = []
let pH = '';

function placePortaaviones(player, playerGrid){                          //Decide si se dispondrá en posición vertical u horizontal
    let a = random(0, 10)
    if (a % 2 == 0) {
        let x1  = random(0, 10 - PORTAAVIONES.length);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
        let y1 = Math.floor(Math.random() * 10); 
        randomCoords = [x1, y1]
        initialCoords = [x1, y1]
        //console.log(`Esta es la posición inicial: ${randomCoords}`)
        PortaavionesH(PORTAAVIONES.figure, playerGrid, x1, y1) 
    }
    else{
        let y1  = random(0, 10 - PORTAAVIONES.length);                    
        let x1 = Math.floor(Math.random() * 10);
        randomCoords = [x1, y1]
        //console.log(`Esta es la posición inicial: ${randomCoords}`)
        PortaavionesV(PORTAAVIONES.figure, playerGrid, x1, y1)
    }
    //player.shipCoords(player, randomCoords)
    player.portaaviones = ['🚢  |', 5, initialCoords]
    //console.log(playerA)  
};

function PortaavionesH(figure, grid, x1, y1) {            //Función para colocar los barcos el portaaviones en el eje X
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] = EMPTY && x1 < 10 && x1 >= 0){    //Obligo a colocarlo entre el  0 y el 10 y en celda EMPTY
            grid[y1][x1] = figure;
            ++x1;        
        }
    //typeShip = 'portaaviones'
    //player. shipCoords(player, typeShip)

};

function PortaavionesV(figure, grid, x1, y1) {            //Función para colocar los barcos el portaaviones en el eje Y
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] == EMPTY && y1 < 10 && y1 >= 0){
            grid[y1][x1] = figure;
            y1++;
        }
};

//FUNCIONES BUQUE
function placeBuqueX(figure, grid){               //Coloca el buque en el eje X
    let x1  = random(0, 10 - BUQUE.length);                     
    let y1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY || grid[y1][x1+3] != EMPTY && x1 < 10 && x1 >= 0){ //Obligo que todas las celdas consecutivas sean EMPTY y entre en el tablero
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
    while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY || grid[y1+2][x1] != EMPTY || grid[y1+3][x1] != EMPTY && y1 < 10 && y1 >= 0){
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
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY  && x1 < 10 && x1 >= 0){
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
    while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY || grid[y1+2][x1] != EMPTY && y1 < 10 && y1 >= 0){
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
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY  && x1 < 10 && x1 >= 0){
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
    while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY && y1 < 10 && y1 >= 0){
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
        while (playerGrid[y1][x1] != EMPTY  && y1 < 10 && y1 >= 0 && x1 < 10 && x1 >= 0){
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
    
    
    //const playerACoords = [];
    //const playerBCoords = [];

    
    const shootCoords =  [];
    //FUNCIÓN VER REGISTRO --> NO FUNCIONA
    function toShoot(player){
        let x1 = random(0, 9); //Intervalo entre 0 y 9 para el aleatorio pq las filas tienen un índice 0 = i
        let y1 = Math.floor(Math.random() * 10);
        //Coordenadas del disparo y se las paso a shootCoords
        shootCoords[0] = x1;
        shootCoords[1] = y1;
        console.log(shootCoords)
        //toLog(player)
        
        //teste del nuevo diapro
        /*const isValidShoot = testLog(player)
        if(isValidShoot != true){
            console.log(shooting)
            //Añado el string de las nuevas coordenadas al Log del jugador
            player.shootCoordsLog.push(stringCoords) //player.shootCoords.push(playerB.shootCoords.map(e =>e))    
        }*/
    }

/*    function toLog(player){
        let newArr = []
        if (player == playerA){
            newArr = shootCoordsLogA.map(e => e)
            newArr.push(shootCoords)
            shootCoordsLogA = newArr   
        }
        else {
            newArr = shootCoordsLogB.map(e => e)
            newArr.push(shootCoords)
            shootCoordsLogB = newArr   
        }
        /*for (let i=0;i<5;i++){
            newArr = playerA.shootCoordsLog.map(e => e)
            //console.log(newArr)
            newArr.push(shootCoords)
            //console.log(newArr)
            playerA.shootCoordsLog = newArr
            //console.log(playerA.shootCoordsLog)   
        //}
    }*/
    

    
    function game(){
        
        while (shoot < 20 && playerA.life != 0 && playerB.life != 0) {
            if (shoot % 2 == 0){            //DISPARO PLAYER B
            printLine("Round " + playerB.shoots + " for " + next_player())
            toShoot(playerB);
            //toLog(playerB)
            console.log(`Shoot #${playerB.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerA, shootCoords[0], shootCoords[1])}`)
            damage (playerA, shootCoords[0], shootCoords[1])
            console.log()
            printLine('Own board')
            print_Grid(playerBGrid)

            console.log()
            printLine('Enemy board')
            print_Grid(playerAGrid, true)
            console.log()
            
            //to_win();
        } 
        else {                          //DISPARO PLAYER A
            printLine("Ronda " + playerA.shoots + " for " + next_player())
            toShoot(playerA);
            //toLog(playerA)  
            console.log(`Shoot #${playerA.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerB, shootCoords[0], shootCoords[1])}`)
            damage (playerB, shootCoords[0], shootCoords[1])
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
    //DISPARO PLAYER B
    printLine("Ronda " + playerB.shoots + " for " + next_player());
    toShoot(playerB);
    //toLog(playerB)
    console.log(`Shoot #${playerB.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerA, shootCoords[0], shootCoords[1])}`)   //FALTA PONER SIMBOLITO DE AGUA
    damage (playerA, shootCoords[0], shootCoords[1])
    console.log()
    /*printLine('Own board')
    print_Grid(playerBGrid)
    console.log()
    printLine('Enemy board')
    print_Grid(playerAGrid, true)
    console.log()*/
}
//DIBUJAR FUEGO Y AGUA --> FUNCIONA 
let DAMAGE = '';
function W_F(player, x1, y1){
    if(player.grid[y1][x1] != EMPTY){
        return FIRE

    } else {
        return WATER
    }
}
function damage(player, x1, y1){
    //console.log(player.grid[y1][x1])
    if(player.grid[y1][x1] != EMPTY){
        player.grid[y1][x1] = GRID_DAMAGE[1]
        //DAMAGE = FIRE
        
        //EJECUTAR FUNCION VER QUE BARCO ES EL DAÑADO
        
    }
    else {
        player.grid[y1][x1] =  GRID_DAMAGE[0]
        //DAMAGE = WATER
        
    }
}
//FUNCION BARCO DAÑADA SWITCH CASE
    //SI PORTAVIONES, RESTAR UNA VIDA AL PORTAAVIONES DEL JUGADOR, Y ASÍ

function next_player(){
    if ((shoot == 0) || (playerA.shoots <= playerB.shoots)) {
        playerA.shoots++;
        return playerA.name
    }else{
        playerB.shoots++;
        return playerB.name
    }
}


placePortaaviones(playerA, playerAGrid)

//playerA.shipCoords(playerA, typeShip, 5)
//console.log(playerA.portaaviones)
//console.log(playerA.portaaviones[4][0])
  
//playerA.portaaviones.push(randomCoords)
//playerA.portaaviones.push(randomCoords)

placePortaaviones(playerB, playerBGrid)
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
//console.log(playerA.shootCoordsLog)
//console.log(playerB.shootCoordsLog)

//portaaviones(playerA)
//console.log(playerA)
//console.log(playerA.shootCoordsLog)
//console.log(playerB.shootCoordsLog)
/*function test(){

    let ArrPaloma  = [[0,1], [0,2], [0,3]]
    let disparo = [0,1]
    let result = ArrPaloma.find(e => e = disparo)
    console.log(result)
    if(result != 0){
        console.log('vuelve a disparar, anda')
    }
    else {console.log('Well Done')}
}
*/
//console.log(shootCoordsLogA)
//console.log(shootCoordsLogB)

/*if (grid[y1][x1] = EMPTY && x1 < 10 && x1 >= 0){
    grid[y1][x1] = figure;
    x1++;*/

/*    let position = []
    let totalposition = []
    let Arr = function(x1, y1) {
        position[0] = x1
        position[1] = y1
        console.log(position)
        for(let i = 0; i < 4; i++){
            totalposition.push(position.map(e => e))
            position[0] = ++x1
            console.log(position)
        }
        totalposition.push(position.map(e => e))
    }

Arr(0,1)
console.log(totalposition)*/


/*function verificarDisparo(player){
    console.log(shootCoords)
    for(let find in stringCoords){
        find = stringCoords.includes(shootCoords)
            console.log(find)
            if(find == true){
                console.log(`El diparo ${shootCoords} ya se ha realizado`)
            }
            else {
                console.log('Well done!')
            }
    }*/
/*function verificarDisparo(player){
    console.log(shootCoords)
    for(let i = 0; i < stringCoords.length; i++){
        for(let j = 0; j < 2; j++){
            let find = stringCoords[i][j].includes(shootCoords[0][1])
            console.log(find)
            if(find == true){
                console.log(`El diparo ${shootCoords} ya se ha realizado`)
            }
            else {
                console.log('Well done!')
            }
        
        }
    }
}
verificarDisparo(playerA)*/

/*let shootCoords = [0,1];

const find = playerA.shootCoordsLog.findIndex(elemento => elemento[0] === shootCoords[0] && elemento[1] === shootCoords[1]);
    console.log(find)
    if (find != -1){
        console.log(`El diparo ${shootCoords} ya se ha realizado`)
    }
    else {
        console.log('Well done!')
    }
*/
