'use strict';
var calculate_average = function(collection){
  let elements = collection.filter(function(index) {
    return index % 2 === 0;
  });

  let sum = elements.reduce(function(pre, cur) {
    return pre + cur;
  });

  let average = sum / elements.length;

  return average;
};
module.exports = calculate_average;
