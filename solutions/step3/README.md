# Step 3

## Description
We want to add `webpack` to our project with HMR features.
To do that, we have to:
- Add webpack config
- Adapt react components to use ES6 modules
- Sligtly change our `index.html`
- Adapt npm scripts

## How-to
- We can remove `lib` folder, not necessary anymore (webpack will take care of deps)
- Add React: `npm i react react-dom --save`
- We can remove `http-server` from `package.json`/`devDependencies`
- Install new dependencies:
  - `npm install -g webpack webpack-dev-server`
  - `npm install  webpack webpack-dev-server --save-dev`
  - `npm install babel-core babel-loader babel-preset-es2015 babel-preset-react --save-dev`
  - `npm install --save-dev babel-preset-react-hmre`

- Check the dependencies added to `package.json`
- Add npm scripts to `package.json` (note that now the `start` script is changed):
``` json
"scripts": {
    "start": "webpack-dev-server --progress --inline --hot --port 4000",
    "build": "npm run clean && npm run build:bundle",
    "clean": "rimraf build",
    "build:bundle": "webpack -p"
}
```

- Add `webpack.config.js`:

``` javascript
const path = require('path')

module.exports = {
  entry: "./client/index.js",
  output: {
    path: './build',       // target dir
    filename: "bundle.js",
    publicPath: "/static/" // path in URL
  },

  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }

}
```

- Change `client/index.js` to use ES6 modules:

``` javascript
import {render} from 'react-dom'
import React from 'react'
import App from './App.jsx'

const containerEl = document.getElementById("container")
render(<App/>, containerEl)
```

- Change `client/App.jsx`  to use ES6 modules:

``` javascript
import React from "react" // ES6 import

const App = React.createClass({
    render: function() {
        return (
          <div>
            Hello Workshop!
          </div>
        )
    },
})

export default App // important
```

- Change `index.html` to *import only the bundle*:
``` html
<html>
  <head>
    <title>React HMR example</title>
  </head>
  <body>
    <h1>Hello Workshop!</h1>
    <div id="container"></div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
```
## Usage
- Setup: `npm i`
- Start: `npm start`
- Open the browser on http://127.0.0.1:4000/
- Check in the browser console the log `[WDS] Hot Module Replacement enabled.`
- Change `App.jsx` and see the module reloaded automatically.

## Notes
- `npm start` executes `webpack-dev-server` which creates a webpack bundle
in memory.
- To create a bundle on file system (e.g. for production, use `npm run-script build:bundle`)
- Also, since we installed webpack also globally, we can launch direcly `webpack -p`.
