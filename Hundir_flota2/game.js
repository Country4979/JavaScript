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
    while (shoot < 4 && playerA.life != 0 && playerB.life != 0) {
        if (shoot % 2 == 0){            //DISPARO PLAYER B
            printLine("Round " + playerB.shoots + " for " + next_player())
            toShoot(playerB);
            
            console.log(`Shoot #${playerB.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerA, shootCoords[0], shootCoords[1])}`)
            damage (playerA, shootCoords[0], shootCoords[1])
            console.log()
            printLine('Own board')
            print_Grid(playerBGrid)

            console.log()
            printLine('Enemy board')
            print_Grid(playerAGrid, true)
            console.log()
            
            //to_win();
        } 
        else {                          //DISPARO PLAYER A
            printLine("Ronda " + playerA.shoots + " for " + next_player())
            toShoot(playerA);

            console.log(`Shoot #${playerA.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerB, shootCoords[0], shootCoords[1])}`)
            damage (playerB, shootCoords[0], shootCoords[1])
            console.log()
            printLine('Own board')
            print_Grid(playerAGrid)

            console.log()
            printLine('Enemy board')
            print_Grid(playerBGrid, true)
            console.log()
            //to_win()
        }
        shoot++
    }
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

//DIBUJAR FUEGO Y AGUA --> FUNCIONA 
let DAMAGE = '';
function W_F(player, x1, y1){
    if(player.grid[y1][x1] != EMPTY){
        return FIRE

    } else {
        return WATER
    }
}

//Función reemplazar EMPTY por agua o tocado
function damage(player, x1, y1){
    //console.log(player.grid[y1][x1])
    if(player.grid[y1][x1] != EMPTY){
        player.grid[y1][x1] = GRID_DAMAGE[1]
        //DAMAGE = FIRE
        
        //EJECUTAR FUNCION VER QUE BARCO ES EL DAÑADO
        
    }
    else {
        player.grid[y1][x1] =  GRID_DAMAGE[0]
        //DAMAGE = WATER
        
    }
}