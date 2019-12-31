'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  var resultOne = collection_a.filter(function(v) {
    return collection_b.indexOf(v) < 0;
  });

  var resultTwo = collection_b.filter(function(v) {
    return collection_a.indexOf(v) < 0;
  });

  return resultOne.concat(resultTwo);
}

module.exports = choose_no_common_elements;
