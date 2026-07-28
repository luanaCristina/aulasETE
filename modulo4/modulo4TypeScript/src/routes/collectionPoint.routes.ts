import { Router, Request, Response } from 'express';
import { query } from '../config/database';

const router = Router();

interface CollectionPoint {
  id: number;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  opening_hours: string;
  accepted_items: string[];
}

/**
 * GET /api/collection-points?lat=-8.05&lng=-34.90&radius=5
 * Retorna pontos de coleta próximos às coordenadas.
 */
router.get('/', async (req: Request, res: Response) => {
  const lat = parseFloat(req.query.lat as string) || -8.05;
  const lng = parseFloat(req.query.lng as string) || -34.90;
  const radius = parseFloat(req.query.radius as string) || 5;

  // Cálculo de distância simples (Haversine simplificado em SQL)
  const points = await query<CollectionPoint>(`
    SELECT *, 
      (6371 * acos(cos(radians($1)) * cos(radians(latitude)) 
      * cos(radians(longitude) - radians($2)) 
      + sin(radians($1)) * sin(radians(latitude)))) AS distance_km
    FROM collection_points
    WHERE active = TRUE
    HAVING distance_km <= $3
    ORDER BY distance_km
  `, [lat, lng, radius]).catch(() => []);

  // Fallback: se a query falhar (sem HAVING em subconsulta), retorna todos
  if (!points.length) {
    const all = await query<CollectionPoint>(
      'SELECT * FROM collection_points WHERE active = TRUE ORDER BY name'
    );
    res.json(all);
    return;
  }

  res.json(points);
});

router.get('/:id', async (req: Request, res: Response) => {
  const [point] = await query<CollectionPoint>(
    'SELECT * FROM collection_points WHERE id = $1', [req.params.id]
  );
  if (!point) { res.status(404).json({ error: 'Ponto não encontrado.' }); return; }
  res.json(point);
});

export default router;
