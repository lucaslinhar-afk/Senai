let numero1 = 20;
let numero2 = 5;

const somar = (a, b) => a + b;

const subtrair = (a, b) => a - b;

const multiplicar = (a, b) => a * b;

const dividir = (a, b) => {
    if (b === 0) {
        return "Erro: divisão por zero";
    }
    return a / b;
};

console.log("Soma:", somar(numero1, numero2));
console.log("Subtração:", subtrair(numero1, numero2));
console.log("Multiplicação:", multiplicar(numero1, numero2));
console.log("Divisão:", dividir(numero1, numero2));

let numero3 = 10;
let numero4 = 0;

console.log("Divisão:", dividir(numero3, numero4));