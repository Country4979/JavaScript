import { playerA, playerB, LANCHA, CRUCERO, SUBMARINO, BUQUE, PORTAAVIONES } from './data.js'

export default {
    rondas: 0,
    totalShoots: 0,
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

    setupGame(player){  // funciones de inicio del juego      
        return {shipsToPlayers}    
    },
     
        //Crear tablero
    start(){}, //Ciclo de las rondas
    //funión nextplayer
    toWin(){
        return 'Aún no lo sé'
    },
}