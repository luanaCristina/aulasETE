import { Router, Response, NextFunction } from 'express';
import { authMiddleware, AuthRequest } from '../middleware/auth';
import { validateTransition, TaskStatus } from '../services/task.service';

const router = Router();

router.patch('/:id/move', authMiddleware, (req: AuthRequest, res: Response, next: NextFunction): void => {
  try {
    const currentStatus: TaskStatus = 'TODO'; // TODO: buscar do banco
    const { status } = req.body;
    validateTransition(currentStatus, status);
    res.json({ id: req.params.id, status });
  } catch (err) {
    next(err);
  }
});

export default router;
