'use strict';

function median_to_letter(collection) {
  let len = collection.length;
  let median;
  let char;

  if (len % 2 === 0) {
    median = Math.ceil((collection[len / 2 - 1] + collection[len / 2]) / 2);
  } else {
    median = collection[(len + 1) / 2 - 1]; 
  }

  char = numToChar(median);

  function numToChar(number) {
    let quotient = Math.floor((number - 1) / 26);
    let remainder = (number - 1) % 26;

    if (quotient === 0) {
      return String.fromCharCode(remainder + 97);
    } else {
      return  numToChar(quotient) + String.fromCharCode(remainder + 97);
    }
  }

  return char;
}

module.exports = median_to_letter;
