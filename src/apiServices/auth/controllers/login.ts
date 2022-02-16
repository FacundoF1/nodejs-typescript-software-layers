import { Request, Response } from "express";
import { Account, Handler, modelAuthLogin, TokenGenerator } from "../model";
import { Authorizer } from '../services';

export class LoginHandler implements Handler {

    private _req: Request;
    private _res: Response;
    private tokenGenerator: TokenGenerator

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {
        try {
            const body = this.getRequestBody();
            // validate result session Token
            if ( !body ) this._res.status(404).end();
            const { username, password } = body;
            const sessionToken = await new Authorizer().generatorToken({ username, password }); // viene undefined

            sessionToken
                ? this._res.json({...body, sessionToken}).end()
                : this._res.status(404).end()

        } catch (error) {
            this._res.sendStatus(404).end();
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