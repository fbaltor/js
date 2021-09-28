const arr = ['first', 'second', 'third'];

export const printArray = () => {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    const a = i + 1;
    console.log(a);
    console.log(arr[i]);
  }
};
