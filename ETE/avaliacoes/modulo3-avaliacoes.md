# 📋 Pacote de Avaliações — Módulo 3
## Curso Técnico em Desenvolvimento de Sistemas | ETE Pernambuco
### Profª Luana Cristina

---

**Disciplinas do Módulo 3:**
| Disciplina | CH | Conteúdos-Chave |
|---|---|---|
| Programação Mobile Android | 160h | Kotlin, Android Studio, Activity lifecycle, XML layouts, RecyclerView, Intents, SharedPreferences, Room/SQLite, Firebase, Material Design |
| Administração de BD Cloud | 80h | Cloud vs on-premise, IaaS/PaaS/SaaS/DBaaS, Firebase (Firestore, Realtime DB, Auth, Storage, Cloud Functions), Security Rules, NoSQL |
| Design de Interfaces Mobile | 40h | Material Design 3, HIG, thumb zone, touch targets, Figma (components, variants, Auto Layout, prototyping, handoff), acessibilidade |
| Ética e Segurança da Informação | 40h | CIA Triad, criptografia, firewall, backup 3-2-1, LGPD, OWASP Top 10, engenharia social, pentest conceitual |

---

## 1. Lista de Exercícios Práticos (10 Questões)

### 🟢 FÁCEIS (4 questões)

**Exercício 1 — Ciclo de Vida da Activity (Programação Mobile)**

Ordene corretamente os métodos do ciclo de vida de uma Activity Android, desde a criação até a destruição completa:

`onStart()` · `onCreate()` · `onResume()` · `onPause()` · `onStop()` · `onDestroy()`

**Cenário adicional:** O usuário abre o app, recebe uma ligação telefônica e depois retorna ao app. Quais métodos são chamados em cada transição?

---

**Exercício 2 — Estrutura de Documento Firestore (BD Cloud)**

Dado o seguinte cenário: um app de lista de tarefas com usuários e suas tarefas, desenhe a estrutura de coleções e documentos no Firestore.

Requisitos:
- Cada usuário tem nome, email e foto de perfil
- Cada tarefa pertence a um usuário e tem título, descrição, status (pendente/concluída) e data de criação
- Deve ser possível consultar todas as tarefas de um usuário de forma eficiente

Represente usando a notação: `colecao/documento/subcolecao/documento`

---

**Exercício 3 — Tamanho de Touch Target (Design Mobile)**

Responda:
a) Qual o tamanho mínimo recomendado para touch targets segundo o Material Design 3?
b) E segundo as Human Interface Guidelines (HIG) da Apple?
c) Por que botões menores que o recomendado são um problema de acessibilidade?
d) Qual a diferença entre `dp` e `sp` no Android? Quando usar cada um?

---

**Exercício 4 — Tríade CIA (Ética e Segurança)**

Para cada cenário abaixo, identifique qual pilar da Tríade CIA (Confidencialidade, Integridade, Disponibilidade) foi violado:

| Cenário | Pilar Violado |
|---|---|
| Um hacker alterou o saldo bancário de um cliente no banco de dados | |
| O servidor do hospital ficou fora do ar por 12 horas | |
| Dados médicos de pacientes foram vazados na internet | |
| Um funcionário modificou registros de vendas para esconder fraude | |
| Um ataque DDoS impediu acesso ao sistema de matrículas | |
| Senhas dos usuários foram expostas em texto plano | |

---

### 🟡 MÉDIAS (4 questões)

**Exercício 5 — Implementação de RecyclerView (Programação Mobile)**

Implemente uma RecyclerView que exiba uma lista de contatos com nome, telefone e foto (placeholder). Você deve criar:

a) O layout XML do item (`item_contato.xml`) usando ConstraintLayout
b) A data class `Contato` em Kotlin
c) O Adapter com ViewHolder
d) A configuração da RecyclerView na Activity

Requisitos técnicos:
- Use ConstraintLayout no item
- Implemente DiffUtil para performance
- Adicione click listener no item

---

**Exercício 6 — Security Rules do Firestore (BD Cloud)**

Escreva Security Rules para o Firestore com as seguintes regras de negócio:

a) Apenas usuários autenticados podem ler dados
b) Usuários só podem editar seus próprios documentos na coleção `usuarios`
c) A coleção `posts` permite leitura pública, mas escrita apenas pelo autor
d) Documentos na coleção `admin` só podem ser acessados por usuários com claim `admin: true`
e) O campo `email` não pode ser alterado após a criação do documento

---

**Exercício 7 — Redesign para Acessibilidade (Design Mobile)**

Analise a tela abaixo (descrita) e proponha melhorias de acessibilidade:

**Tela original (problemas):**
- Botão "Enviar" com 30x30dp, cor cinza claro (#CCCCCC) sobre fundo branco
- Texto de erro em vermelho (#FF0000) com fonte 10sp sem ícone
- Imagens decorativas sem contentDescription
- Contraste de texto do corpo: #999999 sobre #FFFFFF
- Formulário sem labels visíveis (apenas placeholder)

**Tarefas:**
1. Identifique pelo menos 5 problemas de acessibilidade
2. Proponha solução para cada um, citando a diretriz (WCAG/Material Design)
3. Redesenhe a hierarquia visual com as correções (pode ser descritivo ou wireframe)

---

**Exercício 8 — Checklist de Conformidade LGPD (Ética e Segurança)**

Uma startup está lançando um app de saúde que coleta: nome, CPF, dados de saúde (pressão, glicemia), localização GPS e histórico de medicamentos.

Crie um checklist completo de conformidade LGPD contendo:

a) Classificação dos dados coletados (pessoal, sensível, anonimizado)
b) Base legal para cada tipo de dado coletado
c) Direitos dos titulares que devem ser implementados no app
d) Medidas técnicas de proteção obrigatórias
e) Modelo de termo de consentimento (resumido)
f) Procedimento em caso de vazamento de dados (Data Breach)

---

### 🔴 DIFÍCEIS (2 questões)

**Exercício 9 — Arquitetura Completa de App Android (Integrador)**

Desenvolva a arquitetura completa de um app de **Lista de Compras Colaborativa** com os seguintes requisitos:

**Funcionalidades:**
- Cadastro/login com Firebase Auth (email + Google)
- CRUD de listas de compras sincronizadas em tempo real (Firestore)
- Compartilhamento de lista com outros usuários
- Notificação quando um item é marcado como comprado
- Interface seguindo Material Design 3

**Entregáveis:**
1. Diagrama de arquitetura (Activities, Fragments, ViewModels)
2. Código Kotlin da Activity principal com RecyclerView
3. Layout XML com Material Design (FAB, Cards, AppBar)
4. Modelo de dados no Firestore (coleções + documentos)
5. Security Rules completas
6. Código do Adapter com DiffUtil

---

**Exercício 10 — Auditoria de Segurança Completa (Integrador)**

Você foi contratado para auditar o seguinte sistema:

**Cenário:** App mobile de uma clínica médica que:
- Armazena prontuários eletrônicos no Firebase
- Usa autenticação apenas por email/senha (sem 2FA)
- Security Rules: `allow read, write: if true;`
- Transmite dados via HTTP (sem TLS)
- Backup feito manualmente 1x por semana em HD externo
- Funcionários compartilham uma única conta admin
- Logs de acesso não são mantidos
- App não solicita consentimento para coleta de dados

**Tarefas:**
1. Identifique TODAS as vulnerabilidades (mínimo 8)
2. Classifique cada uma por severidade (Crítica/Alta/Média/Baixa)
3. Proponha solução técnica para cada vulnerabilidade
4. Mapeie quais artigos da LGPD estão sendo violados
5. Escreva um trecho de Política de Privacidade para o app
6. Reescreva as Security Rules de forma segura
7. Proponha um plano de backup seguindo a regra 3-2-1

---

## 2. Guia de Revisão Rápida

### 📱 Programação Mobile Android — Tópicos Essenciais

**Ciclo de Vida da Activity:**
```
onCreate() → onStart() → onResume() → [RUNNING]
→ onPause() → onStop() → onDestroy()

Retorno do background: onRestart() → onStart() → onResume()
```

**Componentes Fundamentais:**
- Activity: tela com interface do usuário
- Intent: mensageiro entre componentes (explícita vs implícita)
- RecyclerView: lista eficiente com ViewHolder pattern
- SharedPreferences: armazenamento chave-valor simples
- Room: abstração sobre SQLite com annotations

**Layouts XML:**
- LinearLayout: elementos em fila (horizontal/vertical)
- ConstraintLayout: posicionamento relativo flexível
- dp: density-independent pixels (tamanhos)
- sp: scale-independent pixels (textos — respeita config do usuário)

---

### ☁️ Administração de BD Cloud — Tópicos Essenciais

**Modelos de Serviço:**
| Modelo | Você gerencia | Provedor gerencia |
|---|---|---|
| IaaS | App + dados + runtime + OS | Virtualização + rede + storage |
| PaaS | App + dados | Runtime + OS + infra |
| SaaS | Nada (só usa) | Tudo |
| DBaaS | Dados + queries | Banco + backup + escala + segurança |

**Firebase — Serviços Principais:**
- Firestore: NoSQL documental, tempo real, offline-first
- Realtime Database: JSON tree, menor latência, mais simples
- Auth: autenticação multi-provider
- Storage: arquivos (imagens, vídeos, docs)
- Cloud Functions: serverless backend (Node.js)

**Modelagem NoSQL — Princípios:**
- Desnormalização é comum (duplicar dados para otimizar leitura)
- Subcoleções para relações 1:N
- Document Reference para relações N:N
- Evitar documentos > 1MB
- Pensar nas queries ANTES de modelar

---

### 🎨 Design de Interfaces Mobile — Tópicos Essenciais

**Material Design 3 — Princípios:**
- Dynamic Color (Material You)
- Tipografia: Roboto com escala tipográfica definida
- Elevação e superfícies com tons (tonal surfaces)
- Componentes: FAB, NavigationBar, Cards, Chips, Sheets

**Thumb Zone:**
- Zona verde (fácil): centro-inferior da tela
- Zona amarela (esticada): laterais
- Zona vermelha (difícil): cantos superiores
- Ações primárias sempre na zona verde

**Figma — Fluxo Profissional:**
1. Components → Variants → Auto Layout
2. Design Tokens (cores, tipografia, espaçamento)
3. Prototyping (transições, micro-interações)
4. Handoff (Inspect, exportação de assets, specs)

---

### 🔒 Ética e Segurança da Informação — Tópicos Essenciais

**Tríade CIA:**
- **C**onfidencialidade: só pessoas autorizadas acessam
- **I**ntegridade: dados não são alterados indevidamente
- **D**isponibilidade: sistema acessível quando necessário

**Criptografia:**
| Tipo | Exemplo | Uso |
|---|---|---|
| Simétrica | AES-256 | Criptografar dados em repouso |
| Assimétrica | RSA, ECDSA | TLS/HTTPS, assinatura digital |
| Hash | SHA-256, bcrypt | Senhas, verificação de integridade |

**LGPD — Pontos Cruciais:**
- Dado pessoal vs dado sensível (saúde, biometria, raça)
- Bases legais: consentimento, legítimo interesse, execução de contrato
- Direitos do titular: acesso, correção, exclusão, portabilidade
- DPO (Encarregado de Dados): obrigatório
- Multa: até 2% do faturamento (máx. R$ 50 milhões/infração)

**OWASP Top 10 Mobile:**
1. Uso inadequado de credenciais
2. Falhas em supply chain
3. Autenticação/autorização insegura
4. Validação insuficiente de input/output
5. Comunicação insegura

---

### ⚠️ Pegadinhas Comuns em Provas

1. **Lifecycle:** `onRestart()` NÃO é chamado na primeira abertura — só no retorno após `onStop()`
2. **Security Rules `allow read, write: if true`** — NUNCA use em produção! Qualquer pessoa pode ler/escrever tudo
3. **dp vs sp:** Textos SEMPRE em `sp` (respeita preferência de acessibilidade do usuário). Usar `dp` em texto é erro de acessibilidade
4. **Firestore vs Realtime DB:** Firestore escala melhor e tem queries mais ricas; Realtime DB é melhor para dados que mudam muito rápido (chat)
5. **Hash ≠ Criptografia:** Hash é irreversível (não "descriptografa"). Criptografia simétrica/assimétrica é reversível
6. **LGPD — Consentimento não é a única base legal!** Existem 10 bases legais no Art. 7º
7. **Touch target:** O Material Design pede 48dp MÍNIMO, não 48px!
8. **SharedPreferences:** NÃO é seguro para dados sensíveis (armazenado em XML texto plano)
9. **RecyclerView sem DiffUtil:** Funciona, mas `notifyDataSetChanged()` é ineficiente
10. **Firebase Auth:** Token JWT expira em 1 hora — o SDK renova automaticamente

---

## 3. Avaliações Formais

---

## PROVA A — Módulo 3

**Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco**
**Profª Luana Cristina**
**Valor: 10,0 pontos | Duração: 2h30**

---

### Parte 1 — Questões de Múltipla Escolha (2,5 pontos — 0,5 cada)

**Questão 1 (Android)**
Considere o seguinte cenário: o usuário está usando o app e recebe uma ligação. Qual sequência de métodos do ciclo de vida é executada na Activity?

a) `onPause()` → `onStop()`
b) `onPause()` → `onStop()` → `onDestroy()`
c) `onStop()` → `onPause()`
d) `onPause()` apenas
e) `onStop()` → `onDestroy()`

---

**Questão 2 (Android)**
Sobre RecyclerView, qual afirmação é CORRETA?

a) O RecyclerView cria uma View para cada item da lista, independente da visibilidade
b) O ViewHolder mantém referências às Views para evitar chamadas repetidas a `findViewById()`
c) O LayoutManager é responsável por inflar os layouts dos itens
d) O Adapter define a disposição dos itens (linear, grid)
e) O RecyclerView não suporta animações de inserção/remoção

---

**Questão 3 (Firebase/Cloud)**
Sobre as Security Rules do Firestore, qual regra permite que apenas o próprio usuário leia seus dados?

a) `allow read: if true;`
b) `allow read: if request.auth != null;`
c) `allow read: if request.auth.uid == resource.data.userId;`
d) `allow read: if request.resource.data.uid == auth.uid;`
e) `allow read: if auth.token.admin == true;`

---

**Questão 4 (Design Mobile)**
Segundo o Material Design 3, qual o tamanho mínimo recomendado para touch targets e por quê?

a) 24dp — para economizar espaço na tela
b) 36dp — padrão para ícones de ação
c) 48dp — para garantir acessibilidade e evitar toques acidentais
d) 56dp — tamanho padrão do FAB
e) 64dp — para dedos maiores

---

**Questão 5 (Segurança)**
Um atacante intercepta a comunicação entre o app e o servidor, lê e modifica dados em trânsito. Esse ataque é conhecido como:

a) SQL Injection
b) Cross-Site Scripting (XSS)
c) Man-in-the-Middle (MitM)
d) Denial of Service (DoS)
e) Engenharia Social

---

### Parte 2 — Questões Práticas (7,5 pontos)

**Questão 6 — Kotlin/XML (2,5 pontos)**

Desenvolva uma Activity de **cadastro de tarefas** com os seguintes requisitos:

a) **(1,0 ponto)** Layout XML com ConstraintLayout contendo:
- EditText para título da tarefa
- EditText multiline para descrição
- Spinner para prioridade (Alta, Média, Baixa)
- Button "Salvar"

b) **(1,5 pontos)** Código Kotlin da Activity que:
- Captura os dados do formulário ao clicar em "Salvar"
- Valida que título não está vazio
- Salva em SharedPreferences como JSON (use Gson)
- Exibe Toast de sucesso ou erro
- Após salvar, abre outra Activity passando os dados via Intent

---

**Questão 7 — Firebase (2,5 pontos)**

Uma escola quer criar um sistema de notas online com Firebase. A estrutura é:
- Coleção `turmas` → documentos com nome da turma e professor
- Subcoleção `alunos` dentro de cada turma → documentos com nome e matrícula
- Subcoleção `notas` dentro de cada aluno → documentos com disciplina, nota e bimestre

a) **(1,0 ponto)** Escreva Security Rules que:
- Professores podem ler e escrever dados de suas turmas
- Alunos podem ler apenas suas próprias notas
- Administradores (claim `role: "admin"`) têm acesso total

b) **(1,5 pontos)** Escreva uma Cloud Function (JavaScript/Node.js) que:
- É disparada quando uma nota é criada
- Calcula a média do aluno na disciplina
- Atualiza um campo `media` no documento do aluno
- Se a média for < 6.0, envia notificação ao professor

---

**Questão 8 — Segurança/LGPD (2,5 pontos)**

**Cenário:** Um e-commerce mobile coleta os seguintes dados: nome, CPF, endereço, histórico de compras, dados do cartão de crédito e cookies de navegação. Recentemente, um ex-funcionário acessou o banco de dados de produção usando credenciais que não foram revogadas e baixou 50.000 registros de clientes.

a) **(0,5 ponto)** Identifique quais artigos da LGPD foram violados neste incidente
b) **(1,0 ponto)** Proponha um plano de resposta ao incidente com cronograma (seguindo o Art. 48 da LGPD)
c) **(1,0 ponto)** Redesenhe a política de acesso usando o princípio do menor privilégio. Inclua: controle de acesso baseado em papéis (RBAC), processo de offboarding e monitoramento

---

## PROVA B — Módulo 3

**Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco**
**Profª Luana Cristina**
**Valor: 10,0 pontos | Duração: 2h30**

---

### Parte 1 — Questões de Múltipla Escolha (2,5 pontos — 0,5 cada)

**Questão 1 (Android)**
Qual a diferença entre Intent explícita e implícita no Android?

a) Intent explícita envia dados para qualquer app; implícita só funciona dentro do mesmo app
b) Intent explícita especifica o componente de destino; implícita declara uma ação e o sistema resolve
c) Intent implícita é mais segura porque não expõe o nome da Activity
d) Intent explícita só funciona com Services, não com Activities
e) Não há diferença prática — ambas funcionam da mesma forma

---

**Questão 2 (Android)**
Sobre persistência de dados no Android, qual afirmação é VERDADEIRA?

a) SharedPreferences é ideal para armazenar listas grandes de objetos complexos
b) Room é uma camada de abstração sobre o SharedPreferences
c) SQLite requer que o desenvolvedor gerencie conexões e cursors manualmente; Room simplifica isso com annotations
d) SharedPreferences sincroniza automaticamente com a nuvem
e) Room não suporta queries com JOIN entre tabelas

---

**Questão 3 (Firebase/Cloud)**
Qual a principal diferença entre Firestore e Realtime Database?

a) Firestore é gratuito; Realtime Database é pago
b) Realtime Database suporta queries complexas com múltiplos filtros; Firestore não
c) Firestore organiza dados em coleções/documentos e suporta queries compostas; Realtime Database usa estrutura de árvore JSON
d) Realtime Database tem suporte offline; Firestore não
e) Firestore só funciona em aplicações web, não mobile

---

**Questão 4 (Design Mobile)**
Na metodologia de design mobile, a "thumb zone" refere-se a:

a) A área da tela reservada para a barra de navegação
b) O mapa de calor que mostra as áreas de fácil alcance com o polegar ao segurar o celular com uma mão
c) O espaço mínimo entre elementos clicáveis
d) A resolução mínima da tela para garantir legibilidade
e) A área de safe zone definida pelo notch do dispositivo

---

**Questão 5 (Segurança)**
A regra de backup 3-2-1 determina:

a) 3 backups diários, 2 semanais, 1 mensal
b) 3 cópias dos dados, em 2 tipos de mídia diferentes, com 1 cópia off-site
c) 3 níveis de criptografia, 2 chaves de acesso, 1 administrador
d) Backup a cada 3 horas, retenção de 2 dias, 1 teste mensal
e) 3 servidores, 2 data centers, 1 CDN

---

### Parte 2 — Questões Práticas (7,5 pontos)

**Questão 6 — Kotlin/XML (2,5 pontos)**

Desenvolva um **RecyclerView de produtos** para um app de e-commerce:

a) **(0,5 ponto)** Data class `Produto` com: id, nome, preco, imagemUrl, emEstoque (Boolean)

b) **(1,0 ponto)** Layout XML do item (`item_produto.xml`) com MaterialCardView contendo:
- ImageView para foto do produto
- TextView para nome (maxLines=2)
- TextView para preço (formatado como R$)
- Chip indicando "Em estoque" ou "Esgotado"

c) **(1,0 ponto)** Adapter com ViewHolder que:
- Usa DiffUtil.ItemCallback
- Formata preço em moeda brasileira
- Muda a cor do Chip baseado no estoque
- Implementa click listener que retorna o produto selecionado

---

**Questão 7 — Firebase (2,5 pontos)**

Um app de delivery precisa de regras de segurança robustas:

a) **(1,5 pontos)** Escreva Security Rules para:
- Coleção `pedidos`: cliente pode criar e ler seus pedidos; restaurante pode ler e atualizar status
- Coleção `restaurantes`: leitura pública, escrita apenas pelo dono (campo `donoUid`)
- Validação: campo `total` deve ser número positivo; `status` só aceita valores ["pendente", "preparando", "entregando", "entregue"]

b) **(1,0 ponto)** Escreva uma query Firestore (Kotlin) que:
- Busca todos os pedidos do usuário logado
- Filtra por status "preparando" ou "entregando"
- Ordena por data de criação (mais recente primeiro)
- Limita a 20 resultados
- Implementa paginação com `startAfter()`

---

**Questão 8 — Segurança/LGPD (2,5 pontos)**

**Cenário:** Uma fintech oferece um app de empréstimos que coleta: selfie com documento, dados bancários, score de crédito, localização GPS (para "verificação de endereço") e lista de contatos (para "referências"). Um pesquisador de segurança descobriu que:
- O app transmite a lista de contatos para um servidor de analytics terceirizado
- A selfie é armazenada sem criptografia em bucket público do Cloud Storage
- Não há opção de deletar a conta no app

a) **(1,0 ponto)** Identifique as violações à LGPD (artigos específicos) e classifique por severidade
b) **(0,75 ponto)** Para cada violação, indique qual princípio da LGPD foi desrespeitado (finalidade, necessidade, transparência, etc.)
c) **(0,75 ponto)** Escreva o trecho da Política de Privacidade referente à coleta de dados biométricos (selfie), incluindo: finalidade, base legal, tempo de retenção e procedimento de exclusão

---

## PROVA DE RECUPERAÇÃO — Módulo 3

**Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco**
**Profª Luana Cristina**
**Valor: 10,0 pontos | Duração: 2h30**
**Nota máxima de recuperação: 6,0**

---

### Parte 1 — Questões de Múltipla Escolha (2,5 pontos — 0,5 cada)

**Questão 1 (Android)**
Quando o usuário rotaciona o dispositivo, o que acontece com a Activity por padrão?

a) Nada — a Activity mantém seu estado
b) A Activity é destruída e recriada (ciclo completo: onDestroy → onCreate)
c) Apenas o layout é redesenhado, sem afetar o ciclo de vida
d) O método onRotate() é chamado automaticamente
e) A Activity entra em onPause() e retorna com onResume()

---

**Questão 2 (Android)**
Qual é a forma CORRETA de passar dados entre Activities via Intent?

a) Usar variáveis globais estáticas
b) Usar `intent.putExtra("chave", valor)` e recuperar com `getIntent().getStringExtra("chave")`
c) Salvar em SharedPreferences na Activity de origem e ler na de destino
d) Usar banco de dados Room como intermediário
e) Activities não podem trocar dados entre si

---

**Questão 3 (Firebase/Cloud)**
Qual modelo de serviço cloud descreve o Firebase?

a) IaaS — pois o desenvolvedor gerencia servidores virtuais
b) PaaS/BaaS — pois oferece backend como serviço sem gerenciar infraestrutura
c) SaaS — pois é um software pronto para uso final
d) On-premise — pois os dados ficam no dispositivo
e) Colocation — pois permite instalar servidores próprios no data center do Google

---

**Questão 4 (Design Mobile)**
No Figma, o Auto Layout é utilizado para:

a) Gerar código automaticamente a partir do design
b) Criar layouts responsivos que se adaptam ao conteúdo (padding, spacing, resizing)
c) Importar componentes prontos do Material Design
d) Animar protótipos automaticamente
e) Exportar assets em múltiplas resoluções

---

**Questão 5 (Segurança)**
Engenharia social é:

a) Uma técnica de programação para otimizar algoritmos
b) O uso de manipulação psicológica para obter informações confidenciais ou acesso a sistemas
c) Um método de criptografia baseado em interações sociais
d) Uma área da engenharia que projeta redes sociais
e) Um tipo de firewall que analisa comportamento de usuários

---

### Parte 2 — Questões Práticas (7,5 pontos)

**Questão 6 — Kotlin/XML (2,5 pontos)**

Crie uma Activity de **login simples** com:

a) **(1,0 ponto)** Layout XML (LinearLayout vertical) com:
- Logo (ImageView centralizada)
- EditText para email (inputType adequado)
- EditText para senha (inputType adequado, com toggle de visibilidade)
- Button "Entrar" (estilo Material)
- TextView "Esqueci minha senha" clicável

b) **(1,5 pontos)** Código Kotlin que:
- Valida formato de email
- Valida senha com mínimo 6 caracteres
- Exibe mensagens de erro inline (setError)
- Simula autenticação com dados fixos (email: "aluno@ete.pe" / senha: "123456")
- Navega para HomeActivity em caso de sucesso

---

**Questão 7 — Firebase (2,5 pontos)**

Um app de blog pessoal usa Firestore com a seguinte estrutura:
- Coleção `posts`: título, conteúdo, autorUid, dataPublicacao, publico (boolean)

a) **(1,0 ponto)** Escreva Security Rules que:
- Posts públicos podem ser lidos por qualquer pessoa
- Posts privados só podem ser lidos pelo autor
- Apenas o autor pode criar, editar e deletar seus posts
- O campo `autorUid` deve ser igual ao UID do usuário autenticado na criação

b) **(1,5 pontos)** Escreva uma Cloud Function que:
- É disparada quando um post é criado
- Conta o total de posts do autor
- Atualiza o campo `totalPosts` no documento do usuário em `/usuarios/{uid}`

---

**Questão 8 — Segurança/LGPD (2,5 pontos)**

**Cenário:** Uma escola implementou um app de frequência que usa reconhecimento facial dos alunos (menores de idade). O app foi desenvolvido sem consultar os pais e não há termo de consentimento. Os dados biométricos são enviados para uma API terceirizada no exterior.

a) **(1,0 ponto)** Analise as violações à LGPD considerando que os titulares são menores de idade (Art. 14). Liste pelo menos 5 problemas.
b) **(0,75 ponto)** Proponha uma solução técnica alternativa para controle de frequência que minimize a coleta de dados sensíveis
c) **(0,75 ponto)** Escreva um modelo de termo de consentimento parental adequado à LGPD para coleta de dados biométricos de menores

---

## 4. Simulado Integrado (15 Questões)

**Tema: Desenvolvimento Completo de App Mobile com Segurança e Conformidade**

---

**Questão 1 — Design + Implementação (Integração: Design Mobile + Android)**

Você recebeu o seguinte briefing: "Tela de perfil do usuário com foto, nome, email, bio e botão de editar".

a) Descreva a estrutura visual seguindo Material Design 3 (componentes, cores, tipografia)
b) Implemente o layout em XML usando ConstraintLayout
c) Garanta acessibilidade: contentDescription, contraste, touch targets

---

**Questão 2 — Backend + Segurança (Integração: Firebase + Segurança)**

Considerando a tela de perfil da questão anterior:

a) Modele o documento do usuário no Firestore
b) Escreva Security Rules que protejam os dados do perfil
c) Identifique quais dados são "pessoais" segundo a LGPD e quais cuidados ter

---

**Questão 3 — Código + Cloud (Integração: Android + Firebase)**

Implemente em Kotlin:
a) Função que carrega dados do perfil do Firestore e preenche a UI
b) Função que atualiza a foto de perfil usando Firebase Storage
c) Tratamento de erros offline (sem conexão)

---

**Questão 4 — Cenário Completo: App de Saúde**

Uma startup quer criar um app de monitoramento de saúde que:
- Coleta batimentos cardíacos via Bluetooth
- Armazena histórico no Firebase
- Permite compartilhar dados com médico
- Exibe gráficos de evolução

**Para cada disciplina, responda:**

a) **Android:** Qual arquitetura usar? (Activity/Fragment, ViewModel, Repository). Justifique.
b) **Firebase:** Modele as coleções. Como garantir que o médico só veja dados compartilhados?
c) **Design:** Quais princípios de Material Design aplicar para dados de saúde? Como garantir legibilidade?
d) **Segurança:** Classifique os dados (LGPD). Qual base legal? Como proteger dados em trânsito e repouso?

---

**Questão 5 — Análise de Código (Programação Mobile)**

Analise o código abaixo e identifique TODOS os problemas:

```kotlin
class MainActivity : AppCompatActivity() {
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        // Carrega dados da API na Main Thread
        val dados = URL("https://api.exemplo.com/dados").readText()
        
        // Salva senha em SharedPreferences
        val prefs = getSharedPreferences("config", MODE_PRIVATE)
        prefs.edit().putString("senha", "123456").apply()
        
        // RecyclerView sem ViewHolder pattern
        val lista = findViewById<ListView>(R.id.lista)
    }
}
```

Liste cada problema, explique por que é um problema e proponha a correção.

---

**Questão 6 — Security Rules Avançadas (BD Cloud + Segurança)**

Dado o seguinte cenário de e-commerce:
- Coleção `produtos`: leitura pública, escrita por vendedores verificados
- Coleção `pedidos`: leitura por comprador e vendedor envolvidos
- Coleção `avaliacoes`: só quem comprou pode avaliar; máximo 1 avaliação por pedido

Escreva as Security Rules completas com validação de dados.

---

**Questão 7 — Auditoria de Design (Design Mobile + Acessibilidade)**

Analise a seguinte tela (descrita textualmente):

- Background: imagem de paisagem ocupando tela toda
- Texto branco sobre a imagem (sem overlay)
- Botões: ícones sem texto, 32x32dp
- Navegação: gestos apenas (sem botões visíveis de voltar)
- Formulário: campos com apenas placeholder, sem label

Para cada problema:
1. Cite a diretriz violada (WCAG ou Material Design)
2. Proponha a correção
3. Indique o impacto para o usuário

---

**Questão 8 — LGPD na Prática (Segurança + Todas)**

Sua equipe está desenvolvendo um app educacional que:
- Coleta dados de alunos menores de idade (nome, escola, série, desempenho)
- Usa analytics para rastrear comportamento de uso
- Permite que professores vejam o progresso dos alunos
- Armazena dados no Firebase (servidor nos EUA)

a) Mapeie TODOS os pontos de atenção LGPD
b) Proponha a arquitetura de permissões no Firebase
c) Escreva a seção "Dados de Menores" da Política de Privacidade
d) Como implementar o direito de exclusão (Art. 18, VI) em um sistema Firebase com dados distribuídos?

---

**Questão 9 — Implementação Completa: Chat em Tempo Real**

Desenvolva a arquitetura de um chat simples entre dois usuários:

a) **Modelo Firestore:** Estrutura de coleções para mensagens, conversas e usuários
b) **Security Rules:** Apenas participantes da conversa podem ler/escrever
c) **Layout XML:** Tela de chat com RecyclerView, input de texto e botão enviar
d) **Kotlin:** Listener em tempo real (addSnapshotListener) que atualiza o RecyclerView
e) **Segurança:** Como garantir criptografia end-to-end conceitual (explique o fluxo)

---

**Questão 10 — Migração Cloud (BD Cloud)**

Sua empresa tem um sistema on-premise com PostgreSQL e quer migrar para Firebase:

a) Compare os prós e contras da migração (mínimo 5 de cada)
b) Proponha estratégia de migração (Big Bang vs Gradual). Justifique.
c) Como modelar dados relacionais (JOIN, FK) em NoSQL Firestore?
d) Quais funcionalidades do PostgreSQL não existem no Firestore? Alternativas?

---

**Questão 11 — Material Design na Prática (Design + Android)**

Implemente uma Bottom Navigation com 4 abas seguindo Material Design 3:

a) XML do menu de navegação
b) XML do layout principal com BottomNavigationView
c) Kotlin: navegação entre Fragments
d) Garanta que a navegação atende às guidelines (ícones + labels, sem scroll horizontal)

---

**Questão 12 — Pentest Conceitual (Segurança)**

Você é um pentester contratado para testar o app da sua escola. Descreva:

a) Fase de reconhecimento: quais informações buscar sobre o app?
b) Fase de scanning: quais ferramentas conceituais usar para apps Android?
c) Fase de exploração: 3 vetores de ataque que testaria (justifique por quê)
d) Relatório: classifique os achados usando CVSS simplificado (Crítico/Alto/Médio/Baixo)
e) Recomendações: proponha correções priorizadas

---

**Questão 13 — Integração Total: E-commerce Mobile**

Cenário: App de marketplace entre alunos da escola (compra/venda de material escolar).

Projete e documente:
a) **3 telas** seguindo Material Design (Home, Detalhe do Produto, Carrinho)
b) **Modelo Firestore** para produtos, pedidos, usuários e chat
c) **Security Rules** completas para todo o sistema
d) **Análise LGPD**: quais dados coletar, base legal, consentimento
e) **Código Kotlin**: Activity principal com RecyclerView de produtos e filtro por categoria

---

**Questão 14 — Debugging e Performance (Android + Cloud)**

O seguinte app apresenta lentidão e crashes. Analise e corrija:

```kotlin
class ListaActivity : AppCompatActivity() {
    private val itens = mutableListOf<String>()
    
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_lista)
        
        // Carrega 10.000 documentos do Firestore de uma vez
        FirebaseFirestore.getInstance()
            .collection("produtos")
            .get()
            .addOnSuccessListener { snapshot ->
                for (doc in snapshot) {
                    itens.add(doc.getString("nome") ?: "")
                }
                // Recria o adapter inteiro a cada atualização
                val adapter = ArrayAdapter(this, android.R.layout.simple_list_item_1, itens)
                findViewById<ListView>(R.id.lista).adapter = adapter
            }
    }
    
    // Sem tratamento de erro
    // Sem paginação
    // Usando ListView ao invés de RecyclerView
}
```

a) Liste todos os problemas de performance e arquitetura (mínimo 6)
b) Reescreva o código com: RecyclerView, paginação Firestore, tratamento de erro, coroutines
c) Explique o impacto financeiro de carregar 10.000 docs (billing do Firestore)

---

**Questão 15 — Projeto Final Integrado**

**Desafio:** Sua equipe foi contratada para desenvolver um app de **Ponto Eletrônico** para uma empresa.

Requisitos:
- Login com Firebase Auth (email corporativo)
- Registro de ponto (entrada/saída) com geolocalização
- Dashboard com horas trabalhadas (semanal/mensal)
- Notificação se esquecer de registrar ponto
- Relatório exportável (PDF)
- Conformidade com legislação trabalhista e LGPD

**Entregáveis (descreva/implemente):**

1. **Design:** Wireframe de 3 telas principais + justificativa de UX decisions
2. **Modelo de Dados:** Coleções Firestore + diagrama de relações
3. **Security Rules:** Funcionário vê seu ponto; gestor vê sua equipe; RH vê todos
4. **Código:** Activity de registro de ponto com localização
5. **Segurança:** Análise de riscos + medidas de proteção + LGPD compliance
6. **Acessibilidade:** Como garantir que o app seja acessível (TalkBack, contraste, etc.)

---

## 5. Gabarito Comentado Completo

---

### Gabarito — Lista de Exercícios

**Exercício 1 — Ciclo de Vida (FÁCIL)**

Ordem correta: `onCreate()` → `onStart()` → `onResume()` → **[ATIVO]** → `onPause()` → `onStop()` → `onDestroy()`

Cenário da ligação:
- App ativo → Ligação chega: `onPause()` → `onStop()`
- Ligação encerra → Retorna: `onRestart()` → `onStart()` → `onResume()`

> ⚠️ Pegadinha: `onRestart()` só é chamado quando a Activity retorna de `onStop()`, NUNCA na primeira criação.

---

**Exercício 2 — Firestore (FÁCIL)**

```
usuarios/
  {userId}/
    nome: "João Silva"
    email: "joao@email.com"
    fotoPerfil: "url..."
    tarefas/ (subcoleção)
      {tarefaId}/
        titulo: "Comprar leite"
        descricao: "No supermercado X"
        status: "pendente"
        dataCriacao: Timestamp
```

> Justificativa: subcoleção permite query eficiente (`usuarios/{uid}/tarefas`) sem carregar dados desnecessários.

---

**Exercício 3 — Touch Target (FÁCIL)**

a) Material Design 3: mínimo **48dp x 48dp**
b) HIG (Apple): mínimo **44pt x 44pt**
c) Botões menores causam toques acidentais, especialmente para pessoas com dificuldades motoras, idosos ou em movimento
d) `dp` = density-independent pixel (tamanhos de UI, margens, padding). `sp` = scale-independent pixel (APENAS para texto — respeita a preferência de tamanho de fonte do usuário nas configurações de acessibilidade)

---

**Exercício 4 — Tríade CIA (FÁCIL)**

| Cenário | Pilar Violado |
|---|---|
| Hacker alterou saldo bancário | **Integridade** |
| Servidor fora do ar 12h | **Disponibilidade** |
| Dados médicos vazados | **Confidencialidade** |
| Funcionário modificou registros | **Integridade** |
| DDoS no sistema de matrículas | **Disponibilidade** |
| Senhas expostas em texto plano | **Confidencialidade** |

---

**Exercício 5 — RecyclerView (MÉDIO)**

```xml
<!-- item_contato.xml -->
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:padding="16dp">

    <ImageView
        android:id="@+id/imgFoto"
        android:layout_width="48dp"
        android:layout_height="48dp"
        android:contentDescription="Foto do contato"
        android:src="@drawable/ic_person"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintTop_toTopOf="parent" />

    <TextView
        android:id="@+id/tvNome"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="16dp"
        android:textSize="16sp"
        android:textStyle="bold"
        app:layout_constraintStart_toEndOf="@id/imgFoto"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toTopOf="@id/imgFoto" />

    <TextView
        android:id="@+id/tvTelefone"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginStart="16dp"
        android:textSize="14sp"
        android:textColor="@color/material_on_surface_emphasis_medium"
        app:layout_constraintStart_toEndOf="@id/imgFoto"
        app:layout_constraintEnd_toEndOf="parent"
        app:layout_constraintTop_toBottomOf="@id/tvNome" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

```kotlin
// Data class
data class Contato(
    val id: Long,
    val nome: String,
    val telefone: String,
    val fotoUrl: String? = null
)

// Adapter com DiffUtil
class ContatoAdapter(
    private val onClick: (Contato) -> Unit
) : ListAdapter<Contato, ContatoAdapter.ContatoViewHolder>(ContatoDiffCallback()) {

    class ContatoViewHolder(
        private val binding: ItemContatoBinding,
        private val onClick: (Contato) -> Unit
    ) : RecyclerView.ViewHolder(binding.root) {
        
        fun bind(contato: Contato) {
            binding.tvNome.text = contato.nome
            binding.tvTelefone.text = contato.telefone
            binding.root.setOnClickListener { onClick(contato) }
        }
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ContatoViewHolder {
        val binding = ItemContatoBinding.inflate(
            LayoutInflater.from(parent.context), parent, false
        )
        return ContatoViewHolder(binding, onClick)
    }

    override fun onBindViewHolder(holder: ContatoViewHolder, position: Int) {
        holder.bind(getItem(position))
    }
}

// DiffUtil
class ContatoDiffCallback : DiffUtil.ItemCallback<Contato>() {
    override fun areItemsTheSame(oldItem: Contato, newItem: Contato) = oldItem.id == newItem.id
    override fun areContentsTheSame(oldItem: Contato, newItem: Contato) = oldItem == newItem
}

// Na Activity
class ContatosActivity : AppCompatActivity() {
    private lateinit var adapter: ContatoAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_contatos)

        adapter = ContatoAdapter { contato ->
            Toast.makeText(this, "Selecionado: ${contato.nome}", Toast.LENGTH_SHORT).show()
        }

        findViewById<RecyclerView>(R.id.recyclerContatos).apply {
            layoutManager = LinearLayoutManager(this@ContatosActivity)
            adapter = this@ContatosActivity.adapter
        }

        // Exemplo de dados
        adapter.submitList(listOf(
            Contato(1, "Maria Silva", "(81) 99999-1111"),
            Contato(2, "João Santos", "(81) 98888-2222")
        ))
    }
}
```

---

**Exercício 6 — Security Rules (MÉDIO)**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Regra a) Apenas autenticados leem qualquer dado
    match /{document=**} {
      allow read: if request.auth != null;
    }
    
    // Regra b) Usuários editam apenas seus próprios docs
    match /usuarios/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
      
      // Regra e) Campo email não pode ser alterado após criação
      allow update: if request.auth.uid == userId
                    && !("email" in request.resource.data.diff(resource.data).affectedKeys());
      allow create: if request.auth.uid == userId;
    }
    
    // Regra c) Posts: leitura pública, escrita pelo autor
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null 
                    && request.resource.data.autorUid == request.auth.uid;
      allow update, delete: if request.auth != null 
                            && resource.data.autorUid == request.auth.uid;
    }
    
    // Regra d) Admin: acesso por claim
    match /admin/{document} {
      allow read, write: if request.auth.token.admin == true;
    }
  }
}
```

> ⚠️ **Nota importante:** A regra `allow read: if true` no match global entraria em conflito com as regras mais específicas. No Firestore, **a primeira regra que concede acesso vence** — por isso a regra global foi ajustada para exigir autenticação.

---

### Gabarito — Prova A

**Múltipla Escolha:**
| Questão | Resposta | Justificativa |
|---|---|---|
| Q1 | **A** | Ao receber ligação: `onPause()` → `onStop()`. NÃO chama `onDestroy()` pois a Activity ainda está na pilha. |
| Q2 | **B** | O ViewHolder armazena referências (cache) para evitar `findViewById()` repetido — esse é o padrão ViewHolder. |
| Q3 | **C** | `request.auth.uid == resource.data.userId` compara o UID do usuário autenticado com o campo no documento. |
| Q4 | **C** | 48dp é o mínimo do Material Design para acessibilidade. O FAB é 56dp por ser ação primária flutuante. |
| Q5 | **C** | Man-in-the-Middle intercepta comunicação entre duas partes. Solução: HTTPS/TLS. |

---

**Questão 6 — Gabarito (Kotlin/XML)**

```xml
<!-- activity_cadastro_tarefa.xml -->
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="24dp">

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilTitulo"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:hint="Título da tarefa"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent">
        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etTitulo"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="text" />
    </com.google.android.material.textfield.TextInputLayout>

    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilDescricao"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:hint="Descrição"
        android:layout_marginTop="16dp"
        app:layout_constraintTop_toBottomOf="@id/tilTitulo"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent">
        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/etDescricao"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:inputType="textMultiLine"
            android:minLines="3" />
    </com.google.android.material.textfield.TextInputLayout>

    <Spinner
        android:id="@+id/spPrioridade"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginTop="16dp"
        app:layout_constraintTop_toBottomOf="@id/tilDescricao"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent" />

    <com.google.android.material.button.MaterialButton
        android:id="@+id/btnSalvar"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_marginTop="24dp"
        android:text="Salvar"
        app:layout_constraintTop_toBottomOf="@id/spPrioridade"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

```kotlin
class CadastroTarefaActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_cadastro_tarefa)

        // Configurar Spinner de prioridade
        val prioridades = arrayOf("Alta", "Média", "Baixa")
        val spinnerAdapter = ArrayAdapter(this, android.R.layout.simple_spinner_dropdown_item, prioridades)
        findViewById<Spinner>(R.id.spPrioridade).adapter = spinnerAdapter

        // Botão salvar
        findViewById<MaterialButton>(R.id.btnSalvar).setOnClickListener {
            salvarTarefa()
        }
    }

    private fun salvarTarefa() {
        val titulo = findViewById<TextInputEditText>(R.id.etTitulo).text.toString().trim()
        val descricao = findViewById<TextInputEditText>(R.id.etDescricao).text.toString().trim()
        val prioridade = findViewById<Spinner>(R.id.spPrioridade).selectedItem.toString()

        // Validação
        if (titulo.isEmpty()) {
            findViewById<TextInputLayout>(R.id.tilTitulo).error = "Título obrigatório"
            return
        }

        // Criar objeto tarefa e salvar como JSON no SharedPreferences
        val tarefa = mapOf("titulo" to titulo, "descricao" to descricao, "prioridade" to prioridade)
        val json = Gson().toJson(tarefa)

        val prefs = getSharedPreferences("tarefas", MODE_PRIVATE)
        prefs.edit().putString("ultima_tarefa", json).apply()

        Toast.makeText(this, "Tarefa salva com sucesso!", Toast.LENGTH_SHORT).show()

        // Navegar para próxima Activity
        val intent = Intent(this, DetalheTarefaActivity::class.java).apply {
            putExtra("titulo", titulo)
            putExtra("descricao", descricao)
            putExtra("prioridade", prioridade)
        }
        startActivity(intent)
    }
}
```

**Critérios de correção parcial:**
- Layout XML correto com ConstraintLayout: 1,0 pt
- Validação de campo vazio: 0,25 pt
- Uso correto do SharedPreferences: 0,25 pt
- Uso correto do Gson para JSON: 0,25 pt
- Intent com extras: 0,5 pt
- Toast de feedback: 0,25 pt

---

**Questão 7 — Gabarito (Firebase)**

**a) Security Rules:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Turmas: professor pode ler/escrever suas turmas
    match /turmas/{turmaId} {
      allow read, write: if request.auth != null 
                         && resource.data.professorUid == request.auth.uid;
      allow read, write: if request.auth.token.role == "admin";
      
      // Alunos: dentro da turma
      match /alunos/{alunoId} {
        allow read, write: if request.auth != null 
                           && get(/databases/$(database)/documents/turmas/$(turmaId)).data.professorUid == request.auth.uid;
        allow read: if request.auth.uid == alunoId;
        allow read, write: if request.auth.token.role == "admin";
        
        // Notas: professor escreve, aluno lê as suas
        match /notas/{notaId} {
          allow read: if request.auth.uid == alunoId;
          allow read, write: if get(/databases/$(database)/documents/turmas/$(turmaId)).data.professorUid == request.auth.uid;
          allow read, write: if request.auth.token.role == "admin";
        }
      }
    }
  }
}
```

**b) Cloud Function:**

```javascript
const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

const db = admin.firestore();

exports.calcularMedia = functions.firestore
  .document('turmas/{turmaId}/alunos/{alunoId}/notas/{notaId}')
  .onCreate(async (snap, context) => {
    const { turmaId, alunoId } = context.params;
    const novaNota = snap.data();
    const disciplina = novaNota.disciplina;

    // Buscar todas as notas do aluno nessa disciplina
    const notasSnapshot = await db
      .collection(`turmas/${turmaId}/alunos/${alunoId}/notas`)
      .where('disciplina', '==', disciplina)
      .get();

    // Calcular média
    let soma = 0;
    let count = 0;
    notasSnapshot.forEach(doc => {
      soma += doc.data().nota;
      count++;
    });
    const media = soma / count;

    // Atualizar campo média no documento do aluno
    await db.doc(`turmas/${turmaId}/alunos/${alunoId}`).update({
      [`media_${disciplina}`]: media
    });

    // Se média < 6.0, notificar professor
    if (media < 6.0) {
      const turmaDoc = await db.doc(`turmas/${turmaId}`).get();
      const professorUid = turmaDoc.data().professorUid;
      
      // Enviar notificação (via FCM ou criar doc de notificação)
      await db.collection('notificacoes').add({
        destinatario: professorUid,
        mensagem: `Aluno ${alunoId} está com média ${media.toFixed(1)} em ${disciplina}`,
        lida: false,
        criadoEm: admin.firestore.FieldValue.serverTimestamp()
      });
    }

    return null;
  });
```

**Critérios de correção parcial:**
- Security Rules com autenticação por papel: 0,5 pt
- Regras para aluno ver só suas notas: 0,25 pt
- Regra admin com claim: 0,25 pt
- Cloud Function com trigger correto: 0,5 pt
- Cálculo de média: 0,5 pt
- Notificação ao professor: 0,5 pt

---

**Questão 8 — Gabarito (Segurança/LGPD)**

**a) Artigos LGPD violados:**
- Art. 46: Falta de medidas de segurança adequadas (credenciais não revogadas)
- Art. 47: Responsabilidade do agente de tratamento sobre dados de terceiros
- Art. 48: Necessidade de comunicação de incidentes à ANPD e titulares
- Art. 50: Ausência de boas práticas e governança

**b) Plano de resposta ao incidente (Art. 48):**
1. **Imediato (0-24h):** Revogar acesso, isolar sistemas, preservar evidências
2. **72 horas:** Comunicar ANPD com: descrição do incidente, dados afetados, riscos, medidas tomadas
3. **1 semana:** Notificar titulares afetados (50.000 clientes) com: o que houve, riscos, medidas de proteção
4. **30 dias:** Relatório completo com análise forense, impacto e plano de remediação

**c) Política de acesso (princípio do menor privilégio):**
- **RBAC:** Definir papéis (Admin, Desenvolvedor, Suporte, Marketing) com permissões granulares
- **Offboarding:** Checklist automático que revoga TODOS os acessos em até 1h após desligamento
- **Monitoramento:** Logs de acesso centralizados, alertas para acessos fora do horário, revisão trimestral de permissões

---

### Gabarito — Prova B

**Múltipla Escolha:**
| Questão | Resposta | Justificativa |
|---|---|---|
| Q1 | **B** | Intent explícita nomeia o componente (`Intent(this, OutraActivity::class.java)`); implícita declara ação (`Intent(Intent.ACTION_VIEW)`) |
| Q2 | **C** | Room usa annotations (@Entity, @Dao, @Query) para gerar SQL automaticamente sobre SQLite |
| Q3 | **C** | Firestore = coleções/documentos + queries compostas; RTDB = JSON tree + mais limitado em queries |
| Q4 | **B** | Thumb zone = mapa de calor de alcance do polegar em uso com uma mão |
| Q5 | **B** | 3 cópias, 2 mídias diferentes, 1 off-site (ex: nuvem) |

---

### Gabarito — Recuperação

**Múltipla Escolha:**
| Questão | Resposta | Justificativa |
|---|---|---|
| Q1 | **B** | Rotação causa destroy + recreate por padrão. Use `onSaveInstanceState()` ou ViewModel para preservar estado |
| Q2 | **B** | `putExtra()` + `getStringExtra()` é o padrão para passar dados entre Activities via Intent |
| Q3 | **B** | Firebase é BaaS (Backend as a Service) / PaaS — abstrai infraestrutura completa |
| Q4 | **B** | Auto Layout = responsividade baseada em regras de padding, spacing e resizing |
| Q5 | **B** | Engenharia social = manipulação psicológica (phishing, pretexting, tailgating) |

---

### Gabarito — Simulado Integrado (Questões Selecionadas)

**Questão 5 — Análise de Código (Problemas identificados):**

| # | Problema | Por que é grave | Correção |
|---|---|---|---|
| 1 | Requisição HTTP na Main Thread | Causa ANR (Application Not Responding) — trava a UI | Usar Coroutines (`viewModelScope.launch`) ou Retrofit com callback |
| 2 | Senha em texto plano no SharedPreferences | SharedPreferences armazena em XML legível. Qualquer app com root lê | Usar EncryptedSharedPreferences ou não armazenar senhas localmente |
| 3 | URL sem HTTPS (HTTP) | Dados trafegam sem criptografia — vulnerável a MitM | Usar HTTPS. Android 9+ bloqueia HTTP por padrão (cleartext) |
| 4 | Usando ListView ao invés de RecyclerView | ListView não recicla views eficientemente | Migrar para RecyclerView com ViewHolder pattern |
| 5 | Sem tratamento de exceção na chamada de rede | App crasha se não houver conexão | Envolver em try-catch + verificar conectividade |
| 6 | Dados hardcoded no código | Senha fixa não faz sentido em produção | Usar Firebase Auth ou outro serviço de autenticação |

**Código corrigido:**

```kotlin
class MainActivity : AppCompatActivity() {
    
    private lateinit var recyclerView: RecyclerView
    private lateinit var adapter: DadosAdapter

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        
        setupRecyclerView()
        carregarDados()
    }
    
    private fun setupRecyclerView() {
        adapter = DadosAdapter()
        recyclerView = findViewById(R.id.recyclerView)
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = adapter
    }
    
    private fun carregarDados() {
        // Coroutine para operação assíncrona
        lifecycleScope.launch {
            try {
                val dados = withContext(Dispatchers.IO) {
                    // Chamada de rede fora da Main Thread
                    URL("https://api.exemplo.com/dados").readText()
                }
                // Atualizar UI na Main Thread
                adapter.submitList(parseDados(dados))
            } catch (e: IOException) {
                Toast.makeText(this@MainActivity, "Erro de conexão", Toast.LENGTH_SHORT).show()
            }
        }
    }
}
```

---

**Questão 9 — Chat em Tempo Real (Modelo Firestore):**

```
conversas/
  {conversaId}/
    participantes: ["uid1", "uid2"]
    ultimaMensagem: "Olá!"
    ultimaAtualizacao: Timestamp
    mensagens/ (subcoleção)
      {mensagemId}/
        texto: "Olá!"
        autorUid: "uid1"
        timestamp: Timestamp
        lida: false

usuarios/
  {uid}/
    nome: "João"
    fotoUrl: "..."
    conversasIds: ["conv1", "conv2"]
```

**Security Rules para o chat:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /conversas/{conversaId} {
      // Só participantes podem ler a conversa
      allow read: if request.auth.uid in resource.data.participantes;
      
      // Criar conversa: o criador deve estar nos participantes
      allow create: if request.auth.uid in request.resource.data.participantes;
      
      // Mensagens: só participantes da conversa
      match /mensagens/{msgId} {
        allow read: if request.auth.uid in 
          get(/databases/$(database)/documents/conversas/$(conversaId)).data.participantes;
        allow create: if request.auth.uid in 
          get(/databases/$(database)/documents/conversas/$(conversaId)).data.participantes
          && request.resource.data.autorUid == request.auth.uid;
      }
    }
  }
}
```

**Listener em tempo real (Kotlin):**

```kotlin
private fun escutarMensagens(conversaId: String) {
    FirebaseFirestore.getInstance()
        .collection("conversas")
        .document(conversaId)
        .collection("mensagens")
        .orderBy("timestamp", Query.Direction.ASCENDING)
        .addSnapshotListener { snapshots, error ->
            if (error != null) {
                Log.e("Chat", "Erro ao escutar mensagens", error)
                return@addSnapshotListener
            }
            
            val mensagens = snapshots?.documents?.map { doc ->
                Mensagem(
                    id = doc.id,
                    texto = doc.getString("texto") ?: "",
                    autorUid = doc.getString("autorUid") ?: "",
                    timestamp = doc.getTimestamp("timestamp")
                )
            } ?: emptyList()
            
            adapter.submitList(mensagens)
            // Scroll para última mensagem
            recyclerView.scrollToPosition(mensagens.size - 1)
        }
}
```

---

### Distribuição de Pontos — Critérios de Correção Parcial

**Questões de Múltipla Escolha (todas as provas):**
- Resposta correta: 0,5 ponto
- Resposta incorreta: 0 pontos (sem desconto)

**Questões Práticas — Rubrica Geral:**

| Critério | Peso |
|---|---|
| Funcionalidade correta (código compila e funciona) | 40% |
| Boas práticas (naming, organização, patterns) | 20% |
| Completude (todos os requisitos atendidos) | 25% |
| Segurança e tratamento de erros | 15% |

**Questão 6 (Kotlin/XML) — Pontuação detalhada:**
- Layout XML válido e correto: 0,5-1,0 pt
- Lógica Kotlin funcional: 1,0-1,5 pt
- Cada requisito não atendido: -0,25 pt

**Questão 7 (Firebase) — Pontuação detalhada:**
- Security Rules sintaticamente corretas: 0,5 pt
- Lógica de permissão correta: 0,5-1,0 pt
- Cloud Function/Query funcional: 1,0-1,5 pt
- Tratamento de edge cases: 0,25 pt bônus

**Questão 8 (Segurança/LGPD) — Pontuação detalhada:**
- Identificação correta de artigos/vulnerabilidades: 0,5-1,0 pt
- Propostas de solução viáveis e fundamentadas: 0,75-1,0 pt
- Redação de política/termo adequada: 0,5-0,75 pt
- Coerência e argumentação: 0,25 pt bônus

---

### Gabarito — Exercício 10 (Auditoria de Segurança — DIFÍCIL)

**1. Vulnerabilidades identificadas:**

| # | Vulnerabilidade | Severidade | Solução |
|---|---|---|---|
| 1 | Security Rules `allow: true` | **Crítica** | Reescrever com autenticação + autorização granular |
| 2 | Comunicação via HTTP (sem TLS) | **Crítica** | Forçar HTTPS em todas as conexões |
| 3 | Dados médicos sem criptografia | **Crítica** | Criptografia em repouso (AES-256) e em trânsito (TLS 1.3) |
| 4 | Sem 2FA na autenticação | **Alta** | Implementar MFA (SMS, TOTP ou push notification) |
| 5 | Conta admin compartilhada | **Alta** | Contas individuais com RBAC + logs de auditoria |
| 6 | Backup semanal em HD externo | **Alta** | Backup automático diário + regra 3-2-1 |
| 7 | Sem logs de acesso | **Alta** | Implementar logging centralizado (Cloud Logging) |
| 8 | Sem consentimento para coleta | **Alta** | Implementar fluxo de consentimento (LGPD Art. 7-8) |
| 9 | Dados sensíveis (saúde) sem base legal | **Alta** | Obter consentimento específico (Art. 11) |
| 10 | Sem política de privacidade | **Média** | Criar e publicar política completa |

**2. Artigos LGPD violados:**
- Art. 6º (princípios): finalidade, necessidade, segurança
- Art. 7º/11: ausência de base legal para tratamento de dados sensíveis
- Art. 9º: falta de transparência (sem política de privacidade)
- Art. 18: impossibilidade de exercer direitos do titular
- Art. 46: medidas de segurança insuficientes
- Art. 50: ausência de programa de governança

**3. Security Rules reescritas:**

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Negar tudo por padrão
    match /{document=**} {
      allow read, write: if false;
    }
    
    // Prontuários: apenas médico responsável e paciente
    match /prontuarios/{prontuarioId} {
      allow read: if request.auth != null && (
        request.auth.uid == resource.data.pacienteUid ||
        request.auth.uid == resource.data.medicoUid
      );
      allow create: if request.auth != null &&
        request.auth.token.role == "medico";
      allow update: if request.auth != null &&
        request.auth.uid == resource.data.medicoUid;
      allow delete: if false; // Prontuários nunca são deletados
    }
    
    // Pacientes: perfil visível para si e seus médicos
    match /pacientes/{pacienteId} {
      allow read: if request.auth.uid == pacienteId;
      allow update: if request.auth.uid == pacienteId
        && !request.resource.data.diff(resource.data).affectedKeys()
            .hasAny(['cpf', 'dataNascimento']); // Campos imutáveis
    }
  }
}
```

**4. Plano de backup 3-2-1:**
- **3 cópias:** Original (Firestore) + Backup diário (Cloud Storage) + Backup semanal (outro provedor)
- **2 mídias:** Cloud Storage (disco SSD) + Coldline Storage (fita virtual)
- **1 off-site:** Backup em região geográfica diferente (ex: us-central → southamerica-east1)
- **Automação:** Cloud Function agendada para exportar Firestore diariamente
- **Teste:** Restore mensal para validar integridade

---

### Resumo de Competências Avaliadas por Questão

| Questão | Competência Principal | Nível Bloom |
|---|---|---|
| Exercícios 1-4 | Lembrar/Compreender | Conhecimento |
| Exercícios 5-8 | Aplicar/Analisar | Aplicação |
| Exercícios 9-10 | Avaliar/Criar | Síntese |
| Provas Q1-Q5 | Compreender | Conhecimento |
| Provas Q6-Q8 | Aplicar/Criar | Aplicação + Síntese |
| Simulado | Avaliar/Criar (integração) | Síntese + Avaliação |

---

## 📌 Observações Finais para Aplicação

1. **Provas A e B** são equivalentes em dificuldade — aplicar em turmas diferentes ou como 2ª chamada
2. **Recuperação** cobre os mesmos conteúdos com menor complexidade (nota máx. 6,0)
3. **Simulado Integrado** pode ser usado como atividade em grupo (equipes de 4)
4. **Lista de Exercícios** pode ser usada como atividade contínua ao longo do módulo
5. Aceitar pseudocódigo quando Kotlin exato não for exigido explicitamente
6. Para questões de segurança/LGPD, valorizar argumentação fundamentada sobre decoreba

---

*Documento gerado para uso interno — ETE Pernambuco*
*Profª Luana Cristina — Módulo 3 — Desenvolvimento de Sistemas*
