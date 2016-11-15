# Step 3

## Description
Here we add a list of talks.
To do that we need to:
- Define TalkList, Talk, TalkDetail
- Add a proper CSS based on Bootstrap.
- Add state

In this step we load the data from a json bundled in webpack

## How-to
- Removed `App.jsx`
- Created static `Talk.js`:
``` javascript
// TODO
```
- Created static `TalkList.js`:
``` javascript
// TODO
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
- Add JSON data model: `data.json`

- Adapt JSX to bootstrap (note that we ahve to use `className`) [TODO]
- Now, let's add webpack JSON Loader (to load the data):
  -`npm install json-loader --save-dev`
  - Add webpack loader:   `{ test: /\.json$/, loader: 'json' },`
  - Add import to TalkList.jsx: `import data from 'data.json'`

## Usage
TODO

## Notes
- Adding boostrap: https://medium.com/@victorleungtw/how-to-use-webpack-with-react-and-bootstrap-b94d33765970#.f1a3txjxu
