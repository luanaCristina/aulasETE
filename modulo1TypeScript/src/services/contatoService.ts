import fs from 'fs';
import path from 'path';
import { Contato, ValidationResult } from '../models/Contato';

const DATA_PATH = path.join(__dirname, '..', '..', 'data', 'contatos.json');

/**
 * Valida os dados do formulário de contato.
 * Retorna um objeto com o resultado da validação.
 */
export function validarContato(dados: Partial<Contato>): ValidationResult {
  const erros: string[] = [];

  if (!dados.nome || dados.nome.trim().length < 3) {
    erros.push('Nome deve ter pelo menos 3 caracteres.');
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!dados.email || !emailRegex.test(dados.email)) {
    erros.push('E-mail inválido.');
  }

  if (!dados.mensagem || dados.mensagem.trim().length < 10) {
    erros.push('Mensagem deve ter pelo menos 10 caracteres.');
  }

  return { valido: erros.length === 0, erros };
}

/**
 * Salva uma mensagem de contato no arquivo JSON.
 */
export function salvarContato(dados: Contato): void {
  let contatos: Contato[] = [];

  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    contatos = JSON.parse(raw);
  } catch {
    contatos = [];
  }

  dados.id = contatos.length + 1;
  dados.recebidoEm = new Date().toLocaleString('pt-BR');
  contatos.push(dados);

  fs.writeFileSync(DATA_PATH, JSON.stringify(contatos, null, 2), 'utf-8');
}

/**
 * Lista todos os contatos recebidos.
 */
export function listarContatos(): Contato[] {
  try {
    const raw = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(raw) as Contato[];
  } catch {
    return [];
  }
}
