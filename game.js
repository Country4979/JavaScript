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
            ],
            player.positions = [[],[],[],[],[],[],[],[],[],[]]
        },

        pos: 0,

        playerShip(player1, playerGrid){
            let i = 0;
            for (i = 0; i < 10; i++){
                if (i == 0){
                    this.pos = i;  
                    this.placeShips(player1, player1.ships[i].PORTAAVIONES, playerGrid)
               }
                else if (i == 1){
                    this.pos = i;
                    this.placeShips(player1, player1.ships[i].BUQUE, playerGrid)
                    
                }
                else if (i == 2 || i == 3){
                    this.pos = i;
                    this.placeShips(player1, player1.ships[i].SUBMARINO, playerGrid)
                }
                else if (i == 4 || i == 5 || i == 6){
                    this.pos = i;
                    this.placeShips(player1, player1.ships[i].CRUCERO, playerGrid)
                }
                else {
                    this.pos = i;
                    this.placeShips(player1, player1.ships[i].LANCHA, playerGrid)
                }
            }
        },
        //Colocar los barcos de los jugadores
        BORRARESTO(){
        /*freeSpace(player, playerGrid, x1, y1) {
            let array = [x1, y1]
            for (let i= 0; i < 10; i++){
                const find = player.position[i].findIndex(element => element[0] === array[0] && element[1] === array[1]);
                return find
            }
        },
        freeSpaceH(playerGrid, barco, x1, y1) {
            let noEmpty = 0;    
            for (let i = 0; i < barco.life; i++){
                if (playerGrid[y1][x1] == EMPTY){          
                    ++x1;
                    
                } else {
                    ++noEmpty;  
                    break
                }
            }
            console.log(noEmpty)
            return noEmpty
        },

        freeSpaceV(playerGrid, barco, x1, y1) {
            let noEmpty = 0;
            for (let i = 0; i < barco.life; i++){
                if (playerGrid[y1][x1] == EMPTY){          
                    ++y1;
                    
                } else {
                    ++noEmpty;
                    break   
                }
            console.log(noEmpty)
            return noEmpty
            }   
        },*/

        /*placeH(player, barco, x1, y1, playerGrid){
            
            if (
                this.freeSpace(player, playerGrid, x1, y1) === -1 || this.freeSpace(player, playerGrid, x1, y1) == undefined){
                //this.freeSpaceH(player, playerGrid, barco, x1, y1) === 0) {    
                this.placeShipsH(player, barco, x1, y1, gridSize, playerGrid)
            }
            else {
                this.place(player, barco, playerGrid)
                }
        },
            
        placeV(player, barco, x1, y1, playerGrid){
            
            if (this.freeSpace(player, playerGrid, x1, y1) === -1 || this.freeSpace(player, playerGrid, x1, y1) == undefined){
                //this.freeSpaceV(player, playerGrid, barco, x1, y1) == 0) {    
                this.placeShipsV(player, barco, x1, y1, gridSize, playerGrid)
                }
            else {
                this.place(player, barco, playerGrid)
            }
        },*/},

        placeShipsH(player, barco, x1, y1, gridSize, grid) {
            let array = [x1, y1];
            let find = ''; 
            for (let i= 0; i < 10; i++){
                find = player.positions[i].findIndex(element => element[0] === array[0] && element[1] === array[1]);
                console.log(find)
            }
            for (let i = 0; i < barco.life; i++){
                if (find == -1 && x1 < gridSize && x1 >= 0){
                    let array = [x1, y1];
                    //grid[y1][x1] == EMPTY && x1 < gridSize && x1 >= 0){
                    grid[y1][x1] = barco.figure;
                    //array = [++x1,y1]
                    player.positions[this.pos].push(Object.assign([], array))
                    ++x1;   
//console.log('valor ' + player.ships[this.pos].barco.position)               // <-- NO FUNCIONA
                    //barco.position.push(Object.assign([], array))
                                       
                }
                else{
                    this.place(player, barco, grid)
                }
            }
            console.log(player.positions)
        },
        
        placeShipsV(player, barco, x1, y1, gridSize, grid) {
            let array = [x1, y1];
            let find = -1; 
            for (let i= 0; i < 10; i++){
                find = player.positions[i].findIndex(element => element[0] === array[0] && element[1] === array[1]);
                if (find != -1){
                    break
                }

            } 
            //console.log(player.name)                                        //borrer
            //console.log(`valor de pos ${this.pos}`)                                        //borrer
            for (let i = 0; i < barco.life; i++){
                if (find == -1 && x1 < gridSize && x1 >= 0){
                    let array = [x1, y1];
                    //grid[y1][x1] == EMPTY && y1 < gridSize && y1 >= 0){
                    grid[y1][x1] = barco.figure;
                    //array = [x1, ++y1]
                    player.positions[this.pos].push(Object.assign([], array))
                    ++y1;
//console.log('valor ' + player.ships[this.pos].barco.position)                 // <-- NO FUNCIONA
                    //barco.position.push(Object.assign([], array))  
                }
                else{
                    this.place(player, barco, grid)
                }
            }
            console.log(player.positions)
        },
        
        place(player, barco, playerGrid){
            
            let a = random(0, gridSize)
            if (a % 2 == 0) {
                let x1 = random(0, gridSize - barco.life);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
                let y1 = Math.floor(Math.random() * gridSize);
console.log(`Esto es x: ${x1} y esto es y: ${y1}`)              //Borrar
                this.placeShipsH(player, barco, x1, y1, gridSize, playerGrid)
                
            }
            else{
                let y1 = random(0, gridSize - barco.life);                    
                let x1 = Math.floor(Math.random() * gridSize);
console.log(`Esto es x: ${x1} y esto es y: ${y1}`)              //Borrar
                this.placeShipsV(player, barco, x1, y1, gridSize, playerGrid)
                
            }
        },

        placeShips(player, barco, playerGrid){
            
            this.place(player, barco, playerGrid)           
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
    
    toShoot(shooter, enemy){
        let x = random(0, gridSize-1);
        let y = random(0, gridSize-1);
        let shootCoords = [x, y]
        shooter.shootCoord = shootCoords //Asigno el disparo a la propiedad shootCoord del jugador que dipara
        return shootCoords
    },

    toTestLog(shooter, enemy, shootCoords){
        const find = shooter.shootsLog.findIndex(elemento => elemento[0] === shootCoords[0] && elemento[1] === shootCoords[1]);
        if (find != -1){
            this.toShoot(shooter, enemy)
        }
        else {
            shooter.shoots++  // Aumento en 1 los disparos realizados por el jugador shooter
            this.toLog(shooter, shootCoords)
        }
    },

    toLog(shooter, shootCoords){    //Añadimos el disapro al registro de diparos de cada jugador
        shooter.shootsLog.push(Object.assign([], shootCoords))
    },

    toSeeEnemyGrid(shootCoords, enemy){
        let figurin = '';
        if (enemy.grid[y][x] != EMPTY){
            enemy.grid[y][x] = FIGURES[1]
            enemy.life--
            figurin = '🔥'
        }
        else {
            enemy.grid[y][x] = FIGURES[0]
            figurin = '💧'
        }
        
    },

    TestLife(enemy){
        if (enemy.life == 0){
            this.dead = true
        }
    },
    
    round(shooter, enemy) {
        printLine(`Ronda ${shooter.shoots} for ${shooter.name}`)
        this.toShoot(shooter, enemy)
        this.toTestLog(shooter, enemy, shootCoords)    //Compruebo si se ha realizado el disparo
        toSeeEnemyGrid(shootCoords, enemy)             // Miro en el tablero del enemigo
        console.log(`Shoot #${shooter.shoots} pointing to ${shootCoords[1]}${String.fromCharCode(shootCoords[0] + 65)}: ${figurin}`)
        console.log(`${100 - shooter.shoots} shots left`)        
        console.log(this.totalShoots)    //Borrar luego
        
        printLine('Own board')
        print_Grid(shooter.grid)
        
        console.log()
        printLine('Enemy board')
        print_Grid(enemy.grid, true)
        console.log()
        this.totalShoots++
        
        console.log(shooter.shootsLog)      //Borrar luego
        console.log(`Vida de ${shooter.name}: ${shooter.life}`)     //Borrar luego
        console.log(`Vida de ${enemy.name}: ${enemy.life}`)     //Borrar luego
    },

    toDecide(){
        let who = 1;
        if(who % 2 == 0){
            this.shooter = playerB
            this.enemy = playerA
        }
        else{
            this.shooter = playerA
            this.enemy  = playerB
        }
        who++
    },
    
    start(){
        let shooter = '';
        let enemy = '';
        let dead = false;
        while (dead == false && this.totalShoots < 10){
            console.log(this.totalShoots)
            //this.toDecide()
            /*this.round(shooter, enemy)    
            this.TestLife(enemy)*/
            this.totalShoots++ 
        } 
        printHeading('THE BATTTLESHIP SIMULATOR HAS ENDED')
        //printHeading(`THE WINNER IS: ${shooter}`)*/
    }

    }

function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}