const app = require("./src/app") //chamando o arquivo app

const PORT = 7090 // porta

//inicia o servidor
app.listen(PORT, ()=>{
    console.log(`Meu servidor está rodando na porta ${PORT}`)
})

