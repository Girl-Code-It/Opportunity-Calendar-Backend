import express, { Application, Request, Response, NextFunction } from 'express';
import routes from './routes';

class Server {
  private app: Application = express();
  private readonly MAX_PAYLOAD_LIMIT: string = '5mb';
  private readonly PORT: number = parseInt(process.env.PORT, 10) || 5000;

  constructor() {
    this.configure();
  }

  private configure(): void {
    this.app.use(express.json({ limit: this.MAX_PAYLOAD_LIMIT }));
    this.app.use(routes);
  }

  public listen(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.app.listen(this.PORT, () => resolve(this.PORT));
    });
  }
}

// start the server
const server: Server = new Server();
server.listen().then((port) => console.log(`listening on ${port}`));
