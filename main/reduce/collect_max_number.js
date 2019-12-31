'use strict';

function collect_max_number(collection) {
  var maxElement = collection.reduce(function(pre, cur) {
    return pre > cur ? pre : cur;
  });

  return maxElement;
}

module.exports = collect_max_number;
