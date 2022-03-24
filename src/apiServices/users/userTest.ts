import { UserDBAccess } from "./services";

class DbTest {
    public dbAccess = new UserDBAccess();
}

new DbTest().dbAccess.updateUser({
    age: 32,
    email: 'facundof1@gmail.com',
    id: 'asdl98%&asdsda',
    name: 'facundo',
    WorkingPosition: 3
})