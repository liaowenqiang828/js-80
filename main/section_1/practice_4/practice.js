function collect_same_elements(collection_a, object_b) {
  let result = collection_a.filter(function(v) {
    return object_b.value.indexOf(v.key) > -1;
  });
  
  result = result.map(function(v) {
    return v.key;
  })
  return result;
}

module.exports = collect_same_elements;
