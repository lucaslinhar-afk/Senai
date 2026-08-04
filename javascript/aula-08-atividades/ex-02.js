let  celsius = [0, 15, 30, 45]

let temp = celsius.map(function(item){
    return item  * 9/5 + 32
}) 

console.log(temp)