import React from 'react'
import Talk from 'Talk'
import axios from 'axios'

const TalkList = React.createClass({

  getInitialState: function () {
    return {
      talks: [] // initial state
    }
  },

  componentDidMount: function () {
    axios.get('/api/talks')
      .then(res => {
        this.setState({talks: res.data})
      })
  },

  handleVote: function (talkId) {
    axios.post('/api/talk/vote', {id: talkId})
      .then( () => axios.get('/api/talks'))
      .then(res => {
        this.setState({talks: res.data})
      })
  },

  render: function () {

    const talks = this.state.talks.map(talk => {
      return (
        <Talk
          key={'talk-' + talk.id} // used by React
          id={talk.id}
          name={talk.name}
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
