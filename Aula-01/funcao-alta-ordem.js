/**
 * Função de alta ordem
 * 
 * Podem receber outras funções como argumentos
 * Podem retornar funções
 */

// Podem receber outras funções como argumentos
const obterNome = () => "Matheus"
const mostrarBoasvindas = (nome) => `Olá, ${nome()}! Seja bem-vindo!`

//Executando
const mensagem = mostrarBoasvindas(obterNome)

// Podem retornar funções
const obterBoasvindas = () => {
  return () => `Olá, ${obterNome()}! Seja bem-vindo!`
}

//Executando
const mensagem2 = obterBoasvindas()()

const mensagemFn = obterBoasvindas()
const mensagem3 =mensagemFn()