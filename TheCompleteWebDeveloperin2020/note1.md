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







