let filme = {
    titulo: "A historia do pombo guloso",
    diretor: "pomboguloso",
    ano: 6767,
    genero: "pombistico"
}

for(let chave in filme){
    console.log(`${chave}:${filme[chave]}`)
}
