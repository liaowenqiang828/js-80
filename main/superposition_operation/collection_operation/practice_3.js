'use strict';

function hybrid_operation_to_uneven(collection) {
  let elements = collection.filter(function(v) {
    return v % 2 !== 0;
  });

  let calResult = elements.map(function(v) {
    return v * 3 + 5;
  });
  
  let sum = calResult.reduce(function(pre, cur) {
    return pre + cur;
  });
  return sum;
}

module.exports = hybrid_operation_to_uneven;

