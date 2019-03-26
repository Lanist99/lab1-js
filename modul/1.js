 var matrix = function(a, x, y) {
   return a[y][x];
 };

 var arr = [[1, 2, 3],
   			[4, 5, 6],
   			[7, 8, 9],];

 var newarr = [];
 arr[0].forEach(() => newarr.push(new Array(arr.length)));

 for (var i = 0; i < newarr.length; i++) {
   for (var j = 0; j < newarr[0].length; j++) {
     newarr[i][j] = matrix(arr, i, j);
   }
 }
 console.log(newarr);