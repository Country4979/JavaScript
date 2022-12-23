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

console.log(board)
