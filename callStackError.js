console.log('Counting maximum call stack size...');
var global = 0;

let a = function() {
  global++;
  return b();
};

let b = function() {
  global++;
  return a();
};

try {
  a();
} catch (e) {
  console.log('Maximum call stack size is: ' + global);
  console.log(e);
}
