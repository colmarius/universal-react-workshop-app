# Step 8

## Description
Add a simple test using jest (https://facebook.github.io/jest/)

## How-to
- `npm install jest babel-jest react-test-renderer axios-mock-adapter --save-dev`
- Change npm scripts:

``` javascript
"scripts": {
  // (...)
  "test": "jest",
  "test:watch": "jest --watch"
}
```
- `npm test`

```
⇒ npm test

> universal-react-workshop-app@1.0.0 test /home/marco/workspaces/workspace-corso/universal-react-workshop-app/step8
> jest

No tests found
  13 files checked.
  testPathDirs: /home/marco/workspaces/workspace-corso/universal-react-workshop-app/step8 - 13 matches
  testPathIgnorePatterns: /node_modules/ - 13 matches
  testRegex: (/__tests__/.*|\.(test|spec))\.jsx?$ - 0 matches
```

- We need `.babelrc`:

``` javascript
{
  "presets": ["es2015", "react"]
}
```
- Add test to `__tests__`. Jest expects to find our tests in a `__tests__` folder

- Here the test:

``` javascript
import React from 'react'
import TalkList from '../client/TalkList'
import {Provider} from 'react-redux'
import reducers from '../client/reducers'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
import talks from '../server/data'

test('TalkList test', () => {

  // Render component
  const store = createStore(reducers, talks)
  const component = renderer.create(
    <Provider store={store}>
       <TalkList/>
    </Provider>)
  let talkList = component.toJSON()
  expect(component).toMatchSnapshot() // Snapshot

  expect(talkList.children.length).toBe(3)
  // ...add further asserts

})

```
- Update snapshot: `npm test -- u`
