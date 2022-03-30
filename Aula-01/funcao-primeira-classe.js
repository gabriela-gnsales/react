/**
 * Funções de primeira classe

 *  São funções que são tratadas como váriaveis, e elas podem:
 *  Ser atribuídas a váriaveis
 *  Ser passadas por parâmetro
 *  Ser retornadas como resultado
 */

// Serem atribuídas a variáveis
const somar1 = (y, x) => y + x
const somar2 = function(y, x) {
  return  y + x
}

//Executando
somar1()
somar2()

// Podem ser passadas por parametro
const obterNome = () => "Matheus"
const mostrarBoasvindas = (nomeFn) => `Olá, ${nomeFn()}! Seja bem-vindo!`

//Executando
const mensagem = mostrarBoasvindas(obterNome)

// Podem ser retornadas como resultado
const obterBoasvindas = () => {
  return () => `Olá, ${obterNome()}! Seja bem-vindo!`
}

//Executando
const mensagem2 = obterBoasvindas()()

const mensagemFn = obterBoasvindas()
const mensagem3 =mensagemFn()