function count_same_elements(collection) {
  var result = [];
  var item = {};

  for (var i = 0, len = collection.length; i < len; i++) {
    if (item[collection[i]]) {
      item[collection[i]] += 1;
    } else {
      item[collection[i]] = 1;
    }
  }

  for (var key in item) {
    result.push({key, "count": item[key]});
  }
  return result;
}

module.exports = count_same_elements;
