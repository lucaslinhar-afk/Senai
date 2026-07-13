
let compras = [];

compras.push("Sucrilhos de POMBO");
compras.push("Negros");
compras.push("Bauru de POMBO");
compras.push("Pombo");
compras.push("Aura");


console.log("Lista de compras:");

compras.forEach((item, indice) => {
  console.log(`${indice + 1} - ${item}`);
});

if (compras.includes("Pombo")) {
  console.log("Pombo está na lista!");
} else {
  console.log("Pombo não está na lista.");
}


let itemRemovido = compras.pop();

console.log("Item removido:", itemRemovido);


console.log("Lista atualizada:");

compras.forEach((item, indice) => {
  console.log(`${indice + 1} - ${item}`);
});

console.log("Total de itens:", compras.length);