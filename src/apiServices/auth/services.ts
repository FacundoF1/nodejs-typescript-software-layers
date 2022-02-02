import { UserCredential } from './model';
import userModel from '../users/services';

export class UserCredentialsDBAccess {

    constructor() { }

    public async putUserCredential(userCredentials: UserCredential): Promise<any> {

        // if (!username || !email) return this._res.sendStatus(400).end();
        return await userModel.createUser(userCredentials);
    }

    // public async getUserCredential(username: string, password: string): Promise<UserCredential> {

    // }

}