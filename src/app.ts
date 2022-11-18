import express from 'express';
import logger from 'morgan';
import helmet from 'helmet';
import compression from 'compression';
import { error404Handler, errorHandler } from './middlewares/index';

import endpoints from './routes/endpoints';
import swaggerDoc from './services/swagger/controller';

const app = express();
app.use(logger('dev', {}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

endpoints(app);
swaggerDoc(app);

// Seguridad
app.use( helmet() );
app.use( compression() );

app.use(error404Handler);
app.use(errorHandler);

export { app };
