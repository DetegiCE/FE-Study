const superHeroes = [
    'IronMan',
    'Cap Am',
    'Thor',
    'Doc Str'
]

function print(hero) {
    console.log(hero);
}

superHeroes.forEach(print)
superHeroes.forEach((hero => {
    console.log(hero);
}));

const array = [1, 2, 3, 4, 5, 6, 7, 8];
squared2 = [];
array.forEach(n => {
    squared2.push(n*n);
});
console.log(squared2);

const square = n => n * n
const squared = array.map(square)
console.log(squared)

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

const texts = items.map(item => item.text);
console.log(texts);

const index = superHeroes.indexOf('Thor')
console.log(index);

const todos = [
    {
        id: 1,
        text: 'JS',
        done: true,
    },
    {
        id: 2,
        text: 'Function',
        done: true,
    },
    {
        id: 3,
        text: 'Object',
        done: false,
    }
]

const index2 = todos.findIndex(todo => todo.id === 3)
console.log(index2)


const todo2 = todos.find(todo => todo.done === false)
console.log(todo2)