/**
 * Função independente
 *
 * Deve ter pelo menos 1 argumento
 * Deve ter um retorno (dado, informação ou outra função)
 * Não existem loops
 */

// Não fazer
// Fibonacci = antepenúltimo + último
const calcularFibonacci = (contador) => {
  let resultado = [0, 1]

  for (let i = 2; i < contador; i++) {
    const valorSomado = resultado[i - 2] + resultado[i - 1]

    resultado.push(valorSomado)
  }

  return resultado
}

console.log(calcularFibonacci(10))

// Fazer (Ler sobre recursividade no arquivo recursividade.js)
// Fibonacci = antepenúltimo + último
const calcularValorFibonacci = (posicao) => {
  if (posicao < 1)
    return 0

  else if (posicao <= 2)
    return 1

  else
    return calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1)
}

// Usando ternário
const calcularValorFibonacci2 = (posicao) =>
  posicao < 1 ? 0
    : posicao <= 2 ? 1
      : calcularValorFibonacci(posicao - 2) + calcularValorFibonacci(posicao - 1)

const obterSequenciaFibonacci = (contagem) => {
  return [...Array(contagem)]
    .map((valor, index) => calcularValorFibonacci(index))
}