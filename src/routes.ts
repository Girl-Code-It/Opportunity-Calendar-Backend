import { Router, Request, Response, NextFunction } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ok' });
});
