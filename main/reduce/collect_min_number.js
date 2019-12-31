'use strict';

function collect_min_number(collection) {
  var minElement = collection.reduce(function(pre, cur) {
    return pre < cur ? pre : cur;
  });

  return minElement;
}

module.exports = collect_min_number;

