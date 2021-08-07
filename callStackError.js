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
  console.log(global);
  console.log(e);
}
