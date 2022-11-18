import { ConnectionNeDB } from './index';
import { DBAccessModel } from './model';

export class connectionNeDB {

  private collection: ConnectionNeDB | any;

  constructor( name: 'user' | 'session' ){
    const typeDataBase = DBAccessModel[name];
    this.collection = new ConnectionNeDB( typeDataBase ).connectionNeDB()
  }

  getAlls = async (page: any, limit: any) => {
    return new Promise((resolve, reject) => this.collection.find({})
      .skip(page * limit).limit(limit).exec((err: any, docs: any) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  };

  getForId = async (id: any): Promise<[]> => {
    return new Promise((resolve, reject) => this.collection.findOne({ _id: id }, (err: any, docs: any) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  };

  get = async (data: any): Promise<[]> => {
    return new Promise((resolve, reject) => this.collection.find(data, (err: any, docs: any) => {
      if (err) return reject(err);
      console.log('docs', docs);
      return resolve(docs);
    }));
  };

  create = async (data: any) => {
    return new Promise((resolve, reject) => this.collection.insert(data, (err: any, docs: any) => {
      if (err) return reject(err);
      return resolve(docs);
    }));
  };

  update = async (id: any, data?: object | any) => {
    const { email, username } = data;
    const update = { $set: { email, username } };

    return new Promise((resolve, reject) => this.collection
      .update({ _id: id }, update, {}, (err: any, docs: any) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  };

  delete = async (id: any) => {
    return new Promise((resolve, reject) => this.collection
      .remove({ _id: id }, (err: any, docs: any) => {
        if (err) return reject(err);
        return resolve(docs);
      }));
  };
}
