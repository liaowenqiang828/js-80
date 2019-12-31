'use strict';

function compute_median(collection) {
  let median;

  function sortNum(a, b) {
    return a - b;
  }
    collection = collection.sort(sortNum);
    let arrLength = collection.length;

    if (arrLength % 2 === 0) {
      median = (collection[arrLength / 2 - 1] + collection[arrLength / 2]) / 2;
    } else {
      median = collection[(arrLength + 1) / 2 - 1];
    }
  
    return median;
}

module.exports = compute_median;


