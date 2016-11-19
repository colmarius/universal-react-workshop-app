# Babel Quick Demo

Babel Demo. How to enable babel in a project and avoid to specify in `script`

## Usage
- `npm i react react-dom --save`

``` javascript
import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'

const App = React.createClass({
    render: function() {
        return (
          <div>
            Hello Workshop!
          </div>
        )
    },
})

const comp = role.log(comp)

```

- `node index.jsx` -> will fail
- Install babel: `npm install --save-dev babel-cli babel-preset-react  babel-preset-es2015`
- Presets: `2015` -> import support. `react` ->jsx
- Add
``` json
{
    "presets": ["es2015", "react"]
}
```
- `npm install -g babel-cli`
- Test the transpile: - `babel index.jsx -d dest`
- `node ./dest/test.js`
