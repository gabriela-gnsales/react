console.log("Boneco completo");

let forca = {

}

let boneco = {
    membros: [
        "cabeça", 
        "braço direito", 
        "braço esquerdo", 
        "tronco",
        "perna direita",
        "perna esquerda"
    ],
    nome: "Gabi",
    altura: 1.52,
    peso: 60
};

console.log(boneco);

// module.exports = {
//     boneco
// }

// Exportação via CommonJS
module.exports = [boneco, forca, 1, 2, 3];