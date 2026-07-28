# 📝 Avaliações — Fundamentos de Redes e Sistemas Operacionais

> **Módulo:** I | **Carga Horária:** 40h

---

## AVALIAÇÃO 1 — Diagnóstica (Peso: 25%)

**Duração:** 60 min | **Conteúdo:** HTTP, IP, DNS, modelo TCP/IP

### Q1 (25 pts): Explique o caminho de uma requisição
"Quando você digita google.com no navegador, o que acontece passo a passo?"
(DNS → IP → TCP → HTTP GET → Response)

### Q2 (25 pts): Identificar componentes de rede
Dado diagrama de rede simples, identificar: roteador, switch, servidor, cliente,
IP, máscara, gateway.

### Q3 (25 pts): Status Codes HTTP
Associar 10 status codes (200, 201, 301, 400, 401, 403, 404, 500, 502, 503)
às suas descrições e exemplos de uso.

### Q4 (25 pts): Comandos de terminal
Escrever o comando para: ver IP local, pingar servidor, ver rotas,
resolver DNS, listar portas abertas.

---

## AVALIAÇÃO 2 — Projeto Prático (Peso: 35%)

### Projeto: Configurar Ambiente de Desenvolvimento

1. Criar script .sh que: cria estrutura de pastas para projeto,
   inicializa git, instala Node, cria .gitignore
2. Configurar SSH para GitHub (gerar chave, adicionar)
3. Configurar cron job que faz backup de pasta a cada hora
4. Documentar tudo em README com screenshots

**Rubrica:** Script funcional (30%) + SSH configurado (25%) + Cron (25%) + Docs (20%)

---

## AVALIAÇÃO 3 — Prova Final (Peso: 40%)

### Parte A — Objetiva (40 pts): 10 questões múltipla escolha
Temas: modelo OSI, TCP vs UDP, HTTPS/TLS, portas conhecidas, permissões Linux.

### Parte B — Prática no Terminal (60 pts)
Sequência de tarefas no Linux: criar usuário, definir permissões (chmod),
escrever script de monitoramento (ps + grep), configurar firewall (ufw).
