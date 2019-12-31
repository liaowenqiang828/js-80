'use strict';

function get_letter_interval(number_a, number_b) {
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];

  if (number_a <= number_b) {
    for (number_a; number_a <= number_b; number_a++) {
      result.push(letter[number_a - 1]);
    }
    
  } else {
    for (number_a; number_a >= number_b; number_a --) {
      result.push(letter[number_a - 1]);
    }
  }

  return result;
}

module.exports = get_letter_interval;
