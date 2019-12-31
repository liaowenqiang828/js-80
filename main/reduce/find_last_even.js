'use strict';

function find_last_even(collection) {
  let even;
  let len = collection.length;
  for (let i = len - 1; i >= 0; i--) {
    if (collection[i] % 2 === 0) {
      even = collection[i];
      break;
    }
  }

  return even;
}

module.exports = find_last_even;
