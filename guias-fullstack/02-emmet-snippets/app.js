/**
 * app.js — Express API demonstrando snippets de produtividade JavaScript
 * 
 * Snippets utilizados na criação deste arquivo:
 * - imp  → import/require
 * - afn  → arrow function
 * - clg  → console.log
 * - trycatch → bloco try/catch
 * - forEach/map → iteradores
 */

const express = require('express');
const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());

// Dados em memória (simulando banco)
const produtos = [
  { id: 1, nome: 'Notebook Pro', preco: 4500.00, categoria: 'Eletrônicos' },
  { id: 2, nome: 'Mouse Gamer', preco: 250.00, categoria: 'Periféricos' },
  { id: 3, nome: 'Teclado Mecânico', preco: 680.00, categoria: 'Periféricos' },
  { id: 4, nome: 'Monitor 4K', preco: 3200.00, categoria: 'Eletrônicos' },
  { id: 5, nome: 'Webcam HD', preco: 350.00, categoria: 'Periféricos' },
];

// Snippet: exroute → GET all
app.get('/api/produtos', (req, res) => {
  try {
    const { categoria } = req.query;
    const resultado = categoria
      ? produtos.filter((p) => p.categoria.toLowerCase() === categoria.toLowerCase())
      : produtos;
    res.json({ total: resultado.length, data: resultado });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Snippet: exroute → GET by ID
app.get('/api/produtos/:id', (req, res) => {
  try {
    const produto = produtos.find((p) => p.id === parseInt(req.params.id));
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.json(produto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Snippet: exroute → POST create
app.post('/api/produtos', (req, res) => {
  try {
    const { nome, preco, categoria } = req.body;
    if (!nome || !preco) {
      return res.status(400).json({ error: 'Nome e preço são obrigatórios' });
    }
    const novoProduto = {
      id: produtos.length + 1,
      nome,
      preco: parseFloat(preco),
      categoria: categoria || 'Geral',
    };
    produtos.push(novoProduto);
    res.status(201).json(novoProduto);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Snippet: afn → Função utilitária
const calcularTotal = (items) => {
  return items.reduce((acc, item) => acc + item.preco, 0);
};

// Snippet: exroute → GET estatísticas
app.get('/api/stats', (req, res) => {
  try {
    const categorias = [...new Set(produtos.map((p) => p.categoria))];
    const stats = categorias.map((cat) => {
      const itens = produtos.filter((p) => p.categoria === cat);
      return { categoria: cat, quantidade: itens.length, total: calcularTotal(itens) };
    });
    res.json({ totalProdutos: produtos.length, valorTotal: calcularTotal(produtos), porCategoria: stats });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  console.log(`📦 Endpoints disponíveis:`);
  console.log(`   GET  /api/produtos`);
  console.log(`   GET  /api/produtos/:id`);
  console.log(`   POST /api/produtos`);
  console.log(`   GET  /api/stats`);
});
