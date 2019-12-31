'use strict';
var single_element = function(collection){
  let elements = collection.filter(function(item, index) {
    return (index + 1) % 2 === 0;
  });

  let result = [];
  for (let i = 0; i < elements.length; i++) {
    let flag = false;
    for (let j = i + 1, lens = elements.length; j < lens; j++) {
      if (elements[j] === elements[i]) {
        flag = true;
        elements.splice(j, 1);
        j--;
      }
    }

    if (flag === false) {
      result.push(elements[i]);
    }
  }
  
  return result;
};

module.exports = single_element;
