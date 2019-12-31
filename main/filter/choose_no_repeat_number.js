'use strict';

// function choose_no_repeat_number(collection) {
//   return collection.filter(function(item, index, collection) {
//     return collection.indexOf(item, 0) === index;
//   });
// }

function choose_no_repeat_number(collection) {
  for (var i = 0, len = collection.length; i < len; i++) {
    for (var j = i +1, len = collection.length; j < len; j++) {
      if (collection[i] === collection[j]) {
        collection.splice(j, 1);
        j--;
      }
    }
  }

  return collection;
}

module.exports = choose_no_repeat_number;
