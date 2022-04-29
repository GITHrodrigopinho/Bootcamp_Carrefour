//O que são vetores ou arrays
//Como declarar um array
let array = ['string', 1, true];
//console.log(array);
//Pode guardar vários tipos de dados
let arrayTeste = ['MBP-DEV', 'MBP-QAS', 'MBP-PRD', ['array1'], ['array2'], ['array3'], ['array4']];
//console.log(arrayTeste);
//console.log(arrayTeste[0]); //Acesso índice 0 corresponde MBP-DEV

//Manipulação de array
//forEach(): Itera um array
/* arrayTeste.forEach(function(item, index){console.log(item, index)}); */
//push(): Add item no final do array
/* arrayTeste.push('MBP-OLD Novo item');
//console.log(arrayTeste); */
//pop(): Remove item no final do array
/* arrayTeste.pop();
console.log(arrayTeste);  */
//shift():Remove item no início do array
/* arrayTeste.shift();
console.log(arrayTeste); */
//unshift(): Add item no início do array
/* arrayTeste.unshift('MBP-Novo item início');
console.log(arrayTeste); */
//indexOff(): Retorna o índice de um valor
/* console.log(arrayTeste.indexOf('MBP-PRD')); */
//splice(): Remove ou substitui um item pelo índice
/* arrayTeste.splice(0, 2);
console.log(arrayTeste); */
//slice(): Retorna uma parte de um array existente
/* let arrayNovo = arrayTeste.slice(0, 3);
console.log(arrayNovo); */

//Trabalhando com OBJETOS
//Lembrar que objeto pode conter objetos tb
let object = {String: 'Rodrigo', Number: 44, Boolean: true, array: ['array'], objectInterno: {objectInterno: 'Objeto interno'}};
console.log(object.String); //Recuperar apenas a propriedade "String" do objeto
console.log(object.objectInterno);

var pessoa = object.String;
console.log(pessoa);

var arrayInterno = object.array;
console.log(arrayInterno);

//Outra forma desestruturar e pegar o necessário no objeto usando {}, segue
var {String, Boolean, objectInterno} = object;
console.log(String, Boolean, objectInterno);





