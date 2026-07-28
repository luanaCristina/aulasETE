# 📖 Revisões — Redes e Sistemas Operacionais (3 Avaliações)

---

## REVISÃO AV1 — HTTP, IP, DNS, Modelo TCP/IP

### Resumo Rápido
```
Camada Aplicação:  HTTP, HTTPS, DNS, FTP, SMTP
Camada Transporte: TCP (confiável) / UDP (rápido)
Camada Rede:       IP, ICMP (ping), roteamento
Camada Enlace:     Ethernet, Wi-Fi, MAC address
```

**Fluxo de uma requisição:** Navegador → DNS (resolve IP) → TCP 3-way handshake → HTTP GET → Resposta → Renderização

**Status Codes:** 2xx=sucesso, 3xx=redirect, 4xx=erro cliente, 5xx=erro servidor

### Erros Comuns
1. Confundir TCP com HTTP — TCP é transporte, HTTP é aplicação
2. Achar que IP = endereço físico — IP é lógico, MAC é físico
3. Não saber porta padrão: HTTP=80, HTTPS=443, SSH=22, PostgreSQL=5432

### Exercícios (5)
1. Descrever em 5 passos o que acontece ao acessar google.com
2. Classificar 8 status codes (200,201,301,400,401,403,404,500)
3. Calcular: quantos hosts cabem em 192.168.1.0/24?
4. Qual comando mostra IP local? E a rota até um servidor?
5. Diferenciar TCP e UDP com 2 exemplos de uso de cada

---

## REVISÃO AV2 — Linux + Scripts + SSH

### Comandos Essenciais
```bash
ls -la        # listar com detalhes
cd / pwd      # navegar / ver onde está
mkdir -p      # criar pasta (com pais)
cp -r / mv   # copiar / mover
rm -rf        # deletar (CUIDADO!)
chmod 755     # permissões (rwxr-xr-x)
cat / less    # ver conteúdo
grep "texto"  # buscar em arquivos
ps aux        # processos rodando
kill -9 PID   # matar processo
```

### Exercícios (5)
1. Script .sh que cria estrutura de projeto (src/, tests/, docs/)
2. Configurar chave SSH e testar com `ssh -T git@github.com`
3. Cron job que executa script todo dia às 22h
4. Script de backup: compacta pasta com data no nome (.tar.gz)
5. Encontrar processo usando porta 3000 e encerrar

---

## REVISÃO AV3 — Prova Final Integrada

### Checklist
- [ ] Explicar modelo TCP/IP (4 camadas)
- [ ] Status codes HTTP principais
- [ ] Comandos Linux básicos (15+)
- [ ] Permissões (chmod octal)
- [ ] Shell script funcional
- [ ] SSH (gerar chave, configurar)
- [ ] Firewall (ufw allow/deny)
