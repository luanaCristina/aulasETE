import express, { Request, Response, NextFunction } from 'express';
import authRoutes from './routes/auth.routes';
import taskRoutes from './routes/task.routes';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = err.statusCode || 500;
  res.status(status).json({
    error: { code: err.code || 'INTERNAL', message: err.message }
  });
});

export default app;
