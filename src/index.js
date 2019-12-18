// // import React from 'react'
// // import ReactDOM from 'react-dom'
// // import 'semantic-ui-css/semantic.min.css'
// // import App from './views/app/App'
// // import * as serviceWorker from './serviceWorker'
// // ReactDOM.render( <App/> , document.getElementById('root'))
// // serviceWorker.unregister()

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
var request = indexedDB.open("library");

request.onupgradeneeded = function() {
    // The database did not previously exist, so create object stores and indexes.
    db = request.result;
    var store = db.createObjectStore("books", { keyPath: "isbn" });
    var titleIndex = store.createIndex("by_title", "title", { unique: true });
    var authorIndex = store.createIndex("by_author", "author");

    // Populate with initial data.
    store.put({ title: "Quarry Memories", author: "Fred", isbn: 123456 });
    store.put({ title: "Water Buffaloes", author: "Fred", isbn: 234567 });
    store.put({ title: "Bedrock Nights", author: "Barney", isbn: 345678 });

};

request.onsuccess = function() {
    db = request.result;
};

function create() {
    request.onsuccess = function() {
        db = request.result;

        var tx = db.transaction("books", "readwrite");
        var store = tx.objectStore("books");

        store.put({ page: "hello", isbn: 999 });
        tx.oncomplete = function() {
            // All requests have succeeded and the transaction has committed.
        };
    };

}


create();