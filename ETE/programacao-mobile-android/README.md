<p align="center">
  <img src="https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white" />
  <img src="https://img.shields.io/badge/Kotlin-7F52FF?style=for-the-badge&logo=kotlin&logoColor=white" />
  <img src="https://img.shields.io/badge/Android_Studio-3DDC84?style=for-the-badge&logo=android-studio&logoColor=white" />
  <img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" />
  <img src="https://img.shields.io/badge/Carga_Horária-160h-blue?style=for-the-badge" />
  <img src="https://img.shields.io/badge/Módulo-3_(Semestre_3)-purple?style=for-the-badge" />
</p>

<h1 align="center">📱 Programação em Novas Tecnologias - Mobile</h1>

<p align="center">
  <strong>Curso Técnico em Desenvolvimento de Sistemas</strong><br>
  ETE Pernambuco | Profª Luana Cristina<br>
  160 horas | 8 aulas/semana | 20 semanas | Módulo 3 / Semestre 3
</p>

---

## 📋 Sumário

- [Sobre a Disciplina](#-sobre-a-disciplina)
- [Ementa](#-ementa)
- [Instalação do Android Studio](#-instalação-do-android-studio)
- [Cronograma Completo](#-cronograma-completo)
- [Material Teórico](#-material-teórico)
- [Exercícios Práticos](#-exercícios-práticos)
- [Projeto Intermediário](#-projeto-intermediário)
- [Projeto Final](#-projeto-final)
- [Simulado e Prova](#-simulado-e-prova)
- [Referências](#-referências)

---

## 🎯 Sobre a Disciplina

Esta disciplina capacita o estudante a desenvolver aplicações móveis nativas para Android
utilizando **Kotlin** e **Android Studio**. O aluno aprenderá desde a arquitetura do sistema
Android até a publicação de um aplicativo completo com persistência de dados e integração
com serviços em nuvem (Firebase).

### Competências Desenvolvidas

- Compreender a arquitetura do sistema operacional Android
- Configurar e utilizar o ambiente de desenvolvimento Android Studio
- Desenvolver interfaces de usuário com XML e Material Design
- Implementar lógica de negócio com Kotlin
- Gerenciar o ciclo de vida de Activities e navegação entre telas
- Persistir dados localmente (SharedPreferences, SQLite/Room)
- Integrar aplicações com Firebase (Realtime Database, Authentication)
- Compilar e executar aplicações em dispositivos reais e emulados

---

## 📚 Ementa

| Tópico | Descrição |
|--------|-----------|
| Arquitetura Android | Linux Kernel, Android Runtime (ART), Framework de Aplicação |
| Android Studio | Instalação, interface, emulador AVD, Gradle |
| Estrutura do Projeto | AndroidManifest.xml, MainActivity, layouts XML, pasta res/ |
| Ciclo de Vida | onCreate, onStart, onResume, onPause, onStop, onDestroy |
| UI com XML | LinearLayout, ConstraintLayout, TextView, EditText, Button, ImageView, RecyclerView |
| Intents | Explícitas (navegação entre Activities) e Implícitas (compartilhar, abrir URL) |
| Persistência | SharedPreferences, SQLite, Room Database |
| Firebase | Configuração, Realtime Database, Authentication |
| Compilação | Build com Gradle, execução em dispositivo real via USB/Wi-Fi |

---

## 🛠️ Instalação do Android Studio

### Requisitos Mínimos do Sistema

| Componente | Windows | macOS |
|-----------|---------|-------|
| RAM | 8 GB (16 GB recomendado) | 8 GB (16 GB recomendado) |
| Disco | 8 GB livres (SSD recomendado) | 8 GB livres (SSD recomendado) |
| SO | Windows 10/11 (64-bit) | macOS 10.14+ |
| Resolução | 1280 x 800 mínimo | 1280 x 800 mínimo |

### 📥 Instalação no Windows

1. **Download**: Acesse [developer.android.com/studio](https://developer.android.com/studio)
2. **Execute** o instalador `.exe`
3. **Marque** as opções:
   - ✅ Android Studio
   - ✅ Android Virtual Device (AVD)
4. **Siga** o wizard de instalação (Next → Next → Install)
5. **Primeiro lançamento**: O Android Studio baixará automaticamente:
   - Android SDK
   - Android SDK Platform-Tools
   - Android Emulator
   - SDK Build-Tools
6. **Configure o SDK**: File → Settings → Languages & Frameworks → Android SDK
   - Instale: Android 13 (API 33) ou superior

### 🍎 Instalação no macOS

1. **Download**: Acesse [developer.android.com/studio](https://developer.android.com/studio)
2. **Abra** o arquivo `.dmg`
3. **Arraste** o Android Studio para a pasta Applications
4. **Execute** pela primeira vez e aceite o download do SDK
5. **Dica para Apple Silicon (M1/M2/M3)**:
   - Baixe a versão `Apple Silicon` específica
   - O emulador ARM roda nativamente (muito mais rápido)

### 📱 Configuração do Emulador AVD

1. Abra o **Device Manager** (ícone de celular na barra de ferramentas)
2. Clique em **Create Virtual Device**
3. Selecione um modelo: **Pixel 6** (recomendado para aulas)
4. Escolha a imagem do sistema: **API 33 (Android 13)** com Google APIs
5. Configure:
   - RAM: 2048 MB
   - Internal Storage: 2048 MB
   - SD Card: 512 MB
6. Clique em **Finish**
7. ▶️ Clique no botão Play para iniciar o emulador

### 🔌 Execução em Dispositivo Real

1. No celular: **Configurações** → **Sobre o telefone** → toque 7x no "Número da versão"
2. Ative: **Configurações** → **Opções de desenvolvedor** → **Depuração USB**
3. Conecte o celular via USB e aceite a permissão de depuração
4. No Android Studio, selecione seu dispositivo na barra de execução
5. Clique em ▶️ **Run**

> 💡 **Dica**: Para conexão via Wi-Fi (Android 11+):
> Settings → Developer Options → Wireless Debugging → Pair device

---

## 📅 Cronograma Completo

> 📌 **Distribuição**: 8 aulas/semana (4 encontros de 2h ou 2 encontros de 4h)
> 📌 **Total**: 20 semanas = 160 horas

### 🟢 Bloco 1 — Setup + Fundamentos (Semanas 1–4 | 32h)

| Semana | Aulas | Conteúdo | Atividade Prática |
|--------|-------|----------|-------------------|
| 1 | 1–8 | Introdução ao Android: história, arquitetura (Linux Kernel, HAL, ART, Framework), versões | Pesquisa: diferenças entre versões do Android |
| 2 | 9–16 | Android Studio: instalação, interface (Project, Editor, Logcat, Emulator), criação do primeiro projeto | "Hello World" — executar no emulador |
| 3 | 17–24 | Estrutura do projeto: AndroidManifest.xml, pasta java/, pasta res/ (layout, values, drawable), Gradle | Explorar e modificar strings.xml e colors.xml |
| 4 | 25–32 | Ciclo de vida da Activity: estados e callbacks, Log.d para depuração | App que exibe Toast em cada callback do ciclo de vida |

### 🔵 Bloco 2 — Interface de Usuário (Semanas 5–8 | 32h)

| Semana | Aulas | Conteúdo | Atividade Prática |
|--------|-------|----------|-------------------|
| 5 | 33–40 | XML Layouts: LinearLayout (horizontal/vertical), atributos (match_parent, wrap_content, weight) | Criar tela de perfil com foto, nome e descrição |
| 6 | 41–48 | ConstraintLayout: constraints, guidelines, chains, bias | Recriar a tela de login do Instagram |
| 7 | 49–56 | Widgets avançados: ImageView, CardView, ScrollView, Material Design Components | Criar tela de catálogo de produtos |
| 8 | 57–64 | RecyclerView: Adapter, ViewHolder, LayoutManager, clique em itens | Lista de contatos com foto e informações |

### 🟡 Bloco 3 — Lógica e Dados (Semanas 9–12 | 32h)

| Semana | Aulas | Conteúdo | Atividade Prática |
|--------|-------|----------|-------------------|
| 9 | 65–72 | Kotlin essencial: variáveis, funções, null safety, lambdas, collections | Exercícios de lógica em Kotlin |
| 10 | 73–80 | Eventos e interação: OnClickListener, manipulação de dados em tela, validação de campos | **PROJETO INTERMEDIÁRIO**: App de lista de tarefas |
| 11 | 81–88 | SharedPreferences: salvar/carregar configurações e dados simples | App de configurações com tema claro/escuro |
| 12 | 89–96 | SQLite e Room: criação de banco, Entity, DAO, Database, queries | CRUD de contatos com Room Database |

### 🟠 Bloco 4 — Funcionalidades Avançadas (Semanas 13–16 | 32h)

| Semana | Aulas | Conteúdo | Atividade Prática |
|--------|-------|----------|-------------------|
| 13 | 97–104 | Intents: explícitas (navegar entre Activities), implícitas (compartilhar, abrir browser), passar dados entre telas | App com 3+ telas e navegação completa |
| 14 | 105–112 | Firebase: configuração do projeto, Authentication (email/senha), Realtime Database | App de login com Firebase Auth |
| 15 | 113–120 | Firebase CRUD: Create, Read, Update, Delete no Realtime Database, listeners em tempo real | App de chat simples em tempo real |
| 16 | 121–128 | Material Design: Toolbar, NavigationDrawer, BottomNavigation, Snackbar, FAB, Temas | Aplicar Material Design completo em app existente |

### 🔴 Bloco 5 — Projeto Final (Semanas 17–20 | 32h)

| Semana | Aulas | Conteúdo | Atividade Prática |
|--------|-------|----------|-------------------|
| 17 | 129–136 | Planejamento do projeto: definição do app, wireframes, modelagem do banco Firebase | Documento de projeto + wireframes |
| 18 | 137–144 | Desenvolvimento: implementação das telas, navegação, CRUD completo | Coding sprint — funcionalidades principais |
| 19 | 145–152 | Refinamento: Material Design, validações, tratamento de erros, testes em dispositivo real | Polimento visual e funcional |
| 20 | 153–160 | **APRESENTAÇÃO DO PROJETO FINAL** + Simulado + Prova teórica | Apresentação + avaliação escrita |

---

## 📖 Material Teórico

### 1. Estrutura do Projeto Android

Quando criamos um projeto no Android Studio, a seguinte estrutura é gerada:

```
MeuApp/
├── app/
│   ├── build.gradle.kts          ← Dependências e configurações do módulo
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/exemplo/meuapp/
│   │   │   │   └── MainActivity.kt    ← Código principal
│   │   │   ├── res/
│   │   │   │   ├── layout/
│   │   │   │   │   └── activity_main.xml  ← Interface da tela
│   │   │   │   ├── values/
│   │   │   │   │   ├── strings.xml     ← Textos do app
│   │   │   │   │   ├── colors.xml      ← Paleta de cores
│   │   │   │   │   └── themes.xml      ← Tema do app
│   │   │   │   ├── drawable/           ← Imagens e ícones
│   │   │   │   └── mipmap/            ← Ícone do app
│   │   │   └── AndroidManifest.xml     ← Configurações do app
│   │   └── test/                       ← Testes unitários
├── build.gradle.kts              ← Configurações globais
├── settings.gradle.kts           ← Módulos do projeto
└── gradle.properties             ← Propriedades do Gradle
```

#### AndroidManifest.xml — O "RG" do App

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.exemplo.meuapp">

    <!-- Permissões -->
    <uses-permission android:name="android.permission.INTERNET" />

    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:theme="@style/Theme.MeuApp">

        <!-- Activity principal (tela de entrada) -->
        <activity
            android:name=".MainActivity"
            android:exported="true">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
    </application>
</manifest>
```

---

### 2. Ciclo de Vida da Activity

A Activity é o componente principal de uma tela no Android. Ela possui um ciclo de vida
gerenciado pelo sistema operacional:

```
                    ┌─────────────────────────────────┐
                    │         ACTIVITY CRIADA          │
                    └──────────────┬──────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────────┐
                    │          onCreate()               │  ← Inicialização
                    └──────────────┬───────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────────┐
                    │          onStart()                │  ← Visível
                    └──────────────┬───────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────────┐
                    │          onResume()               │  ← Interativa (em foco)
                    └──────────────┬───────────────────┘
                                   │
                          ┌────────┴────────┐
                          │  ACTIVITY ATIVA  │
                          └────────┬────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────────┐
                    │          onPause()                │  ← Parcialmente oculta
                    └──────────────┬───────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────────┐
                    │          onStop()                 │  ← Não visível
                    └──────────────┬───────────────────┘
                                   │
                                   ▼
                    ┌──────────────────────────────────┐
                    │          onDestroy()              │  ← Destruída
                    └──────────────────────────────────┘
```

#### Código Kotlin — Observando o Ciclo de Vida

```kotlin
package com.exemplo.ciclovida

import android.os.Bundle
import android.util.Log
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    private val TAG = "CicloDeVida"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)
        Log.d(TAG, "onCreate - Activity criada")
        Toast.makeText(this, "onCreate", Toast.LENGTH_SHORT).show()
    }

    override fun onStart() {
        super.onStart()
        Log.d(TAG, "onStart - Activity visível")
    }

    override fun onResume() {
        super.onResume()
        Log.d(TAG, "onResume - Activity em foco")
    }

    override fun onPause() {
        super.onPause()
        Log.d(TAG, "onPause - Activity parcialmente oculta")
    }

    override fun onStop() {
        super.onStop()
        Log.d(TAG, "onStop - Activity não visível")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "onDestroy - Activity destruída")
    }
}
```

---

### 3. XML Layouts — LinearLayout vs ConstraintLayout

#### LinearLayout — Disposição em Linha

Organiza elementos em uma **única direção** (horizontal ou vertical):

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    android:gravity="center_horizontal">

    <ImageView
        android:layout_width="120dp"
        android:layout_height="120dp"
        android:src="@drawable/ic_person"
        android:contentDescription="Foto do perfil" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Maria Silva"
        android:textSize="24sp"
        android:textStyle="bold"
        android:layout_marginTop="16dp" />

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Desenvolvedora Android"
        android:textSize="16sp"
        android:textColor="@color/gray" />

    <Button
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Editar Perfil"
        android:layout_marginTop="24dp" />

</LinearLayout>
```

#### ConstraintLayout — Layout Flexível com Constraints

Posiciona elementos com **relações entre si** (mais performático para telas complexas):

```xml
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="16dp">

    <EditText
        android:id="@+id/etEmail"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:hint="E-mail"
        android:inputType="textEmailAddress"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="100dp" />

    <EditText
        android:id="@+id/etSenha"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:hint="Senha"
        android:inputType="textPassword"
        app:layout_constraintTop_toBottomOf="@id/etEmail"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="16dp" />

    <Button
        android:id="@+id/btnEntrar"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:text="Entrar"
        app:layout_constraintTop_toBottomOf="@id/etSenha"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="24dp" />

</androidx.constraintlayout.widget.ConstraintLayout>
```

#### Comparação

| Característica | LinearLayout | ConstraintLayout |
|---------------|-------------|-----------------|
| Complexidade | Simples | Moderada |
| Performance | Boa (layouts simples) | Ótima (layouts complexos) |
| Aninhamento | Frequente (layouts dentro de layouts) | Mínimo (flat hierarchy) |
| Uso ideal | Formulários simples, listas | Telas complexas, responsivas |
| Editor visual | Limitado | Excelente (drag & drop) |

---

### 4. RecyclerView — Implementação Passo a Passo

O RecyclerView é o componente para exibir **listas longas** de forma eficiente.

#### Passo 1: Adicionar dependência (build.gradle.kts)

```kotlin
dependencies {
    implementation("androidx.recyclerview:recyclerview:1.3.2")
    implementation("com.google.android.material:material:1.11.0")
}
```

#### Passo 2: Layout do item (item_contato.xml)

```xml
<?xml version="1.0" encoding="utf-8"?>
<com.google.android.material.card.MaterialCardView
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:layout_margin="8dp"
    app:cardElevation="4dp"
    app:cardCornerRadius="12dp">

    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:padding="16dp"
        android:gravity="center_vertical">

        <ImageView
            android:id="@+id/imgContato"
            android:layout_width="48dp"
            android:layout_height="48dp"
            android:src="@drawable/ic_person" />

        <LinearLayout
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:orientation="vertical"
            android:layout_marginStart="16dp">

            <TextView
                android:id="@+id/tvNome"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:textSize="16sp"
                android:textStyle="bold" />

            <TextView
                android:id="@+id/tvTelefone"
                android:layout_width="wrap_content"
                android:layout_height="wrap_content"
                android:textSize="14sp"
                android:textColor="@color/gray" />

        </LinearLayout>
    </LinearLayout>
</com.google.android.material.card.MaterialCardView>
```

#### Passo 3: Modelo de dados

```kotlin
data class Contato(
    val id: Int,
    val nome: String,
    val telefone: String
)
```

#### Passo 4: Adapter + ViewHolder

```kotlin
package com.exemplo.contatos

import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView

class ContatoAdapter(
    private val contatos: List<Contato>,
    private val onItemClick: (Contato) -> Unit
) : RecyclerView.Adapter<ContatoAdapter.ContatoViewHolder>() {

    // ViewHolder: referência aos elementos visuais de cada item
    class ContatoViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val tvNome: TextView = itemView.findViewById(R.id.tvNome)
        val tvTelefone: TextView = itemView.findViewById(R.id.tvTelefone)
    }

    // Infla o layout do item
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): ContatoViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_contato, parent, false)
        return ContatoViewHolder(view)
    }

    // Preenche os dados de cada item
    override fun onBindViewHolder(holder: ContatoViewHolder, position: Int) {
        val contato = contatos[position]
        holder.tvNome.text = contato.nome
        holder.tvTelefone.text = contato.telefone
        holder.itemView.setOnClickListener { onItemClick(contato) }
    }

    // Retorna a quantidade de itens
    override fun getItemCount(): Int = contatos.size
}
```

#### Passo 5: Configurar na Activity

```kotlin
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val recyclerView = findViewById<RecyclerView>(R.id.rvContatos)

        // Dados de exemplo
        val contatos = listOf(
            Contato(1, "Ana Costa", "(81) 99999-1111"),
            Contato(2, "Bruno Lima", "(81) 99999-2222"),
            Contato(3, "Carla Santos", "(81) 99999-3333")
        )

        // Configurar RecyclerView
        recyclerView.layoutManager = LinearLayoutManager(this)
        recyclerView.adapter = ContatoAdapter(contatos) { contato ->
            Toast.makeText(this, "Clicou em: ${contato.nome}", Toast.LENGTH_SHORT).show()
        }
    }
}
```

---

### 5. Firebase Realtime Database — Setup + CRUD

#### Configuração Inicial

1. Acesse [console.firebase.google.com](https://console.firebase.google.com)
2. Crie um novo projeto
3. Adicione um app Android (use o `package name` do seu projeto)
4. Baixe o arquivo `google-services.json` e coloque em `app/`
5. Adicione as dependências:

**build.gradle.kts (projeto - nível raiz):**
```kotlin
plugins {
    id("com.google.gms.google-services") version "4.4.0" apply false
}
```

**build.gradle.kts (módulo app):**
```kotlin
plugins {
    id("com.google.gms.google-services")
}

dependencies {
    implementation(platform("com.google.firebase:firebase-bom:32.7.0"))
    implementation("com.google.firebase:firebase-database-ktx")
    implementation("com.google.firebase:firebase-auth-ktx")
}
```

#### Modelo de Dados

```kotlin
data class Tarefa(
    val id: String = "",
    val titulo: String = "",
    val descricao: String = "",
    val concluida: Boolean = false
)
```

#### CRUD Completo com Firebase

```kotlin
package com.exemplo.firebase

import com.google.firebase.database.DatabaseReference
import com.google.firebase.database.FirebaseDatabase
import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.DatabaseError
import com.google.firebase.database.ValueEventListener

class TarefaRepository {

    private val database: DatabaseReference =
        FirebaseDatabase.getInstance().getReference("tarefas")

    // CREATE — Adicionar nova tarefa
    fun adicionarTarefa(tarefa: Tarefa, callback: (Boolean) -> Unit) {
        val id = database.push().key ?: return
        val novaTarefa = tarefa.copy(id = id)
        database.child(id).setValue(novaTarefa)
            .addOnSuccessListener { callback(true) }
            .addOnFailureListener { callback(false) }
    }

    // READ — Listar todas as tarefas em tempo real
    fun listarTarefas(callback: (List<Tarefa>) -> Unit) {
        database.addValueEventListener(object : ValueEventListener {
            override fun onDataChange(snapshot: DataSnapshot) {
                val tarefas = mutableListOf<Tarefa>()
                for (child in snapshot.children) {
                    child.getValue(Tarefa::class.java)?.let {
                        tarefas.add(it)
                    }
                }
                callback(tarefas)
            }

            override fun onCancelled(error: DatabaseError) {
                callback(emptyList())
            }
        })
    }

    // UPDATE — Atualizar tarefa
    fun atualizarTarefa(tarefa: Tarefa, callback: (Boolean) -> Unit) {
        database.child(tarefa.id).setValue(tarefa)
            .addOnSuccessListener { callback(true) }
            .addOnFailureListener { callback(false) }
    }

    // DELETE — Remover tarefa
    fun removerTarefa(id: String, callback: (Boolean) -> Unit) {
        database.child(id).removeValue()
            .addOnSuccessListener { callback(true) }
            .addOnFailureListener { callback(false) }
    }
}
```

---

### 6. Intents e Navegação

Intents são o mecanismo do Android para **navegar entre telas** e **comunicar-se com outros apps**.

#### Intent Explícita — Navegar entre Activities

```kotlin
// Na Activity de origem (MainActivity.kt)
class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val btnDetalhes = findViewById<Button>(R.id.btnDetalhes)

        btnDetalhes.setOnClickListener {
            // Criar Intent explícita para a DetalhesActivity
            val intent = Intent(this, DetalhesActivity::class.java)

            // Passar dados para a próxima tela
            intent.putExtra("NOME", "Maria Silva")
            intent.putExtra("IDADE", 25)

            startActivity(intent)
        }
    }
}
```

```kotlin
// Na Activity de destino (DetalhesActivity.kt)
class DetalhesActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detalhes)

        // Receber dados da tela anterior
        val nome = intent.getStringExtra("NOME") ?: "Sem nome"
        val idade = intent.getIntExtra("IDADE", 0)

        val tvInfo = findViewById<TextView>(R.id.tvInfo)
        tvInfo.text = "Nome: $nome | Idade: $idade anos"
    }
}
```

#### Intent Implícita — Ações do Sistema

```kotlin
// Abrir uma URL no navegador
fun abrirSite(url: String) {
    val intent = Intent(Intent.ACTION_VIEW, Uri.parse(url))
    startActivity(intent)
}

// Compartilhar texto
fun compartilharTexto(texto: String) {
    val intent = Intent(Intent.ACTION_SEND).apply {
        type = "text/plain"
        putExtra(Intent.EXTRA_TEXT, texto)
    }
    startActivity(Intent.createChooser(intent, "Compartilhar via"))
}

// Fazer uma ligação
fun ligar(telefone: String) {
    val intent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:$telefone"))
    startActivity(intent)
}

// Enviar e-mail
fun enviarEmail(destinatario: String, assunto: String) {
    val intent = Intent(Intent.ACTION_SENDTO).apply {
        data = Uri.parse("mailto:")
        putExtra(Intent.EXTRA_EMAIL, arrayOf(destinatario))
        putExtra(Intent.EXTRA_SUBJECT, assunto)
    }
    startActivity(intent)
}
```

> ⚠️ **Importante**: Lembre-se de registrar todas as Activities no `AndroidManifest.xml`!

---

## 🏋️ Exercícios Práticos

### Exercício 1 — Hello World Customizado (Semana 2)

**Objetivo**: Criar seu primeiro app Android personalizado.

**Requisitos**:
- Tela com seu nome em destaque (TextView grande)
- Uma foto ou ícone representando você (ImageView)
- Seu curso e turma
- Um botão que ao clicar exibe um Toast com uma mensagem de boas-vindas
- Usar LinearLayout vertical

**Critérios de avaliação**:
- [x] App executa sem erros no emulador
- [x] Layout organizado e legível
- [x] Botão funcional com Toast
- [x] Código limpo e comentado

---

### Exercício 2 — Calculadora (Semana 6)

**Objetivo**: Criar uma calculadora funcional com ConstraintLayout.

**Requisitos**:
- Display para mostrar números e resultado
- Botões numéricos (0–9) e operações (+, -, ×, ÷)
- Botão de igual (=) e limpar (C)
- Usar ConstraintLayout para posicionar os botões em grid
- Tratar divisão por zero

**Critérios de avaliação**:
- [x] Todas as 4 operações funcionando
- [x] Interface com aspecto profissional
- [x] ConstraintLayout utilizado corretamente
- [x] Tratamento de erros (divisão por zero)

---

### Exercício 3 — Lista de Tarefas com RecyclerView (Semana 8)

**Objetivo**: Criar um app de lista de tarefas usando RecyclerView.

**Requisitos**:
- Campo de texto para digitar a tarefa
- Botão para adicionar tarefa à lista
- RecyclerView exibindo todas as tarefas
- Opção de marcar tarefa como concluída (riscado)
- Botão para remover tarefa

**Critérios de avaliação**:
- [x] RecyclerView com Adapter implementado corretamente
- [x] Adicionar e remover tarefas funcionando
- [x] Visual feedback ao marcar como concluída
- [x] Lista atualiza dinamicamente

---

### Exercício 4 — App com Múltiplas Telas (Semana 13)

**Objetivo**: Criar um app de cadastro com navegação entre Activities.

**Requisitos**:
- **Tela 1 (Login)**: campos de e-mail e senha + botão Entrar
- **Tela 2 (Cadastro)**: campos nome, e-mail, telefone + botão Salvar
- **Tela 3 (Perfil)**: exibir os dados cadastrados (recebidos via Intent)
- Navegação entre as 3 telas usando Intents explícitas
- Validação de campos obrigatórios

**Critérios de avaliação**:
- [x] 3 Activities funcionando com navegação
- [x] Dados passados corretamente entre telas
- [x] Validação de campos implementada
- [x] Boa experiência de usuário (mensagens de erro claras)

---

### Exercício 5 — CRUD com Firebase (Semana 15)

**Objetivo**: Criar um app de cadastro de produtos com Firebase Realtime Database.

**Requisitos**:
- **Create**: Formulário para cadastrar produto (nome, preço, categoria)
- **Read**: Lista de produtos usando RecyclerView com atualização em tempo real
- **Update**: Editar produto existente ao clicar no item
- **Delete**: Remover produto com confirmação (AlertDialog)
- Firebase configurado e funcional

**Critérios de avaliação**:
- [x] CRUD completo e funcional
- [x] Dados persistidos no Firebase
- [x] Atualização em tempo real na lista
- [x] Tratamento de erros e feedback ao usuário
- [x] Código organizado (Repository pattern)

---

## 🔨 Projeto Intermediário

### App de Lista de Tarefas com SQLite (Semana 10)

**Descrição**: Desenvolver um aplicativo completo de gerenciamento de tarefas
utilizando SQLite/Room para persistência local.

#### Requisitos Funcionais

| # | Funcionalidade | Detalhe |
|---|---------------|---------|
| 1 | Adicionar tarefa | Título, descrição, prioridade (Alta/Média/Baixa) |
| 2 | Listar tarefas | RecyclerView com cards coloridos por prioridade |
| 3 | Editar tarefa | Toque no item abre tela de edição |
| 4 | Excluir tarefa | Swipe para deletar ou botão de exclusão |
| 5 | Marcar como concluída | Checkbox que risca o texto |
| 6 | Filtrar por status | Todas / Pendentes / Concluídas |

#### Requisitos Técnicos

- Room Database com Entity, DAO e Database
- RecyclerView com Adapter personalizado
- Pelo menos 2 Activities (lista + formulário)
- Intents para navegação
- Material Design (CardView, cores, ícones)

#### Estrutura Room

```kotlin
// Entity
@Entity(tableName = "tarefas")
data class Tarefa(
    @PrimaryKey(autoGenerate = true) val id: Int = 0,
    val titulo: String,
    val descricao: String,
    val prioridade: String,  // "Alta", "Média", "Baixa"
    val concluida: Boolean = false,
    val dataCriacao: Long = System.currentTimeMillis()
)

// DAO (Data Access Object)
@Dao
interface TarefaDao {
    @Insert
    suspend fun inserir(tarefa: Tarefa)

    @Update
    suspend fun atualizar(tarefa: Tarefa)

    @Delete
    suspend fun deletar(tarefa: Tarefa)

    @Query("SELECT * FROM tarefas ORDER BY dataCriacao DESC")
    fun listarTodas(): LiveData<List<Tarefa>>

    @Query("SELECT * FROM tarefas WHERE concluida = 0")
    fun listarPendentes(): LiveData<List<Tarefa>>

    @Query("SELECT * FROM tarefas WHERE concluida = 1")
    fun listarConcluidas(): LiveData<List<Tarefa>>
}

// Database
@Database(entities = [Tarefa::class], version = 1)
abstract class TarefaDatabase : RoomDatabase() {
    abstract fun tarefaDao(): TarefaDao

    companion object {
        @Volatile
        private var INSTANCE: TarefaDatabase? = null

        fun getDatabase(context: Context): TarefaDatabase {
            return INSTANCE ?: synchronized(this) {
                val instance = Room.databaseBuilder(
                    context.applicationContext,
                    TarefaDatabase::class.java,
                    "tarefa_database"
                ).build()
                INSTANCE = instance
                instance
            }
        }
    }
}
```

#### Critérios de Avaliação (Nota 0–10)

| Critério | Peso |
|----------|------|
| CRUD completo e funcional | 3.0 |
| Room Database implementado corretamente | 2.0 |
| Interface com Material Design | 2.0 |
| Navegação entre telas | 1.5 |
| Código limpo e organizado | 1.5 |

---

## 🚀 Projeto Final

### App Completo com CRUD + Firebase + Material Design (Semanas 17–20)

**Descrição**: Desenvolver um aplicativo Android completo que demonstre domínio de
todos os conteúdos abordados na disciplina. O app deve resolver um problema real
e ser apresentado como produto finalizado.

#### Temas Sugeridos (escolha 1)

| # | Tema | Descrição |
|---|------|-----------|
| 1 | Gerenciador de Receitas | CRUD de receitas com ingredientes e modo de preparo |
| 2 | Agenda de Estudos | Organizar matérias, horários e lembretes |
| 3 | Catálogo de Filmes/Séries | Cadastro com avaliação e favoritos |
| 4 | Controle Financeiro | Registrar receitas e despesas com categorias |
| 5 | Rede Social Simples | Posts, curtidas e comentários em tempo real |
| 6 | App de Delivery | Cardápio, carrinho e pedidos |
| 7 | Tema livre | Aprovado pela professora previamente |

#### Requisitos Obrigatórios

| # | Requisito | Descrição |
|---|-----------|-----------|
| 1 | Mínimo 4 telas | Ex: Login, Lista, Cadastro/Edição, Detalhes |
| 2 | Firebase Auth | Login com e-mail e senha |
| 3 | Firebase Database | CRUD completo (Create, Read, Update, Delete) |
| 4 | RecyclerView | Lista dinâmica de dados |
| 5 | Material Design | Toolbar, cores consistentes, CardView, ícones |
| 6 | Navegação | Intents explícitas entre Activities |
| 7 | Validação | Campos obrigatórios, formatos válidos |
| 8 | Feedback | Toast, Snackbar ou Dialog para ações do usuário |

#### Requisitos Bônus (até +2 pontos extras)

- Modo escuro (Dark Theme)
- Splash Screen animada
- Busca/filtro na lista
- Upload de imagens (Firebase Storage)
- Logout e persistência de sessão
- Animações de transição entre telas

#### Cronograma de Desenvolvimento

| Semana | Entrega |
|--------|---------|
| 17 | Documento de projeto (tema, wireframes, modelagem do banco) |
| 18 | Telas implementadas + CRUD funcional |
| 19 | Polimento (Material Design, validações, testes em dispositivo) |
| 20 | **Apresentação final** (10 min por equipe/aluno) |

#### Critérios de Avaliação (Nota 0–10)

| Critério | Peso |
|----------|------|
| Funcionalidade (CRUD completo, navegação, Firebase) | 3.0 |
| Interface e UX (Material Design, responsividade) | 2.0 |
| Código (organização, boas práticas, Kotlin idiomático) | 2.0 |
| Apresentação (clareza, demonstração, domínio do conteúdo) | 2.0 |
| Documentação (wireframes, README do projeto) | 1.0 |

#### Formato da Apresentação

- **Duração**: 10 minutos por equipe/individual
- **Estrutura**:
  1. Problema que o app resolve (1 min)
  2. Demonstração ao vivo no emulador ou dispositivo (5 min)
  3. Explicação técnica: arquitetura e decisões (3 min)
  4. Perguntas da professora (1 min)

---

## 📝 Simulado e Prova

### Simulado (Semana 19 — Preparação para a prova)

**Instruções**: Responda todas as questões. O simulado não vale nota, mas serve
como preparação para a prova teórica da Semana 20.

#### Questões de Múltipla Escolha

**1.** Qual componente do Android é responsável por executar o bytecode das aplicações?

a) Linux Kernel
b) Android Runtime (ART)
c) Hardware Abstraction Layer
d) Application Framework

---

**2.** Qual arquivo XML define as permissões e Activities de um app Android?

a) build.gradle.kts
b) strings.xml
c) AndroidManifest.xml
d) activity_main.xml

---

**3.** Em qual callback do ciclo de vida a Activity se torna visível para o usuário?

a) onCreate()
b) onStart()
c) onResume()
d) onPause()

---

**4.** Qual layout é mais indicado para interfaces complexas com hierarquia plana?

a) LinearLayout
b) RelativeLayout
c) FrameLayout
d) ConstraintLayout

---

**5.** No padrão RecyclerView, qual é a função do ViewHolder?

a) Gerenciar o banco de dados
b) Manter referências aos views de cada item para evitar chamadas repetidas a findViewById
c) Definir a quantidade de itens na lista
d) Controlar a navegação entre telas

---

**6.** Qual tipo de Intent é usado para navegar entre Activities do mesmo app?

a) Intent implícita
b) Intent explícita
c) PendingIntent
d) BroadcastIntent

---

**7.** Qual componente do Room é responsável por definir as queries SQL?

a) Entity
b) Database
c) DAO (Data Access Object)
d) Repository

---

**8.** Para persistir dados simples como preferências do usuário (tema, idioma), qual abordagem é mais adequada?

a) Firebase Realtime Database
b) SQLite
c) SharedPreferences
d) Room Database

---

**9.** Qual método do Firebase Database é usado para ouvir mudanças em tempo real?

a) getData()
b) setValue()
c) addValueEventListener()
d) push()

---

**10.** Para passar uma String de uma Activity para outra via Intent, qual método é utilizado?

a) intent.setData("chave", "valor")
b) intent.putExtra("chave", "valor")
c) intent.addString("chave", "valor")
d) intent.sendData("chave", "valor")

---

#### Gabarito do Simulado

| Questão | Resposta | Justificativa |
|---------|----------|---------------|
| 1 | b | ART executa o bytecode (DEX) das aplicações Android |
| 2 | c | AndroidManifest.xml é o arquivo de configuração principal |
| 3 | b | onStart() é chamado quando a Activity se torna visível |
| 4 | d | ConstraintLayout permite layouts complexos sem aninhamento |
| 5 | b | ViewHolder armazena referências para reutilização eficiente |
| 6 | b | Intent explícita especifica a classe de destino diretamente |
| 7 | c | DAO define os métodos de acesso ao banco de dados |
| 8 | c | SharedPreferences é ideal para pares chave-valor simples |
| 9 | c | addValueEventListener() escuta mudanças em tempo real |
| 10 | b | putExtra() é o método para adicionar dados extras ao Intent |

---

### Prova Teórica (Semana 20)

**Formato**: 10 questões objetivas + 2 questões dissertativas
**Duração**: 1h30min
**Conteúdo**: Toda a ementa (Blocos 1 a 4)
**Valor**: 10 pontos

#### Composição da Nota Final

| Componente | Peso |
|-----------|------|
| Exercícios práticos (5) | 20% |
| Projeto Intermediário | 20% |
| Projeto Final | 40% |
| Prova Teórica | 20% |

---

## 🚨 Plano de Contingência Pedagógica (Aulas Práticas sem Laboratório)

> ⚠️ **Quando usar este plano?** Quando não houver acesso ao laboratório de informática (manutenção, falta de energia, reserva indisponível, equipamentos com defeito, etc.)

> 💡 **Princípio:** Nenhuma aula é desperdiçada. Atividades práticas e avaliativas podem acontecer sem computador.

---

### 🅰️ Opção A: BYOD (Bring Your Own Device) — Smartphone

> 🎯 **Ideal quando:** Alunos possuem smartphone com acesso à internet (Wi-Fi da escola ou dados móveis)

#### Ferramentas Mobile Gratuitas

| Ferramenta | Plataforma | Uso na Disciplina |
|-----------|-----------|-------------------|
| **Expo Go** | Android/iOS | Testar apps React Native direto no celular! Escanear QR code e rodar |
| **Snack (expo.dev)** | Navegador mobile | IDE online completa — escrever código e ver resultado em tempo real |
| **Replit Mobile** | Android/iOS | IDE mobile com suporte a múltiplas linguagens (Kotlin, JS, TypeScript) |

#### Atividades Adaptadas para Smartphone

| Semana/Bloco | Atividade Original (PC) | Adaptação Mobile |
|-------------|------------------------|-----------------|
| Bloco 1 | Hello World no Android Studio | Snack (expo.dev): Hello World em React Native no navegador |
| Bloco 2 | Layout XML | Snack: reproduzir tela com View + Text + StyleSheet |
| Bloco 3 | Lógica Kotlin | Replit: exercícios de lógica em Kotlin no celular |
| Bloco 4 | Firebase CRUD | Firebase Console no celular: criar dados manualmente + testar |
| Bloco 5 | Projeto completo | Expo Go: escanear QR do Snack e testar protótipo no celular |

#### 📋 Roteiro do Professor — Opção A

```
ANTES DA AULA:
1. Verificar Wi-Fi da escola está funcionando
2. Criar projeto Snack com código base no expo.dev
3. Gerar QR Code / link encurtado para compartilhar
4. Testar se Expo Go funciona na rede da escola

DURANTE A AULA:
1. (5 min) Compartilhar link do Snack no quadro ou QR Code
2. (10 min) Explicar o desafio: modificar o código para atingir objetivo
3. (25 min) Alunos editam código no navegador e veem resultado no Expo Go
4. (10 min) Salvar Snack com nome do aluno → professora avalia depois

AVALIAÇÃO:
• Link do Snack salvo (cada aluno tem sua cópia)
• Screenshot do app rodando no Expo Go
• Funcionou no celular = nota completa
```

#### 📱 Guia do Aluno — Opção A

```
MATERIAIS NECESSÁRIOS:
✅ Smartphone carregado (mínimo 40% de bateria)
✅ App "Expo Go" instalado (Google Play / App Store)
✅ Navegador atualizado (para acessar snack.expo.dev)

PASSO A PASSO:
1. Acessar snack.expo.dev no navegador do celular (ou PC se disponível)
2. Escrever/editar código React Native no editor
3. Clicar em "My Device" → escanear QR Code com Expo Go
4. Ver o resultado INSTANTANEAMENTE no seu celular!
5. Cada alteração no código atualiza automaticamente

SALVAR SEU TRABALHO:
• Clicar em "Save" no Snack → copiar URL
• Enviar URL para professora via [canal definido]
```

---

### 🅱️ Opção B: Atividades Desplugadas (Unplugged)

> 🎯 **Ideal quando:** Não há internet disponível OU alunos não têm smartphone

#### Atividade B1: "Componentes React Native no Papel"

| Item | Descrição |
|------|-----------|
| **Tema** | Árvore de componentes e fluxo de dados (props) |
| **Duração** | 40 minutos |
| **Materiais** | Folha A4, lápis de cor, canetas |
| **Objetivo** | Desenhar árvore de componentes e as props que passam entre eles |

**📋 Roteiro do Professor:**
1. (10 min) Explicar no quadro: conceito de componente (caixa reutilizável), props (dados que entram), children (componentes filhos)
2. (5 min) Desenhar exemplo: App → Header → UserName(name="Maria")
3. (20 min) Alunos desenham a árvore de componentes de uma tela do AgendaPro: App → LoginScreen → Form → Input(placeholder) + Button(title) + Text(error)
4. (5 min) Trocar com colega: o colega consegue "ler" a árvore e entender a tela?

**📱 Guia do Aluno:**
- Cada componente = um retângulo com nome no topo
- Props = setas entrando no retângulo com nome:valor
- Componentes filhos = retângulos DENTRO do pai
- Use cores: azul = componente container, verde = componente visual, vermelho = dados/props
- Objetivo: alguém que não viu a tela deve entender a interface só olhando sua árvore

---

#### Atividade B2: "State vs Props — Dinâmica com Cartões"

| Item | Descrição |
|------|-----------|
| **Tema** | Diferença entre state (mutável) e props (imutável) |
| **Duração** | 30 minutos |
| **Materiais** | Cartões coloridos (fichas), caneta, fita adesiva |
| **Objetivo** | Entender state vs props de forma cinestésica |

**📋 Roteiro do Professor:**
1. (10 min) Explicar: props = dados recebidos do pai (NÃO podem ser alterados pelo filho). State = dados internos (PODEM ser alterados pelo próprio componente)
2. (5 min) Distribuir materiais: cartões AZUIS = props (colados/fixos), cartões AMARELOS = state (viráveis/alteráveis)
3. (15 min) Dinâmica:
   - Cada aluno é um "componente"
   - Professor (App pai) distribui cartões azuis (props) — aluno NÃO pode mudar
   - Cada aluno tem cartões amarelos próprios (state) — pode virar/alterar quando evento ocorre
   - Professor grita "EVENTO: botão clicado!" → alunos com state de "loading" viram cartão de false→true

**📱 Guia do Aluno:**
- Cartão AZUL fixo no braço = PROP (veio do pai, não mude!)
- Cartão AMARELO na mão = STATE (seu! pode virar quando evento ocorre)
- Quando a prof grita "EVENTO!", verifique se seu state deve mudar
- Anote no caderno: 3 exemplos de props e 3 exemplos de state no app AgendaPro

---

#### Atividade B3: "Navegação com Post-its"

| Item | Descrição |
|------|-----------|
| **Tema** | Navegação entre telas (Stack Navigator) |
| **Duração** | 40 minutos |
| **Materiais** | Post-its coloridos, folha A3 ou cartolina, canetas, setas desenhadas |
| **Objetivo** | Simular o Stack Navigator fisicamente |

**📋 Roteiro do Professor:**
1. (10 min) Explicar Stack Navigator: pilha de telas, push/pop, voltar = remover do topo
2. (5 min) Distribuir post-its: cada post-it = 1 tela (escrever nome da tela)
3. (20 min) Alunos montam na cartolina: Login → Home → Detalhes → Editar. Setas indicam navigate(). Mostrar a "pilha" crescendo e diminuindo
4. (5 min) Simular: "usuário clicou voltar 2x" → quais telas restam na pilha?

**📱 Guia do Aluno:**
- Cada post-it = uma tela do app (escreva o nome: "LoginScreen", "HomeScreen", etc.)
- Cole na cartolina em sequência: da esquerda pra direita
- Desenhe setas com `navigation.navigate('NomeTela')` escrito
- Ao lado, desenhe a PILHA (stack): empilhe post-its um sobre o outro mostrando a ordem
- Simule: "Ir para Detalhes" = push (adicionar ao topo). "Voltar" = pop (remover do topo)

---

#### Atividade B4: "Code Review de JSX Impresso"

| Item | Descrição |
|------|-----------|
| **Tema** | Identificar erros de sintaxe JSX/TypeScript |
| **Duração** | 40 minutos |
| **Materiais** | Código impresso com erros propositais (5-8 trechos), caneta vermelha |
| **Objetivo** | Encontrar e corrigir erros de sintaxe JSX/TypeScript em código impresso |

**📋 Roteiro do Professor:**
1. (5 min) Relembrar: regras de JSX (um único elemento raiz, fechar todas as tags, camelCase para atributos)
2. (5 min) Distribuir folhas com 6 trechos de código — cada um com 2-3 erros escondidos
3. (25 min) Alunos marcam com caneta vermelha os erros e escrevem a correção ao lado
4. (5 min) Correção coletiva no quadro — quem achou mais erros?

**📱 Guia do Aluno — Exemplo de código com erros:**
```jsx
// Encontre os erros neste código:
function MinhaTela() {
  return (
    <View>
      <Text style={color: 'red'}>Olá</Text>  // ← Erro: falta {{ }}
      <image source={require('./foto.png')}>  // ← Erro: Image com I maiúsculo + fechar tag
      <Button onpress={() => alert('oi')} />  // ← Erro: onPress com P maiúsculo
    </View>
    <View>  // ← Erro: dois elementos raiz (falta Fragment ou <>)
      <Text>Rodapé</Text>
    </View>
  )
}
```
- Circule cada erro com caneta vermelha
- Escreva a versão correta ao lado
- Dica: são erros de SINTAXE, não de lógica!

---

#### Atividade B5: "Lifecycle do Componente"

| Item | Descrição |
|------|-----------|
| **Tema** | Ciclo de vida — mount, update, unmount (useEffect) |
| **Duração** | 30 minutos |
| **Materiais** | Cartões com fases, espaço físico para movimentação |
| **Objetivo** | Alunos encenam mount/update/unmount — cada fase é um useEffect |

**📋 Roteiro do Professor:**
1. (10 min) Explicar ciclo de vida: mount (componente aparece), update (dados mudam), unmount (componente some). useEffect simula esses momentos.
2. (5 min) Dividir turma em grupos de 3: um é "componente", um é "React", um é "estado"
3. (15 min) Encenação:
   - "React" grita "MOUNT!" → "Componente" entra em cena, "Estado" mostra valor inicial
   - "React" grita "UPDATE! estado mudou!" → "Estado" vira cartão, "Componente" reage
   - "React" grita "UNMOUNT!" → "Componente" sai, limpa seus timers (larga objetos)
4. (5 min) Escrever no caderno: equivalente em código useEffect para cada fase

---

#### Atividade B6: "Layout com Flexbox Humano"

| Item | Descrição |
|------|-----------|
| **Tema** | Propriedades flexbox do React Native (flexDirection, justifyContent, alignItems) |
| **Duração** | 30 minutos |
| **Materiais** | Espaço da sala, fita no chão (delimitar "container"), cartões com nomes |
| **Objetivo** | Alunos são os "itens" e se posicionam conforme propriedades Flexbox |

**📋 Roteiro do Professor:**
1. (5 min) Delimitar com fita um retângulo no chão = "View container"
2. (5 min) Explicar: flexDirection (row vs column), justifyContent (center, space-between), alignItems (center, flex-start)
3. (20 min) Professor grita propriedades e alunos se reposicionam:
   - "flexDirection: row!" → alunos ficam em linha horizontal
   - "flexDirection: column!" → alunos ficam em coluna vertical
   - "justifyContent: space-between!" → espaço igual entre alunos
   - "alignItems: center!" → todos centralizam no eixo cruzado

**📱 Guia do Aluno:**
- Você é um componente `<View>` dentro de um container
- Quando a prof gritar a propriedade, mova-se para a posição correta
- Anote no caderno: para cada combinação, desenhe a posição final
- Após a dinâmica: escreva o código StyleSheet que geraria cada layout

---

### 🅲 Opção C: Estudo de Caso / PBL (Problem-Based Learning)

> 🎯 **Ideal quando:** Aula geminada (2 horários seguidos) para debate aprofundado

#### Caso 1: "Como o Nubank construiu o app com React Native"

| Item | Descrição |
|------|-----------|
| **Foco** | Decisão técnica de usar React Native em fintech |
| **Formato** | Pesquisa + debate + decisão (40-50 min) |
| **Conexão** | Bloco 1 (arquitetura) e contexto profissional |

**Dinâmica:**
1. Professor apresenta: Nubank, 80M+ clientes, app em React Native + Clojure no backend
2. Pergunta geradora: "Por que um banco digital com 80M de usuários escolheu React Native em vez de nativo puro?"
3. Grupos pesquisam/debatem: performance, time-to-market, equipe única, hot reload
4. Cada grupo apresenta: 3 motivos a favor + 2 riscos da escolha

---

#### Caso 2: "Por que o Airbnb abandonou React Native"

| Item | Descrição |
|------|-----------|
| **Foco** | Trade-offs e limites de frameworks cross-platform |
| **Formato** | Tribunal — acusação (contra RN) vs defesa (pró RN) (40-50 min) |
| **Conexão** | Decisões arquiteturais, trade-offs técnicos |

**Dinâmica:**
1. Professor apresenta: artigo "Sunsetting React Native" do Airbnb (2018) — motivos da migração para nativo
2. Turma dividida: metade "defende" React Native, metade argumenta "nativo é melhor"
3. Pontos a debater: bridges nativas, debugging, performance de animações, tamanho da equipe
4. Veredito final: "Para o nosso projeto do semestre, qual faz mais sentido e por quê?"

---

#### Caso 3: "Expo vs Bare Workflow — quando usar cada um"

| Item | Descrição |
|------|-----------|
| **Foco** | Decisão arquitetural para projetos React Native |
| **Formato** | Análise comparativa + decisão (40 min) |
| **Conexão** | Setup do projeto, limitações e liberdades |

**Dinâmica:**
1. Tabela no quadro: Expo (managed) vs Bare Workflow (ejected) — prós e contras
2. Cenários: "App com câmera + Bluetooth", "App com formulários + API", "App com AR/realidade aumentada"
3. Grupos decidem para cada cenário: Expo ou Bare? Justificam com critérios técnicos
4. Discussão: "Nosso app AgendaPro — qual workflow é mais adequado?"

---

### 📊 Rubrica de Avaliação Adaptada (Atividades sem Laboratório)

| Critério | Excelente (10-9) | Bom (8-7) | Regular (6-5) | Insuficiente (<5) |
|----------|-----------------|-----------|---------------|-------------------|
| **Compreensão conceitual** | Demonstra domínio de componentes/state/navegação | Boa compreensão com pequenas confusões | Compreensão básica, mistura conceitos | Não demonstra compreensão |
| **Raciocínio lógico** | Identifica fluxo de dados e erros com precisão | Identifica maioria dos fluxos/erros | Identifica parcialmente | Não consegue identificar |
| **Aplicação prática** | Conecta conceito abstrato com código real | Faz conexão com pequenos gaps | Conexão superficial | Não faz conexão |
| **Colaboração/Participação** | Participa ativamente, contribui com o grupo | Participa bem | Participação mínima | Não participa |
| **Entrega/Documentação** | Completa, organizada, dentro do prazo | Completa com pequenos ajustes | Incompleta mas entregue | Não entregou |

> 💡 **Nota:** Atividades de contingência têm o **mesmo peso** das atividades regulares. Pensar em arquitetura sem IDE é habilidade de desenvolvedor sênior!

---

### 🖨️ Kit de Materiais para Impressão

| Material | Quantidade | Uso |
|----------|-----------|-----|
| Código JSX com erros (6 trechos) | 1 por aluno | Atividade B4 |
| Template de árvore de componentes | 1 por aluno | Atividade B1 |
| Cartões "State" (amarelos) e "Props" (azuis) | 5 por aluno | Atividade B2 |
| Post-its coloridos (bloco) | 1 bloco por grupo | Atividade B3 |
| Ficha "Ciclo de Vida" (mount/update/unmount) | 1 por grupo | Atividade B5 |
| QR Code do Snack/Expo | 1 por mesa | Opção A |
| Fita adesiva (para Flexbox no chão) | 1 rolo | Atividade B6 |

---

### 🔀 Fluxograma de Decisão Rápida

```
┌─────────────────────────────────────────┐
│   🚨 LABORATÓRIO INDISPONÍVEL!          │
│   O que fazer em 2 minutos:             │
└─────────────────┬───────────────────────┘
                  │
                  ▼
┌─────────────────────────────────────────┐
│ Alunos têm smartphone + internet?       │
└──────┬──────────────────────┬───────────┘
       │ SIM                  │ NÃO
       ▼                      ▼
┌──────────────┐    ┌─────────────────────┐
│ OPÇÃO A:     │    │ Tem material        │
│ BYOD         │    │ impresso pronto?    │
│ Expo Go +    │    └──────┬────────┬─────┘
│ Snack no     │           │ SIM    │ NÃO
│ navegador    │           ▼        ▼
└──────────────┘    ┌────────┐ ┌─────────┐
                    │OPÇÃO B:│ │OPÇÃO C: │
                    │Unplug- │ │Estudo de│
                    │ged     │ │Caso/PBL │
                    │(B1-B6) │ │(debate) │
                    └────────┘ └─────────┘
```

> ⚠️ **Dica da Profª Luana:** Mantenha sempre 5 cópias do código JSX com erros (B4) e cartões de State/Props (B2) na sua pasta. São as atividades mais rápidas de aplicar sem preparação prévia!

---

## 📚 Referências

### Documentação Oficial

| Recurso | Link |
|---------|------|
| Android Developers (Documentação oficial) | [developer.android.com](https://developer.android.com) |
| Kotlin Documentation | [kotlinlang.org/docs](https://kotlinlang.org/docs/home.html) |
| Firebase Documentation | [firebase.google.com/docs](https://firebase.google.com/docs) |
| Material Design Guidelines | [m3.material.io](https://m3.material.io) |
| Android Studio Download | [developer.android.com/studio](https://developer.android.com/studio) |

### Codelabs e Tutoriais Interativos

| Recurso | Descrição |
|---------|-----------|
| [Google Codelabs - Android](https://developer.android.com/courses) | Cursos oficiais do Google para Android com Kotlin |
| [Android Basics with Compose](https://developer.android.com/courses/android-basics-compose/course) | Curso básico oficial (referência complementar) |
| [Kotlin Koans](https://kotlinlang.org/docs/koans.html) | Exercícios interativos para aprender Kotlin |
| [Firebase Codelabs](https://firebase.google.com/codelabs) | Tutoriais práticos de Firebase |

### Cursos em Vídeo (Português)

| Canal/Curso | Descrição |
|-------------|-----------|
| [Curso em Vídeo — Android](https://www.cursoemvideo.com) | Curso gratuito de Android com Gustavo Guanabara |
| [DevSuperior](https://www.youtube.com/@DevSuperior) | Conteúdo de desenvolvimento mobile em português |

### Canais YouTube (Inglês — com legendas)

| Canal | Descrição |
|-------|-----------|
| [Philipp Lackner](https://www.youtube.com/@PhilippLackner) | Tutoriais modernos de Android com Kotlin |
| [Coding with Mitch](https://www.youtube.com/@CodingWithMitch) | Projetos práticos Android |
| [Stevdza-San](https://www.youtube.com/@StevdzaSan) | Android UI e animações |

### Livros Recomendados

| Livro | Autor |
|-------|-------|
| Kotlin in Action | Dmitry Jemerov, Svetlana Isakova |
| Head First Android Development | Dawn Griffiths, David Griffiths |
| Android Programming: The Big Nerd Ranch Guide | Bryan Sievert, Chris Stewart |

---

## 📄 Informações da Disciplina

| Campo | Valor |
|-------|-------|
| **Disciplina** | Programação em Novas Tecnologias - Mobile |
| **Curso** | Técnico em Desenvolvimento de Sistemas |
| **Instituição** | ETE Pernambuco |
| **Professora** | Profª Luana Cristina |
| **Módulo** | 3 (Semestre 3) |
| **Carga Horária** | 160 horas |
| **Aulas/Semana** | 8 |
| **Duração** | 20 semanas |
| **Pré-requisitos** | Lógica de Programação, Programação Web (HTML/CSS) |

---

<p align="center">
  Feito com 💚 por <strong>Profª Luana Cristina</strong> — ETE Pernambuco<br>
  <em>Formando desenvolvedores mobile para o mercado de tecnologia</em>
</p>
