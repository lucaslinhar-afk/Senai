let amigos = [
    {nome: "pomboaurudinho" ,idade: 67},
    {nome: "cuzinho do luiz" ,idade: 76},
    {nome: "nathan67" ,idade: 6},
    {nome: "peidashift" ,idade:7}
]

let maiores = [];

amigos.forEach(function(amigos){
  if (amigos.idade >= 18) {
    maiores.push(amigos);
  }
});

console.log(maiores);