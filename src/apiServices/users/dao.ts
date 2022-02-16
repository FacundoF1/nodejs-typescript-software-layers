import userCollection from '../../services/NeDb';

export const getUsers = async (page, limit) => {
  return new Promise((resolve, reject) => userCollection.find({})
    .skip(page * limit).limit(limit).exec((err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
};

export const getUserForId = async (id): Promise<[]> => {
  return new Promise((resolve, reject) => userCollection.findOne({ _id: id }, (err, docs) => {
    if (err) return reject(err);
    return resolve(docs);
  }));
};

export const getUser = async (data): Promise<[]> => {
  return new Promise((resolve, reject) => userCollection.find(data, (err, docs) => {
    if (err) return reject(err);
    console.log('docs', docs);
    return resolve(docs);
  }));
};

export const createUser = async (user) => {
  return new Promise((resolve, reject) => userCollection.insert(user, (err, docs) => {
    if (err) return reject(err);
    return resolve(docs);
  }));
};

export const updateUser = async (id, data?: object | any) => {
  const { email, username } = data;
  const update = { $set: { email, username } };

  return new Promise((resolve, reject) => userCollection
    .update({ _id: id }, update, {}, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
};

export const deleteUser = async (id) => {
  return new Promise((resolve, reject) => userCollection
    .remove({ _id: id }, (err, docs) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
};
