const express = require('express');
const cors = require('cors');
const taskRoutes = require('./routes/taskRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ app: 'ComUnidade API', status: 'online', version: '1.0.0' });
});

app.use('/api/tasks', taskRoutes);

// Error handler global
app.use((err, req, res, next) => {
  console.error(err.message);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

module.exports = app;
