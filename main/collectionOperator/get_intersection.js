'use strict';

function get_intersection(collection_a, collection_b) {
  var result = collection_b.filter(function(v) {return collection_a.indexOf(v) > -1});
  return result;
}

module.exports = get_intersection;
