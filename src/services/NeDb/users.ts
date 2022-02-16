import Nedb from 'nedb';

class ConnectionNeDB {

    private nedb: Nedb | any;
    constructor() {
        this.nedb = new Nedb('database/UserCredentials.db');
        this.nedb.loadDatabase();
    }

    public connectionNeDB() {
        return this.nedb;
    }
}

export let userCollection: Nedb = new ConnectionNeDB().connectionNeDB()

