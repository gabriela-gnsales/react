console.log("Boneco completo");

let forca = {
    tipo_haste: "madeira",
    tipo_corda: "nylon"
};

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
console.log(forca);

// module.exports = {
//     boneco
// }

// Exportação via CommonJS

// module.exports = boneco;
module.exports = [boneco, forca, 1, 2, 3];