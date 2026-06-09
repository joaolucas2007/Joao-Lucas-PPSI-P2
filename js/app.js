import { criarCatalogo }
from "./pages/catalogo.js"

const app =
document.getElementById("app")

async function iniciar() {

    try{

        const catalogo =
        await criarCatalogo()

        app.appendChild(
            catalogo
        )

    }
    catch(erro){

        const mensagem =
        document.createElement("h2")

        mensagem.textContent =
        "Erro ao carregar jogos"

        app.appendChild(
            mensagem
        )

        console.error(erro)
    }
}

iniciar()