let produtos = [
    { id:1 , nome:"Fone" , preco:67 , categoria:"Eletrônico" },
    { id:2 , nome:"Geladeira" , preco:6700 , categoria: "Eletro" },
    { id:3 , nome:"Rato" , preco:109 , categoria:"Informatica" },
    { id:4 , nome:"Teclado" , preco:267 , categoria:"Informatica" },
    { id:5 , nome:"Fogão" , preco:599 , categoria:"Eletro" },
]

let nomes = produtos.map(function(item){
    return item.nome
})

console.log(nomes)

let eletro = produtos.filter(function(item){
    return item.categoria === "Eletro"
})

console.log(eletro)

let encontrado = produtos.find(function(item){
    return item.id === 3
})

console.log(encontrado)

let nomeMaiores = produtos.filter(function(item){
    return item.preco > 500
}).map(function(item){
    return item.nome
})

console.log(nomeMaiores)
