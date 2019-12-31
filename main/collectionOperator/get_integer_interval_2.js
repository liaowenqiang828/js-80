'use strict';

function get_integer_interval_2(number_a, number_b) {
  var result = [];
  if (number_a <= number_b) {
    for (number_a; number_a <= number_b; number_a++) {
      if (number_a % 2 === 0) {
        result.push(number_a);
      }
    }
  } else {
    for (number_a; number_a >= number_b; number_a--) {
      if (number_a % 2 === 0) {
        result.push(number_a);
      }
    }
  }

  return result;
}

module.exports = get_integer_interval_2;
