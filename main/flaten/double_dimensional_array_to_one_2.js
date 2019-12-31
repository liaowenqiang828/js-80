'use strict';

function double_to_one(collection) {
  var result;
  var tempArray = [].concat.apply([], collection);

  result = tempArray.filter(function(item, index, tempArray) {
    return tempArray.indexOf(item, 0) === index; //元素第一次出现则为true
  });

  return result;
}

module.exports = double_to_one;
