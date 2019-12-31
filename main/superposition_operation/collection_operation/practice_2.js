'use strict';

function hybrid_operation_to_uneven(collection) {
  let elements = collection.filter(function(v) {
    return v % 2 !== 0;
  });

  let result = elements.map(function(v) {
    return v * 3 + 2;
  });

  return result;
}

module.exports = hybrid_operation_to_uneven;

