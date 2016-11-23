import React from 'react'
import { Button } from 'react-bootstrap'

const Talk = React.createClass({
  onVoteClick: function () {
    this.props.onVote(this.props.id)
  },

  render: function () {
    const { name, short, author, votes } = this.props
    return (
      <div className="list-group-item">
        <h3 className="list-group-item-heading">
          { name }
        </h3>
        <p className="list-group-item-text">
          { short }
        </p>
        <h4 className="list-group-item-text">
          { author }
        </h4>
        <h4 className="list-group-item-text">
          Number of votes: &nbsp;
          <span className="badge">
            { votes }
          </span>&nbsp;
          <Button onClick={ this.onVoteClick }>
            Vote
          </Button>
        </h4>
      </div>
  )}
})

export default Talk
