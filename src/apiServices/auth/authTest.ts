import { UserCredentialsDBAccess } from "./services";

class DbTest {
    public dbAccess: UserCredentialsDBAccess = new UserCredentialsDBAccess();
}

new DbTest().dbAccess.putUserCredential({
    username: 'facundo',
    password: '12345',
    accessRights: [0, 1, 2, 3]
})