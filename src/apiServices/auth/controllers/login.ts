import { Request, Response } from "express";
import { Account, Handler, modelAuthLogin, TokenGenerator } from "../model";
import { Authorizer } from '../services';
import { validateAttr } from '@middlewares/index'

export class LoginHandler implements Handler {

    private _req: Request;
    private _res: Response;
    // private tokenGenerator: TokenGenerator

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {
        try {
            const body = this.getRequestBody();
            const { username, password } = body;
            const sessionToken = await new Authorizer().generatorToken({ username, password }); // viene undefined

            sessionToken
                ? this._res.send({...body, sessionToken}).end()
                : this._res.status(404).end()

        } catch (error) {
            this._res.status(404).end();
        }

    }

    private getRequestBody(): Account | any {
        try {
            const { body } = this._req;
            const { username, password } = new modelAuthLogin(body);
            const result = validateAttr('username', username)
                .attr('password', password)
                .toObject();
            const isValidateModel = Object.keys(result).length > 0;
            if( !isValidateModel ){ throw new Error('No se encontraron los datos'); }
            return result;
        } catch (err) {
            this._res.status(404).end();
        } finally {
            return new modelAuthLogin({});
        }
    }
}