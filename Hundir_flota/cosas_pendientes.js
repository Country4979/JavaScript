//DISPAROS
const FIGURE = ['  💧  ', '  🔥  '];
let shoot = 0;

//FUNCIÓN NEXT_PLAYER
function next_player(){
    if ((shoot == 0) || (playerA.shoot <= playerB.shoot)) {
        playerA.shoot++;
        return 'A'
    }else{
        playerB.shoot++;
        return 'B'
    }
}

//WIN OR TIE FUNCTIONS

function to_tie() {        //FUNCIÓN EMPATAR
    if (lifeA > lifeB) {
        return 'PLAYER  A'
        //console.log('A')
    }
    else if (lifeA < lifeB) {
        return 'PLAYER  B'
       // console.log('B')
    }
    else {
        return 'NO WINNER'
        //console.log('TIE: NO WINNER')
    }
}

function to_win() {     //FUNCIÓN GANAR O PERDER
    if (playerA.life == 0){
        return 'PLAYER  B'
        //console.log('B')
    }
    else if (playerB.life == 0){
        return 'PLAYER  A'
        //console.log('A')
    }
    else if (shoot == 100) {
        return to_tie()
        }
}

//TODO hacer un do while del ciclo?
// THE GAME
while (shoot < 100 && playerA.life != 0 && playerB.life != 0) {
    if (shoot % 2 == 0){
        console.log("Ronda " + playerA.shoot + " for " + next_player() + "\n" + "==============");
        //function to_shoot();
        to_win();
    } 
    else {
        console.log("Ronda " + playerB.shoot + " for " + next_player() + "\n" + "==============")
        to_win()
    }
    shoot++
}

console.log(
    'And the winnwer is.....' + '\n' +
    '============================='  + '\n' +
    '========= ' + to_win() + ' =========' + '\n' +
    '============================='
)



/*TODO CON UN CALLBACK HACER FUNCION SEGUN LA VIDA DE CADA UNO
let lifeA = playerA.life
let lifeB = playerB.life
function callbaccc(shoot, lifeA, lifeB){
    life A = 0 FIN JUEGO Y SACAR WINNER A
    life B = 0 FIN JUEGO Y SACAR WINNER B
    shoot = 100 FIN JUEGO Y SACAR to_tie()
}
*/



function the_winner () {
    switch (j=25){
    case (playerA.totalA_inherit > playerB.totalB_inherit):
        winner = playerA.nombre;
        break
    case (playerA.totalA_inherit < playerB.totalB_inherit):
        winner = playerB.nombre;
        break
    default:
        winner = EMPATE;
        break;
    }
}

function to_win () {
    if (tocado_A = lenght_total) {
        console.log('EL GANADOR ES ' + winner + '. ENHORABUENA, ' + winner)
    }
}

console.log(aleatorioPlayerA)