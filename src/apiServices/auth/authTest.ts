import { UserCredentialsDBAccess } from "./services";

class DbTest {

    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();

}

new DbTest().dbAccess.putUserCredential({
    username: 'facundo',
    password: '123456',
    accessRights: [0, 1, 2, 3]
})