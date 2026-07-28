# 🔄 Multi-Stack: A Mesma Aplicação Desktop/Mobile em Diferentes Frameworks

**ETE Pernambuco — Profª Luana Cristina**  
**Disciplina:** Programação Python Desktop  
**Objetivo Pedagógico:** Demonstrar que a arquitetura (Repository → Service → UI) é universal — o framework de interface muda, mas o fluxo de dados é idêntico.

---

## 🎯 O Problema: Sistema de Gestão de Biblioteca

Desenvolver um sistema completo de gestão de livros com:

1. **Interface gráfica** (formulário + tabela/lista de resultados)
2. **CRUD completo** (Cadastrar, Listar, Editar, Excluir livros)
3. **Conexão com PostgreSQL** para persistência
4. **Arquitetura em camadas** (separar UI, lógica e acesso a dados)

Campos do livro: título, autor, ISBN, ano de publicação, gênero

**Padrão arquitetural aplicado em TODAS as implementações:**
```
┌─────────┐     ┌──────────┐     ┌──────────────┐     ┌────────────┐
│   UI    │ ──► │ Service  │ ──► │ Repository   │ ──► │ PostgreSQL │
│(Tela)   │ ◄── │ (Lógica) │ ◄── │ (SQL/Dados)  │ ◄── │   (Banco)  │
└─────────┘     └──────────┘     └──────────────┘     └────────────┘
```

---

## 🗄️ Setup do Banco de Dados (Igual para TODAS as implementações)

```sql
-- Criação do banco de dados
CREATE DATABASE biblioteca_db;

\c biblioteca_db;

-- Tabela de livros
CREATE TABLE livros (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(200) NOT NULL,
    autor VARCHAR(150) NOT NULL,
    isbn VARCHAR(13) UNIQUE,
    ano_publicacao INTEGER,
    genero VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);

-- Dados de exemplo
INSERT INTO livros (titulo, autor, isbn, ano_publicacao, genero) VALUES
('Dom Casmurro', 'Machado de Assis', '9788535910663', 1899, 'Romance'),
('O Cortiço', 'Aluísio Azevedo', '9788572326926', 1890, 'Naturalismo'),
('Vidas Secas', 'Graciliano Ramos', '9788501005588', 1938, 'Romance'),
('Grande Sertão: Veredas', 'Guimarães Rosa', '9788520923115', 1956, 'Romance'),
('Capitães da Areia', 'Jorge Amado', '9788535914061', 1937, 'Romance');
```

---

## 📱 Implementação 1: Expo/React Native (Mobile)

### Camada UI + Service (App Mobile)

```tsx
// App.tsx - Sistema de Biblioteca (Expo/React Native)
// ETE Pernambuco - Profª Luana Cristina
// Arquitetura: UI → Service (fetch) → API → Repository → PostgreSQL

import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Alert, StyleSheet, ScrollView
} from 'react-native';

// ====== CAMADA DE TIPOS (Model) ======
interface Livro {
  id: number;
  titulo: string;
  autor: string;
  isbn: string;
  ano_publicacao: number;
  genero: string;
}

// ====== CAMADA DE SERVIÇO (Service) ======
// Responsável pela comunicação com a API
const API_URL = 'http://localhost:5000/api/livros';

const livroService = {
  // READ - Buscar todos os livros
  async listar(): Promise<Livro[]> {
    const resp = await fetch(API_URL);
    return resp.json();
  },

  // READ - Buscar por título
  async buscar(titulo: string): Promise<Livro[]> {
    const resp = await fetch(`${API_URL}?titulo=${titulo}`);
    return resp.json();
  },

  // CREATE - Cadastrar novo livro
  async criar(livro: Omit<Livro, 'id'>): Promise<Livro> {
    const resp = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
    return resp.json();
  },

  // UPDATE - Atualizar livro
  async atualizar(id: number, livro: Partial<Livro>): Promise<Livro> {
    const resp = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro)
    });
    return resp.json();
  },

  // DELETE - Excluir livro
  async excluir(id: number): Promise<void> {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
  }
};

// ====== CAMADA DE UI (Interface) ======
export default function App() {
  // Estado da aplicação (gerenciamento de estado)
  const [livros, setLivros] = useState<Livro[]>([]);
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [ano, setAno] = useState('');
  const [genero, setGenero] = useState('');
  const [busca, setBusca] = useState('');
  const [editandoId, setEditandoId] = useState<number | null>(null);

  // Carrega livros ao iniciar (equivalente ao onMount)
  useEffect(() => {
    carregarLivros();
  }, []);

  async function carregarLivros() {
    const dados = await livroService.listar();
    setLivros(dados);
  }

  async function buscarLivros() {
    const dados = await livroService.buscar(busca);
    setLivros(dados);
  }

  // Validação do formulário
  function validarFormulario(): boolean {
    if (!titulo.trim() || !autor.trim()) {
      Alert.alert('Erro', 'Título e Autor são obrigatórios!');
      return false;
    }
    return true;
  }

  async function salvarLivro() {
    if (!validarFormulario()) return;

    const dadosLivro = {
      titulo, autor, isbn,
      ano_publicacao: parseInt(ano) || 0,
      genero
    };

    if (editandoId) {
      await livroService.atualizar(editandoId, dadosLivro);
      Alert.alert('Sucesso', 'Livro atualizado!');
    } else {
      await livroService.criar(dadosLivro);
      Alert.alert('Sucesso', 'Livro cadastrado!');
    }

    limparFormulario();
    carregarLivros();
  }

  function editarLivro(livro: Livro) {
    setEditandoId(livro.id);
    setTitulo(livro.titulo);
    setAutor(livro.autor);
    setIsbn(livro.isbn);
    setAno(String(livro.ano_publicacao));
    setGenero(livro.genero);
  }

  async function excluirLivro(id: number) {
    Alert.alert('Confirmar', 'Deseja excluir este livro?', [
      { text: 'Cancelar' },
      { text: 'Excluir', onPress: async () => {
        await livroService.excluir(id);
        carregarLivros();
      }}
    ]);
  }

  function limparFormulario() {
    setTitulo(''); setAutor(''); setIsbn('');
    setAno(''); setGenero(''); setEditandoId(null);
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.titulo}>📚 Gestão de Biblioteca</Text>

      {/* Formulário (equivalente à janela/form) */}
      <View style={styles.form}>
        <TextInput style={styles.input} placeholder="Título *" value={titulo} onChangeText={setTitulo} />
        <TextInput style={styles.input} placeholder="Autor *" value={autor} onChangeText={setAutor} />
        <TextInput style={styles.input} placeholder="ISBN" value={isbn} onChangeText={setIsbn} />
        <TextInput style={styles.input} placeholder="Ano" value={ano} onChangeText={setAno} keyboardType="numeric" />
        <TextInput style={styles.input} placeholder="Gênero" value={genero} onChangeText={setGenero} />
        
        <TouchableOpacity style={styles.btnSalvar} onPress={salvarLivro}>
          <Text style={styles.btnTexto}>{editandoId ? '✏️ Atualizar' : '➕ Cadastrar'}</Text>
        </TouchableOpacity>
      </View>

      {/* Busca */}
      <View style={styles.buscaContainer}>
        <TextInput style={styles.input} placeholder="Buscar por título..." value={busca} onChangeText={setBusca} />
        <TouchableOpacity style={styles.btnBusca} onPress={buscarLivros}>
          <Text style={styles.btnTexto}>🔍 Buscar</Text>
        </TouchableOpacity>
      </View>

      {/* Lista de livros (equivalente à tabela/Treeview) */}
      <FlatList
        data={livros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitulo}>{item.titulo}</Text>
            <Text>Autor: {item.autor}</Text>
            <Text>ISBN: {item.isbn} | Ano: {item.ano_publicacao}</Text>
            <Text>Gênero: {item.genero}</Text>
            <View style={styles.cardAcoes}>
              <TouchableOpacity onPress={() => editarLivro(item)}>
                <Text style={styles.btnEditar}>✏️ Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => excluirLivro(item.id)}>
                <Text style={styles.btnExcluir}>🗑️ Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f9fa' },
  titulo: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#2c3e50' },
  form: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 3 },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, marginBottom: 10, borderRadius: 8 },
  btnSalvar: { backgroundColor: '#27ae60', padding: 15, borderRadius: 8 },
  btnBusca: { backgroundColor: '#3498db', padding: 15, borderRadius: 8 },
  btnTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },
  buscaContainer: { marginBottom: 20 },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 10, elevation: 2 },
  cardTitulo: { fontSize: 18, fontWeight: 'bold', color: '#2c3e50' },
  cardAcoes: { flexDirection: 'row', marginTop: 10, gap: 15 },
  btnEditar: { color: '#3498db', fontWeight: 'bold' },
  btnExcluir: { color: '#e74c3c', fontWeight: 'bold' }
});
```

---

## 🌐 Implementação 2: Web Tradicional (HTML + Flask + psycopg2)

### Frontend — HTML + CSS + JavaScript

```html
<!-- index.html - Sistema de Biblioteca (Web Tradicional) -->
<!-- ETE Pernambuco - Profª Luana Cristina -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>📚 Sistema de Biblioteca</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: 'Segoe UI', sans-serif; background: #1a1a2e; color: #eee; padding: 20px; }
        .container { max-width: 900px; margin: 0 auto; }
        h1 { text-align: center; margin-bottom: 30px; color: #e94560; }
        .form-card { background: #16213e; padding: 25px; border-radius: 12px; margin-bottom: 25px; }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
        .form-group { display: flex; flex-direction: column; }
        .form-group.full { grid-column: 1 / -1; }
        label { margin-bottom: 5px; color: #a8dadc; font-size: 14px; }
        input, select { padding: 10px; border: 1px solid #0f3460; border-radius: 6px; 
                       background: #0f3460; color: #eee; font-size: 14px; }
        .btn { padding: 12px 24px; border: none; border-radius: 6px; cursor: pointer; 
               font-weight: bold; font-size: 14px; transition: opacity 0.3s; }
        .btn:hover { opacity: 0.8; }
        .btn-cadastrar { background: #e94560; color: white; }
        .btn-buscar { background: #0f3460; color: white; }
        .btn-editar { background: #f59e0b; color: #000; font-size: 12px; padding: 6px 12px; }
        .btn-excluir { background: #ef4444; color: white; font-size: 12px; padding: 6px 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th { background: #e94560; color: white; padding: 12px; text-align: left; }
        td { padding: 10px; border-bottom: 1px solid #16213e; }
        tr:hover { background: #16213e; }
        .busca-container { display: flex; gap: 10px; margin-bottom: 20px; }
        .busca-container input { flex: 1; }
    </style>
</head>
<body>
    <div class="container">
        <h1>📚 Sistema de Gestão de Biblioteca</h1>

        <!-- Formulário de cadastro/edição (equivalente à janela Tkinter) -->
        <div class="form-card">
            <form id="formLivro">
                <input type="hidden" id="livroId">
                <div class="form-grid">
                    <div class="form-group full">
                        <label>Título *</label>
                        <input type="text" id="titulo" required>
                    </div>
                    <div class="form-group">
                        <label>Autor *</label>
                        <input type="text" id="autor" required>
                    </div>
                    <div class="form-group">
                        <label>ISBN</label>
                        <input type="text" id="isbn" maxlength="13">
                    </div>
                    <div class="form-group">
                        <label>Ano de Publicação</label>
                        <input type="number" id="ano" min="1000" max="2030">
                    </div>
                    <div class="form-group">
                        <label>Gênero</label>
                        <select id="genero">
                            <option value="">Selecione...</option>
                            <option>Romance</option>
                            <option>Ficção</option>
                            <option>Poesia</option>
                            <option>Naturalismo</option>
                            <option>Técnico</option>
                        </select>
                    </div>
                </div>
                <br>
                <button type="submit" class="btn btn-cadastrar" id="btnSubmit">➕ Cadastrar Livro</button>
            </form>
        </div>

        <!-- Busca -->
        <div class="busca-container">
            <input type="text" id="campoBusca" placeholder="Buscar por título ou autor...">
            <button class="btn btn-buscar" onclick="buscarLivros()">🔍 Buscar</button>
            <button class="btn btn-buscar" onclick="carregarLivros()">📋 Todos</button>
        </div>

        <!-- Tabela de livros (equivalente ao Treeview do Tkinter) -->
        <table>
            <thead>
                <tr><th>ID</th><th>Título</th><th>Autor</th><th>ISBN</th><th>Ano</th><th>Gênero</th><th>Ações</th></tr>
            </thead>
            <tbody id="tabelaLivros"></tbody>
        </table>
    </div>

    <script>
        // Camada de Serviço (Service) - JavaScript frontend
        const API = 'http://localhost:5000/api/livros';

        document.addEventListener('DOMContentLoaded', carregarLivros);

        // READ - Listar todos os livros
        async function carregarLivros() {
            const resp = await fetch(API);
            const livros = await resp.json();
            renderizarTabela(livros);
        }

        // READ com filtro
        async function buscarLivros() {
            const termo = document.getElementById('campoBusca').value;
            const resp = await fetch(`${API}?busca=${termo}`);
            const livros = await resp.json();
            renderizarTabela(livros);
        }

        // CREATE / UPDATE - Salvar livro
        document.getElementById('formLivro').addEventListener('submit', async (e) => {
            e.preventDefault();
            const id = document.getElementById('livroId').value;
            const dados = {
                titulo: document.getElementById('titulo').value,
                autor: document.getElementById('autor').value,
                isbn: document.getElementById('isbn').value,
                ano_publicacao: parseInt(document.getElementById('ano').value) || null,
                genero: document.getElementById('genero').value
            };

            // Validação (mesma lógica em todas as stacks)
            if (!dados.titulo || !dados.autor) {
                alert('Título e Autor são obrigatórios!');
                return;
            }

            if (id) {
                // UPDATE
                await fetch(`${API}/${id}`, {
                    method: 'PUT',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                });
            } else {
                // CREATE
                await fetch(API, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(dados)
                });
            }
            limparFormulario();
            carregarLivros();
        });

        // Preencher formulário para edição
        function editarLivro(livro) {
            document.getElementById('livroId').value = livro.id;
            document.getElementById('titulo').value = livro.titulo;
            document.getElementById('autor').value = livro.autor;
            document.getElementById('isbn').value = livro.isbn || '';
            document.getElementById('ano').value = livro.ano_publicacao || '';
            document.getElementById('genero').value = livro.genero || '';
            document.getElementById('btnSubmit').textContent = '✏️ Atualizar Livro';
        }

        // DELETE - Excluir livro
        async function excluirLivro(id) {
            if (confirm('Deseja realmente excluir este livro?')) {
                await fetch(`${API}/${id}`, { method: 'DELETE' });
                carregarLivros();
            }
        }

        function limparFormulario() {
            document.getElementById('formLivro').reset();
            document.getElementById('livroId').value = '';
            document.getElementById('btnSubmit').textContent = '➕ Cadastrar Livro';
        }

        // Renderizar a tabela (equivalente ao atualizar Treeview)
        function renderizarTabela(livros) {
            const tbody = document.getElementById('tabelaLivros');
            tbody.innerHTML = livros.map(l => `
                <tr>
                    <td>${l.id}</td>
                    <td>${l.titulo}</td>
                    <td>${l.autor}</td>
                    <td>${l.isbn || '-'}</td>
                    <td>${l.ano_publicacao || '-'}</td>
                    <td>${l.genero || '-'}</td>
                    <td>
                        <button class="btn btn-editar" onclick='editarLivro(${JSON.stringify(l)})'>✏️</button>
                        <button class="btn btn-excluir" onclick="excluirLivro(${l.id})">🗑️</button>
                    </td>
                </tr>
            `).join('');
        }
    </script>
</body>
</html>
```

### Backend — Python Flask + psycopg2 (Repository + Service)

```python
# app.py - API REST para o Sistema de Biblioteca
# ETE Pernambuco - Profª Luana Cristina
# Arquitetura: Route → Service → Repository → PostgreSQL

from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)

# ====== CAMADA DE CONFIGURAÇÃO ======
DB_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'database': 'biblioteca_db',
    'user': 'postgres',
    'password': 'postgres'
}

def get_connection():
    """Cria conexão com o banco (equivalente ao Pool do Node.js)."""
    return psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)

# ====== CAMADA REPOSITORY (Acesso a Dados) ======
class LivroRepository:
    """Responsável APENAS pelo SQL. Mesmas queries em todas as stacks."""
    
    @staticmethod
    def find_all():
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT * FROM livros ORDER BY titulo")
        livros = cur.fetchall()
        cur.close(); conn.close()
        return livros
    
    @staticmethod
    def find_by_busca(termo):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "SELECT * FROM livros WHERE titulo ILIKE %s OR autor ILIKE %s ORDER BY titulo",
            (f'%{termo}%', f'%{termo}%')
        )
        livros = cur.fetchall()
        cur.close(); conn.close()
        return livros
    
    @staticmethod
    def create(dados):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            """INSERT INTO livros (titulo, autor, isbn, ano_publicacao, genero)
               VALUES (%s, %s, %s, %s, %s) RETURNING *""",
            (dados['titulo'], dados['autor'], dados['isbn'],
             dados['ano_publicacao'], dados['genero'])
        )
        livro = cur.fetchone()
        conn.commit(); cur.close(); conn.close()
        return livro
    
    @staticmethod
    def update(id, dados):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            """UPDATE livros SET titulo=%s, autor=%s, isbn=%s, 
               ano_publicacao=%s, genero=%s WHERE id=%s RETURNING *""",
            (dados['titulo'], dados['autor'], dados['isbn'],
             dados['ano_publicacao'], dados['genero'], id)
        )
        livro = cur.fetchone()
        conn.commit(); cur.close(); conn.close()
        return livro
    
    @staticmethod
    def delete(id):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("DELETE FROM livros WHERE id = %s", (id,))
        conn.commit(); cur.close(); conn.close()


# ====== CAMADA SERVICE (Lógica de Negócio) ======
class LivroService:
    """Regras de negócio e validações (mesma lógica em todas as stacks)."""
    
    @staticmethod
    def validar(dados):
        """Validação: título e autor são obrigatórios."""
        erros = []
        if not dados.get('titulo', '').strip():
            erros.append('Título é obrigatório')
        if not dados.get('autor', '').strip():
            erros.append('Autor é obrigatório')
        return erros

# ====== CAMADA DE ROTAS (Controller) ======
@app.route('/api/livros', methods=['GET'])
def listar_livros():
    busca = request.args.get('busca', '')
    if busca:
        return jsonify(LivroRepository.find_by_busca(busca))
    return jsonify(LivroRepository.find_all())

@app.route('/api/livros', methods=['POST'])
def criar_livro():
    dados = request.get_json()
    erros = LivroService.validar(dados)
    if erros:
        return jsonify({'erros': erros}), 400
    livro = LivroRepository.create(dados)
    return jsonify(livro), 201

@app.route('/api/livros/<int:id>', methods=['PUT'])
def atualizar_livro(id):
    dados = request.get_json()
    erros = LivroService.validar(dados)
    if erros:
        return jsonify({'erros': erros}), 400
    livro = LivroRepository.update(id, dados)
    return jsonify(livro)

@app.route('/api/livros/<int:id>', methods=['DELETE'])
def excluir_livro(id):
    LivroRepository.delete(id)
    return jsonify({'mensagem': 'Livro excluído com sucesso'})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

---

## 🔷 Implementação 3: React + TypeScript + Express API

### Backend — Express + pg (TypeScript)

```typescript
// server.ts - API REST para Biblioteca (TypeScript + Express + pg)
// ETE Pernambuco - Profª Luana Cristina
// Mesma arquitetura: Route → Service → Repository → PostgreSQL

import express, { Request, Response } from 'express';
import { Pool, QueryResult } from 'pg';
import cors from 'cors';

// ====== CAMADA DE TIPOS (Model) ======
interface Livro {
    id: number;
    titulo: string;
    autor: string;
    isbn: string;
    ano_publicacao: number;
    genero: string;
    created_at: string;
}

interface LivroInput {
    titulo: string;
    autor: string;
    isbn?: string;
    ano_publicacao?: number;
    genero?: string;
}

// ====== CONFIGURAÇÃO ======
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));  // Serve o frontend React

const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'biblioteca_db',
    user: 'postgres',
    password: 'postgres'
});

// ====== CAMADA REPOSITORY (Acesso a Dados) ======
// Mesmo SQL do Python! Apenas a sintaxe de parâmetros muda (%s → $1)
class LivroRepository {
    static async findAll(): Promise<Livro[]> {
        const result = await pool.query<Livro>(
            'SELECT * FROM livros ORDER BY titulo'
        );
        return result.rows;
    }

    static async findByBusca(termo: string): Promise<Livro[]> {
        const result = await pool.query<Livro>(
            'SELECT * FROM livros WHERE titulo ILIKE $1 OR autor ILIKE $1 ORDER BY titulo',
            [`%${termo}%`]
        );
        return result.rows;
    }

    static async create(dados: LivroInput): Promise<Livro> {
        const result = await pool.query<Livro>(
            `INSERT INTO livros (titulo, autor, isbn, ano_publicacao, genero)
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [dados.titulo, dados.autor, dados.isbn, dados.ano_publicacao, dados.genero]
        );
        return result.rows[0];
    }

    static async update(id: number, dados: LivroInput): Promise<Livro> {
        const result = await pool.query<Livro>(
            `UPDATE livros SET titulo=$1, autor=$2, isbn=$3, 
             ano_publicacao=$4, genero=$5 WHERE id=$6 RETURNING *`,
            [dados.titulo, dados.autor, dados.isbn, dados.ano_publicacao, dados.genero, id]
        );
        return result.rows[0];
    }

    static async delete(id: number): Promise<void> {
        await pool.query('DELETE FROM livros WHERE id = $1', [id]);
    }
}

// ====== CAMADA SERVICE (Lógica de Negócio) ======
class LivroService {
    static validar(dados: LivroInput): string[] {
        const erros: string[] = [];
        if (!dados.titulo?.trim()) erros.push('Título é obrigatório');
        if (!dados.autor?.trim()) erros.push('Autor é obrigatório');
        return erros;
    }
}

// ====== CAMADA DE ROTAS (Controller) ======
app.get('/api/livros', async (req: Request, res: Response) => {
    const busca = req.query.busca as string;
    const livros = busca
        ? await LivroRepository.findByBusca(busca)
        : await LivroRepository.findAll();
    res.json(livros);
});

app.post('/api/livros', async (req: Request, res: Response) => {
    const dados: LivroInput = req.body;
    const erros = LivroService.validar(dados);
    if (erros.length > 0) {
        res.status(400).json({ erros });
        return;
    }
    const livro = await LivroRepository.create(dados);
    res.status(201).json(livro);
});

app.put('/api/livros/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const dados: LivroInput = req.body;
    const erros = LivroService.validar(dados);
    if (erros.length > 0) {
        res.status(400).json({ erros });
        return;
    }
    const livro = await LivroRepository.update(id, dados);
    res.json(livro);
});

app.delete('/api/livros/:id', async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    await LivroRepository.delete(id);
    res.json({ mensagem: 'Livro excluído com sucesso' });
});

// Iniciar servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`📚 Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 📊 Tabela Comparativa: Mesma Arquitetura, Diferentes Frameworks

| Conceito | Python/Tkinter | HTML+Flask | React Native/Expo | React+TypeScript |
|----------|---------------|------------|-------------------|------------------|
| **Janela/Tela** | `Tk()` | `<body>` | `<View>` | `<div>` |
| **Campo de texto** | `Entry()` | `<input type="text">` | `<TextInput>` | `<input>` |
| **Botão + ação** | `Button(command=fn)` | `<button onclick="fn()">` | `<TouchableOpacity onPress={fn}>` | `<button onClick={fn}>` |
| **Lista/Tabela** | `Treeview()` | `<table>` | `<FlatList>` | `<table>` ou map() |
| **Estado** | Variáveis globais | Variáveis JS | `useState()` | `useState()` |
| **Chamada API** | `requests.get()` | `fetch()` | `fetch()` | `fetch()` |
| **Validação** | `if not campo:` | `if (!campo)` | `if (!campo.trim())` | `if (!campo?.trim())` |
| **Alerta/Mensagem** | `messagebox.showinfo()` | `alert()` | `Alert.alert()` | `window.alert()` |
| **Loop na lista** | `for item in lista:` | `.map(item => ...)` | `FlatList data={lista}` | `livros.map(l => ...)` |
| **Evento formulário** | `command=salvar` | `onsubmit="salvar()"` | `onPress={salvar}` | `onSubmit={salvar}` |
| **Estilização** | `ttk.Style()` | CSS classes | `StyleSheet.create()` | CSS/Tailwind |
| **Repository** | Classe com SQL | Classe com SQL | fetch → API | Classe com SQL |
| **Service** | Classe com regras | Classe com regras | Validação local | Classe com regras |

---

## 💡 Destaque Pedagógico

> **"A arquitetura é a mesma. O framework é apenas o 'pincel' — a 'pintura' (lógica) não muda."**
>
> Observe nas 3 implementações:
> - A **arquitetura em camadas** (Repository → Service → UI) é IDÊNTICA
> - O **fluxo de dados** segue o mesmo padrão: formulário → validação → API → banco
> - As **operações CRUD** usam exatamente o mesmo SQL
> - A **validação** aplica as mesmas regras ("título obrigatório")
> - O **gerenciamento de estado** (dados na tela) funciona igual
>
> Se você entende a ARQUITETURA de uma aplicação, consegue construí-la em qualquer framework.
> O React Native, Flask e Express são apenas ferramentas — a ENGENHARIA é universal.
>
> — Profª Luana Cristina, ETE Pernambuco

---

## 🚀 Guia de Execução Passo a Passo

### Pré-requisito: PostgreSQL

```bash
# Criar o banco e a tabela
psql -U postgres -c "CREATE DATABASE biblioteca_db;"
psql -U postgres -d biblioteca_db -f setup.sql
```

### Expo/React Native (Mobile)

```bash
# 1. Criar o projeto
npx create-expo-app biblioteca-app --template blank-typescript
cd biblioteca-app

# 2. Substituir App.tsx pelo código do Expo acima

# 3. Iniciar o backend (Python ou TypeScript) PRIMEIRO
# Em outro terminal, execute o backend (ver abaixo)

# 4. Iniciar o app Expo
npx expo start

# 5. Testar:
# - Pressione 'a' para abrir no emulador Android
# - Escaneie o QR code com o app Expo Go no celular
# - Pressione 'w' para abrir no navegador (web)
```

### Web Tradicional (Python Flask)

```bash
# 1. Criar a pasta do projeto
mkdir biblioteca-flask && cd biblioteca-flask

# 2. Criar ambiente virtual Python
python -m venv venv
source venv/bin/activate     # Linux/Mac
# venv\Scripts\activate      # Windows

# 3. Instalar dependências
pip install flask flask-cors psycopg2-binary

# 4. Salvar os arquivos:
# - app.py (código Python acima)
# - Criar pasta: mkdir templates
# - index.html (código HTML acima) em templates/

# 5. Executar o servidor
python app.py
# Servidor rodando em http://localhost:5000

# 6. Abrir no navegador: http://localhost:5000
# Ou abrir o index.html diretamente
```

### React + TypeScript + Express

```bash
# 1. Criar o projeto backend
mkdir biblioteca-ts && cd biblioteca-ts
npm init -y

# 2. Instalar dependências
npm install express pg cors
npm install -D typescript ts-node @types/express @types/pg @types/cors @types/node

# 3. Configurar TypeScript
npx tsc --init --target ES2020 --module commonjs --outDir ./dist --strict

# 4. Salvar server.ts (código TypeScript acima)

# 5. Criar pasta para o frontend
mkdir public
# Salvar o index.html na pasta public/
# (Express serve arquivos estáticos de public/)

# 6. Adicionar script ao package.json:
# "scripts": { "dev": "npx ts-node server.ts" }

# 7. Executar
npx ts-node server.ts
# Servidor rodando em http://localhost:5000

# 8. Abrir no navegador: http://localhost:5000
```

---

## 📌 Resumo da Arquitetura em Camadas

```
┌──────────────────────────────────────────────────────────────────┐
│                        MESMA ARQUITETURA                          │
├─────────────┬──────────────────┬──────────────────┬──────────────┤
│   Camada    │  Python/Flask    │  React Native    │  TypeScript  │
├─────────────┼──────────────────┼──────────────────┼──────────────┤
│ UI          │ HTML + JS        │ Components JSX   │ HTML ou React│
│ Service     │ LivroService     │ livroService obj │ LivroService │
│ Repository  │ LivroRepository  │ fetch → API      │ LivroRepo    │
│ Database    │ psycopg2 → PG    │ (via backend)    │ pg → PG      │
└─────────────┴──────────────────┴──────────────────┴──────────────┘
```

A separação em camadas garante que:
- **Trocar o banco** (PostgreSQL → MySQL) afeta APENAS o Repository
- **Trocar a UI** (Web → Mobile) afeta APENAS a camada de interface
- **Trocar a linguagem** afeta a sintaxe, mas NÃO a lógica

---

*Material de apoio — ETE Pernambuco — Desenvolvimento de Sistemas*  
*Profª Luana Cristina — Programação Python Desktop*
