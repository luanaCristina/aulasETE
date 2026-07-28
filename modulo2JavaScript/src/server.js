/**
 * Entry Point — Salão Beleza & Arte
 * Módulo II JavaScript — ETE Advogado José David Gil Rodrigues
 */
require('dotenv').config();
const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log('💇 Salão Beleza & Arte — API iniciando...');
    console.log(`📍 Acesse: http://localhost:${PORT}`);
    console.log('─'.repeat(40));
});
