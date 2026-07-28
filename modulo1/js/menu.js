/**
 * Menu Hambúrguer — Navegação Mobile
 * 
 * TODO para o aluno:
 * 1. Adicionar animação de transformação das linhas em "X"
 * 2. Fechar menu ao clicar fora dele
 * 3. Fechar menu ao redimensionar para desktop
 */

(function () {
    'use strict';

    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');

    if (!hamburger || !nav) return;

    // Toggle do menu ao clicar no hamburger
    hamburger.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('active');

        // Atualiza aria-expanded para acessibilidade
        hamburger.setAttribute('aria-expanded', isOpen.toString());
        hamburger.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });

    // Fecha o menu ao clicar em um link (mobile)
    const menuLinks = nav.querySelectorAll('.header__link');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
            hamburger.setAttribute('aria-label', 'Abrir menu');
        });
    });

    // TODO: Aluno — fechar menu ao clicar fora (document.addEventListener('click', ...))
    // TODO: Aluno — fechar menu ao pressionar Escape (keydown event)
})();
