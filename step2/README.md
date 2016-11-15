# Step 2

## Description
First React Component.
We create an `app.js` entry point and a `App.jsx` which simply
displays `Hello Workshop!`

## How-to
- `npm install react react-dom --save`
- Create `app.js`:

``` javascript
ReactDOM.render(
  <App />,
  document.getElementById('content')
)
```

- Create `App.jsx`:

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

- Add to HTML ('head'):

``` javascript

<!-- Libs -->
<script src="lib/babel/browser.js"></script>
<script src="lib/react/react.js"></script>
<script src="lib/react/react-dom.js"></script>

```

- Add to HTML (`body`):

``` javascript

<!-- My JS and JSX. Not using a bundle manager,
     we have to a add all to global -->
<script type="text/babel" src="./App.jsx"></script>
<script type="text/babel" src="./app.js"></script>

```
