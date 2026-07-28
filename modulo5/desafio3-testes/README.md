# 💳 Desafio 3 — Validação de Transações Financeiras (45 min)

## Contexto do Mercado

Você trabalha numa **fintech de pagamentos** (tipo PicPay/Nubank). O módulo de validação
de transações tem regras que PRECISAM de testes unitários para garantir que nenhum bug
vá para produção e cause prejuízo financeiro.

O código da função `validarTransacao()` já está pronto. Seu trabalho é **escrever os testes**
que cobrem todos os cenários (happy path + edge cases + erros).

---

## 📐 Regras de Negócio da Função

A função `validarTransacao(transacao)` deve:
1. Rejeitar se valor ≤ 0
2. Rejeitar se valor > limite do usuário
3. Rejeitar se conta de destino = conta de origem (auto-transferência)
4. Rejeitar se horário entre 23h-6h e valor > R$ 1000 (anti-fraude)
5. Aceitar se todas as validações passarem

---

## 📤 Output Esperado dos Testes

```
✓ Deve aceitar transação válida
✓ Deve rejeitar valor zero
✓ Deve rejeitar valor negativo
✓ Deve rejeitar valor acima do limite
✓ Deve rejeitar auto-transferência
✓ Deve rejeitar valor > 1000 em horário noturno (23h)
✓ Deve rejeitar valor > 1000 em horário noturno (3h)
✓ Deve aceitar valor > 1000 em horário diurno (14h)
✓ Deve aceitar valor ≤ 1000 em horário noturno
```

---

## ⏱️ Tempo: 45 minutos
## 📐 Habilidades: Escrita de testes, AAA pattern, edge cases, mocking de data
