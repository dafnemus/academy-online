import express from 'express';
import expressPlayGround from 'graphql-playground-middleware-express';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';

const app = express();

app.use(cors());
app.use(compression());

let server = null;

const startServer = async () => {
  server = new ApolloServer({
    schema,
    introspection: true,
  });
  await server.start();
  server.applyMiddleware({ app });
};

app.get(
  '/',
  expressPlayGround({
    endpoint: '/graphql',
  })
);

const PORT = 5200;
startServer();
const httpServer = createServer(app);

httpServer.listen(
  {
    port: PORT,
  },
  () => console.log(`Listening in http://localhost:${PORT}`)
);
