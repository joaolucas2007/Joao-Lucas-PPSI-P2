import {
    listarJogos,
    excluirJogo
}
from "../functions/produtos.js"

import {
    abrirDetalhes
}
from "../app.js"

export async function criarCatalogo(){

    const section =
    document.createElement("section")

    section.id =
    "catalogo"

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
        ()=>{
            abrirDetalhes()
        }
    )

    section.append(
        titulo,
        botaoNovo
    )

    const jogos =
    await listarJogos()

    jogos.forEach(
        jogo => {

            const card =
            document.createElement(
                "article"
            )

            card.classList.add(
                "card"
            )

            const imagem =
            document.createElement(
                "img"
            )

            imagem.src =
            jogo.imagemUrl

            imagem.alt =
            jogo.nome

            const nome =
            document.createElement(
                "h2"
            )

            nome.textContent =
            jogo.nome

            const descricao =
            document.createElement(
                "p"
            )

            descricao.textContent =
            jogo.descricao

            const preco =
            document.createElement(
                "p"
            )

            preco.textContent =
            `R$ ${jogo.preco}`

            const botaoEditar =
            document.createElement(
                "button"
            )

            botaoEditar.textContent =
            "Editar"

            botaoEditar.addEventListener(
                "click",
                ()=>{

                    abrirDetalhes(
                        jogo
                    )

                }
            )

            const botaoExcluir =
            document.createElement(
                "button"
            )

            botaoExcluir.textContent =
            "Excluir"

            botaoExcluir.addEventListener(
                "click",
                async ()=>{

                    const confirmar =
                    confirm(
                        `Excluir ${jogo.nome}?`
                    )

                    if(
                        !confirmar
                    ){
                        return
                    }

                    try{

                        await excluirJogo(
                            jogo.id
                        )

                        card.remove()

                        alert(
                            "Jogo excluído!"
                        )

                    }
                    catch{

                        alert(
                            "Erro ao excluir jogo"
                        )

                    }

                }
            )

            card.append(
                imagem,
                nome,
                descricao,
                preco,
                botaoEditar,
                botaoExcluir
            )

            section.appendChild(
                card
            )

        }
    )

    return section

}