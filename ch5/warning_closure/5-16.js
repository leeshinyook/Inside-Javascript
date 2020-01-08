// function countSecond(howMany) {
//   for (var i = 1; i <= howMany; i++) {
//     setTimeout(function() {
//       console.log(i);
//     }, 1000);
//   }
// }
// countSecond(3);
function countSecond(howMany) {
  for (var i = 1; i <= howMany; i++) {
    (function(currentI) {
      setTimeout(function() {
        console.log(currentI);
      }, currentI);
    })(i);
  }
}
countSecond(3);
