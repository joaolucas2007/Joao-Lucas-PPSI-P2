import { criarLogin }
from "./pages/login.js"

import { criarCatalogo }
from "./pages/catalogo.js"

import { criarDetalhes }
from "./pages/detalhes.js"

const app =
document.getElementById("app")

function limparTela(){

    app.replaceChildren()

}

export async function abrirCatalogo(){

    limparTela()

    const catalogo =
    await criarCatalogo()

    app.appendChild(
        catalogo
    )

}

export function abrirDetalhes(
    jogo = null
){

    limparTela()

    const detalhes =
    criarDetalhes(
        jogo
    )

    app.appendChild(
        detalhes
    )

}

function abrirLogin(){

    limparTela()

    const login =
    criarLogin(
        abrirCatalogo
    )

    app.appendChild(
        login
    )

}

abrirLogin()