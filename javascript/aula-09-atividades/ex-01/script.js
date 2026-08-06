let titulo = document.querySelector("h1")
let btn = document.querySelector(".btn")
let p = document.querySelector("p")

btn.addEventListener("click",function(){
    p.textContent = titulo.textContent

})