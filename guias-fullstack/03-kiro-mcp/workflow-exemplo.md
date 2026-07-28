# Workflow Completo: Kiro + MCP em Ação

## Cenário: Criar uma feature com pesquisa, código e documentação

Este documento demonstra um workflow real de desenvolvimento usando Kiro com MCP.

---

## Passo 1: Pesquisar Documentação (MCP Fetch)

**Prompt no Kiro:**
```
Busque na documentação do Express.js como implementar rate limiting
```

**O que acontece:**
- O MCP `fetch` acessa `https://expressjs.com/en/guide/`
- Extrai o conteúdo relevante sobre rate limiting
- Retorna um resumo com exemplos de código

---

## Passo 2: Verificar Implementações Existentes (MCP GitHub)

**Prompt no Kiro:**
```
Busque repositórios no GitHub que implementam rate limiting com Express
```

**O que acontece:**
- O MCP `github` executa `search_repositories` com query "express rate limit"
- Retorna os repos mais populares com estrelas e descrições
- Permite inspecionar código de referência

---

## Passo 3: Implementar a Feature

**Prompt no Kiro:**
```
Com base na pesquisa, implemente rate limiting na nossa API Express 
usando o pacote express-rate-limit com limite de 100 requests por 15 minutos
```

**O que acontece:**
- Kiro gera o código baseado nas referências coletadas
- Cria o middleware com a configuração solicitada
- Integra no app.ts existente

---

## Passo 4: Criar Issue de Tracking (MCP GitHub)

**Prompt no Kiro:**
```
Crie uma issue no repositório meu-usuario/meu-projeto com:
- Título: "Implementar rate limiting na API"
- Body: descrição técnica da implementação
- Labels: enhancement, security
```

**O que acontece:**
- O MCP `github` executa `create_issue`
- Retorna o link da issue criada (ex: #42)

---

## Resultado Final

Em menos de 5 minutos, com prompts naturais:
1. ✅ Pesquisou documentação oficial
2. ✅ Analisou implementações de referência
3. ✅ Gerou código funcional e integrado
4. ✅ Criou tracking no GitHub

**Sem MCP**, esse processo envolveria:
- Abrir navegador → buscar docs → ler → voltar ao editor
- Abrir GitHub → buscar repos → analisar código → voltar ao editor
- Escrever código manualmente
- Abrir GitHub → criar issue manualmente

**Economia estimada:** ~20 minutos por feature desse tipo.
