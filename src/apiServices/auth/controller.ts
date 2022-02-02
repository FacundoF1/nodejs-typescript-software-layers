import { Request, Response } from "express";
import { Account, Handler, modelAuthLogin, TokenGenerator } from "./model";

class LoginHandler implements Handler {

    private req: Request;
    private res: Response;
    private tokenGenerator: TokenGenerator

    constructor(req: Request, res: Response) {
        this.req = req;
        this.res = res;
    }

    async handlerRequest() {
        console.log('handleRequest');
        const body = this.getRequestBody();
        const sessionToken = await this.tokenGenerator.generatorToken(body);

        !sessionToken
            ? this.res.json(new Error('Not found')).end()
            : this.res.json(body).end();
    }

    private getRequestBody(): Account | undefined {
        try {
            const { body } = this.req;
            console.log('llega body: ', body);
            return new modelAuthLogin(body);
        } catch (error) {
            this.req.on('error', (error) => console.error(error));
        }
    }
}

export default {
    LoginHandler: async (req, res) => await new LoginHandler(req, res).handlerRequest()
}
