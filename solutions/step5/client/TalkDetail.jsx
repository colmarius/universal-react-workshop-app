import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'
import axios from 'axios'

const TalkDetail = React.createClass({
  getInitialState: function () {
    return {}
  },

  componentDidMount() {
    axios.get(`/api/talk/${this.props.params.id}`)
      .then(res => {
        this.setState(res.data)
      })
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
