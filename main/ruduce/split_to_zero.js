'use strict';

function spilt_to_zero(number, interval) {
  let result = [];

  function sub(number, interval) {
    if (number > 0) {
      result.push(number);
      number = parseFloat((number - interval).toFixed(1));
      sub(number, interval);
    } else {
      result.push(number);
    }
  }
  sub(number, interval);
  return result;
}

module.exports = spilt_to_zero;
