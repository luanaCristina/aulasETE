# 🧮 4 Calculadoras — Estudo Prático Comparativo

---

## 📁 Estrutura

```
calculadoras/
├── 01-javascript/    ← HTML + CSS + JS puro
├── 02-typescript/    ← HTML + CSS + TypeScript compilado
├── 03-python/        ← Flask (servidor) + HTML frontend
├── 04-expo/          ← React Native mobile
├── DIFERENCAS_E_SEMELHANCAS.md  ← Análise comparativa
└── README.md         ← Este arquivo (execução + deploy + git)
```

---

## 💻 Como Rodar Cada Projeto

### Projeto 1: JavaScript (zero dependências!)
```bash
cd 01-javascript
# Apenas abrir index.html no navegador!
# OU usar Live Server no VS Code (botão "Go Live")
```

### Projeto 2: TypeScript
```bash
cd 02-typescript
npm install
npm run build     # Compila TS → JS na pasta dist/
# Abrir index.html no navegador (ele carrega dist/calculator.js)
```

### Projeto 3: Python (Flask)
```bash
cd 03-python
python3 -m venv venv
source venv/bin/activate    # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
# Acesse: http://localhost:5000
```

### Projeto 4: React Native (Expo)
```bash
cd 04-expo
npm install
npx expo start
# Escanear QR Code com Expo Go no celular
# OU pressionar 'w' para abrir no navegador
```

---

## 🐙 Git & GitHub — Tutorial Completo

### O que é .gitignore?

Arquivo que diz ao Git quais pastas/arquivos NÃO devem ser enviados.
Motivo: `node_modules` tem milhares de arquivos que podem ser reinstalados com `npm install`.

```bash
# .gitignore para qualquer projeto JS/TS/Python:
node_modules/
dist/
.env
__pycache__/
venv/
.expo/
*.pyc
```

### Passo a Passo: Publicar no GitHub

```bash
# 1. Entrar na pasta do projeto
cd 01-javascript

# 2. Inicializar Git
git init

# 3. Criar .gitignore
echo "node_modules/\ndist/\n.env\nvenv/\n__pycache__/" > .gitignore

# 4. Ver status (mostra arquivos não rastreados)
git status

# 5. Adicionar TODOS os arquivos ao stage
git add .

# 6. Criar primeiro commit (mensagem semântica!)
git commit -m "feat: calculadora JavaScript com UI completa"

# 7. Definir branch principal como 'main'
git branch -M main

# 8. Criar repositório no GitHub (via site ou CLI)
# No github.com: New Repository → NÃO inicializar com README
# Copiar a URL HTTPS

# 9. Conectar ao remoto
git remote add origin https://github.com/SEU_USER/calculadora-js.git

# 10. Enviar para o GitHub
git push -u origin main
```

### Commits seguintes (após alterações):
```bash
git add .
git commit -m "style: melhorar cores dos botões de operador"
git push
```

---

## 🌐 Deploy — Publicar Online

### Projetos Web (01 e 02): GitHub Pages

```bash
# No repositório do GitHub:
# Settings → Pages → Source: "Deploy from a branch" → Branch: main → /(root) → Save
# Em 1 minuto: https://SEU_USER.github.io/calculadora-js/
```

**Alternativa: Vercel (mais rápido):**
1. Acesse vercel.com → login com GitHub
2. "Import Project" → selecionar repositório
3. Deploy automático! URL gerada: `calculadora-js.vercel.app`

### Projeto Python (03): Render

1. Acesse render.com → login com GitHub
2. "New" → "Web Service" → selecionar repositório
3. Build: `pip install -r requirements.txt`
4. Start: `python app.py`
5. Deploy automático! URL gerada em ~2 min

### Projeto Mobile (04): Expo Go + Stores

**Teste no celular (grátis):**
```bash
npx expo start
# QR Code → Expo Go no celular → app rodando!
```

**Publicar nas lojas (pago):**
```bash
npm install -g eas-cli
eas login
eas build --platform android  # Gera .aab → Google Play (US$ 25 única)
eas build --platform ios      # Gera .ipa → App Store (US$ 99/ano)
```

---

## ✅ Checklist do Aluno

- [ ] Rodei os 4 projetos no meu computador
- [ ] Entendi a análise de semelhanças e diferenças (DIFERENCAS_E_SEMELHANCAS.md)
- [ ] Criei repositório no GitHub para pelo menos 1 projeto
- [ ] Publiquei pelo menos 1 projeto online (GitHub Pages ou Vercel)
- [ ] Testei o app Expo no meu celular
