import { connectionNeDB } from '../../services/NeDb/dao';
const userDao = new connectionNeDB( 'user' );

export default {

    async getUsers(page, limit) {
        return userDao.getAlls(page, limit);
    },

    async getUser(data): Promise<[]> {
        return userDao.get(data);
    },

    async getUserForId(id): Promise<[]> {
        return userDao.get(id);
    },

    async createUser(user) {
        return userDao.create(user);
    },

    async updateUser(id, { email, username }) {
        return userDao.update(id, { email, username });
    },

    async deleteUser(id) {
        return userDao.delete(id);
    }

};
