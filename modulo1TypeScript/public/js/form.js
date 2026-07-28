'use strict';
const form = document.querySelector('form');
if (form) {
  form.addEventListener('submit', (e) => {
    const nome = form.querySelector('[name="nome"]');
    const email = form.querySelector('[name="email"]');
    const msg = form.querySelector('[name="mensagem"]');
    let ok = true;
    if (!nome.value.trim() || nome.value.length < 3) { ok = false; alert('Nome inválido'); }
    if (!email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) { ok = false; alert('E-mail inválido'); }
    if (!msg.value.trim() || msg.value.length < 10) { ok = false; alert('Mensagem muito curta'); }
    if (!ok) e.preventDefault();
  });
}
