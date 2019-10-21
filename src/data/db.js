import PouchDB from 'pouchdb';
const dbName = 'iservice'
const adapter = "idb"
const passw = "%2!ab_oo(1" 
const db = new PouchDB(dbName);
class Database {
    
    createDatabase() {
        // var db = new PouchDB('http://localhost:5984/kittens');
        return db;
    }

    getInfo() {
        db.info().then(function (info) {
            console.log(info);
        })
    }


}

export default Database;