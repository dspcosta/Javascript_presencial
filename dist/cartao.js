'use strict';

;(function () {

    'use strict';

    var cartoes = document.querySelectorAll('.cartao');
    console.log(cartoes);

    cartoes.forEach(function (cartao) {
        cartao.addEventListener('focusin', function () {
            cartao.classList.add('cartao--focado');
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
    });
})();