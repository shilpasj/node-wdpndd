// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);
function printNumbers() {
  var N = 100;
  for (var i = 0; i < N; i++) {
    if (i % 15 == 0) {
      console.log('amazon');
    } else if (i % 5 == 0) {
      console.log('google');
    } else if (i % 3 == 0) {
      console.log('facebook');
    } else {
      console.log(i);
    }
  }
}
printNumbers();
