const btnAzul = document.querySelector(".azul")
const btnVermelho = document.querySelector(".vermelho")
const btnVerde = document.querySelector(".verde")
const texto = document.querySelector("p")

btnAzul.addEventListener("click",function(){
    texto.style.color = "blue"
})

btnVermelho.addEventListener("click",function(){
    texto.style.color = "red"
})

btnVerde.addEventListener("click",function(){
    texto.style.color = "green"
})