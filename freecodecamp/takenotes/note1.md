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















