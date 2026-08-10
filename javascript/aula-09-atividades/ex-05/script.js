const btn = document.querySelector("button")
const h2 = document.querySelector("h2")
const divAnalise = document.querySelector("#analise")

btn.addEventListener("click",function(){

    let primeiraDiv = document.createElement("div")
    primeiraDiv.textContent = h2.innerHTML
    divAnalise.appendChild(primeiraDiv)

    let segundaDiv = document.createElement("div")
    segundaDiv.textContent = h2.innerHTML
    divAnalise.appendChild(segundaDiv)

    let terceiraDiv = document.createElement("div")
    terceiraDiv.textContent = h2.innerHTML
    divAnalise.appendChild(terceiraDiv)
    
})