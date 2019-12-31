'use strict';

function calculate_elements_sum(collection) {
  let result = collection.reduce(function(pre, cur) {
    return pre + cur;
  });

  return result;
}

module.exports = calculate_elements_sum;

