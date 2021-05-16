const array = [];
let text = '';
if(array.length === 0) {
    text = '배열이 비었습니다.'
}
else {
    text = '배열이 비어있지 않습니다.'
}

console.log(text);

const array2 = [1, 2];
let text2 = array2.length === 0
 ? '배열이 비었습니다'
 : '배열이 비어있지 않습니다';
console.log(text2);

const cond1 = false;
const cond2 = false;

const value = cond1
    ? 'wow!'
    : cond2
        ? 'foo'
        : 'bar';

console.log(value);