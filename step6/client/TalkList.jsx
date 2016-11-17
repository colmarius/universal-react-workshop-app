import React from 'react'
import Talk from './Talk.jsx'
import axios from 'axios'

const TalkList = React.createClass({

  getInitialState: function () {
    // We have to change the setup to support SSR.
    // getInitialState is called on both server and client.
    // If we have the same state, the component is not rendered.
    // It's awfutl to use initialStte...but it works
    if (typeof __PRELOADED_STATE__ !== 'undefined') {
      // Client side
      return {
        talks:__PRELOADED_STATE__ // initial state
      }
    } else {
      // Server side
      return {
        talks: this.props.initialState ? this.props.initialState.talks : []
      }
    }
  },

  // Not needed anymore...maitainied onlt for comparing
  componentDidMount: function () {
    if (typeof __PRELOADED_STATE__ === 'undefined') {
      axios.get('/api/talks')
        .then(res => {
          this.setState({talks: res.data})
      })
    }
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
    return (<div>{talks}</div>)
  }
})

export default TalkList
