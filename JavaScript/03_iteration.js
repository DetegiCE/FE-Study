for(let i=0 ; i<10 ; i++) {
    console.log(i);
}

const names = ['멍멍이', '야옹이', '멍뭉이'];
for(let i=0 ; i<names.length ; i++) {
    console.log(names[i]);
}

let i=0;
let isFun = false;
while(i < 10) {
    console.log(i);
    i++;
}

i = 0;
while(!isFun) {
    console.log(i);
    i++;
    if(i === 10) {
        isFun = true;
    }
}

const numbers = [10, 20, 30, 40, 50];

for (let number of numbers) {
    console.log(number);
}

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.keys(doggy));
console.log(Object.values(doggy));
console.log(Object.entries(doggy));

for(let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

for(let i=0 ; i<10 ; i++) {
    if(i === 2) continue;
    console.log(i);
    if(i === 5) break;
}

function sumOf(numbers) {
    let sum = 0;
    for(let i=0 ; i<numbers.length ; i++) {
        sum += numbers[i];
    }
    return sum;
}

const result = sumOf([1, 2, 3, 4, 5]);
console.log(result);