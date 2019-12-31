'use strict';
var even_group_calculate_average = function(collection){
  let elements = collection.filter(function(item, index) {
    return (index + 1) % 2 === 0;
  });
  let evenElements = elements.filter(function(v) {
    return v % 2 === 0;
  })
  console.log(evenElements);


  var resultFinal = [];

  if (evenElements === []) {
    resultFinal.push(0);
    // return resultFinal;

  } 
  // else {
  //   let one = [];
  //   let two = [];
  //   let three = [];
  //   let resultArr = [one, two, three];

  //   for (let i = 0, len = evenElements.length; i < len; i++) {
  //     let quotient = Math.floor(evenElements[i] / 10);
  //     if (quotient === 0) {
  //       one.push(evenElements[i]);
  //     } else if (quotient >= 10) {
  //       three.push(evenElements[i]);
  //     } else {
  //       two.push(evenElements[i]);
  //     }
  //   }

  //   for (let j = 0, lens = resultArr.length; j < lens; j++) {
  //     if (resultArr[j] === []) {
  //       continue;
  //     } else {
  //       let resultArrEle = resultArr[j];
  //       let sum = resultArrEle.reduce(function(pre, cur) {
  //         return pre + cur;
  //       }, 0);
  //       let average = sum / resultArrEle.length;
  //       resultFinal.push(average);
  //     }
  //   }
    // return resultFinal;
  // }
  // console.log(resultFinal);
  return resultFinal;
};

var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];
console.log(even_group_calculate_average(collection_b));
module.exports = even_group_calculate_average;
