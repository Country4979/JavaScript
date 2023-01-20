export class BARCO {
    constructor (id, figure, length, position) {
        this.id = id;
        this.figure = figure;
        this.length = length;
        this.position = position;
    }
    //métodos que necesitan los barcos

    //function lengthRest --> Restar vida al barco
    //function touched --> A quién le ha dado un disparo
    //function touchedAndSunk --> nos dice qué barco se ha hundido
}

export class PLAYER {
    constructor (name, grid, life, shoots, shootsLog, ship){
        this.name = name;
        this.grid = grid;
        this.life = life;
        this.shoots = shoots;
        this.shootsLog = shootsLog;
        this.ship = ship;
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
    }
    //DISPARAR
    toShoot() {
        let x1 = random(0, 10)
        let y1 = random(0, 10)
        // function toTestLog() --> si está en el shootLog
        // function si tocado o agua
        //function lifeRest --> Restar vida
    }*/

};

export const gridSize = 10; //Tamaño del tablero

export const FIGURES = [];