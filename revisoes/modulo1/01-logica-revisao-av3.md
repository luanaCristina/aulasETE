# 📖 Revisão Pré-Avaliação 3 — Lógica (Prova Final)

> **Foco:** TUDO! Variáveis → Funções → Algoritmos → Objetos  
> **Estratégia:** Revisão de 1h focada nos pontos mais cobrados.

---

## 🧠 Resumo Consolidado

### Checklist "Sei Fazer?"
- [ ] Declarar variáveis e usar template literals
- [ ] If/else com múltiplas condições e operadores lógicos
- [ ] Switch com break e default
- [ ] For/while/do-while sem loop infinito
- [ ] Array: push, splice, filter, map, reduce, find
- [ ] Função com parâmetros, return e valor default
- [ ] String: split, join, includes, replace, trim, toLowerCase
- [ ] Objeto: criar, acessar propriedades, desestruturar
- [ ] Algoritmo: Bubble Sort, busca, palíndromo

### Fórmulas Frequentes
```javascript
// Média
const media = arr.reduce((s,n) => s+n, 0) / arr.length;

// Maior/Menor
const max = Math.max(...arr);
const min = Math.min(...arr);

// Remover duplicatas
const unicos = [...new Set(arr)];

// Inverter string
const invertida = [...str].reverse().join('');

// Verificar palíndromo
const ePalindromo = str === [...str].reverse().join('');
```

---

## ⚠️ Pegadinhas da Prova Final

| # | Pegadinha | Lembre-se |
|---|-----------|-----------|
| 1 | `NaN === NaN` é FALSE | Use `isNaN(x)` para verificar |
| 2 | `typeof null` retorna "object" | Bug histórico do JS |
| 3 | Array vazio `[]` é truthy | Use `.length === 0` para verificar |
| 4 | `.sort()` ordena como STRING | Use `.sort((a,b) => a - b)` para números |
| 5 | Desestruturar com rename | `const { nome: name } = obj` |

---

## ✏️ 5 Exercícios de Fixação

### Ex 1: FizzBuzz (clássico de entrevista)
De 1 a 30: se divisível por 3 → "Fizz", por 5 → "Buzz", ambos → "FizzBuzz", senão o número.

### Ex 2: Frequência de letras
Contar quantas vezes cada letra aparece em "abracadabra". Retornar objeto.

### Ex 3: Agrupar por categoria
Dado array de produtos com `categoria`, agrupar em objeto: `{ eletronico: [...], movel: [...] }`.

### Ex 4: Segundo maior
Encontrar o segundo maior número em `[5, 2, 8, 1, 9, 3]` SEM usar .sort().

### Ex 5: Flatten
Transformar `[[1,2], [3,4], [5,6]]` em `[1,2,3,4,5,6]`.

---

## ✅ Gabarito

```javascript
// Ex 1
for (let i = 1; i <= 30; i++) {
  if (i % 15 === 0) console.log("FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// Ex 2
function frequencia(str) {
  return [...str].reduce((obj, c) => {
    obj[c] = (obj[c] || 0) + 1;
    return obj;
  }, {});
}
// { a: 5, b: 2, r: 2, c: 1, d: 1 }

// Ex 3
const produtos = [{nome:"TV",cat:"eletro"},{nome:"Mesa",cat:"movel"},{nome:"PC",cat:"eletro"}];
const agrupado = produtos.reduce((obj, p) => {
  (obj[p.cat] = obj[p.cat] || []).push(p);
  return obj;
}, {});

// Ex 4
function segundoMaior(arr) {
  let maior = -Infinity, segundo = -Infinity;
  for (const n of arr) {
    if (n > maior) { segundo = maior; maior = n; }
    else if (n > segundo && n !== maior) segundo = n;
  }
  return segundo;
} // 8

// Ex 5
const flat = [[1,2],[3,4],[5,6]].reduce((acc, sub) => [...acc, ...sub], []);
// ou: arr.flat()
```
