var jogador1 = 0;
var jogador2 = 0;
var placar;

/*if (jogador1 != -1) {
    if (jogador1 > 0) {
        console.log('Jogador 1 marcou ponto');
    } else if (jogador2 > 0) {
        console.log('Jogador 2 marcou ponto');
    } else {
        console.log('Ninguém marcou ponto');
    }
} */

//IF ternário
/*jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
    console.log('Jogadores inválidos');

//IF    
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador1 marcou ponto');
    placar = jogador1 > jogador2;
}
//ElseIF
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador2 marcou ponto');
    placar = jogador2 > jogador1;
}
//Else
else {
    console.log('Ninguém marcou ponto');
}

//CASE
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador1 ganhou');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador2 ganhou');
        break;
    default:
        console.log('Ninguém ganhou');
        break;
}*/

//Laços de repetição
var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
var object = { propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', };

//For: Executa uma instrução até q ela seja falsa
/*for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}*/
//For/In: Executa repetição a partir de uma propriedade 
//Com array
/*for(let i in array){
    console.log(i);
}
//Com object
for(i in object){
    console.log(i);
}*/
//For/Of: Executa repetição a partir de um valor
//Com array
/*for(i of array){
    console.log(i);
}*/
//Com object - Não se usa pois propriedade pode num ser numero inteiro
/*for(i of object.propriedade1){
    console.log(i);
}*/

//While
var a = 0;
/*while(a < 10){
a++;
console.log(a);
}*/

//Do/While
do {
    a++;
    console.log(a);
    } while(a < 10);






