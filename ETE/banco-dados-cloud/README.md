<p align="center">
  <img src="https://img.shields.io/badge/Módulo-3-purple" alt="Módulo 3"/>
  <img src="https://img.shields.io/badge/Carga_Horária-80h-blue" alt="80h"/>
  <img src="https://img.shields.io/badge/Firebase-FFCA28?logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/Google_Cloud-4285F4?logo=googlecloud&logoColor=white" alt="GCP"/>
  <img src="https://img.shields.io/badge/NoSQL-Firestore-orange" alt="NoSQL"/>
  <img src="https://img.shields.io/badge/Android-3DDC84?logo=android&logoColor=white" alt="Android"/>
  <img src="https://img.shields.io/badge/Cloud_Functions-009688" alt="Cloud Functions"/>
  <img src="https://img.shields.io/badge/ETE_Pernambuco-Ensino_Técnico-red" alt="ETE"/>
</p>

# ☁️ Administração de Bancos de Dados - Cloud

> **Curso Técnico em Desenvolvimento de Sistemas — ETE Pernambuco**
> **Professora:** Profª Luana Cristina
> **Módulo 3** | 80 horas | 4 aulas/semana | 20 semanas

---

## 📋 Sumário

- [Sobre a Disciplina](#-sobre-a-disciplina)
- [Ementa](#-ementa)
- [Objetivos](#-objetivos)
- [Pré-requisitos](#-pré-requisitos)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Cronograma](#-cronograma)
- [Material Teórico](#-material-teórico)
- [Exercícios](#-exercícios)
- [Projetos](#-projetos)
- [Simulado](#-simulado)
- [Avaliação (Prova)](#-avaliação-prova)
- [Referências](#-referências)

---

## 📖 Sobre a Disciplina

Esta disciplina explora a administração de bancos de dados em ambientes de computação em nuvem. Os alunos aprenderão a diferença entre soluções on-premise e cloud, dominarão o Firebase como plataforma principal (Realtime Database, Firestore, Authentication, Storage) e integrarão bancos de dados cloud com aplicações Android.

---

## 📝 Ementa

| Tópico | Descrição |
|--------|-----------|
| BD em Nuvem vs On-premise | Vantagens, desvantagens, análise de custos (TCO) |
| Migração de BD para Cloud | Estratégias, ferramentas, planejamento |
| Evolução do papel do DBA | De DBA tradicional para Cloud DBA / DevOps |
| IAM e Segurança em Cloud | Identity Access Management, políticas, roles |
| Firebase Fundamentals | Realtime Database, Firestore, Authentication, Storage |
| Cloud Functions | Funções serverless básicas para automação |
| Backup e Recuperação | Estratégias de backup em nuvem, disaster recovery |

---

## 🎯 Objetivos

### Objetivo Geral
Capacitar o aluno a administrar bancos de dados em ambientes de computação em nuvem, com foco prático no ecossistema Firebase/Google Cloud.

### Objetivos Específicos
- Comparar soluções de BD on-premise e cloud (custo, escalabilidade, segurança)
- Compreender modelos de serviço (IaaS, PaaS, SaaS, DBaaS)
- Configurar e administrar projetos Firebase
- Modelar dados para bancos NoSQL (Firestore e Realtime Database)
- Implementar autenticação e regras de segurança
- Integrar Firebase com aplicações Android
- Criar Cloud Functions para lógica de backend
- Planejar estratégias de backup e recuperação em nuvem

---

## ✅ Pré-requisitos

- ✔️ Administração de Bancos de Dados (Módulo 2) — SQL, modelagem relacional
- ✔️ Programação Mobile Android (Módulo 2) — Kotlin básico, Android Studio
- ✔️ Conta Google (Gmail) para acesso ao Firebase Console
- ✔️ Noções de JSON e APIs REST

---

## 🔧 Configuração do Ambiente

### 1. Criar Projeto no Firebase Console

```bash
# Acesse: https://console.firebase.google.com/
# 1. Clique em "Adicionar projeto"
# 2. Nome do projeto: ete-turma2026-seunome
# 3. Desative o Google Analytics (para simplificar)
# 4. Clique em "Criar projeto"
```

### 2. Configurar Firebase no Android Studio

```kotlin
// build.gradle (Project level)
plugins {
    id("com.google.gms.google-services") version "4.4.0" apply false
}

// build.gradle (App level)
plugins {
    id("com.google.gms.google-services")
}

dependencies {
    // Firebase BoM (Bill of Materials)
    implementation(platform("com.google.firebase:firebase-bom:32.7.0"))
    
    // Firebase services
    implementation("com.google.firebase:firebase-firestore-ktx")
    implementation("com.google.firebase:firebase-auth-ktx")
    implementation("com.google.firebase:firebase-storage-ktx")
    implementation("com.google.firebase:firebase-database-ktx")
}
```

### 3. Baixar google-services.json

```
Firebase Console → Configurações do Projeto → Seus apps → Android
→ Registrar app (com.ete.seuprojeto)
→ Baixar google-services.json
→ Colocar na pasta app/ do projeto Android
```

### 4. Instalar Firebase CLI (opcional, para Cloud Functions)

```bash
# Instalar Node.js (necessário para Cloud Functions)
# Baixar em: https://nodejs.org/

# Instalar Firebase CLI
npm install -g firebase-tools

# Login
firebase login

# Inicializar projeto
firebase init
```

### 5. Ferramentas Complementares

| Ferramenta | Uso | Link |
|------------|-----|------|
| Firebase Console | Gerenciamento do projeto | console.firebase.google.com |
| Firebase Emulator | Testes locais | Incluído no CLI |
| Postman | Testar Cloud Functions | postman.com |
| Android Studio | Desenvolvimento mobile | developer.android.com |

---

## 📅 Cronograma

### Semanas 1-4: Teoria Cloud Computing & Bancos de Dados

| Semana | Aula | Conteúdo | Atividade |
|--------|------|----------|-----------|
| 1 | 1-2 | Introdução à Cloud Computing (IaaS, PaaS, SaaS) | Mapa mental dos modelos |
| 1 | 3-4 | DBaaS — Database as a Service | Pesquisa: serviços DBaaS |
| 2 | 5-6 | Comparativo On-premise vs Cloud (custo, escala, segurança) | Tabela comparativa |
| 2 | 7-8 | Principais provedores: AWS, GCP, Azure | Criar conta free tier GCP |
| 3 | 9-10 | Evolução do papel do DBA na era cloud | Debate: DBA do futuro |
| 3 | 11-12 | IAM — Identity and Access Management | Configurar IAM no Firebase |
| 4 | 13-14 | Migração de BD para cloud: estratégias | Plano de migração teórico |
| 4 | 15-16 | **Avaliação Parcial 1** — Teoria Cloud | Prova teórica |

### Semanas 5-8: Firebase Fundamentals

| Semana | Aula | Conteúdo | Atividade |
|--------|------|----------|-----------|
| 5 | 17-18 | Firebase overview + Setup do projeto | Criar projeto Firebase |
| 5 | 19-20 | Realtime Database: estrutura JSON, leitura/escrita | CRUD básico no console |
| 6 | 21-22 | Realtime Database: listeners e sincronização | App de chat simples |
| 6 | 23-24 | Firestore: coleções, documentos, subcoleções | Modelar dados de escola |
| 7 | 25-26 | Firestore: queries, filtros, ordenação | Exercício de consultas |
| 7 | 27-28 | Modelagem NoSQL: denormalização vs normalização | Redesenhar BD relacional |
| 8 | 29-30 | Comparativo Realtime DB vs Firestore | Tabela de decisão |
| 8 | 31-32 | **Projeto Prático 1** — App com Firestore | Entrega do app CRUD |

### Semanas 9-12: Authentication + Security Rules + Storage

| Semana | Aula | Conteúdo | Atividade |
|--------|------|----------|-----------|
| 9 | 33-34 | Firebase Authentication: email/senha | Implementar login/registro |
| 9 | 35-36 | Auth: Google Sign-In + gerenciamento de usuários | Integrar login social |
| 10 | 37-38 | Security Rules: sintaxe e lógica | Escrever regras básicas |
| 10 | 39-40 | Security Rules: validação de dados e roles | Regras por perfil de usuário |
| 11 | 41-42 | Firebase Storage: upload/download de arquivos | Upload de imagem de perfil |
| 11 | 43-44 | Storage: regras de segurança e metadados | Limitar tamanho/tipo arquivo |
| 12 | 45-46 | Integração Auth + Firestore + Storage | App completo com 3 serviços |
| 12 | 47-48 | **Avaliação Parcial 2** — Firebase prático | Prova prática |

### Semanas 13-16: Integração Android + Cloud Functions

| Semana | Aula | Conteúdo | Atividade |
|--------|------|----------|-----------|
| 13 | 49-50 | CRUD completo Firebase ↔ Android (Create/Read) | Tela de cadastro com Firestore |
| 13 | 51-52 | CRUD Firebase ↔ Android (Update/Delete) | Tela de edição/exclusão |
| 14 | 53-54 | RecyclerView + Firestore (dados em tempo real) | Lista dinâmica de itens |
| 14 | 55-56 | Offline persistence e cache no Firestore | Testar app sem internet |
| 15 | 57-58 | Cloud Functions: introdução e deploy | Primeira function (Hello) |
| 15 | 59-60 | Cloud Functions: triggers de Firestore | Função ao criar documento |
| 16 | 61-62 | Cloud Functions: HTTP triggers + Notificações | API serverless + FCM |
| 16 | 63-64 | **Projeto Prático 2** — App com Cloud Functions | Entrega do app integrado |

### Semanas 17-20: Projeto Final

| Semana | Aula | Conteúdo | Atividade |
|--------|------|----------|-----------|
| 17 | 65-66 | Projeto Final: definição e planejamento | Documento de requisitos |
| 17 | 67-68 | Migração: analisar BD relacional → modelar NoSQL | Diagrama de migração |
| 18 | 69-70 | Desenvolvimento: Firebase setup + Auth | Backend cloud funcionando |
| 18 | 71-72 | Desenvolvimento: CRUD + regras de segurança | Dados + segurança |
| 19 | 73-74 | Desenvolvimento: App Android integrado | App conectado ao Firebase |
| 19 | 75-76 | Backup, monitoramento e otimização | Configurar backup automático |
| 20 | 77-78 | Apresentação dos Projetos Finais | Demo + defesa |
| 20 | 79-80 | **Prova Final + Encerramento** | Avaliação final |

---

## 📚 Material Teórico

### Tópico 1: Cloud Computing e Modelos de Serviço

#### O que é Computação em Nuvem?

Computação em nuvem é a entrega de recursos de TI sob demanda pela internet, com pagamento conforme o uso (pay-as-you-go).

#### Modelos de Serviço

```
┌─────────────────────────────────────────────────────┐
│              MODELOS DE SERVIÇO CLOUD                │
├─────────────┬──────────────┬──────────────┬─────────┤
│  On-Premise │    IaaS      │    PaaS      │  SaaS   │
├─────────────┼──────────────┼──────────────┼─────────┤
│ Aplicação   │ Aplicação    │ Aplicação    │ ✓ Prov. │
│ Dados       │ Dados        │ Dados        │ ✓ Prov. │
│ Runtime     │ Runtime      │ ✓ Provedor   │ ✓ Prov. │
│ Middleware  │ Middleware   │ ✓ Provedor   │ ✓ Prov. │
│ OS          │ OS           │ ✓ Provedor   │ ✓ Prov. │
│ Virtualiz.  │ ✓ Provedor   │ ✓ Provedor   │ ✓ Prov. │
│ Servidores  │ ✓ Provedor   │ ✓ Provedor   │ ✓ Prov. │
│ Storage     │ ✓ Provedor   │ ✓ Provedor   │ ✓ Prov. │
│ Rede        │ ✓ Provedor   │ ✓ Provedor   │ ✓ Prov. │
├─────────────┼──────────────┼──────────────┼─────────┤
│ Você gerencia│ Você gerencia│ Você gerencia│ Só usa  │
│ TUDO        │ App+Dados+OS │ App+Dados    │         │
└─────────────┴──────────────┴──────────────┴─────────┘

Exemplos:
- IaaS: AWS EC2, Google Compute Engine, Azure VMs
- PaaS: Heroku, Google App Engine, Azure App Service  
- SaaS: Gmail, Office 365, Salesforce
- DBaaS: Firebase, Amazon RDS, Cloud SQL, MongoDB Atlas
```

#### Comparativo On-Premise vs Cloud

| Critério | On-Premise | Cloud |
|----------|-----------|-------|
| **Custo inicial** | Alto (hardware, licenças) | Baixo (pay-as-you-go) |
| **Escalabilidade** | Limitada, requer compra | Elástica, sob demanda |
| **Manutenção** | Equipe própria | Provedor responsável |
| **Segurança** | Controle total | Responsabilidade compartilhada |
| **Disponibilidade** | Depende da infra local | SLA 99.9%+ |
| **Backup** | Manual/configurado | Automático (geralmente) |
| **Latência** | Menor (rede local) | Depende da região |
| **Conformidade** | Mais fácil (dados locais) | Verificar região dos dados |

---

### Tópico 2: Firebase — Visão Geral e Realtime Database

#### Ecossistema Firebase

```
┌────────────────────────────────────────────┐
│              FIREBASE PLATFORM             │
├────────────────┬───────────────────────────┤
│   BUILD        │   RELEASE & MONITOR      │
├────────────────┼───────────────────────────┤
│ Authentication │ Crashlytics              │
│ Firestore      │ Performance Monitoring   │
│ Realtime DB    │ Test Lab                 │
│ Storage        │ App Distribution         │
│ Hosting        │                          │
│ Cloud Functions│   ENGAGE                 │
│ ML Kit         ├───────────────────────────┤
│                │ Analytics                │
│                │ Cloud Messaging (FCM)    │
│                │ Remote Config            │
│                │ Dynamic Links            │
└────────────────┴───────────────────────────┘
```

#### Realtime Database — Estrutura JSON

```json
{
  "escola": {
    "alunos": {
      "aluno001": {
        "nome": "Maria Silva",
        "turma": "DS-M3",
        "matricula": "2026001",
        "notas": {
          "bd_cloud": 8.5,
          "mobile": 9.0,
          "seguranca": 7.5
        }
      },
      "aluno002": {
        "nome": "João Santos",
        "turma": "DS-M3",
        "matricula": "2026002",
        "notas": {
          "bd_cloud": 9.0,
          "mobile": 8.0,
          "seguranca": 8.5
        }
      }
    },
    "professores": {
      "prof001": {
        "nome": "Profª Luana Cristina",
        "disciplinas": ["bd_cloud", "projeto_integrador"]
      }
    }
  }
}
```

#### Operações CRUD — Realtime Database (Kotlin)

```kotlin
// Referência ao banco
val database = Firebase.database
val alunosRef = database.getReference("escola/alunos")

// CREATE — Adicionar aluno
fun adicionarAluno(aluno: Aluno) {
    val novoId = alunosRef.push().key ?: return
    alunosRef.child(novoId).setValue(aluno)
        .addOnSuccessListener { Log.d("Firebase", "Aluno salvo!") }
        .addOnFailureListener { Log.e("Firebase", "Erro: ${it.message}") }
}

// READ — Ler todos os alunos (listener em tempo real)
fun ouvirAlunos() {
    alunosRef.addValueEventListener(object : ValueEventListener {
        override fun onDataChange(snapshot: DataSnapshot) {
            val alunos = mutableListOf<Aluno>()
            for (alunoSnapshot in snapshot.children) {
                val aluno = alunoSnapshot.getValue(Aluno::class.java)
                aluno?.let { alunos.add(it) }
            }
            // Atualizar UI com a lista
        }
        override fun onCancelled(error: DatabaseError) {
            Log.e("Firebase", "Erro: ${error.message}")
        }
    })
}

// UPDATE — Atualizar nota
fun atualizarNota(alunoId: String, disciplina: String, nota: Double) {
    alunosRef.child(alunoId).child("notas/$disciplina").setValue(nota)
}

// DELETE — Remover aluno
fun removerAluno(alunoId: String) {
    alunosRef.child(alunoId).removeValue()
}
```

---

### Tópico 3: Firestore — Modelagem e Queries

#### Estrutura do Firestore (Coleções e Documentos)

```
Firestore (banco)
│
├── 📁 alunos (coleção)
│   ├── 📄 aluno001 (documento)
│   │   ├── nome: "Maria Silva"
│   │   ├── turma: "DS-M3"
│   │   ├── email: "maria@email.com"
│   │   └── 📁 notas (subcoleção)
│   │       ├── 📄 bd_cloud → { valor: 8.5, data: "2026-03-15" }
│   │       └── 📄 mobile → { valor: 9.0, data: "2026-03-20" }
│   │
│   └── 📄 aluno002 (documento)
│       ├── nome: "João Santos"
│       └── ...
│
├── 📁 professores (coleção)
│   └── 📄 prof001 (documento)
│       ├── nome: "Profª Luana Cristina"
│       └── disciplinas: ["bd_cloud", "projeto_integrador"]
│
└── 📁 turmas (coleção)
    └── 📄 DS-M3 (documento)
        ├── periodo: "2026.2"
        └── totalAlunos: 35
```

#### CRUD com Firestore (Kotlin)

```kotlin
// Referência ao Firestore
val db = Firebase.firestore

// Data class do aluno
data class Aluno(
    val nome: String = "",
    val turma: String = "",
    val email: String = "",
    val matricula: String = ""
)

// CREATE — Adicionar documento
fun criarAluno(aluno: Aluno) {
    db.collection("alunos")
        .add(aluno)
        .addOnSuccessListener { docRef ->
            Log.d("Firestore", "Documento criado com ID: ${docRef.id}")
        }
        .addOnFailureListener { e ->
            Log.e("Firestore", "Erro ao criar: ${e.message}")
        }
}

// CREATE com ID personalizado
fun criarAlunoComId(id: String, aluno: Aluno) {
    db.collection("alunos").document(id).set(aluno)
}

// READ — Buscar todos
fun buscarAlunos() {
    db.collection("alunos")
        .get()
        .addOnSuccessListener { result ->
            for (document in result) {
                val aluno = document.toObject(Aluno::class.java)
                Log.d("Firestore", "${document.id} => ${aluno.nome}")
            }
        }
}

// READ — Query com filtro
fun buscarPorTurma(turma: String) {
    db.collection("alunos")
        .whereEqualTo("turma", turma)
        .orderBy("nome")
        .get()
        .addOnSuccessListener { result ->
            // Processar resultados
        }
}

// READ — Listener em tempo real
fun ouvirMudancas() {
    db.collection("alunos")
        .addSnapshotListener { snapshots, error ->
            if (error != null) return@addSnapshotListener
            for (dc in snapshots!!.documentChanges) {
                when (dc.type) {
                    DocumentChange.Type.ADDED -> Log.d("FB", "Novo: ${dc.document.data}")
                    DocumentChange.Type.MODIFIED -> Log.d("FB", "Alterado: ${dc.document.data}")
                    DocumentChange.Type.REMOVED -> Log.d("FB", "Removido: ${dc.document.id}")
                }
            }
        }
}

// UPDATE — Atualizar campos específicos
fun atualizarAluno(id: String, campos: Map<String, Any>) {
    db.collection("alunos").document(id).update(campos)
}

// DELETE — Remover documento
fun deletarAluno(id: String) {
    db.collection("alunos").document(id).delete()
}
```

---

### Tópico 4: Firebase Authentication e Security Rules

#### Authentication — Métodos Disponíveis

```
┌─────────────────────────────────────────┐
│       FIREBASE AUTHENTICATION           │
├─────────────────────────────────────────┤
│  📧 Email/Senha (mais usado em aula)    │
│  📱 Telefone (SMS)                      │
│  🔵 Google Sign-In                      │
│  🔷 Facebook Login                      │
│  🍎 Apple Sign-In                       │
│  🔗 Links por email (passwordless)      │
│  👤 Anônimo (sem cadastro)              │
└─────────────────────────────────────────┘
```

#### Implementação de Auth (Kotlin)

```kotlin
val auth = Firebase.auth

// REGISTRO — Criar conta com email/senha
fun registrarUsuario(email: String, senha: String) {
    auth.createUserWithEmailAndPassword(email, senha)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val user = auth.currentUser
                Log.d("Auth", "Usuário criado: ${user?.uid}")
                // Navegar para tela principal
            } else {
                Log.e("Auth", "Erro: ${task.exception?.message}")
                // Mostrar erro ao usuário
            }
        }
}

// LOGIN — Entrar com email/senha
fun loginUsuario(email: String, senha: String) {
    auth.signInWithEmailAndPassword(email, senha)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val user = auth.currentUser
                Log.d("Auth", "Login bem-sucedido: ${user?.email}")
            } else {
                Log.e("Auth", "Falha no login: ${task.exception?.message}")
            }
        }
}

// LOGOUT
fun logout() {
    auth.signOut()
}

// VERIFICAR ESTADO DO USUÁRIO
fun verificarLogin() {
    val user = auth.currentUser
    if (user != null) {
        // Usuário logado — ir para tela principal
    } else {
        // Não logado — ir para tela de login
    }
}

// GOOGLE SIGN-IN
fun loginComGoogle(idToken: String) {
    val credential = GoogleAuthProvider.getCredential(idToken, null)
    auth.signInWithCredential(credential)
        .addOnCompleteListener { task ->
            if (task.isSuccessful) {
                val user = auth.currentUser
                // Sucesso
            }
        }
}
```

#### Security Rules — Firestore

```javascript
// firestore.rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Regra 1: Qualquer usuário autenticado pode ler alunos
    match /alunos/{alunoId} {
      allow read: if request.auth != null;
      allow write: if request.auth != null 
                   && request.auth.token.email_verified == true;
    }
    
    // Regra 2: Usuário só edita seu próprio perfil
    match /usuarios/{userId} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId;
    }
    
    // Regra 3: Validação de dados
    match /notas/{notaId} {
      allow create: if request.auth != null
                    && request.resource.data.valor >= 0
                    && request.resource.data.valor <= 10
                    && request.resource.data.keys().hasAll(['valor', 'disciplina', 'data']);
    }
    
    // Regra 4: Apenas professores podem criar turmas
    match /turmas/{turmaId} {
      allow read: if request.auth != null;
      allow write: if get(/databases/$(database)/documents/usuarios/$(request.auth.uid)).data.role == "professor";
    }
  }
}
```

---

### Tópico 5: Cloud Functions e Firebase Storage

#### Cloud Functions — Triggers de Firestore

```javascript
// functions/index.js
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Trigger: quando um novo aluno é criado
exports.onNovoAluno = functions.firestore
    .document("alunos/{alunoId}")
    .onCreate((snapshot, context) => {
        const novoAluno = snapshot.data();
        console.log("Novo aluno cadastrado:", novoAluno.nome);
        
        // Atualizar contador da turma
        const turmaRef = admin.firestore()
            .collection("turmas")
            .doc(novoAluno.turma);
        
        return turmaRef.update({
            totalAlunos: admin.firestore.FieldValue.increment(1)
        });
    });

// Trigger: quando uma nota é atualizada
exports.onNotaAtualizada = functions.firestore
    .document("alunos/{alunoId}/notas/{notaId}")
    .onUpdate((change, context) => {
        const antes = change.before.data();
        const depois = change.after.data();
        
        console.log(`Nota alterada: ${antes.valor} → ${depois.valor}`);
        
        // Enviar notificação se nota < 5
        if (depois.valor < 5) {
            // Lógica de notificação
        }
        return null;
    });

// HTTP Trigger: API endpoint
exports.listarEstatisticas = functions.https
    .onRequest(async (req, res) => {
        const snapshot = await admin.firestore()
            .collection("alunos")
            .get();
        
        const totalAlunos = snapshot.size;
        res.json({ 
            total: totalAlunos,
            timestamp: new Date().toISOString()
        });
    });
```

#### Firebase Storage — Upload de Arquivos

```kotlin
val storage = Firebase.storage
val storageRef = storage.reference

// Upload de imagem de perfil
fun uploadImagemPerfil(userId: String, imageUri: Uri) {
    val perfilRef = storageRef.child("perfil/$userId/foto.jpg")
    
    perfilRef.putFile(imageUri)
        .addOnProgressListener { taskSnapshot ->
            val progresso = (100.0 * taskSnapshot.bytesTransferred 
                           / taskSnapshot.totalByteCount)
            Log.d("Storage", "Upload: $progresso%")
        }
        .addOnSuccessListener {
            // Obter URL de download
            perfilRef.downloadUrl.addOnSuccessListener { uri ->
                Log.d("Storage", "URL da imagem: $uri")
                // Salvar URL no Firestore
                db.collection("usuarios").document(userId)
                    .update("fotoUrl", uri.toString())
            }
        }
        .addOnFailureListener { e ->
            Log.e("Storage", "Erro no upload: ${e.message}")
        }
}

// Download de arquivo
fun downloadArquivo(caminho: String) {
    val arquivoRef = storageRef.child(caminho)
    val localFile = File.createTempFile("temp", ".jpg")
    
    arquivoRef.getFile(localFile)
        .addOnSuccessListener {
            Log.d("Storage", "Download concluído: ${localFile.absolutePath}")
        }
}

// Deletar arquivo
fun deletarArquivo(caminho: String) {
    storageRef.child(caminho).delete()
        .addOnSuccessListener { Log.d("Storage", "Arquivo deletado") }
}
```

---

### Tópico 6: Backup, Recuperação e Boas Práticas

#### Estratégias de Backup em Cloud

```
┌─────────────────────────────────────────────────────┐
│           BACKUP EM CLOUD — FIREBASE                │
├─────────────────────────────────────────────────────┤
│                                                     │
│  1. EXPORTAÇÃO PROGRAMADA (Firestore)               │
│     • gcloud firestore export gs://bucket/backup    │
│     • Agendar com Cloud Scheduler                   │
│     • Exporta para Cloud Storage (GCS)              │
│                                                     │
│  2. REALTIME DATABASE                               │
│     • Backups automáticos diários (plano Blaze)     │
│     • Export manual via Console ou REST API         │
│     • Formato JSON                                  │
│                                                     │
│  3. REGRA 3-2-1 NA NUVEM                           │
│     • 3 cópias dos dados                           │
│     • 2 tipos de storage (Firestore + GCS)         │
│     • 1 cópia em região diferente                  │
│                                                     │
│  4. RECUPERAÇÃO                                     │
│     • Point-in-time recovery (PITR) — 7 dias       │
│     • Import de backup: gcloud firestore import    │
│     • Testar restauração regularmente!             │
│                                                     │
└─────────────────────────────────────────────────────┘
```

#### Boas Práticas — Administração Firebase

```
✅ FAZER:
  • Usar regras de segurança desde o primeiro dia
  • Criar índices compostos para queries complexas
  • Monitorar uso no Firebase Console (leituras/escritas)
  • Usar Firebase Emulator para testes locais
  • Estruturar dados pensando nas queries (não em tabelas)
  • Configurar alertas de orçamento
  • Usar variáveis de ambiente para chaves sensíveis

❌ NÃO FAZER:
  • Deixar regras como "allow read, write: if true" em produção
  • Armazenar dados sensíveis (CPF, senhas) sem criptografia
  • Fazer queries sem índice (causa erro/lentidão)
  • Ignorar limites de leitura/escrita (pode gerar custos)
  • Usar Realtime Database para dados relacionais complexos
  • Colocar google-services.json em repositórios públicos
```

---

## 💻 Exercícios

### Exercício 1: Comparativo Cloud (Semana 2)

**Objetivo:** Analisar custos e benefícios de migrar um sistema para a nuvem.

**Cenário:** Uma escola com 500 alunos possui um sistema de matrícula rodando em um servidor local. O servidor custou R$ 15.000, gasta R$ 500/mês de energia e precisa de 1 técnico (R$ 3.000/mês).

**Tarefas:**
1. Calcule o TCO (Total Cost of Ownership) on-premise para 3 anos
2. Pesquise o custo equivalente no Firebase (plano Spark vs Blaze)
3. Liste 5 vantagens e 3 desvantagens da migração
4. Recomende: migrar ou não? Justifique com números

**Entrega:** Documento com tabela comparativa + recomendação fundamentada

---

### Exercício 2: Modelagem NoSQL (Semana 7)

**Objetivo:** Converter um modelo relacional para NoSQL/Firestore.

**Modelo Relacional dado:**
```sql
-- Tabelas originais (SQL)
CREATE TABLE professor (id, nome, email, departamento);
CREATE TABLE disciplina (id, nome, carga_horaria, professor_id);
CREATE TABLE aluno (id, nome, matricula, turma);
CREATE TABLE matricula_disciplina (aluno_id, disciplina_id, nota, frequencia);
```

**Tarefas:**
1. Desenhe a estrutura de coleções/documentos no Firestore
2. Justifique decisões de denormalização
3. Identifique quais queries serão mais rápidas e quais mais lentas
4. Implemente no Firebase Console com dados de exemplo (mínimo 5 alunos, 3 disciplinas)

**Entrega:** Screenshot da estrutura no Console + documento de justificativa

---

### Exercício 3: Security Rules (Semana 10)

**Objetivo:** Escrever regras de segurança para um sistema escolar.

**Requisitos:**
- Alunos podem ler apenas seus próprios dados
- Professores podem ler dados de todos os alunos de suas turmas
- Professores podem inserir/editar notas, mas não deletar
- Coordenadores têm acesso total
- Ninguém pode inserir nota > 10 ou < 0
- Documentos de aluno devem ter: nome, matricula, turma (obrigatórios)

**Entrega:** Arquivo `firestore.rules` completo + testes no Emulator

---

### Exercício 4: CRUD Android + Firebase (Semana 14)

**Objetivo:** Criar um app Android que realize CRUD completo com Firestore.

**App: "Controle de Tarefas da Turma"**
- Tela de login (Firebase Auth — email/senha)
- Tela de lista de tarefas (RecyclerView + Firestore listener)
- Tela de criar/editar tarefa (título, descrição, prazo, status)
- Funcionalidade de marcar como concluída
- Filtro: minhas tarefas vs todas da turma

**Entrega:** Código-fonte (link GitHub) + APK + vídeo de demonstração (2min)

---

### Exercício 5: Cloud Functions (Semana 16)

**Objetivo:** Criar funções serverless que automatizem processos.

**Implementar:**
1. Trigger `onCreate` em "tarefas": ao criar tarefa, incrementar contador da turma
2. Trigger `onUpdate` em "tarefas": ao marcar como concluída, registrar data de conclusão
3. HTTP Function: endpoint que retorna estatísticas (total tarefas, concluídas, pendentes)
4. Scheduled Function: todo dia às 8h, marcar tarefas vencidas como "atrasada"

**Entrega:** Código das functions + screenshot do deploy + teste via Postman

---

## 🚀 Projetos

### Projeto Prático 1 — App CRUD com Firestore (Semana 8)

**Tema:** Sistema de Biblioteca Digital da Escola

**Requisitos Mínimos:**
- [ ] Autenticação com email/senha
- [ ] CRUD completo de livros (título, autor, gênero, disponível)
- [ ] Busca por título ou autor
- [ ] Marcar livro como emprestado/devolvido
- [ ] Interface com RecyclerView
- [ ] Dados persistidos no Firestore

**Critérios de Avaliação:**

| Critério | Peso |
|----------|------|
| Funcionalidade CRUD completa | 30% |
| Modelagem dos dados no Firestore | 20% |
| Interface funcional e organizada | 20% |
| Código limpo e comentado | 15% |
| Tratamento de erros | 15% |

---

### Projeto Prático 2 — App com Cloud Functions (Semana 16)

**Tema:** Sistema de Enquetes da Turma

**Requisitos Mínimos:**
- [ ] Login com Google Sign-In
- [ ] Criar enquetes (pergunta + opções)
- [ ] Votar em enquetes (1 voto por pessoa)
- [ ] Ver resultados em tempo real
- [ ] Cloud Function: calcular porcentagens ao votar
- [ ] Cloud Function: fechar enquete automaticamente após prazo
- [ ] Firebase Storage: imagem opcional na enquete

**Critérios de Avaliação:**

| Critério | Peso |
|----------|------|
| Cloud Functions funcionando | 25% |
| Lógica de votação (sem duplicatas) | 20% |
| Tempo real (listeners) | 20% |
| Security Rules adequadas | 20% |
| UX e interface | 15% |

---

### Projeto Final — Migração para Cloud (Semanas 17-20)

**Objetivo:** Migrar um banco de dados relacional existente para Firebase e criar app Android integrado.

**Etapas:**
1. **Análise** (Sem 17): Receber esquema SQL → Documentar decisões de migração
2. **Modelagem** (Sem 17): Projetar estrutura NoSQL no Firestore
3. **Backend** (Sem 18): Configurar Auth, Firestore, Security Rules, Storage
4. **Frontend** (Sem 19): App Android completo com todas as telas
5. **Operações** (Sem 19-20): Backup configurado, monitoramento, documentação

**Banco SQL fornecido (exemplo):**
```sql
-- Sistema de Cantina Escolar
CREATE TABLE produto (id, nome, preco, categoria, estoque);
CREATE TABLE cliente (id, nome, saldo, turma);
CREATE TABLE venda (id, cliente_id, data, total);
CREATE TABLE item_venda (venda_id, produto_id, quantidade, subtotal);
```

**Entregáveis:**
- [ ] Documento de migração (decisões e justificativas)
- [ ] Projeto Firebase configurado com regras de segurança
- [ ] App Android funcional (código + APK)
- [ ] Cloud Function (mínimo 1 trigger + 1 HTTP)
- [ ] Backup configurado + demonstração de restauração
- [ ] Apresentação (10 min: problema → solução → demo)

**Rubrica Final:**

| Critério | Peso | Descrição |
|----------|------|-----------|
| Migração e modelagem | 20% | Decisões justificadas, dados corretos |
| App funcional | 25% | CRUD completo, UX adequada |
| Cloud Functions | 15% | Automações funcionando |
| Security Rules | 15% | Regras coerentes e testadas |
| Documentação | 10% | README, comentários, decisões |
| Apresentação | 15% | Clareza, demo ao vivo, respostas |

---

## 📝 Simulado

### Simulado — Administração de BD Cloud (20 questões)

**1.** Qual modelo de serviço cloud é mais adequado para um banco de dados gerenciado como Firebase?
- a) IaaS
- b) PaaS
- c) SaaS
- d) DBaaS ✅

**2.** Qual é a principal vantagem do modelo pay-as-you-go na cloud?
- a) Maior segurança
- b) Elimina custo inicial alto de infraestrutura ✅
- c) Menor latência
- d) Código mais rápido

**3.** No Firebase, qual é a diferença fundamental entre Realtime Database e Firestore?
- a) Realtime DB é SQL, Firestore é NoSQL
- b) Realtime DB é JSON puro, Firestore usa coleções/documentos com queries mais avançadas ✅
- c) Firestore é gratuito, Realtime DB é pago
- d) Não há diferença significativa

**4.** Em uma Security Rule do Firestore, `request.auth.uid` representa:
- a) O email do usuário
- b) O ID único do usuário autenticado ✅
- c) O token de acesso
- d) A senha criptografada

**5.** Qual comando Firebase CLI deploya Cloud Functions?
- a) `firebase deploy --only hosting`
- b) `firebase deploy --only functions` ✅
- c) `firebase push functions`
- d) `gcloud functions deploy`

**6.** Na modelagem NoSQL para Firestore, denormalização significa:
- a) Remover dados duplicados
- b) Criar foreign keys entre coleções
- c) Duplicar dados em diferentes documentos para otimizar leituras ✅
- d) Normalizar até a 3ª forma normal

**7.** Qual método do Firebase Auth cria uma conta com email e senha?
- a) `auth.signInWithEmailAndPassword()`
- b) `auth.createUserWithEmailAndPassword()` ✅
- c) `auth.registerUser()`
- d) `auth.newAccount()`

**8.** Uma Cloud Function do tipo `onCreate` no Firestore é acionada quando:
- a) O app é iniciado
- b) Um documento é atualizado
- c) Um novo documento é criado na coleção monitorada ✅
- d) O usuário faz login

**9.** A regra de backup 3-2-1 significa:
- a) 3 backups por dia, 2 semanas, 1 mês de retenção
- b) 3 cópias, 2 mídias diferentes, 1 cópia offsite ✅
- c) 3 servidores, 2 regiões, 1 provedor
- d) 3 GB máximo, 2 compressões, 1 criptografia

**10.** O que é IAM (Identity and Access Management)?
- a) Um banco de dados de identidades
- b) Sistema para gerenciar quem tem acesso a quais recursos e com quais permissões ✅
- c) Um tipo de criptografia
- d) Protocolo de autenticação biométrica

**11.** Para ouvir mudanças em tempo real no Firestore, usamos:
- a) `get()`
- b) `addSnapshotListener()` ✅
- c) `observe()`
- d) `subscribe()`

**12.** Firebase Storage é mais adequado para armazenar:
- a) Dados estruturados (tabelas)
- b) Arquivos binários como imagens, vídeos e PDFs ✅
- c) Código-fonte
- d) Queries SQL

**13.** Qual plano Firebase permite usar Cloud Functions?
- a) Spark (gratuito)
- b) Blaze (pay-as-you-go) ✅
- c) Ambos
- d) Nenhum, requer GCP separado

**14.** No Firestore, uma subcoleção é:
- a) Uma coleção dentro de outra coleção
- b) Uma coleção dentro de um documento ✅
- c) Um documento com array
- d) Um backup da coleção principal

**15.** Qual é o limite gratuito de leituras diárias do Firestore (plano Spark)?
- a) 10.000
- b) 50.000 ✅
- c) 100.000
- d) Ilimitado

**16-20:** *(Questões práticas — interpretar código e security rules)*

**16.** Dada a regra: `allow write: if request.auth.uid == userId;` — O que ela permite?
- a) Qualquer usuário logado pode escrever
- b) Apenas o próprio usuário pode escrever em seu documento ✅
- c) Apenas administradores podem escrever
- d) Ninguém pode escrever

**17.** Qual é o problema desta estrutura no Realtime Database?
```json
{ "escola": { "todos_os_dados": { /* 50MB de dados */ } } }
```
- a) Nenhum problema
- b) Ao ler qualquer dado, todo o nó de 50MB é carregado ✅
- c) JSON não suporta 50MB
- d) Firebase limita a 1MB

**18.** O que acontece se Security Rules estiverem como `allow read, write: if true;`?
- a) Apenas usuários autenticados acessam
- b) Qualquer pessoa na internet pode ler e modificar todos os dados ✅
- c) O banco fica em modo de teste seguro
- d) É a configuração recomendada

**19.** Para evitar que dois usuários editem o mesmo documento simultaneamente, usamos:
- a) Security Rules
- b) Transações do Firestore ✅
- c) Cloud Functions
- d) Cache offline

**20.** Qual é a vantagem de usar Firebase Emulator Suite durante o desenvolvimento?
- a) Reduz custos evitando leituras/escritas no banco real ✅
- b) Aumenta a velocidade do app
- c) É obrigatório para deploy
- d) Substitui o Firebase Console

---

## 📋 Avaliação (Prova)

### Estrutura da Avaliação Final

| Componente | Peso | Formato |
|-----------|------|---------|
| Avaliação Parcial 1 (Sem 4) | 15% | Prova teórica — Cloud Computing |
| Projeto Prático 1 (Sem 8) | 20% | App CRUD Firestore |
| Avaliação Parcial 2 (Sem 12) | 15% | Prova prática — Auth + Rules |
| Projeto Prático 2 (Sem 16) | 20% | App com Cloud Functions |
| Projeto Final (Sem 17-20) | 30% | Migração + App + Apresentação |

### Prova Final — Tópicos Cobrados

1. **Teoria Cloud** (20%): Modelos de serviço, comparativo on-premise vs cloud, TCO
2. **Firebase** (30%): Firestore vs Realtime DB, modelagem NoSQL, queries
3. **Segurança** (20%): Authentication, Security Rules, IAM
4. **Cloud Functions** (15%): Triggers, HTTP functions, casos de uso
5. **Operações** (15%): Backup, monitoramento, boas práticas, custos

### Critérios de Aprovação
- Média final ≥ 6,0
- Frequência mínima: 75% (60 de 80 aulas)
- Todos os projetos entregues (mesmo com nota baixa)

---

## 📚 Referências

### Documentação Oficial
- [Firebase Documentation](https://firebase.google.com/docs) — Documentação completa oficial
- [Firebase Firestore Guide](https://firebase.google.com/docs/firestore) — Guia do Firestore
- [Firebase Auth Guide](https://firebase.google.com/docs/auth) — Guia de Authentication
- [Cloud Functions Guide](https://firebase.google.com/docs/functions) — Guia Cloud Functions
- [Firebase Security Rules](https://firebase.google.com/docs/rules) — Regras de segurança

### Cursos e Tutoriais
- [Google Codelabs — Firebase](https://codelabs.developers.google.com/?cat=Firebase) — Labs práticos oficiais
- [Fireship — Firebase YouTube](https://www.youtube.com/c/Fireship) — Vídeos curtos e práticos
- [Alura — Firebase](https://www.alura.com.br/cursos-online-mobile/firebase) — Cursos em português
- [Firebase in a Weekend (Udacity)](https://www.udacity.com/course/firebase-in-a-weekend-by-google-android--ud0352) — Curso gratuito

### Cloud Computing — Free Tier
- [Google Cloud Free Tier](https://cloud.google.com/free) — US$ 300 em créditos + Always Free
- [AWS Free Tier](https://aws.amazon.com/free/) — 12 meses gratuitos
- [Azure for Students](https://azure.microsoft.com/free/students/) — US$ 100 para estudantes
- [Firebase Pricing](https://firebase.google.com/pricing) — Detalhes do plano Spark vs Blaze

### Livros e Artigos
- ELMASRI, R. & NAVATHE, S. *Sistemas de Banco de Dados*. 7ª ed. Pearson, 2019.
- GOOGLE CLOUD. *Cloud Architecture Framework*. Disponível em cloud.google.com/architecture
- FOWLER, M. *NoSQL Distilled*. Addison-Wesley, 2012.

### Comunidade e Prática
- [Firebase Community](https://firebase.google.com/community) — Fórum oficial
- [Stack Overflow — Firebase](https://stackoverflow.com/questions/tagged/firebase) — Dúvidas técnicas
- [GitHub — Firebase Samples](https://github.com/firebase/snippets-android) — Exemplos oficiais Android
- [Firebase YouTube Channel](https://www.youtube.com/firebase) — Canal oficial

---

<p align="center">
  <i>Profª Luana Cristina — ETE Pernambuco — Módulo 3 — 2026.2</i><br>
  <i>"A nuvem não é apenas sobre tecnologia, é sobre transformar a forma como pensamos dados."</i>
</p>
