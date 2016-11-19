# Step 4.1

## Description
Add State and interaction
In this step we load the data from a json bundled in webpack

## How-to
- Add JSON data model: `client/data.json` (already in the step)
- Now, let's add webpack JSON Loader (to load the data):
-`npm install json-loader --save-dev`
- Add webpack loader:   `{ test: /\.json$/, loader: 'json' },`
- Change `TalkList.jsx`:

``` javascript
import React from 'react'
import Talk from './Talk.jsx'
import data from './data.json' // data model

const TalkList = React.createClass({
  getInitialState: function () {
    return {
      talks: [] // initial state
    }
  },

  componentDidMount: function () {
    this.setState({ talks: data })
  },

  handleVote: function (talkId) {
    // We "clone" the array. We have to treat this.state as if it were immutable.
    const updatedTalks = this.state.talks.slice()
    const votedTalk = updatedTalks.find(el => el.id === talkId)
    votedTalk.votes++
    this.setState({ talks: updatedTalks })
  },

  render: function () {

    const talks = this.state.talks.map(talk => {
      return (
        <Talk
          id={talk.id}
          key={'talk-' + talk.id} // used by React
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
```

- Change `Talk.jsx`:

``` javascript
import React from 'react'
import {Button} from 'react-bootstrap'

const Talk = React.createClass({
  vote: function () {
    this.props.onVote(this.props.id) // we pass back the talk ID
  },
  render: function () {
    return (
      <div className="list-group-item">
          <h3 className="list-group-item-heading">{this.props.name}</h3>
          <p className="list-group-item-text">{this.props.short}</p>
          <h4 className="list-group-item-text">by {this.props.author}</h4>
          <h4 className="list-group-item-text">Number of votes: &nbsp;<span className="badge">{this.props.votes}</span>
            &nbsp;<Button  onClick={this.vote}>Vote</Button></h4>
      </div>
  )}
})
export default Talk
```
