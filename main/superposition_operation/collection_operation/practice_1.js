'use strict';

function hybrid_operation(collection) {
  let calResult = collection.map(function(v) {
    return v * 3 + 2;
  });

  let sumResult = calResult.reduce(function(pre, cur) {
    return pre + cur;
  });

  return sumResult;
}

module.exports = hybrid_operation;

