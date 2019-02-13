var indices = [];
var string = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, at."
var element = 'a';
var idx = string.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = string.indexOf(element, idx + 1);
}
console.log(indices);