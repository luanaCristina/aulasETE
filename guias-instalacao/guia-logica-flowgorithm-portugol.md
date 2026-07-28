# 📘 Apostila: Lógica de Programação com Flowgorithm e Portugol Studio

> **Curso Técnico em Desenvolvimento de Sistemas**
> Duração estimada: 3h (teoria + prática evolutiva)

---

## 1. A Analogia Didática: O Mapa vs. A Receita de Bolo

### 🧠 O que é um Algoritmo?

Um **algoritmo** é simplesmente uma sequência de passos lógicos para resolver um problema. Você já segue algoritmos no dia a dia sem perceber:

- Receita de bolo → passos para fazer o bolo
- GPS → passos para chegar ao destino
- Rotina da manhã → acordar, escovar dentes, tomar café, sair de casa

**Na programação é igual:** damos instruções ordenadas para o computador seguir.

---

### 🗺️ A Grande Metáfora

| Ferramenta | Analogia | O que faz |
|------------|----------|-----------|
| **Flowgorithm** (Fluxograma) | O **mapa visual** da receita | Desenha o caminho do código com formas geométricas. Você VÊ a lógica. |
| **Portugol Studio** (Pseudocódigo) | A **receita escrita** em português | Escreve os passos em linguagem próxima ao português, como uma ponte para linguagens reais. |

---

### 🔄 O Ciclo de Aprendizagem

```
 Problema do    →    Fluxograma     →    Pseudocódigo    →    Linguagem Real
 Mundo Real         (Flowgorithm)       (Portugol Studio)     (JS, Python, C#)
 
 "Calcular         [Desenho visual     programa {            let nota1 = ...
  a média"          com blocos]           leia(nota1)        if (media >= 7)
                                        }
```

> 💡 **Primeiro você desenha, depois você escreve.** Assim como um arquiteto faz a planta antes de construir a casa!

---

## 2. Guia de Download e Instalação

### 🔷 Flowgorithm

**Site oficial:** [http://www.flowgorithm.org/download/](http://www.flowgorithm.org/download/)

#### Windows (passo a passo):

1. Acesse o site e clique em **Download**
2. Baixe o arquivo `.exe` (instalador) ou `.zip` (portátil)
3. Se baixou o `.exe`: execute e siga "Next → Next → Install → Finish"
4. Se baixou o `.zip`: extraia para uma pasta e execute `Flowgorithm.exe`
5. O programa abre com um fluxograma vazio (bloco Main → End)

#### Alterar idioma para Português:

1. Abra o Flowgorithm
2. Vá em **Tools** → **Options** (ou **Ferramentas** → **Opções**)
3. Na aba **Language**, selecione **Portuguese**
4. Clique **OK** — a interface muda para português

#### macOS / Linux:

- O Flowgorithm roda via **Wine** ou **Mono**
- Alternativa: use a versão online em [flowgorithm.org/online](http://www.flowgorithm.org) (se disponível) ou execute via máquina virtual Windows

---

### 🟣 Portugol Studio

**Site oficial:** [http://lite.acad.univali.br/portugol/](http://lite.acad.univali.br/portugol/)

#### Instalação:

1. Acesse o site do Portugol Studio
2. Clique em **Download** e escolha seu sistema (Windows, Linux ou Mac)
3. **Windows:** Execute o instalador `.exe` → Next → Install → Finish
4. **Mac/Linux:** Baixe o `.jar` e execute com Java (`java -jar PortugolStudio.jar`)
5. Ao abrir, você verá o editor com um programa exemplo

#### Requisito:

- Java 8 ou superior instalado (o instalador Windows geralmente inclui)

> 💡 **Dica:** O Portugol Studio já vem em português e com exemplos prontos no menu "Ajuda → Exemplos".

---

## 3. Conceitos Fundamentais

### 3.1 Entrada e Saída de Dados

#### Explicação simples:

- **Saída (Escreva/Output):** O computador fala com você (mostra algo na tela)
- **Entrada (Leia/Input):** Você fala com o computador (digita algo)

#### No Flowgorithm:

| Ação | Símbolo | Forma |
|------|---------|-------|
| Saída (Output) | Paralelogramo | Exibe texto na tela |
| Entrada (Input) | Paralelogramo | Lê dado do teclado e guarda em variável |

#### No Portugol Studio:

```portugol
programa {
    funcao inicio() {
        // SAÍDA: Computador mostra mensagem na tela
        escreva("Olá, mundo!\n")

        // ENTRADA: Computador espera você digitar
        cadeia nome
        escreva("Qual seu nome? ")
        leia(nome)

        // SAÍDA com variável
        escreva("Bem-vindo, ", nome, "!\n")
    }
}
```

---

### 3.2 Variáveis e Tipos de Dados

#### Explicação simples:

Uma **variável** é uma caixinha com etiqueta onde guardamos informações. Cada caixinha só aceita um tipo de conteúdo.

| Tipo | O que guarda | Exemplo | Analogia |
|------|-------------|---------|----------|
| **inteiro** | Números sem vírgula | `10`, `-3`, `0` | Caixa de sapatos (só número inteiro) |
| **real** | Números com vírgula | `7.5`, `3.14` | Caixa com balança (aceita decimais) |
| **cadeia** (texto) | Palavras e frases | `"João"`, `"Rua A"` | Caixa de cartas (texto) |
| **logico** | Verdadeiro ou Falso | `verdadeiro`, `falso` | Interruptor (ligado/desligado) |

#### No Flowgorithm:

- Bloco **Declare** → Define o nome e tipo da variável
- Exemplo: `Integer nota1` / `Real media` / `String nome`

#### No Portugol Studio:

```portugol
programa {
    funcao inicio() {
        // Declarando variáveis de cada tipo
        inteiro idade = 17
        real altura = 1.72
        cadeia nome = "Maria"
        logico aprovado = verdadeiro

        escreva("Nome: ", nome, "\n")
        escreva("Idade: ", idade, "\n")
        escreva("Altura: ", altura, "\n")
        escreva("Aprovado: ", aprovado, "\n")
    }
}
```

---

### 3.3 Operações Matemáticas e Atribuição

#### Explicação simples:

O computador é uma super calculadora. Usamos operadores para fazer contas e o sinal `=` para guardar o resultado numa variável.

| Operador | Significado | Exemplo |
|----------|-------------|---------|
| `+` | Soma | `5 + 3` → `8` |
| `-` | Subtração | `10 - 4` → `6` |
| `*` | Multiplicação | `3 * 7` → `21` |
| `/` | Divisão | `20 / 4` → `5.0` |
| `%` | Resto da divisão | `10 % 3` → `1` |

#### No Flowgorithm:

- Bloco **Assign** (Atribuição) → `media = (nota1 + nota2) / 2`

#### No Portugol Studio:

```portugol
programa {
    funcao inicio() {
        real nota1, nota2, media

        escreva("Digite a primeira nota: ")
        leia(nota1)

        escreva("Digite a segunda nota: ")
        leia(nota2)

        // Atribuição: resultado da conta é guardado em "media"
        media = (nota1 + nota2) / 2.0

        escreva("Sua média é: ", media, "\n")
    }
}
```

---

### 3.4 Estruturas Condicionais (Tomada de Decisão)

#### Explicação simples:

O computador toma decisões como nós: **"SE** chover, levo guarda-chuva. **SENÃO**, vou sem."

É o famoso **Se...Senão (If/Else)**.

#### No Flowgorithm:

- Bloco **If** → Losango (diamante) com duas saídas:
  - **Sim (True)** → caminho se a condição for verdadeira
  - **Não (False)** → caminho se for falsa

#### No Portugol Studio:

```portugol
programa {
    funcao inicio() {
        inteiro idade

        escreva("Qual sua idade? ")
        leia(idade)

        // Decisão: SE a idade for >= 18
        se (idade >= 18) {
            escreva("Você é maior de idade. Pode entrar!\n")
        }
        // SENÃO (caso contrário)
        senao {
            escreva("Você é menor de idade. Entrada negada.\n")
        }
    }
}
```

#### Operadores de Comparação:

| Operador | Significado |
|----------|-------------|
| `==` | Igual a |
| `!=` | Diferente de |
| `>` | Maior que |
| `<` | Menor que |
| `>=` | Maior ou igual |
| `<=` | Menor ou igual |

---

### 3.5 Estruturas de Repetição (Laços)

#### Explicação simples:

Às vezes precisamos repetir uma ação várias vezes. Em vez de copiar o código 10 vezes, usamos um **laço (loop)**.

- **Enquanto (While):** Repete ENQUANTO uma condição for verdadeira. Não sabemos quantas vezes.
- **Para (For):** Repete um número DEFINIDO de vezes. Sabemos exatamente quantas.

#### No Flowgorithm:

- **While** → Losango com seta de retorno (loop)
- **For** → Bloco hexagonal com contador

#### No Portugol Studio — Enquanto:

```portugol
programa {
    funcao inicio() {
        inteiro senha, tentativa

        senha = 1234
        tentativa = 0

        // Repete ENQUANTO a tentativa estiver errada
        enquanto (tentativa != senha) {
            escreva("Digite a senha: ")
            leia(tentativa)

            se (tentativa != senha) {
                escreva("Senha incorreta! Tente novamente.\n")
            }
        }

        escreva("Senha correta! Acesso liberado.\n")
    }
}
```

#### No Portugol Studio — Para:

```portugol
programa {
    funcao inicio() {
        inteiro i

        // Repete exatamente 5 vezes (i vai de 1 até 5)
        para (i = 1; i <= 5; i++) {
            escreva("Repetição número: ", i, "\n")
        }
    }
}
```

---

## 4. Exercícios Práticos Evolutivos (Mão na Massa)

---

### 📝 Exercício 1 — Calculadora de Média Escolar (Básico)

#### Enunciado:

> Crie um programa que leia duas notas de um aluno, calcule a média aritmética e informe se ele foi **Aprovado** (média ≥ 7) ou **Reprovado** (média < 7).

#### Solução Visual no Flowgorithm (descrição dos blocos):

```
[INÍCIO]
    ↓
[DECLARE: real nota1, nota2, media]
    ↓
[OUTPUT: "Digite a primeira nota:"]
    ↓
[INPUT: nota1]
    ↓
[OUTPUT: "Digite a segunda nota:"]
    ↓
[INPUT: nota2]
    ↓
[ASSIGN: media = (nota1 + nota2) / 2]
    ↓
[OUTPUT: "Sua média é: " & media]
    ↓
◇ [IF: media >= 7] ◇
 ↙ Sim          Não ↘
[OUTPUT:         [OUTPUT:
"Aprovado!"]     "Reprovado."]
 ↘               ↙
    ↓
[FIM]
```

#### Código no Portugol Studio:

```portugol
programa {
    funcao inicio() {
        // Declaração das variáveis
        real nota1, nota2, media

        // Entrada: lê as duas notas do aluno
        escreva("=== CALCULADORA DE MÉDIA ===\n")
        escreva("Digite a primeira nota: ")
        leia(nota1)

        escreva("Digite a segunda nota: ")
        leia(nota2)

        // Processamento: calcula a média aritmética
        media = (nota1 + nota2) / 2.0

        // Saída: mostra a média
        escreva("\nSua média é: ", media, "\n")

        // Decisão: verifica se aprovado ou reprovado
        se (media >= 7.0) {
            escreva("Resultado: APROVADO! Parabéns! 🎉\n")
        }
        senao {
            escreva("Resultado: REPROVADO. Estude mais!\n")
        }
    }
}
```

---

### 📝 Exercício 2 — Sistema de Desconto de Compra (Intermediário)

#### Enunciado:

> Uma loja oferece desconto conforme o valor da compra:
> - Compras acima de R$ 200: desconto de **15%**
> - Compras entre R$ 100 e R$ 200: desconto de **10%**
> - Compras abaixo de R$ 100: **sem desconto**
>
> Crie um programa que leia o valor da compra e mostre o valor do desconto e o valor final a pagar.

#### Solução Visual no Flowgorithm (descrição dos blocos):

```
[INÍCIO]
    ↓
[DECLARE: real valorCompra, desconto, valorFinal]
    ↓
[OUTPUT: "Digite o valor da compra: R$"]
    ↓
[INPUT: valorCompra]
    ↓
◇ [IF: valorCompra > 200] ◇
 ↙ Sim                    Não ↘
[ASSIGN:                  ◇ [IF: valorCompra >= 100] ◇
 desconto =                ↙ Sim              Não ↘
 valorCompra * 0.15]     [ASSIGN:            [ASSIGN:
    ↓                     desconto =           desconto = 0]
    ↓                     valorCompra * 0.10]      ↓
    ↓                         ↓                    ↓
    └─────────────────────────┴────────────────────┘
                              ↓
[ASSIGN: valorFinal = valorCompra - desconto]
    ↓
[OUTPUT: "Desconto: R$" & desconto]
    ↓
[OUTPUT: "Valor Final: R$" & valorFinal]
    ↓
[FIM]
```

#### Código no Portugol Studio:

```portugol
programa {
    funcao inicio() {
        // Declaração das variáveis
        real valorCompra, desconto, valorFinal

        // Entrada: lê o valor da compra
        escreva("=== SISTEMA DE DESCONTO ===\n")
        escreva("Digite o valor da compra: R$ ")
        leia(valorCompra)

        // Decisão encadeada (se... senao se... senao)
        se (valorCompra > 200.0) {
            // Compra acima de R$200 → 15% de desconto
            desconto = valorCompra * 0.15
            escreva("\nFaixa: Acima de R$200 → Desconto de 15%\n")
        }
        senao se (valorCompra >= 100.0) {
            // Compra entre R$100 e R$200 → 10% de desconto
            desconto = valorCompra * 0.10
            escreva("\nFaixa: Entre R$100 e R$200 → Desconto de 10%\n")
        }
        senao {
            // Compra abaixo de R$100 → sem desconto
            desconto = 0.0
            escreva("\nFaixa: Abaixo de R$100 → Sem desconto\n")
        }

        // Cálculo do valor final
        valorFinal = valorCompra - desconto

        // Saída: mostra resultados
        escreva("------------------------------\n")
        escreva("Valor da compra:  R$ ", valorCompra, "\n")
        escreva("Desconto aplicado: R$ ", desconto, "\n")
        escreva("Valor a pagar:    R$ ", valorFinal, "\n")
        escreva("------------------------------\n")
    }
}
```

---

### 📝 Exercício 3 — Tabuada de um Número (Desafio de Repetição)

#### Enunciado:

> Crie um programa que peça ao usuário um número e exiba a tabuada completa (de 1 a 10) desse número.
>
> Exemplo: Se o usuário digitar `5`, o programa mostra:
> `5 x 1 = 5`, `5 x 2 = 10`, ..., `5 x 10 = 50`

#### Solução Visual no Flowgorithm (descrição dos blocos):

```
[INÍCIO]
    ↓
[DECLARE: inteiro numero, i, resultado]
    ↓
[OUTPUT: "Digite um número para ver a tabuada:"]
    ↓
[INPUT: numero]
    ↓
[OUTPUT: "=== TABUADA DO " & numero & " ==="]
    ↓
┌──────────────────────────────────────┐
│ [FOR: i = 1 até 10, incremento 1]   │
│       ↓                              │
│ [ASSIGN: resultado = numero * i]     │
│       ↓                              │
│ [OUTPUT: numero & " x " & i &        │
│          " = " & resultado]          │
│       ↓                              │
│ (volta para o FOR até i > 10)        │
└──────────────────────────────────────┘
    ↓
[OUTPUT: "Tabuada completa!"]
    ↓
[FIM]
```

#### Código no Portugol Studio:

```portugol
programa {
    funcao inicio() {
        // Declaração das variáveis
        inteiro numero, i, resultado

        // Entrada: lê o número escolhido pelo usuário
        escreva("=== GERADOR DE TABUADA ===\n")
        escreva("Digite um número: ")
        leia(numero)

        escreva("\n--- Tabuada do ", numero, " ---\n\n")

        // Repetição: usa o laço PARA de 1 até 10
        para (i = 1; i <= 10; i++) {
            // Calcula o resultado da multiplicação
            resultado = numero * i

            // Mostra a linha da tabuada
            escreva(numero, " x ", i, " = ", resultado, "\n")
        }

        escreva("\n--- Tabuada completa! ---\n")
    }
}
```

---

## 5. Tabela Comparativa Rápida (Cola de Consulta)

| Conceito | Flowgorithm (Bloco) | Portugol Studio (Código) |
|----------|---------------------|--------------------------|
| Início/Fim | Oval (Main/End) | `programa { funcao inicio() { } }` |
| Mostrar texto | Paralelogramo (Output) | `escreva("texto")` |
| Ler entrada | Paralelogramo (Input) | `leia(variavel)` |
| Criar variável | Retângulo (Declare) | `inteiro x` / `real y` / `cadeia z` |
| Atribuir valor | Retângulo (Assign) | `x = 10` ou `media = (a + b) / 2` |
| Condição (Se) | Losango (If) | `se (condição) { } senao { }` |
| Repetição (Para) | Hexágono (For) | `para (i=1; i<=10; i++) { }` |
| Repetição (Enquanto) | Losango com loop (While) | `enquanto (condição) { }` |

---

## 6. Dicas Finais para os Alunos

### ✅ Boas práticas desde o início:

1. **Sempre planeje antes de digitar** — Desenhe o fluxograma no papel ou no Flowgorithm primeiro
2. **Nomes de variáveis claros** — Use `media`, `nota1`, `idade` em vez de `x`, `a`, `b`
3. **Teste com valores diferentes** — Se fez a média, teste com notas que dão 7, abaixo e acima
4. **Leia os erros** — O Portugol Studio mostra a linha do erro. Vá até ela e leia a mensagem
5. **Não tenha medo de errar** — Programar é 80% corrigir erros. Faz parte!

### 🧩 Desafios extras para casa:

- Modifique o Exercício 1 para usar **3 notas** em vez de 2
- No Exercício 2, adicione uma faixa de desconto de **20%** para compras acima de R$ 500
- No Exercício 3, permita que o usuário escolha até qual número a tabuada vai (ex: de 1 até 15)

---

## 7. Mapa Visual do Pensamento Computacional

```
┌──────────────────────────────────────────────────────────┐
│              RESOLVER UM PROBLEMA                          │
└──────────────────────────┬───────────────────────────────┘
                           ↓
              ┌────────────────────────┐
              │  1. ENTENDER o problema │ ← "O que preciso fazer?"
              └────────────┬───────────┘
                           ↓
              ┌────────────────────────┐
              │  2. DIVIDIR em passos   │ ← "Quais etapas?"
              └────────────┬───────────┘
                           ↓
              ┌────────────────────────┐
              │  3. DESENHAR o fluxo    │ ← Flowgorithm (visual)
              └────────────┬───────────┘
                           ↓
              ┌────────────────────────┐
              │  4. ESCREVER o código   │ ← Portugol Studio (texto)
              └────────────┬───────────┘
                           ↓
              ┌────────────────────────┐
              │  5. TESTAR e CORRIGIR   │ ← Executar e validar
              └────────────────────────┘
```

---

> **Lembre-se:** Todo programador expert um dia escreveu seu primeiro `escreva("Olá, mundo!")`. O importante é começar! 🚀
