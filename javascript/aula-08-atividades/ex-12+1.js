 let frutas = ['maçã', 'banana', 'laranja', 'uva']

 let encontrado = frutas.find(function(item){
    return item.startsWith("i")
 })

 console.log(encontrado)