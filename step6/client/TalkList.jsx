import React from 'react'
import Talk from './Talk.jsx'
import axios from 'axios'

const TalkList = React.createClass({

  getInitialState: function () {
    console.log("GET_INITIAL_STATE")
    // We mus setup the state we used to render on server
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

  // Not needed anymore...it's only for comparing
  componentDidMount: function () {
    console.log("COMPONENT_DID_MOUNT")

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
    console.log("RENDERING")
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
