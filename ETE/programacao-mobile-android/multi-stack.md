# 📱 Multi-Stack: App de Lista de Tarefas com CRUD

> **ETE Pernambuco — Profª Luana Cristina**
> Disciplina: Programação Mobile Android

---

## 🎯 Objetivo Pedagógico

> *"A lógica é universal — a linguagem é apenas sintaxe."*

Neste material, implementamos o **mesmo app de Lista de Tarefas (To-Do)** com operações CRUD em 3 plataformas diferentes. O objetivo é mostrar que **gerenciamento de estado, listas dinâmicas e persistência de dados** seguem o mesmo padrão mental — independente da plataforma.

---

## 📋 Problema

Criar um **App de Lista de Tarefas** com:
- Adicionar nova tarefa (Create)
- Listar todas as tarefas (Read)
- Marcar tarefa como concluída (Update)
- Excluir tarefa (Delete)
- Persistência local (dados salvos mesmo ao fechar o app)
- Interface limpa e responsiva

---

## 🤖 Implementação 1: Android Nativo (Kotlin + XML + Room)

> A abordagem oficial do Android. Activity, RecyclerView, Room Database.

### `Tarefa.kt` — Entidade do Room

```kotlin
package com.ete.listatarefas.model

import androidx.room.Entity
import androidx.room.PrimaryKey

@Entity(tableName = "tarefas")
data class Tarefa(
    @PrimaryKey(autoGenerate = true)
    val id: Int = 0,
    val titulo: String,
    val concluida: Boolean = false,
    val criadaEm: Long = System.currentTimeMillis()
)
```

### `TarefaDao.kt` — Operações do Banco

```kotlin
package com.ete.listatarefas.database

import androidx.room.*
import com.ete.listatarefas.model.Tarefa

@Dao
interface TarefaDao {
    @Query("SELECT * FROM tarefas ORDER BY criadaEm DESC")
    fun listarTodas(): List<Tarefa>

    @Insert
    fun inserir(tarefa: Tarefa)

    @Update
    fun atualizar(tarefa: Tarefa)

    @Delete
    fun deletar(tarefa: Tarefa)

    @Query("UPDATE tarefas SET concluida = :status WHERE id = :id")
    fun alterarStatus(id: Int, status: Boolean)
}
```

### `AppDatabase.kt` — Configuração do Room

```kotlin
package com.ete.listatarefas.database

import android.content.Context
import androidx.room.Database
import androidx.room.Room
import androidx.room.RoomDatabase
import com.ete.listatarefas.model.Tarefa

@Database(entities = [Tarefa::class], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun tarefaDao(): TarefaDao

    companion object {
        @Volatile
        private var INSTANCIA: AppDatabase? = null

        fun obterInstancia(contexto: Context): AppDatabase {
            return INSTANCIA ?: synchronized(this) {
                val instancia = Room.databaseBuilder(
                    contexto.applicationContext,
                    AppDatabase::class.java,
                    "tarefas_database"
                ).build()
                INSTANCIA = instancia
                instancia
            }
        }
    }
}
```

### `activity_main.xml` — Layout Principal

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical"
    android:padding="16dp">

    <TextView
        android:layout_width="wrap_content"
        android:layout_height="wrap_content"
        android:text="📋 Minhas Tarefas"
        android:textSize="24sp"
        android:textStyle="bold"
        android:layout_marginBottom="16dp" />

    <!-- Campo de entrada + botão -->
    <LinearLayout
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:orientation="horizontal"
        android:layout_marginBottom="16dp">

        <EditText
            android:id="@+id/editTarefa"
            android:layout_width="0dp"
            android:layout_height="wrap_content"
            android:layout_weight="1"
            android:hint="Nova tarefa..."
            android:padding="12dp"
            android:background="@drawable/input_background" />

        <Button
            android:id="@+id/btnAdicionar"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content"
            android:text="+"
            android:textSize="20sp"
            android:layout_marginStart="8dp" />
    </LinearLayout>

    <!-- Lista de tarefas -->
    <androidx.recyclerview.widget.RecyclerView
        android:id="@+id/recyclerTarefas"
        android:layout_width="match_parent"
        android:layout_height="0dp"
        android:layout_weight="1" />

</LinearLayout>
```

### `item_tarefa.xml` — Layout de cada item

```xml
<?xml version="1.0" encoding="utf-8"?>
<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:orientation="horizontal"
    android:padding="12dp"
    android:gravity="center_vertical"
    android:layout_marginBottom="8dp"
    android:background="@drawable/card_background">

    <CheckBox
        android:id="@+id/checkConcluida"
        android:layout_width="wrap_content"
        android:layout_height="wrap_content" />

    <TextView
        android:id="@+id/txtTitulo"
        android:layout_width="0dp"
        android:layout_height="wrap_content"
        android:layout_weight="1"
        android:textSize="16sp"
        android:layout_marginStart="8dp" />

    <ImageButton
        android:id="@+id/btnDeletar"
        android:layout_width="36dp"
        android:layout_height="36dp"
        android:src="@android:drawable/ic_menu_delete"
        android:background="?attr/selectableItemBackground"
        android:contentDescription="Deletar tarefa" />

</LinearLayout>
```

### `TarefaAdapter.kt` — Adapter do RecyclerView

```kotlin
package com.ete.listatarefas.adapter

import android.graphics.Paint
import android.view.LayoutInflater
import android.view.View
import android.view.ViewGroup
import android.widget.CheckBox
import android.widget.ImageButton
import android.widget.TextView
import androidx.recyclerview.widget.RecyclerView
import com.ete.listatarefas.R
import com.ete.listatarefas.model.Tarefa

class TarefaAdapter(
    private var tarefas: MutableList<Tarefa>,
    private val onStatusChange: (Tarefa, Boolean) -> Unit,
    private val onDelete: (Tarefa) -> Unit
) : RecyclerView.Adapter<TarefaAdapter.TarefaViewHolder>() {

    class TarefaViewHolder(view: View) : RecyclerView.ViewHolder(view) {
        val checkConcluida: CheckBox = view.findViewById(R.id.checkConcluida)
        val txtTitulo: TextView = view.findViewById(R.id.txtTitulo)
        val btnDeletar: ImageButton = view.findViewById(R.id.btnDeletar)
    }

    override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): TarefaViewHolder {
        val view = LayoutInflater.from(parent.context)
            .inflate(R.layout.item_tarefa, parent, false)
        return TarefaViewHolder(view)
    }

    override fun onBindViewHolder(holder: TarefaViewHolder, position: Int) {
        val tarefa = tarefas[position]

        holder.txtTitulo.text = tarefa.titulo
        holder.checkConcluida.isChecked = tarefa.concluida

        // Riscar texto se concluída
        if (tarefa.concluida) {
            holder.txtTitulo.paintFlags = holder.txtTitulo.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
        } else {
            holder.txtTitulo.paintFlags = holder.txtTitulo.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
        }

        holder.checkConcluida.setOnCheckedChangeListener { _, isChecked ->
            onStatusChange(tarefa, isChecked)
        }

        holder.btnDeletar.setOnClickListener {
            onDelete(tarefa)
        }
    }

    override fun getItemCount() = tarefas.size

    fun atualizarLista(novaLista: List<Tarefa>) {
        tarefas.clear()
        tarefas.addAll(novaLista)
        notifyDataSetChanged()
    }
}
```

### `MainActivity.kt` — Activity Principal

```kotlin
package com.ete.listatarefas

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.Toast
import androidx.appcompat.app.AppCompatActivity
import androidx.recyclerview.widget.LinearLayoutManager
import androidx.recyclerview.widget.RecyclerView
import com.ete.listatarefas.adapter.TarefaAdapter
import com.ete.listatarefas.database.AppDatabase
import com.ete.listatarefas.model.Tarefa
import kotlinx.coroutines.*

class MainActivity : AppCompatActivity() {
    private lateinit var adapter: TarefaAdapter
    private lateinit var db: AppDatabase
    private val scope = CoroutineScope(Dispatchers.Main + Job())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        db = AppDatabase.obterInstancia(this)

        val editTarefa = findViewById<EditText>(R.id.editTarefa)
        val btnAdicionar = findViewById<Button>(R.id.btnAdicionar)
        val recycler = findViewById<RecyclerView>(R.id.recyclerTarefas)

        adapter = TarefaAdapter(
            mutableListOf(),
            onStatusChange = { tarefa, status -> alterarStatus(tarefa, status) },
            onDelete = { tarefa -> deletarTarefa(tarefa) }
        )

        recycler.layoutManager = LinearLayoutManager(this)
        recycler.adapter = adapter

        // Carregar tarefas ao iniciar
        carregarTarefas()

        // Adicionar nova tarefa
        btnAdicionar.setOnClickListener {
            val titulo = editTarefa.text.toString().trim()
            if (titulo.isEmpty()) {
                Toast.makeText(this, "Digite uma tarefa!", Toast.LENGTH_SHORT).show()
                return@setOnClickListener
            }

            scope.launch {
                withContext(Dispatchers.IO) {
                    db.tarefaDao().inserir(Tarefa(titulo = titulo))
                }
                editTarefa.text.clear()
                carregarTarefas()
            }
        }
    }

    private fun carregarTarefas() {
        scope.launch {
            val tarefas = withContext(Dispatchers.IO) {
                db.tarefaDao().listarTodas()
            }
            adapter.atualizarLista(tarefas)
        }
    }

    private fun alterarStatus(tarefa: Tarefa, status: Boolean) {
        scope.launch {
            withContext(Dispatchers.IO) {
                db.tarefaDao().alterarStatus(tarefa.id, status)
            }
            carregarTarefas()
        }
    }

    private fun deletarTarefa(tarefa: Tarefa) {
        scope.launch {
            withContext(Dispatchers.IO) {
                db.tarefaDao().deletar(tarefa)
            }
            carregarTarefas()
        }
    }

    override fun onDestroy() {
        super.onDestroy()
        scope.cancel()
    }
}
```

---

## ⚛️ Implementação 2: Expo/React Native (TypeScript)

> Cross-platform com uma única base de código. FlatList, AsyncStorage, hooks.

### `App.tsx`

```tsx
import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, FlatList,
  StyleSheet, Alert, StatusBar
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Tipagem da Tarefa
interface Tarefa {
  id: string;
  titulo: string;
  concluida: boolean;
  criadaEm: number;
}

export default function App() {
  const [tarefas, setTarefas] = useState<Tarefa[]>([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // Carregar tarefas ao montar (equivalente ao onCreate)
  useEffect(() => {
    carregarTarefas();
  }, []);

  // Salvar sempre que tarefas mudar
  useEffect(() => {
    salvarTarefas(tarefas);
  }, [tarefas]);

  const carregarTarefas = async () => {
    try {
      const dados = await AsyncStorage.getItem('@tarefas');
      if (dados) {
        setTarefas(JSON.parse(dados));
      }
    } catch (erro) {
      console.error('Erro ao carregar:', erro);
    }
  };

  const salvarTarefas = async (lista: Tarefa[]) => {
    try {
      await AsyncStorage.setItem('@tarefas', JSON.stringify(lista));
    } catch (erro) {
      console.error('Erro ao salvar:', erro);
    }
  };

  // CREATE
  const adicionarTarefa = () => {
    if (!novaTarefa.trim()) {
      Alert.alert('Atenção', 'Digite uma tarefa!');
      return;
    }

    const tarefa: Tarefa = {
      id: Date.now().toString(),
      titulo: novaTarefa.trim(),
      concluida: false,
      criadaEm: Date.now(),
    };

    setTarefas([tarefa, ...tarefas]);
    setNovaTarefa('');
  };

  // UPDATE
  const alternarStatus = (id: string) => {
    setTarefas(tarefas.map(t =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    ));
  };

  // DELETE
  const deletarTarefa = (id: string) => {
    Alert.alert('Confirmar', 'Deseja excluir esta tarefa?', [
      { text: 'Cancelar', style: 'cancel' },
      { text: 'Excluir', style: 'destructive', onPress: () => {
        setTarefas(tarefas.filter(t => t.id !== id));
      }},
    ]);
  };

  // Renderizar cada item
  const renderItem = ({ item }: { item: Tarefa }) => (
    <View style={estilos.itemTarefa}>
      <TouchableOpacity
        style={estilos.checkArea}
        onPress={() => alternarStatus(item.id)}
      >
        <Text style={estilos.checkIcon}>
          {item.concluida ? '✅' : '⬜'}
        </Text>
        <Text style={[
          estilos.tituloTarefa,
          item.concluida && estilos.textoConcluido
        ]}>
          {item.titulo}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deletarTarefa(item.id)}>
        <Text style={estilos.btnDeletar}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={estilos.container}>
      <StatusBar barStyle="dark-content" />

      <Text style={estilos.titulo}>📋 Minhas Tarefas</Text>

      {/* Input + Botão */}
      <View style={estilos.inputArea}>
        <TextInput
          style={estilos.input}
          value={novaTarefa}
          onChangeText={setNovaTarefa}
          placeholder="Nova tarefa..."
          onSubmitEditing={adicionarTarefa}
        />
        <TouchableOpacity style={estilos.btnAdicionar} onPress={adicionarTarefa}>
          <Text style={estilos.btnAdicionarTexto}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Lista */}
      <FlatList
        data={tarefas}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={estilos.lista}
        ListEmptyComponent={
          <Text style={estilos.listaVazia}>Nenhuma tarefa ainda. Adicione uma!</Text>
        }
      />

      {/* Contador */}
      <Text style={estilos.contador}>
        {tarefas.filter(t => t.concluida).length}/{tarefas.length} concluídas
      </Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5', paddingTop: 60, paddingHorizontal: 20 },
  titulo: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  inputArea: { flexDirection: 'row', marginBottom: 20 },
  input: { flex: 1, backgroundColor: '#fff', padding: 14, borderRadius: 8, fontSize: 16, borderWidth: 1, borderColor: '#ddd' },
  btnAdicionar: { backgroundColor: '#4CAF50', width: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 8, marginLeft: 10 },
  btnAdicionarTexto: { color: '#fff', fontSize: 24, fontWeight: 'bold' },
  lista: { flex: 1 },
  itemTarefa: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', elevation: 2 },
  checkArea: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  checkIcon: { fontSize: 20, marginRight: 12 },
  tituloTarefa: { fontSize: 16, flex: 1 },
  textoConcluido: { textDecorationLine: 'line-through', color: '#999' },
  btnDeletar: { fontSize: 20 },
  listaVazia: { textAlign: 'center', color: '#999', marginTop: 40, fontSize: 16 },
  contador: { textAlign: 'center', padding: 15, color: '#666', fontSize: 14 },
});
```

---

## 🌐 Implementação 3: Web PWA (HTML + CSS + JS + LocalStorage)

> Progressive Web App que funciona como app mobile. Instale no celular!

### `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="theme-color" content="#4CAF50">
  <link rel="manifest" href="manifest.json">
  <title>Lista de Tarefas - PWA</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: #f5f5f5; padding: 20px; max-width: 600px; margin: 0 auto; }

    h1 { font-size: 1.8rem; margin-bottom: 20px; padding-top: 20px; }

    .input-area {
      display: flex;
      gap: 10px;
      margin-bottom: 20px;
    }

    .input-area input {
      flex: 1;
      padding: 14px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 16px;
    }

    .input-area button {
      background: #4CAF50;
      color: #fff;
      border: none;
      width: 50px;
      border-radius: 8px;
      font-size: 24px;
      cursor: pointer;
    }

    .lista-tarefas { list-style: none; }

    .item-tarefa {
      background: #fff;
      padding: 16px;
      border-radius: 8px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .item-tarefa .esquerda {
      display: flex;
      align-items: center;
      gap: 12px;
      flex: 1;
    }

    .item-tarefa .esquerda input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }

    .item-tarefa.concluida span {
      text-decoration: line-through;
      color: #999;
    }

    .btn-deletar {
      background: none;
      border: none;
      font-size: 20px;
      cursor: pointer;
    }

    .contador {
      text-align: center;
      padding: 15px;
      color: #666;
    }

    .lista-vazia {
      text-align: center;
      color: #999;
      padding: 40px;
    }
  </style>
</head>
<body>
  <h1>📋 Minhas Tarefas</h1>

  <div class="input-area">
    <input type="text" id="inputTarefa" placeholder="Nova tarefa..." />
    <button id="btnAdicionar">+</button>
  </div>

  <ul class="lista-tarefas" id="listaTarefas"></ul>
  <p class="contador" id="contador"></p>

  <script src="app.js"></script>
</body>
</html>
```

### `app.js`

```javascript
// ============ GERENCIAMENTO DE ESTADO ============

// Carregar tarefas do LocalStorage (equivalente ao Room/AsyncStorage)
function carregarTarefas() {
  const dados = localStorage.getItem('tarefas');
  return dados ? JSON.parse(dados) : [];
}

// Salvar tarefas no LocalStorage
function salvarTarefas(tarefas) {
  localStorage.setItem('tarefas', JSON.stringify(tarefas));
}

let tarefas = carregarTarefas();

// ============ OPERAÇÕES CRUD ============

// CREATE - Adicionar tarefa
function adicionarTarefa(titulo) {
  if (!titulo.trim()) {
    alert('Digite uma tarefa!');
    return;
  }

  const novaTarefa = {
    id: Date.now().toString(),
    titulo: titulo.trim(),
    concluida: false,
    criadaEm: Date.now(),
  };

  tarefas.unshift(novaTarefa);
  salvarTarefas(tarefas);
  renderizarLista();
}

// UPDATE - Alternar status
function alternarStatus(id) {
  tarefas = tarefas.map(t =>
    t.id === id ? { ...t, concluida: !t.concluida } : t
  );
  salvarTarefas(tarefas);
  renderizarLista();
}

// DELETE - Remover tarefa
function deletarTarefa(id) {
  if (!confirm('Deseja excluir esta tarefa?')) return;

  tarefas = tarefas.filter(t => t.id !== id);
  salvarTarefas(tarefas);
  renderizarLista();
}

// ============ RENDERIZAÇÃO (Equivalente ao RecyclerView/FlatList) ============

function renderizarLista() {
  const lista = document.getElementById('listaTarefas');
  const contador = document.getElementById('contador');

  if (tarefas.length === 0) {
    lista.innerHTML = '<li class="lista-vazia">Nenhuma tarefa ainda. Adicione uma!</li>';
    contador.textContent = '';
    return;
  }

  lista.innerHTML = tarefas.map(tarefa => `
    <li class="item-tarefa ${tarefa.concluida ? 'concluida' : ''}">
      <div class="esquerda">
        <input type="checkbox" ${tarefa.concluida ? 'checked' : ''}
               onchange="alternarStatus('${tarefa.id}')" />
        <span>${tarefa.titulo}</span>
      </div>
      <button class="btn-deletar" onclick="deletarTarefa('${tarefa.id}')">🗑️</button>
    </li>
  `).join('');

  const concluidas = tarefas.filter(t => t.concluida).length;
  contador.textContent = `${concluidas}/${tarefas.length} concluídas`;
}

// ============ EVENTOS (Equivalente ao setOnClickListener/onPress) ============

// DOMContentLoaded = equivalente ao onCreate/useEffect([])
document.addEventListener('DOMContentLoaded', () => {
  renderizarLista();

  const input = document.getElementById('inputTarefa');
  const btn = document.getElementById('btnAdicionar');

  btn.addEventListener('click', () => {
    adicionarTarefa(input.value);
    input.value = '';
  });

  // Enter para adicionar
  input.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      adicionarTarefa(input.value);
      input.value = '';
    }
  });
});
```

### `manifest.json` — Para tornar PWA instalável

```json
{
  "name": "Lista de Tarefas",
  "short_name": "Tarefas",
  "start_url": "/index.html",
  "display": "standalone",
  "background_color": "#f5f5f5",
  "theme_color": "#4CAF50",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ]
}
```

---

## 📊 Tabela Comparativa

| Conceito | Kotlin/Android | React Native/Expo | Web (HTML+JS) |
|----------|---------------|-------------------|---------------|
| **Tela/Página** | Activity + XML Layout | Componente funcional | Página HTML |
| **Lista dinâmica** | RecyclerView + Adapter | FlatList + renderItem | DOM manipulation (innerHTML) |
| **Estado/Dados** | Variáveis + LiveData | useState hook | Variáveis globais |
| **Persistência** | Room Database (SQLite) | AsyncStorage (key-value) | LocalStorage (key-value) |
| **Navegação** | Intent + startActivity | React Navigation | SPA (manipulação DOM) |
| **Evento de clique** | `setOnClickListener {}` | `onPress={() => {}}` | `addEventListener('click')` |
| **Ciclo de vida** | `onCreate()` | `useEffect(() => {}, [])` | `DOMContentLoaded` |
| **Atualização de UI** | `notifyDataSetChanged()` | setState (re-render) | `renderizarLista()` manual |
| **Confirmação** | `AlertDialog.Builder` | `Alert.alert()` | `confirm()` |
| **Input de texto** | `EditText` | `TextInput` | `<input type="text">` |
| **Coroutines/Async** | `CoroutineScope + Dispatchers` | `async/await` nativo | Síncrono (LocalStorage) |
| **Tipagem** | Kotlin (tipagem forte) | TypeScript (tipagem forte) | JavaScript (tipagem fraca) |

---

## 💡 Destaque Pedagógico

### O fluxo CRUD é UNIVERSAL:

```
┌─────────────────────────────────────────────────────────┐
│              MESMO FLUXO EM QUALQUER PLATAFORMA         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   1. CRIAR  → Capturar input → Salvar → Atualizar UI  │
│   2. LER    → Buscar dados → Renderizar lista          │
│   3. EDITAR → Localizar item → Modificar → Salvar      │
│   4. DELETAR→ Confirmar → Remover → Atualizar UI       │
│                                                         │
│   Android:  dao.inserir()  → Room → notifyDataSetChanged│
│   React:    setTarefas()   → AsyncStorage → re-render  │
│   Web:      tarefas.push() → LocalStorage → innerHTML  │
│                                                         │
│   ✅ MESMA LÓGICA — APIs diferentes!                   │
└─────────────────────────────────────────────────────────┘
```

### Ciclo de vida comparado:

```
┌──────────────────────────────────────────────────┐
│         QUANDO O APP INICIA...                   │
├──────────────────────────────────────────────────┤
│                                                  │
│   Android:  onCreate() {                         │
│               carregarTarefas()                  │
│               configurarRecyclerView()           │
│             }                                    │
│                                                  │
│   React:    useEffect(() => {                    │
│               carregarTarefas();                 │
│             }, []);                              │
│                                                  │
│   Web:      document.addEventListener(           │
│               'DOMContentLoaded', () => {        │
│               renderizarLista();                 │
│             });                                  │
│                                                  │
│   ✅ MESMO MOMENTO — sintaxe diferente!         │
└──────────────────────────────────────────────────┘
```

---

## 🚀 Guia de Execução

### Android Nativo (Kotlin)

```bash
# Abrir projeto no Android Studio
# File → New → New Project → Empty Activity

# Adicionar dependências no build.gradle (app):
# implementation "androidx.room:room-runtime:2.6.0"
# kapt "androidx.room:room-compiler:2.6.0"
# implementation "androidx.room:room-ktx:2.6.0"

# Rodar:
# Shift + F10 (emulador ou dispositivo conectado)
```

### Expo/React Native

```bash
# Criar projeto
npx create-expo-app lista-tarefas --template blank-typescript
cd lista-tarefas

# Instalar AsyncStorage
npx expo install @react-native-async-storage/async-storage

# Rodar
npx expo start

# Testar: Expo Go no celular → escanear QR Code
```

### Web PWA

```bash
# Criar pasta do projeto
mkdir lista-tarefas-pwa && cd lista-tarefas-pwa

# Criar arquivos: index.html, app.js, manifest.json

# Rodar com Live Server
npx live-server .

# Para testar como PWA no celular:
# 1. Servir com HTTPS (ngrok ou GitHub Pages)
# 2. Abrir no Chrome mobile
# 3. Menu → "Adicionar à tela inicial"
```

---

## 🏁 Conclusão

O **mesmo app de lista de tarefas** funciona identicamente nas 3 plataformas:
- **Android** → Activity + Room + RecyclerView (mais verboso, mais controle)
- **React Native** → Componente + AsyncStorage + FlatList (produtivo, cross-platform)
- **Web PWA** → HTML + LocalStorage + DOM (leve, instalável, universal)

A **lógica de negócio** (CRUD) é a mesma. A diferença está na:
- API de persistência (Room vs AsyncStorage vs LocalStorage)
- API de renderização de lista (Adapter vs renderItem vs innerHTML)
- Sintaxe de eventos (listener vs onPress vs addEventListener)

> *"Domine a lógica. As APIs você consulta na documentação."*
> — Profª Luana Cristina, ETE Pernambuco
