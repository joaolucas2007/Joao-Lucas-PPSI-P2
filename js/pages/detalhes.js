import {
    criarJogo,
    atualizarJogo
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

export function criarDetalhes(
    jogo
){

    const section =
    document.createElement("section")

    const titulo =
    document.createElement("h2")

    if(jogo){

        titulo.textContent =
        "Editar Jogo"

    }
    else{

        titulo.textContent =
        "Cadastrar Jogo"

    }

    const inputNome =
    document.createElement("input")

    inputNome.placeholder =
    "Nome"

    if(jogo){

        inputNome.value =
        jogo.nome

    }

    const inputDescricao =
    document.createElement("textarea")

    inputDescricao.placeholder =
    "Descrição"

    if(jogo){

        inputDescricao.value =
        jogo.descricao

    }

    const inputPreco =
    document.createElement("input")

    inputPreco.type =
    "number"

    inputPreco.placeholder =
    "Preço"

    if(jogo){

        inputPreco.value =
        jogo.preco

    }

    const inputEstoque =
    document.createElement("input")

    inputEstoque.type =
    "number"

    inputEstoque.placeholder =
    "Estoque"

    if(jogo){

        inputEstoque.value =
        jogo.estoque

    }

    const inputImagem =
    document.createElement("input")

    inputImagem.type =
    "file"

    inputImagem.accept =
    "image/*"

    const preview =
    document.createElement("img")

    preview.classList.add(
        "preview"
    )

    if(
        jogo &&
        jogo.imagemUrl
    ){

        preview.src =
        jogo.imagemUrl

    }

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

    if(jogo){

        botaoSalvar.textContent =
        "Atualizar"

    }
    else{

        botaoSalvar.textContent =
        "Salvar"

    }

    botaoSalvar.addEventListener(
        "click",
        async ()=>{

            try{

                let imagemUrl =
                ""

                if(
                    jogo &&
                    jogo.imagemUrl
                ){

                    imagemUrl =
                    jogo.imagemUrl

                }

                const arquivo =
                inputImagem.files[0]

                if(arquivo){

                    imagemUrl =
                    await uploadImagem(
                        arquivo
                    )

                }

                const dadosJogo = {

                    nome:
                    inputNome.value,

                    slug:
                    inputNome.value
                        .toLowerCase()
                        .replace(
                            / /g,
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
                    1,

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

                if(jogo){

                    await atualizarJogo(
                        jogo.id,
                        dadosJogo
                    )

                    alert(
                        "Jogo atualizado!"
                    )

                }
                else{

                    await criarJogo(
                        dadosJogo
                    )

                    alert(
                        "Jogo cadastrado!"
                    )

                }

                abrirCatalogo()

            }
            catch(erro){

                console.error(
                    erro
                )

                alert(
                    "Erro ao salvar jogo"
                )

            }

        }
    )

    const botaoVoltar =
    document.createElement("button")

    botaoVoltar.textContent =
    "Voltar"

    botaoVoltar.addEventListener(
        "click",
        abrirCatalogo
    )

    section.append(
        titulo,
        inputNome,
        inputDescricao,
        inputPreco,
        inputEstoque,
        inputImagem,
        preview,
        botaoSalvar,
        botaoVoltar
    )

    return section

}