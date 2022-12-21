/* 
✅ ENUNCIADO ARRANQUE JUEGO 
✅ ENUNCIADO "JUEGO COMIENZA"
TODO JUGADOR A
TODO JUGADOR B
TODO TEXTO Ownboard
TODO PANTALLA JUGADOR A
TODO PANTALLA JUGADOR B
TODO contador RONDA PARA A
TODO contador RONDA PARA B
TODO CONTADOR DE DISPAROS PARA JUGADOR A
TODO CONTADOR DE DISPAROS PARA JUGADOR B
TODO DISPAROS DONDE APUNTA
TODO RESULTADO DEL DISPARO
✅ constante LANCHA
✅ constante CRUCERO
✅ constante SUBMARINO
✅ constante BUQUE
✅ constante PORTAAVIONES
✅ constante VACÍO
✅ constante AGUA
✅ constante TOCADO
TODO x2 SUBMARINOS (3 CASILLAS)
TODO x3 LANCHAS (1 CASILLA)
TODO 1x PORTAAVIONES (5 CASILLAS)
TODO 1x BUQUE (4 CASILLAS)
TODO x3 CRUCEROS (2 CASILLAS)
TODO 4 TABLEROS
TODO 10 FILAS CON INICIO EN LETRAS
TODO COLUMNAS CON INICIO EN NÚMERO
TODO CELDAS VACÍAS
TODO TÍTULO DE TABLERO
TODO "CONTADOR DE BARCOS" JUGADOR A
TODO "CONTADOR DE BARCOS" JUGADOR B
TODO MENSJE "HAS GANADO"
TODO MENSJE "EMPATE"
*/

//VARIABLES DE LOS BARCOS Y TOCADO, HUNDICO Y AGUA
const LANCHA = ['🛶']
const CRUCERO = ['🚤', '🚤']
const SUBMARINO = ['🛳', '🛳', '🛳']
const BUQUE = ['🛥', '🛥', '🛥', '🛥']
const PORTAAVIONES = ['🚢', '🚢', '🚢', '🚢', '🚢']
const VACIO = ['']
const AGUA = ['💧']
const TOCADO = ['🔥']

//IMPRESIONES
const LINEA_TITULO = []
const SEMILINEA1 = []
const SEMILINEA2 = '================' // TODO mejorar para que tenga la misma longitud que RONDA_A y Ronda B
let n_ronda = ''
const RONDA_A =  'Ronda ' + n_ronda + ' for A' 
const RONDA_B =  'Ronda ' + n_ronda + ' for B'
//impresion ronda A
console.log(RONDA_A)
console.log(SEMILINEA2)
//impresion ronda B
console.log(RONDA_B)
console.log(SEMILINEA2)


// ESCRIBIMOS CODIGO
console.log()
console.log('===================================================')
console.log('========= The battleship simulator starts =========')
console.log('===================================================')
console.log()
console.log()

console.log('===================================================')
console.log('================= The game starts =================')
console.log('===================================================')