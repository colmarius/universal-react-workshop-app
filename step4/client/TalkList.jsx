import React from 'react'
import Talk from 'Talk'

const TalkList = React.createClass({
  render: function () {
    return (
        <div className="list-group">
          <Talk/>
        </div>
    )
  }
})

export default TalkList
