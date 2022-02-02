import { Account, SessionToken, TokenGenerator, UserCredential } from './model';
import userModel from '../users/services';

export class UserCredentialsDBAccess {

    constructor() { }

    public async putUserCredential(userCredentials: UserCredential): Promise<any> {
        return await userModel.createUser(userCredentials);
    }

    public async getUserCredential(username: string, password: string): Promise<UserCredential | any> {
        try {
            const result = await userModel.getUser({ username, password });
            return result && result.length > 0
                ? result
                : undefined;
        } catch (error) {
            return error;
        }
    }

}
export class Authorizer implements TokenGenerator {
    private userCredDBAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();

    async generatorToken(account: Account | undefined): Promise<SessionToken | undefined> {

        if (!account) { return undefined; }

        const { username, password } = account;

        const result = await this.userCredDBAccess.getUserCredential(username, password);
        console.log('authorizer: ', result);
        return result ? { tokenId: 'someTokenID' } : undefined;
    }
}