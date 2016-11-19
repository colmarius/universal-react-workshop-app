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

const comp = renderToStaticMarkup(<App/>)
console.log(comp)
