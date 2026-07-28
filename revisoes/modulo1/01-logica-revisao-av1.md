# 📖 Revisão Pré-Avaliação 1 — Lógica de Programação

> **Foco:** Variáveis, tipos, operadores, if/else, switch  
> **Dica:** Leia em 30 min, pratique os exercícios em 45 min. Você consegue! 💪

---

## 🧠 Mapa Mental / Resumo Rápido

### Variáveis
- `const` → valor fixo (nunca muda): `const PI = 3.14`
- `let` → valor que muda: `let contador = 0; contador++`
- **NUNCA use `var`** (escopo confuso, bugado)

### Tipos de Dados
- `number` → 42, 3.14, -7
- `string` → "texto", 'texto', \`template ${var}\`
- `boolean` → true / false
- `null` → vazio proposital
- `undefined` → variável declarada sem valor

### Operadores
- Aritméticos: `+  -  *  /  %  **`
- Comparação: `===` (SEMPRE use 3 iguais!) `!==  >  <  >=  <=`
- Lógicos: `&&` (E) `||` (OU) `!` (NÃO)

### If/Else — Decisão
```javascript
if (condição1) {
  // executa se condição1 for true
} else if (condição2) {
  // executa se condição2 for true
} else {
  // executa se nenhuma for true
}
```

### Switch — Múltiplas opções
```javascript
switch (valor) {
  case 'A': /*...*/ break;  // NUNCA esqueça o break!
  case 'B': /*...*/ break;
  default: /*...*/ 
}
```

---

## ⚠️ Pegadinhas e Erros Comuns

| # | Erro | Correção |
|---|------|----------|
| 1 | Usar `=` ao invés de `===` no if | `=` atribui, `===` compara! |
| 2 | `"5" + 3` resulta `"53"` | Use `Number("5") + 3` = 8 |
| 3 | Esquecer `break` no switch | Causa fall-through (executa cases abaixo) |
| 4 | `if (x = 5)` sempre true | Usar `if (x === 5)` |
| 5 | Comparar com `==` | SEMPRE usar `===` (compara valor E tipo) |
| 6 | `.toFixed()` retorna STRING | `+(valor.toFixed(2))` para number |

---

## ✏️ 5 Exercícios de Fixação

### Ex 1 (Fácil)
Declare variáveis para nome, idade e cidade. Exiba: "Meu nome é X, tenho Y anos e moro em Z."

### Ex 2 (Fácil)
Calcule a área de um círculo (PI × r²) com raio = 7. Exiba com 2 casas decimais.

### Ex 3 (Médio)
Dado `temperatura = 38`, exiba se a pessoa tem febre (>37.5), temperatura normal (36-37.5) ou hipotermia (<36).

### Ex 4 (Médio)
Crie um switch que recebe o número do mês (1-12) e exibe o nome. Trate mês inválido.

### Ex 5 (Difícil)
Calcule o preço final de um produto com desconto: se pagar à vista (10% off), em 2x (5% off), em 3x+ (sem desconto + 2% juros). Use if/else. Produto: R$ 250, pagamento: "2x".

---

## ✅ Gabarito

```javascript
// Ex 1
const nome = "João"; const idade = 20; const cidade = "Recife";
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);

// Ex 2
const PI = 3.14159; const raio = 7;
const area = PI * raio ** 2;
console.log(`Área: ${area.toFixed(2)}`); // 153.94

// Ex 3
const temp = 38;
if (temp > 37.5) console.log("Febre");
else if (temp >= 36) console.log("Normal");
else console.log("Hipotermia");

// Ex 4
const mes = 3;
switch (mes) {
  case 1: console.log("Janeiro"); break;
  case 2: console.log("Fevereiro"); break;
  case 3: console.log("Março"); break;
  // ... até 12
  default: console.log("Mês inválido");
}

// Ex 5
const preco = 250; const pagamento = "2x";
let final;
if (pagamento === "vista") final = preco * 0.90;
else if (pagamento === "2x") final = preco * 0.95;
else final = preco * 1.02;
console.log(`Total: R$ ${final.toFixed(2)}`); // R$ 237.50
```
