import { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import { redisMiddleware } from './cache';
// import * as baseRequest from './baseResquest';

const error404Handler = (req: Request | any, res: Response | any, next: NextFunction) => {
  next(createError(404));
};

// eslint-disable-next-line
const errorHandler = (err: any, req: Request | any, res: Response | any, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({
    message: err.message
  });
};

export {
  errorHandler,
  error404Handler,
  redisMiddleware,
  // baseRequest
};
