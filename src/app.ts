import express, { Application, Request, Response, NextFunction } from 'express';

class Server {
  private app: Application = express();
  private readonly MAX_PAYLOAD_LIMIT: string = '5mb';
  private readonly PORT: number = parseInt(process.env.PORT, 10) || 5000;

  constructor() {
    this.configure();
  }

  private configure(): void {
    this.app.use(express.json({ limit: this.MAX_PAYLOAD_LIMIT }));
  }

  public listen(): Promise<number> {
    return new Promise((resolve, reject) => {
      this.app.listen(this.PORT, () => resolve(this.PORT));
    });
  }
}

// start the server
const server = new Server();
server.listen().then((port) => console.log(`listening on ${port}`));
