
let result1
/**
 * 
 * @param {String} name 
 * @param {String|undefined} surname 
 * @param {*} age 
 * @returns 
 */
function hello1(name, surname = 'Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old`
}

// para poder
result1 = hello1('Jordi', 'Bayo')
console.log(result1)

result1 = hello1('Jordi', undefined, 40) //imprime Hello Jordi Skywalker. You are 40 years old
console.log(result1)


let result2
const hello2 = function(name, surname = 'Skywalker', age = 37) {
    return `Hello ${name} ${surname}. You are ${age} years old`
}
result2 = hello2('') // imprime Hello Skywalker. You are 37 years old
console.log(result2)

result2 = hello2('Jordi', undefined, 40) //imprime Hello Jordi Skywalker. You are 40 years old
console.log(result2)



//////////////////////////////
///////////  ARROW FUNCTIOS
/////////////////////////////

let result4
const hello4 = (name, surname = 'Skywalker', age = 37) => 'Hello ${name} ${surname}. You are ${age} old'
result4 = hello4('')
console.log('result4', result4)
result4 = hello4('Jordi', undefined, 40) //imprime Hello Jordi Skywalker. You are 40 years old
console.log('result4', result4)

let result5
/**
 * 
 * @param {String} name 
 * @returns {String}
 */
const hello5 = name => `Hello $(name)`
result5 = hello5('') // resuult5 === "Hello "
console.log('result4', result5)
result5 = hello5('Jordi', undefined, 40) //imprime Hello Jordi Skywalker. You are 40 years old
console.log('result5', result5)

/*OJO!!! que para hacer llamadas a la función, siempre hay que hacer:
nombreDeLaFuncion()
Si hacemos solamente nombreDeLaFuncion nos va a salir siempre [Function: hello5]
*/

console.log('result5', hello5)