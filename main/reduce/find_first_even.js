'use strict';

function find_first_even(collection) {
  let even;
  for (let i = 0, len = collection.length; i < len; i++) {
    if (collection[i] % 2 === 0) {
      even = collection[i];
      break;
    }
  }

  return even;
}

module.exports = find_first_even;

