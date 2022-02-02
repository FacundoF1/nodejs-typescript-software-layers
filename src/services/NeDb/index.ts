import Nedb from 'nedb';
class ConnectionNeDB {

    private nedb: Nedb | any;
    constructor() {
        this.nedb = new Nedb('../../../database/UserCredentials.db');
        this.nedb.loadDatabase();
    }

    public connectionNeDB() {
        return this.nedb;
    }
}

const userCollection: Nedb = new ConnectionNeDB().connectionNeDB()

export {
    userCollection
};
