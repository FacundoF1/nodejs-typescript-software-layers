import userModel from '../services';
import userDto from '../dto';
import {
    Request,
    Response
} from 'express';
import { systemDecorator } from '../../../decorators';
import { Handler } from '../model';
const { countInstances } = systemDecorator;

@countInstances
class GetUsers implements Handler  {

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

        return this._res.json(userDto.multiple(users));
    }

}

@countInstances
class GetUser {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
        this.handleRequest = this.handleRequest;
    }

    async handleRequest() {

        // lack validate type de carateres query
        const { params: { id }, body } = this._req;
        const user = await userModel.GetUserForId(id);
        if (!user) return this._res.sendStatus(404);

        return this._res.json(userDto.single(user)).end();
    }

}

@countInstances
class GetUserBy {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {

        // lack validate type de carateres query
        const { params } = this._req;
        const user = await userModel.getUser( params );
        if (!user) return this._res.sendStatus(404);

        return this._res.json(user).end();
    }

}

export {
    GetUser,
    GetUsers,
    GetUserBy
}