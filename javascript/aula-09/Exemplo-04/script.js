let dispay = document.querySelector(".display")
let btnAumentar = document.querySelector(".btnAumentar")
let btnDiminuir = document.querySelector(".btnDiminuir")

let contador = 0

btnAumentar.addEventListener("click", function(){
    contador++ 
    dispay.textContent = contador
})

btnDiminuir.addEventListener("click", function(){
    contador-- 
    dispay.textContent = contador
})