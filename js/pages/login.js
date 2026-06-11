import { login }
from "../functions/auth.js"

export function criarLogin(
    aoLogar
){

    const container =
    document.createElement("section")

    const titulo =
    document.createElement("h1")

    titulo.textContent =
    "GameVerse"

    const areaLogin =
    document.createElement("div")

    areaLogin.style.display =
    "flex"

    areaLogin.style.gap =
    "20px"

    areaLogin.style.flexWrap =
    "wrap"

    /*
    ADMIN
    */

    const adminCard =
    document.createElement("div")

    const adminTitulo =
    document.createElement("h2")

    adminTitulo.textContent =
    "Administrador"

    const adminEmail =
    document.createElement("input")

    adminEmail.type =
    "email"

    adminEmail.placeholder =
    "Email"

    const adminSenha =
    document.createElement("input")

    adminSenha.type =
    "password"

    adminSenha.placeholder =
    "Senha"

    const adminBotao =
    document.createElement("button")

    adminBotao.textContent =
    "Entrar"

    const adminMsg =
    document.createElement("p")

    adminBotao.addEventListener(
        "click",
        async ()=>{

            try{

                await login(
                    adminEmail.value,
                    adminSenha.value
                )

                localStorage.setItem(
                    "tipoUsuario",
                    "admin"
                )

                aoLogar()

            }
            catch{

                adminMsg.textContent =
                "Login inválido"

            }

        }
    )

    adminCard.append(
        adminTitulo,
        adminEmail,
        adminSenha,
        adminBotao,
        adminMsg
    )

    /*
    CLIENTE
    */

    const clienteCard =
    document.createElement("div")

    const clienteTitulo =
    document.createElement("h2")

    clienteTitulo.textContent =
    "Cliente"

    const clienteEmail =
    document.createElement("input")

    clienteEmail.placeholder =
    "Email"

    const clienteSenha =
    document.createElement("input")

    clienteSenha.type =
    "password"

    clienteSenha.placeholder =
    "Senha"

    const clienteBotao =
    document.createElement("button")

    clienteBotao.textContent =
    "Entrar"

    clienteBotao.addEventListener(
        "click",
        ()=>{

            localStorage.setItem(
                "tipoUsuario",
                "cliente"
            )

            aoLogar()

        }
    )

    clienteCard.append(
        clienteTitulo,
        clienteEmail,
        clienteSenha,
        clienteBotao
    )

    areaLogin.append(
        adminCard,
        clienteCard
    )

    container.append(
        titulo,
        areaLogin
    )

    return container

}