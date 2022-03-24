import {
    Request,
    Response
} from 'express';

export abstract class BaseRequestHandler {

    protected _req: Request;
    protected _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    abstract handleRequest(): Promise<Response>;

}