# ☁️ Multi-Stack: CRUD de Produtos com Firebase Firestore

> **ETE Pernambuco — Profª Luana Cristina**
> Disciplina: Banco de Dados em Nuvem (Cloud)

---

## 🎯 Objetivo Pedagógico

> *"A lógica é universal — a linguagem é apenas sintaxe."*

Neste material, implementamos o **mesmo CRUD de Produtos usando Firebase Firestore** em 3 plataformas diferentes. O objetivo é demonstrar que a **API do Firebase é quase IDÊNTICA** independente da linguagem — os métodos `addDoc`, `getDocs`, `updateDoc`, `deleteDoc` seguem o mesmo padrão conceitual.

---

## 📋 Problema

Criar um **sistema de gerenciamento de produtos** com:
- Adicionar produto (nome, preço, categoria)
- Listar todos os produtos (tempo real)
- Atualizar produto existente
- Deletar produto
- Filtrar por categoria
- Banco de dados na nuvem (Firebase Firestore)
- Autenticação básica (email/senha)

---

## 🤖 Implementação 1: Android Nativo (Kotlin)

> Firebase SDK para Android. Configuração via google-services.json.

### `Produto.kt` — Modelo de Dados

```kotlin
package com.ete.produtos.model

data class Produto(
    var id: String = "",
    val nome: String = "",
    val preco: Double = 0.0,
    val categoria: String = "",
    val criadoEm: Long = System.currentTimeMillis()
)
```

### `ProdutoRepository.kt` — Operações Firestore

```kotlin
package com.ete.produtos.repository

import com.ete.produtos.model.Produto
import com.google.firebase.firestore.FirebaseFirestore
import com.google.firebase.firestore.Query
import kotlinx.coroutines.tasks.await

class ProdutoRepository {
    // Referência à coleção "produtos" no Firestore
    private val db = FirebaseFirestore.getInstance()
    private val colecao = db.collection("produtos")

    // CREATE - Adicionar produto
    suspend fun adicionar(produto: Produto): String {
        val documento = colecao.add(
            hashMapOf(
                "nome" to produto.nome,
                "preco" to produto.preco,
                "categoria" to produto.categoria,
                "criadoEm" to produto.criadoEm
            )
        ).await()
        return documento.id
    }

    // READ - Listar todos os produtos
    suspend fun listarTodos(): List<Produto> {
        val snapshot = colecao
            .orderBy("criadoEm", Query.Direction.DESCENDING)
            .get()
            .await()

        return snapshot.documents.map { doc ->
            Produto(
                id = doc.id,
                nome = doc.getString("nome") ?: "",
                preco = doc.getDouble("preco") ?: 0.0,
                categoria = doc.getString("categoria") ?: "",
                criadoEm = doc.getLong("criadoEm") ?: 0
            )
        }
    }

    // READ - Listener em tempo real
    fun escutarEmTempoReal(onUpdate: (List<Produto>) -> Unit) {
        colecao.orderBy("criadoEm", Query.Direction.DESCENDING)
            .addSnapshotListener { snapshot, erro ->
                if (erro != null) return@addSnapshotListener
                val produtos = snapshot?.documents?.map { doc ->
                    Produto(
                        id = doc.id,
                        nome = doc.getString("nome") ?: "",
                        preco = doc.getDouble("preco") ?: 0.0,
                        categoria = doc.getString("categoria") ?: ""
                    )
                } ?: emptyList()
                onUpdate(produtos)
            }
    }

    // READ - Filtrar por categoria
    suspend fun filtrarPorCategoria(categoria: String): List<Produto> {
        val snapshot = colecao
            .whereEqualTo("categoria", categoria)
            .get()
            .await()

        return snapshot.documents.map { doc ->
            Produto(
                id = doc.id,
                nome = doc.getString("nome") ?: "",
                preco = doc.getDouble("preco") ?: 0.0,
                categoria = doc.getString("categoria") ?: ""
            )
        }
    }

    // UPDATE - Atualizar produto
    suspend fun atualizar(id: String, dados: Map<String, Any>) {
        colecao.document(id).update(dados).await()
    }

    // DELETE - Remover produto
    suspend fun deletar(id: String) {
        colecao.document(id).delete().await()
    }
}
```

### `AuthRepository.kt` — Autenticação Firebase

```kotlin
package com.ete.produtos.repository

import com.google.firebase.auth.FirebaseAuth
import kotlinx.coroutines.tasks.await

class AuthRepository {
    private val auth = FirebaseAuth.getInstance()

    suspend fun login(email: String, senha: String): Boolean {
        return try {
            auth.signInWithEmailAndPassword(email, senha).await()
            true
        } catch (e: Exception) {
            false
        }
    }

    suspend fun registrar(email: String, senha: String): Boolean {
        return try {
            auth.createUserWithEmailAndPassword(email, senha).await()
            true
        } catch (e: Exception) {
            false
        }
    }

    fun usuarioLogado() = auth.currentUser != null
    fun logout() = auth.signOut()
}
```

### `MainActivity.kt` — Uso na Activity

```kotlin
package com.ete.produtos

import android.os.Bundle
import android.widget.*
import androidx.appcompat.app.AppCompatActivity
import com.ete.produtos.model.Produto
import com.ete.produtos.repository.ProdutoRepository
import kotlinx.coroutines.*

class MainActivity : AppCompatActivity() {
    private val repo = ProdutoRepository()
    private val scope = CoroutineScope(Dispatchers.Main + Job())

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        // Listener em tempo real — atualiza automaticamente
        repo.escutarEmTempoReal { produtos ->
            atualizarLista(produtos)
        }

        // Botão adicionar
        findViewById<Button>(R.id.btnAdicionar).setOnClickListener {
            val nome = findViewById<EditText>(R.id.editNome).text.toString()
            val preco = findViewById<EditText>(R.id.editPreco).text.toString().toDoubleOrNull() ?: 0.0
            val categoria = findViewById<Spinner>(R.id.spinnerCategoria).selectedItem.toString()

            scope.launch {
                repo.adicionar(Produto(nome = nome, preco = preco, categoria = categoria))
                Toast.makeText(this@MainActivity, "Produto adicionado!", Toast.LENGTH_SHORT).show()
            }
        }
    }

    private fun atualizarLista(produtos: List<Produto>) {
        // Atualizar RecyclerView com a nova lista
    }

    override fun onDestroy() {
        super.onDestroy()
        scope.cancel()
    }
}
```

---

## ⚛️ Implementação 2: Expo/React Native (TypeScript)

> Firebase JS SDK no React Native. Mesmo código funciona em Android e iOS.

### `firebaseConfig.ts` — Configuração

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### `tipos.ts` — Tipagem

```typescript
export interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  criadoEm: number;
}

export type CategoriasProduto = 'Eletrônicos' | 'Roupas' | 'Alimentos' | 'Outros';
```

### `produtoService.ts` — Operações Firestore

```typescript
import {
  collection, addDoc, getDocs, updateDoc, deleteDoc,
  doc, query, where, orderBy, onSnapshot, Unsubscribe
} from 'firebase/firestore';
import { db } from './firebaseConfig';
import { Produto } from './tipos';

const COLECAO = 'produtos';

// CREATE - Adicionar produto
export async function adicionarProduto(produto: Omit<Produto, 'id'>): Promise<string> {
  const docRef = await addDoc(collection(db, COLECAO), {
    nome: produto.nome,
    preco: produto.preco,
    categoria: produto.categoria,
    criadoEm: Date.now(),
  });
  return docRef.id;
}

// READ - Listar todos os produtos
export async function listarProdutos(): Promise<Produto[]> {
  const q = query(
    collection(db, COLECAO),
    orderBy('criadoEm', 'desc')
  );
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Produto));
}

// READ - Listener em tempo real
export function escutarProdutos(callback: (produtos: Produto[]) => void): Unsubscribe {
  const q = query(
    collection(db, COLECAO),
    orderBy('criadoEm', 'desc')
  );

  return onSnapshot(q, (snapshot) => {
    const produtos = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    } as Produto));
    callback(produtos);
  });
}

// READ - Filtrar por categoria
export async function filtrarPorCategoria(categoria: string): Promise<Produto[]> {
  const q = query(
    collection(db, COLECAO),
    where('categoria', '==', categoria)
  );
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  } as Produto));
}

// UPDATE - Atualizar produto
export async function atualizarProduto(id: string, dados: Partial<Produto>): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await updateDoc(ref, dados);
}

// DELETE - Remover produto
export async function deletarProduto(id: string): Promise<void> {
  const ref = doc(db, COLECAO, id);
  await deleteDoc(ref);
}
```

### `authService.ts` — Autenticação

```typescript
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';

export async function login(email: string, senha: string): Promise<boolean> {
  try {
    await signInWithEmailAndPassword(auth, email, senha);
    return true;
  } catch (erro) {
    console.error('Erro no login:', erro);
    return false;
  }
}

export async function registrar(email: string, senha: string): Promise<boolean> {
  try {
    await createUserWithEmailAndPassword(auth, email, senha);
    return true;
  } catch (erro) {
    console.error('Erro no registro:', erro);
    return false;
  }
}

export function logout(): void {
  signOut(auth);
}

export function usuarioLogado(): boolean {
  return auth.currentUser !== null;
}
```

### `App.tsx` — Componente Principal

```tsx
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Alert } from 'react-native';
import { Produto } from './tipos';
import { adicionarProduto, escutarProdutos, deletarProduto, atualizarProduto } from './produtoService';

export default function App() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [nome, setNome] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('Eletrônicos');

  // Listener em tempo real (equivalente ao addSnapshotListener do Android)
  useEffect(() => {
    const unsubscribe = escutarProdutos((listaProdutos) => {
      setProdutos(listaProdutos);
    });

    // Cleanup: remover listener ao desmontar
    return () => unsubscribe();
  }, []);

  const handleAdicionar = async () => {
    if (!nome.trim() || !preco.trim()) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    await adicionarProduto({
      nome: nome.trim(),
      preco: parseFloat(preco),
      categoria,
      criadoEm: Date.now(),
    });

    setNome('');
    setPreco('');
    Alert.alert('Sucesso', 'Produto adicionado!');
  };

  const handleDeletar = (id: string) => {
    Alert.alert('Confirmar', 'Excluir este produto?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: () => deletarProduto(id) },
    ]);
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>🛒 Produtos Firebase</Text>

      {/* Formulário */}
      <TextInput style={estilos.input} value={nome} onChangeText={setNome} placeholder="Nome do produto" />
      <TextInput style={estilos.input} value={preco} onChangeText={setPreco} placeholder="Preço" keyboardType="numeric" />
      <TouchableOpacity style={estilos.btn} onPress={handleAdicionar}>
        <Text style={estilos.btnTexto}>Adicionar Produto</Text>
      </TouchableOpacity>

      {/* Lista */}
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.card}>
            <View>
              <Text style={estilos.cardNome}>{item.nome}</Text>
              <Text style={estilos.cardPreco}>R$ {item.preco.toFixed(2)}</Text>
              <Text style={estilos.cardCategoria}>{item.categoria}</Text>
            </View>
            <TouchableOpacity onPress={() => handleDeletar(item.id)}>
              <Text style={{ fontSize: 20 }}>🗑️</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, padding: 20, paddingTop: 60, backgroundColor: '#f9f9f9' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: { backgroundColor: '#fff', padding: 14, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#ddd' },
  btn: { backgroundColor: '#FF6B35', padding: 14, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  btnTexto: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  card: { backgroundColor: '#fff', padding: 16, borderRadius: 8, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2 },
  cardNome: { fontSize: 16, fontWeight: '600' },
  cardPreco: { fontSize: 14, color: '#27ae60', fontWeight: 'bold' },
  cardCategoria: { fontSize: 12, color: '#888' },
});
```

---

## 🌐 Implementação 3: Web (TypeScript + HTML + Vite)

> Firebase JS SDK na web. Mesmo SDK que o React Native usa!

### `src/firebase.ts` — Configuração (IDÊNTICA ao React Native!)

```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "seu-projeto.firebaseapp.com",
  projectId: "seu-projeto",
  storageBucket: "seu-projeto.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
```

### `src/produtoService.ts` — Operações (QUASE IDÊNTICAS!)

```typescript
import {
  collection, addDoc, getDocs, updateDoc, deleteDoc,
  doc, query, where, orderBy, onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';

export interface Produto {
  id: string;
  nome: string;
  preco: number;
  categoria: string;
  criadoEm: number;
}

const COLECAO = 'produtos';

// CREATE
export async function adicionarProduto(nome: string, preco: number, categoria: string) {
  return await addDoc(collection(db, COLECAO), {
    nome,
    preco,
    categoria,
    criadoEm: Date.now(),
  });
}

// READ - Todos
export async function listarProdutos(): Promise<Produto[]> {
  const q = query(collection(db, COLECAO), orderBy('criadoEm', 'desc'));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Produto));
}

// READ - Tempo real
export function escutarProdutos(callback: (produtos: Produto[]) => void) {
  const q = query(collection(db, COLECAO), orderBy('criadoEm', 'desc'));
  return onSnapshot(q, (snapshot) => {
    const produtos = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Produto));
    callback(produtos);
  });
}

// READ - Filtro
export async function filtrarPorCategoria(categoria: string): Promise<Produto[]> {
  const q = query(collection(db, COLECAO), where('categoria', '==', categoria));
  const snapshot = await getDocs(q);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Produto));
}

// UPDATE
export async function atualizarProduto(id: string, dados: Partial<Produto>) {
  await updateDoc(doc(db, COLECAO, id), dados);
}

// DELETE
export async function deletarProduto(id: string) {
  await deleteDoc(doc(db, COLECAO, id));
}
```

### `src/main.ts` — Lógica da Página

```typescript
import { adicionarProduto, escutarProdutos, deletarProduto, Produto } from './produtoService';

// Elementos do DOM
const formProduto = document.getElementById('formProduto') as HTMLFormElement;
const inputNome = document.getElementById('nome') as HTMLInputElement;
const inputPreco = document.getElementById('preco') as HTMLInputElement;
const selectCategoria = document.getElementById('categoria') as HTMLSelectElement;
const listaProdutos = document.getElementById('listaProdutos') as HTMLDivElement;

// CRIAR produto
formProduto.addEventListener('submit', async (e) => {
  e.preventDefault();

  const nome = inputNome.value.trim();
  const preco = parseFloat(inputPreco.value);
  const categoria = selectCategoria.value;

  if (!nome || isNaN(preco)) {
    alert('Preencha todos os campos corretamente!');
    return;
  }

  await adicionarProduto(nome, preco, categoria);
  formProduto.reset();
});

// ESCUTAR mudanças em tempo real
escutarProdutos((produtos: Produto[]) => {
  renderizarProdutos(produtos);
});

// RENDERIZAR lista
function renderizarProdutos(produtos: Produto[]) {
  if (produtos.length === 0) {
    listaProdutos.innerHTML = '<p class="vazio">Nenhum produto cadastrado.</p>';
    return;
  }

  listaProdutos.innerHTML = produtos.map(p => `
    <div class="card-produto">
      <div>
        <h3>${p.nome}</h3>
        <p class="preco">R$ ${p.preco.toFixed(2)}</p>
        <span class="categoria">${p.categoria}</span>
      </div>
      <button class="btn-deletar" onclick="handleDeletar('${p.id}')">🗑️</button>
    </div>
  `).join('');
}

// DELETE (função global para onclick inline)
(window as any).handleDeletar = async (id: string) => {
  if (confirm('Excluir este produto?')) {
    await deletarProduto(id);
  }
};
```

### `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Produtos Firebase - Web</title>
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: 'Segoe UI', sans-serif; background: #f9f9f9; padding: 20px; max-width: 700px; margin: 0 auto; }
    h1 { font-size: 1.8rem; margin: 20px 0; }
    form { display: flex; flex-direction: column; gap: 10px; margin-bottom: 30px; }
    input, select { padding: 12px; border: 1px solid #ddd; border-radius: 8px; font-size: 16px; }
    button[type="submit"] { background: #FF6B35; color: #fff; padding: 14px; border: none; border-radius: 8px; font-size: 16px; cursor: pointer; }
    .card-produto { background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 10px; display: flex; justify-content: space-between; align-items: center; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
    .card-produto h3 { font-size: 1.1rem; }
    .preco { color: #27ae60; font-weight: bold; }
    .categoria { font-size: 0.85rem; color: #888; background: #f0f0f0; padding: 2px 8px; border-radius: 4px; }
    .btn-deletar { background: none; border: none; font-size: 20px; cursor: pointer; }
    .vazio { text-align: center; color: #999; padding: 40px; }
  </style>
</head>
<body>
  <h1>🛒 Produtos Firebase</h1>

  <form id="formProduto">
    <input type="text" id="nome" placeholder="Nome do produto" required>
    <input type="number" id="preco" placeholder="Preço" step="0.01" required>
    <select id="categoria">
      <option value="Eletrônicos">Eletrônicos</option>
      <option value="Roupas">Roupas</option>
      <option value="Alimentos">Alimentos</option>
      <option value="Outros">Outros</option>
    </select>
    <button type="submit">Adicionar Produto</button>
  </form>

  <div id="listaProdutos"></div>

  <script type="module" src="/src/main.ts"></script>
</body>
</html>
```

---

## 📊 Tabela Comparativa: Operações Firebase

| Operação Firebase | Android (Kotlin) | React Native (JS/TS) | Web (TypeScript) |
|-------------------|-----------------|---------------------|-----------------|
| **Inicializar** | `google-services.json` + plugin gradle | `initializeApp(config)` | `initializeApp(config)` |
| **Referência coleção** | `db.collection("produtos")` | `collection(db, "produtos")` | `collection(db, "produtos")` |
| **Adicionar doc** | `colecao.add(hashMapOf(...))` | `addDoc(collection, {...})` | `addDoc(collection, {...})` |
| **Ler todos** | `colecao.get().await()` | `getDocs(query)` | `getDocs(query)` |
| **Tempo real** | `.addSnapshotListener {}` | `onSnapshot(query, cb)` | `onSnapshot(query, cb)` |
| **Filtrar** | `.whereEqualTo("campo", valor)` | `where("campo", "==", valor)` | `where("campo", "==", valor)` |
| **Ordenar** | `.orderBy("campo", Direction.DESC)` | `orderBy("campo", "desc")` | `orderBy("campo", "desc")` |
| **Atualizar** | `doc.update(mapOf(...)).await()` | `updateDoc(ref, {...})` | `updateDoc(ref, {...})` |
| **Deletar** | `doc.delete().await()` | `deleteDoc(ref)` | `deleteDoc(ref)` |
| **Auth login** | `auth.signInWithEmailAndPassword()` | `signInWithEmailAndPassword()` | `signInWithEmailAndPassword()` |
| **Auth registro** | `auth.createUserWithEmailAndPassword()` | `createUserWithEmailAndPassword()` | `createUserWithEmailAndPassword()` |
| **Async/Await** | `suspend fun` + `.await()` | `async/await` nativo | `async/await` nativo |

---

## 💡 Destaque Pedagógico

### Firebase é QUASE IDÊNTICO em todas as plataformas!

```
┌───────────────────────────────────────────────────────────┐
│           MESMO CÓDIGO, PLATAFORMAS DIFERENTES            │
├───────────────────────────────────────────────────────────┤
│                                                           │
│   ANDROID (Kotlin):                                       │
│     db.collection("produtos")                             │
│       .whereEqualTo("categoria", "Eletrônicos")           │
│       .orderBy("criadoEm", Query.Direction.DESCENDING)    │
│       .get().await()                                      │
│                                                           │
│   REACT NATIVE / WEB (TypeScript):                        │
│     const q = query(                                      │
│       collection(db, "produtos"),                         │
│       where("categoria", "==", "Eletrônicos"),            │
│       orderBy("criadoEm", "desc")                         │
│     );                                                    │
│     const snapshot = await getDocs(q);                    │
│                                                           │
│   ✅ MESMA QUERY — sintaxe levemente diferente!          │
└───────────────────────────────────────────────────────────┘
```

### O que REALMENTE muda entre plataformas:

| Aspecto | O que muda |
|---------|-----------|
| **Setup** | Android usa `google-services.json`, Web/RN usa objeto JS |
| **Imports** | Android importa do SDK Java/Kotlin, Web/RN do pacote npm |
| **Async** | Android usa `suspend` + `await()`, JS usa `async/await` |
| **Tipagem** | Kotlin é estática, TypeScript é estática, JS é dinâmica |
| **Queries** | Encadeamento no Android, composição funcional no JS |

### O que NÃO muda:

- Estrutura do Firestore (coleções → documentos → campos)
- Nomes dos métodos (add, get, update, delete, onSnapshot)
- Modelo de dados (JSON/Map)
- Regras de segurança (Firebase Rules — independem do client)
- Console de administração

---

## 🚀 Guia de Execução

### Configuração do Firebase (TODAS as plataformas)

```bash
# 1. Acesse: https://console.firebase.google.com
# 2. Crie um projeto novo (ex: "ete-produtos")
# 3. Ative Firestore Database (modo teste)
# 4. Ative Authentication → Email/Senha
# 5. Registre seu app (Android, Web ou ambos)
```

### Android Nativo

```bash
# No Android Studio:
# 1. Tools → Firebase → Firestore → Connect
# 2. Baixar google-services.json para app/
# 3. Adicionar no build.gradle (project):
#    classpath 'com.google.gms:google-services:4.4.0'
# 4. Adicionar no build.gradle (app):
#    implementation 'com.google.firebase:firebase-firestore-ktx:24.9.0'
#    implementation 'com.google.firebase:firebase-auth-ktx:22.3.0'

# Rodar: Shift + F10
```

### Expo/React Native

```bash
# Criar projeto
npx create-expo-app produtos-firebase --template blank-typescript
cd produtos-firebase

# Instalar Firebase
npm install firebase

# Copiar configuração do Firebase Console → Configurações do projeto → Web app
# Colar em firebaseConfig.ts

# Rodar
npx expo start
```

### Web com Vite

```bash
# Criar projeto
npm create vite@latest produtos-web -- --template vanilla-ts
cd produtos-web

# Instalar Firebase
npm install firebase

# Copiar configuração do Firebase Console
# Colar em src/firebase.ts

# Rodar
npm run dev
```

---

## 🏁 Conclusão

O **Firebase Firestore** foi projetado para ser **multiplataforma por natureza**:
- A API do Kotlin (Android) segue o mesmo padrão conceitual
- O SDK JavaScript é **literalmente o mesmo** para Web e React Native
- As queries, listeners e operações CRUD são idênticas em conceito

A diferença está apenas em:
- Como você **configura** (google-services.json vs objeto JS)
- Como você **importa** (SDK Kotlin vs pacote npm)
- Como você **lida com async** (coroutines vs promises)

> *"O Firebase não se importa com sua plataforma. Ele se importa com seus dados."*
> — Profª Luana Cristina, ETE Pernambuco
