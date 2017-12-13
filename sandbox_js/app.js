console.log('Hey There');
console.table({a: 3, b: 4, c: 6});
console.warn('This is a warning');
console.error('This is an ERROR');
console.time('test');
    //do some stuff here and when it hit the timeEnd it will tell you how long it took to do the stuff here
    console.log('doing stuff');
    console.log('doing stuff');
    console.log('doing more stuff');
    //time and timeEnd need same identifier, in this case its 'test'
console.timeEnd('test');

//let, const, var

// let is like var in the sense that it can be changed, but it is block scoped, vars are function scoped
// const is where you dont want a value to change, note that with objects, functions, and arrays you can change data
// inside these data structures but not the type its self. 

var lastName = 'Allred';
let firstName = 'Derek';
const gender = 'Male';

const person = {
    name: 'Derek',
    age: 27
}

person.age += 1;  //valid
//person = 'me'; // not valid
console.warn(person);
