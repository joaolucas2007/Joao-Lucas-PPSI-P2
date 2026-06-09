const API =
"https://base-back-dwpz.onrender.com"

export async function login(
    email,
    senha
){

    const resposta =
    await fetch(
        `${API}/entrar`,
        {
            method:"POST",

            headers:{
                "Content-Type":
                "application/json"
            },

            body:JSON.stringify({
                email,
                senha
            })
        }
    )

    if(!resposta.ok){

        throw new Error(
            "Login inválido"
        )

    }

    const dados =
    await resposta.json()

    localStorage.setItem(
        "token",
        dados.accessToken
    )

    localStorage.setItem(
        "usuario",
        JSON.stringify(
            dados.user
        )
    )

    return dados
}