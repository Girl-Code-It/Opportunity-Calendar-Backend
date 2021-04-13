import dotenv from 'dotenv';
import cluster from 'cluster';
import os from 'os';

dotenv.config();

import start from './app.js';

if (process.env.CLUSTER === 'yes') {
  const numCPUs = os.cpus().length;

  if (cluster.isMaster) {
    console.log('Starting app in cluster mode with ' + numCPUs + ' workers');
    console.log(`Master ${process.pid} is running`);
    for (let i = 0; i < numCPUs; i++) {
      cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
      console.log(
        `worker ${worker.process.pid} died with code: ${code} and signal: ${signal}`
      );
      console.log('starting new worker');
      cluster.fork();
    });
  } else {
    console.log(`Worker ${process.pid} started`);
    start();
  }
} else {
  console.log(
    'Starting app in non-cluster mode. (To start in cluster mode, pass CLUSTER=yes in config file)'
  );
  start();
}
