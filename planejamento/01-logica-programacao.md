# 📘 Disciplina 1 — Lógica de Programação e Algoritmos

> **Carga Horária:** 80h | **Aulas:** 40 encontros de 2h  
> **Linguagem:** JavaScript (Node.js) — fácil setup, relevante para o mercado  
> **Avaliações:** A1 (Aula 15), A2 (Aula 30), Projeto Final (Aula 38-40)

---

## 📅 Cronograma Resumido

| Bloco | Aulas | Tema |
|-------|-------|------|
| 1 | 01-08 | Fundamentos: variáveis, tipos, operadores, E/S |
| 2 | 09-16 | Estruturas de decisão (if/else/switch) |
| 3 | 17-24 | Estruturas de repetição (for/while/do-while) |
| 4 | 25-32 | Arrays, strings e funções |
| 5 | 33-40 | Algoritmos clássicos + projeto final |

---

## AULA 01 e 02 — O que é Programar? Ambiente e Primeiro Código

**Objetivo:** Aluno configura o ambiente (VS Code + Node.js) e executa
seu primeiro programa que recebe entrada e produz saída.

### Roteiro Teórico (30 min)
- O que é um algoritmo? Exemplos do dia a dia (receita, GPS, caixa eletrônico)
- Linguagens de programação: por que JavaScript?
- Instalação: VS Code + Node.js + Terminal
- Conceito: entrada → processamento → saída

### Atividade Prática (60 min)
**Contexto:** Você foi contratado para um app de delivery. Primeiro código:
pedir o nome do cliente e exibir uma saudação personalizada.

```javascript
// boilerplate entregue ao aluno
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.question('Digite seu nome: ', (nome) => {
  // TODO: Exibir "Bem-vindo(a) ao FoodExpress, [nome]!"
  rl.close();
});
```

### Gabarito
```javascript
rl.question('Digite seu nome: ', (nome) => {
  console.log(`Bem-vindo(a) ao FoodExpress, ${nome}!`);
  rl.close();
});
```

### Desafio Extraclasse
Modificar para pedir também o endereço e exibir:
"Olá [nome]! Entregaremos no endereço: [endereço]"

---

## AULA 03 e 04 — Variáveis, Tipos de Dados e Operadores Aritméticos

**Objetivo:** Declarar variáveis (let/const), identificar tipos primitivos
e realizar cálculos matemáticos básicos.

### Roteiro Teórico (30 min)
- `let` vs `const` vs `var` — quando usar cada um
- Tipos: number, string, boolean, null, undefined
- Operadores: `+`, `-`, `*`, `/`, `%`, `**`
- Template literals: `${variavel}`
- typeof para verificar tipos

### Atividade Prática (60 min)
**Contexto:** Calculadora de gorjeta para restaurante.

```javascript
// DESAFIO: Calcular gorjeta de 10%, 15% e 20% sobre a conta
const valorConta = 85.50;
// TODO: calcular e exibir as 3 opções de gorjeta
// TODO: exibir o total (conta + gorjeta) para cada opção
```

### Gabarito
```javascript
const valorConta = 85.50;
const gorjeta10 = valorConta * 0.10;
const gorjeta15 = valorConta * 0.15;
const gorjeta20 = valorConta * 0.20;

console.log(`Conta: R$ ${valorConta.toFixed(2)}`);
console.log(`Gorjeta 10%: R$ ${gorjeta10.toFixed(2)} → Total: R$ ${(valorConta + gorjeta10).toFixed(2)}`);
console.log(`Gorjeta 15%: R$ ${gorjeta15.toFixed(2)} → Total: R$ ${(valorConta + gorjeta15).toFixed(2)}`);
console.log(`Gorjeta 20%: R$ ${gorjeta20.toFixed(2)} → Total: R$ ${(valorConta + gorjeta20).toFixed(2)}`);
```

### Desafio Extraclasse
Calcular IMC: pedir peso e altura, exibir o resultado com 1 casa decimal.

---

## AULA 05 e 06 — Operadores de Comparação e Lógicos

**Objetivo:** Usar operadores de comparação (==, ===, >, <, >=, <=, !=)
e lógicos (&&, ||, !) para construir expressões booleanas.

### Roteiro Teórico (30 min)
- `==` vs `===` (igualdade fraca vs estrita)
- Operadores: >, <, >=, <=, !==
- Lógicos: && (E), || (OU), ! (NÃO)
- Tabela verdade simplificada
- Truthy e Falsy values em JS

### Atividade Prática (60 min)
**Contexto:** Sistema de validação de cadastro de e-commerce.

```javascript
// Validar se o usuário pode se cadastrar
const idade = 17;
const temCPF = true;
const emailValido = true;

// TODO: Criar variáveis booleanas que verifiquem:
// 1. maiorDeIdade (>= 18)
// 2. documentacaoOk (temCPF E emailValido)
// 3. podeCadastrar (maiorDeIdade E documentacaoOk)
// Exibir se pode ou não
```

### Gabarito
```javascript
const maiorDeIdade = idade >= 18;
const documentacaoOk = temCPF && emailValido;
const podeCadastrar = maiorDeIdade && documentacaoOk;

console.log(`Maior de idade: ${maiorDeIdade}`);
console.log(`Documentação OK: ${documentacaoOk}`);
console.log(`Pode cadastrar: ${podeCadastrar}`);
// Resultado: Pode cadastrar: false (menor de 18)
```

### Desafio Extraclasse
Criar validação de senha: mínimo 8 chars E pelo menos 1 número E pelo menos 1 maiúscula.

---

## AULA 07 e 08 — Conversão de Tipos e Entrada de Dados

**Objetivo:** Converter entre tipos (parseInt, parseFloat, String, Number)
e criar programas interativos com entrada do usuário.

### Roteiro Teórico (30 min)
- `parseInt()`, `parseFloat()`, `Number()`, `String()`, `.toString()`
- `isNaN()` para validar se é número
- Concatenação vs soma: "5" + 3 = "53" vs Number("5") + 3 = 8
- readline/prompt para entrada de dados

### Atividade Prática (60 min)
**Contexto:** Conversor de moedas para casa de câmbio.

```javascript
// Pedir valor em Reais e converter para Dólar e Euro
// Cotações fixas: USD = 5.10, EUR = 5.50
// TODO: ler valor, converter, exibir formatado
```

### Gabarito
```javascript
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const USD = 5.10;
const EUR = 5.50;

rl.question('Valor em R$: ', (input) => {
  const reais = parseFloat(input);
  if (isNaN(reais) || reais <= 0) {
    console.log('Valor inválido!');
  } else {
    console.log(`US$ ${(reais / USD).toFixed(2)}`);
    console.log(`€ ${(reais / EUR).toFixed(2)}`);
  }
  rl.close();
});
```

### Desafio Extraclasse
Converter temperatura: pedir Celsius, exibir Fahrenheit e Kelvin.

---

## AULA 09 e 10 — Estrutura Condicional: if / else

**Objetivo:** Implementar fluxos de decisão simples e compostos com if/else.

### Roteiro Teórico (30 min)
- Sintaxe: `if (condição) { } else { }`
- if / else if / else (múltiplas condições)
- Operador ternário: `condição ? valor1 : valor2`
- Boas práticas: evitar ifs aninhados demais

### Atividade Prática (60 min)
**Contexto:** Sistema de classificação de atendimento (app de banco digital).

```javascript
// Classificar cliente pelo saldo:
// VIP: >= 50000 | Premium: >= 10000 | Standard: >= 1000 | Básico: < 1000
const saldo = 12500;
// TODO: Classificar e exibir benefícios de cada categoria
```

### Gabarito
```javascript
const saldo = 12500;
let categoria, beneficios;

if (saldo >= 50000) {
  categoria = 'VIP';
  beneficios = 'Gerente exclusivo + cartão black + isenção de tarifas';
} else if (saldo >= 10000) {
  categoria = 'Premium';
  beneficios = 'Atendimento prioritário + cashback 2%';
} else if (saldo >= 1000) {
  categoria = 'Standard';
  beneficios = 'Cartão sem anuidade';
} else {
  categoria = 'Básico';
  beneficios = 'Conta digital gratuita';
}

console.log(`Categoria: ${categoria}`);
console.log(`Benefícios: ${beneficios}`);
```

### Desafio Extraclasse
Calcular desconto progressivo em compra: até R$100 = 0%, R$100-500 = 5%, >R$500 = 10%.

---

## AULA 11 e 12 — Estrutura Condicional: switch/case

**Objetivo:** Usar switch para cenários com múltiplas opções discretas.

### Roteiro Teórico (30 min)
- Sintaxe do switch/case/break/default
- Quando usar switch vs if/else (valores discretos vs ranges)
- Fall-through (sem break) — comportamento e uso intencional

### Atividade Prática (60 min)
**Contexto:** Calculadora de frete por região (e-commerce).

```javascript
// Regiões: N, NE, CO, SE, S → fretes diferentes + prazos
const regiao = 'NE';
const pesoKg = 2.5;
// TODO: switch para calcular frete e prazo por região
```

### Gabarito
```javascript
const regiao = 'NE';
const pesoKg = 2.5;
let fretePorKg, prazo;

switch (regiao) {
  case 'N':  fretePorKg = 12.00; prazo = '10-15 dias'; break;
  case 'NE': fretePorKg = 8.50;  prazo = '5-8 dias';   break;
  case 'CO': fretePorKg = 9.00;  prazo = '6-9 dias';   break;
  case 'SE': fretePorKg = 6.00;  prazo = '3-5 dias';   break;
  case 'S':  fretePorKg = 7.00;  prazo = '4-7 dias';   break;
  default:   fretePorKg = 15.00; prazo = 'Consultar';
}

const freteTotal = (fretePorKg * pesoKg).toFixed(2);
console.log(`Região: ${regiao} | Frete: R$ ${freteTotal} | Prazo: ${prazo}`);
```

---

## AULA 13 e 14 — Exercícios Integrados: Decisão

**Objetivo:** Resolver problemas complexos combinando if/else, switch,
operadores lógicos e entrada de dados.

### Atividade Prática (90 min)
**Contexto:** Mini-sistema de pedido de lanchonete (3 exercícios progressivos):

1. **Cardápio:** switch para exibir preço do item escolhido (1-5)
2. **Combo:** if/else para aplicar desconto se pedir lanche + bebida + sobremesa
3. **Pagamento:** calcular troco se dinheiro, aplicar 5% desconto no PIX

### Desafio Extraclasse
Simular um caixa eletrônico: pedir valor de saque e calcular menor quantidade
de notas (100, 50, 20, 10, 5, 2).

---

## AULA 15 — AVALIAÇÃO A1

**Formato:** Prova prática no computador (90 min) — 3 problemas:
1. Cálculo com variáveis e operadores (20 pts)
2. Decisão com if/else ou switch (40 pts)
3. Problema integrado com entrada de dados (40 pts)

---

## AULA 16 — Correção da A1 e Revisão

**Objetivo:** Discutir as soluções da prova e reforçar pontos fracos.

---

## AULA 17 e 18 — Estrutura de Repetição: while

**Objetivo:** Usar while para repetir ações enquanto uma condição for verdadeira.

### Roteiro Teórico (30 min)
- Sintaxe: `while (condição) { ... }`
- Variável de controle (contador/acumulador)
- Loop infinito: como evitar (sempre alterar a condição)
- Exemplo visual: "Enquanto tiver roupa suja, lave"

### Atividade Prática (60 min)
**Contexto:** Sistema de senha de atendimento (tipo banco/hospital).

```javascript
// Simular chamada de senhas: de 1 até 20
// Para cada senha: exibir número e o guichê (alterna entre 1, 2 e 3)
// TODO: usar while
```

### Gabarito
```javascript
let senha = 1;
const totalSenhas = 20;

while (senha <= totalSenhas) {
  const guiche = ((senha - 1) % 3) + 1;
  console.log(`Senha ${String(senha).padStart(3, '0')} → Guichê ${guiche}`);
  senha++;
}
```

### Desafio Extraclasse
Jogo de adivinhação: gerar número aleatório de 1-100, pedir chutes até acertar.

---

## AULA 19 e 20 — Estrutura de Repetição: for

**Objetivo:** Usar for para iterações com número conhecido de repetições.

### Roteiro Teórico (30 min)
- Sintaxe: `for (init; condição; incremento) { }`
- for vs while: quando usar cada um
- Contadores: i++, i--, i += 2
- Acumuladores: soma += valor

### Atividade Prática (60 min)
**Contexto:** Relatório de vendas de uma loja (7 dias da semana).

```javascript
// Vendas por dia (simular dados): calcular total, média, maior e menor dia
const vendas = [1200, 980, 1500, 890, 2100, 1800, 750];
// TODO: for para calcular estatísticas
```

### Gabarito
```javascript
const vendas = [1200, 980, 1500, 890, 2100, 1800, 750];
let total = 0, maior = vendas[0], menor = vendas[0];
const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

for (let i = 0; i < vendas.length; i++) {
  total += vendas[i];
  if (vendas[i] > maior) maior = vendas[i];
  if (vendas[i] < menor) menor = vendas[i];
  console.log(`${dias[i]}: R$ ${vendas[i].toFixed(2)}`);
}

console.log(`\nTotal: R$ ${total.toFixed(2)}`);
console.log(`Média: R$ ${(total / vendas.length).toFixed(2)}`);
console.log(`Melhor dia: R$ ${maior} | Pior dia: R$ ${menor}`);
```

---

## AULA 21 e 22 — do-while e Loops Aninhados

**Objetivo:** Usar do-while para garantir execução mínima e loops aninhados.

### Roteiro Teórico (30 min)
- `do { } while (condição)` — executa ao menos 1 vez
- Loop aninhado: for dentro de for
- Cuidado com performance: O(n²)

### Atividade Prática (60 min)
**Contexto:** Menu de caixa de supermercado (do-while para repetir até "sair").

```javascript
// Menu: 1-Adicionar item, 2-Ver total, 3-Finalizar compra, 0-Sair
// TODO: do-while com switch dentro
```

### Gabarito
```javascript
const readline = require('readline');
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
const itens = [];
let rodando = true;

function menu() {
  console.log('\n1-Adicionar | 2-Total | 3-Finalizar | 0-Sair');
  rl.question('Opção: ', (opcao) => {
    switch (opcao) {
      case '1':
        rl.question('Valor do item: ', (v) => { itens.push(parseFloat(v)); menu(); });
        return;
      case '2':
        const total = itens.reduce((s, v) => s + v, 0);
        console.log(`Total parcial: R$ ${total.toFixed(2)} (${itens.length} itens)`);
        break;
      case '3':
        const final = itens.reduce((s, v) => s + v, 0);
        console.log(`TOTAL FINAL: R$ ${final.toFixed(2)}`);
        rl.close(); return;
      case '0': rl.close(); return;
      default: console.log('Opção inválida!');
    }
    menu();
  });
}
menu();
```

---

## AULA 23 e 24 — Exercícios de Repetição (Maratona)

**Objetivo:** Resolver 5 problemas progressivos usando for/while em 90 min.

### Exercícios
1. Tabuada de um número (for)
2. Fatorial de N (while)
3. Fibonacci até N termos (for)
4. Soma dos números pares de 1 a 100 (for com if)
5. Verificar se número é primo (for com break)

---

## AULA 25 e 26 — Arrays: Criação e Manipulação

**Objetivo:** Criar, acessar e modificar arrays. Usar métodos push, pop, splice.

### Roteiro Teórico (30 min)
- Declaração: `[]`, `new Array()`
- Acesso por índice: `arr[0]`
- Propriedade `.length`
- Métodos: push, pop, shift, unshift, splice, includes

### Atividade Prática (60 min)
**Contexto:** Lista de tarefas (To-Do List) simples no terminal.

```javascript
// Implementar: adicionar, remover por índice, listar, buscar tarefa
const tarefas = [];
// TODO: criar funções para cada operação
```

### Gabarito
```javascript
const tarefas = [];

function adicionar(tarefa) { tarefas.push(tarefa); }
function remover(indice) { tarefas.splice(indice, 1); }
function listar() { tarefas.forEach((t, i) => console.log(`${i}: ${t}`)); }
function buscar(texto) { return tarefas.filter(t => t.includes(texto)); }

adicionar('Estudar JavaScript');
adicionar('Fazer exercício');
adicionar('Ler documentação');
listar();
remover(1);
console.log('\nApós remover índice 1:');
listar();
console.log('\nBusca "Estud":', buscar('Estud'));
```

---

## AULA 27 e 28 — Métodos de Array: map, filter, reduce

**Objetivo:** Usar métodos funcionais para transformar, filtrar e agregar dados.

### Roteiro Teórico (30 min)
- `map()` — transforma cada elemento, retorna novo array
- `filter()` — filtra por condição, retorna novo array
- `reduce()` — acumula em um valor único
- `find()`, `findIndex()`, `some()`, `every()`

### Atividade Prática (60 min)
**Contexto:** Dashboard de vendas (processar array de objetos).

```javascript
const vendas = [
  { produto: 'Notebook', valor: 3500, categoria: 'Eletrônico' },
  { produto: 'Cadeira', valor: 800, categoria: 'Móvel' },
  { produto: 'Monitor', valor: 1200, categoria: 'Eletrônico' },
  { produto: 'Mesa', valor: 600, categoria: 'Móvel' },
  { produto: 'Teclado', valor: 150, categoria: 'Eletrônico' },
];
// TODO:
// 1. filter: apenas eletrônicos
// 2. map: extrair apenas nomes dos produtos
// 3. reduce: total das vendas
// 4. find: produto com valor > 3000
```

### Gabarito
```javascript
const eletronicos = vendas.filter(v => v.categoria === 'Eletrônico');
const nomes = vendas.map(v => v.produto);
const total = vendas.reduce((acc, v) => acc + v.valor, 0);
const caro = vendas.find(v => v.valor > 3000);

console.log('Eletrônicos:', eletronicos);
console.log('Nomes:', nomes);
console.log('Total: R$', total);
console.log('Mais caro:', caro.produto);
```

---

## AULA 29 e 30 — Funções: Declaração e Parâmetros

**Objetivo:** Criar funções reutilizáveis com parâmetros, retorno e escopo.

### Roteiro Teórico (30 min)
- Declaração: function, arrow function, expressão
- Parâmetros e argumentos, valores default
- `return` — retornar valores
- Escopo: local vs global

### Atividade Prática (60 min)
**Contexto:** Biblioteca de funções utilitárias para um sistema de RH.

```javascript
// TODO: Criar 4 funções:
// 1. calcularSalarioLiquido(bruto) → desconta 11% INSS + IR progressivo
// 2. calcularHorasExtras(salarioHora, qtdHoras, fator) → retorna valor extra
// 3. formatarCPF(numeros) → "123.456.789-00"
// 4. validarEmail(email) → true/false
```

### Gabarito
```javascript
function calcularSalarioLiquido(bruto) {
  const inss = bruto * 0.11;
  const base = bruto - inss;
  let ir = 0;
  if (base > 4664.68) ir = base * 0.275 - 869.36;
  else if (base > 3751.06) ir = base * 0.225 - 636.13;
  else if (base > 2826.66) ir = base * 0.15 - 354.80;
  else if (base > 2112.01) ir = base * 0.075 - 158.40;
  return +(bruto - inss - Math.max(ir, 0)).toFixed(2);
}

const calcularHorasExtras = (salarioHora, qtdHoras, fator = 1.5) =>
  +(salarioHora * qtdHoras * fator).toFixed(2);

const formatarCPF = (num) =>
  num.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');

const validarEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

console.log(calcularSalarioLiquido(5000)); // ~4012.xx
console.log(calcularHorasExtras(30, 10)); // 450.00
console.log(formatarCPF('12345678900')); // 123.456.789-00
console.log(validarEmail('teste@email.com')); // true
```

---

## AULA 30 — AVALIAÇÃO A2

**Formato:** Prova prática (90 min) — 3 problemas:
1. Loop com acumulador (30 pts)
2. Manipulação de array com map/filter/reduce (35 pts)
3. Criar função com parâmetros e retorno (35 pts)

---

## AULA 31 e 32 — Strings: Manipulação Avançada

**Objetivo:** Usar métodos de string para processar texto (split, trim, replace, etc).

### Atividade Prática (60 min)
**Contexto:** Parser de dados CSV (recebe linha de texto, extrai campos).

```javascript
const linha = "  João Silva; 25; joao@email.com; Recife-PE  ";
// TODO: limpar espaços, separar por ";", extrair nome, idade, email, cidade
```

### Gabarito
```javascript
const campos = linha.trim().split(';').map(c => c.trim());
const [nome, idade, email, cidade] = campos;
console.log({ nome, idade: parseInt(idade), email, cidade });
```

---

## AULA 33 e 34 — Algoritmos de Ordenação e Busca

**Objetivo:** Implementar Bubble Sort e Busca Binária para entender complexidade.

### Roteiro Teórico (30 min)
- O que é complexidade: O(n), O(n²), O(log n)
- Bubble Sort passo a passo (visual)
- Busca linear vs Busca binária

### Atividade Prática (60 min)
```javascript
// TODO: Implementar bubbleSort(arr) e buscaBinaria(arr, alvo)
const numeros = [64, 34, 25, 12, 22, 11, 90];
```

### Gabarito
```javascript
function bubbleSort(arr) {
  const a = [...arr];
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      if (a[j] > a[j + 1]) [a[j], a[j + 1]] = [a[j + 1], a[j]];
    }
  }
  return a;
}

function buscaBinaria(arr, alvo) {
  let inicio = 0, fim = arr.length - 1;
  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);
    if (arr[meio] === alvo) return meio;
    if (arr[meio] < alvo) inicio = meio + 1;
    else fim = meio - 1;
  }
  return -1;
}

const ordenado = bubbleSort(numeros);
console.log('Ordenado:', ordenado);
console.log('Busca 25:', buscaBinaria(ordenado, 25)); // índice 2
```

---

## AULA 35 e 36 — Objetos e JSON

**Objetivo:** Criar objetos, acessar propriedades e manipular JSON.

### Atividade Prática (60 min)
**Contexto:** Sistema de cadastro de produtos (CRUD em memória com objetos).

```javascript
// TODO: criar array de objetos "produtos"
// Funções: cadastrar, buscarPorNome, atualizarPreco, remover, listarJSON
```

---

## AULA 37 — Revisão Geral + Dúvidas

**Objetivo:** Revisão dos conceitos-chave antes do projeto final.

---

## AULA 38, 39 e 40 — PROJETO FINAL

**Tema:** Sistema de Controle de Estoque para uma loja de bairro.

### Requisitos
1. Array de produtos (nome, quantidade, preço, categoria)
2. Menu interativo (do-while + switch): Cadastrar, Listar, Buscar, Atualizar, Relatório, Sair
3. Relatório com: total de itens, valor total do estoque, produto mais caro, categoria com mais itens
4. Funções separadas para cada operação
5. Validação de entrada (não aceitar quantidade negativa, preço zero, etc)

### Critérios
| Critério | Peso |
|---|---|
| Menu funcional com loop | 20% |
| CRUD completo (4 operações) | 30% |
| Relatório com cálculos | 25% |
| Validações e tratamento de erros | 15% |
| Código organizado com funções | 10% |

---

## 📊 Distribuição de Notas do Semestre

| Avaliação | Peso | Aula |
|---|---|---|
| A1 — Prova prática (variáveis + decisão) | 25% | Aula 15 |
| A2 — Prova prática (repetição + arrays + funções) | 35% | Aula 30 |
| Projeto Final — Sistema de estoque | 40% | Aula 38-40 |
