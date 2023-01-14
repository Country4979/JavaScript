//TODO introducir el ramdon en un el push del board y tiene que tener la casilla vacía
const linea0 = [' | (INDEX) ', '  A  ', '  B  ', '  C  ', '  D  ', '  E  ', '  F  ', '  G  ', '  H  ', '  I  ', '  J  |'];
const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];

//VARIABLES DE LOS BARCOS (es necesario?)
const LANCHA = ['🛶']
const CRUCERO = ['🚤']
const SUBMARINO = ['🛳']
const BUQUE = ['🛥']
const PORTAAVIONES = ['🚢']
const VACIO = [" '' "] // Celda vacía
let lifePlayerA = [LANCHA, LANCHA, LANCHA, [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [BUQUE, BUQUE, BUQUE, BUQUE], [PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES]]
let lifePlayerB = [LANCHA, LANCHA, LANCHA, [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [CRUCERO, CRUCERO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [SUBMARINO, SUBMARINO, SUBMARINO], [BUQUE, BUQUE, BUQUE, BUQUE], [PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES, PORTAAVIONES]]



//DISPAROS
const FIGURE = ['  💧  ', '  🔥  '];
let shoot = 0;



//EL TABLERO
let board = [];
let gridSize = 10;
let player_A_Grid = create_Grid(gridSize);
let player_B_Grid = create_Grid(gridSize);




function create_Grid(size) {        //Función que crea matriz (array de dos dimensiones) de 10x10, que es el tablero
    let grid = [];
    for (let i = 0; i < size; i++) {        //Filas - 1ª dimensión
        grid[i] = [];
        for (let j = 0; j < size; j++) {    //Columnas - 2ª dimensión
        grid[i][j] = ' -  |';
        }
    }
    return grid
}

//Imprinmir tablero

function print_Grid(grid, is_player_B = false) {   // Imprimimos el tablero metiendo el parámetro tablero y si es el nuestro o el del enemigo. En el primero podemos ver los barcos y en el segundo, no
    const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
    const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
    const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];
    const headers = create_Headers(grid.length);
    console.log(lineaInferior.join('_'))
    console.log(lineaInferior1.join('|'))
    console.log(headers);                           //Los cabeceros de las columnas
    console.log(lineaInferior2.join('|'))
    for (let i = 0; i < grid.length; i++) {         // Los cabeceros de las filas
        let rowStr = ' |    ' + i + '    | ';       
        for (let cell of grid[i]) {
            if (is_player_B && cell == '0') {
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

console.log('TABLERO PLAYER A')
print_Grid(player_A_Grid)                  //Omitimos el segundo parámetro porque player_B será false
console.log()
console.log()
console.log('TABLERO PLAYER B')
print_Grid(player_B_Grid, true);        //Diciendo que el segundo parámetro sea true, decimos que es el del player_B