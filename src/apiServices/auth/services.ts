import { Account, SessionToken, TokenGenerator, UserCredential } from './model';
import axios from 'axios';

export const getUser = async (data) => {
    try {
        const { data: response_data } = await axios.post(`http://localhost:3000/v1/users/body`, data);
        console.log(response_data);
        if ( Object.keys(response_data).length === 0 || response_data.length === 0 ) { throw new Error('auth getUser: not found data' + response_data) }
        return response_data[0];
    } catch (error) {
        console.error('getUser error: ', error.error);
        return error;
    }

};

export const createUser = async (user) => {
    console.log(user);
    try {
        const response: [] = await axios.post(`http://localhost:3000/v1/users`, user);
        console.log('response: ', response);
        return response;
    } catch (error) {
        console.error('error: ', error.error);
        return error;
    }
};

export class UserCredentialsDBAccess {

    constructor() { }

    public async putUserCredential(userCredentials: UserCredential): Promise<any> {
        return await createUser(userCredentials);
    }

    public async getUserCredential(username: string, password: string): Promise<UserCredential | any> {
        try {
            const result = await getUser({ username, password });
            console.log('getUserCredential: ', result);
            return result;
        } catch (error) {
            return error;
        }
    }

}
export class Authorizer implements TokenGenerator {
    private userCredDBAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();

    async generatorToken(account: Account): Promise<SessionToken | undefined> {

        if (!account) { return undefined; }

        const { username, password } = account;

        const result = await this.userCredDBAccess.getUserCredential(username, password);

        console.log('authorizer: ', result);

        return result ? { tokenId: 'someTokenID' } : undefined;
    }
}
