'use strict';
function rank_by_two_large_one_small(collection){
  let asc = function(a, b) {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  };
  
  let ascElements = collection.sort(asc);
  let rankArr = [];

  let quotient = Math.floor(ascElements.length / 3);
  let remainder = ascElements.length % 3;

  for (let i = 0; i < quotient; i++) {
    rankArr.push(ascElements[3 * i + 1], ascElements[3 * i + 2], ascElements[3 * i]);
  }

  if (remainder === 0) {
    return rankArr;
  } else if (remainder === 1) {
    rankArr.push(ascElements[quotient * 3]);
    return rankArr;
  } else {
    rankArr.push(ascElements[quotient * 3], ascElements[quotient * 3 + 1]);
    return rankArr;
  }
}
module.exports = rank_by_two_large_one_small;
