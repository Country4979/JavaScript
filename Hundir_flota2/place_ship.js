//BARCOS

const LANCHA = ['🛶']
const CRUCERO = ['🚤', '🚤']
const SUBMARINO = ['🛳', '🛳', '🛳']
const BUQUE = ['🛥', '🛥', '🛥', '🛥']
const PORTAAVIONES = ['🚢','🚢', '🚢', '🚢', '🚢']
//celda vacía = ' -  |'

//TABLERO
const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];

let gridSize = 10;
let myGrid = create_Grid(gridSize);
let enemyGrid = create_Grid(gridSize);
let x = '' //Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10
let y = '' //Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10;

console.log('PLAYER A')
//print_Grid(myGrid)  // Omitimos el segundo parámetro porque enemyGrid será false

//Colocar los barcos
//FUNCIONA place_Lancha(x, y, '🛶  |', myGrid) //Colocamos tres lanchas en el tablero del playerA
place_Portaaviones(x, y,'🚢  |', myGrid) // Colocamos 1 portaaviones en el tablero del PlayerA

print_Grid(myGrid)

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

/*Colocar LAS TRES LANCHAS
for (let i = 0; i < 4; i++){

    place_Lancha(x, y, '🛶  |', myGrid) //Colocamos una lancha en el tablero del playerA
    i = +i
}*/

//print_Grid(myGrid)

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

//Imprinmir tablero

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



//FUNCIONES DEL PORTAAVIONES  --> FUNCIONAN
function Portaaviones_H(x, y, c, grid) {        //Función para colocar los barcos en una cordenada x,y que muestre el caracter C y lo coloque en el grid playerA o playerB
    let x1  = random(0, 5);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco ene l eje x
    let y1 = Math.floor(Math.random() * 10);    //Obtengo un número aleatorio entre 0 y 10 para el eje Y.
    x = x1;
    y = y1;
    for (let i = 0; i < 5; i++)
        if (grid[y][x] = ' -  |' && x < 10 && x >= 0){
            grid[y][x] = c;
            x++;
        }
}

function Portaaviones_V(x, y, c, grid) {    
    let y1  = random(0, 5);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
    let x1 = Math.floor(Math.random() * 10);    //Obtengo un número aleatorio entre 0 y 10 para el eje X.
    x = x1;
    y = y1;
    for (let i = 0; i < 5; i++)
        if (grid[y][x] = ' -  |' && y < 10 && y >= 0){ //Obligo a colocarlo entre el 0 y el 10
            grid[y][x] = c;
            y++;
        }
}

function place_Portaaviones(){  //--> FUNCIONA
    let a = random(0, 10)
    if (a % 2 == 0) {
        Portaaviones_H(x, y,'🚢  |', myGrid)
    }
    else{
        Portaaviones_V(x, y,'🚢  |', myGrid)
    }
}

//FUNCIONES PARA COLOCAR LAS LANCHAS    --> AÑADIR FUNCIONALIDAD DE CASILLA VACÍA Y RANDOM H_V
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






