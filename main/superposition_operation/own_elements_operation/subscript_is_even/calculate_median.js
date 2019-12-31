'use strict';
var calculate_median = function(collection){
  let elements = collection.filter(function(index) {
    return index % 2 === 0;
  });
  
  let len = elements.length;
  let median;
  if (len % 2 === 0) {
    median = (elements[len / 2 - 1] + elements[len / 2]) / 2;
  } else {
    median = elements[(len - 1) / 2];
  }

  return median;
};
module.exports = calculate_median;
