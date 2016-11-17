import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import data from './data.json'

const TalkDetail = React.createClass({
  getInitialState: function () {
    return {}
  },

  componentDidMount() {
    const id = Number(this.props.params.id)
    const talk = data.find(el => el.id === id)
    this.setState(talk)
  },

  render: function () {
    return (
      <div>
        <h2>{this.state.name}</h2>
        <h3>{this.state.short}</h3>
        <h4>by {this.state.author}</h4>
        <h5>{this.state.description}</h5>
        <h5>Number of votes: &nbsp;<span className="badge">{this.state.votes}</span></h5>
        <div>
          <Link to='/'>Home</Link>&nbsp;
        </div>
      </div>
  )}
})

export default TalkDetail
