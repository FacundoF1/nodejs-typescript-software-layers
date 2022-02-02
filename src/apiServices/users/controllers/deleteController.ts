import userModel from '../services';
import {
    Request,
    Response
} from 'express';
import { systemDecorator } from '../../../decorators';
const { countInstances } = systemDecorator;

@countInstances
export class deleteUser {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {

        const { params: { id } } = this._req;

        const result = await userModel.deleteUser(id);
        const status = !result ? 404 : 204;

        return this._res.sendStatus(status).end();
    }
}
