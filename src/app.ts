import express from 'express';
import logger from 'morgan';
import routes from './routes';
import { error404Handler, errorHandler } from './middleware/index';

const app = express();
app.use(logger('dev', {}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/v1', routes);

app.use(error404Handler);
app.use(errorHandler);

export { app };
