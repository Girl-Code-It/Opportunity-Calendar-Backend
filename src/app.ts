import express, { Application, Request, Response, NextFunction } from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hello Open Source Champs from Opportunity Calendar Backend !!');
});

app.listen(5000, () => console.log('Server Running at port 5000'));
