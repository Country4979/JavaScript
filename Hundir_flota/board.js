//TODO introducir el ramdon en un el push del board y tiene que tener la casilla vacía
const linea0 = [' | (INDEX) ', '  A  ', '  B  ', '  C  ', '  D  ', '  E  ', '  F  ', '  G  ', '  H  ', '  I  ', '  J  |'];
const lineaInferior = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
const lineaInferior1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
const lineaInferior2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];
const ROWS = 10; // Filas del tablero
const COLS = 10; // Columnas del tablero
let board = []; // El tablero

//VARIABLES DE LOS BARCOS (es necesario?)
const LANCHA1 = ['  🛶  ']
const LANCHA2 = ['  🛶  ']
const LANCHA3 = ['  🛶  ']
const CRUCERO1 = ['  🚤  ', '  🚤  ']
const CRUCERO2 = ['  🚤  ', '  🚤  ']
const CRUCERO3 = ['  🚤  ', '  🚤  ']
const SUBMARINO1 = ['  🛳  ', '  🛳  ', '  🛳  ']
const SUBMARINO2 = ['  🛳  ', '  🛳  ', '  🛳  ']
const SUBMARINO3 = ['  🛳  ', '  🛳  ', '  🛳  ']
const BUQUE = ['  🛥  ', '  🛥  ', '  🛥  ', '  🛥  ']
const PORTAAVIONES = ['  🚢  ', '  🚢  ', '  🚢  ', '  🚢  ', '  🚢  ']
const VACIO = [" '' "] // Celda vacía
let tocado = []
let lifePlayerA = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES]
let lifePlayerB = [LANCHA1, LANCHA2, LANCHA3, CRUCERO1, CRUCERO2, CRUCERO3, SUBMARINO1, SUBMARINO2, SUBMARINO3, BUQUE, PORTAAVIONES]




function print_board(board) {
    let tablero =[]
    let print_tablero =
    console.log(lineaInferior.join('_'))
    console.log(lineaInferior1.join('|'))
    console.log(linea0.join('|'))
    console.log(lineaInferior2.join('|'))  //Hasta aqui me dibuja la primera línea, que es constante para todos los tableros
    for(let i = 0; i < ROWS; i++) {  //Iteración uitaria de "rows" filas del tablero
        let fila = [' |    ' + i + '    '];  // Creamos una variable vacía al principio por cada iteraciçon de la fila         //' |    ' + i + '    ' //Cómo se pinta cada elemento del tablero
        for(let j = 0; j < COLS; j++){ //Iteración unitaria de "cols" columnas del tablero
            fila.push(lifePlayerA); // <-- el ramdon aquí
        }
        console.log(lineaInferior1.join('|'))
        tablero.push(fila) //Por cada finalización del ciclo anterior, se añade una fila a la variable tablero
        console.log(fila.join('|') + '|' + "\n" + lineaInferior2.join('|')) //Imprime el valor cada fila y columna en cada ciclo
    }
    return tablero; //Devolvemos el contenido de board
}

// una funcion que nos permite randomizar los elementos de un array
function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

board = shuffle(board)
print_board(board)