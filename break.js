(loopWithBreak = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  console.log(arr);

  for (el of arr) {
    if (el === 3) break;
    console.log(el);
  }
})();
