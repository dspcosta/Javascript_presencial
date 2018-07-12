'use strict';

;(function () {

  var form = document.querySelector('.formNovoCartao');
  var areaTexto = document.querySelector('.formNovoCartao-conteudo');

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    //o trim elimina todos os espacos dentro do texto, para evitar que o usuario preencha com espacos
    //vazios.
    areaTexto.value = areaTexto.value.trim();
    var elementoErro = document.createElement('p');
    elementoErro.textContent = 'Digite uma mensagem para enviar!';
    elementoErro.classList.add('formNovoCartao-msg');
    // textArea = {conteudo: areaTexto.value}

    if (areaTexto.value == "") {
      console.log('Não há texto');

      form.insertAdjacentElement('beforebegin', elementoErro);

      elementoErro.addEventListener('animationend', function () {
        this.remove();
      });

      /* Outra maneira de fazer, assim ja da para criar o elemento completo. 
      form.insertAdjacentHTML('afterend', '<p class="formNovoCartao-msg"> Testeee</p>') */
    } else {

      criarCartaoNoMural({ conteudo: areaTexto.value });
    }

    form.reset();
    //ou areaTexto.value = ''

  });

  form.classList.remove('no-JS');
})();