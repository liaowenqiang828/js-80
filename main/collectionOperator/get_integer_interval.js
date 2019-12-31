'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  if (number_a <= number_b) {
    for (number_a; number_a <= number_b; number_a++) {
      result.push(number_a);
    }
  } else {
    for (number_a; number_a >= number_b; number_a--) {
      result.push(number_a);
    }
  }

  return result;
}

module.exports = get_integer_interval;

