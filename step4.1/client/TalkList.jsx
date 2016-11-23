import React from 'react'
import Talk from './Talk.jsx'
import DATA from './data.json'

const TalkList = React.createClass({
  getInitialState: function () {
    return {
      talks: [],
    }
  },

  componentDidMount: function () {
    this.setState({ talks: DATA })
  },

  handleVote: function (talkId) {
    const updatedTalks = this.state.talks.slice()
    const votedTalk = updatedTalks.find(talk => talk.id === talkId)
    votedTalk.votes++
    this.setState({ talks: updatedTalks })
  },

  render: function () {
    const unsortedTalks = this.state.talks.slice()
    const sortedTalks = unsortedTalks.sort((a, b) => b.votes - a.votes)
    const talks = sortedTalks.map(talk => {
      const { id, name, author, short, votes } = talk
      return (
        <Talk
          id={ id }
          key={ `talk-${ id }` }
          name={ name }
          author={ author }
          short={ short }
          votes={ votes }
          onVote={ this.handleVote }
        ></Talk>
      )
    })
    return (
      <div className="list-group">
        { talks }
      </div>
    )
  }
})

export default TalkList
