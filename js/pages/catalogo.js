import { listarJogos }
from "../functions/produtos.js"

export async function criarCatalogo() {

    const section =
    document.createElement("section")

    section.id = "catalogo"

    const jogos =
    await listarJogos()

    jogos.forEach(jogo => {

        const card =
        document.createElement("article")

        card.classList.add("card")

        const imagem =
        document.createElement("img")

        imagem.src =
        jogo.imagemUrl

        imagem.alt =
        jogo.nome

        const corpo =
        document.createElement("div")

        corpo.classList.add("card-body")

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

        preco.classList.add("preco")

        preco.textContent =
        `R$ ${jogo.preco}`

        corpo.append(
            nome,
            descricao,
            preco
        )

        card.append(
            imagem,
            corpo
        )

        section.appendChild(card)

    })

    return section
}