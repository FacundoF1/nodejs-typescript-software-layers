import { connectionNeDB } from '../../services/NeDb/dao';
import { UserModel } from './model';
export class UserDBAccess<T> {

    private userDao: connectionNeDB<T> = new connectionNeDB<T>('users');

    public async getUsers(page, limit) {
        return this.userDao.getAlls(page, limit);
    };

    public async getUser(data): Promise<T[]> {
        return this.userDao.get(data);
    };

    public async getUserForId(id): Promise<T> {
        return this.userDao.getForId(id);
    };

    public async createUser(user) {
        return this.userDao.create(user);
    };

    public async updateUser(user: T | any ): Promise<T> {
        try {
            const { id: _id } = user;
            if (!_id) { throw new Error('UserDBAccess: updateUser not found'); }
            const result: T = await this.userDao.create( user );
            console.log( 'result', result );
            return result;
        } catch (error) {
            return error;
        }
    }

    public async deleteUser(id) {
        return this.userDao.delete(id);
    };

}
