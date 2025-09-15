/*******************************************************************
 * Objetivo: Arquivo responsavel pelas funções para criar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Matheus Perez
 * versão 1.0
 *  *****************************************************************/

//Importe do arquivo estados e cidades
const dados = require('./estados_cidades')
const MESSAGE_ERROR = {status : false, statuscode: 500, development: 'Matheus Perez'}
//Retorna a lista de estados
const getAllEstados = function(){

    let message = {status: true, statuscode: 200, development: 'Matheus Perez', uf: []}

    dados.listaDeEstados.estados.forEach(function(item){
    
    message.uf.push(item.sigla)
    });
    //Adiciona um elemento no JSON
    message.quantidade = message.uf.length

    //Apaga um elemento existente no JSON
    //delete message.status

    if(message.uf.length > 0)
        return message; //Resultado Verdadeiro da API 200
    else
        return MESSAGE_ERROR; //Resultado Falso da API 500
    
    
}

//Retorna os dados do estado filtrando pela Sigla
const getEstadoBySigla = function(sigla){

}

//Retorna a capital do estado por uma Sigla
const getCapitalBySigla = function(sigla){

}

//Retorna a lista de estados filtrando pela Região
const getEstadosByRegiao = function(regiao){

}

//Retorna a lista de estados e formam a capital de um país filtrando pelo País
const getEstadoIsCapitalByCountry = function(pais){

}

//Retorna as cidades filtrando pela sigla do Estado
const getCidadesBySiglas = function(sigla) {

}


module.exports = {
    getAllEstados
}