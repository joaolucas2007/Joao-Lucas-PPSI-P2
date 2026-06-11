const API =
"https://base-back-dwpz.onrender.com/produtos"

export async function listarJogos(){

    const resposta =
    await fetch(API)

    if(!resposta.ok){

        throw new Error(
            "Erro ao carregar jogos"
        )

    }

    return await resposta.json()

}

export async function criarJogo(
    jogo
){

    const token =
    localStorage.getItem(
        "token"
    )

    const resposta =
    await fetch(
        API,
        {
            method:"POST",

            headers:{
                "Content-Type":
                "application/json",

                "Authorization":
                `Bearer ${token}`
            },

            body:
            JSON.stringify(
                jogo
            )
        }
    )

    if(!resposta.ok){

        const erro =
        await resposta.text()

        console.log(
            erro
        )

        throw new Error(
            "Erro ao criar jogo"
        )

    }

    return await resposta.json()

}