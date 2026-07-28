(function () {
    'use strict';
    const hamburger = document.getElementById('hamburger');
    const nav = document.getElementById('nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function () {
        const isOpen = nav.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen.toString());
    });

    nav.querySelectorAll('.header__link').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
})();
