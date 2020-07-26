# JS for beginners
## comment
// this is a comment  
/* multiple line comment
multiple line comment
multiple line comment
*/

---

## Data Types and Variables
7 different data types and variables
- undifined
- null 
- boolean
- string
- symbol
- number
- object: store a lot of data and functions

var myName = 'Beau'  
myName = 8  
let ourName = 'freecodecamp'  
const pi = 3.14  

**the difference among them**  
var: to use the varible in all the program
let: only be used in the scope of where you declared that
const: some varible that should never change, if you try to change it you are going to get an error  

---

## Storing Values with Assignment Operator  
declaring variables and assigning variables  
declaring varibles `var a;`  
assigning varibles `var b = 2;`  
`a=7;`  
`b=a;`  
`console.log(b);`  

---

## Initializing Variables with Assignment Operator
`var a = 9;`  
This is the way to do it. 

---

## Uninitialized Variables
`var a;`
This is uninitialized

## Concatenating Strings with plus Equals Operator
``` javascript
var ourStr = "I come first";
ourStr += "I come seconde";
```

## Length of a String
``` javascript  
var lastNameLength = 0;
var lastName = "vitalic Buterin";
lastNameLength = lastName.length;
console.log(lastNameLength);
```
## bracket Notation to find First Character in String 
``` javascript
var firstLetterOfFirstName = "";
var firstName = "Ada";
firstLetterOfFirstName = firstName[0];
// console.log(firstLetterOfFirstName) -> A
```

## String immutability
Strings are immutable wihch means you cannot change single character in the string.But you can change all of it.
``` javascript
var myStr = "Jello World";
myStr[0] = "H";
```

## To Get The Last Character
``` javascript
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length -1 ];
```

## Array 
``` javascript
var ourArray = ["John", 23];

var myArray = ["Quncy", 1];
```

## Array 
``` javascript
var ourArray = [["the universe", 42], ["everything", 101010]];

var myArray = [["Bulls", 23],["white box", 32]];
``` 
## Array access
``` javascript
var ourArray = [50,60,70];

var myArray = [["Bulls", 23],["white box", 32]];
``` 

## Modify Array indexes
``` javascript
var ourArray = [18, 45, 77];
ourArray[1] = 2;
```
By this way you can change the array.

## push function
``` javascript
var ourArray = ["stimpson", "j", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["stimpson", "j", "cat", "happy", "joy"]
```

## pop function
This function just pop the last element from the array and change the original array.  
and the varible which used the pop function is equal to the element which is poped out.

## shift function 
This function is just the pop function's another version, which can pop the first element of the array and change the origianal array.  
And the varible which used the shift function is equal to the element which is shifted out.

## unshift function
This function can add a element at the beginning of the array. It also change the array itself. 

## Shopping List
``` javascript
var myList = [['cereal', 3], ["banana", 2]]
```

## Global Varibles
``` javascript
function fun1(){
    oopsGlobal = 5; // global
    var oops Global = 5; // local
    //This is a function which contains a varible which is global. if this is with 'var' then it is a local varible.
}
```

## Local Varible
``` javascript
function myLocalScope(){
var myVar = 5;
console.log(myVar);
}
myLocalScope();
console.log(myVar);
// An error come out here. 
```

## local Vraibles
``` javascript
var outerWear = "T-shirt";

function myOutfit(){
var outerWear = "sweater";
return outerWear;
}
console.log(myOutfit());
// sweater
console.log(outerWear);
// T-shirt
```

## understanging undefined value from a function 
If you do not return a value in a function, then the returned value will be "undefined".   

## if statement
``` javascript

function trueOrFalse(trueOrFalse){
    if (wasThatTrue){
        return "YES, it was true."
    }
    return "No, that was false."
}
console.log(trueOrFalse(true));
```
  
## Equality operator
``` javascript
// == check if the value is the same
// === strict equality operator (this operator also compare the type of the value)

// 4 === 4 true
// "4" ==== 4  false
// != is the inequality operator
// !== strct version of the inequality operator
// > < >= <= comparison operator
```

## logical operator
``` javascript
// && is the "and"
// || is the "or"

```

## order of the else if statement
Look at the example below. the order of the if statement is important.
``` javascript
function orderMyLogic(val) {
    if (val < 10) {
        return "less than 10";
    } else if (val < 5) {
        return less than 5
    } else {
        return "greater than or equal to 10";
    }
}
console.log(orderMyLogic(3));
```
this is a bad example. you should replace the order in order to make the val < 5 statement do things.

## switch statement
``` javascript
function caseInSwitch(val){
    var answer = "";
    switch(val){
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "theta";
            break;
        case 4:
            answer = "gamma";
            break;
        default:  // is like the else if statement in logical statement
            answer = "not defined yet man";
            break;
    }
    return answer;
}
console.log(caseInSwitch(1));


// another example 
function sequentialSizes(val) {
    var answer = "";
    switch(val) = "";
    switch (val){
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "medium";
            breank;
        case 7:
        case 8:
        case 9:
            answer = "high";
            break;
    }
    return answer;
}
```
## return to interrupet the function
``` javascript
function dainari(a, b){
    if (a < 0 || b< 0) {
        return undifined;
    }
    return a > b;
}
// with this return beforehand you can exit the function at any time.
```

# object creation
``` javascript
var myDog = {
    "name": "Quincy";
    "legs": 3,
    "tails": 2,
    friends":[],
};
```

## two ways to access the object
`objectName.attributeName`  
this is the way to access the object.

``` javascript
var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the dark": "water",
};
var entreeValue = testObj["an entree"];
var drinkValue = testObj["the drink"];
// by this we can access the value in the object
```


## Set New Properties in the object
`ourDog.bark = "bow-cow";`
`myDog["name"] = "Happy car";`


## delete property in the object
`delete myDog.tails`
by this we delete the property `tails`

## access the nested element in array and object
`myPlants[1].list[1];`  
this is the way to access a array with some objects inside. 


## loop

``` javascript
var myArray = [];
var ourArray = [];
for (var i = 0; i < 5; i++){
    ourArray.push(i);
}

// while loop
var myArray = [];

var i = 0;

while (i<5) {
    myArray.push(i);
    i++;
}
console.log(myArray);

//do while loop
var myArray = [];
var i = 10;
do {
    myArray.pysh(i);
    i++;
}while(i < 5);

console.log(i, myArray);
```

## random fraction 

``` javascript
function randomFraction() {
    return Math.random();
}
console.log(randomFraction());
// create a random number

// use Math.floor(Math.random()) to get a whole number.
```

## Use the Conditional (Ternary) Operator

``` javascript
// condition ? statement-if-true : statement-if-false;
function checkEqual(a,b) {
    return a ===b? true: false;
}

// multiple conditions
function check
``` javascript
function checkSign(num) {
    return num > 0 ? "positive" : num < 0 ? "negative" : "zero" 
}  
```

## differences between the var and let keywords

``` javascript
// let does not let you declare a varible twice
let catName = "mark";
let catName = "Cark";
// above code will give you an error. cuz you have declared twice. 
let catName = "mark";
catName = "Cark";
//this time it will not give you an error. 
// this is one of the reasons why people only use "let" and "const" to declare varible.

// "let" can declare a varible and make it usable in the block. "var"can declare a varible and make it usable globally.
```

## "use strict"
this enable strict mode. this can catch unexpected code and actions.
It can be put at the beginning of the code or put in the function. 

## const
"const" is a read-only way to define a varible. when you use const you always want to use CAPITAL LETTERS to name it.

```const SENTENCE = "str";```

"const" doesnt make the array unchangable.


## freeze

```object.freeze(objectName);```
use this to make the object immutable. 

## annonymous function 

``` javascript
var magic = function () => { 
    return new Date();
    }

var magic = () => {
    return new Date();
}

var magic = () -> new Date();

// with parameters
const myConcat = (arr1, arr2) => arr1.concat(arr2);
// after the arrow we have the return value
console.log(myConcat([1,2], [3,4,5]));

// higher order Arrow function 

<script type="text/javascript">

var a = [1,2,3];
document.write(a.concat(4,5));
// 1,2,3,4,5
</script>
 
```


## Foreach and Other

``` javascript
[1,2,3].foreach(function(item, index){
    console.log(item, index);
    });
//1 0
//2 1
//3 2

//map -> this put a new thing into the mao element position
const three = [1,2,3];
const doubled = three.map(function(item){
return item * 2;
});
console.log(doubled);
//[2, 4, 6]
// if you use an arrow function
const three = [1,2,3];
const doubled = three.map(item => item*2 )

//filter: check each item in the array if it is true then return the item to the array.
const ints = [1,2,3];
const evens = ints.filter(function (item){
    return item % 2 ===0;
});
console.log(evens);

//reduce: add up the elements in the array list.
const sum = [1,2,3].reduce(function(result, item){
    return result + item;
}, 0);
console.log(sum);
// 6

// some: check item in the array meets this condition or not? 
const hasNegativeNumbers = [1,2,3,-1,4].some(function(item) {
    return item < 0;
});
console.log(hasNegativeNumbers);
// true

// every: it is like "some". but it is a way to check if all the items meet the condition. if it is true then return true.
const allPositiveNumbers = [1,2,3](function(item){
    return item > 0;
})
console.log(allPositiveNumbers);
// true

// find: it goes around the array and check the condittion if it is true then it returns the item.
const objects = [{id: "a"}, {id: "b"}, {id: "c"}];
const found = objects.find(function(item){ 
    return item.id === "b";
})
console.log(found);
// {id: "b"}

// find index: it is like find, instead of returning the item, it is going to return the index of the item].
const object2 = [{id: "a"}, {id: "b"}, {id: "c"}];
const foundIndex = object2.findIndex(function (item){ 
    return item.id ==="b";
})
console.log(foundIndex);
// 1
// if there is no such thing, it will return "-1"
```


## hihger order arrow funcitons

``` javascript
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8, 8.34, -2];

const squareList = (arr) => {
    const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x*x);
    return squaredIntegers;
}
```

## Write Highter Order Arrow Functions

``` javascript
const increment = (function(){
    return function increment(number, value=1){
        return number + value;
    }
})();// this "()" is very important to understand this.
console.log(increment(5,2));
console.log(increment(5));
// 7
// 6
```

## Use the Rest Operator with Function Parameters
This operator can get all the parameters after the defined parameters.

``` javascript
const sum = (function() {
    return function sum(x,y,z){
        const args = [x, y, z];
        return args. reduce((a,b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3));

// another example 
function func(a, ...rest) {
  console.log(a)
  console.log(rest)
}
func(1)
// 1 []
func(1, 2, 3, 4)
// 1 [2,3,4]
// here the rest operator returns the "[]" and "[2,3,4]".
```

## spread operator
It is like a hard copy. but is a shallow copy. only one layer copy.

``` javascript
const arr1 = ["JAN", "FEB", "MAR", "APR","MAY"];
let arr2;
(function(){
    arr2 = [...arr1];
    arr1[0]="potato";
    })();
    console.log(arr2);
```

## Use Destructuring Assignment to Assign Variables from Objects

``` javascript
var voxel = {x: 3.6, y: 7.4, z:6.54};
// old way of doint this
var x = voxel.x;
var y = voxel.y;
var z = voxel.z;
// new way of doing the same thing
const {x:a, y:b, z:c} = voxel;// a = 3.6, b = 7.4, c = 6.54
```

## "use strict"
使用 "use strict" 指令
"use strict" 指令在 JavaScript 1.8.5 (ECMAScript5) 中新增。

它不是一条语句，但是是一个字面量表达式，在 JavaScript 旧版本中会被忽略。

"use strict" 的目的是指定代码在严格条件下执行。

严格模式下你不能使用未声明的变量。


## destructuring assignment

``` javascript
const [z,x, ,y] = [1,2,3,4,5,6];
console.log(z, x, y);
// 1, 2, 4

// change the value of a, b using a, b
let a = 8, b = 6;
(() => {
    "use strict";
    [a, b] = [b, a]
});
console.log(a);
console.log(b);
```

## Using Destructuring assignment and the rest operator

``` javascript
const source = [1,2,3,4,5,6];
function removeFirstTwo(list) {
    const [a, ,  ...arr] = list;
    return a, arr;
}

const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

```

## Using destructuring Assignment to Pass an Object as a Function's Parameters

``` javascript
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34/54,
    mode: 23.84;
    min: -0.75;
    average: 35.85;

}
const half = (function(){
    return function half({max, min}) {
        return (stats.max + stats.min) / 2.0;
    };
})();
console.log(stats);
console.log(half(stats));
// 28.015
// When using API you usually encounter this kinda situation. you only need what you need so you use this way to capture the value you want. 
```

## Using Template Literal to create Strings

``` javascript
const person - {
    name: "Zodiac Hasbro",
    age: 56
};

// Template literal with multi-line and string interpolation(means the varibles can be put between strings.)
`Hello, my name is ${person.name}!
I am ${person.age} years old.`

```

## Coding Challenge

``` javascript
const result = {
    success: ["max-length", "no-amd"
, "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
    const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
    	resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)

    };
    
    return resultDisplayArray;
}

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);

/*
["&lt;li class=\&quot;text-warning\&quot;&gt;no-var&lt;/li&gt;", 
"&lt;li class=\&quot;text-warning\&quot;&gt;var-on-top&lt;/li&gt;", 
"&lt;li class=\&quot;text-warning\&quot;&gt;linebreak&lt;/li&gt;"]
*/
```

## simple way to create a object 
simple way to craete a object with the attribute name as the same as the value name.
``` javascript
const createPerson = (name, age, gender) => ( { name, age, gender});
console.log(createPerson("Zodiac Hasbro", 56, "male"));
```

## Wirete concise Declarative Functions 
``` javascript
// an object can contain a function.
const bicycle = {
    gear: 2, 
    setGear: function(newGear) {
        "use strict";
        this.gear = newGear;
    // setGear(newGear){
    // "use strict";
    // this.gear = newGear;
    //}
    }
};
bicycle.setGear(3);
console.log(bicycle.gear);

```

## create a object 

``` javascript
// old way to create a class
// constructor function 
var SpaceShuttle = function(targetPlanet) {
    this.targetPlanet = targetPlanet;
} 
//instantiate an object with a "new" keyword
var zeus = new SpaceShuttle("Jupiter");

console.log(zeus.targetPlanet);
// Jupiter


// new way to create with class syntax
class SpaceShuttle {
    constructor (targetPlanet) {
        this.targetPlanet = targetPlanet;
    }
}
var zeus = new SpaceShuttle("Jupiter);

console.log(zeus.targetPlanet);

// example
function makeClass(){
    class Vegetalbe {
        constructor (name){
            this.name = name;
        }
    }
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable("carrot");
console.log(carrot.name);
// carrot
```

## using getters and setters
``` javascript
class Book {
    constructor(author) {
        // this is a private attribute
        this._author = author;
    }

// getter 
    get writer() {
        // this is the way to simpley get the private attribute without directly using the attribute
        return this._author;
        }
    //setter
    set writer(updatedAuthor) {
        this._author = updatedAuthor;
        } 
}

// example 
function makeClass () {
    class Thermostat {
        constructor(temp) {
            this._temp = 5/9 * (temp - 32);
        }
        get temperature(){
            return this._temp;
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp;
        }
        }
        return Thermostat;
    }
    const Thermostat = makeClass();
    const thermos = new Thermostat(76);
    let temp = thermos.temperature;
    // you need to do this line to enable the changing
    thermos.temperature = 26;
    temp = thermos.temperature;
    console.log(temp)
    // 26
```

## Understanding the differences between "import" and "accquire"

``` javascript
import { capitalizeString} from "./string_function"

const cap = capitalizeString("hello");

console.log(cap);

```

## export
``` javascript
connst capitalizeString = (string) => {
    return string.charAt(0).toUpperCase() + string.clice(1);
}

export {capitalizeString};

export const foo = "bar";
export const bar = "foo";
// in this file we export the varibles and the function in order to make other file use these information 
```

## import everything
``` javascript
import * as capitalizeStrings from "capitalize_ strings";
```


## Create an Export Fallback with export default 
``` javascript
export default function substract(x, y) {return x - y;}
```

``` javascript
// if it is default you don't need to us {substract}
import substract from "math_functions";
```








