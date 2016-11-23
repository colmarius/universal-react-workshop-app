import React from 'react'
import {Router, Route, browserHistory} from 'react-router'
import TalkList from './TalkList.jsx'
import TalkDetail from './TalkDetail.jsx'

const App = React.createClass({
  render() {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={TalkList} />
        <Route path='/detail/:id' component={TalkDetail} />
        <Route path='*' component={NotFound} />
      </Router>
    )
  }
})

const NotFound = () => (<h1>404.. This page is not found!</h1>)
export default App
