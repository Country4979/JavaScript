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
        
        freeSpaceH(playerGrid, barco, x1, y1) {
            let noEmpty = '';
            console.log('Pintamos en Horizontal - Tercer filtro')
            for (let i = 0; i < barco.life; i++){
                if (playerGrid[y1][x1] == EMPTY){          
                    ++x1;
                    return false;
                } else {
                    
                    break
                }
            }
            
        },
        freeSpaceV(playerGrid, barco, x1, y1) {
            console.log('Pintamos en vertical - Tercer filtro')
            let noEmpty = '';
            for (let i = 0; i < barco.life; i++){
                if (playerGrid[y1][x1] == EMPTY){          
                    ++y1;
                    return false;
                } else {
                    break
                }
            }   
        },

        placeH(player, barco, x1, y1, playerGrid){
            console.log('Pintamos en Horizontal - Segundo filtro')
            
            if (this.freeSpaceH(playerGrid, barco, x1, y1) == false) {    
                console.log('Pintamos en Horizontal')
                //this.placeShipsH(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid)
                }
            else {
                this.placeShips(player, barco, playerGrid)
                }
        },
        
        placeV(player, barco, x1, y1, playerGrid){
            console.log('Pintamos en vertical - Segundo filtro')
            if (this.freeSpaceV(playerGrid, barco, x1, y1) == false) {    
                console.log('Pintamos en vertical')
                //this.placeShipsV(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid)
                }
            else {
                this.placeShips(player, barco, playerGrid)
                }
        },

        placeShipsH(barco, x1, y1, gridSize, grid) {
            console.log('Pasados todos los filtros.') 
            for (let i = 0; i < barco.life; i++){
                if (grid[y1][x1] == EMPTY && x1 < gridSize && x1 >= 0){
                    grid[y1][x1] = barco.figure;
                    ++x1;
                }
            }
        },
        
        placeShipsV(barco, x1, y1, gridSize, grid) {   
            console.log('Pasados todos los filtros.')       
            for (let i = 0; i < barco.life; i++){
                if (grid[y1][x1] == EMPTY && y1 < gridSize && y1 >= 0){
                    grid[y1][x1] = barco.figure;
                    ++y1;
                }
            }
        },
        //HASTA VER ESTO
        placeShips(player, barco, playerGrid){ //, playergrid){
            let a = this.random(0, gridSize)
            if (a % 2 == 0) {
                let x1 = this.random(0, gridSize - barco.life);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
                let y1 = Math.floor(Math.random() * gridSize);
                console.log('Pintamos en Horizontal - Primer filtro')
                this.placeH(player, barco, x1, y1, playerGrid)

                //this.placeShipsH(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid)
                //return x1, y1
            }
            else{
                let y1 = this.random(0, gridSize - barco.life);                    
                let x1 = Math.floor(Math.random() * gridSize);
                console.log('Pintamos en vertical - Primer filtro')
                this.placeV(player, barco, x1, y1, playerGrid)
                //this.placeShipsV(playerShip.figure, playerShip.life, x1, y1, gridSize, playerGrid) //player.ships[id].figure, player.ships[id].life
                //return x1, y1
            }
            
        },
        
    },

    touchedAndSunk(barco){
        barco.life--
        if(barco.life == 0) {
            console.log(`The ship ${barco.id} has been sunk. Well done!!`)
        }
        else {
            //función next player
        }
    },

    touched(shooter, enemy){
        enemy.life--
        //encontrar el barco, devolverlo y restarle una vida
        if (enemy.life == 0){
            printHeading('THE BATTTLESHIP SIMULATOR HAS ENDED')
            printHeading(`THE WINNER IS: ${game.toWin(shooter)}`)
        }
    },

    WoF(shooter, enemy, x, y){
        //función agua o tocado para los iconos
        if (grid[y][x] == EMPTY){
           //poner la funcion de pruebas2 para aagua
        }
        else{
            //poner la funciñon de pruebas2 para tocado
            this.touched(enemy)
        }
    },

    toTest(shooter, x, y, enemy){
        let find = 'encontrar el disparo' // ver función en pruebas2?
        // mirar en shooter.shootsLog
            if(find == -1 ){
                shooter.shoots++
                this.toLog(shooter, x, y)
                this.WoF(shooter, enemy, x, y)
            }
            else {
                this.toShoot(shooter, enemy)
            }
    },

    toLog(shooter, x, y){
        //función push para meter el disparo
    },

    toShoot(shooter, enemy){
        let x = this.random(0, gridSize);
        let y = this.random(0, gridSize);
        toTest(shooter, x , y, enemy)
    },
    start(){}, //Ciclo de las rondas
    //funión nextplayer
    toWin(shooter){
        return shooter.name
    },
}