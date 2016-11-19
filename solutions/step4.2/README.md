# Step 4.2

## Description
Add Routing to Talk details if we click on talk title.

## How-to
- Add react.router: `npm i react-router --save`
- Add `TalkDetail.jsx`:

```javascript
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
```
- Introduce `App.jsx` to be used as entry point (instead of direct `TalkList`). We add
the list as `/`, the `TalkDetail` and the `404` components.
This is only to setup routing. When doing SSR we skip this

``` javascript
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
```
- Change index.js accordingly to use `App.jsx`:

``` javascript
import {render} from "react-dom"
import React from "react"
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'
import App from "./App.jsx"

render(<App/>, document.getElementById("container"))
```
- Change `Talk.jsx` with the link of the detail (note the `Link` expression):

``` javascript
import React from 'react'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router'

const Talk = React.createClass({
  vote: function () {
    this.props.onVote(this.props.id) // we pass back the talk ID
  },

  detail: function () {
    console.log("detail of", this.props.id)
  },

  render: function () {
    return (
      <div className="list-group-item">
          <Link to={`/detail/${this.props.id}`}><h3 className="list-group-item-heading">{this.props.name}</h3></Link>
          <p className="list-group-item-text">{this.props.short}</p>
          <h4 className="list-group-item-text">by {this.props.author}</h4>
          <h4 className="list-group-item-text">Number of votes: &nbsp;<span className="badge">{this.props.votes}</span>
            &nbsp;<Button  onClick={this.vote}>Vote</Button></h4>
      </div>
  )}
})
export default Talk
```
