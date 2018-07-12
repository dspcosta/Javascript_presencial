'use strict';

var numeroDoCartao = 1;

function criarCartaoNoMural(objetoCartao) {
    var posicaoCartao = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'afterbegin';


    var mural = document.querySelector('.mural');

    //     mural.insertAdjacentHTML('afterbegin', `

    //     <article id="cartao_${numeroDoCartao}" tabindex='0' class="cartao">
    //     <div class="opcoesDoCartao">
    //       <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
    //         <svg><use xlink:href="#iconeRemover"></use></svg>
    //       </button>

    //       <input type="radio" name="corDoCartao${numeroDoCartao}" value="#EBEF40" id="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo" checked>
    //       <label for="corPadrão-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
    //         Padrão
    //       </label>

    //       <input type="radio" name="corDoCartao${numeroDoCartao}" value="#F05450" id="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
    //       <label for="corImportante-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
    //         Importante
    //       </label>

    //       <input type="radio" name="corDoCartao${numeroDoCartao}" value="#92C4EC" id="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
    //       <label for="corTarefa-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
    //         Tarefa
    //       </label>

    //       <input type="radio" name="corDoCartao${numeroDoCartao}" value="#76EF40" id="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-radioTipo">
    //       <label for="corInspiração-cartao${numeroDoCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
    //         Inspiração
    //       </label>
    //     </div>
    //     <p class="cartao-conteudo" contenteditable tabindex="0">${areaTexto.value}</p>
    //   </article>

    //     `);

    var cartao = document.createElement('article');
    cartao.setAttribute("id", 'cartao_' + numeroDoCartao);
    cartao.setAttribute('tabindex', '0');
    cartao.style.backgroundColor = objetoCartao.cor;
    cartao.classList.add('cartao');
    cartao.innerHTML = '\n    \n        \n        <div class="opcoesDoCartao">\n          <button class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">\n            <svg><use xlink:href="#iconeRemover"></use></svg>\n          </button>\n\n          <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#EBEF40" id="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo" checked>\n          <label for="corPadr\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">\n            Padr\xE3o\n          </label>\n\n          <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#F05450" id="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n          <label for="corImportante-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">\n            Importante\n          </label>\n\n          <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#92C4EC" id="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n          <label for="corTarefa-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">\n            Tarefa\n          </label>\n\n          <input type="radio" name="corDoCartao' + numeroDoCartao + '" value="#76EF40" id="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-radioTipo">\n          <label for="corInspira\xE7\xE3o-cartao' + numeroDoCartao + '" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">\n            Inspira\xE7\xE3o\n          </label>\n        </div>\n        <p class="cartao-conteudo" contenteditable tabindex="0">' + objetoCartao.conteudo + '</p>\n      \n        \n        ';
    //areaTexto.value


    console.log(cartao);

    cartao.addEventListener('focusin', function () {
        cartao.classList.add('cartao--focado');

        //function()
    });

    cartao.addEventListener('focusout', function () {
        cartao.classList.remove('cartao--focado');
    });

    cartao.addEventListener('change', function (event) {
        var selecao = event.target;

        if (selecao.classList.contains('opcoesDoCartao-radioTipo') == true) {
            this.style.backgroundColor = selecao.value;
            // console.log( document.querySelector(`[for=${selecao.getAttribute('id')}]`).style.color )
        }
    });

    cartao.addEventListener('keyup', function (event) {
        var selecaoTeclado = event.target;

        if (selecaoTeclado.classList.contains('opcoesDoCartao-tipo') && event.key == "Enter" || event.key == " ") {
            selecaoTeclado.click();
            //emula a funcao do click ja estanciada ali em cima, com o chance. evento click do proprio
            //browser.
            console.log(event);
        }
    });

    cartao.addEventListener('click', function (event) {
        var deletaCartao = event.target;
        // let cartao =  this.parentNode.parentNode;

        if (deletaCartao.classList.contains('opcoesDoCartao-remove')) {
            this.classList.add('cartao--some');
            console.log('Classe remove adicionada');
            cartao.addEventListener('transitionend', function () {
                this.remove();
            });
        }
    });

    mural.insertAdjacentElement(posicaoCartao, cartao);
    numeroDoCartao++;

    console.log('Há texto');
}