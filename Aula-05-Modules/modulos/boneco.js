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
console.log(forca);

// Exportação via Module
// export const array = [boneco, forca, 1, 2, 3];
export default [boneco, forca, 1, 2, 3];
