const CLOUD_NAME = "dwetjo8nf"

const UPLOAD_PRESET = "p2ppsi"

export async function uploadImagem(arquivo) {

    const formData = new FormData()

    formData.append(
        "file",
        arquivo
    )

    formData.append(
        "upload_preset",
        UPLOAD_PRESET
    )

    const resposta =
    await fetch(
        `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
        {
            method: "POST",
            body: formData
        }
    )

    if (!resposta.ok) {

        throw new Error(
            "Erro ao enviar imagem"
        )

    }

    const dados =
    await resposta.json()

    return dados.secure_url
}