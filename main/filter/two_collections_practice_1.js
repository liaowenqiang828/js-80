'use strict';

function choose_common_elements(collection_a, collection_b) {
  var result = collection_a.filter(function(v){
    return collection_b.indexOf(v) > -1;
  })

  return result;
}

module.exports = choose_common_elements;
