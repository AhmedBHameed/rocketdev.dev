import express from 'express';
import next from 'next';
import cookieParser from 'cookie-parser';
import {IS_PROD, PORT, HOST_NAME} from '../config/environments';
import {initLogger, logger} from './services';
import cors from 'cors';
import http from 'http';
import environment from './config/environment';
import helmet from 'helmet';
import xss from './middleware/cleanXss.middleware';
import initApolloServer from './graphql/apolloServer.graphql';

const {SERVER_ALLOWED_ORIGIN, SERVER_BASE_PATH, SERVER_PORT} = environment;

const nextApp = next({dev: !IS_PROD, hostname: HOST_NAME, port: PORT});
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  initLogger();
  const app = express();

  app.disable('x-powered-by');
  app.use(
    cors({
      origin: (origin, callback) => {
        if (!origin || SERVER_ALLOWED_ORIGIN?.includes(origin)) {
          callback(null, true);
          return;
        }
        const error = new Error('Not allowed by CORS');
        logger.error(error);
        callback(error);
      },
      credentials: true,
    })
  );
  app.use(helmet({contentSecurityPolicy: false}));
  app.use(xss());
  app.use(cookieParser());
  app.use(express.json());
  app.use(express.urlencoded({extended: true}));

  const apolloServer = await initApolloServer();
  await apolloServer.start();

  apolloServer.applyMiddleware({
    app,
    path: `${SERVER_BASE_PATH}/graphql`,
    cors: false,
  });

  app.all('*', (req, res) => {
    return handle(req, res);
  });
  // app.get('/changelog', changelogController);
  const httpServer = http.createServer(app);

  httpServer.listen(SERVER_PORT, () => {
    console.log(`> Ready on http://localhost:${SERVER_PORT}`);
  });
});
