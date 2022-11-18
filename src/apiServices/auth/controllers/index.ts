import { Request, Response } from 'express';
import { LoginHandler } from './login';

const loginHandler = (req: Request | any, res: Response | any) => new LoginHandler(req, res).handleRequest()

export default {
    LoginHandler: loginHandler
}