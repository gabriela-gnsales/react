/**
 * Imutabilidade
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