$(document).ready(function(){
    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(__) _____-____'
    });

    $('#cadastro-form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            "aceito-termos": {
                required: true
            }
        },
        messages: {
            nome: {
                required: 'Por favor, insira seu nome'
            },
            email: {
                required: 'Por favor, insira seu email',
                email: 'Por favor, insira um email válido'
            },
            telefone: {
                required: 'Por favor, insira seu telefone'
            },
            "aceito-termos": {
                required: 'Você deve aceitar os termos de privacidade'
            }
        },
        submitHandler: function(form) {
            console.log(form);
            alert('Formulário enviado com sucesso!');
        },
        invalidHandler: function(event, validator) {
            let camposIncorretos = validator.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos`);
            }
        }
    });
});