'use strict';

function collect_all_even(collection) {
  var result = [];
  for (var i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2 === 0) {
      result.push(collection[i]);
    }
  }
  
  return result;
}

module.exports = collect_all_even;
