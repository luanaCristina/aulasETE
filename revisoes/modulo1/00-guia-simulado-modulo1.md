# 🎯 Guia de Revisão Intensiva — Simulado Módulo I

> **Dica:** Estude este guia na véspera do simulado. Foco nos pontos  
> de conexão entre as disciplinas — o simulado cobra isso!

---

## ✅ Checklist de Competências (O que PRECISO saber)

### Lógica de Programação
- [ ] let/const + tipos + template literals
- [ ] if/else (com &&, ||, !) + switch/case + break
- [ ] for / while / do-while (sem loop infinito)
- [ ] Array: push, splice, filter, map, reduce, find
- [ ] Funções: parâmetros, return, arrow functions
- [ ] String: split, join, includes, toLowerCase, trim

### HTML/CSS
- [ ] Tags semânticas (header, nav, main, section, footer)
- [ ] Formulários acessíveis (label + input + required)
- [ ] Flexbox (justify-content, align-items, gap, wrap)
- [ ] Grid (grid-template-columns, repeat, auto-fit/minmax)
- [ ] Mobile-first (@media min-width)
- [ ] Box model + box-sizing: border-box

### Redes/SO
- [ ] Modelo TCP/IP (4 camadas) e protocolos de cada
- [ ] HTTP: verbos (GET/POST), status codes (200,201,400,401,404,500)
- [ ] Comandos Linux: ls, cd, mkdir, chmod, grep, ps
- [ ] SSH: conceito de chave pública/privada

### UI/UX
- [ ] Diferença UI vs UX
- [ ] Princípios CRAP (Contraste, Repetição, Alinhamento, Proximidade)
- [ ] Mobile-First no design
- [ ] WCAG: contraste 4.5:1, alt text, label

---

## 🔗 Resumo Integrado: Como Tudo se Conecta

```
┌────────────────────────────────────────────────────────────┐
│ UI/UX (Figma)                                              │
│  → Define o LAYOUT e a EXPERIÊNCIA                         │
│  → Gera wireframe/mockup que o dev vai implementar         │
└──────────────────────┬─────────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────────┐
│ HTML/CSS                                                   │
│  → Implementa o design com CÓDIGO                          │
│  → HTML = estrutura (semântica)                            │
│  → CSS = visual (Flexbox/Grid, cores, responsividade)      │
└──────────────────────┬─────────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────────┐
│ JavaScript (Lógica)                                        │
│  → Adiciona INTERATIVIDADE ao HTML/CSS                     │
│  → Validação de formulários                                │
│  → Manipulação dinâmica do DOM                             │
│  → Processamento de dados (arrays, cálculos)               │
└──────────────────────┬─────────────────────────────────────┘
                       ▼
┌────────────────────────────────────────────────────────────┐
│ Redes/SO                                                   │
│  → JavaScript faz requisições HTTP para APIs               │
│  → O site roda em um SERVIDOR (Linux)                      │
│  → DNS resolve o domínio → IP → porta → aplicação          │
│  → Deploy: terminal, SSH, permissões                       │
└────────────────────────────────────────────────────────────┘
```

**Na prática:** Você desenha no Figma → implementa com HTML/CSS →
adiciona lógica com JS → publica num servidor Linux via SSH.
Esse é o fluxo real do mercado!

---

## 🏃 Simulado Treino — 5 Questões de Aquecimento

### Q1 (Lógica + HTML)
O que o código abaixo exibe?
```javascript
const itens = ['<p>', '<div>', '<section>', '<span>'];
const semanticos = itens.filter(tag => !['<div>', '<span>'].includes(tag));
console.log(semanticos.length);
```
A) 4 — B) 2 ✅ — C) 0 — D) 3

**Explicação:** filter remove div e span (não semânticos) → sobra [`<p>`, `<section>`] = 2 itens.

---

### Q2 (CSS + Redes)
Para que um site seja responsivo no celular, qual meta tag é OBRIGATÓRIA no `<head>`?

A) `<meta charset="UTF-8">`  
B) `<meta name="viewport" content="width=device-width, initial-scale=1.0">` ✅  
C) `<meta http-equiv="refresh">`  
D) `<meta name="description">`

**Explicação:** Sem viewport meta, mobile browsers renderizam a página em 980px e aplicam zoom.

---

### Q3 (Redes + Lógica)
Seu site retorna status 404. O que isso significa e onde está o erro?

A) Servidor caiu (erro no back-end)  
B) A URL que o cliente pediu não existe no servidor ✅  
C) O usuário não está autenticado  
D) O banco de dados está fora do ar

**Explicação:** 404 = Not Found (erro do CLIENTE ao digitar URL ou link quebrado). 500 = erro do servidor. 401 = não autenticado.

---

### Q4 (UI/UX + CSS)
Segundo WCAG, qual é o contraste MÍNIMO entre texto e fundo?

A) 2:1  
B) 3:1  
C) 4.5:1 ✅  
D) 7:1

**Explicação:** 4.5:1 é o mínimo para texto normal no nível AA. 3:1 é para texto grande. 7:1 é nível AAA (ideal mas não obrigatório).

---

### Q5 (Integrada)
Qual sequência representa CORRETAMENTE o fluxo de publicação de um site?

A) Deploy → Código → Design → Testes  
B) Design → HTML/CSS → JavaScript → Deploy no servidor ✅  
C) JavaScript → HTML → CSS → Figma  
D) Servidor → DNS → HTML → Browser

**Explicação:** O fluxo de desenvolvimento é: planejar (design) → implementar (HTML/CSS/JS) → publicar (deploy). A alternativa D descreve o fluxo de acesso, não de desenvolvimento.

---

## 💡 Dicas Finais para o Simulado

1. **Leia TODA a questão** antes de marcar — pegadinhas estão nos detalhes
2. **Elimine 2 alternativas** absurdas, depois escolha entre as 2 restantes
3. **Na discursiva:** organize em tópicos, não escreva um textão corrido
4. **Gerencie o tempo:** 5 min por objetiva, 25 min por discursiva
5. **Confie no que praticou:** se fez os exercícios, você está preparado!

---

> 🌟 "O sucesso na programação não vem de decorar — vem de praticar até  
> o raciocínio ficar natural. Vocês já praticaram. Agora é só confirmar!" 🚀
