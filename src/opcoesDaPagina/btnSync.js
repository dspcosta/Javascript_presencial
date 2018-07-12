;(function(){

 let btnSync = document.querySelector('#btnSync')

 btnSync.classList.remove('no-JS')

 btnSync.addEventListener('click', () =>{
//queremos salvar os cartoes
    
btnSync.classList.add("botaoSync--esperando")
btnSync.classList.remove('botaoSync--sincronizando')

    const conexaoApi = new XMLHttpRequest();

    conexaoApi.open('POST', 'http://ceep.herokuapp.com/cartoes/salvar')

    let cartoes = document.querySelectorAll('.cartao')
    console.log(cartoes);
    
    //transforma a lista de objetos retornada pelo queryselectorAll em array

    //map eh um 'forEach' que retorna um novo array
    cartoes = Array.from(cartoes).map(cartao => {
        //
        //o map retorna um array, ele vai montando, e aceita o return para isso, monta com base no 
        //retorno.
        let conteudo = cartao.querySelector('.cartao-conteudo').textContent
        let cor = cartao.style.backgroundColor
        
        
        return {
            conteudo,
            cor
        }
    })

    const cartoesUsuario = {
        usuario: 'daniel@gmail.com',
        cartoes
    }

    
    
    conexaoApi.setRequestHeader('Content-type', 'application/json')
    // conexaoApi.send(cartoes)

    conexaoApi.send(JSON.stringify(cartoesUsuario))
    
    console.log(JSON.stringify(cartoesUsuario));
    

    // let cartoesObjeto = []

    // cartoes.forEach(cartao =>{
    //     let conteudo
    // })

    //conexaoApi.send(cartoes)

    //  console.log('se eh loko cachoeira');

    conexaoApi.addEventListener('load', function(){
        
        const response = JSON.parse(conexaoApi.response)
        console.log(response);
        
        console.log(`${response.quantidade} cartões salvos em ${response.usuario}`);

        btnSync.classList.remove("botaoSync--esperando")
        btnSync.classList.add('botaoSync--sincronizando')
        
    })
     
    conexaoApi.addEventListener('error', function(){
        btnSync.classList.remove('botaoSync--esperando')
        btnSync.classList.add('botaoSynce--deuRuim')
    })
 })

})()