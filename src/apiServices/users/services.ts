import { connectionNeDB } from '../../services/NeDb/dao';
const userDao = new connectionNeDB( 'user' );

export default {

    async getUsers(page: any, limit: any) {
        return userDao.getAlls(page, limit);
    },

    async getUser(data: any): Promise<[]> {
        return userDao.get(data);
    },

    async getUserForId(id: any): Promise<[]> {
        return userDao.get(id);
    },

    async createUser(user: any){
        return userDao.create(user);
    },

    async updateUser(id: string | number, { email, username }: { email: string | number, username: string | number }) {
        return userDao.update(id, { email, username });
    },

    async deleteUser(id: any) {
        return userDao.delete(id);
    }

};
