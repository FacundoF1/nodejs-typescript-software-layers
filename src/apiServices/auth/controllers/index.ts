import { Request, Response } from 'express';
import { LoginHandler } from './login';

export default {
    LoginHandler: async (req: Request | any, res: Response | any) => await new LoginHandler(req, res).handleRequest()
}