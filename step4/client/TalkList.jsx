import React from 'react'
import Talk from 'Talk'
import data from 'data.json' // data model

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
