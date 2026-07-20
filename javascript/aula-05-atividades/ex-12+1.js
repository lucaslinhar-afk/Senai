let status = "entregue";

switch (status) {
    case "pendente":
        console.log("Pagamento pendente");
        break;
    case "enviado":
        console.log("A caminho");
        break;
    case "entregue":
        console.log("Finalizado");
        break;
    default:
        console.log("Status inválido");
}