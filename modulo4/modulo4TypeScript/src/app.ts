import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import collectionRoutes from './routes/collectionPoint.routes';
import pickupRoutes from './routes/pickup.routes';
import authRoutes from './routes/auth.routes';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (_req: Request, res: Response) => {
  res.json({ app: 'EcoColeta Recife', version: '1.0.0', stack: 'TypeScript/Express' });
});

app.use('/api/auth', authRoutes);
app.use('/api/collection-points', collectionRoutes);
app.use('/api/pickups', pickupRoutes);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.statusCode || 500;
  res.status(status).json({ error: { code: err.code || 'INTERNAL', message: err.message } });
});

export default app;
