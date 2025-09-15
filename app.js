/*******************************************************************
 * Objetivo: API responsavel em criar endPoint referente estado e cidades
 * Data: 15/09/2025
 * Autor: Matheus Perez
 * versão 1.0
 * 
 * Observações: Instalar dependencias para criar a API
 *      express     - npm install express     --save / Instala as dependências para criar um API
 *      cors        - npm instal cors         --save / Instala as dependencias para configurar as permissões de uma API
 *      body-parser - npm install body-parser --save / Instala as dependencias para receber os tipos de dados via POST ou PUT

 *  *****************************************************************/

//Import das dependencias
//const express [variavel que ela ficará guardada] = require('express') [nome da dependencia]
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//Define a porta padrão da API, se for em um servidor de nuvem não temos acesso a porta.
    //em execução local podemos definir uma porta livre 
const PORT = process.PORT || 8080

//Instancia na classe do Express
const app = express()

app.use((require, response, next) => {
    response.header('Access-Control-Allow-Origin', '*')
    response.header('Access-Control-Allow-Methods', 'GET')

    app.use(cors())
    next() // Serve para que o cors suba na API e a API escute os EndPoint, se não ouver o next() a api para de ouvir
})

app.get('/v1/estados', function(request, response){
    
})