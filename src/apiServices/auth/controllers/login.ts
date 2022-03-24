import { BaseRequestHandler } from "@software-layes/services/request/BaseRequestHandler";
import { Request, Response } from "express";
import { Account, modelAuthLogin } from "../model";
import { Authorizer } from '../services';

export class LoginHandler extends BaseRequestHandler  {

    constructor(req: Request, res: Response) {
        super(req, res);
    }

    async handleRequest(): Promise<Response> {
        try {
            const body = this.getRequestBody();
            // validate result session Token
            if ( !body ) this._res.status(404).end();
            const { username, password } = body;

            const sessionToken = await new Authorizer().generatorToken({ username, password })[0]; // viene undefined

            return sessionToken
                ? this._res.json({...body, sessionToken}).end()
                : this._res.status(404).end()

        } catch (error) {
            return this._res.sendStatus(404).end();
        }

    }

    private getRequestBody(): Account {
        try {
            const { body } = this._req;
            const result = new modelAuthLogin(body);
            const isValidateModel = Object.keys(result).length > 0;
            if( !isValidateModel ){ throw new Error('No se encontraron los datos'); }
            return result;
        } catch (error) {
            this._req.on('error', (error) => console.error(error));
            this._res.sendStatus(404).end();
            return new modelAuthLogin({});
        }
    }
}