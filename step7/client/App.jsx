import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import TalkList from './TalkList.jsx'
import TalkDetail from './TalkDetail.jsx'
import thunk from 'redux-thunk'
import {connect} from 'react-redux'
import {vote} from './actions'

const mapStateToProps = (state) => {
  return {
    talks: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleVote: (id) => {
      dispatch(vote(id))
    }
  }
}

// Connect Redux state to props and handlers
const TalkListRedux = connect(mapStateToProps, mapDispatchToProps)(TalkList)

const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={TalkListRedux} />
        <Route path='/detail/:id' component={TalkDetail} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
})

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default App
