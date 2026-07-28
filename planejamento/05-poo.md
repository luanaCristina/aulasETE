# 📘 Disciplina 5 — Programação Orientada a Objetos (POO)

> **Carga Horária:** 80h | **Aulas:** 40 encontros de 2h  
> **Linguagem:** TypeScript (tipagem + POO moderna)

---

## AULAS 01-02 — Paradigmas e Introdução a Classes
**Objetivo:** Diferenciar paradigmas, criar primeira classe com constructor.
**Prática:** Classe `Produto` com propriedades, constructor e método `descricao()`.

## AULAS 03-04 — Encapsulamento: Atributos e Métodos
**Objetivo:** Usar private, public, getters/setters para proteger dados.
**Prática:** Classe `ContaBancaria` com saldo privado e métodos depositar/sacar.

## AULAS 05-06 — Construtores e Sobrecarga
**Objetivo:** Parâmetros opcionais, valores default, validação no constructor.
**Prática:** Classe `Funcionario` que valida salário > 0 e nome não vazio.

## AULAS 07-08 — Herança
**Objetivo:** Usar extends e super para reaproveitar código.
**Prática:** `Animal` → `Cachorro` e `Gato` com comportamentos específicos.

## AULAS 09-10 — Polimorfismo
**Objetivo:** Sobrescrever métodos (override) e tratar objetos genericamente.
**Prática:** Array de `Forma[]` (Circulo, Retangulo) → calcularArea() polimórfico.

## AULAS 11-12 — Classes Abstratas
**Objetivo:** Criar classes base que não podem ser instanciadas.
**Prática:** `VeiculoAbstrato` com método abstrato `calcularIPVA()`.

## AULAS 13-14 — Interfaces
**Objetivo:** Definir contratos com interfaces (implements).
**Prática:** Interface `Pagavel` implementada por `Boleto`, `CartaoCredito`, `PIX`.

## AULAS 15 — AVALIAÇÃO A1
**Formato:** Modelar + implementar hierarquia de classes para pet shop.

## AULAS 16-18 — Composição vs Herança
**Objetivo:** Preferir composição ("tem um") sobre herança ("é um").
**Prática:** `Pedido` que contém `Cliente` e lista de `ItemPedido`.

## AULAS 19-20 — Tratamento de Exceções
**Objetivo:** throw, try/catch/finally, criar exceções customizadas.
**Prática:** Sistema bancário que lança `SaldoInsuficienteError`.

## AULAS 21-22 — Generics (TypeScript)
**Objetivo:** Criar classes/funções que funcionam com qualquer tipo.
**Prática:** `Repositorio<T>` genérico com add, findById, listAll.

## AULAS 23-24 — Padrão Repository e Camadas
**Objetivo:** Separar lógica de negócio do acesso a dados.
**Prática:** Refatorar exercício anterior em Service + Repository.

## AULAS 25-26 — Design Patterns: Singleton e Factory
**Objetivo:** Aplicar 2 padrões criacionais em contexto real.
**Prática:** `DatabaseConnection` (Singleton) + `NotificacaoFactory` (Email/SMS/Push).

## AULAS 27-28 — Design Patterns: Observer e Strategy
**Objetivo:** Aplicar padrões comportamentais.
**Prática:** Sistema de notificação (Observer) + cálculo de frete (Strategy).

## AULAS 29-30 — AVALIAÇÃO A2
**Formato:** Implementar sistema mini-ERP com: herança, interface, composição, exceções.

## AULAS 31-34 — SOLID (um princípio por aula)
**Objetivo:** S(RP), O(CP), L(SP), I(SP), D(IP) com exemplos e refatoração.
**Prática por aula:** código que viola o princípio → refatorar.

## AULAS 35-40 — Projeto Final: Sistema OO Completo
**Tema:** Sistema de gerenciamento de biblioteca (livros, usuários, empréstimos).
**Requisitos:** Herança, interfaces, exceções, SOLID, patterns, testes.
