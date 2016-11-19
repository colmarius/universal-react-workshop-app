# Step 4.0

## Description
Here we add a list of talks.
To do that we need to:
- Define static TalkList, Talk
- Add a proper CSS based on Bootstrap.

## How-to
- Removed `App.jsx`
- Created static `Talk.jsx`:

``` javascript
import React from 'react'
import {Button} from 'react-bootstrap';

const Talk = React.createClass({
  render: function () {
    return (
      <div className="list-group-item">
          <h3 className="list-group-item-heading">Perfect React!</h3>
          <p className="list-group-item-text">learn perfect react</p>
          <h4 className="list-group-item-text">by Marco Piraccini </h4>
          <h4 className="list-group-item-text">Number of votes: &nbsp;<span className="badge">14</span>&nbsp;<Button>Vote</Button></h4>
      </div>
  )}
})
export default Talk

```
- Created static `TalkList.jsx`:

``` javascript
import React from 'react'
import Talk from './Talk.jsx'

const TalkList = React.createClass({
  render: function () {
    return (
        <div className="list-group">
          <Talk/>
        </div>
    )
  }
})
export default TalkList

```
- Change index.js:

``` javascript
import {render} from "react-dom"
import React from "react"
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import TalkList from "./TalkList.jsx"

render(<TalkList/>, document.getElementById("container"))
```
- Add some styling with bootstrap: `npm install bootstrap react-bootstrap --save`
- Add further webpack loaders: `npm i css-loader style-loader file-loader url-loader --save-dev`
- Chuange `index.html` to use boostrap styles:
``` html
<html>
  <head>
    <title>Universal React Workshop</title>
  </head>
  <body>
    <div class="jumbotron">
      <h1 class="text-center">Conference Talks</h1>
      <div class="container" id="container"></div>
    </div>
    <script src="/static/bundle.js"></script>
  </body>
</html>
```

- Change webpack config. note that we have to add the loaders also for "indirect"
resources to be loaded.
``` javascript
  {
      test: /\.css$/,
      loader: "style-loader!css-loader"
  },{
      test: /\.png$/,
      loader: "url-loader?limit=100000"
  },{
      test: /\.jpg$/,
      loader: "file-loader"
  },{
      test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff'
  },{
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream'
  },{
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file'
  },{
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml'
  }
```

## Usage
- `npm start`
