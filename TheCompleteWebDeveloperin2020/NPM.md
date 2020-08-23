# NPM intro
> **NPM** = Node package manager  
> **yarm** is also a package manager which can grab packages from the NPM. 
Created for developers to share their code.   
Actually it is very rare that a APP is built from scratch.  
NPM is where you can search for packages or module.  
A package belongs to the Npm Registry and it contains package.json file(describe the package) and a js file usually.  
- the benefits: you can get the expertise of others.  
- the downsides: not all packages are good code.
- other:yarn is also a kind of NPM package manager.
> NPM was built for Node at the beginning but it became so popular that it was also used for the front end side. 


# How a typical project is look like
There are 3 must do things now in every projects.  
- HTML + CSS + Javascript
- Github Repo + Git
- Package.json

# Setting up NPM and package.json
- React is a package created by Facebook
- Node.js is something that allow you to run the JS code outside the browser. Node.js was created using the V8 engine which the chrome browser used. 

1. input `npm init` at the derectory folder.
2. then enter some info and it will generate a npm package for you.

## what is json?
It is a kind of pattern of information, a kind of file format.

# Installing and using Packages.
if the command include a "-g" then you can run it everywhere.  
if you don't install it with "-g" then you can only run it locally.  
`npm install lodash` install the "lodash" to the local directory.  
> lodash offer us more functions like "getELementById" in the javascript. It is an extension of javascript.   b

``` javascript
// how to import lodash
import { without } from lodash 

```

`npm install -g live-server` install the "live-server" into your computer globally.  

when you are in a npm package pj, you can just use `live-server` to run the live server. 


# some problems 
`npm init`  
this will generate a package.json file for you to manage your project.  

when you install the live-server globally some issues come out. then you do this  
`sudo npm_config_user=root npm install -g live-server`  
instead of  
`sudo npm install -g live-server`

when you wanna install a package into the local environment you use   
`npm install lodash`  
instead of `npm install -g lodash`

to list all the packages installed for npm.  
`npm list -g --depth=0`  

`live-server`  
while you are in the pj folder you can use this command to call the live-server service for you.  


# deploy
https://create-react-app.dev/docs/deployment/#github-pages

add this:  
``` json
"homepage": "https://myusername.github.io/my-app",
install the githubpage server 
```

``` Shell

npm install --save gh-pages
yarn add gh-pages

```
Add the following scripts in your package.json:
```
"scripts": {
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -d build",
"start": "react-scripts start",
"build": "react-scripts build",
```

If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your package.json scripts to push deployments to master:
```
"scripts": {
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build",
```

then deploy it  
`npm run deploy` 

Step 4: For a project page, ensure your project’s settings use gh-pages  
Finally, make sure GitHub Pages option in your GitHub project settings is set to use the gh-pages branch:
