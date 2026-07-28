/**
 * Script de Seed — Popula o banco com dados de exemplo
 * Rodar: node src/seed.js
 */
require('dotenv').config();
const mongoose = require('mongoose');
const Task = require('./models/Task');

const tasks = [
  {
    title: 'Limpar praça de Casa Forte',
    description: 'Mutirão de limpeza no sábado às 8h. Trazer sacos e luvas.',
    status: 'pendente',
    priority: 'alta',
    category: 'limpeza',
    assignee: 'Maria',
  },
  {
    title: 'Aula de reforço para crianças',
    description: 'Matemática e português, terça e quinta das 14h às 16h.',
    status: 'em_andamento',
    priority: 'media',
    category: 'educacao',
    assignee: 'João',
  },
  {
    title: 'Campanha de vacinação',
    description: 'Organizar ponto de vacinação na associação do bairro.',
    status: 'pendente',
    priority: 'urgente',
    category: 'saude',
    assignee: 'Ana',
  },
  {
    title: 'Festival cultural de fim de ano',
    description: 'Providenciar som, palco e barracas para o evento.',
    status: 'pendente',
    priority: 'media',
    category: 'cultura',
    assignee: 'Carlos',
  },
  {
    title: 'Consertar iluminação da rua principal',
    description: '3 postes sem luz. Abrir chamado na Neoenergia.',
    status: 'em_andamento',
    priority: 'alta',
    category: 'infraestrutura',
    assignee: 'Pedro',
  },
  {
    title: 'Pintar muro da escola',
    description: 'Grafite educativo com os alunos do 9º ano.',
    status: 'concluida',
    priority: 'baixa',
    category: 'cultura',
    assignee: 'Lúcia',
  },
];

async function seed() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('🍃 Conectado ao MongoDB');

    await Task.deleteMany({});
    console.log('🗑️  Tarefas antigas removidas');

    const result = await Task.insertMany(tasks);
    console.log(`✅ ${result.length} tarefas inseridas com sucesso!`);

    console.log('\nTarefas criadas:');
    result.forEach(t => console.log(`  • ${t.title} [${t.priority}]`));
  } catch (error) {
    console.error('❌ Erro:', error.message);
  } finally {
    await mongoose.disconnect();
    console.log('\n🔌 Desconectado do MongoDB');
  }
}

seed();
