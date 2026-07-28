# 🛒 Sistema de Caixa de Supermercado — Projeto Tutorial

![Portugol](https://img.shields.io/badge/Linguagem-Portugol-blue)
![Nível](https://img.shields.io/badge/Nível-Iniciante-green)
![Etapas](https://img.shields.io/badge/Etapas-6-orange)
![Ferramenta](https://img.shields.io/badge/IDE-Portugol%20Studio%20Web-purple)

## 📋 Sobre o Projeto

Este é um projeto tutorial **passo a passo** onde você vai construir um **Sistema de Caixa de Supermercado** completo, aplicando todos os conceitos aprendidos na disciplina de **Lógica e Pensamento Computacional**.

O sistema final terá:
- ✅ Menu interativo com loop
- ✅ Cadastro de produtos com vetores (arrays)
- ✅ Registro de vendas com validação de estoque
- ✅ Cálculo de desconto e troco
- ✅ Relatórios de fechamento de caixa

---

## 🖥️ Como Usar o Portugol Studio Web

1. Acesse: **https://univali-lite.github.io/Portugol-Studio/**
2. O editor abrirá no navegador (não precisa instalar nada!)
3. **Apague** o código de exemplo que aparece
4. **Copie e cole** o código de cada etapa
5. Clique no botão **▶ Executar** para rodar
6. A saída aparece no painel inferior (Console)

> 💡 **Dica:** Salve cada etapa no seu computador usando `Ctrl+S` ou copiando para um arquivo `.txt`

> ⚠️ **Atenção:** O Portugol Studio Web não salva automaticamente. Se fechar o navegador, perde o código!

---

## 📚 Estrutura do Projeto

| Arquivo | Etapa | Conceitos |
|---------|-------|-----------|
| `etapa1-menu-basico.por` | Menu Básico | enquanto, escolha/caso |
| `etapa2-cadastro-produtos.por` | Cadastro de Produtos | vetores, para |
| `etapa3-venda-produtos.por` | Vendas | acumulador, validação |
| `etapa4-troco-desconto.por` | Troco e Desconto | condicionais compostas |
| `etapa5-relatorios.por` | Relatórios | maior/menor, média |
| `versao-final.por` | Versão Completa | tudo junto! |

---

## 🚀 Etapa 1 — Menu Básico com Loop

### 🎓 O que estamos aplicando
- **Laço de repetição `enquanto`** — para manter o programa rodando até o usuário sair
- **Estrutura `escolha/caso`** — para executar ações diferentes conforme a opção escolhida
- **Variáveis** — para armazenar a escolha do usuário

### 📝 O que fazer
1. Abra o Portugol Studio Web
2. Copie o código do arquivo `etapa1-menu-basico.por`
3. Cole no editor e execute

### 🧪 O que testar
- Digite 1, 2, 3 e veja as mensagens de cada opção
- Digite 4 para sair do programa
- Digite um número inválido (ex: 9) e veja a mensagem de erro

### 🔍 Entendendo o Código

```
enquanto (opcao != 4) {  ← Repete até escolher "Sair"
    escolha (opcao) {     ← Verifica qual opção foi escolhida
        caso 1:           ← Se digitou 1, faz algo
            ...
            pare          ← Importante! Sai do escolha
    }
}
```

> 💡 O `pare` dentro de cada `caso` é obrigatório! Sem ele, o programa executa os próximos casos também.

---

## 🚀 Etapa 2 — Cadastro de Produtos com Vetores

### 🎓 O que estamos aplicando
- **Vetores (arrays)** — para armazenar listas de dados (nomes, preços, estoque)
- **Laço `para`** — para percorrer todos os elementos do vetor
- **Índices** — para acessar posições específicas do vetor

### 📝 O que fazer
1. Copie o código do arquivo `etapa2-cadastro-produtos.por`
2. Cole no Portugol Studio Web e execute

### 🧪 O que testar
- Escolha opção 2 (Consultar Preço) e veja a lista completa de produtos
- Note que os produtos já vêm pré-cadastrados (8 produtos)
- Observe os índices (0 a 7) ao lado de cada produto

### 🔍 Entendendo o Código

```
cadeia produtos[8]    ← Vetor de 8 posições para nomes
real precos[8]        ← Vetor de 8 posições para preços
inteiro estoque[8]    ← Vetor de 8 posições para quantidade

produtos[0] = "Arroz 5kg"    ← Posição 0 = primeiro produto
precos[0] = 22.90             ← Preço do primeiro produto
estoque[0] = 50               ← Quantidade em estoque
```

> 💡 Em Portugol, vetores começam na posição **0** (zero)! Um vetor de 8 posições vai de 0 a 7.

---

## 🚀 Etapa 3 — Registro de Vendas

### 🎓 O que estamos aplicando
- **Acumulador** — variável que soma valores a cada iteração (total da venda)
- **Contador** — variável que conta quantos itens foram vendidos
- **Validação** — verificar se tem estoque antes de vender
- **Laço dentro de laço** — loop de itens dentro do loop do menu

### 📝 O que fazer
1. Copie o código do arquivo `etapa3-venda-produtos.por`
2. Cole no Portugol Studio Web e execute

### 🧪 O que testar
- Escolha opção 1 (Vender)
- Adicione 2 ou 3 produtos na mesma venda
- Tente vender mais do que o estoque disponível
- Consulte os produtos depois e veja que o estoque diminuiu

### 🔍 Entendendo o Código

```
total_venda = total_venda + subtotal   ← Acumulador (soma a cada item)
estoque[codigo] = estoque[codigo] - qtd ← Diminui estoque
num_vendas = num_vendas + 1             ← Contador de vendas
```

> ⚠️ **Sempre valide o estoque antes de vender!** Um sistema real nunca pode vender algo que não tem.

---

## 🚀 Etapa 4 — Cálculo de Troco e Desconto

### 🎓 O que estamos aplicando
- **Condicionais compostas (se/senao se/senao)** — para faixas de desconto
- **Operações com porcentagem** — calcular desconto sobre o total
- **Validação de entrada** — pagamento precisa ser suficiente
- **Laço de validação** — repete até receber valor válido

### 📝 O que fazer
1. Copie o código do arquivo `etapa4-troco-desconto.por`
2. Cole no Portugol Studio Web e execute

### 🧪 O que testar
- Faça uma venda de mais de R$100 e veja o desconto de 10%
- Faça uma venda de mais de R$200 e veja o desconto de 15%
- Tente pagar com valor menor que o total (deve recusar)
- Pague com valor maior e confira o troco

### 🔍 Entendendo o Código

```
se (total > 200.0) {
    desconto = total * 0.15      ← 15% de desconto
} senao se (total > 100.0) {
    desconto = total * 0.10      ← 10% de desconto
} senao {
    desconto = 0.0               ← Sem desconto
}
total_final = total - desconto    ← Aplica desconto
troco = pagamento - total_final   ← Calcula troco
```

> 💡 A ordem dos `se/senao se` importa! Sempre teste o maior valor primeiro (200 antes de 100).

---

## 🚀 Etapa 5 — Relatórios de Fechamento

### 🎓 O que estamos aplicando
- **Algoritmo de busca do menor valor** — encontrar produto com menor estoque
- **Cálculo de média** — total dividido pela quantidade
- **Acumuladores globais** — total do dia, quantidade de vendas
- **Formatação de saída** — apresentar dados de forma organizada

### 📝 O que fazer
1. Copie o código do arquivo `etapa5-relatorios.por`
2. Cole no Portugol Studio Web e execute

### 🧪 O que testar
- Faça 3 ou 4 vendas diferentes
- Escolha opção 3 (Fechar Caixa) e veja o relatório
- Confira se o total do dia bate com a soma das vendas
- Veja qual produto está com estoque mais baixo

### 🔍 Entendendo o Código

```
// Encontrar menor estoque (alerta de reposição)
inteiro menor_estoque = estoque[0]
inteiro idx_menor = 0
para (inteiro i = 1; i < 8; i++) {
    se (estoque[i] < menor_estoque) {
        menor_estoque = estoque[i]
        idx_menor = i
    }
}
```

> 💡 Para encontrar o menor valor em um vetor, assumimos que o primeiro é o menor e comparamos com todos os outros.

---

## 🚀 Etapa 6 — Versão Final Completa

### 🎓 O que estamos aplicando
- **TUDO!** Todos os conceitos das etapas anteriores combinados
- **Organização de código** — comentários, separadores visuais
- **Boas práticas** — validações, mensagens claras para o usuário

### 📝 O que fazer
1. Copie o código do arquivo `versao-final.por`
2. Cole no Portugol Studio Web e execute
3. Teste TODAS as funcionalidades

### 🧪 Roteiro de Teste Completo
1. ✅ Consulte a lista de produtos (opção 2)
2. ✅ Faça uma venda pequena (< R$100, sem desconto)
3. ✅ Faça uma venda média (> R$100, desconto 10%)
4. ✅ Faça uma venda grande (> R$200, desconto 15%)
5. ✅ Tente vender sem estoque
6. ✅ Feche o caixa e veja o relatório (opção 3)
7. ✅ Saia do programa (opção 4)

---

## 🏆 Conceitos Aplicados no Projeto

| Conceito | Onde aparece |
|----------|--------------|
| Variáveis (inteiro, real, cadeia) | Todo o projeto |
| Entrada/Saída (leia, escreva) | Todo o projeto |
| Laço enquanto | Menu principal |
| Laço para | Listar produtos, relatórios |
| Estrutura escolha/caso | Menu de opções |
| Condicionais (se/senao) | Validações, descontos |
| Vetores (arrays) | Produtos, preços, estoque |
| Acumuladores e contadores | Vendas, totais |
| Algoritmo de busca (menor) | Relatório de estoque |

---

## 👩‍🏫 Para a Professora

Este projeto cobre os seguintes objetivos de aprendizagem:
- Estruturas de repetição (enquanto, para)
- Estruturas de decisão (se/senao, escolha/caso)
- Vetores e manipulação de dados
- Operações matemáticas e lógicas
- Validação de dados de entrada
- Algoritmos de busca e acumulação

**Sugestão de avaliação:** Peça aos alunos que adicionem uma funcionalidade extra, como:
- Cadastrar novo produto durante a execução
- Buscar produto por nome
- Histórico das últimas 5 vendas

---

> 📝 **Projeto desenvolvido para a disciplina de Lógica e Pensamento Computacional — ETE**
