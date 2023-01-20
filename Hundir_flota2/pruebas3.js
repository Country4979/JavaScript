const playerA = {
    name: 'Player A',
    life: 5,
    shoots: 1,
    shootCoordsLog: [[6,5], [0,1]],
    portaaviones: [],
    /*shipCoords(player, typeShip, life){     //MÉTODO PARA PONER LA POSICION DEL BARCO -- ver como hacer para que el numeo d ciclos = vida barco
                            //cOMO ES EN ORDEN¿?
        let x1 = randomCoords[0];
        let y1 = randomCoords[1];
        let totalposition = []
        for(let i = 0; i < (life-1); i++){
                totalposition.push(randomCoords.map(e => e))
                console.log(`Posicion total: ${totalposition}`)
                randomCoords[0] = ++x1
                this.typeShip.push(randomCoords.map(e => e))
        }
    }*/
}
const shootCoords = [6,5];
function toFind(){
    
    const find = playerA.shootCoordsLog.findIndex(elemento => elemento[0] === shootCoords[0] && elemento[1] === shootCoords[1]);
        console.log(find)
        if (find != -1){
            console.log(`El diparo ${shootCoords} ya se ha realizado`)
        }
        else {
            console.log('Well done!')
        }
}

toFind()