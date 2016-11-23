import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router'
import data from './data.json'

const TalkDetail = React.createClass({
  getInitialState: function () {
    return {}
  },

  componentDidMount: function () {
    const talkId = Number(this.props.params.id)
    const talk = data.find(talk => talk.id === talkId)
    this.setState(talk)
  },

  render: function () {
    const { name, short, author, description, votes } = this.state
    return (
      <div>
        <h2>{ name }</h2>
        <h3>{ short }</h3>
        <h4>{ author }</h4>
        <h5>{ description }</h5>
        <h5>
          Number of votes: &nbsp;
          <span className='badge'>
            { votes }
          </span>
        </h5>
        <div>
          <Link to='/'>Home</Link>&nbsp;
        </div>
      </div>
    )
  }
})

export default TalkDetail
