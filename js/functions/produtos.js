const API =
"https://base-back-dwpz.onrender.com/produtos"

export async function listarJogos() {

    const resposta =
    await fetch(API)

    if(!resposta.ok){
        throw new Error(
            "Erro ao carregar produtos"
        )
    }

    return await resposta.json()
}