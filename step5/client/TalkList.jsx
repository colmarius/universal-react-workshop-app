import React from 'react'
import Talk from './Talk.jsx'
import axios from 'axios'

const TalkList = React.createClass({

  getInitialState: function () {
    console.log("GET INITIAL STATE")

    return {
      talks: [] // initial state
    }
  },

  componentDidMount: function () {
    console.log("COMPONENT DID MOUNT")
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
    console.log("RENDERING...")

    // to check where rendering happens
    let inBrowser = false
    if (typeof window !== undefined) {
      inBrowser = true
    }
    console.log('In Browser:', inBrowser)

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
