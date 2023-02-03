const s = new Date().getSeconds();

const s = "

setTimeout(function () {
  // prints out "2", meaning that the callback is not called immediately after 500 milliseconds.
  console.log('Ran after ' + (new Date().getSeconds() - s) + ' seconds');
}, 500);

while (true) {
  if (new Date().getSeconds() - s >= 2) {
    console.log('Good, looped for 2 seconds');
    break;
  }
}
