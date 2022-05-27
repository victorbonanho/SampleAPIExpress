//CRUD COMPLETO

//sincrono
const { response } = require('express');
const express = require('express');//importa o express e pega os seus pacotes(require)
const app = express();//Retorna um objeto do tipo express
//Já existe um servidor
const bodyParser = require("body-parser")

app.use(bodyParser({extended: true}))

app.get('/', (req, res)=>{
    res.status(200).send('Olá mundo');
}) //RESposta, REQuisição

app.post('/', (req, res)=>{
    res.status(201).send(req.body)
})

app.put('/:id', (req,res)=>{
    res.status(202).send({
        codigo: req.params.id,
        corpo: req.body
    });
})

app.delete('/:id', (req,res)=>{
    res.status(204).send(req.param.id);
})

//sincrono
//assincrono -> não tem callback
//Promise (then ou async/await)-> promessa de fazer em algum momento determinada ação

app.listen(3000, () => {
    console.log("API inicializada");
}) //sobrecarga de étodo, posso ter vários parâmetros diferentes
//porta com callback


/*

CRUD
CREATE READ UPDATE DELETE

GET - Pegar alguma coisa, lista, elemento e até página
POST - Enviar dados para sua API (Salvar)
PUT - Atualizar a informação
DELETE - Deletar

200 - OK
201- Created
202 - Accepted
204 - No Content

*/