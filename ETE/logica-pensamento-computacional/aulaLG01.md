# 📘 MANUAL INTEGRAL DE LÓGICA DE PROGRAMAÇÃO E PENSAMENTO COMPUTACIONAL

**Prof. Dr. em Ciência da Computação e Especialista em Didática da Computação**

---

## 🏛️ APRESENTAÇÃO E DIRETRIZ DIDÁTICA

Seja bem-vindo(a) à ciência da solução sistemática de problemas. Aprender a programar não consiste em memorizar sintaxe de linguagens de computador, mas em **reestruturar sua forma de raciocinar**. A linguagem de programação — neste curso, o **JavaScript** — é apenas a ferramenta através da qual comunicamos nossas intenções lógicas à máquina.

Este material foi construído para guiá-lo da abstração analítica até a implementação técnica no ecossistema JavaScript moderno (Node.js/Navegador).

---

# MÓDULO 1: Os 4 Pilares do Pensamento Computacional e Modelagem

O Pensamento Computacional é uma habilidade de resolução de problemas que divide um desafio complexo em etapas compreensíveis para humanos e processáveis por máquinas.

---

### 1.1 Decomposição

#### 1. 📖 Explicação Expositiva e Detalhada

A **Decomposição** é o pilar que consiste em quebrar um problema grande, caótico ou complexo em subproblemas menores, independentes e gerenciáveis. Ao se deparar com uma tarefa monumental, o cérebro humano (e o computador) falha por sobrecarga de processamento. Ao fragmentar a demanda em microtarefas, reduzimos a complexidade cognitiva. Em engenharia de software, este princípio reflete o conceito de *"Dividir para Conquistar"*.

#### 2. 💡 Analogia Prática do Cotidiano

Pense na tarefa de **Organizar um Casamento para 500 pessoas**. Se você tentar resolver isso de uma só vez, o pânico é inevitável. Decompor significa dividir o evento em módulos:

* *Módulo 1:* Gastronomia (Menu, bebidas, bolo).
* *Módulo 2:* Local e Decoração (Flores, iluminação, espaço).
* *Módulo 3:* Música e Entretenimento (DJ, banda, sonorização).
* *Módulo 4:* Convites e Logística (Confirmação de presença, transporte).

Cada módulo pode ser planejado separadamente, tornando a execução viável.

#### 3. 📊 Representação Visual

```
                    [ PROBLEMA: Sistema de e-Commerce ]
                                    │
         ┌──────────────────────────┼──────────────────────────┐
         ▼                          ▼                          ▼
[ Módulo de Usuários ]     [ Módulo de Catálogo ]     [ Módulo de Pagamento ]
  ├── Autenticação           ├── Busca de produtos      ├── Validação do Cartão
  └── Perfil do Cliente      └── Cálculo de Frete       └── Emissão de NF

```

#### 4. 💻 Exemplo Prático em JavaScript

Demonstração de decomposição modular no processamento de um pedido de compras:

```javascript
// PROBLEMA DECOMPOTO EM 3 ETAPAS INDEPENDENTES

// Etapa 1: Validar se o produto está em estoque
function verificarEstoque(qtdDisponivel, qtdDesejada) {
    return qtdDisponivel >= qtdDesejada;
}

// Etapa 2: Calcular o valor total com frete
function calcularTotal(precoUnitario, quantidade, valorFrete) {
    const subtotal = precoUnitario * quantidade;
    return subtotal + valorFrete;
}

// Etapa 3: Confirmar a transação
function processarPedido(produto, qtd, estoque, preco, frete) {
    if (!verificarEstoque(estoque, qtd)) {
        return "Erro: Produto indisponível em estoque.";
    }
    const total = calcularTotal(preco, qtd, frete);
    return `Pedido processado com sucesso! Total a pagar: R$ ${total.toFixed(2)}`;
}

// Executando o fluxo decomposto
console.log(processarPedido("Notebook", 2, 5, 3500, 50));

```

#### 5. ✏️ Exercício Prático Dirigido

Você foi contratado para criar a lógica de um **Caixa Eletrônico**. Aplique o pilar da **Decomposição** enumerando em formato textual/algoritmo ao menos 4 subproblemas essenciais necessários para realizar a operação de **Saque em Dinheiro**.

#### 6. ✅ Resposta e Explicação Passo a Passo

**Subproblemas identificados:**

1. *Autenticação do Usuário:* Validar cartão e senha digitada.
2. *Verificação de Saldo Bancário:* Conferir se o saldo da conta é maior ou igual ao valor solicitado.
3. *Verificação de Cédulas Físicas:* Checar se o caixa eletrônico possui notas suficientes na máquina.
4. *Liberação do Dinheiro e Debito:* Dispensar as cédulas e atualizar/subtrair o saldo da conta do cliente.

---

### 1.2 Reconhecimento de Padrões

#### 1. 📖 Explicação Expositiva e Detalhada

O **Reconhecimento de Padrões** busca identificar semelhanças, repetições, tendências ou características comuns em problemas que já foram resolvidos anteriormente. Ao reconhecer que o subproblema atual é idêntico a um já conhecido, reutilizamos estratégias, algoritmos e rotinas testadas, evitando reinventar a roda.

#### 2. 💡 Analogia Prática do Cotidiano

Um **Médico ao Diagnosticar uma Gripe**. Ele não reinventa a medicina para cada paciente. O médico analisa sintomas repetitivos: febre + dor no corpo + coriza + dor de garganta. Ao reconhecer esse *padrão de sintomas*, ele prescreve o tratamento padrão para quadro gripal.

#### 3. 📊 Representação Visual

```
[Entrada: CPF]    ---> Validação: [9 dígitos + 2 verificadores]  ─┐
[Entrada: CNPJ]   ---> Validação: [12 dígitos + 2 verificadores] ├─ Padrão: Algoritmos de Modulo 11
[Entrada: Título] ---> Validação: [10 dígitos + 2 verificadores] ─┘

```

#### 4. 💻 Exemplo Prático em JavaScript

Reconhecendo o padrão de cálculo de impostos para produtos de diferentes categorias:

```javascript
// Padrão identificado: Todos os produtos aplicam uma taxa percentual sobre o valor base
function calcularImpostoPadrao(valorBase, taxaPercentual) {
    return valorBase * (taxaPercentual / 100);
}

// Reutilizando o mesmo padrão estrutural para categorias distintas
const impostoAlimentos = calcularImpostoPadrao(100, 5);  // Padrão: 5%
const impostoEletronicos = calcularImpostoPadrao(2000, 18); // Padrão: 18%
const impostoLuxo = calcularImpostoPadrao(5000, 30);      // Padrão: 30%

console.log(`Imposto Alimentos: R$ ${impostoAlimentos}`);
console.log(`Imposto Eletrônicos: R$ ${impostoEletronicos}`);
console.log(`Imposto Luxo: R$ ${impostoLuxo}`);

```

#### 5. ✏️ Exercício Prático Dirigido

Identifique o padrão matematicamente repetitivo na validação de notas escolares: para ser Aprovado o aluno precisa de média $\ge 7$, entre $5$ e $6.9$ está em Recuperação e $< 5$ Reprovado. Crie uma função JS que aplique esse padrão para 3 disciplinas diferentes.

#### 6. ✅ Resposta e Explicação Passo a Passo

```javascript
// A regra de decisão é um padrão fixo para qualquer disciplina
function avaliarStatusAluno(media) {
    if (media >= 7.0) {
        return "Aprovado";
    } else if (media >= 5.0) {
        return "Em Recuperação";
    } else {
        return "Reprovado";
    }
}

console.log(`Matemática (8.5): ${avaliarStatusAluno(8.5)}`);
console.log(`História (6.0): ${avaliarStatusAluno(6.0)}`);
console.log(`Física (4.2): ${avaliarStatusAluno(4.2)}`);

```

---

### 1.3 Abstração

#### 1. 📖 Explicação Expositiva e Detalhada

A **Abstração** consiste em ocultar detalhes irrelevantes e focar estritamente nas características essenciais do problema em questão. Para criar modelos digitais, é preciso ignorar o ruído da realidade. Se tentarmos computar absolutamente todas as variáveis do mundo real, o sistema se torna computacionalmente inviável.

#### 2. 💡 Analogia Prática do Cotidiano

Um **Mapa do Metrô**. O mapa geográfico real de uma cidade contém relevo, curvas exatas das ruas, árvores e prédios. Porém, para o passageiro do metrô, esses detalhes são irrelevantes e atrapalham. O mapa do metrô *abstrai* a geografia e mostra apenas o essencial: estações, conexões de linhas e ordem das paradas através de linhas retas e coloridas.

#### 3. 📊 Representação Visual

```
MUNDO REAL (Complexo)                MODELO ABSTRAÍDO (Essencial)
Carro Real:                           Objeto Carro no Código:
- Cor da estofamento                 - Placa (String)
- Marca de pneu                      - Modelo (String)
- Poeira no para-brisa        ───>   - VelocidadeAtual (Number)
- Número de série dos parafusos      - Ligar/Desligar (Boolean)

```

#### 4. 💻 Exemplo Prático em JavaScript

Abstraindo uma conta bancária para um sistema financeiro:

```javascript
// Abstração de uma Conta Bancária: Mantemos apenas o estritamente necessário para operações financeiras
class ContaBancariaAbstraida {
    constructor(titular, numeroConta) {
        this.titular = titular;          // Dado Essencial
        this.numeroConta = numeroConta;  // Dado Essencial
        this.saldo = 0;                  // Estado essencial
    }

    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$ ${valor} realizado. Saldo atual: R$ ${this.saldo}`);
    }

    // Detalhes como "cor do cartão físicas", "foto do banco", "biometria digital" foram abstraídos
}

const minhaConta = new ContaBancariaAbstraida("Maria Silva", "12345-6");
minhaConta.depositar(500);

```

#### 5. ✏️ Exercício Prático Dirigido

Imagine que você está criando um aplicativo de **Uber/Taxi**. Liste 3 dados **essenciais** do Veículo que precisam estar no código e 3 dados do Veículo que devem ser **abstraídos (ignorados)** por serem irrelevantes para a corrida.

#### 6. ✅ Resposta e Explicação Passo a Passo

* **3 Dados Essenciais:**
1. *Placa do Veículo* (para identificação pelo passageiro).
2. *Modelo e Cor* (para localização visual).
3. *Localização GPS atual* (para calcular rota e chegada).


* **3 Dados Irrelevantes (Abstraídos):**
1. *Data da última troca de óleo do motor*.
2. *Tipo de estofamento dos bancos*.
3. *Música preferida tocando no rádio do motorista*.



---

### 1.4 Algoritmos e Procedimentos

#### 1. 📖 Explicação Expositiva e Detalhada

Um **Algoritmo** é uma sequência finita, ordenada e não ambígua de instruções passo a passo, projetada para resolver um problema específico ou executar uma tarefa. Um algoritmo recebe dados de entrada (*Input*), executa o processamento (*Processing*) e produz um resultado de saída (*Output*).

#### 2. 💡 Analogia Prática do Cotidiano

Uma **Receita de Bolo de Cenoura**.

* *Entradas:* Ovos, cenouras, açúcar, farinha, óleo, fermento.
* *Instruções Finitas e Ordenadas:*
1. Descasque as cenouras.
2. Bata as cenouras, os ovos e o óleo no liquidificador por 3 minutos.
3. Misture a massa batida com a farinha e o açúcar em uma tigela.
4. Adicione o fermento e mexa suavemente.
5. Despeje em uma forma untada e asse por 40 minutos a 180°C.


* *Saída:* Bolo pronto.

#### 3. 📊 Representação Visual

```
 ┌───────────┐      ┌─────────────────────────┐      ┌──────────┐
 │ ENTRADA   │ ───> │  PROCESSAMENTO          │ ───> │  SAÍDA   │
 │ (Inputs)  │      │  (Algoritmo / Passos)   │      │ (Output) │
 └───────────┘      └─────────────────────────┘      └──────────┘

```

#### 4. 💻 Exemplo Prático em JavaScript

Algoritmo para calcular a média e situação de aprovação de um estudante:

```javascript
// Algoritmo: Cálculo de Média Escolar
function algoritmoMediaEscolar(nota1, nota2) {
    // Passo 1: Receber as entradas (Parâmetros)
    // Passo 2: Calcular a soma das notas
    const soma = nota1 + nota2;
    
    // Passo 3: Dividir a soma pela quantidade de notas (2)
    const media = soma / 2;
    
    // Passo 4: Determinar o resultado com base no valor da média
    let resultado = "";
    if (media >= 7) {
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado";
    }
    
    // Passo 5: Retornar a saída
    return `Média final: ${media.toFixed(1)} - Situação: ${resultado}`;
}

console.log(algoritmoMediaEscolar(8.5, 6.5));

```

#### 5. ✏️ Exercício Prático Dirigido

Escreva os passos textuais do algoritmo necessário para calcular o valor de desconto de um produto comprado durante a Black Friday (Entradas: Preço Original e Porcentagem de Desconto).

#### 6. ✅ Resposta e Explicação Passo a Passo

1. Receber o `precoOriginal` do produto.
2. Receber o `percentualDesconto`.
3. Calcular o valor do desconto dividindo o `percentualDesconto` por 100 e multiplicando pelo `precoOriginal`.
4. Subtrair o valor do desconto do `precoOriginal` para obter o `precoFinal`.
5. Exibir o `precoFinal` ao cliente.

---

### 1.5 Formulação, Organização e Análise de Dados (Modelagem e Simulação)

#### 1. 📖 Explicação Expositiva e Detalhada

Uma vez compreendidos os pilares anteriores, a resolução computacional exige a **Formulação e Organização de Dados**. Dados brutos sem estrutura são inúteis. Organizá-los em estruturas apropriadas (como objetos, listas ou tabelas) permite simular o comportamento de sistemas do mundo real através de **modelos computacionais**.

#### 2. 💡 Analogia Prática do Cotidiano

Um **Simulador de Voo para Pilotos**. Em vez de colocar um piloto iniciante em um Boeing real de US$ 100 milhões, o computador simula o comportamento da física da aeronave, ventos, turbulência e combustível consumido através de equações matemáticas estruturadas em dados.

#### 3. 📊 Representação Visual

```
[Estrutura de Dados] ───> [Regras de Negócio/Física] ───> [Simulação de Resultados]
 (Sensores, Pesos)           (Fórmulas Matemáticas)        (Previsão de Trajetória)

```

#### 4. 💻 Exemplo Prático em JavaScript

Simulação simplificada do crescimento populacional de bactérias a cada hora:

```javascript
// Modelo de Simulação: Crescimento Populacional
function simularCrescimentoBacteriano(populacaoInicial, taxaCrescimento, horas) {
    console.log("--- INÍCIO DA SIMULAÇÃO ---");
    let populacaoAtual = populacaoInicial;

    for (let hora = 1; hora <= horas; hora++) {
        // A cada hora, a população cresce com base na taxa percentual
        const novosIndividuos = populacaoAtual * (taxaCrescimento / 100);
        populacaoAtual += novosIndividuos;
        
        console.log(`Hora ${hora}: Populacao = ${Math.floor(populacaoAtual)} bactérias`);
    }

    return Math.floor(populacaoAtual);
}

// Simulando 500 bactérias iniciais, crescendo 20% por hora, durante 5 horas
simularCrescimentoBacteriano(500, 20, 5);

```

#### 5. ✏️ Exercício Prático Dirigido

Crie um modelo computacional simples em JS que simule o rendimento de um investimento financeiro de R$ 1.000,00 aplicado a uma taxa de juros compostos de 1% ao mês durante 3 meses.

#### 6. ✅ Resposta e Explicação Passo a Passo

```javascript
let saldo = 1000.00;
const taxaJuros = 0.01; // 1%

for (let mes = 1; mes <= 3; mes++) {
    saldo = saldo + (saldo * taxaJuros);
    console.log(`Mês ${mes}: Saldo acumulado = R$ ${saldo.toFixed(2)}`);
}

```

*Explicação:* O laço simula o efeito acumulativo dos juros compostos sobre o capital inicial a cada ciclo do mês.

---

# MÓDULO 2: Fundamentos da Lógica e Representação de Algoritmos

Neste módulo, passamos da conceituação abstrata para a formalização da representação de algoritmos utilizando diferentes linguagens e notações.

---

### 2.1 Sequência Lógica, Instruções e Desenvolvimento Estruturado

#### 1. 📖 Explicação Expositiva e Detalhada

A **Sequência Lógica** é a execução ordenada e sequencial de instruções. O computador executa instruções estritamente na ordem de cima para baixo (linha por linha), a menos que receba comandos explícitos para alterar esse fluxo (como loops ou desvios condicionais). A alteração inadvertida na ordem das instruções altera drasticamente o resultado final.

#### 2. 💡 Analogia Prática do Cotidiano

A rotina de **Trocar o Pneu do Carro**:

* *Ordem Correta:* 1. Afrouxar os parafusos; 2. Suspender o carro com o macaco; 3. Retirar os parafusos; 4. Trocar a roda.
* *Ordem Incorreta:* 1. Retirar os parafusos; 2. Suspender o carro... (O carro cairá ou o pneu rodará em falso impedindo a soltura).

---

### 2.2 Formas de Representação de Algoritmos

Existem 4 formas clássicas de expressar a lógica de um algoritmo:

1. **Descrição Narrativa:** Linguagem natural (Português/Inglês).
2. **Fluxograma Convencional:** Representação gráfica padronizada (padrão ISO/ANSI, amplamente simulado em ferramentas como o *Flowgorithm*).
3. **Pseudocódigo (Portugol):** Linguagem estruturada próxima da código, mas sem sintaxe de uma linguagem específica.
4. **Código Final:** Implementação executável em linguagem de programação real (JavaScript).

#### Tabela de Notação Gráfica de Fluxogramas (Padrão Flowgorithm):

| Símbolo Gráfico | Nome | Função no Fluxograma |
| --- | --- | --- |
| **Elipse / OVAL** | Terminal | Indica o INÍCIO ou o FIM do algoritmo. |
| **Paralelogramo** | Entrada / Saída de Dados | Leitura de dados pelo usuário ou escrita na tela. |
| **Retângulo** | Processamento | Atribuições de variáveis, cálculos matemáticos e operações internas. |
| **Losango** | Decisão / Condição | Avalia uma expressão lógica em VERDADEIRO ou FALSO (SE/SENÃO). |
| **Setas / Linhas** | Fluxo de Controle | Conectam os blocos indicando a ordem de execução. |

#### 📊 Comparativo das 4 Formas para o Problema: "Calcular o Dobro de um Número"

##### 1. Descrição Narrativa

1. Solicitar ao usuário que digite um número.
2. Ler o número digitado e armazená-lo em memória.
3. Multiplicar o número por 2 e guardar o resultado.
4. Mostrar o resultado calculado na tela.

##### 2. Fluxograma Convencional (Representação Textual do Flowgorithm)

```
       ( INÍCIO )
           │
           ▼
   [/ Ler Numero /]
           │
           ▼
  [ Resultado = Numero * 2 ]
           │
           ▼
  [\ Exibir Resultado \]
           │
           ▼
        ( FIM )

```

##### 3. Pseudocódigo (Portugol)

```portugol
Algoritmo CalcularDobro
Var
    numero, resultado: Inteiro
Inicio
    Escreva("Digite um número: ")
    Leia(numero)
    resultado <- numero * 2
    Escreva("O dobro é: ", resultado)
FimAlgoritmo

```

##### 4. Código Final (JavaScript)

```javascript
// Utilizando o módulo readline do Node.js ou variáveis diretas
const numero = 5; // Entrada
const resultado = numero * 2; // Processamento
console.log(`O dobro é: ${resultado}`); // Saída

```

---

### 2.3 Comandos de Entrada e Saída (I/O)

#### 1. 📖 Explicação Expositiva e Detalhada

Sistemas interativos precisam se comunicar com o meio externo.

* **Entrada (Input):** Captura de dados do teclado, mouse, sensores ou arquivos.
* **Saída (Output):** Exibição de dados na tela, caixas de som, impressoras ou arquivos.

No ecossistema **JavaScript**:

* **Ambiente Navegador:** Usa-se `prompt()` para entrada de texto e `console.log()` ou `alert()` para saída.
* **Ambiente Node.js (Terminal):** Usa-se o módulo nativo `readline` ou `process.stdout.write` / `console.log()`.

#### 💻 Exemplo Prático em JavaScript (Node.js & Navegador)

```javascript
// Exemplo em ambiente Node.js utilizando readline
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Comandos de Saída e Entrada Interativos
rl.question('Qual é o seu nome? ', (nomeDigitado) => {
    // Comando de Saída formatado (Template String)
    console.log(`Olá, ${nomeDigitado}! Bem-vindo ao curso de Lógica.`);
    rl.close();
});

```

---

### 2.4 Variáveis, Constantes e Tipos de Dados

#### 1. 📖 Explicação Expositiva e Detalhada

Uma **Variável** é uma posição nomeada na memória RAM do computador reservada para armazenar um valor que pode alterar ao longo da execução do programa. Uma **Constante** é uma posição de memória cujo valor, após atribuído, jamais pode ser modificado.

No **JavaScript Moderno (ES6+)**:

* `var`: **Declaração legada (NÃO RECOMENDADA).** Possui escopo global ou de função e sofre de *hoisting*, podendo gerar bugs de execução.
* `let`: **Declaração moderna para variáveis.** Respeita o escopo de bloco (`{ }`).
* `const`: **Declaração moderna para constantes.** Exige inicialização no momento da declaração e impede a reatribuição.

#### Tipos de Dados Primitivos e Estruturados em JavaScript:

| Tipo em JS | Descrição | Exemplo de Código |
| --- | --- | --- |
| `Number` | Números inteiros ou de ponto flutuante (decimais). | `let idade = 25; let preco = 99.90;` |
| `String` | Sequência de caracteres (Textos entre aspas ou crases). | `let nome = "Ana";` |
| `Boolean` | Valores lógicos binários. | `let ativo = true; let pago = false;` |
| `Object` | Coleção de propriedades do tipo chave/valor. | `let pessoa = { nome: "Carlos", idade: 30 };` |
| `Array` | Lista ordenada de valores. | `let notas = [8.5, 9.0, 7.2];` |

#### 💻 Exemplo Prático em JavaScript

Demonstrando escopo e atribuição de tipos:

```javascript
// DECLARAÇÃO DE CONSTANTES E VARIÁVEIS
const PI = 3.14159; // Imutável
let taxaJuros = 0.05; // Mutável

// Demostrando tipos primitivos
let produtoNome = "Teclado Mecânico"; // String
let quantidade = 3;                   // Number (Inteiro)
let precoUnitario = 150.50;           // Number (Float)
let emEstoque = true;                 // Boolean

// Objeto Estruturado
let cliente = {
    cpf: "123.456.789-00",
    nome: "João Souza"
};

// Exibindo os valores e seus respectivos tipos nativos
console.log(typeof produtoNome); // "string"
console.log(typeof quantidade);  // "number"
console.log(typeof emEstoque);   // "boolean"
console.log(typeof cliente);     // "object"

```

#### 5. ✏️ Exercício Prático Dirigido

Escreva o código JS para declarar as variáveis de um **Sistema de Cadastro de Veículos**. O modelo deve ter:

* `PLACA` (não altera após o cadastro).
* `MODELO` (não altera).
* `QUILOMETRAGEM` (pode alterar).
* `LIGADO` (estado verdadeiro/falso).
Imprima todas as variáveis no console com suas devidas declarações (`let` / `const`).

#### 6. ✅ Resposta e Explicação Passo a Passo

```javascript
const placa = "ABC-1234";
const modelo = "Toyota Corolla";
let quilometragem = 45000.5;
let ligado = false;

console.log(`Placa: ${placa} (Tipo: ${typeof placa})`);
console.log(`Modelo: ${modelo} (Tipo: ${typeof modelo})`);
console.log(`Km: ${quilometragem} (Tipo: ${typeof quilometragem})`);
console.log(`Status Ligado: ${ligado} (Tipo: ${typeof ligado})`);

```

*Explicação:* Utilizamos `const` para `placa` e `modelo` pois são características imutáveis do veículo físico. Usamos `let` para `quilometragem` e `ligado` porque são dados que alteram dinamicamente com o uso do veículo.

---

# MÓDULO 3: Operadores e Expressões

Os operadores são os símbolos fundamentais que instruem o processador a realizar computações matemáticas, de comparação e lógicas sobre variáveis e dados.

---

### 3.1 Operadores Aritméticos Básicos e Expressões Aritméticas

| Operador | Operação Matemáticas | Exemplo JS | Resultado |
| --- | --- | --- | --- |
| `+` | Adição / Concatenação | `10 + 5` | `15` |
| `-` | Subtração | `10 - 5` | `5` |
| `*` | Multiplicação | `10 * 5` | `50` |
| `/` | Divisão Real | `10 / 4` | `2.5` |
| `%` | Módulo (Resto da divisão) | `10 % 3` | `1` |
| `**` | Exponenciação (Potência) | `2 ** 3` | `8` |

> ⚠️ **Precedência Operacional:** A matemática no código segue a ordem estrita da matemática tradicional: Parenteses `()` primeiro, depois Exponenciação `**`, seguidos de Multiplicação `*`, Divisão `/` e Resto `%`, e por fim Adição `+` e Subtração `-`.

#### 💻 Exemplo Prático em JavaScript

Cálculo de IMC (Índice de Massa Corporal) utilizando precedência:

```javascript
// Fórmula do IMC: peso / (altura * altura)
const peso = 80;       // em Kg
const altura = 1.75;   // em Metros

// O uso obrigatório de parênteses para garantir que a multiplicação da altura ocorra primeiro
const imc = peso / (altura ** 2);

console.log(`Peso: ${peso}kg | Altura: ${altura}m`);
console.log(`IMC calculado: ${imc.toFixed(2)}`);

// Exemplo do operador de Módulo (Resto) para verificar se número é PAR ou ÍMPAR
const numero = 14;
const ePar = (numero % 2 === 0); // Se resto for 0, é par
console.log(`O número ${numero} é PAR? ${ePar}`);

```

---

### 3.2 Operadores Relacionais e Comparações

Operadores relacionais são usados para comparar dois valores e **SEMPRE** retornam um resultado booleano (`true` ou `false`).

| Operador | Significado | Exemplo | Resultado |
| --- | --- | --- | --- |
| `>` | Maior que | `10 > 5` | `true` |
| `<` | Menor que | `3 < 2` | `false` |
| `>=` | Maior ou igual a | `5 >= 5` | `true` |
| `<=` | Menor ou igual a | `4 <= 2` | `false` |
| `===` | **Estritamente Igual** (Valor e Tipo) | `5 === '5'` | `false` |
| `!==` | **Estritamente Diferente** | `5 !== '5'` | `true` |
| `==` | Igualdade Fraca *(NÃO RECOMENDADO)* | `5 == '5'` | `true` (Realiza coerção implícita) |

> 💡 **Atenção do Professor:** Em JavaScript, **NUNCA** utilize `==` ou `!=`. Sempre utilize a igualdade estrita `===` e desigualdade estrita `!==` para evitar erros decorrentes da conversão implícita de tipos.

---

### 3.3 Operadores Lógicos e Expressões Lógicas

Servem para combinar duas ou mais expressões condicionais relacionais.

#### Tabela Verdade dos Operadores Lógicos:

##### 1. Operador E Lógico (`&&` / AND)

Retorna `true` **somente se AMBAS** as condições forem verdadeiras.

| Expressão A | Expressão B | A && B |
| --- | --- | --- |
| `true` | `true` | **`true`** |
| `true` | `false` | `false` |
| `false` | `true` | `false` |
| `false` | `false` | `false` |

##### 2. Operador OU Lógico (`||` / OR)

Retorna `true` se **PELO MENOS UMA** das condições for verdadeira.

| Expressão A | Expressão B | A || B |
| --- | --- | --- |
| `true` | `true` | **`true`** |
| `true` | `false` | **`true`** |
| `false` | `true` | **`true`** |
| `false` | `false` | `false` |

##### 3. Operador NÃO Lógico (`!` / NOT)

Inverte o valor booleano da expressão.

| Expressão A | !A |
| --- | --- |
| `true` | **`false`** |
| `false` | **`true`** |

#### 💻 Exemplo Prático em JavaScript

Sistema de Aprovação de Empréstimo Bancário:

```javascript
const idade = 28;
const rendaMensal = 4500;
const possuiNomeLimpo = true;

// Regra: Para aprovar o empréstimo, precisa ter Idade >= 18 E Renda >= 3000 E Nome Limpo
const emprestimoAprovado = (idade >= 18) && (rendaMensal >= 3000) && possuiNomeLimpo;

console.log(`Empréstimo Aprovado? ${emprestimoAprovado}`); // true

// Regra alternativa: Desconto se for Estudante OU Idoso (idade >= 60)
const eEstudante = false;
const temDesconto = eEstudante || (idade >= 60);

console.log(`Tem direito a desconto? ${temDesconto}`); // false

```

---

### 3.4 Funções Primitivas e Nativas da Linguagem

Linguagens modernas fornecem bibliotecas de funções nativas para manipulação matemática e conversão de dados.

```javascript
// 1. MANIPULAÇÃO MATEMÁTICA (Objeto Math)
console.log(Math.floor(4.9));  // Arredonda para baixo: 4
console.log(Math.ceil(4.1));   // Arredonda para cima: 5
console.log(Math.round(4.5));  // Arredonda para o inteiro mais próximo: 5
console.log(Math.random());    // Gera número aleatório entre 0.0 e 0.999...

// Gerando número inteiro aleatório entre 1 e 100:
const numeroSorteado = Math.floor(Math.random() * 100) + 1;
console.log(`Número Sorteado: ${numeroSorteado}`);

// 2. CONVERSÃO DE TIPOS (PARSE)
const textoNumero = "42.85";
const numeroInteiro = parseInt(textoNumero);    // Converte para Inteiro: 42
const numeroDecimal = parseFloat(textoNumero);  // Converte para Float: 42.85

console.log(numeroInteiro, numeroDecimal);

// 3. MÉTODOS NATIVOS DE STRING
const texto = "Pensamento Computacional";
console.log(texto.length);          // Tamanho do texto: 24
console.log(texto.toUpperCase());   // "PENSAMENTO COMPUTACIONAL"
console.log(texto.includes("Lógica")); // Busca substring: false

```

---

# MÓDULO 4: Estruturas de Controle de Fluxo

As estruturas de controle de fluxo alteram a execução linear do código, permitindo que programas tomem decisões autonômas e repitam tarefas ativamente.

---

### 4.1 Estruturas de Decisão / Condicionais

#### 1. Condicional Simples e Composta (`if` / `else`)

##### 📊 Representação Visual em Fluxograma (Flowgorithm)

```
          │
          ▼
   / Idade >= 18? \ ────(SIM)───> [ Exibir "Maior de Idade" ]
          │                                  │
       (NÃO)                                 │
          │                                  │
          ▼                                  │
[ Exibir "Menor de Idade" ]                  │
          │                                  │
          └──────────────────┬───────────────┘
                             ▼

```

##### 💻 Exemplo Prático em JavaScript

```javascript
const idade = 16;

// Estrutura Condicional Composta
if (idade >= 18) {
    // Bloco executado se a condição for VERDADEIRA
    console.log("Acesso concedido: Usuário é Maior de Idade.");
} else {
    // Bloco executado se a condição for FALSA
    console.log("Acesso negado: Usuário é Menor de Idade.");
}

```

#### 2. Condicionais Encadeadas (`if / else if / else`) e Múltipla Escolha (`switch / case`)

##### 💻 Exemplo Prático em JavaScript

```javascript
// CONDICIONAL ENCADEADA: Classificação de IMC
const imc = 26.5;

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

// MÚLTIPLA ESCOLHA: Menu de Opções com switch...case
const opcaoMenu = 2;

switch (opcaoMenu) {
    case 1:
        console.log("Opção Selecionada: Consultar Saldo");
        break; // Interrompe a execução dos demais casos
    case 2:
        console.log("Opção Selecionada: Efetuar Depósito");
        break;
    case 3:
        console.log("Opção Selecionada: Realizar Saque");
        break;
    default:
        console.log("Opção Inválida!");
        break;
}

```

---

### 4.2 Estruturas de Repetição / Laços (Loops)

Estruturas de repetição executam um mesmo bloco de código sucessivas vezes até que uma condição de parada seja satisfeita.

#### 1. Repetição com Teste no Início (`while`)

O teste condicional é realizado **antes** de entrar no bloco. Se a condição for falsa na primeira avaliação, o bloco **nunca** é executado.

##### 💻 Exemplo Prático em JavaScript

```javascript
let contador = 1;

// Repete enquanto o contador for menor ou igual a 5
while (contador <= 5) {
    console.log(`Contagem WHILE: Passo ${contador}`);
    contador++; // INCREMENTO OBRIGATÓRIO (Evita Loop Infinito)
}

```

#### 2. Repetição com Contador (`for`)

Ideal para quando sabemos previamente a quantidade exata de repetições necessárias. Sintaxe compacta composta por: `(Inicialização; Condição; Incremento)`.

##### 💻 Exemplo Prático em JavaScript

```javascript
// Exemplo: Gerar a Tabuada do 7
const numeroTabuada = 7;

for (let i = 1; i <= 10; i++) {
    const resultado = numeroTabuada * i;
    console.log(`${numeroTabuada} x ${i} = ${resultado}`);
}

```

#### 3. Repetição com Teste no Final (`do...while`)

Garante que o bloco de código seja executado **pelo menos uma vez**, pois a condição só é avaliada no final do ciclo.

##### 💻 Exemplo Prático em JavaScript

```javascript
let tentativas = 0;

do {
    tentativas++;
    console.log(`Tentando conectar ao servidor... Tentativa nº ${tentativas}`);
    // Simula a tentativa de conexão
} while (tentativas < 3);

```

#### 5. ✏️ Exercício Prático Dirigido

Escreva um algoritmo em JavaScript utilizando o laço `for` que calcule e exiba no console a **soma de todos os números pares** de 1 a 20.

#### 6. ✅ Resposta e Explicação Passo a Passo

```javascript
let somaPares = 0;

for (let i = 1; i <= 20; i++) {
    // Verifica se o número atual do contador é par usando o operador de Módulo
    if (i % 2 === 0) {
        somaPares += i; // Acumula o valor de i na variável somaPares
    }
}

console.log(`A soma de todos os números pares de 1 a 20 é: ${somaPares}`);

```

*Explicação:*

1. Inicializamos uma variável acumuladora `somaPares` com valor zero.
2. O laço `for` percorre os números do contador `i` de 1 até 20.
3. A cada volta, o `if (i % 2 === 0)` checa se o número é divisível por 2 (resto zero).
4. Se verdadeiro, adicionamos o valor de `i` à variável acumuladora `somaPares`.
5. Ao término do laço, os números pares (2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20) resultam no total de **110**.

---

# MÓDULO 5: Estruturas de Dados Homogêneas e Modularização

Estruturas de dados agrupam múltiplos valores em uma única variável, permitindo manipular grandes volumes de dados de forma organizada.

---

### 5.1 Vetores (Arrays Unidimensionais)

#### 1. 📖 Explicação Expositiva e Detalhada

Um **Vetor (Array)** é uma estrutura de dados homogênea, alocada de forma sequencial na memória, onde cada elemento é acessado através de um **Índice Numérico**. Em JavaScript, o primeiro elemento reside obrigatoriamente no **Índice 0**.

#### 2. 💡 Analogia Prática do Cotidiano

Um **Armário com Gavetas Numeradas**. O armário inteiro possui um único nome (ex: `gaveteiro`), mas para acessar o conteúdo de uma gaveta específica, informamos a posição exata da gaveta: `gaveteiro[0]`, `gaveteiro[1]`, e assim por diante.

#### 3. 📊 Representação Visual

```
Índice:      0         1         2         3
Vetor:   [ "Maçã",  "Banana", "Laranja", "Uva" ]

```

#### 4. 💻 Exemplo Prático em JavaScript

Manipulação completa de Arrays em JS:

```javascript
// Criando um vetor de notas
const notas = [8.5, 7.0, 9.5, 6.0];

// Acessando elementos individuais
console.log(`Primeira Nota: ${notas[0]}`); // 8.5
console.log(`Última Nota: ${notas[notas.length - 1]}`); // 6.0

// Modificando um elemento
notas[1] = 7.5; // Altera 7.0 para 7.5

// Métodos Nativos Básicos de Manipulação de Arrays:
notas.push(10.0);    // Adiciona elemento ao FINAL do array
notas.unshift(5.0);  // Adiciona elemento ao INÍCIO do array
notas.pop();         // Remove o ÚLTIMO elemento do array

console.log("Vetor atualizado:", notas);

// Percorrendo o Vetor com Laço FOR tradicional
let somaNotas = 0;
for (let i = 0; i < notas.length; i++) {
    somaNotas += notas[i];
}
const media = somaNotas / notas.length;
console.log(`Média do aluno: ${media.toFixed(2)}`);

```

---

### 5.2 Matrizes (Arrays Multidimensionais / Tabelas)

#### 1. 📖 Explicação Expositiva e Detalhada

Uma **Matriz** é uma estrutura bidimensional organizada em **Linhas e Colunas** ($N \times M$), comportando-se como um "vetor de vetores". Para percorrer todos os elementos de uma matriz, precisamos obrigatoriamente de **Laços Aninhados** (um laço `for` interno rodando dentro de outro laço `for` externo).

#### 2. 💡 Analogia Prática do Cotidiano

Uma **Planilha do Excel** ou um **Tabuleiro de Xadrez**. Cada casa é identificada por coordenadas exatas de Linha e Coluna (ex: Linha 2, Coluna 3).

#### 3. 📊 Representação Visual de uma Matriz $3 \times 3$

```
          Coluna 0   Coluna 1   Coluna 2
Linha 0 [    10    ,    20    ,    30    ]
Linha 1 [    40    ,    50    ,    60    ]
Linha 2 [    70    ,    80    ,    90    ]

```

#### 4. 💻 Exemplo Prático em JavaScript

Criação, acesso e navegação em matriz bidimensional com laços aninhados:

```javascript
// Declaração de uma Matriz 3x3 representando notas de 3 alunos em 3 trimestres
const matrizNotas = [
    [8.0, 7.5, 9.0], // Aluno 0: [Trimestre 0, Trimestre 1, Trimestre 2]
    [6.0, 5.5, 7.0], // Aluno 1
    [9.5, 9.0, 10.0] // Aluno 2
];

// Acessando nota específica: Aluno 2, Trimestre 1 (Linha 2, Coluna 1)
console.log(`Nota específica: ${matrizNotas[2][1]}`); // 9.0

// PERCORRENDO A MATRIZ COM LAÇOS ANINHADOS (FOR DENTRO DE FOR)
console.log("\n--- BOLETIM ESCOLAR COMPLETO ---");

for (let i = 0; i < matrizNotas.length; i++) { // Laço Externo: Percorre Linhas
    let somaAluno = 0;
    
    for (let j = 0; j < matrizNotas[i].length; j++) { // Laço Interno: Percorre Colunas
        somaAluno += matrizNotas[i][j];
    }
    
    const mediaAluno = somaAluno / matrizNotas[i].length;
    console.log(`Média do Aluno ${i + 1}: ${mediaAluno.toFixed(1)}`);
}

```

---

### 5.3 Procedimentos, Funções e Escopo

#### 1. 📖 Explicação Expositiva e Detalhada

A **Modularização** é a prática de dividir um programa em blocos funcionais reutilizáveis conhecidos como **Funções** ou **Procedimentos**.

* **Função:** Bloco de código que recebe entradas (parâmetros), processa e **retorna** um valor explicitamente através da instrução `return`.
* **Procedimento:** Bloco de código que executa um conjunto de instruções sem retornar um valor direto (em JavaScript, toda função sem `return` retorna `undefined`).

#### Escopo de Variáveis:

* **Escopo Global:** Variáveis declaradas fora de qualquer bloco, acessíveis em todo o programa.
* **Escopo Local (de Bloco/Função):** Variáveis declaradas dentro de uma função ou bloco `{ }`, existentes apenas durante a execução daquele trecho específico de código.

#### 4. 💻 Exemplo Prático em JavaScript

Demonstrando Funções com Parâmetros, Retorno e Escopo de Variáveis:

```javascript
// Variável de ESCOPO GLOBAL
const taxaImpostoGlobal = 0.15; // 15%

// DECLARAÇÃO DE FUNÇÃO MODULAR
// Parâmetros: precoProduto, quantidade
function calcularPrecoFinal(precoProduto, quantidade) {
    // Variável de ESCOPO LOCAL (Acessível apenas dentro desta função)
    const subtotal = precoProduto * quantidade;
    const valorImposto = subtotal * taxaImpostoGlobal;
    const precoFinal = subtotal + valorImposto;

    // Retorno do valor calculado para quem chamou a função
    return precoFinal;
}

// EXECUÇÃO/CHAMADA DA FUNÇÃO
const totalCompra1 = calcularPrecoFinal(100.0, 2); // Argumentos: 100.0 e 2
const totalCompra2 = calcularPrecoFinal(50.0, 5);  // Argumentos: 50.0 e 5

console.log(`Total Compra 1: R$ ${totalCompra1.toFixed(2)}`); // R$ 230.00
console.log(`Total Compra 2: R$ ${totalCompra2.toFixed(2)}`); // R$ 287.50

// Tentar acessar 'subtotal' fora da função gerará ERRO DE ESCOPO:
// console.log(subtotal); // ReferenceError: subtotal is not defined

```

#### 5. ✏️ Exercício Prático Dirigido

Crie uma função em JavaScript chamada `somarVetor(vetor)` que receba como argumento um array de números inteiros e **retorne** a soma de todos os seus elementos. Teste a função chamando-a com um vetor de 5 números.

#### 6. ✅ Resposta e Explicação Passo a Passo

```javascript
// Definição da Função Modular
function somarVetor(vetor) {
    let acumuladorSoma = 0;
    
    // Percorre todos os elementos passados no vetor
    for (let i = 0; i < vetor.length; i++) {
        acumuladorSoma += vetor[i];
    }
    
    // Retorna o resultado final do processamento
    return acumuladorSoma;
}

// Testando a função com um array de números
const meusNumeros = [10, 20, 30, 40, 50];
const resultadoSoma = somarVetor(meusNumeros);

console.log(`A soma dos elementos do vetor [${meusNumeros}] é: ${resultadoSoma}`);

```

*Explicação:*

1. A função `somarVetor` aceita como parâmetro de entrada a variável `vetor`.
2. Ela declara uma variável local acumuladora `acumuladorSoma = 0`.
3. O laço `for` percorre cada posição do vetor recebido, somando os valores na variável local.
4. A instrução `return acumuladorSoma;` exporta o resultado de volta para o escopo principal do programa, onde é armazenado na variável `resultadoSoma` e impresso no console.

---

## 🎯 CONSIDERAÇÕES FINAIS DO PROFESSOR

Você acaba de concluir a base estrutural do **Pensamento Computacional e Lógica de Programação**. O conhecimento construído neste guia abrange desde a estruturação analítica inicial até os conceitos avançados de modularização e manipulação de matrizes em **JavaScript**.

### Próximos Passos para o Desenvolvimento Acadêmico:

1. **Prática Ativa:** Pegue cada um dos exercícios propostos neste material e execute-os no seu ambiente local (Node.js ou Console do Desenvolvedor no Navegador F12).
2. **Experimentação:** Altere as variáveis de teste e observe o comportamento das estruturas condicionais e de repetição.
3. **Resolução de Problemas:** Tente aplicar os **4 Pilares do Pensamento Computacional** ao abordar qualquer novo algoritmo antes de digitar uma única linha de código.

*Lembre-se: Excelência em programação é fruto da disciplina no raciocínio lógico!*