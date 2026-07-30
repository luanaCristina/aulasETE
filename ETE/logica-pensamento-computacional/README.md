<p align="center">
  <img src="https://img.shields.io/badge/Portugol_Studio-00897B?style=for-the-badge&logo=codeforces&logoColor=white" alt="Portugol"/>
  <img src="https://img.shields.io/badge/Flowgorithm-FF6F00?style=for-the-badge&logo=diagramsdotnet&logoColor=white" alt="Flowgorithm"/>
  <img src="https://img.shields.io/badge/Pensamento_Computacional-7B1FA2?style=for-the-badge&logo=thealgorithms&logoColor=white" alt="PC"/>
  <img src="https://img.shields.io/badge/Carga_Horária-120h-green?style=for-the-badge" alt="120h"/>
  <img src="https://img.shields.io/badge/Módulo-1-blue?style=for-the-badge" alt="Módulo 1"/>
</p>

<h1 align="center">🧠 Lógica e Pensamento Computacional</h1>

<p align="center">
  <strong>Curso Técnico Subsequente em Desenvolvimento de Sistemas</strong><br/>
  ETE Pernambuco — 2026.2<br/>
  Profª Luana Cristina
</p>

---

## 📑 Índice

1. [Informações da Disciplina](#-informações-da-disciplina)
2. [Instalação do Ambiente](#-instalação-do-ambiente)
3. [Cronograma Semana a Semana](#-cronograma-semana-a-semana)
4. [Material Teórico e Prático](#-material-teórico-e-prático)
5. [Exercícios Práticos](#-exercícios-práticos)
6. [Projetos Orientados](#-projetos-orientados)
7. [Simulado Preparatório](#-simulado-preparatório)
8. [Prova Regimental](#-prova-regimental)

---

## 📋 Informações da Disciplina

| Item | Detalhe |
|------|---------|
| **Disciplina** | Lógica e Pensamento Computacional |
| **Módulo** | 1 |
| **Carga Horária** | 120 horas (6 aulas/semana) |
| **Duração** | 20 semanas |
| **Ferramenta principal** | Portugol Studio (Web) |
| **Ferramenta complementar** | Flowgorithm (Fluxogramas) |

### Ementa

Pilares do Pensamento Computacional (Decomposição, Reconhecimento de Padrões, Abstração, Algoritmos) • Algoritmos • Fluxogramas • Pseudocódigo • Variáveis e Tipos de Dados • Operadores (Aritméticos, Relacionais, Lógicos) • Estruturas Condicionais (Se/Senão) • Estruturas de Repetição (Enquanto/Para) • Vetores e Matrizes

### Competências a Desenvolver

- ✅ Aplicar os 4 pilares do Pensamento Computacional na resolução de problemas
- ✅ Representar soluções em fluxogramas e pseudocódigo
- ✅ Declarar variáveis, utilizar operadores e expressões
- ✅ Implementar estruturas condicionais simples e compostas
- ✅ Implementar estruturas de repetição com contadores e acumuladores
- ✅ Manipular vetores e matrizes para armazenar coleções de dados
- ✅ Desenvolver o raciocínio lógico-algorítmico para qualquer linguagem

> 💡 **Por que Portugol?** Esta disciplina ensina LÓGICA, não uma linguagem específica. O Portugol permite escrever algoritmos em português, eliminando a barreira do inglês e focando 100% no raciocínio. Tudo que aprender aqui se aplica a Python, Java, C#, JavaScript...

---

## 🛠️ Instalação do Ambiente

### 🌐 Portugol Studio (Web — Sem instalação!)

> 💡 **A forma mais fácil:** O Portugol Studio Web roda direto no navegador. Nenhuma instalação necessária!

1. Acesse: **https://univali-lite.github.io/Portugol-Studio/**
2. Clique em **"Novo arquivo"** ou escolha um dos exemplos
3. Escreva seu código no editor
4. Clique no botão **▶ Executar**
5. Veja o resultado no painel **Console** abaixo

```
┌─────────────────────────────────────────────────────────┐
│  Portugol Studio Web                              [▶]   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  programa {                                             │
│      funcao inicio() {                                  │
│          escreva("Olá, mundo!")                         │
│      }                                                  │
│  }                                                      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Console:                                               │
│  > Olá, mundo!                                          │
└─────────────────────────────────────────────────────────┘
```

> ⚠️ **Atenção:** Salve sempre seu código localmente (Ctrl+S ou copie para um arquivo `.txt`), pois a versão web pode perder dados ao fechar o navegador.

---

### 🖥️ Portugol Studio Desktop (Opcional — Para quem prefere offline)

#### 🪟 Windows

1. Acesse: **http://lite.acad.univali.br/portugol/**
2. Clique em **"Download para Windows"**
3. Execute o instalador `.exe`
4. Siga as instruções (Próximo → Próximo → Instalar)
5. Abra pelo Menu Iniciar: **Portugol Studio**

> ⚠️ **Requisito:** Java 8 ou superior instalado. Se aparecer erro de Java, instale em: https://java.com/download

#### 🍎 macOS

1. Acesse: **http://lite.acad.univali.br/portugol/**
2. Baixe a versão para **macOS** (`.dmg`)
3. Arraste para a pasta **Aplicativos**
4. Na primeira abertura: **Ctrl + Clique** → Abrir (por ser app não certificado)

#### 🐧 Linux

```bash
# Baixar e extrair
wget http://lite.acad.univali.br/portugol/Portugol-Studio-linux.tar.gz
tar -xzf Portugol-Studio-linux.tar.gz
cd Portugol-Studio
./iniciar.sh
```

---

### 📊 Flowgorithm (Ferramenta de Fluxogramas)

> Usaremos nas primeiras semanas para visualizar algoritmos em forma de fluxograma antes de codificar.

#### 🪟 Windows
1. Acesse: **http://www.flowgorithm.org/download/**
2. Baixe o instalador para Windows
3. Instale normalmente

#### 🍎 macOS / 🐧 Linux
O Flowgorithm é exclusivo para Windows. Alternativas:
- **draw.io** (web): https://app.diagrams.net — para desenhar fluxogramas manualmente
- **Rodar via Wine** (avançado)

---

### ✅ Teste Rápido — Seu primeiro programa

Abra o Portugol Studio (web ou desktop) e execute:

```
programa {
    funcao inicio() {
        cadeia nome
        escreva("Qual é o seu nome? ")
        leia(nome)
        escreva("Bem-vindo(a) ao curso, ", nome, "! 🎉\n")
    }
}
```

Se aparecer a pergunta no console e, após digitar seu nome, exibir a mensagem de boas-vindas — tudo funcionando! ✅

---

## 🗓️ Cronograma Semana a Semana

> 📌 **Formato:** 6 aulas por semana (ex: Seg 2 aulas + Qua 2 aulas + Sex 2 aulas)

### BLOCO 1 — PENSAMENTO COMPUTACIONAL E ALGORITMOS (Semanas 1–4)

#### 📅 Semana 1: Os 4 Pilares do Pensamento Computacional

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que é Pensamento Computacional? | Entender a abordagem de resolução de problemas |
| 2 | Pilar 1: Decomposição | Quebrar problemas grandes em menores |
| 3 | Pilar 2: Reconhecimento de Padrões | Identificar semelhanças e repetições |
| 4 | Pilar 3: Abstração | Focar no essencial, ignorar detalhes irrelevantes |
| 5 | Pilar 4: Algoritmos | Criar sequências ordenadas de passos |
| 6 | **Atividade prática:** Resolver problemas do cotidiano com os 4 pilares | Aplicar PC sem computador |

#### 📅 Semana 2: Algoritmos e Fluxogramas

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que é um Algoritmo? Exemplos do dia a dia | Compreender sequência lógica de passos |
| 2 | Representações: descrição narrativa, fluxograma, pseudocódigo | Conhecer as 3 formas de representar |
| 3 | Símbolos do Fluxograma (Início/Fim, Processo, Decisão, E/S) | Dominar a simbologia padrão |
| 4 | **Lab Flowgorithm:** Criar fluxogramas básicos | Usar ferramenta visual |
| 5 | Fluxograma: Calcular média de 2 notas | Praticar sequência e entrada/saída |
| 6 | Fluxograma: Verificar se é maior de idade | Praticar decisão (sim/não) |

#### 📅 Semana 3: Pseudocódigo e Portugol Studio

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Introdução ao Portugol Studio (interface e execução) | Configurar ambiente de trabalho |
| 2 | Estrutura básica: `programa`, `funcao inicio()`, `escreva` | Entender esqueleto de um programa |
| 3 | Comando `leia()` — Entrada de dados | Receber dados do usuário |
| 4 | Comando `escreva()` — Saída de dados | Exibir resultados formatados |
| 5 | **Prática:** "Olá, mundo!" e variações | Primeiro programa funcional |
| 6 | **Prática:** Calculadora de soma simples | Entrada → processamento → saída |

#### 📅 Semana 4: Variáveis e Tipos de Dados

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que é uma variável? Analogia da "caixa com etiqueta" | Compreender armazenamento de dados |
| 2 | Tipos: `inteiro`, `real`, `cadeia`, `caractere`, `logico` | Escolher tipo correto para cada situação |
| 3 | Declaração e atribuição de variáveis | Criar e modificar variáveis |
| 4 | Regras de nomeação e boas práticas | Evitar erros comuns |
| 5 | **Prática:** Cadastro de pessoa (nome, idade, altura) | Usar diferentes tipos em um programa |
| 6 | **Prática:** Trocar valores entre variáveis (com e sem auxiliar) | Exercício clássico de lógica |

---

### BLOCO 2 — OPERADORES E EXPRESSÕES (Semanas 5–6)

#### 📅 Semana 5: Operadores Aritméticos e Expressões

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Operadores: `+`, `-`, `*`, `/`, `%` (módulo) | Realizar cálculos matemáticos |
| 2 | Precedência de operadores (ordem das operações) | Evitar erros de cálculo |
| 3 | Funções matemáticas (raiz, potência, absoluto) | Usar funções built-in |
| 4 | **Prática:** Calculadora completa (4 operações) | Combinar entrada + operadores |
| 5 | **Prática:** Converter temperatura (°C ↔ °F) | Aplicar fórmulas |
| 6 | **Prática:** Calcular IMC e média ponderada | Resolver problemas reais |

#### 📅 Semana 6: Operadores Relacionais e Lógicos

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Relacionais: `==`, `!=`, `>`, `<`, `>=`, `<=` | Comparar valores |
| 2 | Lógicos: `e`, `ou`, `nao` (AND, OR, NOT) | Combinar condições |
| 3 | Tabela-verdade (E, OU, NÃO) | Prever resultado de expressões compostas |
| 4 | **Prática:** Verificar par/ímpar, positivo/negativo | Usar módulo + relacional |
| 5 | **Prática:** Verificar se número está em um intervalo | Combinar AND/OR |
| 6 | Exercícios integrados de expressões | Consolidar operadores |

---

### BLOCO 3 — ESTRUTURAS CONDICIONAIS (Semanas 7–9)

#### 📅 Semana 7: Se/Senão (If/Else) — Básico

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Estrutura `se (condição) { }` — condicional simples | Executar código apenas se condição for verdadeira |
| 2 | Estrutura `se { } senao { }` — condicional composta | Dois caminhos possíveis |
| 3 | Fluxograma de decisão → código Portugol | Conectar visual com código |
| 4 | **Prática:** Verificar aprovação (nota >= 7) | Decisão simples |
| 5 | **Prática:** Classificar idade (criança/adolescente/adulto/idoso) | Múltiplas condições |
| 6 | **Prática:** Calcular desconto baseado no valor da compra | Problema real de mercado |

#### 📅 Semana 8: Condicionais Aninhadas e Escolha/Caso

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Se/Senão aninhado (múltiplos `senao se`) | Tratar 3+ possibilidades |
| 2 | Estrutura `escolha/caso` (switch/case) | Simplificar múltiplas opções fixas |
| 3 | Quando usar se/senão vs escolha/caso | Escolher a melhor estrutura |
| 4 | **Prática:** Menu de restaurante com escolha/caso | Interface textual interativa |
| 5 | **Prática:** Classificar triângulo (equilátero/isósceles/escaleno) | Lógica com múltiplas condições |
| 6 | **Prática:** Calculadora com menu de operações | Integrar escolha + operações |

#### 📅 Semana 9: Condicionais — Problemas Avançados

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Validação de dados com condicionais | Garantir entrada válida |
| 2 | Condicionais com operadores lógicos compostos | Combinar AND/OR em decisões |
| 3 | **Prática:** Verificar ano bissexto | Lógica com múltiplas regras |
| 4 | **Prática:** Calcular IRPF simplificado (faixas) | Problema real de mercado |
| 5 | **Prática:** Sistema de login simples (usuário + senha) | Validação de dados |
| 6 | 🎯 **Entrega: Projeto Intermediário** | Aplicar tudo de condicionais |

---

### BLOCO 4 — ESTRUTURAS DE REPETIÇÃO (Semanas 10–14)

#### 📅 Semana 10: Enquanto (While)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Conceito de repetição: por que repetir? | Entender loops e automação |
| 2 | Estrutura `enquanto (condição) { }` | Repetir enquanto condição for verdadeira |
| 3 | Contadores e acumuladores | Controlar repetições e somar valores |
| 4 | Fluxograma de repetição → código | Visualizar loops |
| 5 | **Prática:** Contagem regressiva (10, 9, 8... 0) | Loop com decremento |
| 6 | **Prática:** Somar números até o usuário digitar 0 | Loop com sentinela |

#### 📅 Semana 11: Para (For)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Estrutura `para (inicio; condição; incremento) { }` | Repetir com controle numérico |
| 2 | Diferença entre `enquanto` e `para` — quando usar cada | Escolher loop adequado |
| 3 | **Prática:** Tabuada de um número | Loop com multiplicação |
| 4 | **Prática:** Imprimir números pares de 1 a 100 | Filtro dentro de loop |
| 5 | **Prática:** Fatorial de um número | Acumulador multiplicativo |
| 6 | **Prática:** Sequência de Fibonacci | Lógica com variáveis auxiliares |

#### 📅 Semana 12: Repetição — Problemas Intermediários

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Loops aninhados (loop dentro de loop) | Processar combinações |
| 2 | **Prática:** Tabuada completa (1 a 10) com loops aninhados | Dois níveis de repetição |
| 3 | Faca/Enquanto (Do/While) — validação de entrada | Garantir pelo menos 1 execução |
| 4 | **Prática:** Menu que repete até sair (com validação) | Loop + condicional + menu |
| 5 | **Prática:** Adivinhar número secreto (com dicas maior/menor) | Lógica de jogo |
| 6 | **Prática:** Calcular média de N notas (N informado pelo usuário) | Contadores dinâmicos |

#### 📅 Semana 13: Repetição — Problemas Avançados

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Padrões com loops: pirâmides de asteriscos | Loops aninhados criativos |
| 2 | **Prática:** Verificar se número é primo | Algoritmo com break lógico |
| 3 | **Prática:** Listar primos até N | Combinar verificação + loop externo |
| 4 | **Prática:** Caixa registradora (compras até "finalizar") | Sistema interativo completo |
| 5 | **Prática:** Maior e menor de uma lista de N números | Algoritmo de busca sequencial |
| 6 | Revisão: Enquanto vs Para vs Faca/Enquanto | Consolidar repetições |

#### 📅 Semana 14: Funções (Procedimentos)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que são funções? Por que dividir o código? | Modularizar e reutilizar |
| 2 | Funções sem parâmetros e sem retorno (procedimentos) | Organizar código em blocos |
| 3 | Funções com parâmetros | Passar dados para a função |
| 4 | Funções com retorno | Receber resultado de volta |
| 5 | **Prática:** Função `ehPrimo()`, `fatorial()`, `media()` | Criar funções úteis |
| 6 | **Prática:** Calculadora modular com funções | Programa organizado |

---

### BLOCO 5 — VETORES E MATRIZES (Semanas 15–17)

#### 📅 Semana 15: Vetores (Arrays unidimensionais)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que é um vetor? Analogia do "armário com gavetas numeradas" | Entender coleções indexadas |
| 2 | Declaração e acesso: `inteiro numeros[10]` | Criar e usar vetores |
| 3 | Preenchimento com `para` (loop + vetor) | Popular vetor com dados |
| 4 | **Prática:** Ler 5 notas, calcular média e mostrar acima da média | Processamento de coleção |
| 5 | **Prática:** Buscar valor em vetor (busca linear) | Algoritmo de busca |
| 6 | **Prática:** Encontrar maior, menor e somar elementos | Padrões com vetores |

#### 📅 Semana 16: Vetores — Algoritmos Clássicos

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | Ordenação: Bubble Sort (conceito e animação) | Entender algoritmo de ordenação |
| 2 | **Prática:** Implementar Bubble Sort em Portugol | Ordenar vetor |
| 3 | Inversão de vetor | Manipular posições |
| 4 | **Prática:** Verificar se vetor é palíndromo | Comparar extremidades |
| 5 | **Prática:** Frequência de valores (contagem) | Análise estatística básica |
| 6 | 📝 **Simulado Preparatório** | Preparar para prova |

#### 📅 Semana 17: Matrizes (Arrays bidimensionais)

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1 | O que é uma matriz? Analogia da "planilha/tabela" | Entender dados em grade |
| 2 | Declaração: `inteiro tabela[3][4]` (3 linhas, 4 colunas) | Criar matrizes |
| 3 | Percorrer com loops aninhados (linha × coluna) | Acessar todos os elementos |
| 4 | **Prática:** Ler e exibir notas de alunos (aluno × disciplina) | Matriz como tabela de dados |
| 5 | **Prática:** Soma de elementos, diagonal principal | Operações matriciais |
| 6 | **Prática:** Jogo da velha simplificado (tabuleiro 3×3) | Aplicação lúdica |

---

### BLOCO 6 — AVALIAÇÃO E PROJETO FINAL (Semanas 18–20)

#### 📅 Semana 18: Avaliação + Início do Projeto Final

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1–2 | 📝 **PROVA REGIMENTAL** (2 aulas) | Avaliar domínio dos conteúdos |
| 3 | Correção coletiva + feedback | Identificar pontos de melhoria |
| 4 | Introdução ao Projeto Final | Apresentar escopo |
| 5–6 | Planejamento e início do desenvolvimento | Definir algoritmos |

#### 📅 Semana 19: Projeto Final — Desenvolvimento

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1–2 | Desenvolvimento guiado do projeto | Implementar com suporte |
| 3–4 | Testes e refinamento | Validar com diferentes entradas |
| 5–6 | Documentação (comentários + fluxograma) | Preparar entregáveis |

#### 📅 Semana 20: Apresentação e Encerramento

| Aula | Tópico | Objetivo |
|:----:|--------|----------|
| 1–3 | 🎤 **Apresentação dos Projetos Finais** | Comunicar soluções |
| 4 | Feedback final + autoavaliação | Refletir |
| 5 | Como essa lógica se aplica a Python (próxima disciplina) | Conectar com futuro |
| 6 | Encerramento | Celebrar conquistas |

---

## 📖 Material Teórico e Prático

### 1️⃣ Os 4 Pilares do Pensamento Computacional

#### O que é Pensamento Computacional?

É uma **forma de pensar** para resolver problemas — não é sobre computadores, é sobre LÓGICA. Funciona para programação, mas também para organizar uma mudança, planejar uma viagem ou montar um currículo.

#### Os 4 Pilares

```
┌─────────────────────────────────────────────────────────────────┐
│                 PENSAMENTO COMPUTACIONAL                         │
├────────────────┬───────────────┬──────────────┬─────────────────┤
│  DECOMPOSIÇÃO  │   PADRÕES     │  ABSTRAÇÃO   │   ALGORITMO     │
│                │               │              │                 │
│  Dividir em    │  Identificar  │  Focar no    │  Sequência de   │
│  partes menores│  repetições   │  essencial   │  passos lógicos │
│                │               │              │                 │
│  🧩 Quebrar   │  🔍 Observar  │  🎯 Filtrar  │  📝 Ordenar    │
└────────────────┴───────────────┴──────────────┴─────────────────┘
```

#### Exemplo: Fazer um bolo 🎂

| Pilar | Aplicação |
|-------|-----------|
| **Decomposição** | Separar em etapas: comprar ingredientes → medir → misturar → assar → decorar |
| **Padrões** | Perceber que toda receita segue: ingredientes secos primeiro, depois líquidos |
| **Abstração** | Ignorar detalhes irrelevantes (cor da tigela, marca do forno) |
| **Algoritmo** | Escrever o passo a passo NA ORDEM CERTA (não pode decorar antes de assar!) |

#### Exemplo Computacional: Encontrar o maior número em uma lista

| Pilar | Aplicação |
|-------|-----------|
| **Decomposição** | Dividir em: ler números → comparar cada um → guardar o maior → mostrar resultado |
| **Padrões** | A cada número, faço a MESMA coisa: comparo com o "maior até agora" |
| **Abstração** | Não importa se são notas, preços ou idades — a lógica é a mesma |
| **Algoritmo** | 1) Assumir que o primeiro é o maior → 2) Para cada próximo: se for maior, atualizar → 3) No final, exibir |

---

### 2️⃣ Algoritmos e Representações

#### O que é um Algoritmo?

> **Algoritmo** = sequência **finita** e **ordenada** de passos **não ambíguos** que resolve um problema.

**Características obrigatórias:**
- ✅ **Finito** — tem que terminar em algum momento
- ✅ **Definido** — cada passo deve ser claro e sem dupla interpretação
- ✅ **Ordenado** — a ordem dos passos importa
- ✅ **Efetivo** — cada passo deve ser executável

#### As 3 Representações

| Forma | Vantagem | Desvantagem | Quando usar |
|-------|----------|-------------|-------------|
| **Descrição narrativa** | Fácil de entender | Ambígua, longa | Explicar para leigos |
| **Fluxograma** | Visual, clara | Ocupa espaço | Projetar a solução |
| **Pseudocódigo** | Próximo do código real | Exige conhecimento | Implementar de fato |

#### Exemplo: Calcular média de 2 notas

**Descrição Narrativa:**
1. Perguntar a primeira nota
2. Perguntar a segunda nota
3. Somar as duas notas
4. Dividir o resultado por 2
5. Mostrar a média

**Fluxograma:**
```
    ┌─────────┐
    │ INÍCIO  │
    └────┬────┘
         │
    ┌────▼────┐
    │Ler nota1│
    └────┬────┘
         │
    ┌────▼────┐
    │Ler nota2│
    └────┬────┘
         │
    ┌────▼──────────────┐
    │media = (n1+n2) / 2│
    └────┬──────────────┘
         │
    ┌────▼──────────┐
    │Exibir media   │
    └────┬──────────┘
         │
    ┌────▼────┐
    │   FIM   │
    └─────────┘
```

**Pseudocódigo (Portugol):**
```
programa {
    funcao inicio() {
        real nota1, nota2, media

        escreva("Digite a primeira nota: ")
        leia(nota1)

        escreva("Digite a segunda nota: ")
        leia(nota2)

        media = (nota1 + nota2) / 2.0

        escreva("A média é: ", media, "\n")
    }
}
```

#### 🔍 Entendendo o Código passo a passo

| Linha | Código | O que faz | Por quê? |
|:-----:|--------|-----------|----------|
| 1 | `programa {` | Abre o programa | Todo código Portugol começa assim |
| 2 | `funcao inicio() {` | Ponto de partida da execução | É como a "porta de entrada" — o programa começa aqui |
| 3 | `real nota1, nota2, media` | Cria 3 "caixas" para guardar números decimais | `real` aceita decimais (7.5, 8.3). Se usasse `inteiro`, perderia a parte decimal |
| 5 | `escreva("Digite...")` | Mostra texto na tela | O usuário precisa saber o que digitar |
| 6 | `leia(nota1)` | ESPERA o usuário digitar e GUARDA na variável | Sem `leia`, o programa não sabe as notas |
| 10 | `media = (nota1 + nota2) / 2.0` | Calcula e guarda resultado | Parênteses garantem que soma acontece ANTES da divisão |
| 12 | `escreva("A média é: ", media, "\n")` | Mostra resultado | `\n` pula uma linha (estética) |

> 💡 **Por que `2.0` e não `2`?** Em Portugol, se ambos forem inteiros, a divisão é inteira (7/2 = 3). Usando `2.0`, força divisão real (7/2.0 = 3.5).

---

### 3️⃣ Variáveis e Tipos de Dados

#### O que é uma Variável?

> **Variável** = um espaço na memória com um NOME e um TIPO, que guarda um VALOR que pode mudar durante o programa.

**Analogia:** Imagine gavetas de um armário. Cada gaveta:
- Tem uma **etiqueta** (nome da variável)
- Aceita um **tipo específico** de objeto (tipo de dado)
- Contém **um objeto por vez** (valor atual)

```
MEMÓRIA DO COMPUTADOR
┌────────────────────────────────────────┐
│                                        │
│  ┌─────────┐  ┌─────────┐  ┌────────┐│
│  │  nome   │  │  idade  │  │ media  ││
│  │ "Maria" │  │   25    │  │  8.5   ││
│  │ cadeia  │  │ inteiro │  │  real  ││
│  └─────────┘  └─────────┘  └────────┘│
│   ↑ etiqueta   ↑ valor     ↑ tipo    │
└────────────────────────────────────────┘
```

#### Tipos de Dados em Portugol

| Tipo | O que guarda | Exemplos | Quando usar |
|------|-------------|----------|-------------|
| `inteiro` | Números sem decimais | 0, 42, -10, 2026 | Idade, quantidade, contador |
| `real` | Números com decimais | 3.14, 8.5, -0.001 | Notas, preços, medidas |
| `cadeia` | Texto (palavras/frases) | "Maria", "Recife" | Nome, endereço, mensagem |
| `caractere` | UMA única letra/símbolo | 'A', '7', '@' | Sexo ('M'/'F'), opção de menu |
| `logico` | Verdadeiro ou Falso | `verdadeiro`, `falso` | Sim/não, ligado/desligado |

#### Declaração e Atribuição

```
programa {
    funcao inicio() {
        // DECLARAÇÃO: criar as variáveis (reservar espaço)
        inteiro idade
        real altura
        cadeia nome
        logico aprovado

        // ATRIBUIÇÃO: colocar valores nas variáveis
        idade = 20
        altura = 1.75
        nome = "João Silva"
        aprovado = verdadeiro

        // Exibir
        escreva("Nome: ", nome, "\n")
        escreva("Idade: ", idade, " anos\n")
        escreva("Altura: ", altura, "m\n")
        escreva("Aprovado: ", aprovado, "\n")

        // REATRIBUIÇÃO: mudar o valor (o antigo é perdido!)
        idade = 21  // Agora idade vale 21, não mais 20
    }
}
```

#### 🔍 Entendendo o Código passo a passo

| Conceito | Código | Explicação |
|----------|--------|------------|
| Declarar | `inteiro idade` | "Quero uma gaveta chamada `idade` que aceita números inteiros" |
| Atribuir | `idade = 20` | "Coloque o valor 20 na gaveta `idade`" |
| Ler | `leia(idade)` | "Espere o usuário digitar algo e guarde na gaveta `idade`" |
| Reatribuir | `idade = idade + 1` | "Pegue o valor atual (20), some 1, e guarde de volta (21)" |

> ⚠️ **Erros comuns de iniciantes:**
> - Usar variável sem declarar → Erro: "variável não declarada"
> - Colocar texto em variável inteira → Erro: "tipos incompatíveis"
> - Esquecer de inicializar antes de usar → Valor lixo/imprevisível

---

### 4️⃣ Estruturas Condicionais

#### Se/Senão — Tomando Decisões

> A estrutura condicional permite que o programa **escolha caminhos diferentes** baseado em uma condição.

```
programa {
    funcao inicio() {
        real nota
        
        escreva("Digite sua nota: ")
        leia(nota)
        
        // CONDICIONAL SIMPLES: só executa se for verdade
        se (nota >= 7.0) {
            escreva("✅ Aprovado! Parabéns!\n")
        }
        
        // CONDICIONAL COMPOSTA: dois caminhos possíveis
        se (nota >= 7.0) {
            escreva("✅ Aprovado!\n")
        } senao {
            escreva("❌ Reprovado. Estude mais!\n")
        }
        
        // CONDICIONAIS ENCADEADAS: múltiplos caminhos
        se (nota >= 9.0) {
            escreva("🏆 Excelente!\n")
        } senao se (nota >= 7.0) {
            escreva("✅ Aprovado!\n")
        } senao se (nota >= 5.0) {
            escreva("⚠️ Recuperação\n")
        } senao {
            escreva("❌ Reprovado\n")
        }
    }
}
```

#### 🔍 Entendendo a Lógica

```
                    ┌──────────────┐
                    │ nota >= 9.0? │
                    └──────┬───────┘
                     SIM/  \NÃO
                    /       \
          ┌────────┐    ┌──────────────┐
          │Excelente│    │ nota >= 7.0? │
          └────────┘    └──────┬───────┘
                         SIM/  \NÃO
                        /       \
              ┌────────┐    ┌──────────────┐
              │Aprovado│    │ nota >= 5.0? │
              └────────┘    └──────┬───────┘
                             SIM/  \NÃO
                            /       \
                  ┌──────────┐  ┌──────────┐
                  │Recuperação│  │Reprovado │
                  └──────────┘  └──────────┘

⚠️ A ORDEM IMPORTA! Se testasse nota >= 5.0 primeiro,
   quem tem 9.5 cairia nessa condição (pois 9.5 >= 5.0 é verdade!)
   Sempre teste da MAIS RESTRITIVA para a MENOS RESTRITIVA.
```

> 💡 **Macete:** Em condicionais encadeadas, pense como uma "peneira" — o primeiro teste que der verdade "pega" o valor, e os demais são ignorados.

---

### 5️⃣ Estruturas de Repetição

#### Enquanto (While) — "Repita enquanto for verdade"

```
programa {
    funcao inicio() {
        inteiro contador
        contador = 1
        
        enquanto (contador <= 10) {
            escreva(contador, " ")
            contador = contador + 1  // CRUCIAL: sem isso, loop infinito!
        }
        // Resultado: 1 2 3 4 5 6 7 8 9 10
    }
}
```

#### 🔍 Anatomia do Loop `enquanto`

```
    contador = 1          ← INICIALIZAÇÃO (antes do loop)
         │
         ▼
┌─► contador <= 10?  ──── NÃO ──► (sai do loop)
│        │
│       SIM
│        │
│   ┌────▼────────────┐
│   │ escreva(contador)│  ← CORPO (o que se repete)
│   └────┬────────────┘
│        │
│   ┌────▼──────────────────┐
│   │ contador = contador + 1│  ← ATUALIZAÇÃO (muda a condição!)
│   └────┬──────────────────┘
│        │
└────────┘
```

> ⚠️ **O ERRO MAIS PERIGOSO:** Esquecer a atualização causa **LOOP INFINITO** — o programa trava e nunca para!
> Se isso acontecer no Portugol Studio Web, feche a aba e reabra.

#### Para (For) — "Repita N vezes"

```
programa {
    funcao inicio() {
        inteiro i
        
        // Tabuada do 7
        para (i = 1; i <= 10; i++) {
            escreva("7 x ", i, " = ", 7 * i, "\n")
        }
    }
}
```

#### 🔍 Anatomia do `para`

```
para (i = 1;   i <= 10;   i++)
      ─────    ────────    ───
        │         │         │
        │         │         └─ PASSO: o que acontece após cada repetição
        │         │              (i++ é atalho para i = i + 1)
        │         │
        │         └─ CONDIÇÃO: repete enquanto isso for verdadeiro
        │
        └─ INÍCIO: valor inicial da variável de controle
```

> 💡 **Quando usar `enquanto` vs `para`?**
> - **`para`:** quando SABE QUANTAS VEZES vai repetir (tabuada do 1 ao 10, percorrer vetor)
> - **`enquanto`:** quando NÃO SABE quantas vezes (repetir até acertar, ler até digitar 0)

#### Exemplo Completo: Acumulador

```
programa {
    funcao inicio() {
        inteiro n, i
        real nota, soma, media
        
        escreva("Quantas notas deseja informar? ")
        leia(n)
        
        soma = 0.0  // ACUMULADOR: começa em zero
        
        para (i = 1; i <= n; i++) {
            escreva("Nota ", i, ": ")
            leia(nota)
            soma = soma + nota  // A cada rodada, acumula mais
        }
        
        media = soma / n
        escreva("\nMédia final: ", media, "\n")
    }
}
```

> 💡 **Padrões essenciais:**
> - **Contador:** `cont = cont + 1` (conta ocorrências)
> - **Acumulador:** `soma = soma + valor` (soma valores)
> - **Sentinela:** loop até um valor especial (ex: 0 para sair)

---

### 6️⃣ Vetores e Matrizes

#### Vetores — "Um armário com gavetas numeradas"

```
programa {
    funcao inicio() {
        real notas[5]       // Cria vetor com 5 posições (0 a 4)
        inteiro i
        real soma, media
        
        // Preencher o vetor
        para (i = 0; i < 5; i++) {
            escreva("Nota ", i + 1, ": ")
            leia(notas[i])
        }
        
        // Calcular soma (acumulador)
        soma = 0.0
        para (i = 0; i < 5; i++) {
            soma = soma + notas[i]
        }
        
        media = soma / 5.0
        escreva("\nMédia: ", media, "\n")
        
        // Mostrar notas acima da média
        escreva("Notas acima da média:\n")
        para (i = 0; i < 5; i++) {
            se (notas[i] > media) {
                escreva("  Nota ", i + 1, ": ", notas[i], "\n")
            }
        }
    }
}
```

#### 🔍 Entendendo Vetores Visualmente

```
Declaração: real notas[5]

Cria na memória:
   índice →    [0]    [1]    [2]    [3]    [4]
             ┌──────┬──────┬──────┬──────┬──────┐
   notas =   │  8.5 │  7.0 │  9.2 │  6.5 │  8.0 │
             └──────┴──────┴──────┴──────┴──────┘

Acesso: notas[0] = 8.5    (primeiro elemento)
        notas[4] = 8.0    (último elemento)
        notas[5] = ❌ ERRO! (não existe posição 5)
```

> ⚠️ **ÍNDICE COMEÇA EM ZERO!** Vetor de tamanho 5 tem posições 0, 1, 2, 3, 4.
> Acessar `notas[5]` causa erro de "acesso fora dos limites".

> 💡 **Por que vetores são úteis?** Sem vetor, para guardar 30 notas de uma turma, precisaríamos de 30 variáveis (`nota1`, `nota2`... `nota30`). Com vetor: `real notas[30]` — e percorremos com `para`!

---

## 📝 Exercícios Práticos

### Módulo A — Condicionais (Semanas 7–9)

#### 🟢 Exercício A1 (Fácil)

**Enunciado:** Leia três notas de um aluno (prova, trabalho, participação) com pesos 5, 3 e 2 respectivamente. Calcule a média ponderada e informe se está Aprovado (>=7), em Recuperação (>=5 e <7) ou Reprovado (<5).

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        real prova, trabalho, participacao, media
        
        escreva("Nota da prova (peso 5): ")
        leia(prova)
        escreva("Nota do trabalho (peso 3): ")
        leia(trabalho)
        escreva("Nota de participação (peso 2): ")
        leia(participacao)
        
        // Média ponderada: soma(nota × peso) / soma(pesos)
        media = (prova * 5 + trabalho * 3 + participacao * 2) / 10.0
        
        escreva("\nMédia ponderada: ", media, "\n")
        
        se (media >= 7.0) {
            escreva("✅ APROVADO\n")
        } senao se (media >= 5.0) {
            escreva("⚠️ RECUPERAÇÃO\n")
        } senao {
            escreva("❌ REPROVADO\n")
        }
    }
}
```

**Por que `/10.0` e não `/10`?** Para garantir divisão real (com decimais).

</details>

---

#### 🟡 Exercício A2 (Médio)

**Enunciado:** Crie um programa que calcule o valor do **IPVA** de um carro baseado no valor do veículo e no ano:
- Carros até 3 anos: 4% do valor
- Carros de 4 a 7 anos: 3% do valor
- Carros de 8 a 14 anos: 2% do valor
- Carros com 15+ anos: ISENTO

Considere o ano atual como 2026.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        inteiro ano_fabricacao, idade_veiculo
        real valor_veiculo, ipva
        
        escreva("Ano de fabricação do veículo: ")
        leia(ano_fabricacao)
        escreva("Valor atual do veículo (R$): ")
        leia(valor_veiculo)
        
        idade_veiculo = 2026 - ano_fabricacao
        
        se (idade_veiculo <= 3) {
            ipva = valor_veiculo * 0.04
            escreva("Alíquota: 4%\n")
        } senao se (idade_veiculo <= 7) {
            ipva = valor_veiculo * 0.03
            escreva("Alíquota: 3%\n")
        } senao se (idade_veiculo <= 14) {
            ipva = valor_veiculo * 0.02
            escreva("Alíquota: 2%\n")
        } senao {
            ipva = 0.0
            escreva("🎉 Veículo ISENTO de IPVA!\n")
        }
        
        escreva("Idade do veículo: ", idade_veiculo, " anos\n")
        escreva("Valor do IPVA: R$ ", ipva, "\n")
    }
}
```

</details>

---

#### 🔴 Exercício A3 (Desafiador)

**Enunciado:** Crie um programa que simule um **caixa eletrônico**. O usuário tem saldo de R$ 5000,00 e pode:
1. Ver saldo
2. Sacar (não pode sacar mais que o saldo, não pode sacar valores negativos)
3. Depositar (não pode depositar valores negativos)
4. Sair

Use `escolha/caso` para o menu. O programa deve repetir até o usuário escolher "Sair".

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        real saldo, valor
        inteiro opcao
        
        saldo = 5000.0
        opcao = 0
        
        enquanto (opcao != 4) {
            escreva("\n══════════════════════\n")
            escreva("  🏦 CAIXA ELETRÔNICO  \n")
            escreva("══════════════════════\n")
            escreva("1 - Ver saldo\n")
            escreva("2 - Sacar\n")
            escreva("3 - Depositar\n")
            escreva("4 - Sair\n")
            escreva("Escolha: ")
            leia(opcao)
            
            escolha (opcao) {
                caso 1:
                    escreva("\n💰 Saldo atual: R$ ", saldo, "\n")
                    pare
                    
                caso 2:
                    escreva("Valor do saque: R$ ")
                    leia(valor)
                    se (valor <= 0) {
                        escreva("❌ Valor inválido!\n")
                    } senao se (valor > saldo) {
                        escreva("❌ Saldo insuficiente!\n")
                        escreva("   Seu saldo é R$ ", saldo, "\n")
                    } senao {
                        saldo = saldo - valor
                        escreva("✅ Saque de R$ ", valor, " realizado!\n")
                        escreva("   Novo saldo: R$ ", saldo, "\n")
                    }
                    pare
                    
                caso 3:
                    escreva("Valor do depósito: R$ ")
                    leia(valor)
                    se (valor <= 0) {
                        escreva("❌ Valor inválido!\n")
                    } senao {
                        saldo = saldo + valor
                        escreva("✅ Depósito de R$ ", valor, " realizado!\n")
                        escreva("   Novo saldo: R$ ", saldo, "\n")
                    }
                    pare
                    
                caso 4:
                    escreva("\n👋 Obrigado por usar nosso caixa!\n")
                    escreva("Saldo final: R$ ", saldo, "\n")
                    pare
                    
                caso contrario:
                    escreva("❌ Opção inválida!\n")
                    pare
            }
        }
    }
}
```

**Conceitos combinados:** Loop `enquanto` + `escolha/caso` + condicionais + validação de dados.

</details>

---

### Módulo B — Repetição (Semanas 10–13)

#### 🟢 Exercício B1 (Fácil)

**Enunciado:** Escreva um programa que leia um número N e exiba a tabuada desse número (de 1 a 10).

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        inteiro n, i
        
        escreva("Digite um número para a tabuada: ")
        leia(n)
        
        escreva("\n📋 Tabuada do ", n, ":\n")
        escreva("─────────────────\n")
        
        para (i = 1; i <= 10; i++) {
            escreva(n, " x ", i, " = ", n * i, "\n")
        }
    }
}
```

</details>

---

#### 🟡 Exercício B2 (Médio)

**Enunciado:** Crie um jogo de **adivinhar o número**. O programa "pensa" em um número entre 1 e 50 (fixe como 27 para teste). O jogador tem 7 tentativas. A cada erro, diga se o número correto é MAIOR ou MENOR.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        inteiro segredo, palpite, tentativas, max_tentativas
        logico acertou
        
        segredo = 27  // Número fixo (em linguagens reais, seria aleatório)
        max_tentativas = 7
        tentativas = 0
        acertou = falso
        
        escreva("🎯 JOGO: Adivinhe o número (1 a 50)\n")
        escreva("Você tem ", max_tentativas, " tentativas.\n\n")
        
        enquanto (tentativas < max_tentativas e nao acertou) {
            tentativas = tentativas + 1
            escreva("Tentativa ", tentativas, "/", max_tentativas, ": ")
            leia(palpite)
            
            se (palpite == segredo) {
                acertou = verdadeiro
                escreva("🎉 ACERTOU em ", tentativas, " tentativa(s)!\n")
            } senao se (palpite < segredo) {
                escreva("   ⬆️ O número é MAIOR\n")
            } senao {
                escreva("   ⬇️ O número é MENOR\n")
            }
        }
        
        se (nao acertou) {
            escreva("\n😞 Suas tentativas acabaram!\n")
            escreva("O número era: ", segredo, "\n")
        }
    }
}
```

**Conceitos:** Loop com 2 condições de parada (tentativas E acerto) + condicionais dentro do loop + flag booleana.

</details>

---

#### 🟡 Exercício B3 (Médio)

**Enunciado:** Crie um programa que leia N números (N informado pelo usuário) e ao final mostre: a soma, a média, o maior valor e o menor valor.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        inteiro n, i
        real numero, soma, media, maior, menor
        
        escreva("Quantos números deseja informar? ")
        leia(n)
        
        se (n <= 0) {
            escreva("❌ Quantidade inválida!\n")
        } senao {
            // Ler o primeiro número (para inicializar maior e menor)
            escreva("Número 1: ")
            leia(numero)
            soma = numero
            maior = numero
            menor = numero
            
            // Ler os demais
            para (i = 2; i <= n; i++) {
                escreva("Número ", i, ": ")
                leia(numero)
                
                soma = soma + numero
                
                se (numero > maior) {
                    maior = numero
                }
                se (numero < menor) {
                    menor = numero
                }
            }
            
            media = soma / n
            
            escreva("\n📊 Resultados:\n")
            escreva("Soma: ", soma, "\n")
            escreva("Média: ", media, "\n")
            escreva("Maior: ", maior, "\n")
            escreva("Menor: ", menor, "\n")
        }
    }
}
```

**Por que ler o primeiro separado?** Para inicializar `maior` e `menor` com um valor real. Se inicializássemos `maior = 0`, e todos os números fossem negativos, o resultado estaria errado!

</details>

---

#### 🔴 Exercício B4 (Desafiador)

**Enunciado:** Crie um programa que verifique se um número é **primo**. Depois, liste todos os primos entre 2 e N (N informado pelo usuário).

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    // Função que verifica se um número é primo
    funcao logico ehPrimo(inteiro num) {
        inteiro i
        
        se (num < 2) {
            retorne falso
        }
        
        para (i = 2; i * i <= num; i++) {
            se (num % i == 0) {
                retorne falso  // Divisível por outro = NÃO é primo
            }
        }
        retorne verdadeiro
    }
    
    funcao inicio() {
        inteiro n, i, count
        
        escreva("Listar primos até: ")
        leia(n)
        
        escreva("\nNúmeros primos de 2 a ", n, ":\n")
        count = 0
        
        para (i = 2; i <= n; i++) {
            se (ehPrimo(i)) {
                escreva(i, " ")
                count = count + 1
            }
        }
        
        escreva("\n\nTotal: ", count, " números primos\n")
    }
}
```

**Otimização:** Testamos até `i * i <= num` (raiz quadrada) em vez de `i < num`. Se 100 não é divisível por nenhum número até 10, não será por nenhum maior que 10. Isso economiza centenas de operações!

</details>

---

### Módulo C — Vetores (Semanas 15–17)

#### 🟢 Exercício C1 (Fácil)

**Enunciado:** Leia 8 valores inteiros, armazene em vetor e mostre: os valores na ordem inversa, o maior e quantos são pares.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        inteiro valores[8]
        inteiro i, maior, pares
        
        // Preencher
        para (i = 0; i < 8; i++) {
            escreva("Valor ", i + 1, ": ")
            leia(valores[i])
        }
        
        // Ordem inversa
        escreva("\nOrdem inversa: ")
        para (i = 7; i >= 0; i--) {
            escreva(valores[i], " ")
        }
        
        // Maior valor
        maior = valores[0]
        para (i = 1; i < 8; i++) {
            se (valores[i] > maior) {
                maior = valores[i]
            }
        }
        escreva("\nMaior valor: ", maior, "\n")
        
        // Contar pares
        pares = 0
        para (i = 0; i < 8; i++) {
            se (valores[i] % 2 == 0) {
                pares = pares + 1
            }
        }
        escreva("Quantidade de pares: ", pares, "\n")
    }
}
```

</details>

---

#### 🔴 Exercício C2 (Desafiador)

**Enunciado:** Implemente o **Bubble Sort** (ordenação por bolha). Leia 6 números, mostre-os na ordem original e depois ordenados de forma crescente.

<details>
<summary>📋 Ver Gabarito Comentado</summary>

```
programa {
    funcao inicio() {
        inteiro v[6]
        inteiro i, j, aux, n
        
        n = 6
        
        // Preencher
        para (i = 0; i < n; i++) {
            escreva("Número ", i + 1, ": ")
            leia(v[i])
        }
        
        // Mostrar original
        escreva("\nOriginal: ")
        para (i = 0; i < n; i++) {
            escreva(v[i], " ")
        }
        
        // BUBBLE SORT
        // Ideia: percorra o vetor várias vezes,
        // comparando pares adjacentes e trocando se estiverem fora de ordem.
        // A cada passada, o maior "borbulha" para o final.
        para (i = 0; i < n - 1; i++) {
            para (j = 0; j < n - 1 - i; j++) {
                se (v[j] > v[j + 1]) {
                    // Troca (swap)
                    aux = v[j]
                    v[j] = v[j + 1]
                    v[j + 1] = aux
                }
            }
        }
        
        // Mostrar ordenado
        escreva("\nOrdenado: ")
        para (i = 0; i < n; i++) {
            escreva(v[i], " ")
        }
        escreva("\n")
    }
}
```

**Como funciona o Bubble Sort (visualização):**
```
Passo 1: [5, 3, 8, 1, 2, 7] → compara 5>3? troca → [3, 5, 8, 1, 2, 7]
          [3, 5, 8, 1, 2, 7] → compara 5>8? não  → [3, 5, 8, 1, 2, 7]
          [3, 5, 8, 1, 2, 7] → compara 8>1? troca → [3, 5, 1, 8, 2, 7]
          ... ao final do passo 1, o 8 (maior) está na última posição

Passo 2: opera nos N-1 primeiros (o último já está no lugar)
... repete até todo o vetor estar ordenado.
```

</details>

---

## 🚀 Projetos Orientados

### 🎯 Projeto Intermediário (Entrega: Semana 9)

**Tema:** Sistema de **Caixa de Supermercado** (versão simplificada)

#### Cenário

Você trabalha como dev júnior e recebeu a tarefa de criar a lógica de um caixa de supermercado. O programa deve registrar produtos, calcular total, aplicar desconto e gerar "cupom fiscal" no console.

#### Requisitos Funcionais

| ID | Requisito |
|----|-----------|
| RF01 | Ler nome e preço de cada produto (loop até digitar "SAIR") |
| RF02 | Calcular subtotal (soma de todos os produtos) |
| RF03 | Aplicar desconto: acima de R$100 → 10%, acima de R$200 → 15% |
| RF04 | Calcular valor final com desconto |
| RF05 | Exibir "cupom fiscal" com todos os itens, subtotal, desconto e total |

#### Requisitos Técnicos

- Usar pelo menos 1 estrutura de repetição (`enquanto`)
- Usar pelo menos 1 condicional encadeada (para faixas de desconto)
- Usar acumulador para soma
- Usar contador para quantidade de itens

#### Entregáveis

1. ✅ Código Portugol funcional (testado no Portugol Studio)
2. ✅ Fluxograma da lógica principal
3. ✅ 3 capturas de tela do programa rodando (com dados diferentes)

#### Rubrica

| Critério | Peso | 10 | 7 | 4 |
|----------|:----:|:--:|:--:|:--:|
| Funcionalidade | 40% | Todos os RF funcionando | 1 RF com falha | Não executa |
| Lógica | 30% | Loop + condicional corretos | Pequeno erro de lógica | Estrutura incorreta |
| Organização do código | 15% | Comentários, nomes claros | Parcialmente organizado | Sem comentários |
| Entregáveis | 15% | Código + fluxograma + testes | Falta 1 item | Só o código |

---

### 🏆 Projeto Final (Entrega: Semanas 19–20)

**Tema:** Sistema de **Controle de Notas de uma Turma** *(ou tema livre aprovado)*

#### Escopo

Programa em Portugol que gerencia as notas de uma turma usando VETORES, com menu interativo e relatórios.

#### Funcionalidades Obrigatórias

| # | Funcionalidade | Conceitos envolvidos |
|:-:|---------------|---------------------|
| 1 | Cadastrar notas dos alunos (vetor) | Vetores, loop `para` |
| 2 | Calcular média da turma | Acumulador, divisão |
| 3 | Encontrar maior e menor nota | Algoritmo de busca |
| 4 | Mostrar alunos acima/abaixo da média | Vetor + condicional |
| 5 | Contar aprovados/reprovados (nota >= 7) | Contador + condicional |
| 6 | Ordenar notas (crescente) | Bubble Sort |
| 7 | Menu interativo com todas as opções | Loop + escolha/caso |
| 8 | Opção de sair do programa | Sentinela |

#### Passo a Passo

```
Semana 19:
  Aulas 1-2 → Implementar cadastro (vetores) + menu principal
  Aulas 3-4 → Implementar cálculos (média, maior, menor)
  Aulas 5-6 → Implementar ordenação + testes com dados variados

Semana 20:
  Aulas 1-3 → Apresentação (demonstrar + explicar lógica)
  Aula 4 → Feedback
  Aulas 5-6 → Encerramento
```

#### Exemplo de Saída Esperada

```
═══════════════════════════════
  📊 CONTROLE DE NOTAS - TURMA DS-M1
═══════════════════════════════
1 - Cadastrar notas
2 - Ver média da turma
3 - Maior e menor nota
4 - Alunos acima da média
5 - Ranking (ordenado)
6 - Aprovados vs Reprovados
7 - Sair
═══════════════════════════════
Opção: 2

📈 Média da turma: 7.35
   Alunos: 12
   Aprovados: 8 (66.7%)
   Reprovados: 4 (33.3%)
```

#### Rubrica

| Critério | Peso | 10 | 7 | 4 |
|----------|:----:|:--:|:--:|:--:|
| Funcionalidades (8 itens) | 35% | 7-8 funcionando | 5-6 funcionando | < 5 |
| Uso correto de vetores | 20% | Vetor usado em todas as operações | Usa vetor mas com erros pontuais | Não usa vetor |
| Organização (funções, comentários) | 15% | Código modular com funções | Parcialmente organizado | Tudo em uma função |
| Apresentação oral | 15% | Explica lógica com clareza | Apresentação básica | Não demonstra entendimento |
| Tratamento de erros | 15% | Valida entradas, trata limites | Validação parcial | Sem validação |

---

## 📋 Simulado Preparatório

> 📅 **Aplicação:** Semana 16, Aula 6
> ⏱️ **Duração:** 50 minutos
> 📊 **Composição:** 5 objetivas + 2 práticas

---

### Questões Objetivas (0,5 ponto cada = 2,5 pontos)

**Q1.** Qual pilar do Pensamento Computacional está sendo aplicado quando um programador percebe que calcular média de notas e calcular média de preços usam a MESMA lógica?

- a) Decomposição
- b) **Reconhecimento de Padrões** ✅
- c) Abstração
- d) Algoritmo
- e) Compilação

> 💡 **Explicação:** Reconhecer que dois problemas diferentes seguem o mesmo padrão lógico é exatamente o pilar de Reconhecimento de Padrões.

---

**Q2.** Qual o resultado do seguinte código?
```
inteiro x = 10
x = x + 5
x = x * 2
escreva(x)
```

- a) 10
- b) 15
- c) 25
- d) **30** ✅
- e) 20

> 💡 **Passo a passo:** x=10 → x=10+5=15 → x=15*2=30. Cada linha REATRIBUI o valor de x.

---

**Q3.** O que acontece se executarmos: `enquanto (verdadeiro) { escreva("Oi") }` ?

- a) Escreve "Oi" uma vez e para
- b) Não executa nenhuma vez
- c) **Loop infinito — nunca para** ✅
- d) Escreve "Oi" 10 vezes
- e) Erro de compilação

> 💡 A condição `verdadeiro` NUNCA fica falsa, então o loop nunca termina.

---

**Q4.** Dado o vetor `inteiro v[5] = {10, 20, 30, 40, 50}`, qual o valor de `v[2] + v[4]`?

- a) 30
- b) 50
- c) 70
- d) **80** ✅
- e) 90

> 💡 v[2] = 30 (terceiro elemento, pois começa em 0), v[4] = 50 (quinto elemento). 30+50=80.

---

**Q5.** Qual estrutura é mais adequada quando NÃO sabemos quantas vezes o loop vai repetir?

- a) `para`
- b) **`enquanto`** ✅
- c) `escolha/caso`
- d) `se/senao`
- e) Função recursiva

> 💡 `para` = sabe quantas vezes. `enquanto` = repete até uma condição mudar (não sabe quando).

---

### Questões Práticas (3,75 pontos cada = 7,5 pontos)

**QP1.** Escreva um programa em Portugol que:
1. Leia 10 números inteiros e armazene em um vetor
2. Calcule e exiba a soma dos números pares e a soma dos ímpares separadamente
3. Mostre quantos números são maiores que a média do vetor

<details>
<summary>📋 Ver Gabarito</summary>

```
programa {
    funcao inicio() {
        inteiro numeros[10]
        inteiro i, soma_pares, soma_impares, acima_media, count
        real soma_total, media
        
        // Ler os 10 números
        para (i = 0; i < 10; i++) {
            escreva("Número ", i + 1, ": ")
            leia(numeros[i])
        }
        
        // Calcular somas
        soma_pares = 0
        soma_impares = 0
        soma_total = 0.0
        
        para (i = 0; i < 10; i++) {
            soma_total = soma_total + numeros[i]
            se (numeros[i] % 2 == 0) {
                soma_pares = soma_pares + numeros[i]
            } senao {
                soma_impares = soma_impares + numeros[i]
            }
        }
        
        media = soma_total / 10.0
        
        // Contar acima da média
        acima_media = 0
        para (i = 0; i < 10; i++) {
            se (numeros[i] > media) {
                acima_media = acima_media + 1
            }
        }
        
        escreva("\nSoma dos pares: ", soma_pares, "\n")
        escreva("Soma dos ímpares: ", soma_impares, "\n")
        escreva("Média: ", media, "\n")
        escreva("Acima da média: ", acima_media, " números\n")
    }
}
```

**Critério:** 1,5 pt leitura+vetor | 1,0 pt soma par/ímpar | 1,25 pt média+contagem acima

</details>

---

**QP2.** Escreva uma FUNÇÃO `ehPalindromo` que receba um vetor de inteiros e seu tamanho, e retorne `verdadeiro` se o vetor é palíndromo (igual lido de frente e de trás). Teste com 2 vetores: um que É palíndromo e um que NÃO é.

<details>
<summary>📋 Ver Gabarito</summary>

```
programa {
    funcao logico ehPalindromo(inteiro v[], inteiro tamanho) {
        inteiro inicio, fim
        
        inicio = 0
        fim = tamanho - 1
        
        enquanto (inicio < fim) {
            se (v[inicio] != v[fim]) {
                retorne falso
            }
            inicio = inicio + 1
            fim = fim - 1
        }
        
        retorne verdadeiro
    }
    
    funcao inicio() {
        // Teste 1: É palíndromo
        inteiro vet1[5] = {1, 3, 5, 3, 1}
        // Teste 2: NÃO é palíndromo
        inteiro vet2[5] = {1, 2, 3, 4, 5}
        
        escreva("Vetor {1,3,5,3,1} é palíndromo? ", ehPalindromo(vet1, 5), "\n")
        escreva("Vetor {1,2,3,4,5} é palíndromo? ", ehPalindromo(vet2, 5), "\n")
    }
}
```

**Lógica:** Compara posição 0 com posição 4, depois 1 com 3, depois 2 com 2 (centro). Se todas forem iguais, é palíndromo. Se qualquer par for diferente, não é.

**Critério:** 2,0 pt função correta | 1,0 pt uso com testes | 0,75 pt lógica explicada

</details>

---

## 📝 Prova Regimental

> 📅 **Aplicação:** Semana 18, Aulas 1–2
> ⏱️ **Duração:** 100 minutos (2 aulas)
> 📊 **Valor:** 10,0 pontos
> 📌 **Material:** Consulta fechada

---

### PARTE 1 — Questões Objetivas (2,5 pontos | 0,5 cada)

**1.** Qual a principal diferença entre a estrutura `para` e `enquanto`?

- a) `para` é mais rápido que `enquanto`
- b) **`para` tem início, condição e incremento em uma linha; `enquanto` verifica apenas uma condição** ✅
- c) `enquanto` não pode usar contadores
- d) `para` só funciona com vetores
- e) Não há diferença, são idênticos

---

**2.** Analise: `se (x > 5 e x < 10)`. Para qual valor de `x` a condição é VERDADEIRA?

- a) x = 5
- b) x = 10
- c) **x = 7** ✅
- d) x = 11
- e) x = 4

> O operador `e` (AND) exige que AMBAS sejam verdadeiras: 7>5 ✅ e 7<10 ✅.

---

**3.** Dado: `inteiro vetor[4] = {5, 10, 15, 20}`. O que exibe `escreva(vetor[3])`?

- a) 5
- b) 10
- c) 15
- d) **20** ✅
- e) Erro (posição inválida)

> Índice 3 = quarta posição (começa em 0): [0]=5, [1]=10, [2]=15, [3]=20.

---

**4.** O que é um **acumulador** em programação?

- a) Uma variável que conta quantas vezes algo acontece
- b) **Uma variável que soma valores progressivamente a cada iteração** ✅
- c) Uma função que retorna sempre o mesmo valor
- d) Um tipo de dado especial do Portugol
- e) Um vetor que cresce automaticamente

---

**5.** Quantas vezes o corpo do loop executa?
```
inteiro i = 1
enquanto (i <= 5) {
    escreva(i)
    i = i + 2
}
```

- a) 5 vezes
- b) 2 vezes
- c) **3 vezes** ✅
- d) 4 vezes
- e) Loop infinito

> Execuções: i=1 (escreve 1, i→3), i=3 (escreve 3, i→5), i=5 (escreve 5, i→7). Na próxima verificação, 7<=5 é falso → para. Total: 3 vezes.

---

### PARTE 2 — Questões Práticas (7,5 pontos)

---

**6.** (2,5 pts) Escreva um programa em Portugol que leia um número inteiro positivo e determine se ele é um **número perfeito** (soma dos seus divisores próprios é igual a ele mesmo). Exemplo: 6 = 1+2+3 = 6 ✅ | 28 = 1+2+4+7+14 = 28 ✅

<details>
<summary>📋 Ver Gabarito + Critérios</summary>

```
programa {
    funcao inicio() {
        inteiro numero, i, soma_divisores
        
        escreva("Digite um número inteiro positivo: ")
        leia(numero)
        
        se (numero <= 0) {
            escreva("❌ Número deve ser positivo!\n")
        } senao {
            soma_divisores = 0
            
            // Encontrar todos os divisores próprios (excluindo o próprio número)
            para (i = 1; i <= numero / 2; i++) {
                se (numero % i == 0) {
                    soma_divisores = soma_divisores + i
                    escreva("Divisor encontrado: ", i, "\n")
                }
            }
            
            escreva("\nSoma dos divisores: ", soma_divisores, "\n")
            
            se (soma_divisores == numero) {
                escreva("✅ ", numero, " é um número PERFEITO!\n")
            } senao {
                escreva("❌ ", numero, " NÃO é perfeito.\n")
            }
        }
    }
}
```

**Critérios:** 1,0 pt loop correto até numero/2 | 0,5 pt verificação de divisor (%) | 0,5 pt acumulador | 0,5 pt comparação final

</details>

---

**7.** (2,5 pts) Escreva um programa que:
- Leia 7 temperaturas diárias e armazene em um vetor
- Exiba quais dias tiveram temperatura ACIMA da média semanal
- Exiba a maior variação entre dias consecutivos (diferença entre dia N e dia N+1)

<details>
<summary>📋 Ver Gabarito + Critérios</summary>

```
programa {
    funcao inicio() {
        real temperaturas[7]
        real soma, media, variacao, maior_variacao
        inteiro i, dia_variacao
        
        // Leitura
        para (i = 0; i < 7; i++) {
            escreva("Temperatura do dia ", i + 1, " (°C): ")
            leia(temperaturas[i])
        }
        
        // Calcular média
        soma = 0.0
        para (i = 0; i < 7; i++) {
            soma = soma + temperaturas[i]
        }
        media = soma / 7.0
        
        escreva("\n📊 Média semanal: ", media, "°C\n")
        
        // Dias acima da média
        escreva("\n🌡️ Dias acima da média:\n")
        para (i = 0; i < 7; i++) {
            se (temperaturas[i] > media) {
                escreva("  Dia ", i + 1, ": ", temperaturas[i], "°C\n")
            }
        }
        
        // Maior variação entre dias consecutivos
        maior_variacao = 0.0
        dia_variacao = 1
        
        para (i = 0; i < 6; i++) {  // Até 6 (pois compara i com i+1)
            variacao = temperaturas[i + 1] - temperaturas[i]
            // Valor absoluto (se for negativo, inverte)
            se (variacao < 0) {
                variacao = variacao * -1
            }
            se (variacao > maior_variacao) {
                maior_variacao = variacao
                dia_variacao = i + 1
            }
        }
        
        escreva("\n📈 Maior variação: ", maior_variacao, "°C")
        escreva(" (entre dia ", dia_variacao, " e dia ", dia_variacao + 1, ")\n")
    }
}
```

**Critérios:** 0,75 pt leitura+vetor | 0,75 pt média+acima | 1,0 pt variação entre consecutivos

</details>

---

**8.** (2,5 pts) Escreva um programa com FUNÇÃO que implemente um **menu de operações com vetor**:
- Opção 1: Preencher vetor de 5 posições
- Opção 2: Exibir vetor atual
- Opção 3: Ordenar vetor (crescente)
- Opção 4: Buscar um valor no vetor (informar posição ou "não encontrado")
- Opção 5: Sair

Use pelo menos 2 funções auxiliares (ex: `ordenar` e `buscar`).

<details>
<summary>📋 Ver Gabarito + Critérios</summary>

```
programa {
    inteiro vetor[5]
    logico preenchido
    
    funcao ordenarVetor() {
        inteiro i, j, aux
        para (i = 0; i < 4; i++) {
            para (j = 0; j < 4 - i; j++) {
                se (vetor[j] > vetor[j + 1]) {
                    aux = vetor[j]
                    vetor[j] = vetor[j + 1]
                    vetor[j + 1] = aux
                }
            }
        }
        escreva("✅ Vetor ordenado!\n")
    }
    
    funcao inteiro buscarValor(inteiro valor) {
        inteiro i
        para (i = 0; i < 5; i++) {
            se (vetor[i] == valor) {
                retorne i  // Retorna a posição
            }
        }
        retorne -1  // Não encontrado
    }
    
    funcao exibirVetor() {
        inteiro i
        escreva("[ ")
        para (i = 0; i < 5; i++) {
            escreva(vetor[i])
            se (i < 4) {
                escreva(", ")
            }
        }
        escreva(" ]\n")
    }
    
    funcao inicio() {
        inteiro opcao, i, valor, posicao
        preenchido = falso
        
        opcao = 0
        enquanto (opcao != 5) {
            escreva("\n═══════════════════\n")
            escreva("  MENU DE OPERAÇÕES\n")
            escreva("═══════════════════\n")
            escreva("1 - Preencher vetor\n")
            escreva("2 - Exibir vetor\n")
            escreva("3 - Ordenar\n")
            escreva("4 - Buscar valor\n")
            escreva("5 - Sair\n")
            escreva("Opção: ")
            leia(opcao)
            
            escolha (opcao) {
                caso 1:
                    para (i = 0; i < 5; i++) {
                        escreva("Posição ", i, ": ")
                        leia(vetor[i])
                    }
                    preenchido = verdadeiro
                    escreva("✅ Vetor preenchido!\n")
                    pare
                caso 2:
                    se (preenchido) {
                        exibirVetor()
                    } senao {
                        escreva("⚠️ Preencha o vetor primeiro!\n")
                    }
                    pare
                caso 3:
                    se (preenchido) {
                        ordenarVetor()
                        exibirVetor()
                    } senao {
                        escreva("⚠️ Preencha o vetor primeiro!\n")
                    }
                    pare
                caso 4:
                    se (preenchido) {
                        escreva("Valor a buscar: ")
                        leia(valor)
                        posicao = buscarValor(valor)
                        se (posicao >= 0) {
                            escreva("✅ Encontrado na posição ", posicao, "\n")
                        } senao {
                            escreva("❌ Valor não encontrado\n")
                        }
                    } senao {
                        escreva("⚠️ Preencha o vetor primeiro!\n")
                    }
                    pare
                caso 5:
                    escreva("👋 Até logo!\n")
                    pare
                caso contrario:
                    escreva("❌ Opção inválida!\n")
                    pare
            }
        }
    }
}
```

**Critérios:** 0,75 pt menu+loop | 0,5 pt função ordenar | 0,5 pt função buscar | 0,5 pt validações | 0,25 pt organização

</details>

---

## ✅ Critérios Gerais de Correção

| Aspecto | Desconto |
|---------|----------|
| Erro de sintaxe menor (falta de `;`, parêntese) | -0,25 |
| Lógica correta mas com bug menor (off-by-one) | -0,5 |
| Loop que funciona mas não é o ideal para o caso | -0,25 |
| Código funcional mas sem organização/comentários | Sem desconto na prova |
| Solução alternativa válida com mesma lógica | Aceita integralmente |
| Loop infinito não intencional | Nota 0 na questão |
| Vetor com acesso fora dos limites | -0,5 |

---

## 🚨 Plano de Contingência Pedagógica (Aulas Práticas sem Laboratório)

> ⚠️ **Quando usar este plano:** Laboratório indisponível (manutenção, queda de energia, falta de internet, máquinas com defeito). O objetivo é manter o aprendizado ativo e produtivo mesmo sem computadores.

### 🔀 Fluxograma de Decisão Rápida

```
┌─────────────────────────────────────────────┐
│  🚨 LABORATÓRIO INDISPONÍVEL — E AGORA?     │
└─────────────────────┬───────────────────────┘
                      │
                      ▼
        ┌─────────────────────────────┐
        │ Alunos têm smartphones com  │
        │ internet disponível?        │
        └──────────────┬──────────────┘
               ┌───────┴───────┐
               │               │
            SIM ▼           NÃO ▼
  ┌──────────────────┐  ┌──────────────────────────┐
  │ ▶ OPÇÃO A: BYOD  │  │ Professora tem materiais │
  │ (Smartphone)     │  │ impressos / quadro?      │
  └──────────────────┘  └────────────┬─────────────┘
                              ┌──────┴──────┐
                              │             │
                           SIM ▼          NÃO ▼
                 ┌───────────────────┐  ┌──────────────────┐
                 │ ▶ OPÇÃO B:        │  │ ▶ OPÇÃO C:       │
                 │ DESPLUGADA        │  │ ESTUDO DE CASO   │
                 │ (Unplugged)       │  │ / PBL            │
                 └───────────────────┘  └──────────────────┘
```

---

### 📱 Opção A: BYOD (Bring Your Own Device — Smartphone)

> 💡 **Conceito:** Alunos usam seus próprios celulares para praticar algoritmos e lógica de programação.

#### Ferramentas Mobile para Lógica e Algoritmos

| Ferramenta | Sistema | Link | Melhor Para |
|-----------|---------|------|-------------|
| **Portugol Online** | Qualquer | webportugol.com (navegador) | Escrever pseudocódigo em português |
| **Grasshopper (Google)** | Android/iOS | App Store / Play Store | Lógica de programação gamificada |
| **SoloLearn** | Android/iOS | App Store / Play Store | Exercícios interativos de lógica |
| **Replit Mobile** | Android/iOS | App ou navegador | IDE completa no celular |

#### Atividades Adaptadas para Smartphone

| Atividade | Duração | Ferramenta | Semanas Aplicáveis |
|-----------|---------|------------|-------------------|
| Escrever algoritmos simples em Portugol Online | 30 min | Portugol Online | 3-6 |
| Desafios de lógica no Grasshopper | 20 min | Grasshopper | 1-4 |
| Exercícios de condicionais/loops no SoloLearn | 30 min | SoloLearn | 7-11 |
| Programar algoritmo de ordenação no Replit | 40 min | Replit Mobile | 15-16 |
| Quiz interativo de lógica (Kahoot/Google Forms) | 20 min | Navegador | 1-17 |

#### 📋 Roteiro da Professora (Opção A)

```
DURAÇÃO TOTAL: 50 minutos

1. [5 min]  Anunciar atividade BYOD — alunos abrem ferramenta no celular
2. [5 min]  Projetar QR Code / escrever URL no quadro (Portugol Online)
3. [5 min]  Escrever o enunciado do exercício no quadro
4. [25 min] Alunos codificam no celular — professora circula e auxilia
5. [5 min]  2-3 alunos ditam/mostram suas soluções para a turma
6. [5 min]  Fechamento: conceitos-chave revisados no quadro
```

#### 📋 Guia do Aluno (para projetar ou escrever no quadro)

> 🎯 **Hoje a aula é no celular!**
> 1. Acesse o link/QR Code fornecido pela professora
> 2. Leia o enunciado no quadro
> 3. Escreva seu algoritmo na ferramenta
> 4. Teste executando com diferentes valores
> 5. Anote a solução final no caderno

---

### 📝 Opção B: Atividades Desplugadas (Unplugged)

> 💡 **Conceito:** Aprender lógica e algoritmos sem computador, usando papel, caneta, corpo e dinâmicas em grupo.

#### Atividade B1 — Teste de Mesa em Papel 🟢

**Semanas aplicáveis:** 3–17 (qualquer semana!)

**Materiais:** Folha de papel, lápis/caneta, borracha

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Escrever no quadro um algoritmo em Portugol (5-15 linhas)
2. [3 min]  Explicar: "Vocês SÃO o Portugol Studio. Executem LINHA POR LINHA
             e anotem o valor de cada variável a cada passo."
3. [2 min]  Desenhar modelo da tabela de teste de mesa no quadro:
            | Passo | variável1 | variável2 | saída |
4. [20 min] Alunos executam manualmente, preenchendo a tabela
5. [10 min] Correção coletiva no quadro — professora executa passo a passo
6. [5 min]  Perguntar: "Em qual passo o valor mudou? Por quê?"
```

**Exemplo para o quadro:**
```
programa {
    funcao inicio() {
        inteiro x, y, temp
        x = 8
        y = 3
        temp = x
        x = y
        y = temp
        escreva(x, " ", y)
    }
}
```

| Passo | x | y | temp | Saída |
|:-----:|:-:|:-:|:----:|-------|
| 1 | 8 | ? | ? | — |
| 2 | 8 | 3 | ? | — |
| 3 | 8 | 3 | 8 | — |
| 4 | 3 | 3 | 8 | — |
| 5 | 3 | 8 | 8 | — |
| 6 | 3 | 8 | 8 | "3 8" |

#### Atividade B2 — "Algoritmo do Sanduíche" 🟢

**Semanas aplicáveis:** 1–3

**Materiais:** Folha de papel, pão, ingredientes simulados (opcional)

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Desafio: "Escrevam instruções TÃO PRECISAS para fazer um
             sanduíche que eu vou executar LITERALMENTE."
2. [15 min] Alunos escrevem individualmente (mín. 10 passos)
3. [15 min] Professora "executa" 2-3 algoritmos dos alunos LITERALMENTE:
            - "Coloque o presunto" → coloca em cima da mesa (não disse no pão!)
            - "Abra o pão" → rasga ao meio (não disse cortar!)
            → Risos + aprendizado sobre PRECISÃO e AMBIGUIDADE
4. [5 min]  Reescrever: alunos corrigem seus algoritmos
5. [5 min]  Conexão: "O computador faz EXATAMENTE o que mandamos.
             Sem bom senso. Precisamos ser PRECISOS."
6. [5 min]  Fechamento: relação com bugs no código
```

#### Atividade B3 — Ordenação com Cartas de Baralho 🟡

**Semanas aplicáveis:** 15–16

**Materiais:** 1 baralho por grupo (ou cartões numerados de 1 a 10)

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir 10 cartas embaralhadas por grupo (números à mostra)
2. [5 min]  Explicar Bubble Sort no quadro com exemplo visual:
            "Compare dois vizinhos. Se estão fora de ordem, TROQUE."
3. [15 min] Grupos executam Bubble Sort fisicamente com as cartas:
            - A cada "passada", percorrem da esquerda para a direita
            - Contam quantas trocas fizeram
            - Repetem até nenhuma troca ocorrer
4. [10 min] Repetir com Selection Sort:
            "Encontre o MENOR de todos. Coloque na posição 1. Repita."
5. [10 min] Discussão: "Qual método fez menos trocas? Qual é mais rápido?"
6. [5 min]  Anotar no caderno: pseudocódigo do Bubble Sort
```

#### Atividade B4 — Fluxogramas em Papel Quadriculado 🟢

**Semanas aplicáveis:** 2–9

**Materiais:** Papel quadriculado A4, régua, caneta colorida (opcional)

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Revisar no quadro os símbolos: início/fim, processo, decisão, E/S
2. [5 min]  Apresentar o problema do dia (ex: "Verificar se número é primo")
3. [25 min] Alunos desenham o fluxograma no papel quadriculado:
            - Usar régua para formas geométricas
            - Numerar os passos dentro dos símbolos
            - Indicar Sim/Não nas decisões
4. [10 min] Trocar com colega ao lado → "Code review visual":
            "O fluxograma do colega está correto? Faltou algum caminho?"
5. [5 min]  Correção coletiva: professora desenha versão correta no quadro
```

#### Atividade B5 — "Code Review Humano" 🟡

**Semanas aplicáveis:** 5–17

**Materiais:** Folhas impressas com algoritmos contendo bugs

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir folha com algoritmo em Portugol que tem 3-5 bugs
2. [3 min]  Explicar: "Encontrem TODOS os erros. Circulem e escrevam
             a correção ao lado. Trabalhem em DUPLA."
3. [20 min] Duplas analisam o código — professora dá dicas se necessário
4. [10 min] Correção coletiva: cada dupla apresenta 1 bug encontrado
5. [7 min]  Professora mostra versão corrigida — alunos comparam
6. [5 min]  Reflexão: "Quais tipos de erro são mais comuns?"
```

#### 📋 Guia do Aluno (Opção B — para escrever no quadro)

> 🎯 **Hoje trabalhamos SEM COMPUTADOR!**
> - No teste de mesa: VOCÊ é o Portugol Studio. Execute linha por linha!
> - No Algoritmo do Sanduíche: seja o mais PRECISO possível!
> - Na ordenação: movam as cartas fisicamente — contem as trocas!
> - No code review: leia o código como um DETETIVE — cada linha pode ter um bug

---

### 💼 Opção C: Estudo de Caso / PBL (Problem-Based Learning)

> 💡 **Conceito:** Resolver problemas reais de lógica usando análise crítica, debate e raciocínio — sem precisar de computador.

#### Caso C1 — Análise de Pseudocódigo com Bugs 🟡

**Semanas aplicáveis:** 5–17

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Distribuir folha com pseudocódigo impresso (2 algoritmos, cada um
            com 3-4 bugs de lógica: loop infinito, variável não inicializada,
            condição invertida, off-by-one)
2. [3 min]  Contextualizar: "Estes algoritmos foram escritos por um
            programador júnior. Vocês são a equipe de QA."
3. [20 min] Grupos analisam, identificam bugs e propõem correções
4. [10 min] Cada grupo apresenta os bugs encontrados + correção
5. [7 min]  Professora revela TODOS os bugs (incluindo os não encontrados)
6. [5 min]  Discussão: "Como prevenir esses erros? (Teste de mesa!)"
```

#### Caso C2 — Otimização do Algoritmo de Troco 🔴

**Semanas aplicáveis:** 10–14

```
ROTEIRO DA PROFESSORA:

1. [5 min]  Apresentar o problema: "Um caixa de supermercado precisa
            dar troco usando o MENOR número possível de cédulas/moedas.
            Cédulas disponíveis: 100, 50, 20, 10, 5, 2, 1.
            Moedas: 0.50, 0.25, 0.10, 0.05, 0.01"

2. [5 min]  Exemplo no quadro: Troco = R$ 47,63
            → 2×20 + 1×5 + 1×2 + 1×0.50 + 1×0.10 + 3×0.01

3. [15 min] Alunos escrevem o ALGORITMO (pseudocódigo) no caderno:
            - Usar estrutura de repetição
            - Usar vetores para as cédulas
            - Contar quantas de cada

4. [10 min] Desafio extra: "E se NÃO tiver cédulas de 20? Como muda?"

5. [10 min] Duplas trocam algoritmos e fazem teste de mesa com valor diferente

6. [5 min]  Conexão: "Este é o Algoritmo Guloso (Greedy) — usado em
             otimização, roteamento, IA..."
```

#### 📋 Guia do Aluno (Opção C — para escrever no quadro)

> 🎯 **Hoje somos analistas de algoritmos!**
> 1. Leia o caso apresentado pela professora com atenção
> 2. Identifique: Qual é o problema? Quais são as restrições?
> 3. Escreva sua solução em pseudocódigo no caderno
> 4. Faça o teste de mesa com pelo menos 2 valores diferentes
> 5. Prepare-se para explicar sua lógica à turma

---

### 📊 Rubrica de Avaliação Adaptada (Aulas de Contingência)

| Critério | Peso | 10 (Excelente) | 7 (Bom) | 4 (Insuficiente) |
|----------|:----:|:--------------:|:--------:|:-----------------:|
| **Participação ativa** | 30% | Engajou em todas as etapas, contribuiu com ideias | Participou mas com pouca iniciativa | Ficou passivo/não contribuiu |
| **Correção técnica** | 30% | Algoritmo/lógica sem erros, teste de mesa correto | Pequenos erros que não comprometem o raciocínio | Erros graves (loop infinito, lógica invertida) |
| **Trabalho em equipe** | 20% | Colaborou ativamente, ouviu e contribuiu | Participou quando solicitado | Não interagiu com o grupo |
| **Registro escrito** | 20% | Caderno organizado com algoritmo e teste de mesa | Resolução parcial mas legível | Sem registro ou ilegível |

> 🎯 **Nota:** Atividades de contingência têm o MESMO PESO que aulas regulares no conceito de participação.

---

### 🖨️ Kit de Materiais para Impressão

> 💡 **Dica:** Mantenha estes materiais impressos na pasta da disciplina para uso imediato quando necessário.

| Material | Quantidade | Uso |
|----------|-----------|-----|
| Algoritmos em Portugol com bugs (5 exercícios de dificuldade crescente) | 20 cópias | Atividade B5 — Code Review Humano |
| Templates de Teste de Mesa em branco (tabela de variáveis) | 40 cópias | Atividade B1 — Teste de Mesa |
| Cartões numerados de 1 a 10 (ou usar baralho) | 5 jogos | Atividade B3 — Ordenação com Cartas |
| Folhas de papel quadriculado A4 | 40 folhas | Atividade B4 — Fluxogramas |
| Resumo de símbolos de fluxograma (1 página) | 40 cópias | Apoio para atividades de fluxograma |
| Caso do Troco + enunciado de pseudocódigo com bugs | 20 cópias | Opção C — Estudo de Caso |

---

<p align="center">
  <strong>🧠 Lembre-se: Lógica é como um músculo — quanto mais pratica, mais forte fica!</strong><br/>
  <em>Material elaborado para Lógica e Pensamento Computacional — ETE Pernambuco — 2026.2</em>
</p>
