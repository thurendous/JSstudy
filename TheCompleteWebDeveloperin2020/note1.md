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


