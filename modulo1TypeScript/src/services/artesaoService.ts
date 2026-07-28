import fs from 'fs';
import path from 'path';
import { Artesao } from '../models/Artesao';

const DATA_PATH = path.join(__dirname, '..', '..', 'data', 'artesaos.json');

/**
 * Carrega todos os artesãos do arquivo JSON.
 */
export function listarArtesaos(): Artesao[] {
  try {
    const data = fs.readFileSync(DATA_PATH, 'utf-8');
    return JSON.parse(data) as Artesao[];
  } catch {
    return [];
  }
}

/**
 * Busca um artesão pelo ID.
 */
export function buscarPorId(id: number): Artesao | undefined {
  const artesaos = listarArtesaos();
  return artesaos.find((a) => a.id === id);
}
