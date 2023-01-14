import { create_Grid } from './game.js'

export const LINEAINFERIOR = ['  _________', '______', '______', '______', '______', '______', '______', '______', '______', '___'];
export const LINEAINFERIOR1 = [' |\t   ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     ', '     |'];
export const LINEAINFERIOR2 = [' |_________', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____', '_____','_____|'];

export const LINEA_TITULO = '==================================================='
export const SEMILINEA1 = '========='
export const SEMILINEA2 = '================='
export const SEMILINEA3 = '================' // TODO mejorar para que tenga la misma longitud que RONDA_A y Ronda_B --> PRINThEADING
export let n_ronda = ''
const RONDA_A =  'Ronda ' + n_ronda + ' for A' 
const RONDA_B =  'Ronda ' + n_ronda + ' for B'

export default function usePrinter() {
    function printHeading(text) {
        const pad = '='.repeat(text.length)
        console.log(`==========${pad}==========`)
        console.log(`========= ${text} =========`)
        console.log(`==========${pad}==========`)
    }
    function printLine(text) {
        const pad = '='.repeat(text.length)
        console.log(text)
        console.log(`${pad}`)
    }
    
    function print_Grid(grid, isEnemy = false,) {   // Imprimimos el tablero metiendo el parámetro tablero y si es el del player A o del Player B. En el primero podemos ver los barcos y en el segundo, no
        const headers = create_Headers(grid.length);
        console.log(LINEAINFERIOR.join('_'))
        console.log(LINEAINFERIOR1.join('|'))
        console.log(headers);
        console.log(LINEAINFERIOR2.join('|'))
        for (let i = 0; i < grid.length; i++) {
            let rowStr = ' |    ' + i + '    | ';       // Los cabeceros de las filas
            for (let cell of grid[i]) {
                if (isEnemy && cell == '0') {
                    rowStr += ' - '
                    
                } else {
                    rowStr += cell + ' ';
                }
            }
            console.log(LINEAINFERIOR1.join('|'))
            console.log(rowStr);
            console.log(LINEAINFERIOR2.join('|'))
        }
    }
    
    function create_Headers(size) {     //Los cabeceros de las columnas
        let result = ' |  ';
        for (let i = 65; i < size + 65; i++) {
            result += String.fromCharCode(i) + '  |  ';
        }
        return ' | (INDEX)' + result
    }
    return {
        printHeading,
        printLine,
        print_Grid
    }
}
