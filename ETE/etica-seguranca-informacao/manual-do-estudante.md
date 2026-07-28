# 📘 Manual de Apoio ao Estudante — Ética e Segurança da Informação (40h)

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco | Profª Luana Cristina**
**Disciplina conceitual — sem código**

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 Tríade CIA (Confidentiality, Integrity, Availability)

A base de toda segurança da informação são três pilares:

| Pilar | Significado | Pergunta-chave |
|---|---|---|
| **Confidencialidade** | Só quem deve ver, vê | Quem pode acessar? |
| **Integridade** | Dados não são alterados indevidamente | Os dados são confiáveis? |
| **Disponibilidade** | Sistemas acessíveis quando necessário | Está funcionando agora? |

**Analogia — Cofre de banco:**
- **Confidencialidade** = Só o dono e o gerente conhecem a combinação
- **Integridade** = Ninguém pode trocar o conteúdo sem autorização
- **Disponibilidade** = O banco abre no horário comercial sem falhas

**Exemplos de ataques a cada pilar:**
- Confidencialidade violada → Vazamento de dados (ex: lista de CPFs)
- Integridade violada → Alteração de nota no sistema escolar
- Disponibilidade violada → Ataque DDoS derruba site do governo

### 1.2 Criptografia Simétrica

Na criptografia simétrica, a mesma chave é usada para cifrar e decifrar.

**Analogia — Cadeado com uma chave:**
Imagine um cadeado que você tranca e destranca com a **mesma chave**. Você e seu amigo precisam ter cópias dessa chave. O problema? Se alguém copia a chave, pode abrir seus segredos.

**Algoritmos comuns:** AES-256, ChaCha20

**Vantagens:** Rápida, eficiente para grandes volumes de dados
**Desvantagens:** Distribuição da chave é problemática

### 1.3 Criptografia Assimétrica

Na criptografia assimétrica, existem duas chaves: pública (para cifrar) e privada (para decifrar).

**Analogia — Caixa postal trancada:**
Qualquer pessoa pode colocar uma carta na sua caixa postal (usar sua chave pública), mas só você tem a chave para abrir e ler (chave privada).

**Algoritmos comuns:** RSA, ECC (Elliptic Curve)

**Uso real:** HTTPS, assinatura digital, SSH

### 1.4 Hash

Hash é uma função que transforma dados de qualquer tamanho em uma "impressão digital" de tamanho fixo.

**Analogia — Impressão digital:**
Assim como cada pessoa tem uma impressão digital única, cada arquivo/texto gera um hash único. Se mudar UMA letra, o hash muda completamente. E não dá para "voltar" do hash ao texto original.

**Propriedades:**
- Mesmo input → sempre mesmo output
- Qualquer mudança → output totalmente diferente
- Impossível reverter (unidirecional)
- Raro: dois inputs diferentes com mesmo hash (colisão)

**Algoritmos:** SHA-256, SHA-3, bcrypt (para senhas)

### 1.5 Firewall

Firewall é um sistema que controla o tráfego de rede entre zonas de confiança.

**Analogia — Portaria do prédio:**
O porteiro (firewall) fica na entrada do prédio (rede). Ele tem uma lista de regras: moradores podem entrar (tráfego permitido), desconhecidos são barrados (tráfego bloqueado), entregas vão para a recepção (DMZ).

**Tipos:**
- Firewall de rede (hardware/software entre redes)
- Firewall de host (no próprio computador)
- WAF (Web Application Firewall — protege aplicações web)

### 1.6 Backup 3-2-1

Regra de ouro para backups seguros:

- **3** cópias dos dados (original + 2 backups)
- **2** tipos de mídia diferentes (HD externo + nuvem)
- **1** cópia offsite (fora do local físico)

**Exemplo prático para estudante:**
1. Arquivo original no notebook
2. Cópia no Google Drive (nuvem)
3. Cópia num pendrive guardado em casa

### 1.7 LGPD — Lei Geral de Proteção de Dados

A LGPD (Lei 13.709/2018) regula como empresas e pessoas coletam, armazenam e usam dados pessoais no Brasil.

**Analogia — Seus dados são sua casa:**
Ninguém pode entrar na sua casa sem permissão. A LGPD garante que empresas precisam da sua **autorização** (consentimento) para "entrar" nos seus dados pessoais, e devem explicar o que vão fazer lá dentro.

**Conceitos-chave:**
- **Titular** — dono dos dados (você, o cidadão)
- **Controlador** — quem decide o que fazer com os dados (a empresa)
- **Operador** — quem executa o tratamento sob ordens do controlador
- **DPO** — Encarregado de Proteção de Dados (responsável na empresa)
- **Consentimento** — autorização clara e específica do titular
- **Bases legais** — 10 justificativas para tratar dados (consentimento é uma delas)

**Direitos do titular:**
- Saber quais dados a empresa tem sobre você
- Pedir correção de dados incorretos
- Solicitar exclusão dos seus dados
- Revogar consentimento a qualquer momento
- Portabilidade (levar dados para outro serviço)

### 1.8 OWASP Top 10

OWASP (Open Web Application Security Project) lista as 10 vulnerabilidades mais críticas em aplicações web.

**Top 10 (2021):**
1. **Broken Access Control** — Usuário acessa o que não deveria
2. **Cryptographic Failures** — Dados sensíveis sem criptografia
3. **Injection** — SQL Injection, XSS (código malicioso injetado)
4. **Insecure Design** — Falhas na arquitetura de segurança
5. **Security Misconfiguration** — Configurações padrão inseguras
6. **Vulnerable Components** — Bibliotecas desatualizadas com falhas
7. **Auth Failures** — Falhas de autenticação e sessão
8. **Software Integrity Failures** — Atualizações sem verificação
9. **Logging Failures** — Logs insuficientes para detectar ataques
10. **SSRF** — Server-Side Request Forgery

### 1.9 Engenharia Social

Engenharia social é a manipulação psicológica de pessoas para obter informações ou acesso.

**Analogia — Golpe do "falso funcionário":**
Alguém liga fingindo ser do banco, cria urgência ("sua conta foi invadida!"), e pede seus dados. Não é hack técnico — é hack de pessoas.

**Tipos comuns:**
- **Phishing** — e-mail/site falso imitando serviços legítimos
- **Vishing** — phishing por telefone (voice phishing)
- **Smishing** — phishing por SMS
- **Pretexting** — criar um cenário falso convincente
- **Baiting** — deixar pendrive infectado em local público
- **Tailgating** — entrar em área restrita seguindo alguém autorizado

**Defesas:**
- Desconfiar de urgência ("aja agora ou perca acesso!")
- Verificar remetente/URL com atenção
- Nunca compartilhar senhas por telefone/e-mail
- Na dúvida, contatar o canal oficial diretamente

---

## Capítulo 2 — Exemplos de Código/Processo Comentados

### 2.1 Como Verificar se um Site Tem HTTPS

**Passo a passo:**

1. **Observe a barra de endereço:**
   - ✅ `https://` — conexão criptografada (cadeado)
   - ❌ `http://` — conexão sem criptografia (inseguro)

2. **Clique no cadeado** (🔒) ao lado do URL:
   - Verifique "Certificado válido"
   - Veja a empresa que emitiu (Let's Encrypt, DigiCert, etc.)
   - Confira a data de validade

3. **Red flags de sites falsos:**
   - URL com erros de digitação (bancodobrasil → bancodob**a**rsil)
   - Domínios estranhos (banco-brasil.xyz, login-banco.tk)
   - Certificado expirado ou autoassinado
   - Pop-ups pedindo dados imediatamente

4. **Teste avançado:**
   - Acesse [SSL Labs](https://www.ssllabs.com/ssltest/) → digite o URL
   - Nota A = excelente | F = péssimo
   - Verifique versão do TLS (mínimo TLS 1.2)

### 2.2 Como Analisar Email de Phishing (Red Flags)

**Checklist de análise:**

| # | Verificação | Red Flag |
|---|---|---|
| 1 | Remetente | Email estranho (suporte@banco-x.tk) |
| 2 | Saudação | Genérica ("Prezado cliente" em vez do seu nome) |
| 3 | Urgência | "Sua conta será bloqueada em 24h!" |
| 4 | Erros | Português com erros ortográficos/gramática |
| 5 | Link | Passar o mouse: URL diferente do texto |
| 6 | Anexo | Arquivos .exe, .zip, .scr inesperados |
| 7 | Pedido | Solicita senha, CPF, dados do cartão |
| 8 | Visual | Logo pixelado, layout quebrado |

**Procedimento ao receber email suspeito:**
1. **NÃO clique** em nenhum link
2. **NÃO baixe** anexos
3. **NÃO responda** ao email
4. Verifique o remetente real (clique em "mostrar detalhes")
5. Acesse o serviço diretamente pelo navegador (digite o URL oficial)
6. Reporte como phishing (botão no Gmail/Outlook)
7. Apague o email

### 2.3 Como Criar Política de Senhas Seguras

**Requisitos mínimos recomendados (2024):**


| Critério | Recomendação |
|---|---|
| Comprimento mínimo | 12 caracteres (ideal: 16+) |
| Complexidade | Misturar maiúsculas, minúsculas, números, símbolos |
| Unicidade | Senha diferente para cada serviço |
| Armazenamento | Usar gerenciador de senhas (Bitwarden, KeePass) |
| MFA | Ativar autenticação multifator sempre que possível |
| Troca | Não trocar periodicamente sem motivo (NIST 2024) |

**Método para criar senhas fortes — Passphrase:**
1. Escolha 4-5 palavras aleatórias: `gato mesa nuvem café`
2. Junte: `gatoMesaNuvemCafe`
3. Adicione número e símbolo: `gatoMesaNuvemCafe#42`
4. Resultado: 20 caracteres, fácil de lembrar, difícil de quebrar

**Exemplo de política para sistema:**
```
POLÍTICA DE SENHAS — Sistema Escolar XYZ
• Mínimo 12 caracteres
• Pelo menos: 1 maiúscula + 1 minúscula + 1 número + 1 símbolo
• Não pode conter: nome do usuário, email, sequências (123, abc)
• Bloqueio após 5 tentativas erradas (desbloqueio em 15 min)
• MFA obrigatório para acesso administrativo
• Senhas armazenadas com bcrypt (custo 12)
```

### 2.4 Checklist LGPD para Desenvolvedores

**Antes de coletar dados:**
- [ ] Identificar quais dados pessoais são realmente necessários
- [ ] Definir a base legal (consentimento, contrato, legítimo interesse, etc.)
- [ ] Redigir política de privacidade clara e acessível
- [ ] Implementar mecanismo de consentimento (opt-in explícito)
- [ ] Permitir que o usuário acesse, corrija e exclua seus dados

**Durante o desenvolvimento:**
- [ ] Criptografar dados sensíveis em repouso e em trânsito
- [ ] Implementar controle de acesso (quem vê o quê)
- [ ] Registrar logs de acesso a dados pessoais
- [ ] Definir tempo de retenção (não guardar para sempre)
- [ ] Anonimizar dados para análises/testes

**Em caso de incidente:**
- [ ] Notificar a ANPD em prazo razoável (recomendado: 72h)
- [ ] Comunicar os titulares afetados
- [ ] Documentar o incidente e ações tomadas
- [ ] Implementar correções para evitar recorrência

### 2.5 Como Planejar Backup 3-2-1

**Passo a passo para implementar:**

**1. Inventário de dados críticos:**
| Dado | Importância | Frequência de mudança |
|---|---|---|
| Código-fonte | Alta | Diária |
| Banco de dados | Crítica | Contínua |
| Documentos | Média | Semanal |
| Configurações | Alta | Mensal |

**2. Definir estratégia:**
| Cópia | Mídia | Local | Frequência |
|---|---|---|---|
| Original | SSD do servidor | Escritório | Tempo real |
| Backup 1 | HD externo | Escritório (armário trancado) | Diário |
| Backup 2 | Cloud (Google Cloud/AWS S3) | Offsite (região diferente) | Diário |

**3. Testar recuperação:**
- Mensalmente: restaurar 1 arquivo aleatório do backup
- Trimestralmente: simular recuperação completa
- Documentar tempo de recuperação (RTO) e ponto de recuperação (RPO)

**4. Automatizar:**
- Scripts de backup agendados (cron/Task Scheduler)
- Alertas se backup falhar
- Versionamento (manter últimos 30 dias)

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Significado em Português |
|---|---|
| **CIA Triad** | Tríade: Confidencialidade, Integridade e Disponibilidade |
| **Confidentiality** | Confidencialidade — garantir que só autorizados acessem |
| **Integrity** | Integridade — garantir que dados não foram alterados |
| **Availability** | Disponibilidade — garantir que sistemas estejam acessíveis |
| **Encryption** | Criptografia — transformar dados em formato ilegível |
| **Symmetric** | Simétrica — mesma chave para cifrar e decifrar |
| **Asymmetric** | Assimétrica — par de chaves (pública + privada) |
| **Hash** | Função que gera "impressão digital" irreversível dos dados |
| **Certificate** | Certificado digital — prova de identidade de um servidor |
| **SSL/TLS** | Protocolos de criptografia para comunicação segura |
| **HTTPS** | HTTP com TLS — navegação web criptografada |
| **Firewall** | Sistema que filtra tráfego de rede (permite/bloqueia) |
| **IDS/IPS** | Sistema de Detecção/Prevenção de Intrusão |
| **Malware** | Software malicioso (vírus, trojan, worm, spyware) |
| **Ransomware** | Malware que sequestra dados e exige resgate |
| **Phishing** | Golpe que imita serviço legítimo para roubar dados |
| **Social Engineering** | Manipulação psicológica para obter acesso/informações |
| **MFA** | Autenticação Multifator (senha + código + biometria) |
| **Backup** | Cópia de segurança dos dados |
| **Disaster Recovery** | Plano para restaurar sistemas após incidente grave |
| **LGPD** | Lei Geral de Proteção de Dados Pessoais (Brasil) |
| **GDPR** | Regulamento Geral de Proteção de Dados (Europa) |
| **DPO** | Data Protection Officer — Encarregado de Proteção de Dados |
| **Consent** | Consentimento — autorização do titular para uso dos dados |
| **Data Subject** | Titular dos dados — a pessoa a quem os dados se referem |
| **Controller** | Controlador — quem decide como os dados são tratados |
| **Processor** | Operador — quem executa o tratamento por ordem do controlador |
| **OWASP** | Projeto aberto sobre segurança de aplicações web |
| **Vulnerability** | Vulnerabilidade — fraqueza que pode ser explorada |
| **Exploit** | Código/técnica que explora uma vulnerabilidade |
| **Pentest** | Teste de penetração — simula ataque para encontrar falhas |
| **Ethical Hacking** | Hacking ético — invadir com autorização para testar segurança |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### Organizações e Referências
- 📖 [OWASP](https://owasp.org/) — Projeto aberto de segurança de aplicações
- 📖 [CERT.br](https://www.cert.br/) — Centro de resposta a incidentes (Brasil)
- 📖 [SaferNet Brasil](https://new.safernet.org.br/) — Segurança e direitos humanos na internet
- 📖 [ANPD](https://www.gov.br/anpd/) — Autoridade Nacional de Proteção de Dados

### Cursos e Prática
- 🎓 [TryHackMe](https://tryhackme.com/) — Aprender segurança praticando (gamificado)
- 🎓 [Coursera — Google Cybersecurity Certificate](https://www.coursera.org/professional-certificates/google-cybersecurity) — Curso completo gratuito (audit)
- 🎓 [HackerOne Hacktivity](https://hackerone.com/hacktivity) — Bug bounties reais

### Ferramentas
- 🛠️ [CyberChef](https://gchq.github.io/CyberChef/) — Canivete suíço de criptografia
- 🛠️ [Have I Been Pwned](https://haveibeenpwned.com/) — Verificar se seu email foi vazado
- 🛠️ [Bitwarden](https://bitwarden.com/) — Gerenciador de senhas gratuito e open-source
- 🛠️ [VirusTotal](https://www.virustotal.com/) — Analisar arquivos/URLs suspeitos

### Legislação
- 📜 [LGPD — Texto completo](http://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm)
- 📜 [LGPD para Desenvolvedores (Serpro)](https://www.serpro.gov.br/lgpd)

---

> **Dica da professora:** Segurança não é produto, é processo. Comece protegendo suas próprias contas (MFA + gerenciador de senhas), depois aplique nos sistemas que desenvolver. E lembre-se: o elo mais fraco da corrente de segurança é sempre o ser humano! 🔐
