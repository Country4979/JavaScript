//Ejemplo de spread operator en argumentos de funciones
const suma = (...arr) => {
    return arr.reduce((prev, curr) => prev + curr,0)
}

//Nos obliga a escribir un array para que pueda sumarlos
//console.log(suma([0,1,2,3]))
//console.log(suma([0,1,2,3,4]))

// Le podemos pasar n parámetros de entrada
console.log(suma(0))
console.log(suma(2,2))
console.log(suma('pepe')) //Imprime 0Pepe pq concatenará
console.log(suma(2,4,3))