import userModel from '../services';
import {
    Request,
    Response
} from 'express';
import { systemDecorator } from '../../../decorators';
const { countInstances } = systemDecorator;

@countInstances
class updateUser {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {
        const { body: { username, email }, params: { id } } = this._req;

        if (!username || !email) return this._res.sendStatus(400).end();

        const user = await userModel.getUser(id);
        if (!user) return this._res.sendStatus(404).end();

        await userModel.updateUser(id, {
            username: username,
            email: email,
        });

        return this._res.sendStatus(204).end();
    }

}

export {
    updateUser
}
