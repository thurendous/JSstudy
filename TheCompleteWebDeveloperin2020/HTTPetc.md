# HTTP
HTTP is a common language between server and browser.  
We build our front-end side programme and they do not talk to any server unitil now.  
actually they talk to some server.  

- request: means the requests sent by the browser. 
- response: reponses sent by the server.

The **WORDS** you usually use: 
- GET:get something from the server
- POST:send some data to server
- PUT:gonna send you some data to update
- DELETE:delete some data on the back-end.
By using the words and the languages you can build the app of your dream.  

## GET


## response  
from server to client
1. status code
- 200: successful. OK
- 404: client error. not found
- 500: server error.
- 3xx: Redirection


2. data
- data

## network of the goole chrome
the network tab is very useful. 
- when you click the button with "get", the url will send the info to the server. ("https://www.xxx.com/register.html?firstname=xxx&lastname=xxx&password=xxx&birthday=xxx&cars=xxx")
- -> this is called query string parameters. 

# HTTPS
- https is the way to avoid some hacker who tries to seek your password etc private information.  
- SSL and TLS socket layer to make sure the scurity of the data transfer.


# JSON
We need a way to communicate with the server and the server can use any kind of programming languages.  
In that case, we invented a way to communicate with each other although we use different languages. That thing is called JSON.  

- JSON is a syntax for storing and exchanging data.  
- JSON is text, written with Javascript object notation.  
- XML is also a way to exchange data. 
- JSON is an easier way to do it.
- XML is a little bit outdated, so we do not talk about it.
- javascript has its own JSON fucntions.  
- JSON.parse() -> `var obj = JSON.parse('{"name":"John","age":"30", "city":"New York"}')`
- JSON.stringify() -> `var myJSON = JSON.stringify(obj);`

# AJAX
this is a technology which 
- The new Old Way: `$.getJSON("/my/url", function(data){});`
- The New WAY: Fetch
  - `fetch("my/url/").then(response => {console.log(response);});`
- review what happens about ajax. -> an event occurs
- prommise: I made this request on the internet and I promise to let you know when the promise return. And that is when you should use the dot then to do the work. 

- AJAX is a combination of tools using http, fetch API, JSON to communicate with servers.  

# Promise
A promise is an object that may produce a single value some time in the future.  

we start from the callbacks. 
``` javascript
movePlayer(100, "left", function(){
    movePlayer(400,"left", function(){
        movePlayer(10,"Right", function(){
            movePlayer(330, "left", function(){

            });
        });
    });
});
```
This is called a pyramid of doom. With this kind of callbacks you create a not-easy-to-read code. And this is a bad practice. 

With promise you get this. It is the same.  
``` javascript
movePlayer(100, "Left")
    .then(() => movePlayer(400, "Left"))
    .then(() => movePlayer(10,"Right"))
    .then(()=> movePlayer(330,"Left"))
```
``` javascript
const promise = new Promise((resolve, rejects) => {
    if(true){resolve("Stuff Worked");
    }else{
    reject("Error, it broke.");}
})
```
catch can cactch any error between the chain.

``` javascript
promise
    .then(result => {
        throw Error
        result + "!";
    })
    .then(result2 => {
        throw Error
        console.log(result2);
    })
    .catch(() => console.log("error!"))
```
catch statement only catch the error before the catach word. Promise is sth that you can use to utilize the asynchronous programming.

the fetch simply returns the promise.  
using .then we are answering to whatever the promise returns with.  (resolve or rejects)


A promise is an object that may produce a single value some time in the future. Either a resolved value, or a reason that it's not resolved(rejected).


