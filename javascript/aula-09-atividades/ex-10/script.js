let titulo = document.querySelector("p")
let btn = document.querySelector(".btn")



btn.addEventListener("click",function(){
    
    titulo.classList.toggle("oculto")

    if (titulo.classList.contains("oculto")) {
        btn.innerText = "Mostrar"
    } else {
        btn.innerText = "Ocultar"
    }
})

