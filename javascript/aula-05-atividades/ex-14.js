let cargo = "gerente";

switch (cargo) {
    case "estagiario":
        console.log("R$ 1500 sem aura");
        break;
    case "analista":
        console.log("R$ 4000 pouca aura");
        break;
    case "gerente":
        console.log("R$ 8000 bastante aura");
        break;
    case "diretor":
        console.log("R$ 15000 aura infinita");
        break;
    default:
        console.log("Cargo não encontrado");
}