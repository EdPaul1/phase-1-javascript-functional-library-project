//Collection Functions
function myEach(collection, callback){
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            callback(collection[i], i, collection);

        }
    } else {
        for (let key in collection){
            if (collection.hasOwnProperty(key)){
                callback(collection[key], key, collection);
            }
        }
    }
    return collection;
}
function myMap(collection, callback){
    const result = [];
    if (Array.isArray(collection)){
        for (let i = 0; i < collection.length; i++){
            result.push(callback(collection[i], i, collection));
        }
    } else {
        for (let key in collection){
            result.push(callback(collection[key], key, collection));
        }

    }
    return result;
}

function myReduce(collection, callback, acc) {
    let start = 0;
    if (acc === undefined) {
      acc = collection[0];
      start = 1;
    }
    for (let i = start; i < collection.length; i++) {
      acc = callback(acc, collection[i], i, collection);
    }
    return acc;
}
  
function myFind(collection, predicate) {
for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
    return collection[i];
    }
}
return undefined;
}

function myFilter(collection, predicate) {
const filteredArray = [];
for (let i = 0; i < collection.length; i++) {
    if (predicate(collection[i], i, collection)) {
    filteredArray.push(collection[i]);
    }
}
return filteredArray;
}

function mySize(collection) {
let size = 0;
for (let key in collection) {
    if (collection.hasOwnProperty(key)) {
    size++;
    }
}
return size;
}
  
function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    }
    return array.slice(0, n);
}

function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    }
    return array.slice(-n);
}

function myKeys(object) {
    let keys = [];
    for (let key in object) {
      keys.push(key);
    }
    return keys;
}
function myValues(object) {
    let values = [];
    for (let key in object) {
      values.push(object[key]);
    }
    return values;
}
  
  
  


  
  