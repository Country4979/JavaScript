import { EMPTY} from './data.js'
export const board = [];
export const gridSize = 10;
export const boardGameGrid = create_Grid(gridSize);
export const playerAGrid = create_Grid(gridSize);
export const playerBGrid = create_Grid(gridSize);
export let x = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10
export let y = Math.floor(Math.random() * 10);  //Número aleatorio entre 0 y 10;

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

//Función para generar un número aleattorio entre dos números
export function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}