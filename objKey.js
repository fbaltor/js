(() => {
  const obj = {
    first: '1',
    second: '2',
    third: '3',
  };

  for (const key in obj) {
    console.log(key, typeof key);
  }
})();
