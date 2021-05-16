function print(person) {
    if(person === undefined || person === null) {
        return;
    }
    console.log(person.name);
}

const person = null;

print(person);

console.log(!undefined);
console.log(!null);
console.log(!0);
console.log(!'');
console.log(!NaN);
console.log(!false);

console.log(!3);
console.log(!'hello');
console.log(!['array']);
console.log(![]);
console.log(!{});

const value = {a:1};
if (value) {
    console.log('value is Truthy');
}

const value2 = {};
const truthy = value2 ? true : false;
const truthy2 = !!value2;
console.log(truthy);
console.log(truthy2);