let numeros = [5, 12, 8, 21, 3, 15, 7]

let numMaiores = numeros.filter(function(item){
    return item > 100
})

console.log(numMaiores.length)