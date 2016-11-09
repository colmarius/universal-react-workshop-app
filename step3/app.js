import React from 'react'
import {render} from 'react-dom'

const Example = React.createClass({
    render: function() {
        return (
          <div className = 'hello' >
            Hello Codemotion!
          </div>
        )
    }
})

render(
  <Example />,
  document.getElementById('content')
)
