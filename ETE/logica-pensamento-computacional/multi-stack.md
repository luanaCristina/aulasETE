# 🔄 Multi-Stack: A Mesma Lógica em Diferentes Linguagens

**ETE Pernambuco — Profª Luana Cristina**  
**Disciplina:** Lógica e Pensamento Computacional  
**Objetivo Pedagógico:** Demonstrar que, se a lógica de programação e a arquitetura estão bem fundamentadas, a linguagem é apenas sintaxe.

---

## 🎯 O Problema: Sistema de Caixa de Supermercado

Desenvolver um sistema de caixa de supermercado com as seguintes funcionalidades:

1. **Menu interativo** com loop (repetição até o usuário sair)
2. **Cadastro de produtos** armazenados em array/lista
3. **Registro de vendas** com acumulador (soma total)
4. **Cálculo de troco** usando condicionais

O sistema deve:
- Exibir um menu com opções: Cadastrar Produto, Registrar Venda, Ver Produtos, Sair
- Permitir cadastrar produtos com nome e preço
- Registrar vendas acumulando o total
- Calcular troco quando o pagamento for informado
- Validar se o pagamento é suficiente

---

## 📝 Implementação 1: Portugol (Linguagem Original da Disciplina)

```portugol
programa
{
    // Declaração de variáveis globais
    cadeia produtos[50]          // Array para armazenar nomes dos produtos
    real precos[50]              // Array para armazenar preços dos produtos
    inteiro totalProdutos = 0    // Contador de produtos cadastrados
    real totalVenda = 0.0        // Acumulador do valor total da venda

    // Função principal do programa
    funcao inicio()
    {
        inteiro opcao = 0  // Variável para controle do menu

        // Loop principal - repete até o usuário escolher sair
        enquanto (opcao != 4)
        {
            // Exibição do menu
            escreva("\n====== CAIXA DE SUPERMERCADO ======\n")
            escreva("[1] Cadastrar Produto\n")
            escreva("[2] Registrar Venda\n")
            escreva("[3] Ver Produtos\n")
            escreva("[4] Sair\n")
            escreva("Escolha uma opção: ")
            leia(opcao)

            // Estrutura condicional para processar a escolha
            se (opcao == 1)
            {
                cadastrarProduto()
            }
            senao se (opcao == 2)
            {
                registrarVenda()
            }
            senao se (opcao == 3)
            {
                listarProdutos()
            }
            senao se (opcao == 4)
            {
                escreva("\nObrigado! Volte sempre.\n")
            }
            senao
            {
                escreva("\nOpção inválida! Tente novamente.\n")
            }
        }
    }

    // Função para cadastrar um novo produto
    funcao cadastrarProduto()
    {
        cadeia nome
        real preco

        escreva("\nDigite o nome do produto: ")
        leia(nome)
        escreva("Digite o preço: R$ ")
        leia(preco)

        // Armazena no array na posição atual
        produtos[totalProdutos] = nome
        precos[totalProdutos] = preco
        totalProdutos = totalProdutos + 1  // Incrementa o contador

        escreva("Produto cadastrado com sucesso!\n")
    }

    // Função para registrar uma venda
    funcao registrarVenda()
    {
        inteiro codigo
        real pagamento, troco

        se (totalProdutos == 0)
        {
            escreva("\nNenhum produto cadastrado!\n")
            retorne
        }

        // Mostra produtos disponíveis
        listarProdutos()

        escreva("\nDigite o código do produto (0 a ")
        escreva(totalProdutos - 1)
        escreva("): ")
        leia(codigo)

        // Validação do código
        se (codigo >= 0 e codigo < totalProdutos)
        {
            // Acumula o valor da venda
            totalVenda = totalVenda + precos[codigo]
            escreva("\nProduto: ")
            escreva(produtos[codigo])
            escreva(" | Preço: R$ ")
            escreva(precos[codigo])
            escreva("\nTotal acumulado: R$ ")
            escreva(totalVenda)

            escreva("\nDeseja pagar agora? (1=Sim, 0=Não): ")
            inteiro pagar
            leia(pagar)

            se (pagar == 1)
            {
                escreva("Valor do pagamento: R$ ")
                leia(pagamento)

                // Condicional para verificar se o pagamento é suficiente
                se (pagamento >= totalVenda)
                {
                    troco = pagamento - totalVenda
                    escreva("\nTroco: R$ ")
                    escreva(troco)
                    escreva("\nVenda finalizada!\n")
                    totalVenda = 0.0  // Reseta o acumulador
                }
                senao
                {
                    escreva("\nPagamento insuficiente! Faltam R$ ")
                    escreva(totalVenda - pagamento)
                    escreva("\n")
                }
            }
        }
        senao
        {
            escreva("\nCódigo inválido!\n")
        }
    }

    // Função para listar todos os produtos cadastrados
    funcao listarProdutos()
    {
        se (totalProdutos == 0)
        {
            escreva("\nNenhum produto cadastrado.\n")
            retorne
        }

        escreva("\n--- PRODUTOS CADASTRADOS ---\n")
        // Loop para percorrer o array de produtos
        para (inteiro i = 0; i < totalProdutos; i++)
        {
            escreva("[")
            escreva(i)
            escreva("] ")
            escreva(produtos[i])
            escreva(" - R$ ")
            escreva(precos[i])
            escreva("\n")
        }
    }
}
```

---

## 🐍 Implementação 2: Python (Transição para Linguagem Real)

```python
# Sistema de Caixa de Supermercado - Python
# ETE Pernambuco - Profª Luana Cristina

# Declaração das estruturas de dados (listas = arrays dinâmicos)
produtos = []        # Lista para armazenar dicionários {nome, preco}
total_venda = 0.0    # Acumulador do valor total da venda

def cadastrar_produto():
    """Função para cadastrar um novo produto no sistema."""
    nome = input("\nDigite o nome do produto: ")
    preco = float(input("Digite o preço: R$ "))
    
    # Adiciona um dicionário ao array (lista)
    produtos.append({"nome": nome, "preco": preco})
    print("✅ Produto cadastrado com sucesso!")

def listar_produtos():
    """Função para exibir todos os produtos cadastrados."""
    if len(produtos) == 0:  # Condicional: verifica se a lista está vazia
        print("\n⚠️  Nenhum produto cadastrado.")
        return
    
    print("\n--- PRODUTOS CADASTRADOS ---")
    # Loop for para percorrer a lista com índice
    for i, produto in enumerate(produtos):
        print(f"[{i}] {produto['nome']} - R$ {produto['preco']:.2f}")

def registrar_venda():
    """Função para registrar uma venda e calcular troco."""
    global total_venda  # Acessa a variável global (acumulador)
    
    if len(produtos) == 0:
        print("\n⚠️  Nenhum produto cadastrado!")
        return
    
    # Mostra produtos disponíveis
    listar_produtos()
    
    codigo = int(input(f"\nDigite o código do produto (0 a {len(produtos) - 1}): "))
    
    # Condicional para validar o código
    if 0 <= codigo < len(produtos):
        produto = produtos[codigo]
        total_venda += produto["preco"]  # Acumulador: soma ao total
        
        print(f"\nProduto: {produto['nome']} | Preço: R$ {produto['preco']:.2f}")
        print(f"Total acumulado: R$ {total_venda:.2f}")
        
        pagar = input("\nDeseja pagar agora? (s/n): ").lower()
        
        if pagar == "s":
            pagamento = float(input("Valor do pagamento: R$ "))
            
            # Condicional: verifica se pagamento é suficiente
            if pagamento >= total_venda:
                troco = pagamento - total_venda
                print(f"\n💰 Troco: R$ {troco:.2f}")
                print("✅ Venda finalizada!")
                total_venda = 0.0  # Reseta o acumulador
            else:
                falta = total_venda - pagamento
                print(f"\n❌ Pagamento insuficiente! Faltam R$ {falta:.2f}")
    else:
        print("\n❌ Código inválido!")

def menu_principal():
    """Função principal com loop do menu interativo."""
    opcao = 0  # Variável de controle do loop
    
    # Loop while - repete até o usuário digitar 4
    while opcao != 4:
        print("\n====== 🛒 CAIXA DE SUPERMERCADO ======")
        print("[1] Cadastrar Produto")
        print("[2] Registrar Venda")
        print("[3] Ver Produtos")
        print("[4] Sair")
        
        opcao = int(input("Escolha uma opção: "))
        
        # Estrutura condicional (equivalente ao se/senao do Portugol)
        if opcao == 1:
            cadastrar_produto()
        elif opcao == 2:
            registrar_venda()
        elif opcao == 3:
            listar_produtos()
        elif opcao == 4:
            print("\n👋 Obrigado! Volte sempre.")
        else:
            print("\n❌ Opção inválida! Tente novamente.")

# Ponto de entrada do programa (equivalente à funcao inicio() do Portugol)
if __name__ == "__main__":
    menu_principal()
```

---

## 🟨 Implementação 3: JavaScript (Node.js — Aplicação Console)

```javascript
// Sistema de Caixa de Supermercado - JavaScript (Node.js)
// ETE Pernambuco - Profª Luana Cristina

// Importação do módulo readline para entrada de dados no terminal
const readline = require('readline');

// Criação da interface de leitura (equivalente ao leia() do Portugol)
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Declaração das estruturas de dados
let produtos = [];        // Array para armazenar objetos {nome, preco}
let totalVenda = 0.0;     // Acumulador do valor total da venda

// Função auxiliar para fazer perguntas (entrada de dados assíncrona)
function perguntar(questao) {
    return new Promise((resolve) => {
        rl.question(questao, (resposta) => {
            resolve(resposta);
        });
    });
}

// Função para cadastrar um novo produto
async function cadastrarProduto() {
    const nome = await perguntar("\nDigite o nome do produto: ");
    const preco = parseFloat(await perguntar("Digite o preço: R$ "));
    
    // Adiciona objeto ao array (equivalente ao append do Python)
    produtos.push({ nome: nome, preco: preco });
    console.log("✅ Produto cadastrado com sucesso!");
}

// Função para listar todos os produtos
function listarProdutos() {
    // Condicional: verifica se o array está vazio
    if (produtos.length === 0) {
        console.log("\n⚠️  Nenhum produto cadastrado.");
        return;
    }
    
    console.log("\n--- PRODUTOS CADASTRADOS ---");
    // Loop for para percorrer o array com índice
    for (let i = 0; i < produtos.length; i++) {
        console.log(`[${i}] ${produtos[i].nome} - R$ ${produtos[i].preco.toFixed(2)}`);
    }
}

// Função para registrar uma venda e calcular troco
async function registrarVenda() {
    if (produtos.length === 0) {
        console.log("\n⚠️  Nenhum produto cadastrado!");
        return;
    }
    
    // Mostra produtos disponíveis
    listarProdutos();
    
    const codigo = parseInt(await perguntar(`\nDigite o código do produto (0 a ${produtos.length - 1}): `));
    
    // Condicional para validar o código
    if (codigo >= 0 && codigo < produtos.length) {
        const produto = produtos[codigo];
        totalVenda += produto.preco;  // Acumulador: soma ao total
        
        console.log(`\nProduto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Total acumulado: R$ ${totalVenda.toFixed(2)}`);
        
        const pagar = await perguntar("\nDeseja pagar agora? (s/n): ");
        
        if (pagar.toLowerCase() === "s") {
            const pagamento = parseFloat(await perguntar("Valor do pagamento: R$ "));
            
            // Condicional: verifica se pagamento é suficiente
            if (pagamento >= totalVenda) {
                const troco = pagamento - totalVenda;
                console.log(`\n💰 Troco: R$ ${troco.toFixed(2)}`);
                console.log("✅ Venda finalizada!");
                totalVenda = 0.0;  // Reseta o acumulador
            } else {
                const falta = totalVenda - pagamento;
                console.log(`\n❌ Pagamento insuficiente! Faltam R$ ${falta.toFixed(2)}`);
            }
        }
    } else {
        console.log("\n❌ Código inválido!");
    }
}

// Função principal com loop do menu interativo
async function menuPrincipal() {
    let opcao = 0;  // Variável de controle do loop
    
    // Loop while - repete até o usuário digitar 4
    while (opcao !== 4) {
        console.log("\n====== 🛒 CAIXA DE SUPERMERCADO ======");
        console.log("[1] Cadastrar Produto");
        console.log("[2] Registrar Venda");
        console.log("[3] Ver Produtos");
        console.log("[4] Sair");
        
        opcao = parseInt(await perguntar("Escolha uma opção: "));
        
        // Estrutura condicional (equivalente ao if/elif/else do Python)
        if (opcao === 1) {
            await cadastrarProduto();
        } else if (opcao === 2) {
            await registrarVenda();
        } else if (opcao === 3) {
            listarProdutos();
        } else if (opcao === 4) {
            console.log("\n👋 Obrigado! Volte sempre.");
            rl.close();  // Fecha a interface de leitura
        } else {
            console.log("\n❌ Opção inválida! Tente novamente.");
        }
    }
}

// Ponto de entrada do programa
menuPrincipal();
```

---

## 🔷 Implementação 4: TypeScript (Versão Tipada)

```typescript
// Sistema de Caixa de Supermercado - TypeScript
// ETE Pernambuco - Profª Luana Cristina

import * as readline from 'readline';

// Definição de tipos (o diferencial do TypeScript!)
interface Produto {
    nome: string;
    preco: number;
}

// Declaração das estruturas de dados COM TIPOS
const produtos: Produto[] = [];    // Array tipado de Produto
let totalVenda: number = 0.0;      // Acumulador tipado como número

// Interface de leitura para entrada de dados
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função auxiliar tipada para fazer perguntas
function perguntar(questao: string): Promise<string> {
    return new Promise<string>((resolve) => {
        rl.question(questao, (resposta: string) => {
            resolve(resposta);
        });
    });
}

// Função para cadastrar um novo produto (retorno tipado como void)
async function cadastrarProduto(): Promise<void> {
    const nome: string = await perguntar("\nDigite o nome do produto: ");
    const preco: number = parseFloat(await perguntar("Digite o preço: R$ "));
    
    // Cria objeto tipado e adiciona ao array
    const novoProduto: Produto = { nome, preco };
    produtos.push(novoProduto);
    console.log("✅ Produto cadastrado com sucesso!");
}

// Função para listar todos os produtos (retorno tipado como void)
function listarProdutos(): void {
    // Condicional: verifica se o array está vazio
    if (produtos.length === 0) {
        console.log("\n⚠️  Nenhum produto cadastrado.");
        return;
    }
    
    console.log("\n--- PRODUTOS CADASTRADOS ---");
    // Loop for com tipos inferidos
    produtos.forEach((produto: Produto, i: number) => {
        console.log(`[${i}] ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });
}

// Função para registrar uma venda e calcular troco
async function registrarVenda(): Promise<void> {
    if (produtos.length === 0) {
        console.log("\n⚠️  Nenhum produto cadastrado!");
        return;
    }
    
    listarProdutos();
    
    const codigo: number = parseInt(await perguntar(
        `\nDigite o código do produto (0 a ${produtos.length - 1}): `
    ));
    
    // Condicional para validar o código
    if (codigo >= 0 && codigo < produtos.length) {
        const produto: Produto = produtos[codigo];
        totalVenda += produto.preco;  // Acumulador: soma ao total
        
        console.log(`\nProduto: ${produto.nome} | Preço: R$ ${produto.preco.toFixed(2)}`);
        console.log(`Total acumulado: R$ ${totalVenda.toFixed(2)}`);
        
        const pagar: string = await perguntar("\nDeseja pagar agora? (s/n): ");
        
        if (pagar.toLowerCase() === "s") {
            const pagamento: number = parseFloat(await perguntar("Valor do pagamento: R$ "));
            
            // Condicional: verifica se pagamento é suficiente
            if (pagamento >= totalVenda) {
                const troco: number = pagamento - totalVenda;
                console.log(`\n💰 Troco: R$ ${troco.toFixed(2)}`);
                console.log("✅ Venda finalizada!");
                totalVenda = 0.0;  // Reseta o acumulador
            } else {
                const falta: number = totalVenda - pagamento;
                console.log(`\n❌ Pagamento insuficiente! Faltam R$ ${falta.toFixed(2)}`);
            }
        }
    } else {
        console.log("\n❌ Código inválido!");
    }
}

// Função principal com loop do menu interativo
async function menuPrincipal(): Promise<void> {
    let opcao: number = 0;  // Variável de controle do loop (tipada)
    
    // Loop while - repete até o usuário digitar 4
    while (opcao !== 4) {
        console.log("\n====== 🛒 CAIXA DE SUPERMERCADO ======");
        console.log("[1] Cadastrar Produto");
        console.log("[2] Registrar Venda");
        console.log("[3] Ver Produtos");
        console.log("[4] Sair");
        
        opcao = parseInt(await perguntar("Escolha uma opção: "));
        
        // Estrutura condicional
        if (opcao === 1) {
            await cadastrarProduto();
        } else if (opcao === 2) {
            await registrarVenda();
        } else if (opcao === 3) {
            listarProdutos();
        } else if (opcao === 4) {
            console.log("\n👋 Obrigado! Volte sempre.");
            rl.close();
        } else {
            console.log("\n❌ Opção inválida! Tente novamente.");
        }
    }
}

// Ponto de entrada do programa
menuPrincipal();
```

---

## 📊 Tabela Comparativa: Lógica vs Sintaxe

| Conceito | Portugol | Python | JavaScript | TypeScript |
|----------|----------|--------|------------|------------|
| **Declarar variável** | `inteiro x = 0` | `x = 0` | `let x = 0` | `let x: number = 0` |
| **Declarar constante** | — | `PI = 3.14` | `const PI = 3.14` | `const PI: number = 3.14` |
| **Entrada de dados** | `leia(x)` | `input("msg")` | `await perguntar("msg")` | `await perguntar("msg"): string` |
| **Saída de dados** | `escreva(x)` | `print(x)` | `console.log(x)` | `console.log(x)` |
| **Condicional** | `se/senao` | `if/elif/else` | `if/else if/else` | `if/else if/else` |
| **Loop enquanto** | `enquanto(cond){}` | `while cond:` | `while(cond){}` | `while(cond){}` |
| **Loop para** | `para(i=0;i<n;i++)` | `for i in range(n):` | `for(let i=0;i<n;i++)` | `for(let i=0;i<n;i++)` |
| **Array/Lista** | `inteiro v[10]` | `lista = []` | `let arr = []` | `let arr: Type[] = []` |
| **Adicionar ao array** | `v[pos] = valor` | `lista.append(x)` | `arr.push(x)` | `arr.push(x)` |
| **Tamanho do array** | manual | `len(lista)` | `arr.length` | `arr.length` |
| **Função** | `funcao nome(){}` | `def nome():` | `function nome(){}` | `function nome(): void{}` |
| **Função com retorno** | `funcao inteiro soma()` | `def soma() -> int:` | `function soma()` | `function soma(): number` |
| **Comentário** | `// texto` | `# texto` | `// texto` | `// texto` |

---

## 💡 Destaque Pedagógico

> **"Se você entende a LÓGICA, a linguagem é apenas SINTAXE."**
>
> Observe que nas 4 implementações acima:
> - O **algoritmo** é exatamente o mesmo (menu → loop → condicional → array → acumulador)
> - A **estrutura** das funções é idêntica (cadastrar, listar, vender, menu)
> - O **fluxo de dados** não muda (entrada → processamento → saída)
> - Apenas a **sintaxe** (forma de escrever) é diferente em cada linguagem
>
> Um programador que domina a **lógica** aprende qualquer linguagem nova em dias.
> Um programador que só decora **sintaxe** fica preso a uma única ferramenta.
>
> — Profª Luana Cristina, ETE Pernambuco

---

## 🚀 Guia de Execução Passo a Passo

### Portugol — Portugol Studio Web

```bash
# Opção 1: Abrir no navegador
# Acesse: https://portugol-webstudio.cubos.io/
# Cole o código e clique em "Executar"

# Opção 2: Portugol Studio Desktop
# Download: http://lite.acad.univali.br/portugol/
# Abra o programa, cole o código, F5 para executar
```

### Python — Executar no Terminal

```bash
# 1. Verifique se o Python está instalado
python --version

# 2. Crie o arquivo
# Salve o código Python acima como "caixa.py"

# 3. Execute
python caixa.py

# No Windows, pode ser necessário usar:
py caixa.py
```

### JavaScript — Executar com Node.js

```bash
# 1. Verifique se o Node.js está instalado
node --version

# 2. Crie o arquivo
# Salve o código JavaScript acima como "caixa.js"

# 3. Execute
node caixa.js
```

### TypeScript — Executar com ts-node

```bash
# 1. Verifique se o Node.js está instalado
node --version

# 2. Instale o TypeScript e ts-node globalmente (apenas uma vez)
npm install -g typescript ts-node @types/node

# 3. Crie o arquivo
# Salve o código TypeScript acima como "caixa.ts"

# 4. Execute diretamente
npx ts-node caixa.ts

# Alternativa: compilar e executar
tsc caixa.ts        # Compila para JavaScript
node caixa.js       # Executa o JavaScript gerado
```

---

## 📌 Resumo dos Conceitos Aplicados

| Conceito de Lógica | Como foi aplicado no sistema |
|--------------------|------------------------------|
| **Variáveis** | `totalVenda`, `opcao`, `nome`, `preco` |
| **Acumulador** | `totalVenda += preco` (soma progressiva) |
| **Contador** | `totalProdutos++` (incremento a cada cadastro) |
| **Array/Lista** | Armazenar múltiplos produtos |
| **Loop while** | Menu que repete até sair |
| **Loop for** | Percorrer a lista de produtos |
| **Condicional if/else** | Validar opção, verificar pagamento |
| **Função** | Modularizar cada operação |
| **Entrada/Saída** | Interação com o usuário |

---

*Material de apoio — ETE Pernambuco — Desenvolvimento de Sistemas*  
*Profª Luana Cristina — Lógica e Pensamento Computacional*
