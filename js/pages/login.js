import { login }
from "../functions/auth.js"

export function criarLogin(
    aoLogar
){

    const section =
    document.createElement("section")

    const titulo =
    document.createElement("h2")

    titulo.textContent =
    "Login"

    const inputEmail =
    document.createElement("input")

    inputEmail.type =
    "email"

    inputEmail.placeholder =
    "Digite seu email"

    const inputSenha =
    document.createElement("input")

    inputSenha.type =
    "password"

    inputSenha.placeholder =
    "Digite sua senha"

    const botao =
    document.createElement("button")

    botao.textContent =
    "Entrar"

    const mensagem =
    document.createElement("p")

    botao.addEventListener(
        "click",
        async ()=>{

            try{

                await login(
                    inputEmail.value,
                    inputSenha.value
                )

                aoLogar()

            }
            catch{

                mensagem.textContent =
                "Email ou senha inválidos"

            }

        }
    )

    section.append(
        titulo,
        inputEmail,
        inputSenha,
        botao,
        mensagem
    )

    return section
}