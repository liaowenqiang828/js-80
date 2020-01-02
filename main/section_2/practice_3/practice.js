function count_same_elements(collection) {
  var result = collection.reduce(function (counted, currStr) {
    var nameArray = counted.map(function (element) {
      return element.name;
    })
    var currVal = currStr.match(/[a-z]/).toString();
    if (!nameArray.includes(currVal)) {
      createNewObj(counted, currStr);
    } else {
      increaseCount(counted, currStr);
    }
    return counted;
  }, []);
  return result;
}

function createNewObj(array, item) {
  var newObj = {};
  newObj.name = item.match(/[a-z]/).toString();
  if (item.match(/\d/)) {
    newObj.summary = parseInt(item.match(/\d/));
  } else {
    newObj.summary = 1;
  }
  return array.push(newObj);
}

function increaseCount(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].name === item.match(/[a-z]/).toString()) {
      if (item.match(/\d/)) {
        arr[i].summary += parseInt(item.match(/\d+/));
      } else {
        arr[i].summary++;
      }
    }
  }
  return arr;
}
module.exports = count_same_elements;
