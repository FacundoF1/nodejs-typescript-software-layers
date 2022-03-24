import { UserDBAccess } from '../services';
import userDto from '../dto';
import {
    Request,
    Response
} from 'express';
import { systemDecorator } from '../../../decorators';
const { countInstances } = systemDecorator;
const userModel = new UserDBAccess();

@countInstances
export class createUser {

    private _req: Request | any;
    private _res: Response;

    constructor(req: Request, res: Response) {
        this._req = req;
        this._res = res;
    }

    async handleRequest() {

        const { body: { username, password, email }, user } = this._req;

        if (!username || !password || !email) return this._res.sendStatus(400).end();

        // lack validate type de carateres body

        const users = await userModel.createUser({
            username,
            password,
            email,
        });

        return this._res.send(userDto.single(users)).end();
    }

}
