function create_updated_collection(collection_a, object_b) {
  let arrList = object_b.value;
  for (let i = 0, len = collection_a.length; i < len; i++) {
    let item = collection_a[i];
    for (let j = 0, lens = arrList.length; j < lens; j++) {
      if (item["key"] === arrList[j]) {
        let subCount = Math.floor(item["count"] / 3);
        item["count"] -= subCount;
      }
    }
  }
  return collection_a;
}

module.exports = create_updated_collection;
