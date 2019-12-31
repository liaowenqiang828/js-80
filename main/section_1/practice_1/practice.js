function collect_same_elements(collection_a, collection_b) {
  let result = collection_a.filter(function(v) {
    return collection_b.indexOf(v) > -1;
  });

  return result;
}

module.exports = collect_same_elements;
