let n1 = 33
let n2 = 34
let operador = "+"

switch (operador){
    case "+":
        console.log(n1 + n2)
        break;
    case "-":
        console.log(n1 - n2)
        break;
    case "*":
        console.log(n1 * n2)
        break;
    case "/":
        if(n2 == 0){
            console.log("O numero não tem aura") 
        } else {
            console.log(n2 / n1)
        }
}