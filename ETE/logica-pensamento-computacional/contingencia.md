---

## 🚨 Plano de Contingência Pedagógica (Aulas Práticas sem Laboratório)

> ⚠️ **Quando usar este plano?** Quando o laboratório de informática estiver indisponível (manutenção, falta de energia, equipamentos com defeito, turno ocupado por outra disciplina). Este plano garante que a aula aconteça com QUALIDADE mesmo sem computadores.

> 💡 **Filosofia:** Lógica de programação é sobre PENSAR, não sobre digitar. Os maiores cientistas da computação (Turing, Dijkstra, Knuth) desenvolveram algoritmos com papel e caneta muito antes de existirem IDEs.

---

### 🔀 Fluxograma de Decisão Rápida

Use este fluxograma no início da aula para decidir qual modalidade aplicar:

```
┌─────────────────────────────────────────────────────────┐
│      DECISÃO RÁPIDA — LÓGICA E PENSAMENTO COMPUTACIONAL │
│                                                         │
│  Laboratório disponível?                                │
│       │                                                 │
│       ├── SIM → Aula normal (Portugol Studio no PC)     │
│       │                                                 │
│       └── NÃO → Alunos têm smartphone?                 │
│                    │                                    │
│                    ├── 70%+ SIM → OPÇÃO A (BYOD)       │
│                    │   Replit Mobile / Portugol Web     │
│                    │                                    │
│                    └── NÃO → Tem material impresso?     │
│                                 │                       │
│                                 ├── SIM → OPÇÃO B      │
│                                 │    (Desplugada)       │
│                                 │    Teste de mesa,     │
│                                 │    ordenação humana   │
│                                 │                       │
│                                 └── NÃO → OPÇÃO C      │
│                                      (Estudo de Caso)   │
│                                      Só precisa de      │
│                                      quadro + debate    │
└─────────────────────────────────────────────────────────┘
```

---

### 📱 Opção A: BYOD (Bring Your Own Device — Smartphone)

> 🎯 **Objetivo:** Utilizar os smartphones dos alunos como ambiente de programação, aproveitando IDEs mobile e plataformas de aprendizado gamificadas.

#### Ferramentas Mobile Recomendadas

| Ferramenta | O que faz | Funciona offline? | Link |
|------------|-----------|:-----------------:|------|
| **Replit Mobile** | IDE completa no celular (Python, JS, C) | Não | App Store / Play Store |
| **SoloLearn** | Cursos gamificados de lógica + editor de código | Parcial | App Store / Play Store |
| **Grasshopper (Google)** | Aprender lógica com puzzles visuais | Parcial | App Store / Play Store |
| **Portugol Online** | Portugol Studio no navegador mobile | Não | univali-lite.github.io/Portugol-Studio |

#### Atividades Adaptadas para Smartphone

| Atividade Original (PC) | Adaptação Mobile | Tempo |
|--------------------------|------------------|:-----:|
| Portugol Studio Desktop | Portugol Online no navegador mobile (Chrome) | Igual |
| Exercício de variáveis | SoloLearn: módulo "Variables" | 20 min |
| Fluxograma no Flowgorithm | Desenhar fluxograma no papel + foto | 15 min |
| Exercícios de repetição | Grasshopper: módulo "Loops" | 20 min |
| Projeto completo | Replit Mobile: programa completo em Python/Portugol | 40 min |

#### 📋 Roteiro do Professor — Aula BYOD (50 min)

| Tempo | Ação | Dica |
|:-----:|------|------|
| 0–5 min | Compartilhar link/QR Code do Portugol Online | Teste o link no SEU celular antes da aula |
| 5–10 min | Demonstrar no celular: como digitar código, executar | Projete a tela se possível |
| 10–40 min | Alunos programam no celular (exercício do dia) | Circular ajudando com problemas de digitação |
| 40–48 min | 2 alunos mostram sua solução (projetar tela) | Peça soluções diferentes para o mesmo problema |
| 48–50 min | Pedir screenshot da solução funcional | Screenshot = comprovação de entrega |

#### 📋 Guia do Aluno — Aula BYOD

```
┌─────────────────────────────────────────────────────────┐
│  📱 PROGRAMANDO NO CELULAR — GUIA RÁPIDO               │
│                                                         │
│  1. Abra o Chrome e acesse o link do Portugol Online    │
│  2. Gire o celular na HORIZONTAL (paisagem)             │
│  3. Toque no editor e comece a digitar                  │
│  4. Use o botão ▶ para executar                         │
│  5. Se der erro: leia a mensagem com calma!             │
│  6. Quando funcionar: tire SCREENSHOT                   │
│                                                         │
│  💡 DICAS PARA DIGITAR CÓDIGO NO CELULAR:              │
│  - Use teclado Gboard com previsão desativada           │
│  - Caracteres especiais: segure teclas para { } [ ] ( ) │
│  - Copie trechos repetitivos para economizar tempo      │
│                                                         │
│  ⚠️ Sem internet? Use o SoloLearn offline              │
│  🔋 Bateria fraca? Faça teste de mesa no caderno       │
└─────────────────────────────────────────────────────────┘
```

---

### 🎨 Opção B: Atividades Desplugadas (Unplugged)

> 🎯 **Objetivo:** Desenvolver raciocínio lógico-algorítmico usando papel, quadro e o próprio corpo como "computador humano". Estas atividades são usadas em universidades como MIT, Stanford e UNICAMP.

#### Atividade B1: "Teste de Mesa no Papel"

> **Conexão curricular:** Semanas 4-14 | Técnica: Execução manual de algoritmos (trace table)

**📋 Roteiro do Professor (50 min):**

| Tempo | Ação | Fala sugerida |
|:-----:|------|---------------|
| 0–5 min | Desenhar tabela no quadro: colunas = variáveis, linhas = passos | "Hoje VOCÊS são o computador. Vão executar o algoritmo linha por linha." |
| 5–10 min | Escrever algoritmo no quadro (8-12 linhas) | "Copiem este código. Não executem ainda — vamos fazer JUNTOS passo a passo." |
| 10–20 min | Executar coletivamente as 3 primeiras linhas | "Linha 3: x recebe 5. Anotem na coluna x: 5. O valor anterior some!" |
| 20–40 min | Alunos executam o restante individualmente | Circular verificando: "Qual o valor de `soma` na linha 7? Mostre-me sua tabela." |
| 40–48 min | Conferir resultado final no quadro | "Quem chegou em resultado = 15? Quem errou? Vamos ver ONDE o erro aconteceu." |
| 48–50 min | Reflexão: "Por que teste de mesa evita bugs?" | "Todo programador profissional faz isso mentalmente antes de rodar o código!" |

**📋 Guia do Aluno:**

```
┌──────────────────────────────────────────────────────────────┐
│  🧮 TESTE DE MESA — VOCÊ É O COMPUTADOR                     │
│                                                              │
│  EXEMPLO — Execute este algoritmo:                           │
│                                                              │
│  1: inteiro x, y, soma                                       │
│  2: x = 3                                                    │
│  3: y = 7                                                    │
│  4: soma = x + y                                             │
│  5: x = soma - 2                                             │
│  6: escreva(x, soma)                                         │
│                                                              │
│  SUA TABELA:                                                 │
│  ┌──────┬─────┬─────┬──────┬─────────────────────────────┐  │
│  │ Linha│  x  │  y  │ soma │ Saída (tela)                │  │
│  ├──────┼─────┼─────┼──────┼─────────────────────────────┤  │
│  │  1   │  ?  │  ?  │  ?   │                             │  │
│  │  2   │  3  │  ?  │  ?   │                             │  │
│  │  3   │  3  │  7  │  ?   │                             │  │
│  │  4   │  3  │  7  │  10  │                             │  │
│  │  5   │  8  │  7  │  10  │                             │  │
│  │  6   │  8  │  7  │  10  │ 8 10                        │  │
│  └──────┴─────┴─────┴──────┴─────────────────────────────┘  │
│                                                              │
│  REGRA: A cada atribuição (=), o valor ANTERIOR é APAGADO!  │
└──────────────────────────────────────────────────────────────┘
```

**Materiais necessários:** Quadro, giz/marcador, caderno, lápis/caneta, borracha

---

#### Atividade B2: "Algoritmo da Receita de Bolo"

> **Conexão curricular:** Semanas 1-3 | Técnica: Representação de algoritmos em pseudocódigo

**📋 Roteiro do Professor (40 min):**

| Tempo | Ação | Fala sugerida |
|:-----:|------|---------------|
| 0–5 min | Perguntar: "Alguém sabe fazer um bolo de caneca?" | "Vou pedir para alguém ditar a receita e vamos TRANSFORMAR em algoritmo" |
| 5–10 min | Um aluno dita, professora escreve no quadro em linguagem natural | "Percebam: isso já é um algoritmo! Tem sequência, tem decisão (se queimar...), tem repetição (mexer até...)" |
| 10–20 min | Reescrever a receita usando SEQUÊNCIA, DECISÃO (se/senão) e REPETIÇÃO (enquanto) | "Onde tem decisão aqui? 'Se não tiver chocolate, use achocolatado' — isso é um IF!" |
| 20–35 min | Cada dupla escreve uma receita diferente em pseudocódigo formal | "Escolham: receita de miojo, café, ou fazer pipoca. Usem SE, SENÃO e ENQUANTO!" |
| 35–40 min | 2-3 duplas leem suas "receitas algorítmicas" | "A turma vai testar: tem ambiguidade? Falta algum passo? Dá pra seguir cegamente?" |

**Materiais necessários:** Quadro, caderno, caneta

---

#### Atividade B3: "Ordenação Humana" (BubbleSort e SelectionSort)

> **Conexão curricular:** Semana 16 | Técnica: Algoritmos de ordenação com cinestesia

**📋 Roteiro do Professor (50 min):**

| Tempo | Ação | Fala sugerida |
|:-----:|------|---------------|
| 0–5 min | Pedir 8 voluntários. Dar um cartão com número aleatório para cada | "Vocês são os DADOS. A turma vai ordenar vocês seguindo um ALGORITMO." |
| 5–8 min | Explicar BubbleSort: comparar vizinhos e trocar se necessário | "Regra: compare os dois primeiros. O maior vai para a direita. Repita até o fim." |
| 8–20 min | Turma dirige a ordenação gritando "TROCA!" ou "MANTÉM!" | "Passada 1 completa! O maior já está no final. Vamos de novo do início..." |
| 20–25 min | Anotar: quantas comparações? Quantas trocas? | "Contem! Foram 28 comparações e 15 trocas. Isso é EFICIÊNCIA do algoritmo." |
| 25–30 min | Embaralhar de novo. Agora: SelectionSort | "Regra diferente: encontrem o MENOR de todos e coloquem na posição 1. Depois o menor dos restantes..." |
| 30–42 min | Executar SelectionSort com os mesmos voluntários | "Percebam: menos trocas, mas mesma quantidade de comparações!" |
| 42–48 min | Comparar os dois algoritmos no quadro | "Qual foi mais rápido? Qual fez menos trocas? E se já estivesse quase ordenado?" |
| 48–50 min | Registrar no caderno: pseudocódigo dos dois algoritmos | "Agora que viram com o corpo, ESCREVAM o passo a passo" |

**📋 Guia do Aluno:**

```
┌──────────────────────────────────────────────────────────────┐
│  🏃 ORDENAÇÃO HUMANA — VOCÊS SÃO OS DADOS!                  │
│                                                              │
│  BUBBLESORT:                                                 │
│  1. Compare o 1º com o 2º → troque se 1º > 2º              │
│  2. Compare o 2º com o 3º → troque se 2º > 3º              │
│  3. Continue até o final da fila                             │
│  4. O MAIOR já está no lugar certo (final)                  │
│  5. Repita do início, ignorando o último                    │
│  6. Pare quando nenhuma troca for necessária                │
│                                                              │
│  SELECTIONSORT:                                              │
│  1. Olhe TODOS e encontre o menor                           │
│  2. Coloque o menor na posição 1                            │
│  3. Dos restantes, encontre o menor                         │
│  4. Coloque na posição 2                                    │
│  5. Repita até ordenar tudo                                 │
│                                                              │
│  📝 REGISTRE: Quantas comparações? Quantas trocas?          │
└──────────────────────────────────────────────────────────────┘
```

**Materiais necessários:** 8 cartões grandes com números (ex: 47, 12, 85, 3, 66, 29, 54, 8), espaço para fila

---

#### Atividade B4: "Code Review Humano"

> **Conexão curricular:** Semanas 7-14 | Técnica: Revisão de código (prática profissional real)

**📋 Roteiro do Professor (40 min):**

| Tempo | Ação | Fala sugerida |
|:-----:|------|---------------|
| 0–5 min | Distribuir folha impressa com código contendo 5 BUGS | "Este código tem EXATAMENTE 5 erros. Vocês são os revisores — encontrem e corrijam!" |
| 5–8 min | Explicar tipos de erro: sintaxe, lógica, semântico | "Erro de sintaxe: falta fechar }. Erro de lógica: condição invertida. Erro semântico: variável com nome errado." |
| 8–25 min | Duplas analisam o código, marcam erros com caneta vermelha | Circular: "Quantos encontraram? Faltam mais! Olhem a linha do loop..." |
| 25–35 min | Correção coletiva no quadro — cada dupla apresenta 1 erro | "Esse erro causaria o quê na execução? Travaria? Daria resultado errado? Ou nem rodaria?" |
| 35–40 min | Discussão: "No mercado, code review salva empresas" | "No Google, NENHUM código vai para produção sem pelo menos 2 revisores. É isso que vocês estão praticando!" |

**Materiais necessários:** Folha impressa com código (5 erros plantados), caneta vermelha, quadro

---

#### Atividade B5: "Fluxograma no Quadro" (Construção Coletiva)

> **Conexão curricular:** Semana 2 | Técnica: Fluxogramas — simbologia padrão

**📋 Roteiro do Professor (50 min):**

| Tempo | Ação | Fala sugerida |
|:-----:|------|---------------|
| 0–5 min | Desenhar símbolos no quadro: retângulo, losango, paralelogramo, oval | "Estes são os 4 tijolos de qualquer fluxograma. Vamos construir um SISTEMA REAL juntos." |
| 5–10 min | Definir o sistema: Caixa Eletrônico (saque) | "O que acontece quando você tenta sacar dinheiro? Vamos mapear CADA decisão." |
| 10–40 min | Construção coletiva: professora desenha, turma decide os caminhos | "Inseriu a senha. E agora? O que o sistema verifica? O que acontece se errar 3 vezes?" |
| 40–48 min | Cada aluno copia o fluxograma completo no caderno | "Copiem com CAPRICHO — isso vale nota de participação!" |
| 48–50 min | Desafio: "Que cenário faltou? Limite de saque? Sem papel?" | "Todo sistema real tem dezenas de casos. Nós cobrimos os principais!" |

**Materiais necessários:** Quadro grande, giz/marcadores coloridos (2-3 cores), caderno do aluno

---

#### Atividade B6: "Jogo da Condição" (Cartas IF/ELSE)

> **Conexão curricular:** Semanas 7-9 | Técnica: Estruturas condicionais com gamificação

**📋 Roteiro do Professor (35 min):**

| Tempo | Ação | Fala sugerida |
|:-----:|------|---------------|
| 0–5 min | Distribuir baralho de cartas com condições e ações | "Cada carta tem uma CONDIÇÃO e uma AÇÃO. Vocês são o processador — executem a lógica!" |
| 5–8 min | Explicar as regras do jogo | "Sorteie uma carta de CONTEXTO e uma de CONDIÇÃO. Execute a AÇÃO correta baseado no resultado!" |
| 8–28 min | Rodadas do jogo: aluno sorteia, turma valida a resposta | "Carta: 'SE idade >= 18 ENTÃO pode votar'. Contexto: idade = 16. O que acontece?" |
| 28–33 min | Rodada de cartas com E/OU (condições compostas) | "Agora ficou difícil: 'SE nota >= 7 E faltas < 25% ENTÃO aprovado'. Contexto: nota=8, faltas=30%..." |
| 33–35 min | Reflexão: "Toda decisão da sua vida é um IF/ELSE!" | "Decidir se leva guarda-chuva: SE previsão == chuva OU céu está nublado ENTÃO levar" |

**📋 Guia do Aluno:**

```
┌──────────────────────────────────────────────────────────────┐
│  🃏 JOGO DA CONDIÇÃO — CARTAS IF/ELSE                        │
│                                                              │
│  CARTA DE CONTEXTO (exemplo):                                │
│  ┌─────────────────────────┐                                 │
│  │ idade = 16              │                                 │
│  │ nota = 8.5              │                                 │
│  │ saldo = 150.00          │                                 │
│  └─────────────────────────┘                                 │
│                                                              │
│  CARTA DE CONDIÇÃO (exemplo):                                │
│  ┌─────────────────────────────────────────┐                 │
│  │ SE idade >= 18 ENTÃO                    │                 │
│  │    escreva("Pode votar")               │                 │
│  │ SENÃO                                   │                 │
│  │    escreva("Não pode votar ainda")     │                 │
│  └─────────────────────────────────────────┘                 │
│                                                              │
│  SUA RESPOSTA: Executar o ramo SENÃO → "Não pode votar ainda"│
│  (porque 16 NÃO é >= 18)                                    │
└──────────────────────────────────────────────────────────────┘
```

**Materiais necessários:** Baralho de cartas impressas (20 cartas de contexto + 20 de condição), quadro

---

### 📊 Opção C: Estudo de Caso / PBL (Problem-Based Learning)

> 🎯 **Objetivo:** Analisar casos reais onde LÓGICA DE PROGRAMAÇÃO teve impacto no mundo real — tanto desastres causados por bugs quanto soluções brilhantes de algoritmos.

#### Caso 1: "Bug do Therac-25 — Quando um erro de lógica mata"

**Contexto para discussão:**
Entre 1985-1987, a máquina de radioterapia Therac-25 aplicou doses letais de radiação em 6 pacientes, matando 3. A causa? Um erro de LÓGICA no software — uma condição de corrida (race condition) onde o operador podia mudar configurações mais rápido do que o software processava, resultando em radiação sem o filtro de segurança.

**Material para imprimir/projetar:**
- O que é uma race condition (explicação simplificada com fluxograma)
- Pseudocódigo simplificado do bug (variável verificada ANTES de ser atualizada)
- Timeline dos acidentes e investigação

**Perguntas para debate (30 min):**
1. Olhando o pseudocódigo simplificado: onde está o erro de lógica? (Dica: a verificação de segurança acontece na ordem errada)
2. Se VOCÊ fosse o programador e fizesse um TESTE DE MESA, teria encontrado o bug? Como?
3. Por que "funcionar na maioria das vezes" não é suficiente para software crítico?
4. Que ESTRUTURA CONDICIONAL estava faltando para prevenir o acidente?

---

#### Caso 2: "Algoritmo do GPS — Dijkstra e o mapa da sua cidade"

**Contexto para discussão:**
Todo app de GPS (Google Maps, Waze) usa o algoritmo de Dijkstra (1956) para encontrar o caminho mais curto. Edsger Dijkstra inventou o algoritmo em 20 MINUTOS sentado num café em Amsterdã, usando papel e caneta — sem computador!

**Material para imprimir/projetar:**
- Mapa simplificado do bairro da escola (5-7 pontos com distâncias)
- Passo a passo do algoritmo de Dijkstra aplicado ao mapa
- Comparação: "força bruta" (testar TODOS os caminhos) vs Dijkstra

**Perguntas para debate (30 min):**
1. No mapa do bairro: encontrem o caminho mais curto da escola até a parada de ônibus usando Dijkstra
2. Quantos caminhos possíveis existem? (Mostrar que sem algoritmo, seria impossível calcular em cidades grandes)
3. O Waze adiciona "pesos" nas ruas (trânsito, lombada, buraco). Como isso muda o algoritmo?
4. Que estrutura de dados vocês usariam para representar o mapa? (Grafo → Matriz de adjacência)

---

#### Caso 3: "Por que o app travou?" (Análise de stack trace)

**Contexto para discussão:**
Um app fictício "EscolaApp" travou durante a matrícula online e 500 alunos ficaram sem acesso. A equipe de desenvolvimento recebeu o seguinte relatório de erro. Vocês são os investigadores!

**Material para imprimir/projetar:**
```
ERRO: ArrayIndexOutOfBoundsException
Arquivo: Matricula.java, linha 47
Mensagem: "Index 30 out of bounds for length 30"
Contexto: vetor_turmas[30] → vetor declarado com tamanho 30 (índices 0 a 29)

Código problemático (simplificado):
  para (i = 0; i <= 30; i++) {    // ← ERRO AQUI: deveria ser i < 30
      vetor_turmas[i] = ...
  }
```

**Perguntas para debate (30 min):**
1. Qual é o erro? (Off-by-one: `<=` deveria ser `<`)
2. Por que vetores começam em 0 e isso confunde programadores?
3. Como um TESTE DE MESA teria encontrado esse bug?
4. Que TESTE AUTOMATIZADO vocês escreveriam para prevenir isso no futuro?

---

### 📊 Rubrica de Avaliação Adaptada

> 🎯 **Mesmos critérios, independente da modalidade.** O aluno não é prejudicado pela falta de laboratório.

| Critério | Laboratório (PC) | BYOD (Smartphone) | Desplugada (Papel) | PBL (Debate) |
|----------|:-:|:-:|:-:|:-:|
| **Lógica correta** (algoritmo resolve o problema) | Código executa sem erros | Código executa no Replit/Portugol | Teste de mesa com resultado correto | Identificação correta do bug/solução |
| **Estruturas adequadas** (usou if/for/while corretos) | Estruturas no código | Estruturas no código mobile | Estruturas escritas no caderno | Explicação de qual estrutura resolve |
| **Resolução de problemas** (decomposição, abstração) | Programa completo | Programa completo mobile | Fluxograma + pseudocódigo correto | Análise completa do caso |
| **Teste/Validação** (verificou se funciona) | Output correto no console | Screenshot do resultado | Teste de mesa conferido | Argumentação com evidências |
| **Comunicação** (explica o raciocínio) | Comentários no código | Comentários no código | Explicação oral da solução | Participação ativa no debate |

**Pontuação:** Cada critério vale 2,0 pontos — Total: 10,0

---

### 🖨️ Kit de Materiais para Impressão

| Material | Quando usar | Quantidade |
|----------|-------------|:----------:|
| Algoritmos com 5 bugs para Code Review | Atividade B4 | 1 por dupla |
| Cartas IF/ELSE (contexto + condição) | Atividade B6 | 1 baralho por turma |
| Cartões numéricos para Ordenação Humana | Atividade B3 | 8-10 cartões grandes |
| Template de Teste de Mesa (tabela em branco) | Atividade B1 | 1 por aluno |
| Caso "Therac-25" (resumo 1 página) | Opção C — Caso 1 | 1 por grupo |
| Caso "Dijkstra/GPS" (mapa do bairro) | Opção C — Caso 2 | 1 por grupo |
| Caso "App travou" (stack trace) | Opção C — Caso 3 | 1 por dupla |
| Rubrica de avaliação (para autoavaliação) | Todas as opções | 1 por aluno |

> 💡 **Dica para a professora:** Os materiais de Code Review e Cartas IF/ELSE podem ser reutilizados o semestre inteiro — plastifique-os! O investimento de R$20 em plastificação rende 6 meses de aulas de contingência.

---

<p align="center">
  <strong>🧠 Lembre-se: Lógica é como um músculo — quanto mais pratica, mais forte fica!</strong><br/>
  <em>Material elaborado para Lógica e Pensamento Computacional — ETE Pernambuco — 2026.2</em>
</p>
