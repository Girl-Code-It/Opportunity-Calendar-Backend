import { Router, Request, Response, NextFunction, IRouter } from 'express';

const router: IRouter = Router();

router.get('/', (req: Request, res: Response) => {
  res.json({ message: 'ok' });
});

export default router;
