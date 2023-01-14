class BARCO {
    constructor (figure, length, firstPosition, lastposition) {
        this.figure = figure;
        this.length = length;
        this.firstPosition = firstPosition;
        this.lastPosition = lastposition;
    }
}
export const LANCHA = new BARCO('🛶  |', 1, ['x0', 'y0'], ['x1', 'y1'])
export const CRUCERO = new BARCO('🚤  |', 2, ['x0', 'y0'], ['x1', 'y1'])
export const SUBMARINO = new BARCO(' 🛳  |', 3, ['x0', 'y0'], ['x1', 'y1'])
export const BUQUE = new BARCO(' 🛥  |', 4, ['x0', 'y0'], ['x1', 'y1'],
   /* placeShipX: function(x, y, figure, myGrid){
        let x1  = random(0, 10 - length);                     //Obtengo un número aleatorio entre 0 y 6, que es el espacio máximo en el que puede colocarse este barco.
        let y1 = Math.floor(Math.random() * 10);
            if(grid[y1][x1] == EMPTY && grid[y1][x1+1] == EMPTY && grid[y1][x1+2] == EMPTY && grid[y1][x1+3] == EMPTY && x1 < 10 && x1 >= 0){
                for(let i = 0; i < BUQUE.length; i++){
                    grid[y1][x1] = figure;
                    x1++;
                }
            }
    }*/
);
export const PORTAAVIONES = new BARCO('🚢  |', 5, ['x0', 'y0'], ['x1', 'y1'])
export const EMPTY = ' -  |'

export const FIGURE_SHOOT = ['  💧  ', '  🔥  ']

/* PLAYERS
export class PLAYER {
    constructor (name, grid, ships, shoots, life, coorShoot, coordAllShoots){
        this.name = name
        this.grid = grid
        this.ships = {          
            lancha1: LANCHA,
            lancha2: LANCHA,
            lancha3: LANCHA,

            crucero1: CRUCERO,
            crucero2: CRUCERO,
            crucero3: CRUCERO,

            submarino1: SUBMARINO,
            submarino2: SUBMARINO,

            buque: BUQUE,

            portaaviones: PORTAAVIONES
        }
        this.shoots = 0,        //Disparos realizados por el jugador
        this.life = ships.lancha1.LANCHA[1] + this.ships.lancha2[1] + ships.lancha3[1] + this.ships.crucero1[1] + this.ships.crucero2[1] + this.ships.crucero3[1] + this.ships.submarino1[1] + this.ships.submarino2[1] + this.ships.buque[1] + this.ships.portaaviones[1]
        this.coordShoot = []    //Coordenadas del disparo
        this.coordAllShoots = []    //Todas las coordenadas para no repetir el disparo
    }
}

export const PLAYER_A = new PLAYER('PLAYER A', playerAGrid, BARCO[1], 0, BARCO[3], [], [])
export const PLAYER_B = new PLAYER('PLAYER B', playerBGrid, BARCO[1], 0, BARCO[3], [])
*/