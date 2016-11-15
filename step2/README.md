# Step 2

## Description
First React Component
We create an `app.js` entry point and a `App.jsx` which simply
displays `Hello Workshop!`.
We put all the stuff in `client` folder

## How-to
- `npm install react react-dom --save`
- Create `client/app.js`:

``` javascript
ReactDOM.render(
  <App />,
  document.getElementById('content')
)
```

- Create `client/App.jsx`:

``` javascript
const App = React.createClass({
    render: function() {
        return (
          <div>
            Hello Workshop!
          </div>
        )
    },
})
window.App = App // Necessary when not using a bundler
```

- Add to HTML (in `<head>`):

``` javascript

<!-- Libs -->
<script src="lib/babel/browser.js"></script>
<script src="lib/react/react.js"></script>
<script src="lib/react/react-dom.js"></script>

```

- Add to HTML (in `<body>`):

``` javascript
<script type="text/babel" src="./client/App.jsx"></script>
<script type="text/babel" src="./client/app.js"></script>

```
