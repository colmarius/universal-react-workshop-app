# Step 3

## Description
Add State and voting
In this step we load the data from a json bundled in webpack

## How-to
- Add JSON data model: `client/data.json`


- Now, let's add webpack JSON Loader (to load the data):
  -`npm install json-loader --save-dev`
  - Add webpack loader:   `{ test: /\.json$/, loader: 'json' },`
  - Add import to TalkList.jsx: `import data from 'data.json'`

- Change Talk.jsx:
``` javascript
//TODO
```
- Change TalkList.jsx:
``` javascript
// TODO
```

- Add vote callback to `Talk.jsx`:
``` javascript
// TODO
```

- Add handleVote callback to `Talklist.jsx` that prints on console.oog:
``` javascript
// TODO
```

- Verify on console.log: TODO

- Change `Talklist.jsx` to change the state
``` javascript
// TODO
```

## Usage

## Notes
