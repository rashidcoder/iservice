// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // import 'semantic-ui-css/semantic.min.css'
// // import App from './views/app/App'
// // import * as serviceWorker from './serviceWorker'
// // ReactDOM.render( <App/> , document.getElementById('root'))

// import React from 'react'
// import ReactDOM from 'react-dom'
// import 'semantic-ui-css/semantic.min.css'
// import App from './views/app/App'
// import * as serviceWorker from './serviceWorker'
// ReactDOM.render( < App / > , document.getElementById('root'))


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


var db;
var current_store;
var mode;
// use promise.toString() to get type of object here you can use request.toString()
// "[object IDBOpenDBRequest]" request is an object reference to IDBOpenDBRequest Object
// The second parameter to the open method is the version of the database
/**
 * 
 * Important: The version number is an unsigned long long number,
 *  which means that it can be a very big integer. It also means
 *  that you can't use a float, otherwise it will be converted to
 *  the closest lower integer and the transaction may not start,
 *  nor the upgradeneeded event trigger. So for example, don't use 2.4
 *  as a version number: var request = indexedDB.open("MyTestDatabase", 2.4);
 *  // don't do this, as the version will be rounded to 2
 * 
 */
var request = indexedDB.open("library");

/**
 * The open request doesn't open the database or start the transaction right
 *  away. The call to the open() function returns an IDBOpenDBRequest object
 *  with a result (success) or error value that you handle as an event.
 * 
 */
/** 
 * 
 *  Most other asynchronous functions in IndexedDB do the same thing - 
 *  return an IDBRequest object with the result or error. The result for
 *  the open function is an instance of an IDBDatabase.
 */

request.onupgradeneeded = function() {
    // The database did not previously exist, so create object stores and indexes.
    db = request.result;
    var store = db.createObjectStore("books", { autoIncrement: true });
    var titleIndex = store.createIndex("by_title", "title", { unique: true });
    var authorIndex = store.createIndex("by_author", "author");
    var pageIndex = store.createIndex("by_page", "page");
    // Populate with initial data.
    store.put({ title: "Quarry Memories", author: "Fred" });
    store.put({ title: "Water Buffaloes", author: "Fred" });
    store.put({ title: "Bedrock Nights", author: "Barney" });

};

request.onsuccess = function() {
    db = request.result;
};

function insertion() {
    request.onsuccess = function() {
        db = request.result;

        var tx = db.transaction("books", "readwrite");
        var store = tx.objectStore("books");

        store.put({ page: "hello" });
        store.put({ page: "hello" });
        store.put({ page: "hello" });
        store.put({ page: "hello" });

        tx.oncomplete = function() {
            // All requests have succeeded and the transaction has committed.
        };
    };
}

insertion();

function getdata() {

    request.onsuccess = function() {

        db = request.result;
        var tx = db.transaction("books", "readonly");
        var store = tx.objectStore("books");
        var index = store.index("by_author");
        var request_ = index.openCursor(IDBKeyRange.only("Barney"));

        console.log("inside the getdata function");
        request_.onsuccess = function() {
            var cursor = request_.result;
            window.cursor = request_.result;
            if (cursor) {
                console.log("inside the cursor::::" + cursor.value.title);
                //report(cursor.value.isbn, cursor.value.title, cursor.value.author);
                cursor.continue();
            } else {
                //  report(null);
            }
        }
    }
}
getdata();

//   Get whole table result from Database
function getWholeObject() {

    request.onsuccess = function() {

        db = request.result;
        current_store = "books";
        mode = "readonly";
        var idbTransaction = db.transaction(current_store, mode);

        var object_store = idbTransaction.objectStore(current_store);

        var request_ = object_store.getAll();

        request_.onsuccess = function() {
            console.log(request_.result);
        }
    }
}
getWholeObject();

// //   Delete whole data from Database
// var current_store = "books"

// function deleteWholeData(current_store) {
//     request.onsuccess = function() {
//         db = request.result;
//         mode = "readwrite";
//         var idbTransaction = db.transaction(current_store, mode);
//         var object_store = idbTransaction.objectStore(current_store);
//         var request_ = object_store.clear();
//         request_.onsuccess = function() {
//             console.log("data has been deleted" + request_.result);

//         }
//     }
// }
// deleteWholeData();