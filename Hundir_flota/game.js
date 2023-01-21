import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES} from './data.js'
import * as board from './board.js'
import { gridSize, EMPTY } from './board.js'
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

        placeH(player, playerShip, x1, y1, life, playerGrid){
            let freeSpace = function (playerGrid, x1, y1) {
                let noEmpty = '';
                for (let i = 0; i < life; i++){
                    if (playerGrid[y1][x1] == EMPTY){          
                        ++x1;
                        noEmpty = false;
                    } else {
                        noEmpty = true;
                        break
                    }
                }
            if (noEmpty == false) {    
                this.placeShipsH(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid)
                }
            else {
                this.placeShips(player, playerShip, playerGrid)
                }
            }
        },

        placeV(player, playerShip, x1, y1, playerGrid){
            let freeSpace = function (playerGrid, x1, y1) {
                let noEmpty = '';
                for (let i = 0; i < life; i++){
                    if (playerGrid[y1][x1] == EMPTY){          
                        ++y1;
                        noEmpty = false;
                    } else {
                        noEmpty = true;
                        break
                    }
                }
            if (noEmpty == false) {    
                this.placeShipsV(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid)
                }
            else {
                this.placeShips(player, playerShip, playerGrid)
                }
            }
        },

        placeShipsH(figure, life, x1, y1, gridSize, grid) { 
            for (let i = 0; i < life; i++){
                if (grid[y1][x1] == EMPTY && x1 < gridSize && x1 >= 0){
                    grid[y1][x1] = figure;
                    ++x1;
                }
            }
        },
        
        placeShipsV(figure, life, x1, y1, gridSize, grid) {         
            for (let i = 0; i < life; i++){
                if (grid[y1][x1] == EMPTY && y1 < gridSize && y1 >= 0){
                    grid[y1][x1] = figure;
                    ++y1;
                }
            }
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
        placeShips(player, playerShip, playerGrid){ //, playergrid){
            let a = this.random(0, gridSize)
            if (a % 2 == 0) {
                let x1 = this.random(0, gridSize - 5);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
                let y1 = Math.floor(Math.random() * gridSize);
                this.placeH(player, playerShip.figure, x1, y1, playerShip.life, playerGrid)

                //this.placeShipsH(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid)
                //return x1, y1
            }
            else{
                let y1 = this.random(0, gridSize - 5);                    
                let x1 = Math.floor(Math.random() * gridSize);
                this.placeV(player, playerShip.figure, x1, y1, playerShip.life, playerGrid)
                //this.placeShipsV(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid) //player.ships[id].figure, player.ships[id].life
                //return x1, y1
            }
            
        },
        
    },
    
    start(){}, //Ciclo de las rondas
    //funión nextplayer
    toWin(){
        return 'Aún no lo sé'
    },
}