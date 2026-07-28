# 🔄 Multi-Stack: O Mesmo Banco de Dados, Diferentes Linguagens de Acesso

**ETE Pernambuco — Profª Luana Cristina**  
**Disciplina:** Administração de Bancos de Dados  
**Objetivo Pedagógico:** Demonstrar que o SQL é universal — a conexão e o driver mudam, mas as queries são idênticas.

---

## 🎯 O Problema: CRUD de Pacientes de uma Clínica

Desenvolver um sistema completo de gerenciamento de pacientes com as seguintes operações:

1. **CREATE** — Cadastrar novo paciente (nome, CPF, telefone, data de nascimento)
2. **READ** — Listar pacientes com filtros (buscar por nome, CPF)
3. **UPDATE** — Atualizar dados do paciente
4. **DELETE** — Remover paciente do sistema

**Regra fundamental:** O SQL é EXATAMENTE o mesmo, independente da linguagem que acessa o banco.

---

## 🗄️ Setup do Banco de Dados (Igual para TODAS as implementações)

```sql
-- Criação do banco de dados
CREATE DATABASE clinica_db;

-- Conectar ao banco
\c clinica_db;

-- Criação da tabela de pacientes
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,              -- Chave primária auto-incremento
    nome VARCHAR(100) NOT NULL,         -- Nome obrigatório
    cpf VARCHAR(14) UNIQUE NOT NULL,    -- CPF único e obrigatório
    telefone VARCHAR(15),               -- Telefone opcional
    data_nascimento DATE,               -- Data de nascimento
    created_at TIMESTAMP DEFAULT NOW()  -- Data de criação automática
);

-- Inserir dados de exemplo
INSERT INTO pacientes (nome, cpf, telefone, data_nascimento) VALUES
('Maria Silva', '123.456.789-00', '(81) 99999-1234', '1990-05-15'),
('João Santos', '987.654.321-00', '(81) 98888-5678', '1985-10-20'),
('Ana Oliveira', '456.789.123-00', '(81) 97777-9012', '2000-03-08');

-- As queries SQL usadas em TODAS as linguagens:
-- SELECT * FROM pacientes WHERE nome ILIKE '%busca%';
-- INSERT INTO pacientes (nome, cpf, telefone, data_nascimento) VALUES ($1, $2, $3, $4);
-- UPDATE pacientes SET nome=$1, telefone=$2 WHERE id=$3;
-- DELETE FROM pacientes WHERE id=$1;
```

---

## 📱 Implementação 1: Expo/React Native (Mobile — usando fetch para API)

```tsx
// App.tsx - Sistema de Pacientes (Expo/React Native)
// ETE Pernambuco - Profª Luana Cristina
// O app mobile consome uma API REST que acessa o PostgreSQL

import React, { useState, useEffect } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  FlatList, Alert, StyleSheet
} from 'react-native';

// Definição do tipo Paciente
interface Paciente {
  id: number;
  nome: string;
  cpf: string;
  telefone: string;
  data_nascimento: string;
}

// URL base da API (Python ou TypeScript backend)
const API_URL = 'http://localhost:5000/api/pacientes';

export default function App() {
  // Estado do componente (equivalente às variáveis do sistema)
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [busca, setBusca] = useState('');

  // Carrega pacientes ao iniciar (equivalente ao SELECT)
  useEffect(() => {
    carregarPacientes();
  }, []);

  // READ - Buscar todos os pacientes (SELECT * FROM pacientes)
  async function carregarPacientes() {
    try {
      const resposta = await fetch(API_URL);
      const dados = await resposta.json();
      setPacientes(dados);
    } catch (erro) {
      Alert.alert('Erro', 'Não foi possível carregar os pacientes');
    }
  }

  // READ com filtro - Buscar por nome (SELECT WHERE nome ILIKE)
  async function buscarPaciente() {
    try {
      const resposta = await fetch(`${API_URL}?nome=${busca}`);
      const dados = await resposta.json();
      setPacientes(dados);
    } catch (erro) {
      Alert.alert('Erro', 'Falha na busca');
    }
  }

  // CREATE - Cadastrar novo paciente (INSERT INTO pacientes)
  async function cadastrarPaciente() {
    try {
      const resposta = await fetch(API_URL, {
        method: 'POST',  // Método HTTP para criação
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome, cpf, telefone,
          data_nascimento: dataNasc
        })
      });

      if (resposta.ok) {
        Alert.alert('Sucesso', 'Paciente cadastrado!');
        limparFormulario();
        carregarPacientes();  // Atualiza a lista
      }
    } catch (erro) {
      Alert.alert('Erro', 'Falha ao cadastrar');
    }
  }

  // DELETE - Remover paciente (DELETE FROM pacientes WHERE id=$1)
  async function excluirPaciente(id: number) {
    try {
      await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
      carregarPacientes();  // Atualiza a lista após exclusão
    } catch (erro) {
      Alert.alert('Erro', 'Falha ao excluir');
    }
  }

  function limparFormulario() {
    setNome(''); setCpf(''); setTelefone(''); setDataNasc('');
  }

  // Interface visual (UI)
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>🏥 Clínica - Pacientes</Text>

      {/* Formulário de cadastro */}
      <TextInput style={styles.input} placeholder="Nome" value={nome} onChangeText={setNome} />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="Data Nasc. (AAAA-MM-DD)" value={dataNasc} onChangeText={setDataNasc} />
      
      <TouchableOpacity style={styles.botao} onPress={cadastrarPaciente}>
        <Text style={styles.botaoTexto}>Cadastrar Paciente</Text>
      </TouchableOpacity>

      {/* Campo de busca */}
      <TextInput style={styles.input} placeholder="Buscar por nome..." value={busca} onChangeText={setBusca} />
      <TouchableOpacity style={styles.botaoBusca} onPress={buscarPaciente}>
        <Text style={styles.botaoTexto}>🔍 Buscar</Text>
      </TouchableOpacity>

      {/* Lista de pacientes (equivalente ao SELECT) */}
      <FlatList
        data={pacientes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardNome}>{item.nome}</Text>
            <Text>CPF: {item.cpf}</Text>
            <Text>Tel: {item.telefone}</Text>
            <TouchableOpacity onPress={() => excluirPaciente(item.id)}>
              <Text style={styles.excluir}>🗑️ Excluir</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  titulo: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ddd', padding: 12, marginBottom: 10, borderRadius: 8, backgroundColor: '#fff' },
  botao: { backgroundColor: '#4CAF50', padding: 15, borderRadius: 8, marginBottom: 20 },
  botaoBusca: { backgroundColor: '#2196F3', padding: 15, borderRadius: 8, marginBottom: 20 },
  botaoTexto: { color: '#fff', textAlign: 'center', fontWeight: 'bold' },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 2 },
  cardNome: { fontSize: 16, fontWeight: 'bold' },
  excluir: { color: 'red', marginTop: 10 }
});
```

---

## 🌐 Implementação 2: Web Tradicional (HTML + Python Flask + psycopg2)

### Frontend — HTML + CSS + JavaScript

```html
<!-- index.html - Interface Web para CRUD de Pacientes -->
<!-- ETE Pernambuco - Profª Luana Cristina -->
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🏥 Clínica - Gestão de Pacientes</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #f0f4f8; padding: 20px; }
        .container { max-width: 800px; margin: 0 auto; }
        h1 { text-align: center; color: #2c3e50; margin-bottom: 30px; }
        .form-group { margin-bottom: 15px; }
        label { display: block; margin-bottom: 5px; font-weight: bold; }
        input { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
        button { padding: 12px 24px; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }
        .btn-cadastrar { background: #27ae60; color: white; }
        .btn-buscar { background: #3498db; color: white; }
        .btn-excluir { background: #e74c3c; color: white; font-size: 12px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        th, td { padding: 12px; text-align: left; border-bottom: 1px solid #ddd; }
        th { background: #2c3e50; color: white; }
        tr:hover { background: #ecf0f1; }
    </style>
</head>
<body>
    <div class="container">
        <h1>🏥 Gestão de Pacientes</h1>

        <!-- Formulário de cadastro -->
        <form id="formPaciente">
            <div class="form-group">
                <label>Nome:</label>
                <input type="text" id="nome" required>
            </div>
            <div class="form-group">
                <label>CPF:</label>
                <input type="text" id="cpf" required>
            </div>
            <div class="form-group">
                <label>Telefone:</label>
                <input type="text" id="telefone">
            </div>
            <div class="form-group">
                <label>Data de Nascimento:</label>
                <input type="date" id="dataNascimento">
            </div>
            <button type="submit" class="btn-cadastrar">Cadastrar Paciente</button>
        </form>

        <!-- Campo de busca -->
        <div class="form-group" style="margin-top: 30px;">
            <input type="text" id="campoBusca" placeholder="Buscar por nome...">
            <button class="btn-buscar" onclick="buscarPacientes()">🔍 Buscar</button>
        </div>

        <!-- Tabela de resultados (equivalente ao SELECT) -->
        <table>
            <thead>
                <tr><th>ID</th><th>Nome</th><th>CPF</th><th>Telefone</th><th>Ações</th></tr>
            </thead>
            <tbody id="tabelaPacientes"></tbody>
        </table>
    </div>

    <script>
        // JavaScript do frontend - Comunicação com a API Flask
        const API = 'http://localhost:5000/api/pacientes';

        // Carregar pacientes ao abrir a página
        document.addEventListener('DOMContentLoaded', carregarPacientes);

        // READ - Buscar todos os pacientes
        async function carregarPacientes() {
            const resp = await fetch(API);
            const pacientes = await resp.json();
            renderizarTabela(pacientes);
        }

        // READ com filtro
        async function buscarPacientes() {
            const busca = document.getElementById('campoBusca').value;
            const resp = await fetch(`${API}?nome=${busca}`);
            const pacientes = await resp.json();
            renderizarTabela(pacientes);
        }

        // CREATE - Cadastrar paciente
        document.getElementById('formPaciente').addEventListener('submit', async (e) => {
            e.preventDefault();
            const dados = {
                nome: document.getElementById('nome').value,
                cpf: document.getElementById('cpf').value,
                telefone: document.getElementById('telefone').value,
                data_nascimento: document.getElementById('dataNascimento').value
            };
            await fetch(API, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(dados)
            });
            e.target.reset();
            carregarPacientes();
        });

        // DELETE - Excluir paciente
        async function excluirPaciente(id) {
            if (confirm('Confirma a exclusão?')) {
                await fetch(`${API}/${id}`, { method: 'DELETE' });
                carregarPacientes();
            }
        }

        // Renderizar tabela HTML com os dados
        function renderizarTabela(pacientes) {
            const tbody = document.getElementById('tabelaPacientes');
            tbody.innerHTML = pacientes.map(p => `
                <tr>
                    <td>${p.id}</td>
                    <td>${p.nome}</td>
                    <td>${p.cpf}</td>
                    <td>${p.telefone || '-'}</td>
                    <td><button class="btn-excluir" onclick="excluirPaciente(${p.id})">🗑️</button></td>
                </tr>
            `).join('');
        }
    </script>
</body>
</html>
```

### Backend — Python Flask + psycopg2

```python
# app.py - API REST com Flask e PostgreSQL
# ETE Pernambuco - Profª Luana Cristina
# O SQL é IDÊNTICO ao usado em qualquer outra linguagem!

from flask import Flask, request, jsonify
from flask_cors import CORS
import psycopg2
from psycopg2.extras import RealDictCursor

app = Flask(__name__)
CORS(app)  # Permite requisições do frontend

# Configuração de conexão com o PostgreSQL
DB_CONFIG = {
    'host': 'localhost',
    'port': 5432,
    'database': 'clinica_db',
    'user': 'postgres',
    'password': 'postgres'
}

def get_connection():
    """Cria e retorna uma conexão com o banco de dados."""
    return psycopg2.connect(**DB_CONFIG, cursor_factory=RealDictCursor)


# READ - Listar pacientes (com filtro opcional por nome)
@app.route('/api/pacientes', methods=['GET'])
def listar_pacientes():
    """SELECT * FROM pacientes — com filtro opcional."""
    nome_filtro = request.args.get('nome', '')
    conn = get_connection()
    cur = conn.cursor()
    
    if nome_filtro:
        # SQL com parâmetro: previne SQL Injection!
        cur.execute(
            "SELECT * FROM pacientes WHERE nome ILIKE %s ORDER BY nome",
            (f'%{nome_filtro}%',)  # Parâmetro seguro
        )
    else:
        cur.execute("SELECT * FROM pacientes ORDER BY nome")
    
    pacientes = cur.fetchall()
    cur.close()
    conn.close()
    return jsonify(pacientes)

# CREATE - Cadastrar paciente
@app.route('/api/pacientes', methods=['POST'])
def criar_paciente():
    """INSERT INTO pacientes — com parâmetros seguros."""
    dados = request.get_json()
    conn = get_connection()
    cur = conn.cursor()
    
    # SQL parametrizado (MESMO SQL usado no TypeScript e no Expo)
    cur.execute(
        """INSERT INTO pacientes (nome, cpf, telefone, data_nascimento) 
           VALUES (%s, %s, %s, %s) RETURNING *""",
        (dados['nome'], dados['cpf'], dados['telefone'], dados['data_nascimento'])
    )
    
    paciente = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return jsonify(paciente), 201

# UPDATE - Atualizar paciente
@app.route('/api/pacientes/<int:id>', methods=['PUT'])
def atualizar_paciente(id):
    """UPDATE pacientes SET ... WHERE id = $1."""
    dados = request.get_json()
    conn = get_connection()
    cur = conn.cursor()
    
    cur.execute(
        """UPDATE pacientes 
           SET nome=%s, telefone=%s, data_nascimento=%s 
           WHERE id=%s RETURNING *""",
        (dados['nome'], dados['telefone'], dados['data_nascimento'], id)
    )
    
    paciente = cur.fetchone()
    conn.commit()
    cur.close()
    conn.close()
    return jsonify(paciente)

# DELETE - Remover paciente
@app.route('/api/pacientes/<int:id>', methods=['DELETE'])
def excluir_paciente(id):
    """DELETE FROM pacientes WHERE id = $1."""
    conn = get_connection()
    cur = conn.cursor()
    
    # Mesmo SQL em todas as linguagens!
    cur.execute("DELETE FROM pacientes WHERE id = %s", (id,))
    
    conn.commit()
    cur.close()
    conn.close()
    return jsonify({'mensagem': 'Paciente excluído com sucesso'}), 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)
```

---

## 🔷 Implementação 3: TypeScript (Node.js + Express + pg com tipos)

```typescript
// server.ts - API REST com Express e PostgreSQL (TypeScript)
// ETE Pernambuco - Profª Luana Cristina
// Observe: o SQL é IDÊNTICO ao da versão Python!

import express, { Request, Response } from 'express';
import { Pool, QueryResult } from 'pg';
import cors from 'cors';

// Definição de tipos (interface do Paciente)
interface Paciente {
    id: number;
    nome: string;
    cpf: string;
    telefone: string;
    data_nascimento: string;
    created_at: string;
}

// Configuração do Express
const app = express();
app.use(cors());
app.use(express.json());

// Configuração de conexão com o PostgreSQL (MESMA config do Python)
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    database: 'clinica_db',
    user: 'postgres',
    password: 'postgres'
});

// READ - Listar pacientes (com filtro opcional por nome)
app.get('/api/pacientes', async (req: Request, res: Response) => {
    const nomeFiltro: string = (req.query.nome as string) || '';
    let resultado: QueryResult<Paciente>;
    
    if (nomeFiltro) {
        // SQL IDÊNTICO ao Python — só muda $1 ao invés de %s
        resultado = await pool.query(
            'SELECT * FROM pacientes WHERE nome ILIKE $1 ORDER BY nome',
            [`%${nomeFiltro}%`]  // Parâmetro seguro (previne SQL Injection)
        );
    } else {
        resultado = await pool.query('SELECT * FROM pacientes ORDER BY nome');
    }
    
    res.json(resultado.rows);
});

// CREATE - Cadastrar paciente
app.post('/api/pacientes', async (req: Request, res: Response) => {
    const { nome, cpf, telefone, data_nascimento } = req.body;
    
    // SQL parametrizado (MESMO SQL do Python, apenas $1,$2,$3,$4 ao invés de %s)
    const resultado = await pool.query<Paciente>(
        `INSERT INTO pacientes (nome, cpf, telefone, data_nascimento) 
         VALUES ($1, $2, $3, $4) RETURNING *`,
        [nome, cpf, telefone, data_nascimento]
    );
    
    res.status(201).json(resultado.rows[0]);
});

// UPDATE - Atualizar paciente
app.put('/api/pacientes/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const { nome, telefone, data_nascimento } = req.body;
    
    // Mesmo UPDATE SQL em Python e TypeScript!
    const resultado = await pool.query<Paciente>(
        `UPDATE pacientes 
         SET nome=$1, telefone=$2, data_nascimento=$3 
         WHERE id=$4 RETURNING *`,
        [nome, telefone, data_nascimento, id]
    );
    
    res.json(resultado.rows[0]);
});

// DELETE - Remover paciente
app.delete('/api/pacientes/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    
    // Mesmo DELETE em todas as linguagens!
    await pool.query('DELETE FROM pacientes WHERE id = $1', [id]);
    
    res.json({ mensagem: 'Paciente excluído com sucesso' });
});

// Iniciar o servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`🏥 Servidor rodando em http://localhost:${PORT}`);
});
```

---

## 📊 Tabela Comparativa: SQL é Universal

| Operação | SQL Puro | Python (psycopg2) | Node.js (pg) | TypeScript (pg + tipos) |
|----------|----------|-------------------|--------------|------------------------|
| **Conectar** | `\c clinica_db` | `psycopg2.connect(host, db)` | `new Pool({host, db})` | `new Pool({host, db}): Pool` |
| **SELECT** | `SELECT * FROM pacientes` | `cur.execute("SELECT...")` | `pool.query("SELECT...")` | `pool.query<Paciente>("SELECT...")` |
| **SELECT WHERE** | `WHERE nome ILIKE '%x%'` | `cur.execute("...%s", (val,))` | `pool.query("...$1", [val])` | `pool.query<T>("...$1", [val])` |
| **INSERT** | `INSERT INTO ... VALUES(...)` | `cur.execute("INSERT...%s", tuple)` | `pool.query("INSERT...$1", arr)` | `pool.query<T>("INSERT...$1", arr)` |
| **UPDATE** | `UPDATE ... SET ... WHERE id=x` | `cur.execute("UPDATE...%s", tuple)` | `pool.query("UPDATE...$1", arr)` | `pool.query<T>("UPDATE...$1", arr)` |
| **DELETE** | `DELETE FROM ... WHERE id=x` | `cur.execute("DELETE...%s", (id,))` | `pool.query("DELETE...$1", [id])` | `pool.query("DELETE...$1", [id])` |
| **Parâmetros** | — | `%s` (posicional) | `$1, $2, $3` (numerado) | `$1, $2, $3` (numerado) |
| **Retorno** | ResultSet | `cur.fetchall()` | `result.rows` | `result.rows: T[]` |
| **Prevenir SQL Injection** | Nunca concatenar! | Usar `%s` params | Usar `$1` params | Usar `$1` params |
| **Fechar conexão** | `\q` | `conn.close()` | Pool gerencia | Pool gerencia |

---

## 💡 Destaque Pedagógico

> **"O SQL não muda. A linguagem de acesso é apenas o 'carteiro' que entrega a query ao banco."**
>
> Observe nas 3 implementações:
> - O **SQL** é literalmente o mesmo: `SELECT * FROM pacientes WHERE nome ILIKE...`
> - A **lógica CRUD** é idêntica: Criar, Ler, Atualizar, Deletar
> - A **parametrização** funciona igual (prevenir SQL Injection)
> - Apenas o **driver de conexão** muda (`psycopg2` vs `pg`)
> - Apenas a **sintaxe dos parâmetros** difere (`%s` vs `$1`)
>
> Um DBA que domina **SQL** trabalha com qualquer linguagem de backend.
> O banco de dados não se importa com quem está perguntando — só com o SQL recebido.
>
> — Profª Luana Cristina, ETE Pernambuco

---

## 🚀 Guia de Execução Passo a Passo

### Pré-requisito: PostgreSQL

```bash
# 1. Instalar PostgreSQL (se não tiver)
# macOS:
brew install postgresql@16
brew services start postgresql@16

# Windows: baixar de https://www.postgresql.org/download/

# 2. Criar o banco e a tabela
psql -U postgres -c "CREATE DATABASE clinica_db;"
psql -U postgres -d clinica_db -f setup.sql
# (onde setup.sql contém o SQL da seção "Setup do Banco" acima)
```

### Expo/React Native (Mobile)

```bash
# 1. Criar o projeto Expo
npx create-expo-app clinica-app --template blank-typescript
cd clinica-app

# 2. Substituir App.tsx pelo código acima

# 3. Precisa de um backend rodando! (Python ou TypeScript abaixo)
# Inicie o backend primeiro, depois:
npx expo start

# 4. Abrir no celular com Expo Go ou no emulador
# Pressione 'a' para Android ou 'i' para iOS
```

### Python Flask (Web Tradicional)

```bash
# 1. Criar ambiente virtual
python -m venv venv
source venv/bin/activate  # Linux/Mac
# venv\Scripts\activate   # Windows

# 2. Instalar dependências
pip install flask flask-cors psycopg2-binary

# 3. Salvar o código Python como app.py
# 4. Salvar o HTML como templates/index.html (ou servir separadamente)

# 5. Executar o servidor
python app.py
# Servidor rodando em http://localhost:5000

# 6. Abrir o index.html no navegador (ou http://localhost:5000)
```

### TypeScript + Express (Web Moderna)

```bash
# 1. Criar o projeto
mkdir clinica-api-ts && cd clinica-api-ts
npm init -y

# 2. Instalar dependências
npm install express pg cors
npm install -D typescript ts-node @types/express @types/pg @types/cors @types/node

# 3. Criar tsconfig.json
npx tsc --init --target ES2020 --module commonjs --outDir ./dist --strict

# 4. Salvar o código TypeScript como server.ts

# 5. Executar diretamente
npx ts-node server.ts
# Servidor rodando em http://localhost:5000

# 6. Para produção:
npx tsc           # Compila
node dist/server.js  # Executa
```

---

## 📌 Conceito-Chave: SQL Injection e Parametrização

```sql
-- ❌ ERRADO (vulnerável a SQL Injection):
-- "SELECT * FROM pacientes WHERE nome = '" + nomeUsuario + "'"
-- Se o usuário digitar: ' OR 1=1 -- 
-- O SQL vira: SELECT * FROM pacientes WHERE nome = '' OR 1=1 --'
-- Isso retorna TODOS os pacientes! (ataque!)

-- ✅ CORRETO (parametrizado — seguro em TODAS as linguagens):
-- Python:    cur.execute("SELECT * FROM pacientes WHERE nome = %s", (nome,))
-- Node/TS:   pool.query("SELECT * FROM pacientes WHERE nome = $1", [nome])
-- O driver trata o parâmetro como DADO, nunca como código SQL.
```

---

*Material de apoio — ETE Pernambuco — Desenvolvimento de Sistemas*  
*Profª Luana Cristina — Administração de Bancos de Dados*
