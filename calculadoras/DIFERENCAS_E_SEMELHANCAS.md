# 🔄 Análise Comparativa — 4 Calculadoras, 1 Lógica

---

## 🤝 Semelhanças: A Lógica Universal

O **algoritmo** é IDÊNTICO nas 4 versões:

```
1. Receber número A
2. Receber operador (+, -, *, /)
3. Receber número B
4. SE operador = '/' E B = 0 → exibir ERRO
5. SENÃO → calcular resultado
6. Exibir resultado
```

Isso é **pensamento computacional**. Não importa a linguagem.

---

## 📊 Diferenças: Sintaxe, Tipagem e Ambientes

| Aspecto | JavaScript | TypeScript | Python | React Native |
|---------|-----------|-----------|--------|--------------|
| **Tipagem** | Dinâmica (fraca) | Estática (forte) | Dinâmica (forte) | Dinâmica (fraca) |
| **Execução** | Navegador | Compilado → Navegador | Servidor | Celular |
| **Variáveis** | `let x = 5` | `let x: number = 5` | `x = 5` | `const [x, setX] = useState(5)` |
| **Função** | `function soma(a, b)` | `function soma(a: number, b: number): number` | `def soma(a, b):` | `const soma = (a, b) => a + b` |
| **Interface** | HTML/DOM | HTML/DOM | HTML via Flask | Componentes nativos |
| **Estilo** | CSS externo | CSS externo | CSS externo | StyleSheet JS |

---

## 🧪 Mesma Função em 4 Tecnologias

### Soma com tratamento de divisão por zero:

**JavaScript:**
```javascript
function calcular(a, operador, b) {
  if (operador === '/' && b === 0) {
    return { erro: 'Divisão por zero!' };
  }
  const ops = { '+': a+b, '-': a-b, '*': a*b, '/': a/b };
  return { resultado: ops[operador] };
}
```

**TypeScript:**
```typescript
type Op = '+' | '-' | '*' | '/';

function calcular(a: number, operador: Op, b: number): { resultado?: number; erro?: string } {
  if (operador === '/' && b === 0) {
    return { erro: 'Divisão por zero!' };
  }
  const ops: Record<Op, number> = { '+': a+b, '-': a-b, '*': a*b, '/': a/b };
  return { resultado: ops[operador] };
}
```

**Python:**
```python
def calcular(a: float, operador: str, b: float) -> dict:
    if operador == '/' and b == 0:
        return {"erro": "Divisão por zero!"}
    ops = {'+': a+b, '-': a-b, '*': a*b, '/': a/b}
    return {"resultado": ops[operador]}
```

**React Native (mesma lógica JS, exibição diferente):**
```jsx
const calcular = (a, op, b) => {
  if (op === '/' && b === 0) return 'Erro: ÷ por 0';
  const ops = { '+': a+b, '-': a-b, '*': a*b, '/': a/b };
  return String(parseFloat(ops[op].toFixed(8)));
};
// Resultado exibido com: <Text>{resultado}</Text>
```

### O que é IGUAL nas 4:
1. ✅ if/else para tratar divisão por zero
2. ✅ Objeto/dicionário para mapear operações
3. ✅ Retorno com resultado ou erro
4. ✅ A LÓGICA (pensamento) é idêntica

### O que MUDA:
- JS: sem tipos, `===` para comparar
- TS: tipos explícitos (`number`, `string`), mais seguro
- Python: indentação obrigatória, `==` para comparar, `:` no if
- React Native: resultado vai para um `<Text>` em vez de DOM

---

## 💡 Conclusão para o Aluno

> **Aprender a programar não é decorar sintaxe.**  
> É aprender a **pensar logicamente** e **resolver problemas**.  
> A sintaxe você pesquisa em 5 segundos. O raciocínio, não.
>
> Se você consegue fazer uma calculadora em JavaScript,  
> consegue fazer em Python, Java, C#, Go, Rust...  
> Basta adaptar a "casca". O cérebro já sabe o caminho. 🧠
