# 🎓 Módulo I — Fundamentos Web & Lógica (Versão Python)

## Projeto: Landing Page Responsiva + Servidor Python — "Feira Criativa Recife"

> **Disciplina:** Desenvolvimento de Sistemas — ETE Advogado José David Gil Rodrigues  
> **Nível:** Iniciante  
> **Duração estimada:** 4 a 6 semanas  
> **Stack:** HTML5 + CSS3 + JavaScript + Python (Flask)

---

## 📖 Contexto

Este é o mesmo projeto da Feira Criativa Recife, mas agora com um **back-end em Python/Flask** que:
- Serve os arquivos HTML/CSS/JS
- Processa o formulário de contato (server-side)
- Armazena os dados dos artesãos em um arquivo JSON (simulando um banco)
- Possui rota de API para listar artesãos dinamicamente

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Front-End | HTML5 Semântico + CSS3 (Flexbox/Grid) + JavaScript ES6+ |
| Back-End | Python 3.11+ com Flask |
| Dados | Arquivo JSON (sem banco de dados neste módulo) |
| Deploy | PythonAnywhere ou localhost |

---

## 📁 Estrutura do Projeto

```
modulo1Python/
├── README.md
├── app.py                  ← Servidor Flask (rotas e lógica)
├── requirements.txt        ← Dependências Python
├── data/
│   ├── artesaos.json       ← "Banco de dados" em JSON
│   └── contatos.json       ← Mensagens recebidas do formulário
├── static/
│   ├── css/
│   │   ├── reset.css
│   │   ├── variables.css
│   │   ├── style.css
│   │   └── responsive.css
│   ├── js/
│   │   ├── menu.js
│   │   ├── scroll.js
│   │   └── form.js
│   └── img/
│       └── (imagens aqui)
└── templates/
    └── index.html          ← Template Jinja2 (HTML dinâmico)
```

---

## 🚀 Como Rodar

```bash
# 1. Criar ambiente virtual
python3 -m venv venv
source venv/bin/activate   # Linux/macOS
# venv\Scripts\activate    # Windows

# 2. Instalar dependências
pip install -r requirements.txt

# 3. Rodar o servidor
python app.py

# 4. Abrir no navegador
# http://localhost:5000
```

---

## ✅ Checklist de Entrega

- [ ] Servidor Flask funcionando e servindo a landing page
- [ ] Formulário envia dados para rota POST /contato
- [ ] Dados dos artesãos carregados do JSON
- [ ] Página responsiva (mobile-first)
- [ ] Mínimo 10 commits no Git
