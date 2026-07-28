# 🌐 Multi-Stack: Landing Page Responsiva com Formulário de Contato

> **ETE Pernambuco — Profª Luana Cristina**
> Disciplina: Programação Web (HTML + CSS)

---

## 🎯 Objetivo Pedagógico

> *"A lógica é universal — a linguagem é apenas sintaxe."*

Neste material, implementamos a **mesma Landing Page responsiva com formulário de contato** em 3 abordagens tecnológicas diferentes. O objetivo é demonstrar que **Flexbox, responsividade e manipulação de formulários** seguem a mesma lógica mental — independente da ferramenta.

---

## 📋 Problema

Criar uma **Landing Page profissional** com:
- Header com navegação
- Seção hero com título e CTA
- Seção de serviços (3 cards em grid/flex)
- Formulário de contato com validação
- Footer
- Design 100% responsivo (mobile-first)

---

## 🔧 Implementação 1: Web Puro (HTML5 + CSS3 + Vanilla JS)

> A abordagem raiz. Sem frameworks, sem dependências. Controle total.

### `index.html`

```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DevSolutions - Landing Page</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <!-- Header com Navegação -->
  <header class="header">
    <div class="container">
      <a href="#" class="logo">Dev<span>Solutions</span></a>
      <nav class="nav">
        <button class="nav-toggle" aria-label="Menu">&#9776;</button>
        <ul class="nav-list">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Seção Hero -->
  <section id="inicio" class="hero">
    <div class="container">
      <h1>Transformamos ideias em soluções digitais</h1>
      <p>Desenvolvimento web profissional para sua empresa crescer.</p>
      <a href="#contato" class="btn-primary">Fale Conosco</a>
    </div>
  </section>

  <!-- Seção Serviços -->
  <section id="servicos" class="servicos">
    <div class="container">
      <h2>Nossos Serviços</h2>
      <div class="cards-grid">
        <div class="card">
          <h3>🌐 Sites Responsivos</h3>
          <p>Layouts modernos que funcionam em qualquer dispositivo.</p>
        </div>
        <div class="card">
          <h3>📱 Apps Mobile</h3>
          <p>Aplicativos nativos e híbridos para Android e iOS.</p>
        </div>
        <div class="card">
          <h3>☁️ Cloud & APIs</h3>
          <p>Infraestrutura escalável e APIs robustas.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Formulário de Contato -->
  <section id="contato" class="contato">
    <div class="container">
      <h2>Entre em Contato</h2>
      <form id="formContato" class="form-contato">
        <div class="form-grupo">
          <label for="nome">Nome completo</label>
          <input type="text" id="nome" name="nome" required placeholder="Seu nome">
        </div>
        <div class="form-grupo">
          <label for="email">E-mail</label>
          <input type="email" id="email" name="email" required placeholder="seu@email.com">
        </div>
        <div class="form-grupo">
          <label for="mensagem">Mensagem</label>
          <textarea id="mensagem" name="mensagem" rows="5" required
                    placeholder="Como podemos ajudar?"></textarea>
        </div>
        <button type="submit" class="btn-primary">Enviar Mensagem</button>
        <p id="feedback" class="feedback"></p>
      </form>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2025 DevSolutions — ETE Pernambuco</p>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
```

### `style.css`

```css
/* Reset e Base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  line-height: 1.6;
  color: #333;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* Header */
.header {
  background: #1a1a2e;
  padding: 15px 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #fff;
  font-size: 1.5rem;
  text-decoration: none;
  font-weight: bold;
}

.logo span {
  color: #e94560;
}

.nav-list {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-list a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-list a:hover {
  color: #e94560;
}

.nav-toggle {
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
}

/* Hero */
.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  padding: 100px 0;
  text-align: center;
}

.hero h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

.hero p {
  font-size: 1.2rem;
  margin-bottom: 30px;
  opacity: 0.9;
}

.btn-primary {
  background: #e94560;
  color: #fff;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  display: inline-block;
  transition: background 0.3s;
}

.btn-primary:hover {
  background: #c73e54;
}

/* Serviços */
.servicos {
  padding: 80px 0;
  text-align: center;
}

.servicos h2 {
  font-size: 2rem;
  margin-bottom: 40px;
}

.cards-grid {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  background: #f8f9fa;
  padding: 30px;
  border-radius: 10px;
  flex: 1;
  min-width: 250px;
  max-width: 350px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
}

/* Formulário */
.contato {
  background: #f0f0f5;
  padding: 80px 0;
}

.contato h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
}

.form-contato {
  max-width: 600px;
  margin: 0 auto;
}

.form-grupo {
  margin-bottom: 20px;
}

.form-grupo label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.form-grupo input,
.form-grupo textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
}

.form-grupo input:focus,
.form-grupo textarea:focus {
  outline: none;
  border-color: #e94560;
}

.feedback {
  margin-top: 15px;
  font-weight: 600;
  color: #27ae60;
}

/* Footer */
.footer {
  background: #1a1a2e;
  color: #fff;
  text-align: center;
  padding: 20px 0;
}

/* RESPONSIVIDADE - Media Queries */
@media (max-width: 768px) {
  .nav-toggle {
    display: block;
  }

  .nav-list {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 20px;
    background: #1a1a2e;
    padding: 20px;
    border-radius: 5px;
    gap: 15px;
  }

  .nav-list.active {
    display: flex;
  }

  .hero h1 {
    font-size: 1.8rem;
  }

  .cards-grid {
    flex-direction: column;
    align-items: center;
  }
}
```

### `script.js`

```javascript
// Toggle do menu mobile
const navToggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

navToggle.addEventListener('click', () => {
  navList.classList.toggle('active');
});

// Validação e envio do formulário
const form = document.getElementById('formContato');
const feedback = document.getElementById('feedback');

form.addEventListener('submit', (evento) => {
  evento.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  // Validação básica
  if (!nome || !email || !mensagem) {
    feedback.textContent = '⚠️ Preencha todos os campos!';
    feedback.style.color = '#e74c3c';
    return;
  }

  // Validação de email com regex
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regexEmail.test(email)) {
    feedback.textContent = '⚠️ E-mail inválido!';
    feedback.style.color = '#e74c3c';
    return;
  }

  // Sucesso
  feedback.textContent = `✅ Obrigado, ${nome}! Mensagem enviada com sucesso.`;
  feedback.style.color = '#27ae60';
  form.reset();
});
```

---

## ⚛️ Implementação 2: React (TypeScript + Tailwind CSS)

> Componentes reutilizáveis, estado com hooks, estilização utilitária.

### `src/App.tsx`

```tsx
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Servicos } from './components/Servicos';
import { FormContato } from './components/FormContato';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Hero />
      <Servicos />
      <FormContato />
      <Footer />
    </div>
  );
}

export default App;
```

### `src/components/Header.tsx`

```tsx
import React, { useState } from 'react';

export function Header() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-[#1a1a2e] sticky top-0 z-50 py-4">
      <div className="container mx-auto px-5 flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">
          Dev<span className="text-[#e94560]">Solutions</span>
        </a>

        {/* Botão mobile */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          ☰
        </button>

        {/* Navegação */}
        <nav className={`${menuAberto ? 'flex' : 'hidden'} md:flex`}>
          <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
            <li><a href="#inicio" className="text-white hover:text-[#e94560] transition">Início</a></li>
            <li><a href="#servicos" className="text-white hover:text-[#e94560] transition">Serviços</a></li>
            <li><a href="#contato" className="text-white hover:text-[#e94560] transition">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
```

### `src/components/Hero.tsx`

```tsx
import React from 'react';

export function Hero() {
  return (
    <section id="inicio" className="bg-gradient-to-br from-[#1a1a2e] to-[#16213e] text-white py-24 text-center">
      <div className="container mx-auto px-5">
        <h1 className="text-3xl md:text-5xl font-bold mb-5">
          Transformamos ideias em soluções digitais
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Desenvolvimento web profissional para sua empresa crescer.
        </p>
        <a
          href="#contato"
          className="bg-[#e94560] text-white px-8 py-3 rounded-md text-lg
                     hover:bg-[#c73e54] transition inline-block"
        >
          Fale Conosco
        </a>
      </div>
    </section>
  );
}
```

### `src/components/Servicos.tsx`

```tsx
import React from 'react';

interface ServicoCardProps {
  icone: string;
  titulo: string;
  descricao: string;
}

function ServicoCard({ icone, titulo, descricao }: ServicoCardProps) {
  return (
    <div className="bg-gray-50 p-8 rounded-xl flex-1 min-w-[250px] max-w-[350px]
                    shadow-md hover:-translate-y-1 transition-transform">
      <h3 className="text-xl font-semibold mb-3">{icone} {titulo}</h3>
      <p className="text-gray-600">{descricao}</p>
    </div>
  );
}

export function Servicos() {
  const servicos = [
    { icone: '🌐', titulo: 'Sites Responsivos', descricao: 'Layouts modernos que funcionam em qualquer dispositivo.' },
    { icone: '📱', titulo: 'Apps Mobile', descricao: 'Aplicativos nativos e híbridos para Android e iOS.' },
    { icone: '☁️', titulo: 'Cloud & APIs', descricao: 'Infraestrutura escalável e APIs robustas.' },
  ];

  return (
    <section id="servicos" className="py-20 text-center">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold mb-10">Nossos Serviços</h2>
        <div className="flex flex-wrap gap-8 justify-center">
          {servicos.map((s, i) => (
            <ServicoCard key={i} icone={s.icone} titulo={s.titulo} descricao={s.descricao} />
          ))}
        </div>
      </div>
    </section>
  );
}
```

### `src/components/FormContato.tsx`

```tsx
import React, { useState, FormEvent } from 'react';

interface DadosFormulario {
  nome: string;
  email: string;
  mensagem: string;
}

export function FormContato() {
  const [dados, setDados] = useState<DadosFormulario>({ nome: '', email: '', mensagem: '' });
  const [feedback, setFeedback] = useState<{ texto: string; tipo: 'sucesso' | 'erro' } | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!dados.nome || !dados.email || !dados.mensagem) {
      setFeedback({ texto: '⚠️ Preencha todos os campos!', tipo: 'erro' });
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(dados.email)) {
      setFeedback({ texto: '⚠️ E-mail inválido!', tipo: 'erro' });
      return;
    }

    setFeedback({ texto: `✅ Obrigado, ${dados.nome}! Mensagem enviada.`, tipo: 'sucesso' });
    setDados({ nome: '', email: '', mensagem: '' });
  };

  return (
    <section id="contato" className="bg-[#f0f0f5] py-20">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10">Entre em Contato</h2>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <div className="mb-5">
            <label className="block mb-1 font-semibold">Nome completo</label>
            <input
              type="text"
              value={dados.nome}
              onChange={(e) => setDados({ ...dados, nome: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#e94560] outline-none"
              placeholder="Seu nome"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 font-semibold">E-mail</label>
            <input
              type="email"
              value={dados.email}
              onChange={(e) => setDados({ ...dados, email: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#e94560] outline-none"
              placeholder="seu@email.com"
            />
          </div>
          <div className="mb-5">
            <label className="block mb-1 font-semibold">Mensagem</label>
            <textarea
              value={dados.mensagem}
              onChange={(e) => setDados({ ...dados, mensagem: e.target.value })}
              rows={5}
              className="w-full p-3 border border-gray-300 rounded-md focus:border-[#e94560] outline-none"
              placeholder="Como podemos ajudar?"
            />
          </div>
          <button type="submit" className="bg-[#e94560] text-white px-8 py-3 rounded-md hover:bg-[#c73e54] transition">
            Enviar Mensagem
          </button>
          {feedback && (
            <p className={`mt-4 font-semibold ${feedback.tipo === 'sucesso' ? 'text-green-600' : 'text-red-500'}`}>
              {feedback.texto}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
```

### `src/components/Footer.tsx`

```tsx
import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1a1a2e] text-white text-center py-5 mt-auto">
      <p>&copy; 2025 DevSolutions — ETE Pernambuco</p>
    </footer>
  );
}
```

---

## 📱 Implementação 3: Expo/React Native

> O mesmo layout adaptado para mobile. ScrollView substitui a página, TextInput substitui input.

### `App.tsx`

```tsx
import React, { useState } from 'react';
import {
  ScrollView, View, Text, TextInput, TouchableOpacity,
  StyleSheet, StatusBar, Alert, Dimensions
} from 'react-native';

export default function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleEnviar = () => {
    if (!nome || !email || !mensagem) {
      setFeedback('⚠️ Preencha todos os campos!');
      return;
    }

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
      setFeedback('⚠️ E-mail inválido!');
      return;
    }

    Alert.alert('Sucesso!', `Obrigado, ${nome}! Mensagem enviada.`);
    setNome('');
    setEmail('');
    setMensagem('');
    setFeedback('✅ Enviado com sucesso!');
  };

  return (
    <ScrollView style={estilos.container}>
      <StatusBar barStyle="light-content" />

      {/* Header */}
      <View style={estilos.header}>
        <Text style={estilos.logo}>
          Dev<Text style={estilos.logoDestaque}>Solutions</Text>
        </Text>
      </View>

      {/* Hero */}
      <View style={estilos.hero}>
        <Text style={estilos.heroTitulo}>Transformamos ideias em soluções digitais</Text>
        <Text style={estilos.heroSubtitulo}>
          Desenvolvimento profissional para sua empresa crescer.
        </Text>
        <TouchableOpacity style={estilos.botaoPrimario}>
          <Text style={estilos.botaoTexto}>Fale Conosco</Text>
        </TouchableOpacity>
      </View>

      {/* Serviços */}
      <View style={estilos.secaoServicos}>
        <Text style={estilos.secaoTitulo}>Nossos Serviços</Text>
        {[
          { icone: '🌐', titulo: 'Sites Responsivos', desc: 'Layouts modernos para qualquer tela.' },
          { icone: '📱', titulo: 'Apps Mobile', desc: 'Aplicativos para Android e iOS.' },
          { icone: '☁️', titulo: 'Cloud & APIs', desc: 'Infraestrutura escalável.' },
        ].map((servico, i) => (
          <View key={i} style={estilos.card}>
            <Text style={estilos.cardTitulo}>{servico.icone} {servico.titulo}</Text>
            <Text style={estilos.cardTexto}>{servico.desc}</Text>
          </View>
        ))}
      </View>

      {/* Formulário */}
      <View style={estilos.secaoContato}>
        <Text style={estilos.secaoTitulo}>Entre em Contato</Text>

        <Text style={estilos.label}>Nome completo</Text>
        <TextInput
          style={estilos.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Seu nome"
        />

        <Text style={estilos.label}>E-mail</Text>
        <TextInput
          style={estilos.input}
          value={email}
          onChangeText={setEmail}
          placeholder="seu@email.com"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={estilos.label}>Mensagem</Text>
        <TextInput
          style={[estilos.input, estilos.textarea]}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Como podemos ajudar?"
          multiline
          numberOfLines={5}
          textAlignVertical="top"
        />

        <TouchableOpacity style={estilos.botaoPrimario} onPress={handleEnviar}>
          <Text style={estilos.botaoTexto}>Enviar Mensagem</Text>
        </TouchableOpacity>

        {feedback !== '' && (
          <Text style={estilos.feedback}>{feedback}</Text>
        )}
      </View>

      {/* Footer */}
      <View style={estilos.footer}>
        <Text style={estilos.footerTexto}>© 2025 DevSolutions — ETE Pernambuco</Text>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  // Header
  header: {
    backgroundColor: '#1a1a2e',
    paddingVertical: 16,
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  logo: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
  logoDestaque: {
    color: '#e94560',
  },
  // Hero
  hero: {
    backgroundColor: '#16213e',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroTitulo: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  heroSubtitulo: {
    color: '#ffffffcc',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 24,
  },
  // Botão
  botaoPrimario: {
    backgroundColor: '#e94560',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 6,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  // Serviços
  secaoServicos: {
    padding: 30,
    alignItems: 'center',
  },
  secaoTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#f8f9fa',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitulo: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
  },
  cardTexto: {
    color: '#666',
    fontSize: 14,
  },
  // Contato
  secaoContato: {
    backgroundColor: '#f0f0f5',
    padding: 30,
  },
  label: {
    fontWeight: '600',
    marginBottom: 5,
    marginTop: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    padding: 12,
    fontSize: 16,
  },
  textarea: {
    height: 120,
  },
  feedback: {
    marginTop: 15,
    fontWeight: '600',
    color: '#27ae60',
    textAlign: 'center',
  },
  // Footer
  footer: {
    backgroundColor: '#1a1a2e',
    padding: 20,
    alignItems: 'center',
  },
  footerTexto: {
    color: '#fff',
    fontSize: 14,
  },
});
```

---

## 📊 Tabela Comparativa: CSS Web vs React Native vs Tailwind

| Conceito | CSS Web Puro | React Native StyleSheet | Tailwind CSS |
|----------|-------------|------------------------|-------------|
| **Flexbox direction** | `flex-direction: row` | `flexDirection: 'row'` | `flex-row` |
| **Justify content** | `justify-content: center` | `justifyContent: 'center'` | `justify-center` |
| **Align items** | `align-items: center` | `alignItems: 'center'` | `items-center` |
| **Tamanho de texto** | `font-size: 1.5rem` | `fontSize: 24` (px fixo) | `text-2xl` |
| **Cores** | `color: #e94560` | `color: '#e94560'` | `text-[#e94560]` |
| **Padding** | `padding: 20px` | `padding: 20` (número) | `p-5` |
| **Margin** | `margin-bottom: 15px` | `marginBottom: 15` | `mb-4` |
| **Responsividade** | `@media (max-width: 768px)` | `Dimensions.get('window')` | `md:flex-row` |
| **Evento de clique** | `onClick` / `addEventListener` | `onPress` | `onClick` |
| **Input de texto** | `<input type="text">` | `<TextInput />` | `<input className="...">` |
| **Unidades** | px, rem, %, vw, vh | Apenas números (dp) | Classes predefinidas |
| **Herança de estilo** | Sim (cascata) | Não existe cascata | Sim (cascata CSS) |
| **Hover/animação** | `:hover`, `transition` | `Animated API` | `hover:bg-...` |

---

## 💡 Destaque Pedagógico

### O modelo mental é IDÊNTICO:

```
┌─────────────────────────────────────────────────────┐
│              FLEXBOX É UNIVERSAL                     │
├─────────────────────────────────────────────────────┤
│                                                     │
│   CSS:          display: flex;                      │
│                 flex-direction: column;             │
│                 justify-content: center;            │
│                 align-items: center;                │
│                                                     │
│   React Native: flexDirection: 'column',           │
│                 justifyContent: 'center',          │
│                 alignItems: 'center',              │
│                                                     │
│   Tailwind:     className="flex flex-col            │
│                 justify-center items-center"        │
│                                                     │
│   ✅ MESMA LÓGICA — sintaxe diferente!             │
└─────────────────────────────────────────────────────┘
```

### Diferenças-chave para lembrar:

1. **Web** → Unidades flexíveis (rem, %, vw). Cascata CSS existe.
2. **React Native** → Apenas números (pixels independentes). Sem cascata.
3. **Tailwind** → Classes utilitárias que geram CSS real. Produtividade.

### O formulário segue o mesmo fluxo em TODAS:

```
1. Capturar dados do usuário     (input/TextInput)
2. Validar dados                 (regex, condições)
3. Dar feedback visual           (texto/Alert)
4. Limpar formulário             (reset/setState)
```

---

## 🚀 Guia de Execução

### Web Puro (HTML + CSS + JS)

```bash
# Opção 1: Extensão Live Server no VS Code
# Clique direito no index.html → "Open with Live Server"

# Opção 2: Via terminal
npx live-server .
```

### React com Tailwind

```bash
# Criar projeto
npx create-react-app landing-page --template typescript
cd landing-page

# Instalar Tailwind
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Configurar tailwind.config.js:
# content: ["./src/**/*.{js,ts,jsx,tsx}"]

# Adicionar no src/index.css:
# @tailwind base;
# @tailwind components;
# @tailwind utilities;

# Rodar
npm start
```

### Expo/React Native

```bash
# Criar projeto
npx create-expo-app landing-mobile --template blank-typescript
cd landing-mobile

# Rodar
npx expo start

# Testar no celular: instalar app "Expo Go"
# Escanear o QR Code que aparece no terminal
```

---

## 🏁 Conclusão

A **mesma landing page** foi construída em 3 tecnologias. O que muda:
- **Sintaxe** de estilização (CSS, objetos JS, classes Tailwind)
- **Componentes** de entrada (input vs TextInput)
- **Eventos** (onClick vs onPress)

O que **NÃO muda**:
- Estrutura lógica (header → hero → serviços → contato → footer)
- Flexbox como modelo de layout
- Validação de formulário (mesma lógica condicional)
- Componentização (dividir em partes menores)

> *"Aprenda o conceito uma vez. Aplique em qualquer tecnologia."*
> — Profª Luana Cristina, ETE Pernambuco
