/**
 * Puras
 * 
 * Chamamos de função pura todas as funções que, quando invocadas mais de uma vez, produzem exatamente o mesmo resultado.
 * Ou seja, se eu usar a função abaixo, sempre que eu passar os mesmos parâmetros o resultado sempre será o mesmo
 */

// Impura
const trabalharComPI = (lado) => Math.PI * lado * lado
trabalharComPI(2)

// Pura
const trabalharComPI2 = (pi, lado) => pi * lado * lado
trabalharComPI(Math.PI, 2)