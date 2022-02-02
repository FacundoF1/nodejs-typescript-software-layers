import { Request, Response } from "express";
import { Account, Handler, modelAuthLogin, TokenGenerator } from "../model";

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
            const sessionToken = await this.tokenGenerator.generatorToken(body);
            !sessionToken
                ? this._res.json(new Error('Not found')).end()
                : this._res.json(body).end();
        } catch (error) {
            this._res.sendStatus(404).end();
        }

    }

    private getRequestBody(): Account | undefined {
        try {
            const { body } = this._req;
            console.log('llega body: ', body);
            return new modelAuthLogin(body);
        } catch (error) {
            this._req.on('error', (error) => console.error(error));
            this._res.sendStatus(404).end();
        }
    }
}