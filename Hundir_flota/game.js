import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES} from './data.js'
import * as board from './board.js'
import { gridSize } from './board.js'
export default {
    rondas: 0,
    totalShoots: 0,
    setUpGame: {  // funciones de inicio del juego      
        createBoards() {
            board.create_Grid(size),
            board.create_Headers(size)
        },
        
        random(min, max) {                     
            return Math.floor((Math.random() * (max - min + 1)) + min)
        },
        
        // ✅ Crear barcos para los jugadores
        shipsToPlayers(player){
            player.ships = [
                {id: 'Portaaviones', PORTAAVIONES},
                {id: 'Buque', BUQUE},
                {id: 'Submarino1', SUBMARINO}, 
                {id: 'Submarino2', SUBMARINO},
                {id: 'Crucero1', CRUCERO}, 
                {id: 'Crucero2', CRUCERO},
                {id: 'Crucero3', CRUCERO},
                {id: 'Lancha1', LANCHA},
                {id: 'Lancha2', LANCHA},
                {id: 'Lancha3', LANCHA}
            ]
        },
        //Colocar los barcos de los jugadores
        placeShips(player, id, ship){
            let a = this.random(0, gridSize)
            if (a % 2 == 0) {
                let x1  = this.random(0, gridSize - player.ships[id].life);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
                let y1 = Math.floor(Math.random() * gridSize);
                //console.log(`Imprimo ${ship} de forma Horizontal`)
                //randomCoords = [x1, y1]
                //initialCoords = [x1, y1]
                //console.log(`Esta es la posición inicial: ${randomCoords}`)
                placeShipsH(player.ships[id].figure, player.ships[id].life, player.grid, x1, y1) 
            }
            else{
                let y1  = this.random(0, gridSize - player.ships[id].life);                    
                let x1 = Math.floor(Math.random() * gridSize);
                //console.log(`Imprimo ${ship} de forma Vertical`)
                //randomCoords = [x1, y1]
                //console.log(`Esta es la posición inicial: ${randomCoords}`)
                placeShipsV(player.ships[id].figure, player.ships[id].life, player.grid, x1, y1)
            }
        },
        
    },
    placeShipsH(figure, shipslife, grid, x1, y1) {
        for (let i = 0; i < shipslife; i++)
            if (grid[y1][x1] = EMPTY && x1 < gridSize && x1 >= 0){
                grid[y1][x1] = figure;
                x1++;
            }
    },
    
    placeShipsV(figure, shipslife, grid, x1, y1) {
        for (let i = 0; i < shipslife; i++)
            if (grid[y1][x1] = EMPTY && y1 < gridSize && y1 >= 0){
                grid[y1][x1] = figure;
                Y1++;
            }
    },
    
    start(){}, //Ciclo de las rondas
    //funión nextplayer
    toWin(){
        return 'Aún no lo sé'
    },
}