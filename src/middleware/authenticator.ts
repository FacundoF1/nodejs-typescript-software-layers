import { AccessRight, TokenValidator } from '@software-layes/apiServices/auth/model';
import {
    Request,
    Response
} from 'express';
import { Authorizer } from '@software-layes/apiServices/auth/services';

export class opertaionAuthorized {

    private tokenValidator: Authorizer = new Authorizer();;
    private _req: Request;
    private _next;

    constructor(req: Request, _: Response, next) {
        this._req = req;
        this._next = next;
    }

    public async opertaionAuthorized(operation: AccessRight): Promise<boolean> {
        const token = this._req.headers.authorization;
        if (!token) { return false; }
        else {
            const tokenRigths = await this.tokenValidator.validateToken(token);
            const isValid = tokenRigths.accessRights.includes(operation);
            return isValid ? this._next() : this._next( new Error('Invalid authentication') );
        }
    }

}