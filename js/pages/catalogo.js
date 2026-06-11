import {
    listarJogos,
    excluirJogo
}
from "../functions/produtos.js"

import {
    abrirDetalhes,
    abrirLogin
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

    section.append(
        titulo
    )

    const botaoVoltarLogin =
    document.createElement("button")

    botaoVoltarLogin.textContent =
    "Voltar ao Login"

    botaoVoltarLogin.classList.add(
        "btn-voltar-login"
    )

    botaoVoltarLogin.addEventListener(
        "click",
        ()=>{
            abrirLogin()
        }
    )

    section.append(
        botaoVoltarLogin
    )

    const tipoUsuario =
    localStorage.getItem(
        "tipoUsuario"
    )

    if(
        tipoUsuario === "admin"
    ){

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
            botaoNovo
        )

    }

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

            const botaoComprar =
            document.createElement(
                "button"
            )

            botaoComprar.textContent =
            "Comprar"

            botaoComprar.classList.add(
                "btn-comprar"
            )

            card.append(
                imagem,
                nome,
                descricao,
                preco,
                botaoComprar
            )

            if(
                tipoUsuario === "admin"
            ){

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
                    botaoEditar,
                    botaoExcluir
                )

            }

            section.appendChild(
                card
            )

        }
    )

    return section

}