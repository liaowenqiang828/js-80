'use strict';

function calculate_elements_sum(collection, element) {
  let index;
  let len = collection.length;
  for (let i = len - 1; i >= 0; i--) {
    if (collection[i] === element) {
      index = i;
      break;
    }
  }

  return index;
}

module.exports = calculate_elements_sum;
