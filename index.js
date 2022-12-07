// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
function printNumbers() {
  var N = 100;
  for (var i = 0; i < N; i++) {
    if (i % 15 == 0) {
      document.write('amazon');
    } else if (i % 5 == 0) {
      document.write('google');
    } else if (i % 3 == 0) {
      document.write('facebook');
    } else {
      document.write(i);
    }
    document.write('<br>');
  }
}
printNumbers();
