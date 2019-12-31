'use strict';

function choose_even(collection) {
  var result = collection.filter(v => v % 2 === 0);

  return result;
}

module.exports = choose_even;
