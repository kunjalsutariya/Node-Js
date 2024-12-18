const sum = () => {
    let a = 46, b = 27;
    const sum = a + b;
    console.log(`sum: ${a + b}`);
};
const sub = (a, b) => {
    return a - b;
};

const arr = [10, 38, 58, true];

const obj = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
    phone: 123456

}

const users = [
    {name: 'John', age: 30, occupation: 'Developer'},
    {name: 'Jane', age: 25, occupation: 'Designer'},
    {name: 'Bob', age: 40, occupation: 'Manager'} 
]

module.exports = {
    sum, sub, arr ,obj,users
};
