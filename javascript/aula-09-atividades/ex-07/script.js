const btn = document.querySelector("button")
const conteudo = document.querySelector("#conteudo")

btn.addEventListener("click",function(){
    conteudo.innerHTML = "<strong>Negrinho</strong> e <em>Itálico</em>"
})