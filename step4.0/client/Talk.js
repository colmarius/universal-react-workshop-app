import React from 'react'
import { Button } from 'react-bootstrap'

const Talk = React.createClass({
  render: function () {
    return (
      <div className='list-group-item'>
        <h3 className='list-group-item-heading'>
          Perfect React!
        </h3>
        <p className='list-group-item-text'>
          learn perfect react
        </p>
        <h4 className='list-group-item-text'>
          by Marco Piraccini
        </h4>
        <h4 className='list-group-item-text'>
          Number of votes: &nbsp;
          <span className='badge'>
            14
          </span>
          <Button>Vote</Button>
        </h4>
      </div>
    )
  }
})

export default Talk
