let valorCompra = 6767

if (valorCompra >= 500) {
    console.log(`Você ganhou desconto ! Vai ficar ${valorCompra - (valorCompra * 20 / 100)} `)
} else if (valorCompra >= 200) {
    console.log(`Você ganhou desconto ! Vai ficar ${valorCompra - (valorCompra * 10 / 100)} `)
} else if (valorCompra >= 100) {
    console.log(`Você ganhou desconto ! Vai ficar ${valorCompra - (valorCompra * 5 / 100)} `)
} else {
    console.log(`Sem desconto!`)
}
