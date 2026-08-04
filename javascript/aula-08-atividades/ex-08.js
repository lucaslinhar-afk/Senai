let palavras = ['sol', 'montanha', 'lua', 'estrela', 'mar']

let palavrasMaiores = palavras.filter(function(item){
    return item.length > 3
})

console.log(palavrasMaiores)