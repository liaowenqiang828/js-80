'use strict';

function compare_collections(collection_a, collection_b) {
  let result = collection_a.filter(v => collection_b.indexOf(v) < 0);
  if (result) {
    return true;
  } else {
    return false;
  }
}

module.exports = compare_collections;


