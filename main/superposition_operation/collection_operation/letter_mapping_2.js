'use strict';

function average_to_letter(collection) {
  let sum = collection.reduce(function(pre, cur) {
    return pre + cur;
  });

  let average = Math.ceil(sum / collection.length);

  let result = String.fromCharCode(average + 96);
  return result;
}

module.exports = average_to_letter;

