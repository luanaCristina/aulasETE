# 07 - Testes Unitários e de Mutação

## Descrição

Suíte completa de testes unitários e de mutação para os projetos existentes,
com explicação teórica e prática de execução.

## Conceitos

### O que são Testes Unitários?

Testes unitários validam o comportamento de **unidades isoladas** de código
(funções, métodos, classes) sem dependências externas.

### Princípios FIRST

| Princípio | Significado |
|-----------|------------|
| **F**ast | Rápidos — executam em milissegundos |
| **I**ndependent | Independentes — sem ordem ou dependência entre testes |
| **R**epeatable | Repetíveis — mesmo resultado sempre |
| **S**elf-validating | Auto-verificáveis — pass/fail sem inspeção manual |
| **T**imely | Oportunos — escritos junto/antes do código |

### Cobertura de Código (Code Coverage)

Métrica que indica o percentual de código executado durante os testes.

| Tipo | O que Mede |
|------|-----------|
| **Line Coverage** | Linhas executadas |
| **Branch Coverage** | Caminhos de decisão (if/else) |
| **Function Coverage** | Funções chamadas |
| **Statement Coverage** | Statements executados |

**Meta recomendada:** 80%+ de cobertura (mas cobertura alta ≠ testes bons!)

---

### O que são Testes de Mutação?

Testes de Mutação verificam a **qualidade dos seus testes**.

O processo:
1. O framework cria "mutantes" — pequenas alterações no código-fonte
2. Executa seus testes contra cada mutante
3. Se o teste FALHA → mutante MORTO (bom! teste detectou a mudança)
4. Se o teste PASSA → mutante SOBREVIVENTE (ruim! teste não percebeu)

**Mutation Score = Mutantes Mortos / Total de Mutantes × 100%**

#### Tipos de Mutação

| Operador | Original | Mutante |
|----------|----------|---------|
| Arithmetic | `a + b` | `a - b` |
| Relational | `a > b` | `a >= b` |
| Logical | `a && b` | `a \|\| b` |
| Negation | `if (x)` | `if (!x)` |
| Return | `return true` | `return false` |
| Remove | `statement;` | ` ` (removido) |

#### Por que cobertura não basta?

```python
# Código:
def desconto(total):
    if total > 100:
        return total * 0.9
    return total

# Teste com 100% de cobertura, mas FRACO:
def test_desconto():
    assert desconto(200) != None  # Passa, mas não valida o VALOR!
    assert desconto(50) != None
```

O teste de mutação revelaria que trocar `0.9` por `0.8` não quebra nenhum teste!

---

## Estrutura de Arquivos

```
07-unit-mutation-testing/
├── python-tests/
│   ├── test_seo_checker.py       # Testes unitários do SEO Checker
│   ├── conftest.py               # Fixtures compartilhadas
│   ├── pytest.ini                # Configuração do pytest
│   └── run_mutation.sh           # Script para rodar mutmut
├── js-tests/
│   ├── maps-utils.test.js        # Testes unitários das funções do Maps
│   ├── maps-utils.js             # Módulo de funções extraídas
│   ├── jest.config.js            # Configuração Jest
│   ├── package.json              # Dependências
│   └── stryker.conf.json         # Configuração StrykerJS
└── README.md                     # Este arquivo
```

## Como Executar

### Python (SEO Checker)

```bash
cd aula/guias-fullstack/07-unit-mutation-testing/python-tests/

# Instalar dependências
pip install pytest pytest-cov mutmut beautifulsoup4

# Rodar testes unitários
pytest test_seo_checker.py -v

# Rodar com cobertura
pytest test_seo_checker.py --cov=. --cov-report=html

# Rodar testes de mutação
mutmut run --paths-to-mutate=../../04-seo-audit-tool/seo_checker.py --tests-dir=.
mutmut results
```

### JavaScript (Maps Utils)

```bash
cd aula/guias-fullstack/07-unit-mutation-testing/js-tests/

# Instalar dependências
npm install

# Rodar testes
npm test

# Rodar com cobertura
npm run test:coverage

# Rodar testes de mutação (StrykerJS)
npx stryker run
```

## Referências

- pytest: https://docs.pytest.org/
- mutmut: https://mutmut.readthedocs.io/
- Jest: https://jestjs.io/docs/getting-started
- StrykerJS: https://stryker-mutator.io/docs/stryker-js/introduction/
