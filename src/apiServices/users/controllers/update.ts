import { UserDBAccess } from '../services';
import {
    Request,
    Response
} from 'express';
import { systemDecorator } from '../../../decorators';
import { UserModel } from '../model';
const { countInstances } = systemDecorator;

@countInstances
class updateUser {

    private _req: Request | any;
    private _res: Response;
    private userModel: UserDBAccess<UserModel> = new UserDBAccess<UserModel>();

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {
        const { body, params: { id } } = this._req;

        if ( !Object.keys(body).length ) return this._res.sendStatus(400).end();

        const user: UserModel = await this.userModel.getUserForId(id);
        if (!user) return this._res.sendStatus(404).end();

        await this.userModel.updateUser(user);

        return this._res.sendStatus(204).end();
    }

}

export {
    updateUser
}
