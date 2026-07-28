# 📘 Manual de Apoio ao Estudante — BD Cloud: Firebase (80h)

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco | Profª Luana Cristina**
**Ferramentas: Firebase (Firestore, Auth, Functions)**

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 Cloud vs On-premise

| Aspecto | On-premise | Cloud |
|---|---|---|
| Infraestrutura | Você compra e mantém servidores | Aluga recursos sob demanda |
| Custo inicial | Alto (hardware + espaço + energia) | Baixo ou zero (pay-as-you-go) |
| Escalabilidade | Limitada ao hardware | Virtualmente infinita |
| Manutenção | Sua equipe faz tudo | Provedor cuida da infra |
| Controle | Total | Compartilhado |

**Analogia:** É como **casa própria vs aluguel**. Casa própria (on-premise) você tem controle total, mas paga manutenção, IPTU, reformas. Aluguel (cloud) você paga mensalidade, o dono resolve os problemas estruturais, e se precisar de mais espaço, muda para um apt maior sem construir.

### 1.2 Modelos de Serviço em Nuvem

```
┌─────────────────────────────────────────────────────┐
│ SaaS  │ Tudo pronto (Gmail, Google Docs)            │
├─────────────────────────────────────────────────────┤
│ PaaS  │ Plataforma pronta, você faz o app           │
├─────────────────────────────────────────────────────┤
│ DBaaS │ Banco de dados como serviço (Firebase, etc) │
├─────────────────────────────────────────────────────┤
│ IaaS  │ Só infraestrutura (VM, rede, storage)       │
└─────────────────────────────────────────────────────┘
```

- **IaaS** — Você monta tudo (ex: AWS EC2, Google Compute Engine)
- **PaaS** — Plataforma pronta, foque no código (ex: Heroku, App Engine)
- **DBaaS** — Banco gerenciado (ex: Firebase, MongoDB Atlas)
- **SaaS** — Software pronto para usar (ex: Gmail, Slack)

### 1.3 Firebase — Visão Geral

Firebase é um **kit de ferramentas na nuvem** do Google para desenvolvedores mobile e web.

**Analogia:** Imagine uma **oficina completa** onde todas as ferramentas já estão organizadas. Você não precisa comprar martelo, furadeira, serra — é só usar. Firebase oferece banco, autenticação, storage, hosting e muito mais, tudo integrado.

**Serviços que usaremos:**
- 🗄️ **Firestore** — banco NoSQL por documentos
- 🔐 **Authentication** — login de usuários
- ⚡ **Cloud Functions** — código serverless
- 📊 **Realtime Database** — banco NoSQL de sincronização instantânea

### 1.4 Firestore vs Realtime Database

| Aspecto | Firestore | Realtime Database |
|---|---|---|
| Estrutura | Coleções → Documentos → Campos | Uma grande árvore JSON |
| Consultas | Avançadas (compostas, ordenação) | Simples (limitadas) |
| Escalabilidade | Automática e superior | Requer sharding manual |
| Offline | Suporte completo | Suporte básico |
| Preço | Por operações de leitura/escrita | Por dados armazenados/transferidos |

**Analogia:**
- **Firestore** = **Armário com gavetas organizadas**. Cada gaveta (coleção) tem pastas (documentos) com fichas (campos). Fácil encontrar qualquer coisa.
- **Realtime Database** = **Caixa JSON gigante**. Tudo jogado junto em formato hierárquico. Simples, mas desorganizado para dados complexos.

### 1.5 Security Rules

Security Rules controlam quem pode ler/escrever dados no Firebase.

**Analogia:** São o **porteiro do prédio**. Ele verifica:
- Você mora aqui? (está autenticado?)
- Você pode entrar neste apartamento? (tem permissão nesta coleção?)
- O que você está trazendo é permitido? (os dados são válidos?)

**Princípios:**
- Negar tudo por padrão (princípio do menor privilégio)
- Validar estrutura dos dados na escrita
- Verificar autenticação antes de liberar acesso
- Limitar consultas para evitar leitura excessiva

### 1.6 Cloud Functions

Cloud Functions são trechos de código que executam na nuvem em resposta a eventos.

**Analogia:** Um **assistente automático** que "acorda" quando algo acontece. Ex: quando um novo pedido é criado (evento), o assistente envia um e-mail de confirmação (função) e volta a "dormir".

**Casos de uso:**
- Enviar notificação quando dado muda
- Processar imagem ao fazer upload
- Limpar dados antigos periodicamente
- Validações complexas no servidor

---

## Capítulo 2 — Exemplos de Código/Processo Comentados

### 2.1 Configurar Firebase no Android (Kotlin)

```kotlin
// 1. No build.gradle (project level), adicione:
// classpath 'com.google.gms:google-services:4.4.0'

// 2. No build.gradle (app level), adicione:
// plugins { id 'com.google.gms.google-services' }
// dependencies {
//     implementation platform('com.google.firebase:firebase-bom:32.7.0')
//     implementation 'com.google.firebase:firebase-firestore-ktx'
//     implementation 'com.google.firebase:firebase-auth-ktx'
// }

// 3. Baixe google-services.json do Console e coloque em app/

// 4. Inicialize no Application (opcional, auto-init funciona)
import com.google.firebase.FirebaseApp

class MeuApp : Application() {
    override fun onCreate() {
        super.onCreate()
        FirebaseApp.initializeApp(this)
    }
}
```

### 2.2 Firestore CRUD Completo

```kotlin
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.ktx.firestore
import com.google.firebase.ktx.Firebase

class AlunoRepository {
    private val db = Firebase.firestore
    private val colecao = db.collection("alunos")

    // CREATE — Adicionar aluno
    fun adicionar(nome: String, idade: Int, curso: String) {
        val aluno = hashMapOf(
            "nome" to nome,
            "idade" to idade,
            "curso" to curso,
            "matriculadoEm" to com.google.firebase.Timestamp.now()
        )

        colecao.add(aluno)
            .addOnSuccessListener { doc ->
                println("✅ Aluno criado com ID: ${doc.id}")
            }
            .addOnFailureListener { e ->
                println("❌ Erro: ${e.message}")
            }
    }

    // READ — Buscar todos os alunos de um curso
    fun buscarPorCurso(curso: String, callback: (List<Map<String, Any>>) -> Unit) {
        colecao.whereEqualTo("curso", curso)
            .orderBy("nome")
            .get()
            .addOnSuccessListener { snapshot ->
                val alunos = snapshot.documents.map { it.data ?: emptyMap() }
                callback(alunos)
            }
    }

    // UPDATE — Atualizar idade do aluno
    fun atualizar(alunoId: String, novaIdade: Int) {
        colecao.document(alunoId)
            .update("idade", novaIdade)
            .addOnSuccessListener { println("✅ Atualizado!") }
            .addOnFailureListener { e -> println("❌ Erro: ${e.message}") }
    }

    // DELETE — Remover aluno
    fun remover(alunoId: String) {
        colecao.document(alunoId)
            .delete()
            .addOnSuccessListener { println("✅ Removido!") }
            .addOnFailureListener { e -> println("❌ Erro: ${e.message}") }
    }

    // QUERY — Buscar alunos maiores de idade
    fun buscarMaioresDeIdade(callback: (List<String>) -> Unit) {
        colecao.whereGreaterThanOrEqualTo("idade", 18)
            .get()
            .addOnSuccessListener { snapshot ->
                val nomes = snapshot.documents.mapNotNull { it.getString("nome") }
                callback(nomes)
            }
    }
}
```

### 2.3 Security Rules (Firestore)

```javascript
// firestore.rules — Regras de segurança do Firestore
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Regra 1: Usuário só acessa seus próprios dados
    match /usuarios/{userId} {
      allow read, write: if request.auth != null
                         && request.auth.uid == userId;
    }

    // Regra 2: Qualquer autenticado lê produtos, só admin escreve
    match /produtos/{produtoId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null
                   && request.auth.token.admin == true;
    }

    // Regra 3: Validação de dados na escrita
    match /pedidos/{pedidoId} {
      allow read: if request.auth != null;
      allow create: if request.auth != null
                    && request.resource.data.keys().hasAll(['produto', 'quantidade', 'preco'])
                    && request.resource.data.quantidade > 0
                    && request.resource.data.preco > 0;
    }

    // Regra 4: Negar tudo que não foi explicitamente permitido
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

### 2.4 Cloud Function — Trigger onCreate

```javascript
// functions/index.js — Cloud Function que dispara quando um pedido é criado
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Trigger: dispara automaticamente quando um novo documento é criado em "pedidos"
exports.novoPedido = functions.firestore
    .document("pedidos/{pedidoId}")
    .onCreate(async (snapshot, context) => {
        // Dados do documento recém-criado
        const pedido = snapshot.data();
        const pedidoId = context.params.pedidoId;

        console.log(`📦 Novo pedido: ${pedidoId}`, pedido);

        // Exemplo: calcular total e atualizar o documento
        const total = pedido.quantidade * pedido.preco;

        await snapshot.ref.update({
            total: total,
            status: "confirmado",
            processadoEm: admin.firestore.FieldValue.serverTimestamp()
        });

        // Exemplo: enviar notificação ao usuário
        const userId = pedido.userId;
        const userDoc = await admin.firestore()
            .collection("usuarios")
            .doc(userId)
            .get();

        if (userDoc.exists) {
            const token = userDoc.data().fcmToken;
            if (token) {
                await admin.messaging().send({
                    token: token,
                    notification: {
                        title: "Pedido Confirmado! ✅",
                        body: `Seu pedido #${pedidoId} foi confirmado. Total: R$ ${total}`
                    }
                });
            }
        }

        return null; // Função concluída
    });
```

### 2.5 Authentication — Registro e Login

```kotlin
import com.google.firebase.auth.FirebaseAuth
import com.google.firebase.auth.ktx.auth
import com.google.firebase.ktx.Firebase

class AuthRepository {
    private val auth: FirebaseAuth = Firebase.auth

    // REGISTRAR novo usuário com email e senha
    fun registrar(email: String, senha: String, onResultado: (Boolean, String) -> Unit) {
        auth.createUserWithEmailAndPassword(email, senha)
            .addOnCompleteListener { task ->
                if (task.isSuccessful) {
                    val uid = auth.currentUser?.uid ?: ""
                    onResultado(true, "Usuário criado! UID: $uid")
                } else {
                    onResultado(false, "Erro: ${task.exception?.message}")
                }
            }
    }

    // LOGIN com email e senha
    fun login(email: String, senha: String, onResultado: (Boolean, String) -> Unit) {
        auth.signInWithEmailAndPassword(email, senha)
            .addOnCompleteListener { task ->
                if (task.isSuccessful) {
                    val uid = auth.currentUser?.uid ?: ""
                    onResultado(true, "Login OK! UID: $uid")
                } else {
                    onResultado(false, "Erro: ${task.exception?.message}")
                }
            }
    }

    // Verificar se usuário está logado
    fun estaLogado(): Boolean = auth.currentUser != null

    // LOGOUT
    fun logout() = auth.signOut()
}
```

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Significado em Português |
|---|---|
| **Cloud Computing** | Computação em nuvem — uso de recursos remotos via internet |
| **IaaS** | Infraestrutura como Serviço — VMs, rede, storage |
| **PaaS** | Plataforma como Serviço — ambiente pronto para deploy |
| **SaaS** | Software como Serviço — app pronto para usar |
| **DBaaS** | Banco de Dados como Serviço — BD gerenciado na nuvem |
| **Firebase** | Plataforma BaaS do Google para apps mobile e web |
| **Firestore** | Banco NoSQL do Firebase organizado em coleções/documentos |
| **Realtime Database** | Banco NoSQL do Firebase com sincronização instantânea (JSON) |
| **Collection** | Coleção — agrupamento de documentos no Firestore |
| **Document** | Documento — registro individual com campos (pares chave-valor) |
| **Subcollection** | Subcoleção — coleção aninhada dentro de um documento |
| **NoSQL** | Banco não-relacional (sem tabelas/SQL tradicionais) |
| **Denormalization** | Duplicar dados para evitar consultas complexas (padrão NoSQL) |
| **Authentication** | Serviço de verificação de identidade do usuário |
| **Security Rules** | Regras que controlam acesso a leitura/escrita dos dados |
| **Cloud Functions** | Código serverless executado em resposta a eventos |
| **Trigger** | Gatilho — evento que dispara uma Cloud Function |
| **Serverless** | Modelo sem gerenciamento de servidores pelo desenvolvedor |
| **IAM** | Gerenciamento de Identidade e Acesso (controle de permissões) |
| **Role** | Papel/função atribuída a um usuário (admin, editor, viewer) |
| **Permission** | Permissão específica (ler, escrever, deletar) |
| **Backup** | Cópia de segurança dos dados |
| **Recovery** | Recuperação de dados a partir de um backup |
| **Scalability** | Capacidade de crescer conforme a demanda aumenta |
| **Latency** | Tempo de resposta entre requisição e retorno |
| **Region** | Região geográfica onde os dados são armazenados |
| **Free Tier** | Camada gratuita — recursos oferecidos sem custo mensal |
| **Pay-as-you-go** | Pague conforme o uso (modelo de cobrança variável) |
| **SDK** | Kit de desenvolvimento (bibliotecas + ferramentas) |
| **Console** | Painel administrativo web do Firebase |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### Documentação Oficial
- 📖 [Firebase Documentation](https://firebase.google.com/docs) — Docs completos
- 📖 [Firestore Data Model](https://firebase.google.com/docs/firestore/data-model)
- 📖 [Security Rules Guide](https://firebase.google.com/docs/rules)

### Cursos e Prática
- 🎓 [Google Codelabs — Firebase](https://codelabs.developers.google.com/?cat=Firebase)
- 🎓 [Firebase Fundamentals (YouTube)](https://www.youtube.com/playlist?list=PLl-K7zZEsYLmOF_07IayrTntEvMt_B2Rp)
- 🎓 [Alura — Firebase](https://www.alura.com.br/cursos-online-mobile/firebase)

### Canais no YouTube
- 🎬 [Fireship](https://www.youtube.com/c/Fireship) — Vídeos curtos e práticos sobre Firebase
- 🎬 [Firebase Channel](https://www.youtube.com/c/firebase) — Canal oficial do Firebase

### Ferramentas
- 🛠️ [Firebase Console](https://console.firebase.google.com/) — Painel de gerenciamento
- 🛠️ [Firebase Pricing Calculator](https://firebase.google.com/pricing) — Simulador de custos
- 🛠️ [Firebase Emulator Suite](https://firebase.google.com/docs/emulator-suite) — Testar localmente
- 🛠️ [Firestore Rules Playground](https://firebase.google.com/docs/rules/simulator) — Testar regras

---

> **Dica da professora:** Sempre comece testando com o Firebase Emulator local antes de usar o banco real. Isso evita custos acidentais e permite aprender sem medo de errar! 💡
