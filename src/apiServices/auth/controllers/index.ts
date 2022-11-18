import { Request, Response } from 'express';
import { LoginHandler } from './login';

const loginHandler = async (req: Request | any, res: Response | any) => await new LoginHandler(req, res).handleRequest()

export default {
    LoginHandler: loginHandler
}