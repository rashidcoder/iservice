// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // import 'semantic-ui-css/semantic.min.css'
// // import App from './views/app/App'
// // import * as serviceWorker from './serviceWorker'
// // ReactDOM.render( <App/> , document.getElementById('root'))

import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import App from './views/app/App'
import * as serviceWorker from './serviceWorker'
import {request, upgrade} from './db.js';
ReactDOM.render(<App />, document.getElementById('root'))


// var request = indexedDB.open('library')
// var db
// request.onupgradeneeded = function() {
//     // The database did not previously exist, so create object stores and indexes.
//     db = request.result

//     window['db'] = request.result
//     var store = db.createObjectStore('books', { keyPath: 'isbn' })

//     // var store = db.createObjectStore("books",{ autoIncrement : true });

//     var titleIndex = store.createIndex('by_title', 'title')
//     var authorIndex = store.createIndex('by_author', 'author')
//     var pagesIndex = store.createIndex('by_page', 'page')

//     // Populate with initial data.
//     store.put({
//         title: 'Quarry Memories',
//         author: 'Fred',
//         page: '12',
//         isbn: 123456
//     })
//     store.put({ title: 'Water Buffaloes', author: 'Fred', isbn: 234567 })
//     store.put({ title: 'Bedrock Nights', author: 'Barney', isbn: 345678 })

//     store.put({ title: 'Bedrock Nights 2', author: 'Barney', isbn: 345678 })
//     store.put({ title: 'Bedrock Nights 3', author: 'Barney', isbn: 345680 })
// }

// request.onsuccess = function() {
//     db = request.result
// }



// function create() {

//     var _db;
//     setTimeout(function() {
//         _db = window.db;
//     }, 5);
//     var tx = _db.transaction('books', 'readwrite')
//     var store = tx.objectStore('books')

//     store.put({ title: 'Quarry Memories 22', author: 'Fred', isbn: 324 })
//     store.put({ title: 'Water Buffaloes 33', author: 'Fred', isbn: 34 })
//     store.put({ title: 'Bedrock Nights 44', author: 'Barney', isbn: 342 })

//     tx.oncomplete = function() {
//         // All requests have succeeded and the transaction has committed.
//     }
// }

// create();

var objectStores = {
    books: {
        name: "keypath",
        name2: "keypath",
        name3: "keypath"
    },
    tables: {

        name: "keypath",
        name2: "keypath",
        name3: "keypath"
    },
}
var db;
console.log(JSON.stringify(request));

upgrade(objectStores);
// request.onupgradeneeded = function () {
//     // The database did not previously exist, so create object stores and indexes.
//     db = request.result;
//     var store = db.createObjectStore("books", { autoIncrement: true });
//     var titleIndex = store.createIndex("by_title", "title");
//     var authorIndex = store.createIndex("by_author", "author");
//     var pageIndex = store.createIndex("by_page", "page");
//     // Populate with initial data.
//     store.put({ title: "Quarry Memories", author: "Fred" });
//     store.put({ title: "Water Buffaloes", author: "Fred" });
//     store.put({ title: "Bedrock Nights", author: "Barney" });
//     store.put({ title: "Mr Loin", author: "Danish1" });
//     store.put({ title: "Mr Loin", author: "Danish2" });
// };

request.onsuccess = function () {
    db = request.result;
};


// //insertion function
// var current_store="books";
// var data = {
//     title: "Mr Loins",
//     author: "Danish ali",
//     page: "989898"
// }
// function insertValues(current_store,data) {
//     request.onsuccess = function () {
//         db = request.result;
//         var tx = db.transaction(current_store, "readwrite");
//         var store = tx.objectStore(current_store);
//         store.add({ data })
//         tx.oncomplete = function () {
//         };
//     };
// }
// insertValues(current_store,data);



//                          //   Delete whole data from Database
//  var current_store = "books"
// function deleteWholeData(current_store) {
//     request.onsuccess = function() {
//         db = request.result;
//         var idbTransaction = db.transaction(current_store, "readwrite");
//         var object_store = idbTransaction.objectStore(current_store);
//         var request_ = object_store.clear();
//         request_.onsuccess = function() {
//             console.log("data has been deleted" + request_.result);
//         }
//     }
// }
// deleteWholeData(current_store);

//   Delete the single row of data iin db 


// var key=22;
// var current_store="books";
// function deleteSingleRow(current_store,key) {
//     request.onsuccess = function() {
//         db = request.result;
//         var idbTransaction = db.transaction(current_store, "readwrite");
//         var object_store = idbTransaction.objectStore(current_store);
//         var request_ = object_store.delete(key);
//         request_.onsuccess = function() {
//             console.log("data has been deleted" + request_.result);

//         }
//     }
// }
// deleteSingleRow(current_store,key);


//   Get whole table's Data result from Database

// var current_store = "books";
// var data;
// function getWholetable() {
//     var data;
//     request.onsuccess = function () {
//         db = request.result;
//         var idbTransaction = db.transaction(current_store, "readonly");
//         var object_store = idbTransaction.objectStore(current_store);
//         var request_ = object_store.getAll();
//         request_.onsuccess = function () {
//              data = request.result;
//             console.log("189 :: " + request_.result); 
//         } 
//     } 
// }


// data = getWholetable(current_store);
// console.log("195 ::" + JSON.stringify(data));



//   getdata the single row of data iin db 


// var key=5;
// var current_store="books";
// var data;
// function getSingleRow(current_store,key) {
//     request.onsuccess = function() {
//         db = request.result;
//         var idbTransaction = db.transaction(current_store, "readwrite");
//         var object_store = idbTransaction.objectStore(current_store);
//         var request_ = object_store.get(key);
//         request_.onsuccess = function() {
//             console.log(" 214 Get single row data ::" + JSON.stringify(request_.result));
//             data= request_.result;
//         }
//     }
// }
// getSingleRow(current_store,key);
// console.log("221 Retrun data of getsingle row "+JSON.stringify(data));

                        //Getmultiple row from single table database
// var obj = {};
// function () {
//     request.onsuccess = function () {
//         db = request.result;
//         var tx = db.transaction("books", "readonly");
//         var store = tx.objectStore("books");
//         var index = store.index("by_author");
//         var request_ = index.openCursor(IDBKeyRange.only("Fred"));
//         request_.onsuccess = function () {
//             var cursor = request_.result;
//             if (cursor) {
//                 console.log("214 inside the cursor ::::" + JSON.stringify(cursor.value));
//                 obj+=JSON.stringify(cursor.value);       
//                 //console.log("214 inside the cursor arr ::::" + obj);
//                 //report(cursor.value.isbn, cursor.value.title, cursor.value.author);
//                 cursor.continue();
//             } else {
//                 //  report(null);
//             }            
//     console.log("object values"+obj)
//         }
//     }
// }
// getdata();
// //console.log("object values"+obj)

















                        //Getmultiple row from single table database
// var obj = {};
// function getdata() {
//     request.onsuccess = function () {
//         db = request.result;
//         var tx = db.transaction("books", "readonly");
//         var store = tx.objectStore("books");
//         var index = store.index("by_author");
//         var request_ = index.openCursor(IDBKeyRange.only("Fred"));
//         request_.onsuccess = function () {
//             var cursor = request_.result;
//             if (cursor) {
//                 console.log("214 inside the cursor ::::" + JSON.stringify(cursor.value));
//                 obj+=JSON.stringify(cursor.value);       
//                 //console.log("214 inside the cursor arr ::::" + obj);
//                 //report(cursor.value.isbn, cursor.value.title, cursor.value.author);
//                 cursor.continue();
//             } else {
//                 //  report(null);
//             }            
//     console.log("object values"+obj)
//         }
//     }
// }
// getdata();
// //console.log("object values"+obj)
