let livros = require('../dados/bancodedados');

const consultaColecao = (req, res) => {
    return res.json(livros)
}

const consultaPorId = (req, res) => {
    let { id } = req.params;
    if (isNaN(Number(id))) {
        return res.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." })
    }

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id)
    });
    const livroNaoEncontrado = livros.find((livro) => {
        return livro.id !== Number(id)
    });

    if (livroEncontrado) {
        return res.status(200).json(livroEncontrado)
    } else if (livroNaoEncontrado) {
        return res.status(400).json({ mensagem: "Não existe livro para o ID informado" })
    }
}

const adicionarLivro = (req, res) => {
    const { titulo, autor, ano, numPaginas } = req.body
    const livroAdicionado = {
        id: livros[livros.length - 1].id + 1,
        titulo,
        autor,
        ano,
        numPaginas
    }
    livros.push(livroAdicionado)
    res.json(livroAdicionado)
}

const substituindoLivro = (req, res) => {
    let { id } = req.params
    const { titulo, autor, ano, numPaginas } = req.body

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id)
    });
    const livroNaoEncontrado = livros.find((livro) => {
        return livro.id !== Number(id)
    });

    if (livroEncontrado) {
        livroEncontrado.titulo = titulo;
        livroEncontrado.autor = autor;
        livroEncontrado.ano = ano;
        livroEncontrado.numPaginas = numPaginas
        return res.status(200).json({ mensagem: "Livro substituído." });
    } else if (livroNaoEncontrado) {
        return res.status(400).json({ mensagem: "Não existe livro a ser substituído para o ID informado." })
    }
}

const alterandoLivro = (req, res) => {
    let { id } = req.params;
    const { titulo, autor, ano, numPaginas } = req.body

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id)
    });
    const livroNaoEncontrado = livros.find((livro) => {
        return livro.id !== Number(id)
    });

    if (livroEncontrado) {
        if (req.body.titulo) {
            livroEncontrado.titulo = titulo
        }
        if (req.body.autor) {
            livroEncontrado.autor = autor
        }
        if (req.body.ano) {
            livroEncontrado.ano = ano
        }
        if (req.body.numPaginas) {
            livroEncontrado.numPaginas = numPaginas
        }
        return res.status(200).json({ mensagem: "Livro alterado." })
    } else if (livroNaoEncontrado) {
        return res.status(400).json({ mensagem: "Não existe livro a ser alterado para o ID informado." })
    }
}


const removerLivro = (req, res) => {
    let { id } = req.params;

    const livroRemovido = livros.find((livro) => {
        return livro.id === Number(id)
    });
    const naoEncontrado = livros.find((livro) => {
        return livro.id !== Number(id)
    })

    if (livroRemovido) {
        livros = livros.filter((livro) => {
            return livro.id !== Number(id)
        })
        return res.status(200).json({ mensagem: "Livro removido." })
    } else if (naoEncontrado) {
        return res.status(400).json({ mensagem: "Não existe livro a ser removido para o ID informado." })
    }
}




module.exports = {
    consultaColecao,
    consultaPorId,
    adicionarLivro,
    substituindoLivro,
    alterandoLivro,
    removerLivro
}