import { EMPTY } from './printer.js'
import { playerA, playerB } from './data.js'
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
            //to_win();
        } 
        else {
            printLine("Ronda " + playerA.shoots + " for " + next_player())
            //to_win()
        }
        shoot++
    }
    printLine("Ronda " + playerB.shoots + " for " + next_player())
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