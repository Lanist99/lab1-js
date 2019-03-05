var s = {
  value1: "name",
  value2: 3,
};

function isEmpty(obj) {
  for (var key in s) {
    return false;
  }
  return true;
}
console.log(isEmpty(s));