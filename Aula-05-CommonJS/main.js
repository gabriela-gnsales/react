// Importação via CommonJS 

// const boneco = require("./modulos/boneco.js");
const [boneco, forca, ...array_numeros] = require("./modulos/boneco.js");
// const {Jogador, categorias_disponiveis: cat_disp} = require("./modulos/jogador");
const {Jogador, ...funcoes} = require("./modulos/jogador");

console.log("///// main.js /////\n");
console.log("Oi");

console.log("///// boneco.js /////\n");
console.log(boneco);
console.log(forca);
console.log(array_numeros);
console.log(...array_numeros);

function somatorio(...array_numeros) { // se desestruturar (colocar 3 pontinhos ... -> spread operator) tenho, obrigatoriamente que passar múltiplos parâmetroa, não posso passar um array
    let total = 0;
    for (let i=0; i<array_numeros.length; i++) {
        total += array_numeros[i];
    }
    return total;    
};

console.log(somatorio(1,2,2568));

console.log(new Jogador("Gabi", "gabi@gmail.com", "países"));

// console.log(cat_disp());

console.log(funcoes);
// console.log(funcoes.categorias_disponiveis);
