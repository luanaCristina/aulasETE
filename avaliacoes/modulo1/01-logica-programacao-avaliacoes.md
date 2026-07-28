# 📝 Avaliações — Lógica de Programação e Algoritmos

> **Módulo:** I | **Disciplina:** Lógica de Programação e Algoritmos  
> **Carga Horária:** 80h | **Linguagem:** JavaScript

---

## AVALIAÇÃO 1 — Diagnóstica/Prática Inicial

> **Peso:** 25% | **Duração:** 90 minutos | **Individual**  
> **Conteúdo:** Variáveis, tipos, operadores, if/else, switch

### Questão 1 (20 pontos) — Cálculo de Desconto

Um e-commerce oferece descontos por faixa de valor:
- Compras até R$ 100: sem desconto
- Compras de R$ 100,01 a R$ 500: 5% de desconto
- Compras acima de R$ 500: 10% de desconto

**Escreva um programa que:**
1. Declare uma variável `valorCompra` com o valor 350.00
2. Calcule o desconto conforme a tabela
3. Exiba: valor original, desconto aplicado (%) e valor final

**Gabarito:**
```javascript
const valorCompra = 350.00;
let percentual = 0;

if (valorCompra > 500) {
  percentual = 10;
} else if (valorCompra > 100) {
  percentual = 5;
}

const desconto = valorCompra * (percentual / 100);
const valorFinal = valorCompra - desconto;

console.log(`Valor original: R$ ${valorCompra.toFixed(2)}`);
console.log(`Desconto: ${percentual}% (R$ ${desconto.toFixed(2)})`);
console.log(`Valor final: R$ ${valorFinal.toFixed(2)}`);
```

**Rubrica:**
| Critério | Pontos |
|----------|--------|
| Variável declarada corretamente | 3 |
| if/else com condições corretas | 8 |
| Cálculo do desconto correto | 4 |
| Exibição formatada com .toFixed(2) | 3 |
| Código executa sem erros | 2 |

---

### Questão 2 (30 pontos) — Classificador de Triângulos

**Escreva um programa que classifique um triângulo:**
- Dados 3 lados (a=5, b=5, c=5), determine se é:
  - Equilátero (3 lados iguais)
  - Isósceles (2 lados iguais)
  - Escaleno (todos diferentes)
- Antes de classificar, verifique se os lados formam um triângulo válido
  (a soma de dois lados deve ser maior que o terceiro)

**Gabarito:**
```javascript
const a = 5, b = 5, c = 8;

// Validação
const valido = (a + b > c) && (a + c > b) && (b + c > a);

if (!valido) {
  console.log("Não forma um triângulo válido.");
} else if (a === b && b === c) {
  console.log("Triângulo Equilátero");
} else if (a === b || a === c || b === c) {
  console.log("Triângulo Isósceles");
} else {
  console.log("Triângulo Escaleno");
}
```

**Rubrica:**
| Critério | Pontos |
|----------|--------|
| Validação de triângulo (3 condições com &&) | 10 |
| Classificação equilátero (===) | 5 |
| Classificação isósceles (|| com ===) | 8 |
| Classificação escaleno (else) | 4 |
| Código sem erros de sintaxe | 3 |

---

### Questão 3 (25 pontos) — Calculadora com Switch

**Crie uma calculadora que:**
- Recebe dois números (a=15, b=4) e um operador (+, -, *, /, %)
- Use switch/case para realizar a operação
- Trate divisão por zero

**Gabarito:**
```javascript
const a = 15, b = 4, operador = '/';
let resultado;

switch (operador) {
  case '+': resultado = a + b; break;
  case '-': resultado = a - b; break;
  case '*': resultado = a * b; break;
  case '/':
    if (b === 0) { console.log("Erro: divisão por zero!"); break; }
    resultado = a / b; break;
  case '%': resultado = a % b; break;
  default: console.log("Operador inválido!");
}

if (resultado !== undefined) {
  console.log(`${a} ${operador} ${b} = ${resultado}`);
}
```

**Rubrica:**
| Critério | Pontos |
|----------|--------|
| Switch com 5 cases corretos | 12 |
| Tratamento de divisão por zero | 5 |
| Default para operador inválido | 3 |
| Saída formatada | 3 |
| Uso correto de break | 2 |

---

### Questão 4 (25 pontos) — Conversor de Notas

**Sistema de uma escola:** converter nota numérica (0-10) em conceito:
- 9.0 a 10.0: A (Excelente)
- 7.0 a 8.9: B (Bom)
- 5.0 a 6.9: C (Regular)
- 3.0 a 4.9: D (Insuficiente)
- 0.0 a 2.9: E (Reprovado)
- Fora de 0-10: "Nota inválida"

Exibir: nota, conceito e se está aprovado (>= 5.0).

**Gabarito:**
```javascript
const nota = 7.5;
let conceito, descricao;

if (nota < 0 || nota > 10) {
  console.log("Nota inválida!");
} else {
  if (nota >= 9) { conceito = 'A'; descricao = 'Excelente'; }
  else if (nota >= 7) { conceito = 'B'; descricao = 'Bom'; }
  else if (nota >= 5) { conceito = 'C'; descricao = 'Regular'; }
  else if (nota >= 3) { conceito = 'D'; descricao = 'Insuficiente'; }
  else { conceito = 'E'; descricao = 'Reprovado'; }

  const situacao = nota >= 5 ? 'APROVADO' : 'REPROVADO';
  console.log(`Nota: ${nota} | Conceito: ${conceito} (${descricao}) | ${situacao}`);
}
```

**Rubrica:**
| Critério | Pontos |
|----------|--------|
| Validação de range (0-10) | 5 |
| 5 faixas de if/else corretas | 10 |
| Situação aprovado/reprovado | 5 |
| Saída completa e formatada | 3 |
| Operador ternário (bônus) | 2 |

---

## AVALIAÇÃO 2 — Projeto Prático Integrado

> **Peso:** 35% | **Duração:** 2 aulas (4h) | **Individual ou Dupla**  
> **Conteúdo:** Repetição + Arrays + Funções

### Enunciado: Sistema de Caixa de Padaria

Você foi contratado para criar um **sistema de caixa** para a Padaria do
Seu Antônio. O sistema deve funcionar no terminal e permitir:

**Funcionalidades obrigatórias:**

1. **Adicionar item ao pedido** — Pedir nome do produto e preço
2. **Listar itens do pedido** — Exibir todos com número, nome e preço
3. **Remover item** — Remover por número/índice
4. **Calcular total** — Soma de todos os itens
5. **Aplicar desconto** — Se total > R$50: 10% de desconto
6. **Finalizar venda** — Exibir resumo completo e limpar pedido
7. **Sair** — Encerrar o programa

**Menu em loop:** O programa deve exibir o menu repetidamente até que
o usuário escolha "Sair" (usar do-while ou while).

---

### Rubrica de Avaliação (100 pontos)

| Critério | Pontos | Descrição |
|----------|--------|-----------|
| Menu funcional em loop | 15 | Loop que não encerra até opção sair |
| Adicionar item (push) | 15 | Recebe dados e adiciona ao array |
| Listar itens (forEach/for) | 10 | Exibe formatado com índice |
| Remover item (splice) | 15 | Remove pelo índice correto |
| Calcular total (reduce/for) | 15 | Soma correta dos preços |
| Desconto condicional | 10 | Aplica 10% se > R$50 |
| Finalizar (reset) | 10 | Resumo + limpa array |
| Código organizado (funções) | 10 | Mínimo 3 funções separadas |

---

### Gabarito / Solução de Referência

```javascript
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let pedido = [];

function perguntar(texto) {
  return new Promise(resolve => rl.question(texto, resolve));
}

function listarItens() {
  if (pedido.length === 0) {
    console.log('\n📋 Pedido vazio.');
    return;
  }
  console.log('\n📋 Itens do Pedido:');
  pedido.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.nome} — R$ ${item.preco.toFixed(2)}`);
  });
}

function calcularTotal() {
  return pedido.reduce((soma, item) => soma + item.preco, 0);
}

function calcularDesconto(total) {
  return total > 50 ? total * 0.10 : 0;
}

async function adicionarItem() {
  const nome = await perguntar('Nome do produto: ');
  const precoStr = await perguntar('Preço (R$): ');
  const preco = parseFloat(precoStr);

  if (isNaN(preco) || preco <= 0) {
    console.log('❌ Preço inválido!');
    return;
  }
  pedido.push({ nome, preco });
  console.log(`✅ "${nome}" adicionado!`);
}

async function removerItem() {
  listarItens();
  if (pedido.length === 0) return;
  const idx = await perguntar('Número do item a remover: ');
  const i = parseInt(idx) - 1;

  if (i < 0 || i >= pedido.length) {
    console.log('❌ Número inválido!');
    return;
  }
  const removido = pedido.splice(i, 1)[0];
  console.log(`🗑️ "${removido.nome}" removido.`);
}

function finalizarVenda() {
  if (pedido.length === 0) {
    console.log('\n⚠️ Nenhum item no pedido.');
    return;
  }

  const total = calcularTotal();
  const desconto = calcularDesconto(total);
  const totalFinal = total - desconto;

  console.log('\n════════════════════════════════');
  console.log('      🧾 RESUMO DA VENDA');
  console.log('════════════════════════════════');
  pedido.forEach((item, i) => {
    console.log(`  ${i + 1}. ${item.nome.padEnd(20)} R$ ${item.preco.toFixed(2)}`);
  });
  console.log('────────────────────────────────');
  console.log(`  Subtotal:   R$ ${total.toFixed(2)}`);
  if (desconto > 0) {
    console.log(`  Desconto:   -R$ ${desconto.toFixed(2)} (10%)`);
  }
  console.log(`  TOTAL:      R$ ${totalFinal.toFixed(2)}`);
  console.log('════════════════════════════════\n');

  pedido = []; // Limpa para próximo cliente
}

async function menu() {
  let opcao = '';
  do {
    console.log('\n🍞 PADARIA DO SEU ANTÔNIO');
    console.log('1. Adicionar item');
    console.log('2. Listar pedido');
    console.log('3. Remover item');
    console.log('4. Ver total');
    console.log('5. Finalizar venda');
    console.log('0. Sair');

    opcao = await perguntar('\nOpção: ');

    switch (opcao) {
      case '1': await adicionarItem(); break;
      case '2': listarItens(); break;
      case '3': await removerItem(); break;
      case '4':
        const t = calcularTotal();
        const d = calcularDesconto(t);
        console.log(`\n💰 Total: R$ ${t.toFixed(2)}${d > 0 ? ` (com desc: R$ ${(t-d).toFixed(2)})` : ''}`);
        break;
      case '5': finalizarVenda(); break;
      case '0': console.log('👋 Até logo!'); break;
      default: console.log('❌ Opção inválida!');
    }
  } while (opcao !== '0');

  rl.close();
}

menu();
```

---

## AVALIAÇÃO 3 — Prova Teórico-Prática Final

> **Peso:** 40% | **Duração:** 120 minutos | **Individual**  
> **Conteúdo:** Toda a ementa (variáveis → funções → algoritmos)

---

### PARTE A — Conceitual (30 pontos)

**Q1 (6 pts):** Qual a diferença entre `let`, `const` e `var`? Dê 1 exemplo de quando usar cada.

**Gabarito:** `const` = valor que não muda (constantes, config). `let` = valor que pode mudar (contadores, acumuladores). `var` = escopo de função (evitar, usar let/const). Exemplo: `const PI = 3.14;` `let contador = 0;`

**Q2 (6 pts):** O que acontece ao executar: `console.log("5" + 3)` e `console.log("5" - 3)`? Explique.

**Gabarito:** `"5" + 3` = "53" (concatenação, + com string une). `"5" - 3` = 2 (subtração converte string para número).

**Q3 (6 pts):** Explique a diferença entre `==` e `===` com 1 exemplo que retorna resultados diferentes.

**Gabarito:** `==` compara valor (com coerção). `===` compara valor E tipo. Exemplo: `5 == "5"` → true, `5 === "5"` → false.

**Q4 (6 pts):** Para que serve o `break` no switch? O que acontece se você não colocar?

**Gabarito:** `break` encerra o case atual. Sem break ocorre "fall-through": executa todos os cases abaixo até encontrar um break.

**Q5 (6 pts):** Qual a diferença entre `.map()` e `.filter()`? Quando usar cada um?

**Gabarito:** `map` transforma cada elemento (retorna array do mesmo tamanho). `filter` seleciona elementos por condição (retorna array menor ou igual). Usar map para transformar dados, filter para selecionar.

---

### PARTE B — Prática (70 pontos)

**Q6 (25 pts):** Análise de Notas de uma Turma

Dado o array de notas abaixo, crie um programa que calcule:
- Média da turma
- Maior e menor nota
- Quantidade de aprovados (>= 7.0) e reprovados
- Lista de alunos que precisam de recuperação (5.0 a 6.9)

```javascript
const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Carlos", nota: 6.2 },
  { nome: "Beatriz", nota: 9.0 },
  { nome: "Diego", nota: 4.3 },
  { nome: "Eva", nota: 7.0 },
  { nome: "Fábio", nota: 5.8 },
  { nome: "Gabi", nota: 3.5 },
  { nome: "Hugo", nota: 8.0 },
];
```

**Gabarito:**
```javascript
const notas = alunos.map(a => a.nota);
const media = notas.reduce((s, n) => s + n, 0) / notas.length;
const maior = Math.max(...notas);
const menor = Math.min(...notas);
const aprovados = alunos.filter(a => a.nota >= 7.0);
const reprovados = alunos.filter(a => a.nota < 5.0);
const recuperacao = alunos.filter(a => a.nota >= 5.0 && a.nota < 7.0);

console.log(`Média: ${media.toFixed(1)}`);
console.log(`Maior: ${maior} | Menor: ${menor}`);
console.log(`Aprovados: ${aprovados.length} | Reprovados: ${reprovados.length}`);
console.log(`Recuperação: ${recuperacao.map(a => a.nome).join(', ')}`);
```

**Rubrica Q6:**
| Critério | Pontos |
|----------|--------|
| Média correta com reduce | 5 |
| Maior/menor com Math.max/min | 5 |
| Filter aprovados (>=7) | 5 |
| Filter reprovados (<5) | 5 |
| Filter recuperação (5 a 6.9) | 5 |

---

**Q7 (25 pts):** Funções Utilitárias

Crie 3 funções:

1. `contarVogais(texto)` — retorna quantidade de vogais na string
2. `inverterPalavras(frase)` — "Olá Mundo" → "Mundo Olá"
3. `gerarSenha(tamanho)` — gera senha aleatória com letras e números

**Gabarito:**
```javascript
function contarVogais(texto) {
  const vogais = 'aeiouAEIOU';
  return [...texto].filter(c => vogais.includes(c)).length;
}

function inverterPalavras(frase) {
  return frase.split(' ').reverse().join(' ');
}

function gerarSenha(tamanho = 8) {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return senha;
}

console.log(contarVogais("JavaScript")); // 3
console.log(inverterPalavras("Olá Mundo Cruel")); // "Cruel Mundo Olá"
console.log(gerarSenha(12)); // ex: "aB3kL9mN2pQ1"
```

**Rubrica Q7:**
| Critério | Pontos |
|----------|--------|
| contarVogais funcional | 8 |
| inverterPalavras com split/reverse/join | 8 |
| gerarSenha com loop e randomização | 9 |

---

**Q8 (20 pts):** Algoritmo — Verificador de Palíndromo

Crie função `ehPalindromo(texto)` que retorna true/false.
- Deve ignorar espaços, maiúsculas e acentos.
- Exemplos: "Ana" → true, "A base do teto da casa" → false, "Socorram me subi no onibus em Marrocos" → true

**Gabarito:**
```javascript
function ehPalindromo(texto) {
  const limpo = texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/\s/g, ''); // remove espaços

  const invertido = [...limpo].reverse().join('');
  return limpo === invertido;
}

console.log(ehPalindromo("Ana")); // true
console.log(ehPalindromo("Socorram me subi no onibus em Marrocos")); // true
console.log(ehPalindromo("JavaScript")); // false
```

**Rubrica Q8:**
| Critério | Pontos |
|----------|--------|
| Converter para minúsculas | 4 |
| Remover espaços | 4 |
| Remover acentos (normalize) | 4 |
| Comparar com inverso | 5 |
| Funciona nos 3 exemplos | 3 |
