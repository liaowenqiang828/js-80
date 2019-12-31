'use strict';

function calculate_elements_sum(collection, element) {
  let index;
  for (let i = 0, len = collection.length; i < len; i++) {
    if (collection[i] === element) {
      index = i;
      break;
    }
  }

  return index;
}

module.exports = calculate_elements_sum;

