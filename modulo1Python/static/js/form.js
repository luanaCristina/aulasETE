/**
 * Validação client-side do formulário.
 * O formulário também é validado server-side pelo Flask (app.py).
 * Dupla validação = boa prática de segurança!
 */
(function () {
    'use strict';
    const form = document.getElementById('form-contato');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        let valido = true;

        const nome = document.getElementById('nome');
        const email = document.getElementById('email');
        const mensagem = document.getElementById('mensagem');

        // Limpar erros anteriores
        document.querySelectorAll('.form-error').forEach(el => el.textContent = '');

        if (!nome.value.trim() || nome.value.trim().length < 3) {
            document.getElementById('nome-error').textContent = 'Nome deve ter pelo menos 3 caracteres.';
            valido = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.value.trim() || !emailRegex.test(email.value)) {
            document.getElementById('email-error').textContent = 'E-mail inválido.';
            valido = false;
        }

        if (!mensagem.value.trim() || mensagem.value.trim().length < 10) {
            document.getElementById('mensagem-error').textContent = 'Mensagem deve ter pelo menos 10 caracteres.';
            valido = false;
        }

        if (!valido) {
            e.preventDefault();
        }
        // Se válido, o formulário é enviado normalmente para o Flask (POST /contato)
    });
})();
