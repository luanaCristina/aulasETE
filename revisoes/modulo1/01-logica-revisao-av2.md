# 📖 Revisão Pré-Avaliação 2 — Lógica de Programação

> **Foco:** Loops (for/while), Arrays, Funções  
> **A Av2 é um PROJETO prático — domine esses 3 pilares!**

---

## 🧠 Resumo Rápido

### Loops
```javascript
// FOR — quando sabe quantas vezes
for (let i = 0; i < 10; i++) { }

// WHILE — quando não sabe quantas vezes
while (condicao) { /* cuidado com loop infinito! */ }

// DO-WHILE — executa ao menos 1 vez (ideal para menus)
do { /* menu */ } while (opcao !== '0');
```

### Arrays — Métodos Essenciais
```javascript
arr.push(item)           // adiciona no final
arr.pop()                // remove do final
arr.splice(indice, 1)    // remove por posição
arr.includes(valor)      // verifica se existe → boolean
arr.length               // tamanho

// TRIO DE OURO (vai cair na prova!):
arr.map(fn)              // transforma cada item → novo array
arr.filter(fn)           // filtra por condição → novo array
arr.reduce((acc,item) => acc + item, 0)  // acumula em 1 valor
```

### Funções
```javascript
// Declaração clássica
function soma(a, b) { return a + b; }

// Arrow function
const soma = (a, b) => a + b;

// Parâmetro default
function saudar(nome = "Visitante") { return `Olá, ${nome}`; }
```

---

## ⚠️ Pegadinhas e Erros Comuns

| # | Erro | Solução |
|---|------|---------|
| 1 | Loop infinito (while sem incremento) | SEMPRE alterar a condição dentro do loop |
| 2 | `splice` vs `slice` | splice MODIFICA o array, slice apenas copia |
| 3 | Esquecer `return` na função | Sem return, função retorna undefined |
| 4 | `map` quando deveria usar `forEach` | map retorna novo array; forEach não |
| 5 | Modificar array DENTRO do filter/map | filter/map NÃO modificam o original |
| 6 | Off-by-one: `for (i=0; i<=arr.length)` | Deve ser `i < arr.length` (sem =) |

---

## ✏️ 5 Exercícios de Fixação

### Ex 1 (Fácil)
Crie array com 5 frutas. Use for para exibir cada uma com índice: "1. Maçã"

### Ex 2 (Fácil)
Dado `[10, 25, 8, 42, 15]`, use reduce para somar todos. Depois calcule a média.

### Ex 3 (Médio)
Dado array de objetos `[{nome:"Ana", nota:8.5}, ...]`, filtre apenas aprovados (>=7) e exiba seus nomes com map.

### Ex 4 (Médio)
Crie função `contarPalavras(frase)` que retorna quantas palavras tem na string.

### Ex 5 (Difícil)
Crie menu com do-while: 1-Adicionar nome à lista, 2-Listar todos, 3-Buscar, 0-Sair.

---

## ✅ Gabarito

```javascript
// Ex 1
const frutas = ['Maçã', 'Banana', 'Uva', 'Manga', 'Laranja'];
for (let i = 0; i < frutas.length; i++) {
  console.log(`${i + 1}. ${frutas[i]}`);
}

// Ex 2
const nums = [10, 25, 8, 42, 15];
const soma = nums.reduce((acc, n) => acc + n, 0); // 100
const media = soma / nums.length; // 20

// Ex 3
const alunos = [{nome:"Ana",nota:8.5},{nome:"Bob",nota:5.0},{nome:"Lia",nota:9.2}];
const aprovados = alunos.filter(a => a.nota >= 7).map(a => a.nome);
// ["Ana", "Lia"]

// Ex 4
function contarPalavras(frase) {
  return frase.trim().split(/\s+/).length;
}
console.log(contarPalavras("Olá mundo cruel")); // 3

// Ex 5
const lista = [];
let op;
do {
  op = prompt('1-Add 2-Listar 3-Buscar 0-Sair');
  switch(op) {
    case '1': lista.push(prompt('Nome:')); break;
    case '2': lista.forEach((n,i) => console.log(`${i+1}. ${n}`)); break;
    case '3':
      const busca = prompt('Buscar:');
      const r = lista.filter(n => n.includes(busca));
      console.log(r.length ? r : 'Não encontrado');
      break;
  }
} while (op !== '0');
```
