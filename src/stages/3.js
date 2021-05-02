const { db } = require("../models/banco");
const { step } = require("../models/stages");

const Finalizar = "#"
const Cancelar = "*"

function execute(user, msg) {
    if (msg === "Cancelar") {
        db[user].stage = 0;
        return ["Pedido cancelado com sucesso"];
    }

    if (msg === "Finalizar") {
        db[user].stage = 5;

        return step[5].obj.execute(user, "");
    }
    return [
        "```Digite 'Finalizar' para continuar ou 'Cancelar' para cancelar```",
        `Confirma endereco de entrega : \n ${msg}`,
    ];
}

exports.execute = execute;