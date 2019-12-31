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
  // console.log(item);
  let strRegexp = /[a-z]/g;
  let numRegexp = /[0-9]+/g;

  for (let key in item) {
    if (key.length > 1) {
      let getKey = key.match(strRegexp)[0];
      // console.log(typeof getKey);
      let getNum = parseInt(key.match(numRegexp)[0]);
      // console.log(getNum);
      delete item[key];
      // console.log(item);

      // key = getKey;
      if (item.getKey) {
        item[getKey] += getNum;
      } else {
        item[getKey] = getNum;
      }
      
      // let splitArr = key.split(key[0]);
      // item[key[0]] += parseInt(splitArr[1]);
    }
  }
  // console.log(item);

  for (var key in item) {
    result.push({key: key, "count": item[key]});
  }
  return result;
  // console.log(result);
}

// var collection = [
//   "a", "a", "a",
//   "e", "e", "e", "e", "e", "e", "e",
//   "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
//   "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
//   "f", "f", "f", "f", "f", "f", "f", "f", "f",
//   "c", "c", "c", "c", "c", "c", "c", "c",
//   "g", "g", "g", "g", "g", "g", "g",
//   "b", "b", "b", "b", "b", "b",
//   "d-5"
// ];
// count_same_elements(collection);
module.exports = count_same_elements;
