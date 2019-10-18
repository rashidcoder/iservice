
import { QueryChangeDetector } from 'rxdb';

import * as RxDB from 'rxdb';

import { schema } from './Schema'
import { toast } from 'react-toastify';
RxDB.plugin(require('pouchdb-adapter-idb'));
RxDB.plugin(require('pouchdb-adapter-http'));

const syncURL = 'http://localhost:5984/';
const dbName = 'iservicedb';
class DBConfig {
   
  

    async createDatabase() {
        // password must have at least 8 characters
        const db = await RxDB.create(
            { name: dbName, adapter: 'idb', password: '12345678' }
        );
        console.dir(db);

        // show who's the leader in page's title
        db.waitForLeadership().then(() => {
            document.title = '♛ ' + document.title;
        });

        // create collection
        const messagesCollection = await db.collection({
            name: 'messages',
            schema: schema
        });
 

        return db;
    }


}