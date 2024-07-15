const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

function mostraMulher(request, response) {
    response.json({
        nome: 'Katïa Almeida',
        imagem: 'https://1drv.ms/i/s!AiUmIrVyjKzEh8Rn1q8HqM3tL1HnvA?e=slVoNc',
        minibio: 'Desenvolvedora backend '


    })
}


function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)