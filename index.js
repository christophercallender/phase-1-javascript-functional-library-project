function toArray(arrOrObj) {
   return Array.isArray(arrOrObj)
      ? Array.from(arrOrObj)
      : Object.values(arrOrObj);
}

function myEach(collection, callback) {
   for (let i = 0; i < toArray(collection).length; i++) {
      callback(toArray(collection)[i]);
   }
   return collection;
}

function myMap(collection, callback) {
   let newArray = [];
   for (let i = 0; i < toArray(collection).length; i++) {
      newArray.push(callback(toArray(collection)[i]));
   }
   return newArray;
}

function myReduce(collection, callback, accumulator) {
   let newCollection = toArray(collection);
   if (!accumulator) {
      accumulator = newCollection[0];
      newCollection = newCollection.slice(1);
   }
   for (let i = 0; i < newCollection.length; i++) {
      accumulator = callback(accumulator, newCollection[i], newCollection);
   }
   return accumulator;
}

function myFind(collection, predicate) {
   for (let i = 0; i < toArray(collection).length; i++) {
      if (predicate(collection[i])) {
         return collection[i];
      }
   }
}

function myFilter(collection, predicate) {
   let newCollection = [];
   for (let i = 0; i < toArray(collection).length; i++) {
      if (predicate(toArray(collection)[i])) {
         newCollection.push(toArray(collection)[i]);
      }
   }
   return newCollection;
}

function mySize(collection) {
   return toArray(collection).length;
}

function myFirst(array, stop) {
   return stop ? array.slice(0, stop) : array[0];
}

function myLast(array, start) {
   return start
      ? array.slice(array.length - start, array.length)
      : array[array.length - 1];
}

function myKeys(obj) {
   return Object.keys(obj);
}

function myValues(obj) {
   return Object.values(obj);
}
