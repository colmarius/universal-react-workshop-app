import React from 'react'
import { Button } from 'react-bootstrap';

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
