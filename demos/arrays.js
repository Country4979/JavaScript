const arr = [1, 2, 3]

const multiplicaPor2 = (valor) => {
 console.log(valor *2)   
}
arr.forEach(multiplicaPor2)

// le podemos pasar una función anónima
arr.forEach((valor) => {console.log(valor *2)})

const resultadoMap = arr.map(elem => elem * 3)
console.log(resultadoMap)
const resultadoMapConIndex = arr.map(elem, index => elem * index)
console.log(resultadoMapConIndex)

