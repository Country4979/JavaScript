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
                if (find !=-1 && coords[0] > 0 && coords[0] < gridSize - barco.life){
                    break
                }
            }
            return find
        },
        
        testCoords(player, barco, coords, gridSize, playerGrid, find, a){
            let array = [coords[0],coords[1]];
            if (a == 'Par'){
                for(let j = 0; j < barco.life; j++){
                    if (array[0] > gridSize - 1 || playerGrid[array[1]][array[0]] != EMPTY){
                        find = 0
                        break
                    }
                    ++array[0]
                }  
            }
            else{
                for(let j = 0; j < barco.life; j++){
                    if (array[1] > gridSize - 1 || playerGrid[array[1]][array[0]] != EMPTY){
                        find = 0
                        break
                    }
                    ++array[1]
                }
            }
            return find 
        },

        place(player, barco, coords, gridSize, playerGrid, a){
            for (let i = 0; i < barco.life; i++){
                playerGrid[coords[1]][coords[0]] = barco.figure;
                player.positions[this.pos].push(Object.assign([], coords))
                if (a == 'Par'){
                    ++coords[0]
                }
                else {
                    ++coords[1]
                }  
            }
        },

        placeShips(player, barco, playerGrid){
            let find = '';
            let coords = '';
            let a = random(0, gridSize)
            if (a % 2 == 0) {
                a = 'Par'  
            }
            else{
                a = 'Impar'
            }
            do {
                coords = this.randomCoords(barco, gridSize) //Me devuelve array de coordenadas          
                find = this.freeSpace(player, barco, coords, gridSize, playerGrid, find) //Devuelve si está libre o no esa coordenada
                find = this.testCoords(player, barco, coords, gridSize, playerGrid, find, a) // Devuelve si se puede colocar el barco ahí o no.
            }
            while (find != -1 && coords[0] <= gridSize - barco.life)
            this.place(player, barco, coords, gridSize, playerGrid, a)                         
        },
    },
  
    

    toShoot(shooter, enemy){
        let x = random(0, gridSize-1);
        let y = random(0, gridSize-1);
        let x1 = random(0, gridSize-1);
        let y1 = random(0, gridSize-1);
        let shooterShootCoord = [x, y]
        let enemyShootCoord = [x1, y1]
        shooter.shootCoord = shooterShootCoord //Asigno el disparo a la propiedad shootCoord del jugador que dipara
        enemy.shootCoord = enemyShootCoord
    },

    toTestLog(shooter, enemy, shootCoord, find){
        console.log(find)
        for (let i = 0; i <= shooter.shootsLog.length; i++){
            find = shooter.shootsLog.findIndex(elemento => {elemento[0] === shootCoord[0] && elemento[1] === shootCoord[1]})
            
            if (find != -1){
                break
            }
        }
        return find
    },
    
    toLog(shooter, shootCoord){    //Añadimos el disapro al registro de diparos de cada jugador
        shooter.shootsLog.push(Object.assign([], shootCoord))
        shooter.shoots++
        console.log(`Disparo ${shootCoord} registrado correctamente`)},

    /*touchedAndSunk(barco){
        barco.life--
        if(barco.life == 0) {
            console.log(`The ship ${barco.id} has been sunk. Well done!!`)
        }
        else {
            //función next player
        }
    }



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
        
    }

    TestLife(enemy){
        if (enemy.life == 0){
            this.dead = true
        }
    }*/
    
    round(shooter, enemy, countRound) {
        let find = 'Soy find';
        printLine(`Ronda ${countRound} for ${shooter.name}`)
        do {this.toShoot(shooter, enemy)
            console.log( shooter.shootCoord)
            find = this.toTestLog(shooter, enemy, shooter.shootCoord, find)    //Compruebo si se ha realizado el disparo    
            printLine(`Ronda ${countRound} for ${enemy.name}`)
            console.log(enemy.shootCoord)
            
        }
        while (find != -1)
  
        this.toLog(shooter, shooter.shootCoord)
        console.log(find)
        /*toSeeEnemyGrid(shootCoords, enemy)             // Miro en el tablero del enemigo
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
        console.log(`Vida de ${enemy.name}: ${enemy.life}`)     //Borrar luego*/
    },

    toDecide(){
        let who = this.totalShoots;
        if(who % 2 == 0){
            this.shooter = playerA
            this.enemy = playerB
        }
        else{
            this.shooter = playerB
            this.enemy  = playerA  
        }
        return this.shooter, this.enemy
    },

    start(){
        let shooter = '';
        let enemy = '';
        let dead = false;
        let countRound = 0;
        while (dead == false && this.totalShoots < 20){
            this.toDecide()
            this.round(this.shooter, this.enemy, countRound)    //<-- HACE ALGO RARO CON EL ORDEN
            //this.TestLife(enemy)
            this.totalShoots++
            countRound++
        }
        console.log()
        printHeading('THE BATTTLESHIP SIMULATOR HAS ENDED')
        console.log( playerA.shootsLog, playerA.shoots)
        console.log( playerB.shootsLog, playerB.shoots)
        //printHeading(`THE WINNER IS: ${shooter}`)*/
    },

    }

function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
}