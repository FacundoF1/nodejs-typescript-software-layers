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
            const sessionToken = await new Authorizer().generatorToken(body)
            console.log('result: ', sessionToken)
            sessionToken
                ? this._res.json(new Error('Not found')).end()
                : this._res.json(body).end();
        } catch (error) {
            this._res.sendStatus(404).end();
        }

    }

    private getRequestBody(): Account | undefined {
        try {
            const { body } = this._req;
            const result = new modelAuthLogin(body);
            const isValidateModel = Object.keys(result).length > 0;
            return isValidateModel ? result : undefined;
        } catch (error) {
            this._req.on('error', (error) => console.error(error));
            this._res.sendStatus(404).end();
            return new modelAuthLogin({});
        }
    }
}