# 📝 SIMULADO GERAL — MÓDULO I

> **Disciplinas:** Lógica + HTML/CSS + Redes/SO + UI/UX  
> **Duração:** 120 minutos | **Total:** 100 pontos  
> **Formato:** 10 objetivas (5 pts cada = 50 pts) + 2 discursivas (25 pts cada = 50 pts)

---

## PARTE A — Questões Objetivas (50 pontos)

### Questão 1 (Lógica)
O que será exibido no console após executar o código abaixo?
```javascript
let x = 10;
let y = "10";
console.log(x == y, x === y);
```

A) `true true`  
B) `false false`  
C) `true false` ✅  
D) `false true`

**Gabarito: C.** `==` compara com coerção de tipo (10 == "10" é true). `===` compara valor E tipo (number !== string, então false).

---

### Questão 2 (Lógica)
Qual o resultado de `[1,2,3,4,5].filter(n => n % 2 === 0).map(n => n * 10)`?

A) `[10, 20, 30, 40, 50]`  
B) `[20, 40]` ✅  
C) `[2, 4]`  
D) `[10, 30, 50]`

**Gabarito: B.** filter mantém pares [2,4], depois map multiplica por 10 → [20, 40].

---

### Questão 3 (HTML/CSS)
Qual tag HTML5 é mais apropriada para agrupar links de navegação principal?

A) `<div class="nav">`  
B) `<ul class="menu">`  
C) `<nav>` ✅  
D) `<header>`

**Gabarito: C.** `<nav>` é a tag semântica para blocos de navegação. `<div>` não tem significado semântico. `<header>` é para cabeçalhos, não especificamente navegação.

---

### Questão 4 (HTML/CSS)
No CSS, qual propriedade define que os itens de um container flex devem quebrar de linha quando não couberem?

A) `flex-direction: wrap`  
B) `flex-wrap: break`  
C) `flex-wrap: wrap` ✅  
D) `display: flex-wrap`

**Gabarito: C.** `flex-wrap: wrap` permite que itens flex quebrem para a próxima linha.

---

### Questão 5 (HTML/CSS)
Qual abordagem é considerada "Mobile-First" no CSS?

A) Usar `max-width` nas media queries  
B) Usar `min-width` nas media queries ✅  
C) Usar unidades px fixas  
D) Esconder elementos no mobile com `display: none`

**Gabarito: B.** Mobile-first = CSS base atende mobile, media queries com `min-width` adicionam estilos para telas maiores.

---

### Questão 6 (Redes)
Qual protocolo opera na camada de Transporte e garante entrega ordenada dos pacotes?

A) HTTP  
B) IP  
C) TCP ✅  
D) DNS

**Gabarito: C.** TCP (Transmission Control Protocol) garante entrega confiável e ordenada. HTTP é aplicação, IP é rede, DNS é aplicação.

---

### Questão 7 (Redes)
O status code HTTP `403` significa:

A) Recurso não encontrado  
B) Erro interno do servidor  
C) Redirecionamento permanente  
D) Acesso proibido (sem permissão) ✅

**Gabarito: D.** 403 = Forbidden (servidor entendeu, mas recusa). 404 = Not Found. 500 = Internal Server Error. 301 = Moved Permanently.

---

### Questão 8 (Redes/SO)
No Linux, o comando `chmod 755 script.sh` dá quais permissões?

A) Leitura para todos  
B) Dono: rwx, Grupo: rx, Outros: rx ✅  
C) Todos: rwx  
D) Dono: rw, Grupo: r, Outros: nenhuma

**Gabarito: B.** 7=rwx (dono), 5=r-x (grupo), 5=r-x (outros). 7=4+2+1, 5=4+0+1.

---

### Questão 9 (UI/UX)
Qual princípio de design diz que elementos relacionados devem estar agrupados visualmente?

A) Contraste  
B) Alinhamento  
C) Proximidade ✅  
D) Repetição

**Gabarito: C.** Proximidade (Proximity) = elementos relacionados ficam juntos. Contraste = diferenciação. Alinhamento = organização visual. Repetição = consistência.

---

### Questão 10 (UI/UX)
O que significa WCAG e qual nível é considerado o mínimo aceitável?

A) Web Content Accessibility Guidelines — Nível A  
B) Web Content Accessibility Guidelines — Nível AA ✅  
C) Web Component Architecture Guide — Nível 2  
D) Web CSS Animation Guide — Nível básico

**Gabarito: B.** WCAG = diretrizes de acessibilidade. Nível AA é o padrão mínimo exigido por legislações (incluindo LGPD/LBI no Brasil).

---

## PARTE B — Questões Discursivas (50 pontos)

### Questão 11 (25 pontos) — Lógica + HTML

**Contexto:** Uma loja online precisa exibir produtos filtrados.

Dado o array de produtos:
```javascript
const produtos = [
  { nome: "Notebook", preco: 3500, categoria: "eletronico", estoque: 5 },
  { nome: "Cadeira", preco: 800, categoria: "movel", estoque: 0 },
  { nome: "Monitor", preco: 1200, categoria: "eletronico", estoque: 3 },
  { nome: "Teclado", preco: 150, categoria: "eletronico", estoque: 12 },
  { nome: "Mesa", preco: 600, categoria: "movel", estoque: 2 },
];
```

**Tarefas:**
1. (10 pts) Escreva código JS que filtre apenas produtos eletrônicos COM estoque > 0
2. (8 pts) Calcule o valor total do estoque (preço × quantidade) desses filtrados
3. (7 pts) Escreva o HTML de um card de produto (semântico) que exibiria cada resultado

**Gabarito:**
```javascript
// 1. Filtrar eletrônicos em estoque
const eletronicos = produtos.filter(
  p => p.categoria === 'eletronico' && p.estoque > 0
);

// 2. Valor total do estoque
const valorEstoque = eletronicos.reduce(
  (total, p) => total + (p.preco * p.estoque), 0
);
console.log(`Valor total em estoque: R$ ${valorEstoque.toFixed(2)}`);
// Notebook(3500*5) + Monitor(1200*3) + Teclado(150*12) = 17500+3600+1800 = 22900
```

```html
<!-- 3. Card semântico -->
<article class="product-card">
  <h3>Notebook</h3>
  <p class="price">R$ 3.500,00</p>
  <p class="stock">5 em estoque</p>
  <button>Adicionar ao Carrinho</button>
</article>
```

---

### Questão 12 (25 pontos) — Redes + UX

**Cenário:** Você está projetando um app de delivery e precisa considerar
questões de rede e experiência do usuário.

**A (10 pts):** Explique o que acontece tecnicamente quando o app faz
uma requisição para buscar o cardápio do restaurante:
- Qual verbo HTTP é usado?
- O que é enviado no header Authorization?
- Se a resposta for um JSON grande (500KB), que técnica de UX
  você usaria enquanto os dados carregam?

**B (8 pts):** O app precisa funcionar bem em conexões lentas (3G).
Liste 3 decisões de UX/técnicas que melhoram a experiência:

**C (7 pts):** Desenhe (descreva) um wireframe low-fidelity da tela
de listagem de restaurantes com: busca, filtros, cards e loading state.

**Gabarito:**

**A:** GET /api/restaurants/:id/menu | Authorization: Bearer <jwt_token> | UX: skeleton loading (placeholders cinzas animados que imitam o layout).

**B:** 1) Lazy loading de imagens, 2) Cache local (AsyncStorage/localStorage), 3) Paginação (não carregar tudo de uma vez), 4) Offline-first com dados em cache.

**C:** Wireframe: topo com barra de busca, abaixo filtros horizontais (Pizza, Sushi, Burger scrollável), abaixo cards com: [foto | nome | avaliação ⭐ | tempo entrega | preço mínimo], loading = 3 skeleton cards cinzas pulsando.
