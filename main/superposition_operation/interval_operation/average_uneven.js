'use strict';

function average_uneven(collection) {
  let elements = collection.filter(function(v) {
    return v % 2 !== 0;
  });

  let sum = elements.reduce(function(pre, cur) {
    return pre + cur;
  });

  return sum / elements.length;
}

module.exports = average_uneven;
