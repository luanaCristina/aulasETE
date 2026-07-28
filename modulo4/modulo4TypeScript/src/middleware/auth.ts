import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request { userId?: number; }

const SECRET = process.env.JWT_SECRET || 'default-secret';

export function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void {
  const header = req.headers.authorization;
  if (!header?.startsWith('Bearer ')) { res.status(401).json({ error: 'Token ausente.' }); return; }
  try {
    const payload = jwt.verify(header.split(' ')[1], SECRET) as { sub: number };
    req.userId = Number(payload.sub);
    next();
  } catch { res.status(401).json({ error: 'Token inválido.' }); }
}
