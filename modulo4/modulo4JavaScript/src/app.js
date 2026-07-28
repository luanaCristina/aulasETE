const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// Rotas
app.get('/', (req, res) => res.json({ app: 'EcoColeta Recife', stack: 'Node.js/Express' }));

app.get('/api/collection-points', (req, res) => {
  const { lat, lng, radius } = req.query;
  // TODO: buscar do banco com cálculo de distância
  res.json({ message: 'TODO: implementar busca geoespacial', lat, lng, radius });
});

app.post('/api/pickups', (req, res) => {
  // TODO: criar agendamento
  res.status(201).json({ message: 'TODO: implementar agendamento' });
});

// Error handler
app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message });
});

module.exports = app;
