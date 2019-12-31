function collect_same_elements(collection_a, object_b) {
  let tempArr = object_b.value;

  let result = collection_a.filter(function(v) {
    return tempArr.indexOf(v) > -1;
  });

  return result;
}

module.exports = collect_same_elements;
