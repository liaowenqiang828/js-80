'use strict';

function even_to_letter(collection) {
  let elements = collection.filter(function(v) {
    return v % 2 === 0;
  });

  let result = elements.map(function(v) {
    return String.fromCharCode(v + 96);
  });
  
  return result;
}
// let collection = [1,2,3,4,5,6,7,8,9,10];
// console.log(even_to_letter(collection));
module.exports = even_to_letter;
