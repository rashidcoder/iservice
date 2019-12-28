var db;
export const request = indexedDB.open("library");

// for(const [key, value] of Object.entries(window.objectStores.books)) console.log(key + " :: " + value)
// for(var i in window.objectStores.books) console.log(i)

// var objectStores = {
//     books: {
//         name: "keypath",
//         name2: "keypath",
//         name3: "keypath"
//     },
//     tables: {

//         name: "keypath",
//         name2: "keypath",
//         name3: "keypath"
//     },
// }

// for (var i in objectStores) {
//     console.log("22::" + objectStores[i]);
// }

// for (var i in objectStores) console.log("25 ::" + i)
// window.objectStores = objectStores;
// console.log("16 :: " + objectStores);






export const upgrade = (objectStores) => {

    request.onupgradeneeded = function () {

        db = request.result;
        for (var storeName in objectStores) {

            var store = db.createObjectStore(storeName, { autoIncrement: true });
            for (var storeData in storeName) {
                store.createIndex(store);
            }
        };

    }

}












