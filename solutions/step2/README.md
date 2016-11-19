# Step 2

## Description
First React Component.
- We create an `index.js` entry point and a `App.jsx` which simply displays `Hello Workshop!`.
- We put all the stuff in `client` folder

## How-to
- Here we use `./lib` (only for this step)
- Create `client/index.js`:
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
            Hello Workshop from REACT!
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
<script type="text/babel" src="./client/index.js"></script>

```

## Usage
- Setup: `npm i`
- Start: `npm start`

Open the browser on http://127.0.0.1:4000/
