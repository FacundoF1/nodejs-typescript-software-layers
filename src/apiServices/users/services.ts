import * as userDao from './dao';

export default {

    async getUsers(page, limit) {
        return userDao.getUsers(page, limit);
    },

    async getUser(data): Promise<[]> {
        return userDao.getUser(data);
    },

    async getUserForId(data): Promise<[]> {
        return userDao.getUser(data);
    },

    async createUser(user) {
        return userDao.createUser(user);
    },

    async updateUser(id, { email, username }) {
        return userDao.updateUser(id, { email, username });
    },

    async deleteUser(id) {
        return userDao.updateUser(id);
    },
};
