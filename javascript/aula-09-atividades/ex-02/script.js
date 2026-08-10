const importante = document.querySelector(".importante")
const botao = document.querySelector("#btnDestacar")
const destaque = document.querySelector("#destaque")

botao.addEventListener("click",function(){

    destaque.textContent = importante.textContent

})


