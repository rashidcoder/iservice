// import RxDB from 'rxdb';
 
// class Database {

//     constructor() {
// this.db  =''
//         this.state = { 
//             dbinfo:'',
//         } 
//     }
//     createDatabase() {
//         RxDB.plugin(require('pouchdb-adapter-idb'))
//         this.db = RxDB.create({
//             name: 'iservice',           // <- name
//             adapter: 'idb',          // <- storage-adapter
//             password: 'da#6pEWefG',     // <- password (optional)
//             multiInstance: true,         // <- multiInstance (optional, default: true)
//             queryChangeDetection: false,
//             ignoreDuplicate: true // <- queryChangeDetection (optional, default: false)
//         });
//         this.db.info().then(function (info) {
//           this.setState({dbinfo:info})
//         })
//         return this.state.dbinfo
//     }

//     getInfo() {
//         this.db.info().then(function (info) {
//             console.log(info);
//         })
//     }


// }

// export default Database;




