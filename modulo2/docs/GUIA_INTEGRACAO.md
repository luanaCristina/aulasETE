# 🔗 Guia Passo a Passo — Integração Front-End ↔ Back-End ↔ Banco

> Este guia mostra como conectar todas as camadas do projeto: Interface Web, Servidor Python e Banco de Dados PostgreSQL.

---

## 📍 Visão Geral da Arquitetura

```
┌──────────────────┐        HTTP (Fetch API)        ┌──────────────────┐        SQL (psycopg2)       ┌──────────────┐
│                  │ ─────────────────────────────▶ │                  │ ─────────────────────────▶ │              │
│   FRONT-END      │        JSON Request           │   BACK-END       │       Query + Params       │  POSTGRESQL  │
│   (HTML/CSS/JS)  │ ◀───────────────────────────── │   (Flask/Python) │ ◀───────────────────────── │  (Banco)     │
│                  │        JSON Response           │                  │       ResultSet            │              │
│   Porta: 8080    │                                │   Porta: 5000    │                            │  Porta: 5432 │
└──────────────────┘                                └──────────────────┘                            └──────────────┘
```

---

## 🚀 Passo 1 — Configurar o Banco de Dados

### 1.1 Instalar PostgreSQL

```bash
# Ubuntu/Debian
sudo apt install postgresql

# macOS (Homebrew)
brew install postgresql@15

# Windows: Baixar de https://www.postgresql.org/download/windows/
```

### 1.2 Criar o banco e as tabelas

```bash
# Acessar o psql
sudo -u postgres psql

# Dentro do psql:
CREATE DATABASE salao_beleza_arte;
\q

# Executar scripts SQL
psql -U postgres -d salao_beleza_arte -f database/001_create_tables.sql
psql -U postgres -d salao_beleza_arte -f database/002_seed_data.sql
```

### 1.3 Verificar se funcionou

```bash
psql -U postgres -d salao_beleza_arte -c "SELECT * FROM clientes;"
```

---

## 🚀 Passo 2 — Configurar o Back-End (Python/Flask)

### 2.1 Criar ambiente virtual

```bash
cd backend/

# Criar venv
python3 -m venv venv

# Ativar (Linux/macOS)
source venv/bin/activate

# Ativar (Windows)
venv\Scripts\activate
```

### 2.2 Instalar dependências

```bash
pip install -r requirements.txt
```

### 2.3 Testar conexão com o banco

```bash
python database.py
# Deve exibir: ✅ Conectado ao PostgreSQL: PostgreSQL 15.x...
```

### 2.4 Iniciar o servidor

```bash
python app.py
# Deve exibir: 🏪 Salão Beleza & Arte — API iniciando...
# Acesse: http://localhost:5000
```

### 2.5 Testar endpoints com curl ou navegador

```bash
# Listar clientes
curl http://localhost:5000/api/clientes

# Listar serviços
curl http://localhost:5000/api/servicos

# Criar agendamento (POST com JSON)
curl -X POST http://localhost:5000/api/agendamentos \
  -H "Content-Type: application/json" \
  -d '{
    "cliente_id": 1,
    "profissional_id": 1,
    "servico_id": 1,
    "data_hora": "2025-08-10T09:00:00"
  }'
```

---

## 🚀 Passo 3 — Configurar o Front-End

### 3.1 Servir os arquivos HTML

O front-end é composto por arquivos estáticos. Para evitar problemas de CORS ao acessar via `file://`, use um servidor HTTP simples:

```bash
cd frontend/

# Usando Python (já instalado)
python3 -m http.server 8080

# Acesse: http://localhost:8080
```

### 3.2 Como a comunicação funciona

```javascript
// 1. Front-end faz uma requisição para a API
const response = await fetch('http://localhost:5000/api/clientes');

// 2. Flask recebe, consulta o banco e retorna JSON
// (isso acontece no app.py)

// 3. Front-end recebe o JSON e atualiza a interface
const clientes = await response.json();
clientes.forEach(cliente => {
    // Cria elementos HTML dinamicamente
});
```

### 3.3 Fluxo completo de um agendamento

```
1. Usuário preenche formulário no HTML
       ↓
2. JavaScript captura o evento 'submit' (preventDefault)
       ↓
3. fetch() envia POST para /api/agendamentos com JSON
       ↓
4. Flask recebe os dados no endpoint
       ↓
5. Python valida regras de negócio (conflito, expediente)
       ↓
6. Se OK → INSERT INTO agendamentos ... (psycopg2)
       ↓
7. Flask retorna { message: "Agendamento criado!" } + status 201
       ↓
8. JavaScript exibe feedback de sucesso na tela
       ↓
9. Lista de agendamentos é atualizada automaticamente
```

---

## 🚀 Passo 4 — Rodar Tudo Junto

### Terminal 1 — PostgreSQL
```bash
# Já deve estar rodando como serviço, mas para verificar:
pg_isready
# Deve retornar: accepting connections
```

### Terminal 2 — Back-End Flask
```bash
cd backend/
source venv/bin/activate
python app.py
# Rodando em http://localhost:5000
```

### Terminal 3 — Front-End
```bash
cd frontend/
python3 -m http.server 8080
# Rodando em http://localhost:8080
```

### Testar
1. Abra http://localhost:8080 no navegador
2. Os selects devem carregar (clientes, profissionais, serviços)
3. A lista de agendamentos deve aparecer
4. Crie um novo agendamento e veja se aparece na lista

---

## ⚠️ Problemas Comuns e Soluções

| Problema | Causa | Solução |
|----------|-------|---------|
| "Failed to fetch" | Back-end não está rodando | Verifique se o Flask está ativo na porta 5000 |
| "CORS error" | Navegador bloqueia cross-origin | Certifique-se que `flask-cors` está instalado e `CORS(app)` está no código |
| "Connection refused" (banco) | PostgreSQL não está rodando | `sudo systemctl start postgresql` ou verifique credenciais |
| Selects vazios | API retorna array vazio | Verifique se os dados de seed foram inseridos (`002_seed_data.sql`) |
| "409 Conflict" ao agendar | Conflito de horário | Esperado! Escolha outro horário. A regra de negócio está funcionando ✅ |

---

## 📖 Conceitos-Chave para a Prova

| Conceito | Onde aparece no projeto |
|----------|------------------------|
| **Encapsulamento** | Properties com validação nas classes Python |
| **Herança** | SalaoException → subclasses de erro |
| **Polimorfismo** | Método `to_dict()` presente em todas as classes |
| **Composição** | Agendamento contém referências a Cliente, Profissional, Serviço |
| **SQL JOIN** | Queries de relatório unindo 4 tabelas |
| **Foreign Key** | Tabela agendamentos referencia clientes, profissionais, servicos |
| **Fetch API** | Comunicação assíncrona JS → Flask |
| **REST** | Verbos HTTP (GET, POST, PATCH) mapeados para operações CRUD |
| **Tratamento de Exceções** | try/except no Python + status codes HTTP |
