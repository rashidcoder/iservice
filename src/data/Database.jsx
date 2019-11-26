import * as RxDB from 'rxdb'
import idb from 'pouchdb-adapter-idb'
// rxdb-utils imports
import models from 'rxdb-utils/models'
import collections from 'rxdb-utils/collections'
import defaultValues from 'rxdb-utils/default-values'
import timestamps from 'rxdb-utils/timestamps'
import views from 'rxdb-utils/views'
import select from 'rxdb-utils/select'
import observables from 'rxdb-utils/observables'
import hooks from 'rxdb-utils/hooks'
import replication from 'rxdb-utils/replication'
import { loglevel, loglevels } from 'rxdb-utils/logger'
import React, { Component } from "react"
import * as Schema from "./Schemas"

// Registering the usual pouchdb plugins
RxDB.plugin(idb)

// Registering rxdb-utils plugins one by one
RxDB.plugin(models)
RxDB.plugin(collections)
RxDB.plugin(defaultValues)
RxDB.plugin(timestamps)
RxDB.plugin(views)
RxDB.plugin(select)
RxDB.plugin(observables)
RxDB.plugin(hooks)
RxDB.plugin(replication)

class Database extends Component {
    constructor(props) {
        super(props)
        this.models = {}
        this.state = {
            dbPromise: {},
            database: {},
            schemas: Schema, 
        }
        this.config = {
            db: '',
            database: 'iservice_dev_db',
            adapter: 'idb',
            password: 'x&82mb(1dc',
            multiInstance: false,
            ignoreDuplicate: true,

        }
        loglevel(loglevels.WARN)

    }

    createDb() {

        // Create database
        promise = RxDB.create({
            name: this.config.database,
            adapter: this.config.adapter,
            password: this.config.password,
            multiInstance: this.config.multiInstance,
            ignoreDuplicate: this.config.ignoreDuplicate
        })
        
      promise.then((tempDb) => {
            setState({ 
                db: tempDb, 
            })
        })
        this.models = getState(database).models([item, folder])
        setState({
            dbPromise: promise, 
        })
        
    }

    getState(obj) {
        window[obj] = obj
        return this.state[obj]
    }

    createCollections() {

        db.collection({
            name: 'item',
            schema: {
                version: 0,
                primaryPath: '_id',
                type: 'object',
                properties: {
                    name: { type: 'string' },
                    description: { type: 'string' }
                }
            },
            options: {
                defaultValues: {
                    name: 'My default name'
                },
                timestamps: true
            }
        })



        dbPromise
            .then((db) => {
                // Register collections before running db.replicate()

                db.collection({ /* ... */ })
                // or via the models plugin
                db.models([{ /* ... */ }, { /* ... */ }])

                return db
            })
            .then((db) => {
                return db.replicate('http://localhost:5984/myremotedb/').connect()
            })


    }
    // Or any other from { SILENT, TRACE, DEBUG, INFO, WARN, ERROR }

    select() {

        obs$ = doc.select$(
            'name',
            'description',
            { frequency: ['data', 'other_property'] },
            'frequency.some_other_property'
        )

    }

}

export default Database

















// import * as RxDB from 'rxdb'

// // RxDB.QueryChangeDetector.enableDebugging()

// RxDB.plugin(require('pouchdb-adapter-idb'))
// RxDB.plugin(require('pouchdb-adapter-http')) //enable syncing over http
// const config = {
//     database: 'iservice_dev_db',
//     username: 'iservice_dev',
//     password: ',h*725Cd',
//     adapter: 'idb'
// }
// const collections = [
//     {
//         name: 'heroes',
//         schema: require('./Schema.js').default,
//         methods: {
//             hpPercent() {
//                 return this.hp / this.maxHP * 100
//             }
//         },
//         sync: true
//     }
// ]

// const syncURL = 'http://' + window.location.hostname + ':10102/'
// console.log('host: ' + syncURL)

// let dbPromise = null

// const _create = async () => {
//     console.log('DatabaseService: creating database..')
//     const db = await RxDB.create({name: config.database, adapter: config.adapter, password: config.password})
//     console.log('DatabaseService: created database')
//     window['db'] = db // write to window for debugging

//     // show leadership in title
//     db.waitForLeadership().then(() => {
//         console.log('isLeader now')
//         document.title = '♛ ' + document.title
//     })

//     // create collections
//     console.log('DatabaseService: create collections')
//     await Promise.all(collections.map(colData => db.collection(colData)))

//     // hooks
//     console.log('DatabaseService: add hooks')
//     db.collections.heroes.preInsert(async docObj => {
//         window['docObj'] = docObj
//         const { color } = docObj
//         const has = await db.collections.heroes.findOne({ color }).exec()
//         if (has != null) {
//             alert('another hero already has the color ' + color)
//             throw new Error('color already there')
//         }
//         return db
//     })

//     // sync
//     console.log('DatabaseService: sync')
//     collections.filter(col => col.sync).map(col => col.name).map(colName => db[colName].sync({
//         remote: syncURL + colName + '/'
//     }))

//     return db
// }

// export const get = () => {
//     if (!dbPromise)
//         dbPromise = _create()
//     return dbPromise
// }

// import * as RxDB from 'rxdb'

// // RxDB.QueryChangeDetector.enableDebugging()

// RxDB.plugin(require('pouchdb-adapter-idb'))
// RxDB.plugin(require('pouchdb-adapter-http')) //enable syncing over http

// const config = {
//     database: 'iservice_dev_db',
//     username: 'iservice_dev',
//     password: ',h*725Cd',
//     adapter: 'idb'
// }
// const collections = [
//     {
//         name: 'heroes',
//         schema: require('./Schema.js').default,
//         methods: {
//             hpPercent() {
//                 return this.hp / this.maxHP * 100
//             }
//         },
//         sync: true
//     }
// ]

// const syncURL = 'http://' + window.location.hostname + ':10102/'
// console.log('host: ' + syncURL)

// let dbPromise = null

// const _create = async () => {

//     const db = _createDb()
//     _createCollections(db)
//     _preinsert(db)

//     // sync
//     console.log('DatabaseService: sync')
//     collections.filter(col => col.sync).map(col => col.name).map(colName => db[colName].sync({
//         remote: syncURL + colName + '/'
//     }))

//     return db
// }

// const _createDb = async () => {
//     console.log('DatabaseService: creating database..')
//     const db = await RxDB.create({ name: config.database, adapter: config.adapter, password: config.password })
//     console.log('DatabaseService: created database')
//     window['db'] = db // write to window for debugging

//     // show leadership in title
//     db.waitForLeadership().then(() => {
//         console.log('isLeader now')
//         document.title = '♛ ' + document.title
//     })
//     return db
// }

// const _createCollections = async (db) => {
//     // create collections
//     console.log('DatabaseService: create collections')
//     await Promise.all(collections.map(colData => db.collection(colData)))
// }

// const _preinsert = async (db) => {
//  // hooks
//  console.log('DatabaseService: add hooks')
// //  db.collections.

// }

// export const get = () => {
//     if (!dbPromise)
//         dbPromise = _create()
//     return dbPromise
// }
