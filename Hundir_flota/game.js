import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES, FIGURES} from './data.js'
import * as board from './board.js'
import { gridSize, EMPTY, playerAGrid, playerBGrid } from './board.js'
import usePrinter from './printer.js'
const { printHeading, printLine, print_Grid } = usePrinter()

export default {
    rondas: 0,
    totalShoots: 0,
    setUpGame: {  // funciones de inicio del juego      
        pos: 0,
        createBoards() {
            board.create_Grid(size),
            board.create_Headers(size)
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
            ],
            player.positions = [[],[],[],[],[],[],[],[],[],[]]
        },


        playerShip(player, playerGrid){
            let i = 0;
            for (i = 0; i < 10; i++){
                if (i == 0){
                    this.pos = i;
                    this.placeShips(player, player.ships[i].PORTAAVIONES, playerGrid)
               }
                else if (i == 1){
                    this.pos = i;
                    this.placeShips(player, player.ships[i].BUQUE, playerGrid)
                    
                }
                else if (i == 2 || i == 3){
                    this.pos = i;
                    this.placeShips(player, player.ships[i].SUBMARINO, playerGrid)
                }
                else if (i == 4 || i == 5 || i == 6){
                    this.pos = i;
                    this.placeShips(player, player.ships[i].CRUCERO, playerGrid)
                }
                else {
                    this.pos = i;
                    this.placeShips(player, player.ships[i].LANCHA, playerGrid)
                }
            }
        },
        //Colocar los barcos de los jugadores
        //player.positions[this.pos].push(Object.assign([], this.array))
        //
        randomCoords(barco, gridSize){
            let x1 = random(0, gridSize - barco.life);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
            let y1 = Math.floor(Math.random() * gridSize);
            let array = [x1, y1]
            return array
        },

        freeSpace(player, barco, coords, gridSize, playerGrid, find){           
            for(let i = 0; i < 10; i++){
                find = player.positions[i].findIndex(element => element[0] === coords[0] && element[1] === coords[1]);
                console.log('freeSpace ' + find)
                if (find !=-1 && coords[0] > 0 && coords[0] < gridSize - barco.life){
                    break
                }
            }
            return find
        },
        
        testCoords(player, barco, coords, gridSize, playerGrid, find){ //<-- FIND IGNORA EL PLAYER POSITION
            let array = [coords[0],coords[1]];
            for(let j = 0; j < barco.life; j++){
                if (array[0] >= gridSize || playerGrid[array[1]][array[0]] != EMPTY){
                    console.log('Detecta el empty')
                    find = 0
                    break
                }
                ++array[0]
            }
            return find 
        },

        place(player, barco, coords, gridSize, playerGrid){
            for (let i = 0; i < barco.life; i++){
                playerGrid[coords[1]][coords[0]] = barco.figure;
                player.positions[this.pos].push(Object.assign([], coords))
                ++coords[0]   
            }
            console.log(player.positions)
        },

        placeShips(player, barco, playerGrid){
            let find = '';
            let coords = '';
            let a = random(0, gridSize)
            if (a % 2 == 0) {
                console.log('Pongo horizontales')  
            }
            else{
                console.log('Pongo verticales')
            }
            do {
                coords = this.randomCoords(barco, gridSize) //Me devuelve array de coordenadas          
                find = this.freeSpace(player, barco, coords, gridSize, playerGrid, find) //Devuelve si está libre o no esa coordenada
                find = this.testCoords(player, barco, coords, gridSize, playerGrid, find) // Devuelve si se puede colocar el barco ahí o no.
            }
            while (find != -1 && coords[0] <= gridSize - barco.life)
            this.place(player, barco, coords, gridSize, playerGrid)                         
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
        let dead = false;  //VER POR QUÉ SALTA A ESTA LÍNEA DESDE PLACE(){}
        while (dead == false && this.totalShoots < 10){
            console.log(this.totalShoots)
            //this.toDecide()
            /*this.round(shooter, enemy)    
            this.TestLife(enemy)*/
            this.totalShoots++ 
        } 
        printHeading('THE BATTTLESHIP SIMULATOR HAS ENDED')
        //printHeading(`THE WINNER IS: ${shooter}`)*/
    },

    }
}

function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}