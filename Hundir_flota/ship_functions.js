import { LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES, EMPTY } from './data.js'
import { random, playerAGrid, playerBGrid, x, y } from './game.js'



//FUNCIONES DEL PORTAAVIONES

export function PortaavionesH(x, y, figure, grid) {            //Función para colocar los barcos el portaaviones en el eje X
    let x1  = random(0, 10 - PORTAAVIONES.length);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);            //Obligo a colocarlo entre el  0 y el 10 y en celda EMPTY
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] = EMPTY && x < 10 && x >= 0){
            grid[y1][x1] = figure;
            x1++;
        }
}

export function PortaavionesV(x, y, figure, grid) {            //Función para colocar los barcos el portaaviones en el eje Y
    let y1  = random(0, 10 - PORTAAVIONES.length);                    
    let x1 = Math.floor(Math.random() * 10);
    for (let i = 0; i < 5; i++)
        if (grid[y1][x1] = EMPTY && y < 10 && y >= 0){
            grid[y1][x1] = figure;
            y1++;
        }
    return y1 - 4
}

export function placePortaaviones(){                          //Decide si se dispondrá en posición vertical u horizontal
    let a = random(0, 10)
    if (a % 2 == 0) {
        PortaavionesH(x, y,'🚢  |', playerAGrid)
    }
    else{
        PortaavionesV(x, y,'🚢  |', playerAGrid)
    }
}

//FUNCIONES BUQUE
export function placeBuqueX(x, y, figure, grid){               //Coloca el buque en el eje X
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

export function placeBuqueV(x, y, figure, grid){               //Coloca el buque en el eje Y
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

export function placeBuque(){                                 //Decide si se dispondrá en posición vertical u horizontal                              
    let a = random(0, 10)
    if (a % 2 == 0) {
        placeBuqueX(x, y, BUQUE.figure, playerAGrid)
    }
    else{
        placeBuqueV(x, y, BUQUE.figure, playerAGrid)
    }
}

//FUNCIONES SUBMARINOS

export function placeSubmarinoX(x, y, figure, grid) {           //Coloca el submarino en el eje X
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

export function placeSubmarinoV(x, y, figure, grid) {           //Coloca el submarino en el eje Y
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

export function placeSubmarino(){                              //Decide si se dispondrá en posición vertical u horizontal
    
    for(let i = 0; i < 2; i++){                         //Coloca 2 submarinos
        let a = random(0, 10)
        if (a % 2 == 0) {
            placeSubmarinoX(x, y,SUBMARINO.figure, playerAGrid)
        }
        else{
            placeSubmarinoV(x, y,SUBMARINO.figure, playerAGrid)
        }
    }
}

//FUNCIONES CRUCERO

export function placeCruceroX(x, y, figure, grid) {           //Coloca el crucero en el eje X
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

export function placeCruceroV(x, y, figure, grid) {           //Coloca el crucero en el eje Y
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

export function placeCrucero(){
    
    for(let i = 0; i < 3; i++){                     //Coloca 3 cruceros
        let a = random(0, 10)
        if (a % 2 == 0) {
            placeCruceroX(x, y, CRUCERO.figure, playerAGrid)
        }
        else{
            placeCruceroV(x, y, CRUCERO.figure, playerAGrid)
        }
    }
}

//FUNCIÓN PARA COLOCAR LAS LANCHAS

export function placeLancha(x, y, figure, grid) { 
    let y1 = Math.floor(Math.random() * 10);                     
    let x1 = Math.floor(Math.random() * 10);
    for(let i = 0; i < 3; i++){                 //Coloca 3 lanchas
        while (grid[y1][x1] != EMPTY  && y < 10 && y >= 0 && x < 10 && x >= 0){
            y1 = Math.floor(Math.random() * 10);                    
            x1 = Math.floor(Math.random() * 10);
        }    
        grid[y1][x1] = figure; 
    }
}
