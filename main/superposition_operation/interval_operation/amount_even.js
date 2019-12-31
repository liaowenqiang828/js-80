'use strict';

function amount_even(collection) {
  let elements = collection.filter(function(v) {
    return v % 2 === 0;
  });

  let sum = elements.reduce(function(pre, cur) {
    return pre + cur;
  });

  return sum;
}

module.exports = amount_even;
