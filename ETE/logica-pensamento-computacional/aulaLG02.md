# 🏛️ MANUAL UNIVERSAL DE LÓGICA DE PROGRAMAÇÃO E PENSAMENTO COMPUTACIONAL

**Prof. Dr. em Ciência da Computação — Especialista em Didática de Algoritmos**

---

## 🎯 NOTA DE BOAS-VINDAS E MENTORIA DIDÁTICA

Caro(a) estudante, seja bem-vindo(a) à fundação de toda a Tecnologia da Informação.

Muitos iniciantes cometem o erro de acreditar que "aprender a programar" é memorizar comandos em Python, JavaScript, C# ou Java. Isso é equivalente a acreditar que "escrever uma grande obra literária" consiste apenas em memorizar o dicionário. **As linguagens de programação são apenas ferramentas gramaticais; a verdadeira arte está na Lógica de Programação e no Pensamento Computacional.**

O objetivo deste manual é ensinar você a **PENSAR COMO UM PROGRAMADOR**. Uma vez que sua mente aprenda a estruturar o raciocínio em etapas lógicas, algoritmos e modelos abstratos, você será capaz de aprender **qualquer linguagem de programação** no futuro em questão de dias, apenas adaptando a sintaxe (os símbolos e palavras-chave).

Prepare seu caderno, abra sua mente para o raciocínio analítico e bons estudos!

---

# MÓDULO 1: Fundamentos do Pensamento Computacional (A Mente do Programador)

O Pensamento Computacional é um método humano de resolução de problemas que permite formular questões e projetar soluções de forma que um agente processador (seja um computador ou outro humano) possa executá-las de maneira eficiente. Ele é sustentado por **4 pilares universais**.

---

## 1.1 Decomposição

### 1. 🧠 Conceito Universal & Analogia do Mundo Real

A **Decomposição** é a habilidade analítica de fracionar um problema complexo, grande ou aparentemente intratável em subproblemas menores, independentes e facilmente gerenciáveis.

Quando tentamos resolver um problema gigante de uma só vez, a nossa capacidade de processamento cognitivo é sobrecarregada. Ao dividir o problema em partes menores, podemos resolver cada uma sequencialmente ou em paralelo, reduzindo a complexidade total. Em engenharia de software, este princípio é conhecido pela máxima *"Dividir para Conquistar"*.

#### 💡 Analogia do Cotidiano: A Reforma de uma Casa

Imagine que você recebeu a missão de **"Reformar uma casa inteira"**. Tentar executar tudo ao mesmo tempo gera caos. Aplicar a decomposição significa focar em cômodos e etapas:

* *Subproblema 1:* Trocar o piso da cozinha.
* *Subproblema 2:* Pintar as paredes da sala.
* *Subproblema 3:* Revisar a fiação elétrica do banheiro.
* *Subproblema 4:* Substituir o telhado do sótão.

Resolvendo cada cômodo individualmente, a reforma completa é concluída com sucesso.

---

### 2. 📐 Representação Visual (Fluxograma & Pseudocódigo)

#### 📊 Diagrama de Decomposição (Visão de Blocos)

```
                  [ PROBLEMA GERAL: Gerenciar uma Biblioteca ]
                                       │
        ┌──────────────────────────────┼──────────────────────────────┐
        ▼                              ▼                              ▼
[ Subproblema A ]              [ Subproblema B ]              [ Subproblema C ]
 Cadastrar Livros               Cadastrar Usuários             Controlar Empréstimos
  ├── Ler Título                 ├── Ler Nome                   ├── Buscar Livro
  ├── Ler Autor                  ├── Ler CPF                    ├── Buscar Usuário
  └── Gerar Código ID            └── Gerar Matrícula            └── Registrar Data Devolução

```

#### ✍️ Pseudocódigo / Portugol

```portugol
// Algoritmo: Decomposição do Processo de Empréstimo
Algoritmo GerenciarEmprestimo
Inicio
    // Etapa 1: Processar Usuário (Subproblema A)
    Executar SubRotina_ValidarUsuario()
    
    // Etapa 2: Processar Livro (Subproblema B)
    Executar SubRotina_VerificarDisponibilidadeLivro()
    
    // Etapa 3: Finalizar Transação (Subproblema C)
    Executar SubRotina_RegistrarEmprestimo()
FimAlgoritmo

```

---

### 3. 🔤 Comparativo de Sintaxes (A Prova de Conceito)

Observe como a decomposição através de subrotinas (funções) mantém a **mesma estrutura lógica** em linguagens totalmente diferentes:

#### JavaScript (Node.js/Navegador)

```javascript
function processarEmprestimo() {
    validarUsuario();
    verificarDisponibilidadeLivro();
    registrarEmprestimo();
}

```

#### Python

```python
def processar_emprestimo():
    validar_usuario()
    verificar_disponibilidade_livro()
    registrar_emprestimo()

```

#### C# (.NET)

```csharp
void ProcessarEmprestimo() {
    ValidarUsuario();
    VerificarDisponibilidadeLivro();
    RegistrarEmprestimo();
}

```

> 🎓 **Dica do Professor:** Notou? A lógica de chamar três etapas ordenadas não muda. O que muda é apenas o uso das palavras `function`, `def` ou `void`, e o uso de chaves `{}` ou indentação.

---

### 4. ✏️ Exercício Prático Agnóstico

**Cenário:** Você precisa projetar o sistema de um **Caixa Eletrônico (ATM)** para a operação de **Saque em Dinheiro**.

Decomponha esse problema principal em **4 subproblemas sequenciais**. Em seguida, escreva a representação em Pseudocódigo dessa sequência de execução.

#### ✅ Gabarito e Explicação Passo a Passo

**1. Decomposição Analítica:**

* *Subproblema 1:* Autenticação do cliente (Validar cartão e senha).
* *Subproblema 2:* Verificação de saldo bancário (Garantir que a conta possui o valor desejado).
* *Subproblema 3:* Verificação do estoque de cédulas (Garantir que a máquina tem notas físicas).
* *Subproblema 4:* Entrega do dinheiro e atualização do saldo (Dispensar notas e debitar da conta).

**2. Pseudocódigo:**

```portugol
Algoritmo CaixaEletronico_Saque
Inicio
    Escreva("=== SISTEMA BANCÁRIO ===")
    Executar AutenticarCliente()
    Executar VerificarSaldoConta()
    Executar VerificarCedulasMaquina()
    Executar DispensarDinheiroEDebitar()
FimAlgoritmo

```

---

## 1.2 Reconhecimento de Padrões

### 1. 🧠 Conceito Universal & Analogia do Mundo Real

O **Reconhecimento de Padrões** é a capacidade de identificar similaridades, repetições, tendências ou estruturas comuns entre diferentes problemas.

Quando nos deparamos com um novo desafio, a mente treinada busca em sua "base de dados interna" soluções passadas para problemas parecidos. Isso evita que tenhamos que "reinventar a roda" a cada nova linha de código escrita, permitindo a reutilização de algoritmos genéricos e rotinas consagradas.

#### 💡 Analogia do Cotidiano: O Médico Diagnosticista

Um médico não inventa a medicina do zero para cada paciente que entra em seu consultório. Ao ouvir as queixas de um paciente (*Febre*, *Dor no Corpo*, *Coriza*, *Cansaço*), o médico reconhece um **padrão de sintomas** característico de um quadro viral (como a Gripe) e aplica o protocolo de tratamento já estabelecido para esse padrão.

---

### 2. 📐 Representação Visual (Fluxograma & Pseudocódigo)

#### ✍️ Pseudocódigo / Portugol (Padrão de Cálculo de Média Escolar)

```portugol
// Padrão Universal: Calcular Média Aritimética de N Valores
Algoritmo CalcularMediaPadrão
Var
    valor1, valor2, soma, media : Real
Inicio
    Leia(valor1)
    Leia(valor2)
    soma <- valor1 + valor2
    media <- soma / 2
    Escreva("A média calculada é: ", media)
FimAlgoritmo

```

---

### 3. 🔤 Comparativo de Sintaxes (A Prova de Conceito)

Abaixo aplicamos o **mesmo padrão de cálculo de média** para determinar a velocidade média de um veículo nas três linguagens:

#### JavaScript

```javascript
let distancia = 150;
let tempo = 2;
let velocidadeMedia = distancia / tempo;
console.log("Velocidade Média: " + velocidadeMedia);

```

#### Python

```python
distancia = 150
tempo = 2
velocidade_media = distancia / tempo
print("Velocidade Média:", velocidade_media)

```

#### C#

```csharp
double distancia = 150;
double tempo = 2;
double velocidadeMedia = distancia / tempo;
Console.WriteLine("Velocidade Média: " + velocidadeMedia);

```

---

### 4. ✏️ Exercício Prático Agnóstico

Identifique o padrão matemático e lógico comum para os seguintes dois problemas do mundo real:

* *Problema A:* Verificar se um número digitado é par ou ímpar.
* *Problema B:* Verificar se um ano digitado é bissexto (divisível por 4).

Qual é o operador matemático/conceito que resolve ambos os padrões? Escreva a resposta analítica.

#### ✅ Gabarito e Explicação Passo a Passo

**Resposta:** O padrão comum em ambos os problemas é a verificação da **divisibilidade exata entre dois números inteiros** através da análise do **Resto da Divisão (Módulo)**.

* No *Problema A*, um número é Par se o resto da sua divisão por `2` for igual a `0` (`numero % 2 == 0`).
* No *Problema B*, um ano é Bissexto se o resto da sua divisão por `4` for igual a `0` (`ano % 4 == 0`).

O operador conceitual é o **Operador de Módulo (`%` ou `MOD`)**.

---

## 1.3 Abstração

### 1. 🧠 Conceito Universal & Analogia do Mundo Real

A **Abstração** consiste em filtrar e ignorar os detalhes irrelevantes da realidade, concentrando-se estritamente nos aspectos essenciais necessários para resolver um problema específico através de um modelo ou simulação computacional.

O mundo real é infinitamente complexo. Se tentarmos representar absolutamente todos os detalhes de um objeto no computador, o software se tornará inviável e lento. Abstrair é criar uma **simplificação funcional da realidade**.

#### 💡 Analogia do Cotidiano: O Mapa do Metrô

Considere o mapa do metrô de uma grande metrópole. Ele não mostra a posição física das árvores nas ruas, a cor dos prédios acima do solo ou a altitude do terreno. Toda essa informação foi **abstraída (ignorada)** porque não ajuda o passageiro. O mapa mantém apenas o essencial: a sequência das estações, as linhas coloridas e os pontos de transbordo.

```
MUNDO REAL (Infinitos Detalhes)       MODELO ABSTRAÍDO (Apenas o Essencial)
- Cor do estofamento do carro        - Placa (Texto)
- Quantidade de poeira nos vidros ───> - Modelo (Texto)
- Pressão exata dos pneus            - Velocidade Atual (Número)
- Diâmetro dos parafusos do motor    - Status Ligado (Booleano)

```

---

### 2. 📐 Representação Visual (Pseudocódigo)

#### ✍️ Pseudocódigo / Portugol (Abstração de um Produto de Loja)

```portugol
// Abstração: Mantemos apenas os atributos que afetam o caixa da loja
Estrutura/Modelo Produto
    codigoIdentificador : Inteiro
    nome : Texto
    preco : Real
FimEstrutura

```

---

### 3. 🔤 Comparativo de Sintaxes (A Prova de Conceito)

Abaixo vemos a criação de um modelo abstraído para um `Cliente` de banco:

#### JavaScript

```javascript
const cliente = {
    cpf: "123.456.789-00",
    nome: "Ana Lima",
    saldo: 1500.50
};

```

#### Python

```python
cliente = {
    "cpf": "123.456.789-00",
    "nome": "Ana Lima",
    "saldo": 1500.50
}

```

#### C#

```csharp
class Cliente {
    public string Cpf = "123.456.789-00";
    public string Nome = "Ana Lima";
    public double Saldo = 1500.50;
}

```

---

### 4. ✏️ Exercício Prático Agnóstico

Imagine que você foi contratado por uma empresa de transporte por aplicativo (como Uber/99) para criar o modelo digital do **Usuário Passageiro**.

Liste 3 atributos que são **ESSENCIAIS** para o sistema e 3 atributos da vida real dessa mesma pessoa que devem ser **ABSTRAÍDOS (IGNORADOS)** por serem irrelevantes.

#### ✅ Gabarito e Explicação Passo a Passo

**1. Atributos Essenciais (Mantidos no Código):**

* *Nome do Passageiro* (para identificação pelo motorista).
* *Número de Telefone* (para contato de segurança).
* *Localização GPS Atual / Origem e Destino* (para cálculo da rota e valor da corrida).

**2. Atributos Irrelevantes (Abstraídos/Descartados):**

* *Cor dos olhos ou cabelo do passageiro*.
* *Comida favorita ou time de futebol do passageiro*.
* *Tamanho dos sapatos do passageiro*.

---

## 1.4 Algoritmos e Procedimentos

### 1. 🧠 Conceito Universal & Analogia do Mundo Real

Um **Algoritmo** é uma sequência finita, ordenada, clara e não-ambígua de instruções passo a passo, projetada para resolver um problema específico ou realizar uma tarefa.

As três propriedades obrigatórias de um algoritmo válido são:

1. **Finitude:** Ele deve ter um fim claro (não pode rodar para sempre sem propósito).
2. **Precisão:** Cada instrução deve ser exata e sem margem para interpretações dúbias.
3. **Efetividade:** Cada etapa deve ser capaz de ser executada em um tempo finito por um agente processador.

#### 💡 Analogia do Cotidiano: A Receita de Bolo

Uma receita culinária é um algoritmo perfeito.

* **Entradas (Inputs):** Ovos, farinha, açúcar, manteiga.
* **Instruções (Processamento):**
1. Quebre 3 ovos em uma tigela.
2. Adicione 2 xícaras de açúcar e bata por 5 minutos.
3. Adicione 3 xícaras de farinha e misture suavemente.
4. Leve ao forno pré-aquecido a 180°C por 40 minutos.


* **Saída (Output):** O bolo assado e pronto para consumo.

---

### 2. 📐 Representação Visual (Fluxograma & Pseudocódigo)

#### 📊 Fluxograma Convencional (Notação Flowgorithm)

```
       ( INÍCIO )
           │
           ▼
   [/ Ler Nota1, Nota2 /]
           │
           ▼
  [ Soma = Nota1 + Nota2 ]
           │
           ▼
  [ Media = Soma / 2 ]
           │
           ▼
  [\ Exibir Media \]
           │
           ▼
        ( FIM )

```

#### ✍️ Pseudocódigo / Portugol

```portugol
Algoritmo CalcularMediaFinal
Var
    nota1, nota2, media : Real
Inicio
    Escreva("Digite a primeira nota: ")
    Leia(nota1)
    Escreva("Digite a segunda nota: ")
    Leia(nota2)
    
    media <- (nota1 + nota2) / 2
    
    Escreva("A média final do aluno é: ", media)
FimAlgoritmo

```

---

### 3. 🔤 Comparativo de Sintaxes (A Prova de Conceito)

#### JavaScript

```javascript
let nota1 = 8.0;
let nota2 = 6.0;
let media = (nota1 + nota2) / 2;
console.log("A média final do aluno é: " + media);

```

#### Python

```python
nota1 = 8.0
nota2 = 6.0
media = (nota1 + nota2) / 2
print("A média final do aluno é:", media)

```

#### C#

```csharp
double nota1 = 8.0;
double nota2 = 6.0;
double media = (nota1 + nota2) / 2;
Console.WriteLine("A média final do aluno é: " + media);

```

---

### 4. ✏️ Exercício Prático Agnóstico

Escreva um algoritmo em **Pseudocódigo** que leia o valor de uma compra em reais e a quantidade de parcelas desejada, calcule o valor de cada parcela sem juros e exiba o resultado final para o cliente.

#### ✅ Gabarito e Explicação Passo a Passo

```portugol
Algoritmo CalcularParcelas
Var
    valorTotalCompra : Real
    quantidadeParcelas : Inteiro
    valorPorParcela : Real
Inicio
    Escreva("Digite o valor total da compra (R$): ")
    Leia(valorTotalCompra)
    
    Escreva("Digite a quantidade de parcelas desejada: ")
    Leia(quantidadeParcelas)
    
    // Processamento: divisão do valor pelas parcelas
    valorPorParcela <- valorTotalCompra / quantidadeParcelas
    
    Escreva("Sua compra será dividida em ", quantidadeParcelas, "x de R$ ", valorPorParcela)
FimAlgoritmo

```

---

# MÓDULO 2: Como o Computador Funciona por Baixo dos Panos

Para programar com maestria, você precisa entender como a CPU (Unidade Central de Processamento) e a Memória RAM trabalham juntas para executar suas instruções.

---

## 2.1 Memória e Endereçamento: Variáveis e Constantes

### 🧠 Conceito Universal & Analogia do Mundo Real

A **Memória RAM** do computador é uma gigantesca matriz de circuitos eletrônicos organizados em "caixas" sequenciais atreladas a endereços hexadecimais complexos (ex: `0x7FFF5FBFF01C`).

Como seria inviável para nós humanos memorizar esses endereços numéricos, as linguagens de programação nos permitem dar um **Nome (Identificador)** humanamente compreensível a esse espaço de memória.

* **Variável:** É um espaço reservado na memória RAM cujo valor interno **pode ser modificado** quantas vezes forem necessárias durante a execução do programa.
* **Constante:** É um espaço reservado na memória RAM cujo valor é atribuído no momento da sua criação e **NUNCA mais pode ser alterado** até o encerramento do programa.

#### 💡 Analogia do Cotidiano: O Armário com Caixas Etiquetadas

Pense na memória RAM como um **armário cheio de caixas com etiquetas**:

* A etiqueta gravada na caixa é o **Nome da Variável** (ex: `"idade"`).
* O objeto guardado dentro da caixa é o **Valor da Variável** (ex: o número `25`).
* Se a caixa for uma *Variável*, você pode abrir a gaveta, tirar o `25` e colocar o número `26`.
* Se a caixa for uma *Constante*, ela possui um lacre inviolável: o valor lá dentro nunca poderá ser trocado.

```
       MEMÓRIA RAM (Hardware)
┌───────────────────────────────────┐
│ Endereço Físico: 0x00041F         │
│ Nome/Etiqueta: "saldoConta"       │  <─── VARIÁVEL (Permite reescrita)
│ Valor Guardado: 2500.00           │
└───────────────────────────────────┘

```

---

## 2.2 Tipos de Dados Primitivos Universais

Para que a CPU saiba quantos bytes de memória RAM deve alocar para cada caixa, devemos informar o **Tipo de Dado**. Existem 4 tipos primitivos universais presentes em todas as linguagens:

| Tipo Primitivo Universal | Descrição Técnica | Exemplos do Mundo Real | Notação em Pseudocódigo |
| --- | --- | --- | --- |
| **Inteiro (`INTEGER`)** | Números inteiros, sem casas decimais (positivos, negativos ou zero). | `-5`, `0`, `18`, `2026` | `Inteiro` |
| **Decimal (`FLOAT` / `DOUBLE`)** | Números com casas decimais (ponto flutuante). | `3.14`, `-12.50`, `1.85` | `Real` |
| **Texto (`STRING` / `CHAR`)** | Sequências de caracteres alfanuméricos (letras, símbolos, números como texto). | `"Maria"`, `"Rua A, 123"`, `"a"` | `Texto` / `Cadeia` |
| **Booleano (`BOOLEAN`)** | Valores lógicos binários de dois estados. | `VERDADEIRO` (`true`) / `FALSO` (`false`) | `Logico` |

---

## 2.3 Representação Agnóstica de Algoritmos

Símbolos padronizados utilizados em fluxogramas convencionais (ferramenta **Flowgorithm**):

| Símbolo Gráfico | Nome da Forma | Função Lógica |
| --- | --- | --- |
| **( OVAL / ELIPSE )** | Terminal | Indica o **INÍCIO** ou o **FIM** do algoritmo. |
| **[/ PARALELOGRAMO /]** | Entrada de Dados | Leitura de dados via teclado/arquivo pelo usuário. |
| **[\ PARALELOGRAMO ]** | Saída de Dados | Exibição de informações na tela ou impressora. |
| **[ RETÂNGULO ]** | Processamento | Atribuições de variáveis, cálculos matemáticos e operações internas. |
| **< LOSANGO >** | Decisão / Condição | Avalia uma expressão lógica retornando **SIM/VERDADEIRO** ou **NÃO/FALSO**. |
| **───> (SETAS)** | Fluxo de Controle | Conectam as formas indicando a ordem exata de execução do programa. |

---

### 🔤 Comparativo de Sintaxes de Declaração de Variáveis

#### JavaScript

```javascript
const PI = 3.14159;  // Constante
let idade = 25;       // Variável do tipo Número (Inteiro)
let preco = 99.90;    // Variável do tipo Número (Decimal)
let nome = "Carlos";  // Variável do tipo Texto (String)
let ativo = true;     // Variável do tipo Booleano

```

#### Python

```python
PI = 3.14159          # Constante por convenção
idade = 25            # Variável Inteira (int)
preco = 99.90         # Variável Decimal (float)
nome = "Carlos"       # Variável Texto (str)
ativo = True          # Variável Booleana (bool)

```

#### C#

```csharp
const double PI = 3.14159; // Constante
int idade = 25;            // Variável Inteira
double preco = 99.90;      // Variável Decimal
string nome = "Carlos";    // Variável Texto
bool ativo = true;         // Variável Booleana

```

---

### ✏️ Exercício Prático Agnóstico

Dado o seguinte problema: *"Um sistema precisa cadastrar o código de identificação de um produto (número inteiro), seu nome (texto), a quantidade em estoque (número inteiro), se ele está em promoção (verdadeiro ou falso) e o valor do desconto percentual fixo de 10% que nunca se altera"*.

Escreva a declaração em **Pseudocódigo** das variáveis e da constante com seus respectivos tipos primitivos corretos.

#### ✅ Gabarito e Explicação Passo a Passo

```portugol
Algoritmo CadastrarProduto
Var
    // Variáveis (Modificáveis)
    codigoProduto : Inteiro
    nomeProduto : Texto
    quantidadeEstoque : Inteiro
    emPromocao : Logico
    
Constante
    // Constante (Imutável)
    PERCENTUAL_DESCONTO : Real <- 0.10
Inicio
    // Bloco de instruções...
FimAlgoritmo

```

---

# MÓDULO 3: Operadores e Expressões Universais

Operadores são os símbolos que instruem o computador a realizar computações matemáticas, comparações ou avaliações de condições lógicas sobre as variáveis.

---

## 3.1 Atribuição de Valores

### 🧠 Conceito Universal & Analogia do Mundo Real

A **Atribuição** é o ato de colocar um valor para ser armazenado dentro de uma variável.

É de extrema importância não confundir o operador de atribuição com a igualdade matemática tradicional!

* **`<-` (ou `=`) : ATRIBUIÇÃO.** Significa *"Esta variável RECEBE o resultado desta expressão"*. A avaliação sempre ocorre da **direita para a esquerda**.
* **`==` (ou `===`) : COMPARAÇÃO.** Significa *"Esta variável é IGUAL a este valor?"*. Retorna um booleano (`VERDADEIRO` ou `FALSO`).

#### 💡 Analogia do Cotidiano

A instrução `x <- x + 1` não faz sentido na matemática pura (onde $x = x + 1$ seria impossível). Mas na programação significa: *"Abra a caixa `x`, veja o número armazenado lá dentro, some 1 a esse número, e **guarde o novo resultado de volta** na mesma caixa `x`"*.

---

## 3.2 Operadores Aritméticos e Precedência

| Operador | Operação Matemática | Exemplo em Pseudocódigo | Resultado |
| --- | --- | --- | --- |
| `+` | Adição / Concatenação de texto | `10 + 5` | `15` |
| `-` | Subtração | `10 - 5` | `5` |
| `*` | Multiplicação | `10 * 5` | `50` |
| `/` | Divisão Real | `10 / 4` | `2.5` |
| `%` ou `MOD` | Módulo (Resto da divisão inteira) | `10 % 3` | `1` |

#### ⚠️ Ordem Universal de Precedência Matemática:

1. Expressões entre Parênteses: `()`
2. Multiplicação `*`, Divisão `/` e Módulo `%` (executados na ordem em que aparecem, da esquerda para a direita).
3. Adição `+` e Subtração `-`.

---

## 3.3 Operadores Relacionais / Comparação

São utilizados para comparar dois valores. O resultado de qualquer comparação relacional é **SEMPRE** um valor Booleano (`VERDADEIRO` ou `FALSO`).

| Operador Universal | Significado | Exemplo de Expressão | Resultado |
| --- | --- | --- | --- |
| `>` | Maior que | `10 > 5` | `VERDADEIRO` |
| `<` | Menor que | `3 < 2` | `FALSO` |
| `>=` | Maior ou igual a | `5 >= 5` | `VERDADEIRO` |
| `<=` | Menor ou igual a | `4 <= 2` | `FALSO` |
| `==` ou `=` | Igual a | `5 == 5` | `VERDADEIRO` |
| `!=` ou `<>` | Diferente de | `5 != 5` | `FALSO` |

---

## 3.4 Operadores Lógicos e Tabelas-Verdade

Permitem combinar duas ou mais expressões relacionais para formar decisões complexas.

### 1. Operador E Lógico (`AND` / `&&` / `E`)

Exige que **AMBAS** as condições sejam Verdadeiras para que o resultado final seja Verdadeiro.

| Expressão A | Expressão B | A AND B |
| --- | --- | --- |
| `V` | `V` | **`V`** |
| `V` | `F` | `F` |
| `F` | `V` | `F` |
| `F` | `F` | `F` |

---

### 2. Operador OU Lógico (`OR` / `||` / `OU`)

Basta que **PELO MENOS UMA** das condições seja Verdadeira para que o resultado seja Verdadeiro.

| Expressão A | Expressão B | A OR B |
| --- | --- | --- |
| `V` | `V` | **`V`** |
| `V` | `F` | **`V`** |
| `F` | `V` | **`V`** |
| `F` | `F` | `F` |

---

### 3. Operador NÃO Lógico (`NOT` / `!` / `NAO`)

Inverte o valor booleano da expressão.

| Expressão A | NOT A |
| --- | --- |
| `V` | **`F`** |
| `F` | **`V`** |

---

### 🔤 Comparativo de Sintaxes de Expressões Lógicas

Regra de Negócio: *"Um empréstimo é APROVADO se o cliente tiver idade maior ou igual a 18 E renda mensal maior ou igual a 3000"*.

#### JavaScript

```javascript
let aprovado = (idade >= 18) && (renda >= 3000);

```

#### Python

```python
aprovado = (idade >= 18) and (renda >= 3000)

```

#### C#

```csharp
bool aprovado = (idade >= 18) && (renda >= 3000);

```

---

### ✏️ Exercício Prático Agnóstico

Considere os seguintes valores das variáveis: `a = 10`, `b = 5`, `c = 20`.

Avalie o valor booleano final (`VERDADEIRO` ou `FALSO`) da seguinte expressão lógica combinada:
`resultado <- (a > b) E (c < a OU b == 5)`

#### ✅ Gabarito e Explicação Passo a Passo

1. Avaliar primeira parte: `(a > b)` ➔ `(10 > 5)` ➔ **`VERDADEIRO`**.
2. Avaliar sub-expressão interna do segundo grupo: `(c < a)` ➔ `(20 < 10)` ➔ **`FALSO`**.
3. Avaliar segunda sub-expressão: `(b == 5)` ➔ `(5 == 5)` ➔ **`VERDADEIRO`**.
4. Resolver o operador OU interno: `(FALSO OU VERDADEIRO)` ➔ **`VERDADEIRO`**.
5. Resolver o operador E principal: `(VERDADEIRO E VERDADEIRO)` ➔ **`VERDADEIRO`**.

**Resultado Final:** `VERDADEIRO`.

---

# MÓDULO 4: Controle de Fluxo de Execução (O Coração da Lógica)

Por padrão, o computador executa as instruções de forma **linear** (linha após linha, de cima para baixo). As estruturas de controle de fluxo alteram esse caminho, permitindo tomar desvios ou repetir tarefas ativamente.

---

## 4.1 Estruturas de Decisão (Condicionais)

### 1. Decisão Simples e Composta (`SE / SENÃO` | `IF / ELSE`)

#### 🧠 Conceito Universal & Analogia do Mundo Real

A condicional avalia uma expressão booleana. Se a condição for **Verdadeira**, o computador executa o bloco A. Se for **Falsa**, o computador salta o bloco A e (se houver um `SENÃO`) executa o bloco B.

##### 💡 Analogia do Cotidiano: O Semáforo de Trânsito

*"Se o semáforo estiver verde, avance com o carro. Senão, pare o carro e aguarde."*

#### 📊 Fluxograma Convencional (Decisão Composta)

```
          │
          ▼
    / Ler Idade /
          │
          ▼
     < Idade >= 18 > ────(SIM)───> [\ Exibir "Maior de Idade" \]
          │                                   │
       (NÃO)                                  │
          │                                   │
          ▼                                   │
[\ Exibir "Menor de Idade" \]                 │
          │                                   │
          └──────────────────┬────────────────┘
                             ▼
                          ( FIM )

```

#### ✍️ Pseudocódigo / Portugol

```portugol
Algoritmo VerificarMaioridade
Var
    idade : Inteiro
Inicio
    Leia(idade)
    Se (idade >= 18) Entao
        Escreva("Maior de Idade")
    Senao
        Escreva("Menor de Idade")
    FimSe
FimAlgoritmo

```

---

### 2. Decisão Múltipla (`ESCOLHA / CASO` | `SWITCH / CASE`)

Utilizada quando temos uma única variável comparada com **múltiplos valores fixos conhecidos**, evitando longas sequências de `SE / SENÃO IF` aninhados.

#### ✍️ Pseudocódigo / Portugol

```portugol
Algoritmo MenuCalculadora
Var
    opcao : Inteiro
Inicio
    Leia(opcao)
    Escolha (opcao)
        Caso 1:
            Escreva("Opção Escolhida: Somar")
        Caso 2:
            Escreva("Opção Escolhida: Subtrair")
        OutroCaso:
            Escreva("Opção Inválida!")
    FimEscolha
FimAlgoritmo

```

---

### 🔤 Comparativo de Sintaxes de Decisão

#### JavaScript

```javascript
if (idade >= 18) {
    console.log("Maior de Idade");
} else {
    console.log("Menor de Idade");
}

```

#### Python

```python
if idade >= 18:
    print("Maior de Idade")
else:
    print("Menor de Idade")

```

#### C#

```csharp
if (idade >= 18) {
    Console.WriteLine("Maior de Idade");
} else {
    Console.WriteLine("Menor de Idade");
}

```

---

## 4.2 Estruturas de Repetição (Laços / Loops)

Estruturas de repetição permitem executar o mesmo bloco de instruções **múltiplas vezes** até que uma condição de parada seja satisfeita.

### 1. Repetição Pré-testada (`ENQUANTO` | `WHILE`)

Avalia a condição **ANTES** de entrar no bloco. Se a condição for falsa logo na primeira verificação, o bloco **nunca** é executado.

#### ✍️ Pseudocódigo / Portugol

```portugol
Algoritmo ContagemEnquanto
Var
    contador : Inteiro
Inicio
    contador <- 1
    Enquanto (contador <= 3) Faca
        Escreva("Passo: ", contador)
        contador <- contador + 1 // Incrementar para evitar Loop Infinito!
    FimEnquanto
FimAlgoritmo

```

---

### 2. Repetição Pós-testada (`FAÇA... ENQUANTO` | `DO... WHILE`)

Avalia a condição **NO FINAL** do bloco. Isso garante que o bloco de instruções seja executado **PELO MENOS UMA VEZ**, independentemente da condição.

#### ✍️ Pseudocódigo / Portugol

```portugol
Algoritmo ValidarSenha
Var
    senha : Texto
Inicio
    Faca
        Escreva("Digite a senha correta: ")
        Leia(senha)
    Enquanto (senha != "1234")
    Escreva("Acesso Liberado!")
FimAlgoritmo

```

---

### 3. Repetição Contada (`PARA... DE... ATÉ` | `FOR`)

Ideal para quando sabemos **previamente a quantidade exata de repetições** que devem ocorrer. Gerencia a inicialização, a condição de parada e o incremento em uma única linha.

#### ✍️ Pseudocódigo / Portugol

```portugol
Algoritmo TabuadaCinco
Var
    i, resultado : Inteiro
Inicio
    Para i de 1 Ate 10 Faca
        resultado <- 5 * i
        Escreva("5 x ", i, " = ", resultado)
    FimPara
FimAlgoritmo

```

---

### 🔤 Comparativo de Sintaxes do Laço `FOR`

#### JavaScript

```javascript
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

```

#### Python

```python
for i in range(1, 11):
    print("5 x", i, "=", (5 * i))

```

#### C#

```csharp
for (int i = 1; i <= 10; i++) {
    Console.WriteLine("5 x " + i + " = " + (5 * i));
}

```

---

### ✏️ Exercício Prático Agnóstico

Escreva um algoritmo em **Pseudocódigo** utilizando a estrutura de repetição `ENQUANTO` que solicite ao usuário um número inteiro positivo e exiba uma contagem regressiva desse número até `0`.

#### ✅ Gabarito e Explicação Passo a Passo

```portugol
Algoritmo ContagemRegressiva
Var
    numero : Inteiro
Inicio
    Escreva("Digite um número para iniciar a contagem regressiva: ")
    Leia(numero)
    
    // O laço executa enquanto o número for maior ou igual a zero
    Enquanto (numero >= 0) Faca
        Escreva("Contagem: ", numero)
        numero <- numero - 1 // Decremento obrigatório
    FimEnquanto
    
    Escreva("BOOM! Contagem finalizada.")
FimAlgoritmo

```

---

# MÓDULO 5: Estruturas de Dados e Modularização

À medida que os softwares crescem, precisamos organizar grandes volumes de dados e reusar trechos de códigos complexos de forma elegante.

---

## 5.1 Vetores (Arrays Unidimensionais)

### 🧠 Conceito Universal & Analogia do Mundo Real

Um **Vetor (Array)** é uma estrutura de dados homogênea armazenada de forma contígua na memória RAM, capaz de guardar múltiplos valores sob o **mesmo nome de variável**.

Para acessar um valor específico dentro do vetor, utilizamos o seu **Índice Numérico (Index)**. Em quase todas as linguagens modernas, o primeiro elemento é guardado obrigatoriamente no **Índice 0**.

#### 💡 Analogia do Cotidiano: O Prédio de Apartamentos

Um vetor é como um **prédio de apartamentos**:

* O prédio inteiro possui um único nome/endereço (ex: `"Edifício Notas"`).
* Cada apartamento possui um número de andar (o *Índice*): `Notas[0]`, `Notas[1]`, `Notas[2]`.

```
Índices:      [ 0 ]   [ 1 ]   [ 2 ]   [ 3 ]
Conteúdo:   [  8.5  |  7.0  |  9.0  |  6.5  ]

```

---

### ✍️ Pseudocódigo / Portugol (Percorrendo um Vetor)

```portugol
Algoritmo LerNotasVetor
Var
    notas : Vetor[0..3] de Real
    i : Inteiro
Inicio
    // Atribuição direta
    notas[0] <- 8.5
    notas[1] <- 7.0
    notas[2] <- 9.0
    notas[3] <- 6.5
    
    // Percorrendo o vetor com laço FOR
    Para i de 0 Ate 3 Faca
        Escreva("Nota na posição ", i, ": ", notas[i])
    FimPara
FimAlgoritmo

```

---

## 5.2 Matrizes (Arrays Multidimensionais)

### 🧠 Conceito Universal & Analogia do Mundo Real

Uma **Matriz** é uma estrutura de dados bidimensional organizada em **Linhas e Colunas** ($N \times M$), comportando-se como uma tabela.

Para acessar uma posição na matriz, precisamos fornecer **duas coordenadas**: `Matriz[Linha][Coluna]`. A navegação completa exige **Laços Aninhados** (um laço `FOR` rodando dentro de outro laço `FOR`).

#### 💡 Analogia do Cotidiano: A Planilha do Excel ou Tabuleiro de Xadrez

Imagine uma **batalha naval** ou tabuleiro de xadrez: para localizar uma peça, você precisa da coordenada da Linha e da Coluna (ex: Linha 2, Coluna 3).

```
          Coluna 0   Coluna 1   Coluna 2
Linha 0 [    10    ,    20    ,    30    ]
Linha 1 [    40    ,    50    ,    60    ]

```

---

### ✍️ Pseudocódigo / Portugol (Matriz $2 \times 3$)

```portugol
Algoritmo MatrizExemplo
Var
    tabela : Matriz[0..1, 0..2] de Inteiro
    l, c : Inteiro
Inicio
    // Percorrendo a matriz com laços aninhados
    Para l de 0 Ate 1 Faca         // Laço das Linhas
        Para c de 0 Ate 2 Faca     // Laço das Colunas
            tabela[l, c] <- 100
            Escreva("Elemento [", l, ",", c, "] = ", tabela[l, c])
        FimPara
    FimPara
FimAlgoritmo

```

---

## 5.3 Procedimentos, Funções e Escopo

### 🧠 Conceito Universal & Analogia do Mundo Real

**Modularizar** significa dividir um algoritmo extenso em blocos reutilizáveis chamados **Subrotinas**, **Procedimentos** ou **Funções**.

* **Procedimento:** Bloco de código que executa uma tarefa sem devolver um valor direto de resposta.
* **Função:** Bloco de código que recebe dados de entrada, realiza um processamento e **devolve obrigatoriamente um valor de retorno** (`RETORNE`) para quem a chamou.
* **Parâmetros / Argumentos:** São as variáveis de entrada enviadas para dentro da função.
* **Passagem por Valor:** Uma cópia do dado é enviada. Modificar a variável dentro da função não altera a variável original do lado de fora.
* **Passagem por Referência:** O endereço de memória original é enviado. Qualquer alteração refletirá diretamente na variável original fora da função.

#### Escopo de Variáveis:

* **Escopo Global:** Variáveis declaradas no corpo principal do algoritmo, acessíveis por qualquer subrotina.
* **Escopo Local:** Variáveis declaradas dentro de uma função específica, existentes apenas durante a execução daquela função.

---

### ✍️ Pseudocódigo / Portugol (Criação de Função)

```portugol
// Definição da Função
Funcao Somar (num1 : Inteiro, num2 : Inteiro) : Inteiro
Var
    resultadoLocal : Inteiro
Inicio
    resultadoLocal <- num1 + num2
    Retorne resultadoLocal // Devolve o valor calculado
FimFuncao

// Algoritmo Principal
Algoritmo ProgramaPrincipal
Var
    total : Inteiro
Inicio
    // Chamada da função passando os argumentos 10 e 15
    total <- Somar(10, 15)
    Escreva("O resultado da soma é: ", total)
FimAlgoritmo

```

---

### 🔤 Comparativo de Sintaxes de Funções com Retorno

#### JavaScript

```javascript
function somar(num1, num2) {
    return num1 + num2;
}

let total = somar(10, 15);
console.log("O resultado é: " + total);

```

#### Python

```python
def somar(num1, num2):
    return num1 + num2

total = somar(10, 15)
print("O resultado é:", total)

```

#### C#

```csharp
int Somar(int num1, int num2) {
    return num1 + num2;
}

int total = Somar(10, 15);
Console.WriteLine("O resultado é: " + total);

```

---

### ✏️ Exercício Prático Agnóstico

Crie uma **Função** em **Pseudocódigo** chamada `CalcularImposto` que receba como parâmetro o `valorProduto` (Decimal). Se o valor do produto for maior que `100.00`, a função deve retornar o valor do imposto calculado em `10%` do valor do produto. Caso contrário, a função deve retornar `0.00` (isento).

#### ✅ Gabarito e Explicação Passo a Passo

```portugol
// Definição da Função Modular
Funcao CalcularImposto (valorProduto : Real) : Real
Var
    impostoCalculado : Real
Inicio
    Se (valorProduto > 100.00) Entao
        impostoCalculado <- valorProduto * 0.10
    Senao
        impostoCalculado <- 0.00
    FimSe
    
    // Retorno do valor para quem chamou a função
    Retorne impostoCalculado
FimFuncao

// Teste de Execução
Algoritmo TestarCalculoImposto
Var
    precoItem, valorImpostoFinal : Real
Inicio
    Escreva("Digite o valor do produto: ")
    Leia(precoItem)
    
    // Invocação da função
    valorImpostoFinal <- CalcularImposto(precoItem)
    
    Escreva("O valor do imposto devido é R$: ", valorImpostoFinal)
FimAlgoritmo

```

---

## 🎓 CONSIDERAÇÕES FINAIS DO PROFESSOR

Parabéns! Você concluiu a base universal do **Pensamento Computacional e Lógica de Programação**.

Ao longo deste manual, você aprendeu a:

1. Decompor problemas complexos, abstrair detalhes e identificar padrões repetitivos.
2. Compreender a alocação de memória RAM, variáveis, constantes e tipos primitivos de dados.
3. Manipular operadores aritméticos, relacionais e construir expressões condicionais com tabelas-verdade.
4. Alterar o fluxo de execução com estruturas de decisão e laços de repetição.
5. Organizar dados em vetores e matrizes, além de modularizar softwares com funções e escopos delimitados.

Você provou na prática que **as linguagens de programação (JavaScript, Python, C#, etc.) são apenas vestimentas para a mesma estrutura lógica de pensamento**.

Agora você está totalmente capacitado para escolher qualquer linguagem do mercado, dominar a sua sintaxe específica em poucas horas e se tornar um excelente Engenheiro de Software! Continue praticando os algoritmos no papel e em suas ferramentas de simulação. Bons estudos!