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
for(let i = 0; i < ROWS; i++) {
    //una fila cualquiera
    let row = []
    //creamos las columna
    for(let j = 0; j < COLS; j++) {
    //console.log(j, i)
    row[j] = FIGURES[i]
    console.log(FIGURES[i])
    }
    board[i] = row
}
// console.log(board)
console.log('Initial table')
for(let i = 0; i < ROWS; i++) {
    console.log(board[i])
}
//TODO Generar selección de cartas de forma aleatoria
//TODO Mostrasla por pantalla hasta que quede solucionado el juego
//TODO Una vez erminado el juego, se mostrarán algunas estadísticas.
//TODO Intentaremos añadir un poco de inteligencia para que el juego sea más listo