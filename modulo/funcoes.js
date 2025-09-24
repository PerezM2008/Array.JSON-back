/*******************************************************************
 * Objetivo: Arquivo responsavel pelas funções para criar a API de estados e cidades
 * Data: 15/09/2025
 * Autor: Matheus Perez
 * versão 1.0
 *  *****************************************************************/

//Importe do arquivo estados e cidades
const dados = require('./estados_cidades')
const MESSAGE_ERROR = {status : false, statuscode: 500, development: 'Matheus Perez', descricao: 'Valor não encontrado'}

//Retorna a lista de estados
const getAllEstados = function(){

    //Padrão do JSON que sera o retorno da função 
    let message = {status: true, statuscode: 200, development: 'Matheus Perez', uf: []}

    dados.listaDeEstados.estados.forEach(function(item){
    
    message.uf.push(item.sigla)

    });

    //Adiciona um elemento no JSON (Elemento de contagem "Quantidade: 27")
    message.quantidade = message.uf.length

    //Apaga um elemento existente no JSON
    //delete message.status


    if(message.uf.length > 0)
        return message; //Resultado Verdadeiro da API 200
    else
        return MESSAGE_ERROR; //Resultado Falso da API 500
}




//Retorna os dados do estado filtrando pela Sigla(A "sigla" que a function está recebendo é o que recebe o valor digitado pelo usuário)
const getEstadoBySigla = function(sigla){

//Variavel onde terá a estrutura que aparecerá (Com os valores vazios pois eles mudam de acordo com o que o usuario digitar)
    let referenceByStates = {
        status: true,
        statuscode: 200, 
        development: 'Matheus Perez',
        uf: '', 
        descricao: '', 
        capital: '', 
        regiao: ''
    }

//Ele entra no que a variavel "dados" está recebendo, procura "ListaDeEstados" e dentro dela procura "estados" que é um ARRAY, e ativa o forEach.
//E a function está recebendo o "item" que armazenará um elemento achado no ARRAY
    dados.listaDeEstados.estados.forEach(function(item){
        
        if(sigla.toUpperCase() == item.sigla.toUpperCase()){  //Aqui ficará a lógica que se a "sigla" for igual(==) a um "item" das "Siglas" que estão no "Estado".
                                                
            referenceByStates.uf = item.sigla   //ele colocará o "item.sigla" que foi achado dentro do "referenceByStates" no campo ".uf"
            referenceByStates.descricao = item.nome
            referenceByStates.capital = item.capital
            referenceByStates.regiao = item.regiao
        }
    })
if(referenceByStates.uf != ""){
    return referenceByStates;
} else {

    return MESSAGE_ERROR;

}
}






//Retorna a capital do estado por uma Sigla
const getCapitalBySigla = function(sigla){

    let returnByCapital = {uf: "", descricao: "", capital: ""}

    dados.listaDeEstados.estados.forEach(function(item){

        if(sigla.toUpperCase() == item.sigla.toUpperCase()){
            returnByCapital.uf = item.sigla
            returnByCapital.descricao = item.nome
            returnByCapital.capital = item.capital
        }
    })

    if(returnByCapital.uf != ""){
        return returnByCapital
    }else{
        return MESSAGE_ERROR
    }


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
    getAllEstados,
    getEstadoBySigla,
    getCapitalBySigla
}