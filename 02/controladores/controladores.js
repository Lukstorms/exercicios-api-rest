let convidados = require('../dados/bancodedados')


const listaDeConvidados = (req, res) => {
    const { nome } = req.query
    if (!nome) {
        return res.json(convidados)
    }
    if (nome) {
        const convidado = convidados.find((convidado) => {
            return convidado === nome
        })
        const naoEncontrado = convidados.find((convidadoN) => {
            return convidadoN !== nome
        })

        if (convidado) {
            return res.status(200).json({ mensagem: "Convidado presente." });
        } else if (naoEncontrado) {
            return res.status(400).json({ mensagem: "O convidado buscado não está presente na lista." });
        }

    }
}

const adicionarCovidado = (req, res) => {
    const { nome } = req.body;
    const convidadoAdd = {
        nome
    }
    const jaTem = convidados.find((convidado) => {
        return convidado === convidadoAdd.nome
    });
    if (jaTem) {
        return res.status(400).json({ mensagem: "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também." })
    } else {
        convidados.push(convidadoAdd.nome)
        return res.status(200).json({ mensagem: "Convidado adicionado." })
    }

}

const removerConvidado = (req, res) => {
    let { indesejado } = req.params;

    const convidado = convidados.find((convidado) => {
        return convidado === indesejado
    })
    const naoEncontrado = convidados.find((convidadoN) => {
        return convidadoN !== indesejado
    })


    if (convidado) {
        convidados = convidados.filter((convidado) => {
            return convidado !== indesejado
        });
        return res.status(200).json({ mensagem: "Convidado removido." })
    } else if (naoEncontrado) {
        return res.status(400).json({ mensagem: "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido." })
    }

}


module.exports = {
    listaDeConvidados,
    adicionarCovidado,
    removerConvidado
}