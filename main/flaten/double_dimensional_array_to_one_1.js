'use strict';

function double_to_one(collection) {
  var result = [].concat.apply([], collection);

  return result;
}

module.exports = double_to_one;
