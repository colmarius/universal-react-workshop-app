# Step 8

## Description
Add Test

## How-to
- `npm install jest babel-jest react-test-renderer --save-dev`
- Change test scripts:

``` javascript
"scripts": {
  // (...)
  "test": "jest"
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

- TODO: complete!
Note:
- https://www.sitepoint.com/test-react-components-jest/
