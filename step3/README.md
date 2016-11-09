# step3

Mostly from:
- https://www.codementor.io/tamizhvendan/tutorials/beginner-guide-setup-reactjs-environment-npm-babel-6-webpack-du107r9zr
- https://blog.david-reid.com/2016/02/04/starting-with-react-webpack/
- https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement
- http://jamesknelson.com/using-es6-in-the-browser-with-babel-6-and-webpack/

## From previous:
npm install react --save
npm install react-dom --save


## Install Webpack:
npm install webpack --g
npm install webpack --save-dev

## install
The babel-preset-es2015 and babel-preset-react are plugins being used by the babel-loader to translate ES6 and JSX syntax respectively.
npm install --save-dev babel
npm install --save-dev babel-core
npm install --save-dev babel-loader
npm install --save-dev babel-preset-react
npm install --save-dev babel-preset-es2015

Html loader
npm i html-loader --save-dev


## create a `.babel.rc`:
```
{
  "presets" : ["es2015", "react"]
}
```

##
Webpack needs to copy this file over to our dist folder for us to use it which means we’ll need to modify our entry property in our webpack config and add an additional loader.

## Install webpack-dev-server
npm install webpack-dev-server --global
npm install webpack-dev-server --save-dev

## Hot module replacement:
npm install react-hot-loader --save-dev

To run it:

`webpack-dev-server --hot --inline`
