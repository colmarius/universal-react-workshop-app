# step3

Theory: http://kevhuang.com/using-react-with-webpack-hot-module-replacement-middleware/
Interesting: https://github.com/gaearon/react-hot-boilerplate

Mostly from:
- https://onsen.io/blog/react-webpack-hot-loader-onsenui/
- http://survivejs.com/webpack/advanced-techniques/configuring-react/
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

##
Webpack needs to copy this file over to our dist folder for us to use it which means we’ll need to modify our entry property in our webpack config and add an additional loader.

## Install webpack-dev-server
npm install webpack-dev-server --global
npm install webpack-dev-server --save-dev

## Hot module replacement:

http://gaearon.github.io/react-hot-loader/getstarted/
In Console you will see:
[WDS] Hot Module Replacement enabled.

To run it:
`webpack-dev-server --progress

## OLD
The babel-preset-es2015 and babel-preset-react are plugins being used by the babel-loader to translate ES6 and JSX syntax respectively.
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react babel-preset-stage-0 react-hot-loader@3.0.0-beta.1

Babel can’t support all of ES6 with compilation alone — it also requires some runtime support. In particular, the new ES6 built-ins like Set, Map and Promise must be polyfilled, and Babel’s generator implementation also uses a number of runtime helpers. Given your app doesn’t have to share a JavaScript environment with other apps, you’ll be ok to use babel-polyfill to handle this:

npm install babel-polyfill --save
