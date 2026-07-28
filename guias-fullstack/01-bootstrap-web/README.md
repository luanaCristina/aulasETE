# 01 - Bootstrap Web Application

## Descrição

Aplicação Web funcional demonstrando os principais recursos do Bootstrap 5:
- Sistema de Grid responsivo (Flexbox/Containers/Breakpoints)
- Componentes de mercado (Navbar, Cards, Modal, Badges, Forms)
- Carousel interativo com acessibilidade completa (ARIA)

## Como Visualizar

### Opção 1: Live Server (VS Code / Kiro)

1. Instale a extensão **Live Server** no VS Code/Kiro
2. Clique com botão direito no arquivo `index.html`
3. Selecione **"Open with Live Server"**
4. O navegador abrirá automaticamente em `http://127.0.0.1:5500`

### Opção 2: Servidor Local com Python

```bash
cd aula/guias-fullstack/01-bootstrap-web/
python3 -m http.server 8080
```

Acesse: http://localhost:8080

### Opção 3: Servidor Local com Node.js

```bash
npx serve .
```

Acesse: http://localhost:3000

## Estrutura de Arquivos

```
01-bootstrap-web/
├── index.html    # Página principal com todos os componentes
├── styles.css    # Estilos customizados complementares ao Bootstrap
└── README.md     # Este arquivo
```

## Tecnologias

- Bootstrap 5.3.3 (via CDN)
- HTML5 semântico
- CSS3 customizado
- Sem dependências de instalação (tudo via CDN)
