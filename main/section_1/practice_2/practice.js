function collect_same_elements(collection_a, collection_b) {
  let item = [];
  let result = [];
  for (let i = 0, len = collection_b.length; i < len; i++) {
    item = collection_a.filter(function(v) {
      return collection_b[i].indexOf(v) > -1;
    });
    result = result.concat(item);
  }
  result = result.filter(function(item, index, result) {
    return result.indexOf(item, 0) === index;
  });

  return result;
}
module.exports = collect_same_elements;
