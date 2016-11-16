import React from 'react'
import {Router, Route, hashHistory} from 'react-router'
import TalkList from 'TalkList'
import TalkDetail from 'TalkDetail'

const App = React.createClass({
  render() {
    return (
      <Router history={hashHistory}>
        <Route path='/' component={TalkList} />
        <Route path='/detail/:id' component={TalkDetail} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
})

const NotFound = () => (
  <h1>404.. This page is not found!</h1>)

export default App
