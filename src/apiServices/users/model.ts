import userDao from './dao';

export = {

  async getUsers(page, limit) {
    return userDao.getUsers(page, limit);
  },

  async getUser(id) {
    return userDao.getUser(id);
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