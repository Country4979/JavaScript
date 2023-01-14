class BARCO {
    constructor (figure, length, firstPosition, lastposition) {
        this.figure = figure;
        this.length = length;
        this.firstPosition = firstPosition;
        this.lastPosition = lastposition;
    }
}
const LANCHA1 = new BARCO(
    '🛶  |',
     1,
     ['x0', 'y0'],
     ['x1', 'y1'])
const LANCHA2 = new BARCO('🛶  |', 1, ['x0', 'y0'], ['x1', 'y1'])
const LANCHA3 = new BARCO('🛶  |', 1, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO1 = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO2 = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const CRUCERO3 = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
const SUBMARINO1 = new BARCO(' 🛳  |', 3, ['x0', 'y0'], ['x1', 'y1'])
const SUBMARINO2 = new BARCO(' 🛳  |', 3, ['x0', 'y0'], ['x1', 'y1'])
const BUQUE = new BARCO(
    ' 🛥  |',
    4,
    ['x0', 'y0'],
    ['x1', 'y1'],
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
);
const PORTAAVIONES = new BARCO('🚢  |', 5, ['x0', 'y0'], ['x1', 'y1'])
const EMPTY = ' -  |'

const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];

let Typeship = [PORTAAVIONES, BUQUE, SUBMARINO1, SUBMARINO2, CRUCERO1, CRUCERO2, CRUCERO3, LANCHA1, LANCHA2, LANCHA3]

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
        grid[i][j] = EMPTY;
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

function random(min, max) {                     //Función para generar un número aleattorio entre dos números
    return Math.floor((Math.random() * (max - min + 1)) + min)
}


//PORTAAVIONES
let xPortaaviones;  //me indica dónde se coloca el portaviones en eje x
function Portaaviones_H(x, y, c, grid) {        //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let x1  = random(0, 5);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] = EMPTY && x < 10 && x >= 0){
            grid[y1][x1] = c;
            x1++;
        }
    return  PORTAAVIONES.firstPosition[0] = x1 - 5,
            PORTAAVIONES.firstPosition[1] = y1,
            PORTAAVIONES.lastPosition[1] = y1,
            PORTAAVIONES.lastPosition[0] = x1
}

//FUNCIONES DEL BUQUE  --> NO FUNCIONA --> PISAR BARCO 


function placeShipX(x, y, figure, grid){
    let x1  = random(0, 10 - BUQUE.length);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);
    while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY || grid[y1][x1+3] != EMPTY && x1 < 10 && x1 >= 0){
        x1  = random(0, 10 - BUQUE.length);                     
        y1 = Math.floor(Math.random() * 10);
    }    
    for(let i = 0; i < BUQUE.length; i++){
        grid[y1][x1] = figure;
        x1++;
    }
}

Portaaviones_H(x, y, PORTAAVIONES.figure, myGrid)

// //Colocamos un buqe en el tablero del PlayerA
placeShipX(x, y, BUQUE.figure, myGrid)
print_Grid(myGrid)
console.log(PORTAAVIONES.firstPosition)
console.log(PORTAAVIONES.lastPosition)
console.log()
console.log(BUQUE.firstPosition)
console.log(BUQUE.lastPosition)
/*buqueH(x, y, BUQUE.figure, myGrid)
console.log(BUQUE.firstPosition)
console.log(BUQUE.lastPosition)*/

//putTheShip()

