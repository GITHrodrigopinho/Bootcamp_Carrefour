// Tipos primitivos

// Boolean
var vOuF = false;
//console.log(vOuF);
console.log(typeof(vOuF));


//Number
var numeroQualquer = 1;
//console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//String
var nome = 'Rodrigo';
//console.log(nome);
console.log(typeof(nome));

//Como declarar SEM VALOR
var variavel;
console.log(variavel);

let variavel2 = 'Diana'; //Por convenção de usa LET para escopo local(visibilidade)
console.log(variavel2);

//Constantes
const valor_fixo = 'PINHO';
console.log(valor_fixo);

var EscopoGlobal = 'Global';
console.log(EscopoGlobal);

function EscopoLocal() {
    let EscopoLocalInterno = 'Local';
    console.log(EscopoLocalInterno);
}

//console.log(EscopoLocalInterno);

EscopoLocal();

//Atribuição & Comparação/ComparaçãoIdêntica

var Atribuicao = 'RODRIGO';
console.log(Atribuicao);

var Comparacao = '0' == 0. //Compara apenas conteúdo
console.log(Comparacao);

var ComparacaoIdentica = '0' === 0. //Compara conteúdo e tipo variável
console.log(ComparacaoIdentica);

//Operadores aritméticos (+, -, *, /, %, **)
//Adição
var adicao = 1 + 1;
console.log(adicao);
//Subtração
var subtracao = 2 - 1;
console.log(subtracao);
//Multiplicação
var multiplicacao = 2 * 3;
console.log(multiplicacao);
//Divisão Real
var divisaoReal = 6 / 2;
console.log(divisaoReal);
//Divisão Inteira
var divisaoInteira = 5 % 2; //Recuperar resto
console.log(divisaoInteira);
//Potenciação
var potenciacao = 2 ** 10;
console.log(potenciacao);

//Operadores relacionais (>, <, >=, <=)
//>
var maiorQue = 5 > 2;
console.log(maiorQue);
//<
var menorQue = 5 < 2;
console.log(menorQue);
//>=
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);
//>=
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

//Operadores lógicos (&&, ||, !)
//&& 'e':   Considera que todos os valores sejam TRUE
var e = true && false;
console.log(e);
//|| 'ou':  Considera que qualquer valor seja TRUE
var ou = true || false;
console.log(ou);
//!  'não': Inverte o valor de TRUE para FALSE ou vice-versa
var nao = !true;
console.log(nao);
