'use strict';

function compute_chain_median(collection) {
  let median;
  let strArr = collection.split("->");
  let numArr = strArr.map(function(v) {
    return parseInt(v);
  });

function sortNum(a, b) {
  return a - b;
}
  numArr = numArr.sort(sortNum);
  let arrLength = numArr.length;
  if (arrLength % 2 === 0) {
    median = (numArr[arrLength / 2 - 1] + numArr[arrLength / 2]) / 2;
  } else {
    median = numArr[(arrLength + 1) / 2 - 1];
  }

  return median;
}

module.exports = compute_chain_median;
