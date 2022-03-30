/**
 * Recursividade
 * 
 * Função recursiva é uma função que é definida em termos de si mesma. 
 * É uma função que se chama de forma continua até que seja retornado algum resultado.
 * 
 * Veja mais sobre pilha: https://youtu.be/2V91Re1czwA?t=55
 */ 

// Fatorial: numero * (numero - 1)
const fatorial = (numero) => {
  if (numero == 0 || numero == 1)
    return 1
  else
    return numero * fatorial(numero - 1)
}

// Usando ternário
const fatorialRef = (numero) =>
  (numero == 0 || numero == 1) ? 1 : numero * fatorial(numero - 1)

/** 
 * Digamos que passamos o número 4 para a função fatorial, então teremos a sequência de excuções abaixo:
 * fatorial(4)
 * 4 * fatorial(3) [6] = 24
 * 3 * fatorial(2) [2] = 6 ♠
 * 2 * fatorial(1) [1] = 2 ♠
 * 1 ♠
 * 
 * // Quando o retorno for 1, então a pilha começará a ser desmontada resolvendo as multiplicações
 * 1
 * 2 * 1 = 2
 * 3 * 2 = 6
 * 6 * 4 = 24
 */