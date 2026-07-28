const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxlength: 100 },
  description: { type: String, trim: true, maxlength: 500 },
  status: {
    type: String,
    enum: ['pendente', 'em_andamento', 'concluida'],
    default: 'pendente',
  },
  priority: {
    type: String,
    enum: ['baixa', 'media', 'alta', 'urgente'],
    default: 'media',
  },
  category: {
    type: String,
    enum: ['limpeza', 'educacao', 'saude', 'cultura', 'infraestrutura'],
    default: 'infraestrutura',
  },
  assignee: { type: String, trim: true },
  dueDate: { type: Date },
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);
