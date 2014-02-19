
function hashArray(arr, key) {
  var ret = {};
  arr.forEach(function(item, i) {
    if (typeof item[key] !== 'undefined') {
      ret[item[key]] = {
        value: item,
        index: i
      };
    }
  });
  
  function get(key) {
    return ret[key].value;
  }
  
  function set(key, val) {
    var obj = get(key);
    ret[key].value = val;
    arr[obj.index] = val;
  }

  return {
    'get': get,
    'set': set,
    '_value': ret
  };
}

module.exports = hashArray;
