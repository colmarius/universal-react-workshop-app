import React from 'react'
import Talk from './Talk.jsx'
import axios from 'axios'
import {loadData} from './actions'

const TalkList = React.createClass({

  render: function () { // We should not access state directly anymore!

    const talks = this.props.talks.map(talk => {
      return (
        <Talk
          key={'talk-' + talk.id} // used by React
          id={talk.id}
          name={talk.name}
          author={talk.author}
          short={talk.short}
          votes={talk.votes}
          onVote={this.props.handleVote} // changed, we get the function from props
        ></Talk>
      )
    })
    return (<div>{talks}</div>)
  }
})

export default TalkList
