'use strict';
var rank_asc = function(collection){
  var result = collection.sort().reverse();

  return result;
};

module.exports = rank_asc;
