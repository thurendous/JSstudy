# Intro
Jquery is a mess. It is imperative. Cause a lot of inconsistencies.  
Anywhere use a view it can be used.  

# the thinking behind React
- resusability of the components  
People build legos and you can reuse them to build the app. That's the idea of the React.  
You write some code to build something and they can be very useful and can be reused agian by yourself or even by the world.  
- data flow
- virtual DOM  
It is a javascript object which describe the current state of the website. We give that object to React and the React bot will automatically changes the object in order to make the most optimum way possible.  

# create-react-app
`npm install -g create-react-app  `
`create-react-app robofriends`  
It generate a .gitignore -> which is a file that called dot file. it is used to ignore the files that sit in the folder when you update your github.  


# React component
We have webpack so we can import stuffs.  

``` javascript
import React from 'react';// we can import cuz we have webpack  This is the robot(view library) which help us painting.
import ReactDOM from 'react-dom';   // dom website we can also use ReactNative to be adapted to mobile phones. s
import './index.css'; // react allow us to add css not just in one file, but also different components. 
import App from './App'; // './App.js' work as well.
import * as serviceWorker from './serviceWorker'; // allow us to become offline running.
```

Hello.js file you need to use the "className" instead of "class" in the fake html syntax area. 

# how to transfer data in react
``` javascript
import React, { Component } from 'react';
// by this we can use Component directly instead of "React.component".
import './Hello.css';
import 'tachyons';

const Hello = (props) => {
    return (
        <div className="f2 measure tc">
            <h1> Hello World lorem ipsum lorem ipsum</h1>
            <p>{props.greetings}</p>
        </div>
    )
}

export default Hello;
// we use "export default " when we are just exporting one thing.

```

``` javascript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './Hello';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
  <Hello greetings={"你好呀！" + "小哥哥！"} />,
  document.getElementById('root')
);
```

> note: when we use `export` instead of `export default`, the file can have multiple exports.
> when you are importing it you need to do it this way: `import {robots, cats} from './robots';`

# Fragment (<> </>) 

We can import Fragment to avoid having to fully write out React.Fragment.

import React, {Fragment} from "react";
``` javascript
function FAQ() {
    return (
        <Fragment>
            <p>Q. What is React?</p>
            <p>A. A JavaScript library for building user interfaces</p>
            <p>Q. How do I render sibling elements?</p>
            <p>A. Use Fragments</p>
        </Fragment>
    );
}
```
However, an even better method is to use the shorthand syntax for Fragments, which looks like empty tags: <> and </>.
``` javascript
function FAQ() {
    return (
        <>
            <p>Q. What is React?</p>
            <p>A. A JavaScript library for building user interfaces</p>
            <p>Q. How do I render sibling elements?</p>
            <p>A. Use Fragments</p>
        </>
    );
}
```
# smart component
App has a state attribute so we call it a smart component. 

# Mounting, updating, Unmounting
Mount: replacing the `<div>` in the html file.  
- This is called "life cycle methods".  
- Mounting: constructor() com@pnentWillMount() render() componentDidMount()按照这个顺序来跑。
- Updating: componentWillReceiveProps() shouldComponentUpdate() componentWillUpdate() render() componentDidUpdate()
- 


# react
- `npm run build` can give you a build folder which contains the real production environment files.  
- `npm update`(update the packages) and `npm audit`(check the update details), 
- `npm audit fix --force`(force all the fix to the files)
- ``
 



