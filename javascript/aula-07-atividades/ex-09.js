let idade1 = 15;
let idade2 = 18;
let idade3 = 25;

function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de idade";
    } else {
        return "Menor de idade";
    }
}

console.log(verificarIdade(idade1));
console.log(verificarIdade(idade2));
console.log(verificarIdade(idade3));