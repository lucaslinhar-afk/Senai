let nota1 = 6.7;
let nota2 = 7.6;
let nota3 = 6;

function calcularMedia(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

let media = calcularMedia(nota1, nota2, nota3);

console.log(`A média do aluno é ${media}`);