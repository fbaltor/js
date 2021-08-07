const split = function(objectArray) {
  const a = [];
  const noa = [];

  objectArray.forEach((obj) => {
    obj.isa ? a.push(obj.id) : noa.push(obj.id);
  });

  return [a, noa];
};

arr = [
  { isa: true, id: '1' },
  { isa: false, id: '2' },
];

console.log(split(arr));
