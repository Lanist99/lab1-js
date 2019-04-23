var time = new Date()

try {
  while (true) {
    if (new Date - time > 3000) {
      throw "Stop!!! this endles cycle o_0"
    }
  }
} catch(err) {
  console.log(err);
}