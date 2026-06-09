import { criarDetalhes }
from "./pages/detalhes.js"

const app =
document.getElementById("app")

const detalhes =
criarDetalhes()

app.appendChild(
    detalhes
)