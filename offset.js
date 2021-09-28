const arr = ['zero', 'one', 'two', 'three'];

const getElementWithOffset = (array, element, offset) => {
  console.log('array', array);
  console.log('element', element);
  console.log('offset', offset);
  const index = array.indexOf(element);
  console.log('index', index);
  const nextIndex = index === array.length ? index : index + offset;
  console.log('nextIndex', nextIndex);

  return array[nextIndex] || array[index];
};

console.log(getElementWithOffset(arr, 'one', -2));
