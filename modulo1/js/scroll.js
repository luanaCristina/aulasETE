/**
 * Scroll — Comportamentos de rolagem
 * 
 * Funcionalidades:
 * - Botão "Voltar ao topo" aparece após scroll
 * - Header com sombra ao rolar
 * 
 * TODO para o aluno:
 * 1. Adicionar highlight no link do menu conforme a seção visível
 * 2. Adicionar animação de fade-in nos elementos ao scrollar
 */

(function () {
    'use strict';

    const btnTop = document.querySelector('.btn-top');
    const header = document.querySelector('.header');

    if (!btnTop) return;

    // Mostra/esconde botão "voltar ao topo" conforme scroll
    window.addEventListener('scroll', function () {
        if (window.scrollY > 400) {
            btnTop.classList.add('visible');
        } else {
            btnTop.classList.remove('visible');
        }

        // Adiciona sombra extra ao header quando rolou
        if (header) {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
    });

    // TODO: Aluno — implementar scroll spy (destacar link do menu da seção atual)
    // Dica: usar IntersectionObserver para detectar qual seção está visível
})();
