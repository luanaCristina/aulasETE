# 📘 Manual de Apoio ao Estudante — Programação Mobile Android (160h)

**Curso Técnico em Desenvolvimento de Sistemas**
**ETE Pernambuco | Profª Luana Cristina**
**Ferramentas: Kotlin + Android Studio + Firebase**

---

## Capítulo 1 — Resumo Teórico Essencial

### 1.1 Arquitetura Android

O sistema Android é organizado em camadas, como um **bolo de camadas**:

| Camada | Função | Analogia |
|---|---|---|
| Aplicativos | Apps que o usuário vê | Cobertura do bolo |
| Framework | APIs do Android (Activity, View, etc.) | Recheio |
| Bibliotecas + Runtime | Código nativo + ART | Massa do bolo |
| Kernel Linux | Hardware, memória, segurança | Forma do bolo |

Seu código vive na camada de **Aplicativos** e usa o **Framework** para funcionar.

### 1.2 Activity

Uma Activity é uma tela do seu aplicativo.

**Analogia:** Pense em um **livro**. Cada Activity é uma **página**. O usuário "vira as páginas" navegando entre telas. Assim como um livro tem uma capa (tela inicial), seu app tem uma Activity principal (launcher).

**Características:**
- Cada Activity tem seu próprio layout XML
- Activities são declaradas no AndroidManifest.xml
- Podem se comunicar entre si via Intents
- Gerenciadas em uma pilha (back stack)

### 1.3 Ciclo de Vida da Activity

O sistema Android gerencia a vida de cada Activity com callbacks.

**Analogia — O dia de uma pessoa:**

| Callback | Analogia | O que acontece |
|---|---|---|
| `onCreate()` | Acordar | Activity é criada, layout é inflado |
| `onStart()` | Se arrumar | Activity fica visível |
| `onResume()` | Trabalhar | Activity interativa (foco) |
| `onPause()` | Pausa pro café | Outra Activity parcialmente cobre |
| `onStop()` | Chegar em casa | Activity não está mais visível |
| `onDestroy()` | Dormir | Activity é destruída |

### 1.4 Layout XML

Layouts definem a interface visual da Activity.

**Analogia:** O Layout é como uma **planta baixa** de um apartamento. Você define onde fica cada "móvel" (botão, texto, imagem) e suas dimensões.

**Principais layouts:**
- **LinearLayout** — organiza em linha (vertical ou horizontal)
- **ConstraintLayout** — posiciona com restrições relativas (mais flexível)
- **FrameLayout** — empilha views uma sobre a outra
- **RecyclerView** — lista rolável e eficiente

### 1.5 RecyclerView

RecyclerView exibe listas grandes de forma eficiente, reciclando views.

**Analogia:** Imagine uma **esteira de rolagem** em um sushi bar. Existem apenas alguns pratinhos visíveis na esteira. Quando um prato sai de vista, ele é lavado e colocado de volta com novo conteúdo. A RecyclerView faz isso com itens de lista.

**Componentes:**
- **Adapter** — fornece os dados e cria as views
- **ViewHolder** — "segura" as referências de cada item
- **LayoutManager** — organiza os itens (linear, grid, etc.)

### 1.6 Intent

Intent é o mecanismo de comunicação entre componentes Android.

**Analogia:** Um Intent é como um **bilhete** passado entre Activities. Você escreve "abra a tela X e leve esses dados" no bilhete, e o sistema Android entrega.

**Tipos:**
- **Explícita** — destino definido (abrir Activity específica)
- **Implícita** — ação definida (compartilhar, abrir URL)

### 1.7 Firebase

Firebase é uma plataforma BaaS (Backend as a Service) do Google.

**Analogia:** Firebase é como uma **nuvem com armários organizados**. Cada armário guarda um tipo de dado. Você não precisa construir o prédio (servidor) — só usa os armários prontos.

**Serviços principais:**
- **Realtime Database / Firestore** — banco de dados NoSQL
- **Authentication** — login de usuários
- **Cloud Storage** — armazenamento de arquivos
- **Cloud Functions** — código serverless
- **Cloud Messaging** — notificações push

---

## Capítulo 2 — Exemplos de Código/Processo Comentados

### 2.1 Activity com Ciclo de Vida Logado

```kotlin
// MainActivity.kt — Activity com Log em cada etapa do ciclo de vida
package com.exemplo.meuapp

import android.os.Bundle
import android.util.Log
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    // TAG para identificar logs desta Activity
    private val TAG = "MainActivity"

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main) // Infla o layout XML
        Log.d(TAG, "onCreate: Activity criada!")
    }

    override fun onStart() {
        super.onStart()
        Log.d(TAG, "onStart: Activity visível!")
    }

    override fun onResume() {
        super.onResume()
        Log.d(TAG, "onResume: Activity interativa!")
    }

    override fun onPause() {
        super.onPause()
        Log.d(TAG, "onPause: Activity pausada!")
    }

    override fun onStop() {
        super.onStop()
        Log.d(TAG, "onStop: Activity não está mais visível!")
    }

    override fun onDestroy() {
        super.onDestroy()
        Log.d(TAG, "onDestroy: Activity destruída!")
    }
}
```

### 2.2 LinearLayout Básico

```xml
<!-- res/layout/activity_main.xml — Layout linear vertical -->
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp"
    android:gravity="center">

    <!-- Título -->
    <TextView
        android:id="@+id/txtTitulo"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Bem-vindo ao App!"
        android:textSize="24sp"
        android:textStyle="bold"
        android:layout_marginBottom="16dp"/>

    <!-- Campo de entrada -->
    <EditText
        android:id="@+id/edtNome"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:hint="Digite seu nome"
        android:layout_marginBottom="16dp"/>

    <!-- Botão -->
    <Button
        android:id="@+id/btnSaudar"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:text="Saudar"/>
</LinearLayout>
```

### 2.3 ConstraintLayout com Formulário

```xml
<!-- res/layout/activity_cadastro.xml — Formulário com ConstraintLayout -->
<?xml version="1.0" encoding="utf-8"?>
<androidx.constraintlayout.widget.ConstraintLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    xmlns:app="http://schemas.android.com/apk/res-auto"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:padding="24dp">

    <TextView
        android:id="@+id/lblTitulo"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="Cadastro"
        android:textSize="28sp"
        app:layout_constraintTop_toTopOf="parent"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="32dp"/>


    <com.google.android.material.textfield.TextInputLayout
        android:id="@+id/tilEmail"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        app:layout_constraintTop_toBottomOf="@id/lblTitulo"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="24dp">

        <com.google.android.material.textfield.TextInputEditText
            android:id="@+id/edtEmail"
            android:layout_width="match_parent"
            android:layout_height="wrap_content"
            android:hint="E-mail"
            android:inputType="textEmailAddress"/>
    </com.google.android.material.textfield.TextInputLayout>

    <Button
        android:id="@+id/btnCadastrar"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:text="Cadastrar"
        app:layout_constraintTop_toBottomOf="@id/tilEmail"
        app:layout_constraintStart_toStartOf="parent"
        app:layout_constraintEnd_toEndOf="parent"
        android:layout_marginTop="24dp"/>

</androidx.constraintlayout.widget.ConstraintLayout>
```

### 2.4 RecyclerView — Adapter + ViewHolder

```kotlin
// Modelo de dados
data class Tarefa(val id: Int, val titulo: String, val concluida: Boolean)

// Adapter da RecyclerView
class TarefaAdapter(
    private val tarefas: List<Tarefa>
) : RecyclerView.Adapter<TarefaAdapter.TarefaViewHolder>() {

    // ViewHolder "segura" as referências das views de cada item
    class TarefaViewHolder(itemView: View) : RecyclerView.ViewHolder(itemView) {
        val txtTitulo: TextView = itemView.findViewById(R.id.txtTituloTarefa)
        val checkBox: CheckBox = itemView.findViewById(R.id.chkConcluida)
    }

    // Cria um novo ViewHolder (infla o layout do item)
    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TarefaViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_tarefa, parent, false)
        return TarefaViewHolder(view)
    }

    // Preenche os dados no ViewHolder (bind)
    override fun onBindViewHolder(holder: TarefaViewHolder, position: Int) {
        val tarefa = tarefas[position]
        holder.txtTitulo.text = tarefa.titulo
        holder.checkBox.isChecked = tarefa.concluida
    }

    // Retorna o total de itens
    override fun getItemCount() = tarefas.size
}
```

**Configuração na Activity:**

```kotlin
// Na Activity, configurar a RecyclerView
val recyclerView = findViewById<RecyclerView>(R.id.recyclerTarefas)
recyclerView.layoutManager = LinearLayoutManager(this) // Layout em lista
recyclerView.adapter = TarefaAdapter(listaDeTarefas)   // Conecta o adapter
```

### 2.5 Firebase CRUD (Create + Read com Listener)

```kotlin
// Configuração do Firestore
import com.google.firebase.firestore.FirebaseFirestore

class ProdutoRepository {
    // Referência ao Firestore
    private val db = FirebaseFirestore.getInstance()
    private val colecao = db.collection("produtos")

    // CREATE — Adicionar novo produto
    fun adicionarProduto(nome: String, preco: Double, onSucesso: () -> Unit) {
        val produto = hashMapOf(
            "nome" to nome,
            "preco" to preco,
            "criadoEm" to System.currentTimeMillis()
        )

        colecao.add(produto)
            .addOnSuccessListener { documento ->
                Log.d("Firebase", "Produto criado com ID: ${documento.id}")
                onSucesso()
            }
            .addOnFailureListener { erro ->
                Log.e("Firebase", "Erro ao criar: ${erro.message}")
            }
    }

    // READ — Escutar mudanças em tempo real
    fun escutarProdutos(onAtualizar: (List<Produto>) -> Unit) {
        colecao.addSnapshotListener { snapshot, erro ->
            if (erro != null) {
                Log.e("Firebase", "Erro no listener: ${erro.message}")
                return@addSnapshotListener
            }

            val produtos = snapshot?.documents?.map { doc ->
                Produto(
                    id = doc.id,
                    nome = doc.getString("nome") ?: "",
                    preco = doc.getDouble("preco") ?: 0.0
                )
            } ?: emptyList()

            onAtualizar(produtos) // Callback com lista atualizada
        }
    }
}
```

### 2.6 Intent Passando Dados

```kotlin
// Activity de ORIGEM — enviando dados
val intent = Intent(this, DetalheActivity::class.java)
intent.putExtra("PRODUTO_NOME", "Camiseta")   // Chave-valor: String
intent.putExtra("PRODUTO_PRECO", 49.90)        // Chave-valor: Double
intent.putExtra("PRODUTO_ID", 42)              // Chave-valor: Int
startActivity(intent) // Inicia a nova Activity

// Activity de DESTINO — recebendo dados
class DetalheActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_detalhe)

        // Recuperar dados passados via Intent
        val nome = intent.getStringExtra("PRODUTO_NOME") ?: "Sem nome"
        val preco = intent.getDoubleExtra("PRODUTO_PRECO", 0.0)
        val id = intent.getIntExtra("PRODUTO_ID", -1)

        // Usar os dados recebidos
        findViewById<TextView>(R.id.txtNome).text = nome
        findViewById<TextView>(R.id.txtPreco).text = "R$ $preco"
    }
}
```

---

## Capítulo 3 — Glossário Técnico

| Termo em Inglês | Significado em Português |
|---|---|
| **Activity** | Tela/componente principal com interface visual no Android |
| **Fragment** | Pedaço reutilizável de interface dentro de uma Activity |
| **Intent** | Mensagem que solicita ação entre componentes Android |
| **Layout** | Arquivo XML que define a organização visual da tela |
| **View** | Elemento visual individual (botão, texto, imagem) |
| **ViewGroup** | Container que agrupa Views (LinearLayout, ConstraintLayout) |
| **Widget** | Componente visual interativo (Button, EditText, CheckBox) |
| **RecyclerView** | Lista eficiente que recicla views fora da tela |
| **Adapter** | Ponte entre dados e a RecyclerView (fornece itens) |
| **ViewHolder** | Objeto que guarda referências das views de cada item da lista |
| **LifeCycle** | Ciclo de vida — estados pelos quais a Activity passa |
| **Bundle** | Pacote de dados chave-valor para salvar/restaurar estado |
| **Manifest** | Arquivo que declara componentes, permissões e configurações do app |
| **Gradle** | Sistema de build que gerencia dependências e compilação |
| **SDK** | Kit de desenvolvimento com ferramentas e APIs do Android |
| **AVD** | Dispositivo virtual Android — emulador |
| **Emulator** | Simulador de celular no computador para testes |
| **APK** | Pacote instalável do aplicativo Android |
| **Firebase** | Plataforma BaaS do Google para backend móvel |
| **Realtime Database** | BD NoSQL do Firebase com sincronização em tempo real |
| **Firestore** | BD NoSQL mais recente do Firebase, com coleções e documentos |
| **Authentication** | Serviço de login/cadastro de usuários no Firebase |
| **Cloud Functions** | Código serverless que executa em resposta a eventos |
| **Listener** | Observador que reage automaticamente quando dados mudam |
| **Callback** | Função passada como parâmetro, executada quando algo termina |
| **ViewModel** | Componente que armazena dados da UI e sobrevive a rotações |
| **LiveData** | Dado observável que respeita o ciclo de vida da Activity |
| **Coroutine** | Mecanismo Kotlin para executar código assíncrono de forma simples |
| **Suspend** | Palavra-chave que marca função que pode ser pausada (coroutine) |
| **Context** | Referência ao ambiente do app (recursos, serviços, informações) |
| **Toast** | Mensagem rápida que aparece brevemente na tela |
| **Snackbar** | Mensagem que aparece na parte inferior com opção de ação |
| **Material Design** | Sistema de design do Google para interfaces consistentes |
| **Constraint** | Restrição que posiciona um elemento em relação a outro |
| **dp** | Density-independent Pixel — unidade de medida para layouts |
| **sp** | Scale-independent Pixel — unidade para tamanho de texto |

---

## Capítulo 4 — Links e Recursos Gratuitos Recomendados

### Documentação Oficial
- 📖 [Android Developers](https://developer.android.com/) — Documentação completa
- 📖 [Kotlin Docs](https://kotlinlang.org/docs/home.html) — Referência da linguagem
- 📖 [Firebase Docs](https://firebase.google.com/docs) — Documentação Firebase

### Cursos e Codelabs
- 🎓 [Google Codelabs — Android](https://codelabs.developers.google.com/?cat=Android) — Práticas guiadas
- 🎓 [Android Basics with Compose](https://developer.android.com/courses/android-basics-compose/course) — Curso oficial gratuito
- 🎓 [Curso em Vídeo — Android](https://www.cursoemvideo.com/) — Em português

### Canais no YouTube
- 🎬 [Philipp Lackner](https://www.youtube.com/c/PhilippLackner) — Tutoriais Android/Kotlin modernos
- 🎬 [CodingWithMitch](https://www.youtube.com/c/CodingWithMitch) — Projetos reais
- 🎬 [Devs Norte](https://www.youtube.com/@DevSuperior) — Conteúdo Android em português

### Ferramentas e Referências
- 🛠️ [Material.io](https://material.io/) — Componentes e guidelines Material Design
- 🛠️ [Android Asset Studio](https://romannurik.github.io/AndroidAssetStudio/) — Gerador de ícones
- 🛠️ [Firebase Console](https://console.firebase.google.com/) — Painel do Firebase
- 🛠️ [Kotlin Playground](https://play.kotlinlang.org/) — Testar Kotlin no navegador

---

> **Dica da professora:** Comece com projetos pequenos e vá aumentando a complexidade. Um app de lista de tarefas é o "Hello World" do Android — domine ele antes de partir para Firebase! 🚀
