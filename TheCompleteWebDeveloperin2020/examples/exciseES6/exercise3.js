// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
// var person
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const { firstName, lastName, age, eyeColor } = person;
// var firstName = person.firstName;
// var lastName = person.lastName;
// var age = person.age;
// var eyeColor = person.eyeColor;


// Object properties
// var a = 'test';
// var b = true;
// var c = 789;

// var okObj = {
//     a: a,
//     b: b,
//     c: c
// };
const a = "test";
const b = true;
const c = 789;

var okObj = {
    a, b, c
}



// Template strings
// var message = "Hello " + firstName + " have I met you before? I think we met in " + city + " last summer no???";
const message = `Hello, ${firstName} Havae I met you before? I think we met in ${city} last summer NO???`




// default arguments
// default age to 10;
// function isValidAge(age) {
//     return age
// }
const isValidAge = (age = 10) => age;
// 这里使用这个const定义函数的含义是，不允许这个变量继续编程别的东西了。他只能指向这个函数。


// Symbol
// Create a symbol: "This is my first Symbol"
const ss = symbol("This is my first symbol");

// Arrow functions
// function whereAmI(username, location) {
//     if (username && location) {
//         return "I am not lost";
//     } else {
//         return "I am totally lost!";
//     }
// }

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";

    } else {
        return " I am totally lost";
    }
}