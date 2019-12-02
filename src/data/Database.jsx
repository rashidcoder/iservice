// import * as RxDB from 'rxdb'
// import idb from 'pouchdb-adapter-idb'
// // rxdb-utils imports  
// import React, { Component } from "react"
// import * as Schema from "./Schemas"
// import { async } from 'q'
// // Registering the usual pouchdb plugins
// RxDB.plugin(idb)
// let dbPromise = null;
// const config = {
//     database: 'iservice_dev_db',
//     adapter: 'idb',
//     password: 'x&82mb(1dc',
//     multiInstance: false,
//     ignoreDuplicate: true,

// }

// const _create = async () => {
//     const db = await RxDB.create({
//         name: config.database,
//         adapter: config.adapter,
//         password: config.password,
//         multiInstance: config.multiInstance,
//         ignoreDuplicate: config.ignoreDuplicate
//     });
    
//     return db
// }



// export const createCollections = async (_db) => {
 
//     window['db'] = _db
//     window['schema'] = Schema

//     for (var sch in Schema) {
//         console.log(JSON.stringify(Schema[sch]))
//     }

//     _db.collection({
//         name: 'vehicles',
//         schema: Schema.vehicles,
//         options: {
//             timestamps: true
//         }
//     })

//     _db.collection({
//         name: 'clients',
//         schema: Schema.clients,
//         options: {
//             timestamps: true
//         }
//     })


//     _db.collection({
//         name: 'work_orders',
//         schema: Schema.workOrders,
//         options: {
//             timestamps: true
//         }
//     })

//     _db.collection({
//         name: 'customers',
//         schema: Schema.customers,
//         options: {
//             timestamps: true
//         }
//     })

//     _db.collection({
//         name: 'billings',
//         schema: Schema.billings,
//         options: {
//             timestamps: true
//         }
//     })

//     _db.collection({
//         name: 'suppliers',
//         schema: Schema.suppliers,
//         options: {
//             timestamps: true
//         }
//     })

// }

// export const getCollections = async (_db) => {
//     return _db.collections
// }
// // Or any other from { SILENT, TRACE, DEBUG, INFO, WARN, ERROR }


// // replicate()  {
//     //  dbPromise.then((db) => {
//     //     // Register collections before running db.replicate() 
//     //     db.collection({ /* ... */ })
//     //     // or via the models plugin
//     //     db.models([{ /* ... */ }, { /* ... */ }])

//     //     return db
//     // }).then((db) => {
//     //     return db.replicate('http://localhost:5984/myremotedb/').connect()
//     // })
// // }
// // {collection_, obj}
// const createDocument = async () => {
     
//     // const mcollection = _db.collections
//     // window['mcollection'] = mcollection
//     // const vehicle = mcollection['vehicles']
//     // window['vehicle'] = mcollection['vehicles']


//     // const tempDoc = mcollection.newDocument({ color: 'red' });

//     // // fill in data later
//     // // Schema.vehicles.properties.brand = 'red';
//     // tempDoc.color = 'orange';
//     // tempDoc.brand = 'abc';

//     // // saving a temporary document will transform it to a standard RxDocument
//     // await tempDoc.save()
// }
// const select = async () => {
//     //        collection = await db.collection({
//     //   name: 'heroes',
//     //   schema: mySchema
//     // });
//     const _db = await this.get()
//     const vehicles = _db.vehicles
//     // or
//     // const collection2 = db['heroes'] 
//     vehicles.find().exec() // <- find all documents
//         .then(documents => {
//             window['docs'] = documents;
//             documents[0].select$(
//                 'name',
//                 'description',
//                 { frequency: ['data', 'other_property'] },
//                 'frequency.some_other_property'
//             )
//         });

// }




// export const get = () => {
//     if (!dbPromise)
//         dbPromise = _create();
//     return dbPromise;
// }














// // import * as RxDB from 'rxdb'

// // // RxDB.QueryChangeDetector.enableDebugging()

// // RxDB.plugin(require('pouchdb-adapter-idb'))
// // RxDB.plugin(require('pouchdb-adapter-http')) //enable syncing over http
// // const config = {
// //     database: 'iservice_dev_db',
// //     username: 'iservice_dev',
// //     password: ',h*725Cd',
// //     adapter: 'idb'
// // }
// // const collections = [
// //     {
// //         name: 'heroes',
// //         schema: require('./Schema.js').default,
// //         methods: {
// //             hpPercent() {
// //                 return this.hp / this.maxHP * 100
// //             }
// //         },
// //         sync: true
// //     }
// // ]

// // const syncURL = 'http://' + window.location.hostname + ':10102/'
// // console.log('host: ' + syncURL)

// // let dbPromise = null

// // const _create = async () => {
// //     console.log('DatabaseService: creating database..')
// //     const db = await RxDB.create({name: config.database, adapter: config.adapter, password: config.password})
// //     console.log('DatabaseService: created database')
// //     window['db'] = db // write to window for debugging

// //     // show leadership in title
// //     db.waitForLeadership().then(() => {
// //         console.log('isLeader now')
// //         document.title = '♛ ' + document.title
// //     })

// //     // create collections
// //     console.log('DatabaseService: create collections')
// //     await Promise.all(collections.map(colData => db.collection(colData)))

// //     // hooks
// //     console.log('DatabaseService: add hooks')
// //     db.collections.heroes.preInsert(async docObj => {
// //         window['docObj'] = docObj
// //         const { color } = docObj
// //         const has = await db.collections.heroes.findOne({ color }).exec()
// //         if (has != null) {
// //             alert('another hero already has the color ' + color)
// //             throw new Error('color already there')
// //         }
// //         return db
// //     })

// //     // sync
// //     console.log('DatabaseService: sync')
// //     collections.filter(col => col.sync).map(col => col.name).map(colName => db[colName].sync({
// //         remote: syncURL + colName + '/'
// //     }))

// //     return db
// // }

// // export const get = () => {
// //     if (!dbPromise)
// //         dbPromise = _create()
// //     return dbPromise
// // }

// // import * as RxDB from 'rxdb'

// // // RxDB.QueryChangeDetector.enableDebugging()

// // RxDB.plugin(require('pouchdb-adapter-idb'))
// // RxDB.plugin(require('pouchdb-adapter-http')) //enable syncing over http

// // const config = {
// //     database: 'iservice_dev_db',
// //     username: 'iservice_dev',
// //     password: ',h*725Cd',
// //     adapter: 'idb'
// // }
// // const collections = [
// //     {
// //         name: 'heroes',
// //         schema: require('./Schema.js').default,
// //         methods: {
// //             hpPercent() {
// //                 return this.hp / this.maxHP * 100
// //             }
// //         },
// //         sync: true
// //     }
// // ]

// // const syncURL = 'http://' + window.location.hostname + ':10102/'
// // console.log('host: ' + syncURL)

// // let dbPromise = null

// // const _create = async () => {

// //     const db = _createDb()
// //     _createCollections(db)
// //     _preinsert(db)

// //     // sync
// //     console.log('DatabaseService: sync')
// //     collections.filter(col => col.sync).map(col => col.name).map(colName => db[colName].sync({
// //         remote: syncURL + colName + '/'
// //     }))

// //     return db
// // }

// // const _createDb = async () => {
// //     console.log('DatabaseService: creating database..')
// //     const db = await RxDB.create({ name: config.database, adapter: config.adapter, password: config.password })
// //     console.log('DatabaseService: created database')
// //     window['db'] = db // write to window for debugging

// //     // show leadership in title
// //     db.waitForLeadership().then(() => {
// //         console.log('isLeader now')
// //         document.title = '♛ ' + document.title
// //     })
// //     return db
// // }

// // const _createCollections = async (db) => {
// //     // create collections
// //     console.log('DatabaseService: create collections')
// //     await Promise.all(collections.map(colData => db.collection(colData)))
// // }

// // const _preinsert = async (db) => {
// //  // hooks
// //  console.log('DatabaseService: add hooks')
// // //  db.collections.

// // }

// // export const get = () => {
// //     if (!dbPromise)
// //         dbPromise = _create()
// //     return dbPromise
// // }
