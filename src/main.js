var botaoLista = document.querySelector("#btnMudaLayout");
var mudaLayout = document.querySelector(".mural")
var cartoes = document.querySelectorAll(".cartao")
let removeCartoes = document.querySelectorAll(".opcoesDoCartao-remove");



// var noJs = document.querySelectorAll('.no-JS')
//
// noJs.forEach(function(element){
//   element.classList.remove('no-JS')
// })


botaoLista.classList.remove('no-JS')

botaoLista.addEventListener('click', function (){
  if(botaoLista.textContent == "Linhas"){
    botaoLista.textContent = 'Blocos'

  } else{
    botaoLista.textContent = 'Linhas'
  }
})

botaoLista.addEventListener("click", alternaLayout)

function alternaLayout(){
  if (botaoLista.textContent == 'Blocos') {
  mudaLayout.classList.add("mural--linha");

}else {
  mudaLayout.classList.remove('mural--linha');
}
}





// console.log(botaoLista.textContent)

//
// console.log(botaoLista);
