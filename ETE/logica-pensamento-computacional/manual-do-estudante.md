# 📘 Manual de Apoio ao Estudante — Lógica e Pensamento Computacional

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco — Profª Luana Cristina**
**Módulo 1 | Portugol Studio**

---

## Sumário

1. [Resumo Teórico Essencial](#1-resumo-teórico-essencial)
2. [Exemplos de Código Comentados Linha a Linha](#2-exemplos-de-código-comentados-linha-a-linha)
3. [Glossário Técnico](#3-glossário-técnico)
4. [Links e Recursos Gratuitos Recomendados](#4-links-e-recursos-gratuitos-recomendados)

---

## 1. Resumo Teórico Essencial

### 1.1 Os 4 Pilares do Pensamento Computacional

O Pensamento Computacional é uma forma de resolver problemas que qualquer pessoa pode usar — não apenas programadores. Ele se baseia em 4 pilares:

**🧩 Decomposição — "Dividir para conquistar"**
- Analogia: Montar um móvel do IKEA. Você não tenta montar tudo de uma vez — segue passo a passo, peça por peça.
- Na prática: Quebrar um problema grande em partes menores e mais fáceis de resolver.

**🔍 Reconhecimento de Padrões — "Já vi isso antes"**
- Analogia: Quando você percebe que toda segunda-feira o trânsito está pior, você identifica um padrão e pode se planejar.
- Na prática: Identificar semelhanças entre problemas para reaproveitar soluções.

**🎯 Abstração — "Focar no que importa"**
- Analogia: Um mapa do metrô não mostra cada curva do túnel — mostra apenas as estações e conexões. Ele abstrai detalhes desnecessários.
- Na prática: Ignorar detalhes irrelevantes e focar nas informações essenciais.

**📋 Algoritmo — "Receita passo a passo"**
- Analogia: Uma receita de bolo é um algoritmo — instruções ordenadas que, se seguidas corretamente, produzem o resultado esperado.
- Na prática: Criar uma sequência clara e ordenada de passos para resolver o problema.

### 1.2 Variáveis

**Analogia: Caixa com etiqueta**

Uma variável é como uma caixa de papelão. A etiqueta é o nome da variável, e o conteúdo é o valor armazenado. Você pode trocar o conteúdo a qualquer momento, mas a etiqueta permanece a mesma.

```
┌─────────────┐
│  idade = 17 │  ← A caixa "idade" guarda o valor 17
└─────────────┘
```

**Regras para nomes de variáveis:**
- Devem começar com letra
- Não podem ter espaços (use `_` ou camelCase)
- Não podem ser palavras reservadas (se, enquanto, para...)

### 1.3 Tipos de Dados

**Analogia: Gavetas de tamanhos diferentes**

Cada tipo de dado é como uma gaveta específica — a gaveta de meias não serve para guardar camisas.

| Tipo | O que guarda | Exemplo |
|------|-------------|---------|
| `inteiro` | Números sem vírgula | 17, -5, 0, 1000 |
| `real` | Números com vírgula | 9.5, 3.14, -2.7 |
| `caractere` | Um único caractere | 'A', '7', '@' |
| `cadeia` | Texto (sequência de caracteres) | "Maria", "Olá mundo" |
| `logico` | Verdadeiro ou Falso | verdadeiro, falso |


### 1.4 Operadores

**Analogia: Calculadora com funções extras**

Operadores são os "botões" que fazem coisas com os valores.

**Operadores Aritméticos (fazem contas):**
| Operador | Função | Exemplo |
|----------|--------|---------|
| `+` | Soma | 5 + 3 = 8 |
| `-` | Subtração | 10 - 4 = 6 |
| `*` | Multiplicação | 3 * 7 = 21 |
| `/` | Divisão | 20 / 4 = 5 |
| `%` | Resto da divisão | 10 % 3 = 1 |

**Operadores Relacionais (comparam valores):**
| Operador | Significado | Exemplo |
|----------|-------------|---------|
| `==` | Igual a | 5 == 5 → verdadeiro |
| `!=` | Diferente de | 5 != 3 → verdadeiro |
| `>` | Maior que | 7 > 4 → verdadeiro |
| `<` | Menor que | 2 < 1 → falso |
| `>=` | Maior ou igual | 5 >= 5 → verdadeiro |
| `<=` | Menor ou igual | 3 <= 2 → falso |

**Operadores Lógicos (combinam condições):**
| Operador | Significado | Exemplo |
|----------|-------------|---------|
| `e` | AND — ambas devem ser verdadeiras | (idade >= 18) e (temCNH == verdadeiro) |
| `ou` | OR — pelo menos uma verdadeira | (dia == "sábado") ou (dia == "domingo") |
| `nao` | NOT — inverte o valor lógico | nao (chovendo) |

### 1.5 Estruturas Condicionais

**Analogia: Semáforo / Bifurcação na estrada**

Quando você chega num semáforo, seu comportamento depende da cor: verde → segue, amarelo → atenção, vermelho → para. Um condicional funciona assim — o programa toma decisões diferentes baseado em uma condição.

```
         [condição?]
        /           \
   verdadeiro    falso
      |             |
  [ação A]      [ação B]
```

### 1.6 Estruturas de Repetição (Loops)

**Analogia: Esteira de fábrica**

Imagine uma fábrica de biscoitos. A esteira repete o mesmo processo milhares de vezes: pegar massa, cortar, assar, embalar. Cada passagem é uma **iteração**. A esteira para quando acabar a massa (condição de parada).

**Tipos de loop:**
- `enquanto`: Repete ENQUANTO uma condição for verdadeira (não sabe quantas vezes vai repetir)
- `para`: Repete um número DEFINIDO de vezes (sabe exatamente quantas repetições)

### 1.7 Vetores (Arrays)

**Analogia: Armário numerado de academia**

Um vetor é como um armário de academia com compartimentos numerados (0, 1, 2, 3...). Cada compartimento guarda um valor do mesmo tipo. Para acessar o conteúdo, você precisa saber o número do compartimento (índice).

```
Vetor notas:
┌──────┬──────┬──────┬──────┬──────┐
│  8.5 │  7.0 │  9.2 │  6.8 │  8.0 │
└──────┴──────┴──────┴──────┴──────┘
  [0]    [1]    [2]    [3]    [4]
```

### 1.8 Funções

**Analogia: Receita de bolo**

Uma função é como uma receita: tem um nome ("Bolo de Chocolate"), recebe ingredientes (parâmetros), segue um passo a passo (corpo) e produz um resultado (retorno). Você pode usar a mesma receita quantas vezes quiser sem reescrever os passos.

**Vantagens:**
- Evita repetição de código
- Organiza o programa em blocos lógicos
- Facilita a correção de erros (conserta em um lugar só)

---

## 2. Exemplos de Código Comentados Linha a Linha

### 2.1 Programa Básico com Entrada e Saída

```portugol
// Programa que lê o nome e a idade do usuário e exibe uma mensagem
programa
{
    // A função 'inicio' é o ponto de partida do programa (como o main em C)
    funcao inicio()
    {
        // Declarando variáveis: uma cadeia (texto) e um inteiro (número)
        cadeia nome
        inteiro idade

        // Exibindo mensagem na tela pedindo o nome do usuário
        escreva("Digite seu nome: ")

        // Lendo o que o usuário digitou e guardando na variável 'nome'
        leia(nome)

        // Pedindo a idade
        escreva("Digite sua idade: ")

        // Lendo a idade (como é inteiro, o usuário deve digitar um número)
        leia(idade)

        // Exibindo o resultado com concatenação (juntar textos e variáveis)
        escreva("\nOlá, " + nome + "! Você tem " + idade + " anos.\n")
    }
}
```


### 2.2 Condicionais (se / senao se / senao)

```portugol
// Programa que classifica a nota do aluno em conceitos
programa
{
    funcao inicio()
    {
        // Declarando variável do tipo real (aceita números com vírgula)
        real nota

        // Pedindo a nota ao usuário
        escreva("Digite a nota (0 a 10): ")
        leia(nota)

        // Estrutura condicional: testa várias condições em sequência
        // O programa entra no PRIMEIRO bloco cuja condição for verdadeira
        se (nota >= 9.0)
        {
            // Se a nota for 9 ou mais → Excelente
            escreva("Conceito: EXCELENTE\n")
        }
        senao se (nota >= 7.0)
        {
            // Se não é >= 9, mas é >= 7 → Bom
            escreva("Conceito: BOM\n")
        }
        senao se (nota >= 5.0)
        {
            // Se não é >= 7, mas é >= 5 → Regular (recuperação)
            escreva("Conceito: REGULAR - Recuperação\n")
        }
        senao
        {
            // Se nenhuma condição anterior foi verdadeira → Insuficiente
            escreva("Conceito: INSUFICIENTE - Reprovado\n")
        }
    }
}
```

### 2.3 Loop ENQUANTO (com contador e acumulador)

```portugol
// Programa que lê notas até o usuário digitar -1 e calcula a média
programa
{
    funcao inicio()
    {
        // Acumulador: vai somando todas as notas
        real soma = 0.0

        // Contador: conta quantas notas foram digitadas
        inteiro contador = 0

        // Variável para armazenar a nota atual
        real nota

        // Pedindo a primeira nota antes do loop
        escreva("Digite uma nota (ou -1 para encerrar): ")
        leia(nota)

        // Loop ENQUANTO: repete enquanto o usuário NÃO digitar -1
        // O valor -1 funciona como "sentinela" (sinal de parada)
        enquanto (nota != -1.0)
        {
            // Acumulando: soma a nota atual ao total
            soma = soma + nota

            // Incrementando o contador (mais uma nota lida)
            contador = contador + 1

            // Pedindo a próxima nota (dentro do loop!)
            escreva("Digite uma nota (ou -1 para encerrar): ")
            leia(nota)
        }

        // Após o loop: verificar se pelo menos uma nota foi digitada
        se (contador > 0)
        {
            // Calculando a média: soma dividida pela quantidade
            escreva("Foram digitadas " + contador + " notas.\n")
            escreva("Média: " + (soma / contador) + "\n")
        }
        senao
        {
            escreva("Nenhuma nota foi digitada.\n")
        }
    }
}
```

### 2.4 Loop PARA (Tabuada)

```portugol
// Programa que exibe a tabuada de um número escolhido pelo usuário
programa
{
    funcao inicio()
    {
        // Variável para guardar o número cuja tabuada será exibida
        inteiro numero

        escreva("Digite um número para ver a tabuada: ")
        leia(numero)

        // Exibindo cabeçalho
        escreva("\n=== Tabuada do " + numero + " ===\n")

        // Loop PARA: variável 'i' começa em 1, vai até 10, incrementa de 1 em 1
        // Ideal quando sabemos exatamente quantas vezes repetir
        para (inteiro i = 1; i <= 10; i++)
        {
            // A cada iteração, 'i' assume o próximo valor (1, 2, 3... 10)
            // Exibe: numero x i = resultado
            escreva(numero + " x " + i + " = " + (numero * i) + "\n")
        }
    }
}
```


### 2.5 Vetor (Ler 5 notas e calcular média)

```portugol
// Programa que armazena 5 notas em um vetor e calcula a média
programa
{
    funcao inicio()
    {
        // Declarando um vetor de 5 posições do tipo real
        // As posições vão de [0] a [4] (sempre começa no zero!)
        real notas[5]

        // Variável para acumular a soma das notas
        real soma = 0.0

        // Loop PARA: lê as 5 notas e guarda no vetor
        para (inteiro i = 0; i < 5; i++)
        {
            // Pedindo cada nota (i+1 para exibir "Nota 1" em vez de "Nota 0")
            escreva("Digite a nota " + (i + 1) + ": ")

            // Guardando na posição 'i' do vetor
            leia(notas[i])

            // Somando a nota ao acumulador
            soma = soma + notas[i]
        }

        // Calculando a média
        real media = soma / 5.0

        // Exibindo todas as notas armazenadas
        escreva("\n=== Notas digitadas ===\n")
        para (inteiro i = 0; i < 5; i++)
        {
            escreva("Nota " + (i + 1) + ": " + notas[i] + "\n")
        }

        // Exibindo a média final
        escreva("\nMédia da turma: " + media + "\n")

        // Verificando aprovação
        se (media >= 7.0)
        {
            escreva("Situação: APROVADO ✓\n")
        }
        senao
        {
            escreva("Situação: EM RECUPERAÇÃO\n")
        }
    }
}
```

### 2.6 Função com Parâmetros e Retorno

```portugol
// Programa que usa funções para calcular área e perímetro de um retângulo
programa
{
    // Função que calcula a área de um retângulo
    // Recebe: base (real) e altura (real) como PARÂMETROS
    // Retorna: um valor real (a área calculada)
    funcao real calcularArea(real base, real altura)
    {
        // Calculando a área (base × altura)
        real area = base * altura

        // Retornando o resultado para quem chamou a função
        retorne area
    }

    // Função que calcula o perímetro de um retângulo
    // Parâmetros: base e altura | Retorno: real
    funcao real calcularPerimetro(real base, real altura)
    {
        // Perímetro = 2 × (base + altura)
        retorne 2.0 * (base + altura)
    }

    // Função que verifica se é um quadrado (base == altura)
    // Retorna: logico (verdadeiro ou falso)
    funcao logico ehQuadrado(real base, real altura)
    {
        retorne base == altura
    }

    // Função principal: ponto de entrada do programa
    funcao inicio()
    {
        real b, h

        escreva("Digite a base: ")
        leia(b)

        escreva("Digite a altura: ")
        leia(h)

        // Chamando as funções e armazenando os resultados
        real area = calcularArea(b, h)
        real perimetro = calcularPerimetro(b, h)

        // Exibindo resultados
        escreva("\n=== Resultados ===\n")
        escreva("Área: " + area + "\n")
        escreva("Perímetro: " + perimetro + "\n")

        // Usando a função lógica
        se (ehQuadrado(b, h))
        {
            escreva("A figura é um QUADRADO!\n")
        }
        senao
        {
            escreva("A figura é um RETÂNGULO.\n")
        }
    }
}
```

---

## 3. Glossário Técnico

| Termo | Explicação em Português |
|-------|------------------------|
| **Algoritmo** | Sequência finita e ordenada de passos para resolver um problema |
| **Variável** | Espaço na memória com nome e valor que pode ser alterado |
| **Constante** | Igual à variável, mas o valor NÃO pode ser alterado após definido |
| **Tipo de Dado** | Define que tipo de valor a variável pode armazenar (inteiro, real, texto) |
| **Operador** | Símbolo que realiza operações (+ - * / == > < e ou nao) |
| **Expressão** | Combinação de valores, variáveis e operadores que resulta em um valor |
| **Condicional** | Estrutura que executa código diferente baseado em uma condição (se/senao) |
| **Loop / Laço** | Estrutura que repete um bloco de código várias vezes |
| **Iteração** | Uma única repetição dentro de um loop |
| **Contador** | Variável que conta quantas vezes algo aconteceu (geralmente incrementa de 1 em 1) |
| **Acumulador** | Variável que vai somando valores a cada iteração |
| **Sentinela** | Valor especial usado para sinalizar o fim de uma entrada de dados (ex: -1) |
| **Vetor / Array** | Estrutura que armazena múltiplos valores do mesmo tipo em posições numeradas |
| **Índice** | Número que indica a posição de um elemento no vetor (começa em 0) |
| **Função** | Bloco de código nomeado, reutilizável, que pode receber dados e retornar resultado |
| **Parâmetro** | Variável declarada na definição da função para receber valores externos |
| **Retorno** | Valor que a função devolve ao código que a chamou |
| **Escopo** | Região do código onde uma variável existe e pode ser acessada |
| **Pseudocódigo** | Descrição de algoritmo em linguagem próxima do português (como Portugol) |
| **Fluxograma** | Representação gráfica de um algoritmo usando formas geométricas |
| **Compilar** | Traduzir o código-fonte inteiro para linguagem de máquina antes de executar |
| **Executar (Rodar)** | Colocar o programa para funcionar |
| **Debug (Depurar)** | Processo de encontrar e corrigir erros no código |
| **Sintaxe** | Regras de escrita da linguagem (como a gramática do português) |
| **Lógica Booleana** | Sistema lógico com apenas dois valores: verdadeiro (V) e falso (F) |


---

## 4. Links e Recursos Gratuitos Recomendados

### 📚 Ferramentas de Programação em Português
- **Portugol Studio (Web):** [https://portugol-webstudio.cubos.io/](https://portugol-webstudio.cubos.io/) — Escreva e execute Portugol direto no navegador
- **Portugol Studio (Desktop):** [http://lite.acad.univali.br/portugol/](http://lite.acad.univali.br/portugol/) — Versão instalável com mais recursos
- **Flowgorithm:** [http://www.flowgorithm.org/](http://www.flowgorithm.org/) — Crie fluxogramas que viram código automaticamente
- **VisuAlg:** [https://visualg3.com.br/](https://visualg3.com.br/) — Ambiente clássico de pseudocódigo em português

### 🎓 Cursos Gratuitos
- **Curso em Vídeo — Lógica de Programação (Gustavo Guanabara):** [https://www.cursoemvideo.com/curso/curso-de-algoritmo/](https://www.cursoemvideo.com/curso/curso-de-algoritmo/) — O melhor curso de lógica em português
- **Khan Academy — Algoritmos:** [https://pt.khanacademy.org/computing/computer-science/algorithms](https://pt.khanacademy.org/computing/computer-science/algorithms) — Conceitos com visualizações interativas
- **Code.org:** [https://code.org/](https://code.org/) — Aprenda lógica com blocos visuais (ótimo para começar)

### 🏋️ Prática e Desafios
- **Scratch (MIT):** [https://scratch.mit.edu/](https://scratch.mit.edu/) — Programação visual com blocos (conceitos sem sintaxe)
- **URI Online Judge (Beecrowd):** [https://www.beecrowd.com.br/](https://www.beecrowd.com.br/) — Desafios de lógica para praticar
- **Blockly Games:** [https://blockly.games/](https://blockly.games/) — Jogos para aprender lógica progressivamente

### 🛠️ Ferramentas Auxiliares
- **Miro:** [https://miro.com/](https://miro.com/) — Quadro digital para desenhar fluxogramas
- **Draw.io:** [https://app.diagrams.net/](https://app.diagrams.net/) — Ferramenta gratuita para diagramas e fluxogramas
- **Notion:** [https://www.notion.so/](https://www.notion.so/) — Organize suas anotações e estudos

---

> 💡 **Dica da Profª Luana:** "Lógica de programação é como aprender a pensar de forma organizada. Não tenha pressa! Resolva muitos exercícios simples antes de partir para os difíceis. Cada erro é um aprendizado."

---

*Manual atualizado em 2025 | ETE Pernambuco — Curso Técnico em Desenvolvimento de Sistemas*
