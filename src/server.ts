import express from 'express';
import compression from 'compression';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use(cors());
app.use(compression());

app.get('/', (req, res) => {
  res.send('Hola')
})

const PORT = 5200

const httpServer = createServer(app);

httpServer.listen(
  {
    port: PORT
  },
  () => console.log(`Listening in http://localhost:${PORT}`)
);
