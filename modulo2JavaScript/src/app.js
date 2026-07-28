const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

// Rotas da API
app.use('/api', routes);

// Tratamento global de erros
app.use((err, req, res, next) => {
    console.error('Erro:', err.message);
    const status = err.statusCode || 500;
    res.status(status).json({
        error: { code: err.code || 'INTERNAL_ERROR', message: err.message }
    });
});

module.exports = app;
