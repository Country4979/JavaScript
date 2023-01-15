import { LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES, EMPTY } from './data.js'
import { random, playerAGrid, playerBGrid, x, y } from './game.js'



//FUNCIONES DEL PORTAAVIONES
export default function placeShips(){
    function placePortaavionesH(figure, grid) {            //Función para colocar los barcos el portaaviones en el eje X
        let x1  = random(0, 10 - PORTAAVIONES.length);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
        let y1 = Math.floor(Math.random() * 10);            //Obligo a colocarlo entre el  0 y el 10 y en celda EMPTY
        for (let i = 0; i < 5; i++)
            if (grid[y1][x1] = EMPTY && x < 10 && x >= 0){
                grid[y1][x1] = figure;
                x1++;
            }
    }

    function placePortaavionesV(figure, grid) {            //Función para colocar los barcos el portaaviones en el eje Y
        let y1  = random(0, 10 - PORTAAVIONES.length);                    
        let x1 = Math.floor(Math.random() * 10);
        for (let i = 0; i < 5; i++)
            if (grid[y1][x1] = EMPTY && y < 10 && y >= 0){
                grid[y1][x1] = figure;
                y1++;
            }
        return y1 - 4
    }

    function placePortaaviones(playerGrid){                          //Decide si se dispondrá en posición vertical u horizontal
        let a = random(0, 10)
        if (a % 2 == 0) {
            placePortaavionesH(PORTAAVIONES.figure, playerGrid)
        }
        else{
            placePortaavionesV(PORTAAVIONES.figure, playerGrid)
        }
    }

    //FUNCIONES BUQUE
    function placeBuqueH(figure, grid){               //Coloca el buque en el eje X
        let x1  = random(0, 10 - BUQUE.length);                     
        let y1 = Math.floor(Math.random() * 10);
        while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY || grid[y1][x1+3] != EMPTY && x < 10 && x >= 0){ //Obligo que todas las celdas consecutivas sean EMPTY y entre en el tablero
            x1  = random(0, 10 - BUQUE.length);                     
            y1 = Math.floor(Math.random() * 10);
        }    
        for(let i = 0; i < BUQUE.length; i++){
            grid[y1][x1] = figure;
            x1++;
        }
    }

    function placeBuqueV(figure, grid){               //Coloca el buque en el eje Y
        let y1  = random(0, 10 - BUQUE.length);                     
        let x1 = Math.floor(Math.random() * 10);
        while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY || grid[y1+2][x1] != EMPTY || grid[y1+3][x1] != EMPTY && y < 10 && y >= 0){
            y1  = random(0, 10 - BUQUE.length);                     
            x1 = Math.floor(Math.random() * 10);
        }    
        for(let i = 0; i < BUQUE.length; i++){
            grid[y1][x1] = figure;
            y1++;
        }
    }

    function placeBuque(playerGrid){                                 //Decide si se dispondrá en posición vertical u horizontal                              
        let a = random(0, 10)
        if (a % 2 == 0) {
            placeBuqueH(BUQUE.figure, playerGrid)
        }
        else{
            placeBuqueV(BUQUE.figure, playerGrid)
        }
    }

    //FUNCIONES SUBMARINOS

    function placeSubmarinoH(figure, grid) {           //Coloca el submarino en el eje X
        let x1  = random(0, 10 - SUBMARINO.length);                     
        let y1 = Math.floor(Math.random() * 10);
        while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY || grid[y1][x1+2] != EMPTY  && x < 10 && x >= 0){
            x1  = random(0, 10 - SUBMARINO.length);                     
            y1 = Math.floor(Math.random() * 10);
        }    
        for(let i = 0; i < SUBMARINO.length; i++){
            grid[y1][x1] = figure;
            x1++;
        }
    }

    function placeSubmarinoV(figure, grid) {           //Coloca el submarino en el eje Y
        let y1  = random(0, 10 - SUBMARINO.length);                     
        let x1 = Math.floor(Math.random() * 10);
        while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY || grid[y1+2][x1] != EMPTY && y < 10 && y >= 0){
            y1  = random(0, 10 - SUBMARINO.length);                     
            x1 = Math.floor(Math.random() * 10);
        }    
        for(let i = 0; i < SUBMARINO.length; i++){
            grid[y1][x1] = figure;
            y1++;
        }
    }

    function placeSubmarino(playerGrid){                              //Decide si se dispondrá en posición vertical u horizontal
        
        for(let i = 0; i < 2; i++){                         //Coloca 2 submarinos
            let a = random(0, 10)
            if (a % 2 == 0) {
                placeSubmarinoH(SUBMARINO.figure, playerGrid)
            }
            else{
                placeSubmarinoV(SUBMARINO.figure, playerGrid)
            }
        }
    }

    //FUNCIONES CRUCERO

    function placeCruceroH(figure, grid) {           //Coloca el crucero en el eje X
        let x1  = random(0, 10 - CRUCERO.length);                     
        let y1 = Math.floor(Math.random() * 10);
        while (grid[y1][x1] != EMPTY || grid[y1][x1+1] != EMPTY  && x < 10 && x >= 0){
            x1  = random(0, 10 - CRUCERO.length);                     
            y1 = Math.floor(Math.random() * 10);
        }    
        for(let i = 0; i < CRUCERO.length; i++){
            grid[y1][x1] = figure;
            x1++;
        }
    }

    function placeCruceroV(figure, grid) {           //Coloca el crucero en el eje Y
        let y1  = random(0, 10 - CRUCERO.length);                     
        let x1 = Math.floor(Math.random() * 10);
        while (grid[y1][x1] != EMPTY || grid[y1+1][x1] != EMPTY && y < 10 && y >= 0){
            y1  = random(0, 10 - CRUCERO.length);                     
            x1 = Math.floor(Math.random() * 10);
        }    
        for(let i = 0; i < CRUCERO.length; i++){
            grid[y1][x1] = figure;
            y1++;
        }
    }

    function placeCrucero(playerGrid){
        
        for(let i = 0; i < 3; i++){                     //Coloca 3 cruceros
            let a = random(0, 10)
            if (a % 2 == 0) {
                placeCruceroH(CRUCERO.figure, playerGrid)
            }
            else{
                placeCruceroV(CRUCERO.figure, playerGrid)
            }
        }
    }

    //FUNCIÓN PARA COLOCAR LAS LANCHAS

    function placeLancha(playerGrid) { 
        let y1 = Math.floor(Math.random() * 10);                     
        let x1 = Math.floor(Math.random() * 10);
        for(let i = 0; i < 3; i++){                 //Coloca 3 lanchas
            while (grid[y1][x1] != EMPTY  && y < 10 && y >= 0 && x < 10 && x >= 0){
                y1 = Math.floor(Math.random() * 10);                    
                x1 = Math.floor(Math.random() * 10);
            }    
            playerGrid[y1][x1] = LANCHA.figure; 
        }
    }
    return {
        placePortaaviones, placePortaavionesH, placePortaavionesV,
        placeBuque, placeBuqueH, placeBuqueV,
        placeSubmarino, placeSubmarinoH, placeSubmarinoV,
        placeCrucero, placeCruceroH, placeBuqueV,
        placeLancha
    }
}