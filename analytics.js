/*
 * Contagem de acessos (GoatCounter — sem cookies, respeita a privacidade).
 *
 * Como ativar:
 *  1. Crie uma conta gratuita em https://www.goatcounter.com/signup
 *  2. Escolha um código (ex.: "luanaete") — o painel ficará em https://luanaete.goatcounter.com
 *  3. Coloque o código abaixo em GOATCOUNTER_CODE e faça o push.
 *
 * Enquanto GOATCOUNTER_CODE estiver vazio, nada é enviado.
 */
(function () {
  var GOATCOUNTER_CODE = '';

  if (!GOATCOUNTER_CODE) return;
  // Não conta acessos locais durante o desenvolvimento
  if (/^(localhost|127\.0\.0\.1|)$/.test(location.hostname)) return;

  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://gc.zgo.at/count.js';
  s.setAttribute('data-goatcounter', 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count');
  document.head.appendChild(s);
})();
