import { listarJogos }
from "../functions/produtos.js"

import { abrirDetalhes }
from "../app.js"

export async function criarCatalogo(){

    const section =
    document.createElement("section")

    const titulo =
    document.createElement("h1")

    titulo.textContent =
    "Catálogo de Jogos"

    const botaoNovo =
    document.createElement("button")

    botaoNovo.textContent =
    "Cadastrar Jogo"

    botaoNovo.addEventListener(
        "click",
        abrirDetalhes
    )

    section.append(
        titulo,
        botaoNovo
    )

    const jogos =
    await listarJogos()

    jogos.forEach(jogo => {

        const card =
        document.createElement("article")

        const imagem =
        document.createElement("img")

        imagem.src =
        jogo.imagemUrl

        const nome =
        document.createElement("h2")

        nome.textContent =
        jogo.nome

        const descricao =
        document.createElement("p")

        descricao.textContent =
        jogo.descricao

        const preco =
        document.createElement("p")

        preco.textContent =
        `R$ ${jogo.preco}`

        card.append(
            imagem,
            nome,
            descricao,
            preco
        )

        section.appendChild(
            card
        )

    })

    return section

}