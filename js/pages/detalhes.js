import {
    criarJogo
}
from "../functions/produtos.js"

import {
    uploadImagem
}
from "../functions/cloudinary.js"

import {
    abrirCatalogo
}
from "../app.js"

export function criarDetalhes(){

    const section =
    document.createElement("section")

    const titulo =
    document.createElement("h2")

    titulo.textContent =
    "Cadastrar Jogo"

    const inputNome =
    document.createElement("input")

    inputNome.placeholder =
    "Nome"

    const inputDescricao =
    document.createElement("textarea")

    inputDescricao.placeholder =
    "Descrição"

    const inputCategoria =
    document.createElement("input")

    inputCategoria.type =
    "number"

    inputCategoria.placeholder =
    "Categoria ID"

    const inputPreco =
    document.createElement("input")

    inputPreco.type =
    "number"

    inputPreco.placeholder =
    "Preço"

    const inputEstoque =
    document.createElement("input")

    inputEstoque.type =
    "number"

    inputEstoque.placeholder =
    "Estoque"

    const inputImagem =
    document.createElement("input")

    inputImagem.type =
    "file"

    const preview =
    document.createElement("img")

    inputImagem.addEventListener(
        "change",
        ()=>{

            const arquivo =
            inputImagem.files[0]

            if(arquivo){

                preview.src =
                URL.createObjectURL(
                    arquivo
                )

            }

        }
    )

    const botaoSalvar =
    document.createElement("button")

    botaoSalvar.textContent =
    "Salvar"

    botaoSalvar.addEventListener(
        "click",
        async ()=>{

            try{

                let imagemUrl =
                ""

                const arquivo =
                inputImagem.files[0]

                if(arquivo){

                    imagemUrl =
                    await uploadImagem(
                        arquivo
                    )

                }

                const jogo = {

                    nome:
                    inputNome.value,

                    slug:
                    inputNome.value
                        .toLowerCase()
                        .replaceAll(
                            " ",
                            "-"
                        ),

                    descricao:
                    inputDescricao.value,

                    preco:
                    Number(
                        inputPreco.value
                    ),

                    precoAntigo:
                    null,

                    categoriaId:
                    Number(
                        inputCategoria.value
                    ),

                    imagemUrl:
                    imagemUrl,

                    galeria:[
                        imagemUrl
                    ],

                    estoque:
                    Number(
                        inputEstoque.value
                    ),

                    ativo:
                    true,

                    emDestaque:
                    false,

                    ordemDestaque:
                    null

                }

                await criarJogo(
                    jogo
                )

                alert(
                    "Jogo cadastrado!"
                )

                abrirCatalogo()

            }
            catch(erro){

                console.error(
                    erro
                )

                alert(
                    "Erro ao cadastrar"
                )

            }

        }
    )

    section.append(
        titulo,
        inputNome,
        inputDescricao,
        inputCategoria,
        inputPreco,
        inputEstoque,
        inputImagem,
        preview,
        botaoSalvar
    )

    return section

}