# Step 3

## Description
Here we add a list of talks with a talk detail.
To do that we need to:
- Define TalkList, Talk, TalkDetail
- Add a proper CSS
- Add state

In this step we lod th data from a json exposed directly as static resource.

## How-to
- Removed `App.jsx`
- Created static `Talk.js`:
``` javascript
import React from 'react'
const Talk = React.createClass({
  render: function () {
    return (
      <div className='item'>
        <div className='talk'>
          <div className='description'>
            <p>Perfect React</p>
            <p>by Marco Piraccini </p>
            <p>learn perfect react</p>
          </div>
          <div>
            <span>Number of votes: 0</span>
          </div>
        </div>
    </div>
  )}
})
export default Talk
```
- Created static `TalkList.js`:
``` javascript
import React from 'react'
import Talk from 'Talk'
const TalkList = React.createClass({
  render: function () {
    return (
      <div className='talks'>
        <Talk />
      </div>
    )
  }
})
export default TalkList
```
- ~~Changed index.js to render `TalkList.js`~~ -> not necessary with webpack
- Try the App (we should see the "static" list)
- Add some styling with bootstrap:
  - react-bootstrap: `npm install react-bootstrap --save`. See: https://react-bootstrap.github.io
  - Add Bootstrap to webpack:
  - `npm i bootstrap --save`
  - Add further webpack loaders: `npm i css-loader style-loader file-loader url-loader --save-dev`
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

- Adapt JSX to bootstrap (note that we ahve to use `className`)


## Usage
TODO

## Notes
- Adding boostrap: https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.f1a3txjxu
