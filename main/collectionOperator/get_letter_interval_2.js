'use strict';

function get_letter_interval_2(number_a, number_b) {
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var result = [];
  var firstLetter;
  var secondLetter;
  var secondLetterIndex;
  var firstLetterIndex;
  var element;

  if (number_a <= number_b) {
    for (number_a; number_a <= number_b; number_a++) {
      firstLetterIndex = Math.floor(number_a / 26);
      secondLetterIndex = number_a % 26;

      if (!secondLetterIndex) {
        secondLetter = "z";
        firstLetterIndex = firstLetterIndex - 1;
        if (firstLetterIndex) {
          firstLetter = letter[firstLetterIndex - 1];
        } else {
          firstLetter = "";
        }

        element = firstLetter + secondLetter;
      } else {
        if (firstLetterIndex) {
          firstLetter = letter[firstLetterIndex - 1];
        } else {
          firstLetter = "";
        }        
        secondLetter = letter[secondLetterIndex - 1];

        element = firstLetter + secondLetter;
      }

      result.push(element);
    }
  } else {
    for (number_a; number_a >= number_b; number_a--) {
      firstLetterIndex = Math.floor(number_a / 26);
      secondLetterIndex = number_a % 26;

      if (!secondLetterIndex) {
        secondLetter = "z";
        firstLetterIndex = firstLetterIndex - 1;
        if (firstLetterIndex) {
          firstLetter = letter[firstLetterIndex - 1];
        } else {
          firstLetter = "";
        }

        element = firstLetter + secondLetter;
      } else {
        if (firstLetterIndex) {
          firstLetter = letter[firstLetterIndex - 1];
        } else {
          firstLetter = "";
        }
        secondLetter = letter[secondLetterIndex - 1];

        element = firstLetter + secondLetter;
      }

      result.push(element);
    }
  }
  return result;
}

module.exports = get_letter_interval_2;

