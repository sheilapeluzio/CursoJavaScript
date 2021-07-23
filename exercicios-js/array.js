//Trabalhando com arrays
var frutas = ['maca', 'banana', 'laranja']
console.log(frutas[frutas.length-1])
var primeiro = frutas[0]
console.log(frutas[1])
console.log('---------------')
var adicionar = frutas.push('pera')
// console.log(frutas)
frutas.forEach(function (item,indice,array) {
  console.log(item, indice, array)
})
console.log(frutas)
var remover = frutas.pop()
console.log(frutas)

var msgArray = new Array();
msgArray[0] = "Hello";
msgArray[99] = "world";

if (msgArray.length == 100)
   console.log(msgArray)
// Trabalhando com matrix
values = [];
for (var x = 0; x < 10; x++){
 values.push([
  2 ** x,
   2 * x ** 2
  
 ])
  
};
console.table(values)




