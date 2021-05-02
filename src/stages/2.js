const { db } = require("../models/banco");

const Finalizar = "#"
const Cancelar = "*"

function execute(user, msg) {
    if (msg === "Cancelar") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "Finalizar") {
        db[user].stage = 3;
        return ["Digite o endereço por favor :"];
    }

    let resumo = "RESUMO DO PEDIDO \n";
    let total = '';
    db[user].itens.forEach((value) => {
        console.log(user);
        resumo += `${value.description} -----  ${value.price} \n`;

        total += value.price;
    });

    resumo += "-------\n";
    resumo += ` Total R$ ${total}`;
    console.log(total)


    return [
        "Para confirmar digite 'Finalizar' ou para cancelar digite 'Cancelar' ",
        resumo,
    ];
}

exports.execute = execute;