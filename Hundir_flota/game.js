import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES, FIGURES} from './data.js'
import * as board from './board.js'
import { gridSize, EMPTY, playerAGrid, playerBGrid } from './board.js'
import usePrinter from './printer.js'
const { printHeading, printLine, print_Grid } = usePrinter()

export default {
    rondas: 0,
    totalShoots: 0,
    setUpGame: {  // funciones de inicio del juego      
        createBoards() {
            board.create_Grid(size),
            board.create_Headers(size)
        },    
        
        // ✅ Crear barcos para los jugadores
        /*shipCoords (ship, x1, y1){
            let totalposition = []
            console.log (randomCoords)
           this.ship[ship].position.push(Object.assign([], randomCoords))
            for(let i = 0; i < (this.ship[ship].life-1); i++){
                    totalposition.push(randomCoords.map(e => e))
                    randomCoords[0] = ++x1
                    //Object.assign(this.ship[ship].position.push(randomCoords.map(e => e)))
                    (this.ship[ship].position.push(randomCoords.map(e => e)))
                }
            }
        };*/

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
            
            if (this.freeSpaceH(playerGrid, barco, x1, y1) == false) {    

                this.placeShipsH(barco, x1, y1, gridSize, playerGrid)
            }
            else {
                this.placeShips(player, barco, playerGrid)
                }
            },
            
            placeV(player, barco, x1, y1, playerGrid){
                
            if (this.freeSpaceV(playerGrid, barco, x1, y1) == false) {    
                
                this.placeShipsV(barco, x1, y1, gridSize, playerGrid)
                }
                else {
                this.placeShips(player, barco, playerGrid)
            }
        },

        placeShipsH(barco, x1, y1, gridSize, grid) {

            for (let i = 0; i < barco.life; i++){
                if (grid[y1][x1] == EMPTY && x1 < gridSize && x1 >= 0){
                    grid[y1][x1] = barco.figure;
                    ++x1;
                }
            }
        },
        
        placeShipsV(barco, x1, y1, gridSize, grid) {   
            
            for (let i = 0; i < barco.life; i++){
                if (grid[y1][x1] == EMPTY && y1 < gridSize && y1 >= 0){
                    grid[y1][x1] = barco.figure;
                    ++y1;
                }
            }
        },

        placeShips(player, barco, playerGrid){ //, playergrid){
            let a = random(0, gridSize)
            if (a % 2 == 0) {
                let x1 = random(0, gridSize - barco.life);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
                let y1 = Math.floor(Math.random() * gridSize);
                
                this.placeH(player, barco, x1, y1, playerGrid)
            }
            else{
                let y1 = random(0, gridSize - barco.life);                    
                let x1 = Math.floor(Math.random() * gridSize);

                this.placeV(player, barco, x1, y1, playerGrid)

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
    
    toTestLog(shooter, shootCoords){
        const find = shooter.shootsLog.findIndex(elemento => elemento[0] === shootCoords[0] && elemento[1] === shootCoords[1]);
        if (find != -1){
            console.log(`El diparo ${shootCoords} ya se ha realizado`)
        }
        else {
            this.toLog(shooter, shootCoords)
            shooter.shoots++  // Aumento en 1 los disparos realizados por el jugador shooter
        }
    },

    toLog(shooter, shootCoords){    //Añadimos el disapro al registro de diparos de cada jugador
        console.log('logeamos')
        shooter.shootsLog.push(Object.assign([], shootCoords))
    },
    
    toShoot(shooter, enemy){
        let x = random(0, gridSize-1);
        let y = random(0, gridSize-1);
        let shootCoords = [x, y]
        shooter.shootCoord = shootCoords        //Asigno el disparo a la propiedad shootCoord del jugador que dipara
        this.toTestLog(shooter, shootCoords)    //Compruebo si se ha realizado el disparo
        console.log(shooter.shootsLog)
        
        if (enemy.grid[y][x] != EMPTY){
            enemy.grid[y][x] = FIGURES[1]
            enemy.life--
        }
        else {enemy.grid[y][x] = FIGURES[0]}
        console.log(`Vida de ${shooter.name}: ${shooter.life}`)
        console.log(`Vida de ${enemy.name}: ${enemy.life}`)
    },
    start(){
        console.log ('Comenzamos')
        do {                        //Ciclo de rondas
            printLine(`Ronda  ${playerA.shoots} for ${playerA.name}`)
            this.toShoot(playerA, playerB)    
            //console.log(`Shoot #${playerA.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerB, shootCoords[0], shootCoords[1])}`)
            this.totalShoots++
            printLine('Own board')
            print_Grid(playerA.grid)
            
            console.log()
            printLine('Enemy board')
            print_Grid(playerA.grid, true) //NO LO ESTÁ HACIENDO . NO PINTA LOS TOCAS NI AGUAS NI LO DEJA VACIO
            console.log()
            
            printLine(`Ronda  ${playerB.shoots} for ${playerB.name}`)
            this.toShoot(playerB, playerA)    
            //console.log(`Shoot #${playerB.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${W_F(playerA, shootCoords[0], shootCoords[1])}`)
            this.totalShoots++
            printLine('Own board')
            print_Grid(playerB.grid)
            
            console.log()
            printLine('Enemy board')
            print_Grid(playerA.grid, true) //NO LO ESTÁ HACIENDO . NO PINTA LOS TOCAS NI AGUAS NI LO DEJA VACIO
            console.log()
        }

        while (this.totalShoots < 8 && playerA.life != 0 && playerB.life != 0) {

            
            /*if (shoot % 2 == 0){            //DISPARO PLAYER B
            //toShoot(playerB);
            //toLog(playerB)
            //damage (playerA, shootCoords[0], shootCoords[1])
            console.log()
            
            //to_win();
        } 
        else {                          //DISPARO PLAYER A
            //toShoot(playerA);
            //toLog(playerA)  
                //damage (playerB, shootCoords[0], shootCoords[1])
                console.log()
                //to_win()
            }*/
        }
    }, 

    toWin(shooter){
        return shooter.name
    },
}
function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}