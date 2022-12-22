/* 📌filas
TODO cartas
📌columnas
TODO jugador
TODO puntuación (si las cartas son iguales)
TODO contadores
TODO turnos
📌figuras
TODO mensajes
TODO celdas vacías
TODO simular cartas seleccionadas */

//OBJETIVOS

//Mostrar el tablero inicial
//Filas del tablero
const ROWS = 3
//Columnas del tablero
const COLS = 2
//Figuras disponibles para las cartas
const FIGURES = ['🤓', '🔥', '💙']

console.log['Aviable figures: ', FIGURES]

//Construimos el tablero
let board = []

//por cada fila
/*for(let i = 0; i < ROWS; i++) {
    //una fila cualquiera
    let row = []
    //creamos las columna
    for(let j = 0; j < COLS; j++) {
    //console.log(j, i)
    row[j] = FIGURES[i]
    console.log(FIGURES[i])
    }
    board[i] = row
}*/

/*for (let i =0; i < ROWS * COLS / 2; i++) {
    for (let j = 0; j < 2; j++) {
        //board[j + i * ROWS] = FIGURES[i]  --> INTENTEAR
        const figure = FIGURE[i]
        board.push(FIGURES[i]) // Si solamente queremos añadir elementos al array, lo hacemos con push
    }
}*/
//Alternativa a popular el Array board
for(let figure of FIGURES) {
    // TODO Se puede mejorar teniendo en cuenta que podriamos jugar con trios de cartas o cuartetos, etc
    board.push(figure)
    board.push(figure)
}
console.log('the board', board)

// Función que nos sirve para poder mostrar por pantalla las cartas en filas y columnas
function printBoard(board) {
    for(let i = 0; i < ROWS; i++) {
        let line = ''
        for(let j = 0; j < COLS; j++){
            // line = line + ' '
            line += board[i * COLS + j] // equivale a line = line + ' '
        }
        console.log(line)
    }
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
printBoard(board)
// console.log('Initial table')
// for(let i = 0; i < ROWS; i++) {
//     console.log(board[i])
// }


// TODO Generar selección de cartas de forma aleatoria.
// TODO Mostrarla por pantalla hasta que quede solucionado el juego.
// TODO Una vez terminado el juego, se mostrarán algunas estadísticas.
// TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo