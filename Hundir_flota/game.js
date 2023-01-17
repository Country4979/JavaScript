import { EMPTY } from './printer.js'
import { playerA, playerB, DAMAGE } from './data.js'
export const board = [];
export const gridSize = 10;
export const boardGameGrid = create_Grid(gridSize);
export const playerAGrid = create_Grid(gridSize);
export const playerBGrid = create_Grid(gridSize);
export let x = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10
export let y = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10;
export let shoot = 1;

//Función para crear el tablero
export function create_Grid(size) {
    let grid = [];
    for (let i = 0; i < size; i++) {
        grid[i] = [];
        for (let j = 0; j < size; j++) {
        grid[i][j] = EMPTY;
        }
    }
    return grid
}

//Función para generar un número aleatorio entre dos números
export function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}

//Función juego
export function game(){
    while (shoot < 100 && playerA.life != 0 && playerB.life != 0) {
        if (shoot % 2 == 0){
            printLine("Ronda " + playerB.shoots + " for " + next_player())
            //function to_shoot();
            console.log(`Shoot #${playerB.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)
            damage (playerB, shootCoords[0], shootCoords[1])
            //to_win();
        } 
        else {
            printLine("Ronda " + playerA.shoots + " for " + next_player())
             //function to_shoot();
            console.log(`Shoot #${playerA.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)
            damage (playerA, shootCoords[0], shootCoords[1])
            
            //to_win()
        }
        shoot++
    }
    printLine("Ronda " + playerB.shoots + " for " + next_player())
    //function to_shoot();
    console.log(`Shoot #${playerA.shoots}pointing to ${shootCoords[0]}${String.fromCharCode(shootCoords[1] + 65)}: `)
    damage (playerB, shootCoords[0], shootCoords[1])
}

//Función siguiente jugador
function next_player(){
    if ((shoot == 0) || (playerA.shoots <= playerB.shoots)) {
        playerA.shoots++;
        return playerA.name
    }else{
        playerB.shoots++;
        return playerB.name
    }
}
//Función reemplazar EMPTY por agua o tocado
function damage(player, x1, y1){
    console.log(player.grid[y1][x1])
    if(player.grid[y1][x1] != EMPTY){
        player.grid[y1][x1] = DAMAGE[1]
    }
    else {
        player.grid[y1][x1] = DAMAGE[0]
    }
}