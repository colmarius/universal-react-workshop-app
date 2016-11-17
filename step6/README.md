# Step 6

## Description
Add List SSR.

## How-to
- Add babel hook: npm i babel-register --save
- Create a `server/start.js` that register the hook:
``` javascript
require('babel-register')({
    presets: ['es2015', 'react'] // ...or use .babelrc
})
module.exports = require('.')
```
- Change the server start script to use the above in `package.json`:
``` json
    "server:dev": "node ./server/start"
```


## NOTE:
After set babel, you can try:
```
server.route({
  method: 'GET',
  path:'/api/talk-list',  //reouse same api route
  handler: (request, reply) => {
    console.log("************************")
    reply(renderToString(<App/>))
  }
})
```
...and change App.jsx to the one of step3. Reload, and see that it's rendering
ONLY that div. So templating is needed



Qui usa `hapi-react-view`: https://medium.com/@tribou/serving-react-and-flux-with-hapi-and-webpack-213afacf94ea#.1xxyhnko4
