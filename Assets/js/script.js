document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('#formulario');
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    formulario.addEventListener('submit', function (event) {
        event.preventDefault();

        const campoNome = document.querySelector('#nome');
        const campoEmail = document.querySelector('#email');
        const campoMensagem = document.querySelector('#mensagem');

        let erro = false;

        if (campoNome.value.length < 3) {
            alert('O Nome deve ter no mínimo 3 caracteres.');
            campoNome.focus();
            erro = true;
        }

        if (!campoEmail.value.match(emailRegex)) {
            alert('Digite um E-mail válido.');
            campoEmail.focus();
            erro = true;
        }

        if (campoMensagem.value.length < 5) {
            alert('A Mensagem deve ter no mínimo 5 caracteres.');
            campoMensagem.focus();
            erro = true;
        }

        if (!erro) {
            alert("Formulário Enviado com Sucesso!");

            // Limpar campos
            campoNome.value = '';
            campoEmail.value = '';
            campoMensagem.value = '';
        }
    });
});
