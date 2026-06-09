import { uploadImagem }
from "../functions/cloudinary.js"

export function criarDetalhes() {

    const section =
    document.createElement("section")

    section.classList.add(
        "detalhes"
    )

    const titulo =
    document.createElement("h2")

    titulo.textContent =
    "Cadastrar Jogo"

    const nomeLabel =
    document.createElement("label")

    nomeLabel.textContent =
    "Nome do Jogo"

    const inputNome =
    document.createElement("input")

    inputNome.type = "text"

    const descricaoLabel =
    document.createElement("label")

    descricaoLabel.textContent =
    "Descrição"

    const inputDescricao =
    document.createElement("textarea")

    const categoriaLabel =
    document.createElement("label")

    categoriaLabel.textContent =
    "Categoria"

    const inputCategoria =
    document.createElement("input")

    inputCategoria.type = "text"

    const precoLabel =
    document.createElement("label")

    precoLabel.textContent =
    "Preço"

    const inputPreco =
    document.createElement("input")

    inputPreco.type = "number"

    const estoqueLabel =
    document.createElement("label")

    estoqueLabel.textContent =
    "Estoque"

    const inputEstoque =
    document.createElement("input")

    inputEstoque.type = "number"

    const imagemLabel =
    document.createElement("label")

    imagemLabel.textContent =
    "Imagem"

    const inputImagem =
    document.createElement("input")

    inputImagem.type = "file"

    inputImagem.accept =
    "image/*"

    const preview =
    document.createElement("img")

    preview.classList.add(
        "preview"
    )

    inputImagem.addEventListener(
        "change",
        () => {

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
    "Salvar Jogo"

    botaoSalvar.addEventListener(
        "click",
        async () => {

            try{

                const arquivo =
                inputImagem.files[0]

                let imagemUrl = ""

                if(arquivo){

                    imagemUrl =
                    await uploadImagem(
                        arquivo
                    )

                }

                const jogo = {

                    nome:
                    inputNome.value,

                    descricao:
                    inputDescricao.value,

                    categoria:
                    inputCategoria.value,

                    preco:
                    Number(
                        inputPreco.value
                    ),

                    estoque:
                    Number(
                        inputEstoque.value
                    ),

                    imagemUrl
                }

                console.log(jogo)

                alert(
                    "Jogo pronto para salvar!"
                )

            }
            catch(erro){

                console.error(
                    erro
                )

                alert(
                    "Erro ao enviar imagem"
                )

            }

        }
    )

    section.append(
        titulo,

        nomeLabel,
        inputNome,

        descricaoLabel,
        inputDescricao,

        categoriaLabel,
        inputCategoria,

        precoLabel,
        inputPreco,

        estoqueLabel,
        inputEstoque,

        imagemLabel,
        inputImagem,

        preview,

        botaoSalvar
    )

    return section

}