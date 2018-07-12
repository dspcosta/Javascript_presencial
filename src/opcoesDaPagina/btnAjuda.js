//IIFE -> PADRAO DE CODIGO DESTA FORMA

;(function(){
    'use strict'

let btnAjuda = document.querySelector('#btnAjuda')
//btnAjuda por ser um id ele possui escopo global, portanto eu nao precisava nem declarar ele aqui, poderia
//fazer direto la em baixo que funcionaria.
console.log(btnAjuda);


let listAjuda =[
    {texto: 'Bem vindo a Ceep!',cor: '#F05450'}, 
    {texto: 'Clique no botão Linhas para mudar o layout', cor: '#92C4EC'},
    {texto: 'O site é otimizado para celular', cor: '#76EF40'}
]

btnAjuda.addEventListener('click',function(){

    let conexaoApi = new XMLHttpRequest()

    conexaoApi.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes')

    conexaoApi.responseType = 'json'
    //desta forma o retorno será um objeto direto, e nao um string.
    
    conexaoApi.send();

    conexaoApi.addEventListener('load', ()=>{

        let informacoesApi = conexaoApi.response.instrucoes
        informacoesApi.forEach(info => {
            criarCartaoNoMural(info, 'beforeend')

        })
        
    console.log(informacoesApi);
    
});
    
   /* listAjuda.forEach(ajuda => {
    criarCartaoNoMural(ajuda, 'beforeend')
    }) */
    
})

btnAjuda.classList.remove('no-JS');

})()