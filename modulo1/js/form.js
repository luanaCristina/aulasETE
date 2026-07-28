/**
 * Validação de Formulário — JavaScript Vanilla
 * 
 * Regras de validação:
 * - Nome: obrigatório, mínimo 3 caracteres
 * - E-mail: obrigatório, formato válido
 * - Telefone: opcional, mas se preenchido deve ter formato (XX) XXXXX-XXXX
 * - Mensagem: obrigatória, mínimo 10 caracteres
 * 
 * TODO para o aluno:
 * 1. Adicionar máscara de telefone (formatar enquanto digita)
 * 2. Melhorar mensagens de erro para serem mais descritivas
 * 3. Desabilitar botão durante "envio"
 */

(function () {
    'use strict';

    const form = document.getElementById('form-contato');
    if (!form) return;

    // ========== FUNÇÕES DE VALIDAÇÃO ==========

    function validateNome(valor) {
        if (!valor.trim()) {
            return 'O nome é obrigatório.';
        }
        if (valor.trim().length < 3) {
            return 'O nome deve ter pelo menos 3 caracteres.';
        }
        return '';
    }

    function validateEmail(valor) {
        if (!valor.trim()) {
            return 'O e-mail é obrigatório.';
        }
        // Regex simples para validação de e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(valor)) {
            return 'Por favor, insira um e-mail válido.';
        }
        return '';
    }

    function validateTelefone(valor) {
        if (!valor.trim()) {
            return ''; // Campo opcional
        }
        // Formato: (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
        const telRegex = /^\(\d{2}\)\s?\d{4,5}-?\d{4}$/;
        if (!telRegex.test(valor)) {
            return 'Formato esperado: (81) 99999-9999';
        }
        return '';
    }

    function validateMensagem(valor) {
        if (!valor.trim()) {
            return 'A mensagem é obrigatória.';
        }
        if (valor.trim().length < 10) {
            return 'A mensagem deve ter pelo menos 10 caracteres.';
        }
        return '';
    }

    // ========== EXIBIR / LIMPAR ERROS ==========

    function showError(fieldId, message) {
        var field = document.getElementById(fieldId);
        var errorSpan = document.getElementById(fieldId + '-error');

        if (field && message) {
            field.classList.add('error');
            field.setAttribute('aria-describedby', fieldId + '-error');
        }
        if (errorSpan) {
            errorSpan.textContent = message;
        }
    }

    function clearError(fieldId) {
        var field = document.getElementById(fieldId);
        var errorSpan = document.getElementById(fieldId + '-error');

        if (field) {
            field.classList.remove('error');
            field.removeAttribute('aria-describedby');
        }
        if (errorSpan) {
            errorSpan.textContent = '';
        }
    }

    // ========== FEEDBACK GERAL ==========

    function showFeedback(type, message) {
        var feedback = document.getElementById('form-feedback');
        if (!feedback) return;

        feedback.hidden = false;
        feedback.className = 'form-feedback form-feedback--' + type;
        feedback.textContent = message;

        // Remove feedback após 5 segundos
        setTimeout(function () {
            feedback.hidden = true;
        }, 5000);
    }

    // ========== SUBMIT DO FORMULÁRIO ==========

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede recarregar a página

        // Limpar erros anteriores
        clearError('nome');
        clearError('email');
        clearError('telefone');
        clearError('mensagem');

        // Pegar valores
        var nome = document.getElementById('nome').value;
        var email = document.getElementById('email').value;
        var telefone = document.getElementById('telefone').value;
        var mensagem = document.getElementById('mensagem').value;

        // Validar
        var erros = {
            nome: validateNome(nome),
            email: validateEmail(email),
            telefone: validateTelefone(telefone),
            mensagem: validateMensagem(mensagem)
        };

        // Verificar se há erros
        var temErro = false;
        for (var campo in erros) {
            if (erros[campo]) {
                showError(campo, erros[campo]);
                temErro = true;
            }
        }

        if (temErro) {
            // Focar no primeiro campo com erro
            var primeiroErro = document.querySelector('.error');
            if (primeiroErro) {
                primeiroErro.focus();
            }
            return;
        }

        // Sucesso — simular envio
        showFeedback('success', '✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
        form.reset();

        // TODO: Aluno — no futuro, integrar com FormSubmit, EmailJS ou back-end real
    });

    // ========== VALIDAÇÃO EM TEMPO REAL (on blur) ==========

    document.getElementById('nome').addEventListener('blur', function () {
        var erro = validateNome(this.value);
        if (erro) showError('nome', erro);
        else clearError('nome');
    });

    document.getElementById('email').addEventListener('blur', function () {
        var erro = validateEmail(this.value);
        if (erro) showError('email', erro);
        else clearError('email');
    });

    document.getElementById('telefone').addEventListener('blur', function () {
        var erro = validateTelefone(this.value);
        if (erro) showError('telefone', erro);
        else clearError('telefone');
    });

    document.getElementById('mensagem').addEventListener('blur', function () {
        var erro = validateMensagem(this.value);
        if (erro) showError('mensagem', erro);
        else clearError('mensagem');
    });

    // TODO: Aluno — implementar máscara de telefone no evento 'input'
    // Dica: capturar apenas números e reformatar para (XX) XXXXX-XXXX
})();
