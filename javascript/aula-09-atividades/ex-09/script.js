const btn = document.querySelector("button")
const div = document.querySelector("div")

btn.addEventListener("click",function(){
    div.style.backgroundColor = "yellow"
    div.style.border = "2px solid black"
    div.style.padding = "20px"
})