# Step 8

## Description
Add Test

## How-to
- `npm install jest babel-jest react-test-renderer axios-mock-adapter --save-dev`
- Change test scripts:

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

- We need .babelrc:

``` javascript
{
  "presets": ["es2015", "react"]
}
```
- Add test to `__test__`. Jest expects to find our tests in a __tests__ folder

- Here the test:
``` javascript
// TODO
```
- Update snapshot: `npm test -- u`

- Expanding the test with a click:
``` javascript
// TODO
```

Note:
- https://www.sitepoint.com/test-react-components-jest/

## Enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output. Can be used with Jest
https://github.com/airbnb/enzyme

## Selector API
They are working on it....
https://github.com/facebook/jest/issues/1411
