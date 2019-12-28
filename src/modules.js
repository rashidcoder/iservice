 
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
// export default getWholetable();