'use strict';
var number_map_to_word_over_26 = function(collection){
  var result = [];
  var letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var firstLetter;
  var secondLetter;
  var secondLetterIndex;
  var firstLetterIndex;
  var element;

  for (var i =0, len = collection.length; i < len; i++) {
    firstLetterIndex = Math.floor(collection[i] / 26);
    secondLetterIndex = collection[i] % 26;

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

  return result;
}

module.exports = number_map_to_word_over_26;
