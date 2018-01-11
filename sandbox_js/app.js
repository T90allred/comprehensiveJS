/*
    CONSOLE OBJECT
*/
console.log('Hey There');
console.table({a: 3, b: 4, c: 6});
console.warn('This is a warning');
console.error('This is an ERROR');
console.time('test');
    //do some stuff here and when it hit the timeEnd it will tell you how long it took to do the stuff here
    console.log('doing stuff');
    console.log('doing other stuff');
    console.log('doing more stuff');
    //time and timeEnd need same identifier, in this case its 'test'
console.timeEnd('test');

/*
    LET CONST VAR
*/

// let is like var in the sense that it can be changed, but it is block scoped, vars are function scoped
// const is where you dont want a value to change, note that with objects, functions, and arrays you can 
// change data inside these data structures but not the type its self. 

var lastName = 'Allred';
let firstName = 'Derek';
const gender = 'Male';

const person = {
    name: 'Derek',
    age: 27
}

person.age += 1;  //valid because the type is unchanged from being an object
//person = 'me'; // not valid because the type is changed from being an object to a string
console.warn(person);

/*
    PRIMITIVE TYPES AND REFERENCE TYPES
*/

const primitiveType = 'stored on the stack, stored directly in the location the variable access';
const referenceType = 'objects that are stored on the heap, accessed by reference, a pointer to a location in memory';

const primitiveDataTypes = [
    'string',
    5,      // numbder
    true,   // boolean
    null,
    undefined,
    'symbol'
]
// examples
const stringVal = 'String here';
const numberVal = 23;
const isCool = true;
const car = null;
let thing = undefined;
let sym = Symbol();

const referenceDataTypes = [
    'arrays',
    'object literals',
    'functions',
    'Dates',
    'anything else'
]

/*
    TYPE CONVERSION
*/

// Implicit Conversion
const implicitConversion = 'This is where a variable is changed by another action taken, like adding a string number and a number number, it concatinates the two it does not sum them';

// Explicit Conversion
const explicitConversion = 'This is where you use a method like String(), or Number() and pass in the value to convert it to another type';

/*
    Math Object & Numbers
*/
// JS supports + - * / % operations as well as things like ++ -- += -+ *= /=

const mathObject = 'a global object with a bunch of math methods in it';

// example
Math.round(); // helps you round down to set amount. 

/*
    Object Literals
*/

const objectLiteral = 'these are name value pairs ';

const example = {
    name: 1,
    'odd name': 'value here',
    name2: true
}

// You access object values in 2 ways, dot notation and bracket notation

// Dot notation is used for values that also qualify as variable name, they start with a-z, $ or _ and have no spaces
example.name;

// Bracket notation is used for add values like the one below that has a space in the name
console.log(example['odd name']);

/*
    Date Object 
*/

// The date object is globally defined like console and has many methods we can use to our advantage.

const dateValue = new Date();
let birthday = new Date('6/4/1990');
dateValue.getDate();
dateValue.getDay();

console.log(dateValue);

/*
    Conditional Statements (If Statements)
*/

// Used to evaluate a condition then do something based on it
// Comparison operators ==, ===, !=, !==

let ID = 1;

if(typeof ID === 'undefined') {
    // do something if ID = undefined
} else if(typeof ID === 'number') {
    // do something if ID = number
} else {
    // do something if other statements are false
}

// AND/OR conditionals ||...&&
// used to check for multiple conditions 
if(ID < 0 || ID > 100) {
    //do something
} else if (ID > 10 && ID < 20) {
    //do something
}

// TERNARY OPERATOR short hand conditionals 

console.log(ID === 100 ? 'corrent' : 'incorrenct');

// const terFunc1 = () => {
//     console.log('terFunc1');
// }

// const terFunc2 = () => {
//     console.log('terFunc2');
// }

ID === 4 ? terFunc1() : terFunc2();

function terFunc1() {
    console.log('terFunc1');
}

function terFunc2() {
    console.log('terFunc2');
}

/*
    Switch Statments
*/
// Switch statemenst are used to determine what to do based on a given value like if statements

const color = 'red';

switch(color){
    case 'red':
        //do something if color is red
        break;
    case 'green':
        //do something if color is green
        break;
    case 'blue':
        //do something if color is blue
        break;
    default:
        //do something if color is != to any cases
        break;
}

/*
    Function Declarations 
*/

function myFunc() {
    return 'This is a return statement';
}

//Calling a function
myFunc();

//function parameters
function myFunc2(param) {
    return param
}

myFunc2('Test');

//default parameters: you can set default parameters in the function definition so if your function is called and no
// params are passed that are needed in the function you can have defaults available. 

function defaultParams(name = 'Derek', age = 26) {
    return `${name} is a good developer and is ${age} years old`;
}

console.log(defaultParams());

//IIFE

//without IIFE
function IIFEE() {
    console.log('IIFEE has run');
}
IIFEE();
// Immidiatly invoked function expressions

(function IIFE(){
    console.log('IIFE has run');
})();