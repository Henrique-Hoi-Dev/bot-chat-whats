const { menu0 } = require("../menu/menu0");
const { db } = require("../models/banco");

function execute(user, msg) {
    const Cancela = "*"
    const Finalizar = "#"

    if (msg === 'Cancelar') {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === 'Finalizar' ) {
        db[user].stage = 2;
        return ["Estamos fechando seu pedido, ok?"];
    }

    if (!menu0[msg]) {
        return [
            "Código inválido, digite corretamente",
            "```Digite 'Finalizar' para finalizar ou 'Cancelar' para cancelar```",
        ];
    }

    db[user].itens.push(menu0[msg]);

    return [
        "```Digite 'Finalizar' para terminar seu pedido ou 'Cancela' para cancelar seu pedido```",
        `Item(${menu0[msg].description}) adiconado com sucesso`,
    ];
}

exports.execute = execute;