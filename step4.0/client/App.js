import React from 'react'
import TalkList from './TalkList'

const App = React.createClass({
  render: function() {
    return (
      <div className='jumbotron'>
        <h1 className="text-center">
          Conference Talks
        </h1>
        <TalkList />
      </div>
    )
  },
})

export default App
