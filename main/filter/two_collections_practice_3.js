'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  var result = [];

  for (var i = 0, len = collection_a.length; i < len; i++) {
    for (var j = 0, len = collection_b.length; j < len; j++) {
      if (collection_a[i] % collection_b[j] === 0) {
        result.push(collection_a[i]);
        collection_a.splice(i, 1);
        i--;
        break;
      }
    }
  }

  return result;
}

module.exports = choose_divisible_integer;
