const objects = [
    {name: '멍멍이'},
    {name: '야옹이'}
];

console.log(objects);
console.log(objects[0]);
console.log(objects[1]);

objects.push({
    name: '멍뭉이'
})

console.log(objects);

const array = [1, true, {a:1}, [1, 2, 3, 4]];
array.push(6);

console.log(array)
console.log(array.length)