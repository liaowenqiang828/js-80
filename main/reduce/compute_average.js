'use strict';

function compute_average(collection) {
  var result = collection.reduce(function(pre, cur) {
    return pre + cur;
  });
  return result / collection.length;
}

module.exports = compute_average;

