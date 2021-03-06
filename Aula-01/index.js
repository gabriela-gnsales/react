/**
 * IMUTABILIDADE
 * 
 * Significa que uma variável que nasceu com um valor, vai manter esse valor enquanto o programa estiver sendo executado, sem mudar seu estado. Ou seja, ela é uma constante.
 * 
 * Stateless (Sem estado)
 * 
 * As funções devem ser sem estado (stateless), ou seja, elas devem sempre agir e retornar algo como se fosse a primeira vez que elas fossem utilizadas no programa.
 */

// Não Fazer
let numero1 = 0

// Não fazer
const somarDezNoNumero = () => numero1 = numero1 + 10
somarDezNoNumero()

// Fazer
const numero2 = 0

// Fazer
const somarDez1 = (x) => x + 10
somarDez1(numero2)

// Fazer
const somarDez2 = (x) => {
  let y = x + 10

  return y
}
somarDez2(numero2)

// const somar = (x, y) => {
//     let z
//     x += 10;
//     y += 10;

//     return x + y;
// }

// const somar = (x + y) => x + y;

// Fibonacci = antepenúltimo + último

// const calcularFibonacci = (contador) => {
//     let resultado = [0, 1]

//     for (let i = 2; i < contador; i++) {
//         const valorSomado = somar(resultado[i - 2], resultado[i - 1]);
//         resultado.push(valorSomado);
//     }
//     return resultado;
// }

// console.log(calcularFibonacci(10));

// Refatorando

// aplicar recursão

const calcularValorFibonacci = (posicao) => {
    if (posicao < 1) 
        return 0;
    else if (posicao <= 2)
        return 1
    else calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1)
}

// const obterSequenciaFibonacci = (contagem) => {
//     [...Array(contagem)].map(valor, index) => calcularValorFibonacci(index)
// } // os 3 pontos servem p/ desconstruir, p/ devolver o array

// FUNÇÕES PURAS = não dependem de algo externo

// Impura
const trabalharComPI = (lado) => Math.PI * lado * lado;

// Pura
const trabalharComPI2 = (pi, lado) => pi * lado * lado;

// COMPOSIÇÃO DE FUNÇÃO

a = [1, 2, 3, 4]
        .filter(o => o != 2)
console.log(a);

a = [1, 2, 3, 4]
    .filter(o => o != 2)
    .map(o => o + 1)

console.log(a);

// Recursividade

// Fatorial: ele + ele - 1
const fatorial = (numero) => {
    if(fatorial == 0 || numero == 1)
        return 1;
    else
        return numero * fatorial(numero - 1);
}

console.log(fatorial(3));

const fatorialRef = (numero) => (numero == 0 || numero == 1)

// pegar resto do código do prof

// ESTADO COMPARTILHADO

const PI = 3.14;

const somarPI = () => 3.14 * PI;

// FUNÇÃO DE PRIMEIRA CLASSE
/*
podem ser atribuidas a variáveis
podem ser passadas por parâmetro
podem ser retornadas como resultado
*/

const primeiraComArrow = () => {} // passando função no valor da variável
const primeiraComFunction = function () {
    return primeiraComArrow
}

// Podem ser passadas por parâmetro
function obterNomeUsuario() {
    return 'Gabriel'
}

function olaUsuario(obterNome) { // normalmente é chamado de callback (obterNome)
    console.log(`Olá, ${obterNome()}`)
}

olaUsuario(obterNomeUsuario);

// Podem ser retornadas como resultado
function obterMensagem() {
    return function () {
        return 'olá'
    };
    olaUsuario;
}

let ola = obterMensagem()
ola()

// FUNÇÃO DE ALTA ORDEM

/*
pode receber outras funções como argumentos
pode retornar funções
pode receber outras funções como argumentos
*/

function olaUsuarioAltaOrdem(funcaoObterNome) {
    console.log(`Olá, ${funcaoObterNome()}`)
}

olaUsuarioAltaOrdem(function () {
    return 'Alta ordem'
})

// Podem retornar funções
function obterMensagemAltaOrdem() {
    return () => 'olá';
}





