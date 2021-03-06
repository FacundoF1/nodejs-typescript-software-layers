import { Account, SessionToken, TokenGenerator, UserCredential } from './model';
import axios from 'axios';
import { single } from './dto';
import { connectionNeDB } from '../../services/NeDb/dao';

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
    private sessionTokenDBAccess: SessionTokenDBAccess = new SessionTokenDBAccess();

    async generatorToken(account: Account): Promise<SessionToken | undefined> {

        if (!account) { return undefined; }
        const { username, password } = account;
        const result = await this.userCredDBAccess.getUserCredential(username, password);

        if( !result ){
            return;
        } else {
            const token: SessionToken = single({
                tokenId: 'someTokenID',
                username: username,
                valid: true,
                expirationTime: this.generateExpirationTime(),
                accessRights: result.accessRights
            });

            await this.sessionTokenDBAccess.storeSessionToken(token);
            return token;
        }

    }

    private generateExpirationTime() {
        return new Date(Date.now() + 60 * 60 * 1000);
    }

    private generateRandomTokenId(){
        return Math.random().toString(50).slice(2);
    }
}

export class SessionTokenDBAccess {

    private sessionDao = new connectionNeDB('session');

    public async storeSessionToken(token: SessionToken): Promise<unknown>{
        return await this.sessionDao.create( token )
    }
}