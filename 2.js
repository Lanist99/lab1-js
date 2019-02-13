var a =  [234245645335];
var hrd = Math.floor( a % 3600 );
var min = Math.floor(hrd/60);
var sec = Math.floor(hrd%60);

console.log(hrd);
console.log(min);
console.log(sec);