const items = ['Hello', 'world', 3, {name: 'Super Mario', game: 'Mario Kart'}]
let newArr = []
/*for (let i = 0; i < items.length; i++) {
    newArr.push(items[i])
}
console.log(items)
console.log(newArr)*/

/*for..of

for (newArr of items) {
   console.log(newArr)
}*/

/*for..in

for(newArr in items){
    console.log(newArr)
}
*/
let i =0 ;
items.forEach (
    function change(){
        newArr.push(items[i]);
        i++
        console.log(newArr)
    }
)


/*while
let i = 0;
while(i <items.length) {
    newArr.push(items[i]);
    console.log (newArr)
    i++;
}
*/

/*do while

let j = 0;
do {
    newArr.push(items[j])
    console.log(newArr)
    j++;
} while (j < items.length) */