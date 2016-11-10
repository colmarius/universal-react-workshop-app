import React from 'react' // JSX is transformed into React.createElement() calls, thus React is required in scope.
import ReactDOM from 'react-dom'
import Example from './example'

ReactDOM.render(
  <Example />,
  document.getElementById('content')
);