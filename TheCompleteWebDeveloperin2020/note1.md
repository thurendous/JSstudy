# The Complete Web Developer in 2020

## Career Of a Web Developer
The Takeaways:
- React is the most popular framework you need to learn.
- jQuery is not a popular framework anymore but it is still used here or there. 
- React can also build Android app and iOS app. 
- You can be a freelancer to use Upwork or some other websites to get hired to be a developer.

## Developer Fundamentals
the Takeaways:
- use the rubber duck method to code 
  - by this way you can figure out the problem. Talking to yourself is good. 
- stackoverflow is a website which can be very good to you when you are on you way to code more. 
- googling is the best way to solve the problems. this is quite important.

## DOM selector
- getElementsByClassName
- getElementById
- getElementsByTagName
  - the 3 selector above is some old way
- `querySlector("")` you can put in anything you want like you selected in the CSS file. 
  - It select the first item it finds.
- `querySelectorAll("")` this one can select all of the items about it. 
- these later ones (querySelector, querySelectorAll) are recommended to be used. cuz they are like CSS selectors. 
- `document.querySelector("li").getAttribute("random");`: get the "random" attribute of the li element in the document. 
- `document.querySelector("li").setAttribute("random", "10000");` by this way, you can set the attribute of the "random" to "10000".

### Changing Style
**using the style**
``` javascript
document.querySelector("h1").style.background = "yellow";
// by this you change the CSS. But it is not a good way to change the style. cuz usually we use the css file and html file to control the style and structure respectively. we don't want to mix them together. so that's why we use it the way below.
var h1 = document.querySelector("h1");
h1.classname = "coolTitle;"
// this will change the class of the h1 to "coolTitle"
document.querySelector("li").classList.toggle("done");
// if you toggle once it will be changed once. if you want to change something on/off it is quite useful. 
```
use the methods below to change the style of webpage. 
`className ` -> best
`classList` -> best
`classList.add("cooltitle")`
`classList.remove("cooltitle")`
`classList.toggle('done')`

``` css
/* line-through can 横線で削除された感じ*/
h1 {
text-decoration: line-through;
}
```

## change the text
**innerHTML**
``` javascript
document.querySelector("h1").innerHTML = "<strong>!!!!</strong>";
// this can change the text content of the h1 tag
```
## parent element
``` javascript
var baba = document.querySelectorAll("li")[1].parentElement;
// ul
var yeye = document.baba.parentElement;
// body
// this "parentElement" can get the parent element of the element.
var childrenA = yeye.children;
// get all the element below the element -> children

```

## DOM Events
``` javascript
var button = document.getElementsByTagName("button");
button[0].addEventListener("click", function(){
    console.log("CLICKED!");
    })

```

``` html
<input id="userinput" type="text" placeholder="enter items">
<button id="enter">enter</button>
```

``` javascript
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
    if (input.value.length > 0){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    // this one reset the input value 
    input.value = "";
    }
})

```

## Callback function
 In javascript function is also an object. Function can also become parameter of other functions, or become the return value of other functions. 
 A callback function is to
put a function into a funciont's parameter position and don't let it run until the main event is called.
e.g.
``` javascript
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterClick);
```
> We did not put a function which runs immediately. We want to let it know though that we want this action to happen wehn a click happens. So we are passing a reference to the function without running it.




``` javascript
// if it is default you don't need to use {substract}
import substract from "math_functions";
```

# jQuery
DOM is not easy to learn, you need to practise more. 
There was a problem before. It was:
> explorer support different javascripts. It was quite complicated. 
the answer is jQuery was made cuz of this. It is a Library of javascript.

``` javascript
#(document).ready(function(){
    $("p").click(function(){
        $(this).hide();
    })
})
// is the same as"p.addEventListener("click", functionU(){})"
```
But jQuery has some problems. They are like the code can get very messy with jQuery and become diffucult to manage the maintenance. 
React is Declarative. and jQuery is Imperative.
you can use "youmightnotneedjquery.com" to check if you need jquery or not. 

# Scope 
``` javascript
    // if you type this in the console of browser
    // we declared the function in the root scope
    h = "H";
    function aa() {
        console.log("hello");
        var h = "B";
    }
    a();
    console.log(h);
    // "H"
    // child scope is in the function 
    function aa() {
        h = "C";
    }
    console.log(h);
    // "C"
    // in this way the root scope varible is changed.



```

# tenary operator
``` javascript
// tenary operator 
// condition ? expr1 : expr2;  (expr: expression)
function isUserValid(bool) {
    return bool;
}

var answer = isUserValid(true) ?  "You may enter" : "Access Denied";
/* is the same as below
function condition() {
    if (isUserValid(true)) {
        return "you may enter";

    }else {
        return "Access denied";
    }
}

*/

```

# ES6: ECMAScript6 
ES6 is a international standard. 

# let and const
``` javascript
const player = "bobby";
let experience = 100;
let wizardLevel = false;

if(experience = 90) {
    let wizardLevel = true;
    console.log("inside", wizardLevel);
}

console.log("outside", wizardLevel);

// here we use this let so we get a new scope varible in the local scope.
// if we use var wizardLevel here then we will get some new things.
// const -> make sure that the value is not changable. 

const obj = {
    player: "bobby",
    experience: 100;
    wizardLevel: false;
}
// you can not change obj like: obj = 5; error
// you can assign new attribute values. like: obj.player = "mark";

const player = obje.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
// this is the same as the above expressions.
const {player, experience}  = obj;
let {wizardLevel} = obj;
// you just need to get used to it. but it's much nicer to look at.

const name = "john snow";
const obj =  {
    [name]: "hello",
    ["ray" + "smith"]: "hihi",
    [1 + 2]: "heyhey",
}
console.log(obj);
// {3: "heyhey", john snow: "hello", raysmith: "hihi"}
obj[3];
//"heyhey"
obj["john snow"];
//"hello"
```


# ES5 and ES6
``` javascript
const a = "Simon";
const b = true;
const c = {};
//normally we do this
const obj = {
    a: a,
    b:b,
    c:c,
};

// if the obj property and the value is the same, then it is OK to use this.
const obj = {a,b,c};

//template strings 
const name = "Sally";
const age = 34;
const pet = "horse";

const greetingBest = `Hello ${name} you seem to be ${age}. What a ${pet} you have got.`
//"Hello Sally you seem to be 34. What a horse you have got."


```

# data type symbol
``` javascript
let sym1 = Symbol();
let sym2 = Symbol("foo");
let sym3 = Symbol("foo");
// if you do this
sym2 === sym3;
// false
// even though this seems to be true, but it is not. eveyr one of symbol can be unique.

```
# arrow function
``` javascript
function add(a,b) {
    return a+b;
}

const add2 = (a,b) => a+b;
// this is the same as this. but when you have got one line to return you can use this.
const add2 => (a,b) {
    return a+b;
}

```

# advanvced functions

``` javascript
const first = () => {
  const greet ="Hi";
  const second => () {
    alert(greet);
  }
  return second;

}

const newFunc = first();
newFunc();

//closure闭包
// Closures - a function ran. the function executed. it's never gonna execute again. 
// BUT it's going to remember tha there are references to those varibles. 
// so the child scope always has access to the parent scope.

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();
 
add();
add();
add();
 
// 计数器为 3
// 实例解析
// 变量 add 指定了函数自我调用的返回字值。
// 自我调用函数只执行一次。设置计数器为 0。并返回函数表达式。
// add变量可以作为一个函数使用。非常棒的部分是它可以访问函数上一层作用域的计数器。
// 这个叫作 JavaScript 闭包。它使得函数拥有私有变量变成可能。
// 计数器受匿名函数的作用域保护，只能通过 add 方法修改。



```

# currying
``` javascript
const multiply = (a,b) => a * b;
const curriedmultiply = (a) => (b) => a*b; 
// above is almost the same as below
// const curreidmultiply = function (a) {
//   var a = a;
//   return function fun2(b) {
//     return a * b;
//   }
// }

//compose 
const compose = (f,g) => (a) => f(g(a));

const sum = (num) => num + 1;

compose (sum, sum)(5);
// 7


```
You need to understand this to understand the code of some other projects. 

# The idea of avoiding side effects.
Being a developer and knowing that we need to avoid the side effects. 
and keeo the deterministic property. No matter what you put into the funciton it always return the same thing.
> What are the two elements of a pure function?
1. Deterministic-- > always produces the same results given the same inputs
2. No Side Effects-- > It does not depend on any state, or data, change during a program’s execution.It must only depend on its input elements.

# Advanced Arrays
``` javascript
const array = [1, 2, 10, 16];

const double = []
const newArray = array.forEach((num) => {
    double.push(num * 2);
})
console.log(newArray);

```
> map
``` javascript
const array = [1,2,10,16];
const mapArray = array.map((num) => {
    return num * 2;
});
console.log("map", mapArray);
// here the map funciton iterate the array and use the function upon each element of the array and return the new array.
// simple way to write 
cosnt mapArray = array.map(num => num * 2;);

```
> as a result, you want to use the "map" against "foreach" here. Cuz foreach will only iterate the element but do not return anything.

> **filter**   
> **definition:** here the filter function filters the array list. if the function valued returned is true then it will return the array value.   if the function value returned false then it will not be returned. 

``` javascript
const filterArray = array.filter(num => {
    return num > 5;
})

// short form 
const filterArray = array.filter(num => num >5);
console.log("filter", filterArray);
// here we use the  

```

> reduce  
> **definition:**

``` javascript
const array = [1,2,10,16];
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);
console.log("reduce", reduceArray);
// accumulator is sth that can restore the data in the function. 

```

> The function above showed as "map", "filter", "reduce" is some pure functions. 

# some other methods
Remove 0 (zero) elements before index 2, and insert "drum" and "guitar"
``` javascript
let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum', 'guitar')

// myFish is ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"] 
// removed is [], no elements removed

```

# advanced objects
``` javascript
// reference type
var num1 = 1;
var num2 = 2;
num1 === num2 // true

var object1 = {value: 10}; // created a object
var object2 = object1;  // references the object1
var object2 = {value: 10}; // created a new object

object2 === object1; // true
object3 === object1; //flase

[] === []; // false

// context vs scope
// context is always confused with scope. We create a scope when we create a curly bracket.
function() {
    let a = a;
}

// context is where you are in right now.
// when you type this in the browser 
console.log(this);
// window object will be logged.   
const a = () => {
    console.log(this);
}
a();
// still returns window object.
// cuz the context means  what obeject we are in. 
const object4 = {
    a: function(){
        console.log(this);
    }
}

// instantiation: 

//how we do instantiation in the first place. 
class Player {
    // this is just the syntax to remember. Every time when you create a function, the first thing that will run is the constructor function. 
    constructor(name, type){
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce() {
        console.log(`Hi I am ${this.name}. I am a ${this.type}`);
    }
}
// every time we create a object we gonna have the properties and the ability to introduce themselves.

// extends

class Wizard extends Player {
    // every time we extend sth we need to also call the constructor funcion of the Player. 
    constructor(name, type) {
        super(name, type);// this stands for the constructor of Player.
        console.log("wizard", this);
    }
    play() {
        console.log(`WEEEEE I'm a ${this.name}.`)
    }
}

const wizard1 = new Wizard("Shelly", 'Healer');
const wizard2 = new Wizard('Shawn', "Dark Magic");


```
