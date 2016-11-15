import React from 'react'
import Talk from 'Talk'
import data from 'data.json' // data model

const TalkList = React.createClass({
  handleVote: function (talkId) {
    console.log('Voting', talkId)
  },

  getInitialState: function () {
    return {
      talks: [] // initial state
    }
  },

  componentDidMount: function () {
    this.setState({ talks: data })
  },

  handleVote: function (talkId) {
    const votedTalk = data.find(el => el.id === talkId)
    votedTalk.votes++
    this.setState({ talks: data })
  },
  render: function () {

    const talks = data.map(talk => {
      return (
        <Talk
          id={talk.id}
          title={talk.name}
          author={talk.author}
          short={talk.short}
          votes={talk.votes}
          onVote={this.handleVote}
        ></Talk>
      )
    })
    return (
      <div className='talks'>
        {talks}
      </div>
    )
  }
})

export default TalkList
