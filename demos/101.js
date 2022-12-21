//ejemplo de String
const role = "Teacher";

//esto va a petar
/* Peta porque rolee stá definido como constante,
y por tanto no puede redefinirse:
role = 'Student'
*/

console.log(role);

//mejor usar camelCase (EjemploDeCamelCaseEsPonerTodoJuntoYElPrincipioEnMayus). Tb vale snake_case (Ejemplo_de_camel_snake)
// para constantes podeis usar también MAYUS_CASE
const TEACHERNAME = "Jordi";

// usamos + para concatenar strings
let phrase1 =
  "The name of the teacher is " + TEACHERNAME + " and is instructing JS";
//o usar backticks para usa la interpolación
let phrase2 = `The name of the teacher is ${TEACHERNAME} and is instructing JS`;

/*Esto no funciona. Las variables empiezan con un caracter:
let 3coches = ['audi', 'bmw', 'vw'] */
let coches3 = ["audi", "bmw", "vw"];

let mouseItem = {
  name: "MagicMouse",
  units: 23,
  price: 99,
  OS: ["Wiindows", "Linux", "Mac"],
};
let keyboarItem = {
  name: "QWERTY",
  units: 23,
  price: 29.9,
  ISOcode: "ES",
  OS: ["Wiindows", "Linux", "Mac"], //Tenemos que usar las comas para delimitar más de un elemento. Al último elemento es mejor no ponerle la coma
  compatibleWith: {
    mouse: mouseItem,
  },
  coches3, // propiedad coches3 y valor: ['audi', 'bmw', 'vw'], es lo mismo que coches3: coches3
};
console.log(keyboarItem.coches3);

/*
JASON
{
    "name": 'QWERTY',
    "units": 23,
    "price": 29.9,
    "ISOcode": 'ES',
    "OS": ["Wiindows", "Linux", "Mac"],
    "compatibleWith": {
        "mouse": mouseItem
            "name": 'MagicMouse',
            "units": 23,
            "price": 99,
            "OS": ["Wiindows", "Linux", "Mac"]
    }
}
*/

// Usamos . para poder acceder a nodos del objeto
console.log("Aviable units", keyboarItem.units > 0);
console.log(
  "Units of mouse compatible with keyboardItem",
  keyboarItem.compatibleWith.mouse.units
);
// devuelve undefined porque no existe esta propiedad en el objeto
console.log("Mouse item has ISOCode ???", mouseItem.ISOCode);

console.log("phrase1", phrase1);
console.log("phrase2", phrase2);
console.log("phrase1 !== phrase2", phrase1 !== phrase2);

// Accedemos al primer elemento del array
console.log("coches3[0] is audi", coches3[0] === "audi");
console.log("coches3[1] is bmw", coches3[1] === "bmw");
console.log("coches3[2] is vw", coches3[2] === "vw");
console.log("what is coches3[3]?", coches3[3]); //Como no exite el cuarto elemento, devuelve undefined
console.log(
  "coches3" == ["audi", "bmw", "vw"],
  coches3 == ["audi", "bmw", "vw"]
); // es falso porque es un valor no primitivo

//  Podemos acceder al contenido de un objeto
console.log("keyboardItem.ISOCode", keyboarItem.ISOcode);
keyboarItem.ISOcode = "IT";
console.log("keyboardItem.ISOCode", keyboarItem.ISOcode);

//  También podemos cambiar al contenido de un array
console.log("coches3[2] is vw", coches3[2] === "vw");
coches3[2] = "seat";
console.log("coches3[2] is seat", coches3[2] === "seat");
coches3[2] = 23;
console.log("coches3[2] is 23", coches3[2] === "23");

// arrays cualquier tipo de objetos: [undefined, null, 1, true, NaN, Infinity, 'hola', {}]
const cualquierArr = [undefined, null, 1, true, NaN, Infinity, "hola", {}];
//el array es una colección de elementos accesible por un número
console.log("cualquierArr[5]", cualquierArr[5] === 1 / 0);
// el objeto es una lista de propiedades, accesibles por nombre
//{Mixed}

// keyboardItem.OS = ["Wiindows", "Linux", "Mac"]
for (let os of keyboarItem.OS) {
    //Nos permite recorrer el array, de manera que os adquirirá los valores de dentro del array por cada iteración
    if (os === "Windows") {
        console.log("Es Windows!");
    } else if (keyboarItem.os == "Linux") {
        console.log("Es Linux!");
    } else {
        console.log("No es ni Windows ni Linux");
    }
}

//reescritura de los if-else if-else con switch
for (let os of keyboarItem.OS) {
    switch (os) {
    case 'Windows':
        console.log("Es Windows!");
        break
    case 'Linux':
        console.log("Es Linux!");
        break
    default:
        console.log("No es ni Windows ni Linux");
        break;
    }
}
