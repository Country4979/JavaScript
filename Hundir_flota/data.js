import { playerAGrid, playerBGrid } from "./board.js";
class BARCO  {
    constructor (typeship){
        this.typeship = typeship
    }
    //métodos que necesitan los barcos
    
    //function lengthRest --> Restar vida al barco
    //function touched --> A quién le ha dado un disparo
    //function touchedAndSunk --> nos dice qué barco se ha hundido
}
class TYPESHIP {
    constructor (figure, life, position) {
        this.figure = figure;
        this.life = life;
        this.position = position;
    }
}

export const LANCHA = new TYPESHIP('🛶  |', 1, [])
export const CRUCERO = new TYPESHIP('🚤  |', 2, [])
export const SUBMARINO = new TYPESHIP(' 🛳  |', 3, [])
export const BUQUE = new TYPESHIP(' 🛥  |', 4,  [])
export const PORTAAVIONES = new TYPESHIP('🚢  |', 5, [])

class PLAYER {
    constructor (name, grid, life, shoots, shootCoord, shootsLog, ships){
        this.name = name;
        this.grid = grid;
        this.life = life;
        this.shoots = shoots;
        this.shootCoord = shootCoord;
        this.shootsLog = shootsLog;
        this.ships = ships;
    }
    //Métodos que necesita cada jugador

    /*
    //Colocar CUALQUIER BARCO en el tablero
    toPlace (ship, x1, y1){
        let totalposition = []
        console.log (randomCoords)
       this.ship[ship].position.push(Object.assign([], randomCoords))
        for(let i = 0; i < (this.ship[ship].life-1); i++){
                totalposition.push(randomCoords.map(e => e))
                randomCoords[0] = ++x1
                //Object.assign(this.ship[ship].position.push(randomCoords.map(e => e)))
                (this.ship[ship].position.push(randomCoords.map(e => e)))
            }
    }*/

};
export const playerA = new PLAYER('Player A', playerAGrid, 24, 0, [], [])
export const playerB = new PLAYER('Player B', playerBGrid, 24, 0, [], [])

export const FIGURES = [' 💧 |', ' 🔥 |'];

//console.log(PORTAAVIONES.figure)