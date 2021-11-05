const err = [1, 2, 3];

try {
  throw new Error(err);
} catch (err) {
  console.log(typeof err);
  console.log(err);
  console.log(err.message);
}
