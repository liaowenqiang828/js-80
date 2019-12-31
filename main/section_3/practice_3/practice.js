function create_updated_collection(collection_a, object_b) {

  let countElement = count(collection_a);
  function count(collection_a) {
    let countElement = {};
    for (let i = 0, len = collection_a.length; i < len; i++) {
      if (countElement[collection_a[i]]) {
        countElement[collection_a[i]] += 1;
      } else {
        countElement[collection_a[i]] = 1;
      }
    }
    return countElement;
  }

  let countElementFormatResult = countElementFormat(countElement);
  function countElementFormat(countElement) {
    let countElementFormat = [];
    for (let key in countElement) {
      countElementFormat.push({key, "count": countElement[key]});
    }
    return countElementFormat;
  }

  let countElementSelected = countElementSelect(countElementFormatResult, object_b);
  function countElementSelect(countElementFormatResult, object_b) {
    let arrList = object_b["value"];
    for (let i = 0, len = countElementFormatResult.length; i < len; i++) {
      let item = countElementFormatResult[i];
      for (let j = 0, lens = arrList.length; j < lens; j++) {
        if (item["key"] === arrList[j]) {
          let subCount = Math.floor(item["count"] / 3);
          item["count"] -= subCount;
        }
      }
    }
    return countElementFormatResult;
  }

  return countElementSelected;
}

module.exports = create_updated_collection;
