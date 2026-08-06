const titulo = document.querySelector(".titulo")
const btnAdicionar = document.querySelector("btnAdd")
const lista = document.querySelector(".lista")

btnAdicionar.addEventListener("click", function(){
    const li = document.createElement("li")
    li.textContent = "O farmador de Aura, Adicionou ,adicionou um novo item"
    lista.appendChild(li)
})