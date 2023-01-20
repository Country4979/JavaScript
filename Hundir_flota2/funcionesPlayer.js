const playerA = {
    name: 'Player A',
    //grid: playerAGrid,
    life: 24,
    shoots: 1,
    shootCoordsLog: [[6,5], [0,1], [0,2], [0,3], [0,4], [0,5]],
    ship: [ //position aqui no hace falta
        {id: 'Portaaviones', figure: '🚢  |', life: 5, position: []},
        {id: 'Buque', figure: ' 🛥  |', life: 4, position: []},
        {id: 'Submarino1', figure: ' 🛳  |', life: 3, position: []},
        {id: 'Submarino2', figure: ' 🛳  |', life: 3, position: []},
        {id: 'Crucero1', figure: '🚤  |', life: 2, position: []},
        {id: 'Crucero2', figure: '🚤  |', life: 2, position: []},
        {id: 'Crucero3', figure: '🚤  |', life: 2, position: []},
        {id: 'lancha1', figure: '🛶  |', life: 1, position: []},
        {id: 'lancha2', figure: '🛶  |', life: 1, position: []},
        {id: 'lancha3', figure: '🛶  |', life: 1, position: []},
    ],

    totalPositons: [{id: 'portaaviones', positoin:[0,5] }],
    toShoot() {
        let x1 = random(0, 10)
        let y1 = random(0, 10)
        // function toTest() --> si está en el log
    },

    shipCoords (ship, x1, y1){
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
};

// en grid hay que poner player.ship[el que corresponda.figure]
function random(min, max) {                     
    return Math.floor((Math.random() * (max - min + 1)) + min)
};

function randomCoords(){
    let x1  = random(0, 10 - playerA.ship[0].life);      //Obtengo un número aleatorio para el espacio máximo en el que puede colocarse este barco.
    let y1 = Math.floor(Math.random() * 10);
}

/*randomCoords[0] = x1;
/*randomCoords[1] = y1;
/*let disparito = [1,6]

playerA.shipCoords(0, x1, y1)

console.log(playerA.ship[0])


let find = playerA.ship[0].position.findIndex(e => e = disparito)
console.log(find)*/

/*function toFind(){ //FUNCIONA!!!!!
    
    const find = playerA.shootCoordsLog.findIndex(elemento => elemento[0] === shootCoords[0] && elemento[1] === shootCoords[1]);
        console.log(find)
        if (find != -1){
            console.log(`El diparo ${shootCoords} ya se ha realizado`)
        }
        else {
            console.log('Well done!')
        }
}*/
toFind()

