import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import routes from './routes';
import { AppError } from './models/errors';

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', routes);

// Error handler global
app.use((err: Error, req: Request, res: Response, _next: NextFunction) => {
  if (err instanceof AppError) {
    res.status(err.statusCode).json({ error: err.message, code: err.code });
    return;
  }
  console.error(err);
  res.status(500).json({ error: 'Erro interno do servidor.' });
});

export default app;
