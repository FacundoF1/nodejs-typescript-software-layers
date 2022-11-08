import userModel from '../services';
import userDto from '../dto';
import {
    Request,
    Response
} from 'express';
import { systemDecorator } from '../../../decorators';
const { countInstances } = systemDecorator;

@countInstances
class getUsers {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {

        // lack validate type de carateres query
        const { query: { page, limit }, user } = this._req;

        const res_page = parseInt((page || 0).toString(), 10);
        const res_limit = parseInt((limit || 10).toString(), 10);

        const users = await userModel.getUsers(res_page, res_limit);

        return this._res.send(userDto.multiple(users)).end();
    }

}

@countInstances
class getUser {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {

        // lack validate type de carateres query
        const { params: { id }, body } = this._req;
        const user = await userModel.getUserForId(id);
        if (!user) return this._res.sendStatus(404);

        return this._res.send(userDto.single(user)).end();
    }

}

@countInstances
class postUserForBody {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {

        // lack validate type de carateres query
        const { body } = this._req;
        const user = await userModel.getUser(body);
        console.log('res getUserForBody', user, body);
        if (!user) return this._res.sendStatus(404);

        // userDto.single(user)
        return this._res.json(user).end();
    }

}

export {
    getUser,
    getUsers,
    postUserForBody
}