import { AccessRight } from '@software-layes/apiServices/auth/model';
import createError from 'http-errors';
import { opertaionAuthorized } from './authenticator';
import { expressCacheMiddleware } from './cache';
// import * as baseRequest from './baseResquest';

const error404Handler = (req, res, next) => {
  next(createError(404));
};

// eslint-disable-next-line
const errorHandler = (err, req, res, _next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
};

export default {
  // errorHandler: errorHandler,
  // error404Handler: error404Handler,
  expressCacheMiddleware: expressCacheMiddleware,
  opertaionAuthorized: async (req: Request | any, res: Response | any, next) => await new opertaionAuthorized(req, res, next).opertaionAuthorized(AccessRight.READ),
  // baseRequest
};
