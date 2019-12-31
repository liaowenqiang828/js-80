'use strict';
var is_exist_element = function(collection,element){
  let elements = collection.filter(function(item, index) {
    return index % 2 === 0;
  });

  return elements.indexOf(element) > -1;
};
module.exports = is_exist_element;
