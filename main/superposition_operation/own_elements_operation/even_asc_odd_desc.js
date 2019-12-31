'use strict';
var even_asc_odd_desc = function(collection){
  let evenElements = collection.filter(v => v % 2 === 0);
  let unevenElements = collection.filter(v => v % 2 !== 0);

  let asc = function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };
  let desc = function(a ,b) {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  };

  let evenElementsSortAsc = evenElements.sort(asc);
  let unevenElementsSortDesc = unevenElements.sort(desc);

  let result = evenElementsSortAsc.concat(unevenElementsSortDesc);

  return result;
};

module.exports = even_asc_odd_desc;
