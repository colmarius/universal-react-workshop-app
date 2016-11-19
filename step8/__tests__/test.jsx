
import React from 'react'
import TalkList from '../client/TalkList'
import {Provider} from 'react-redux'
import reducers from '../client/reducers'
import renderer from 'react-test-renderer'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import talks from '../server/data'
// import axios from 'axios'
// import MockAdapter from 'axios-mock-adapter'

test('TalkList test', () => {

  // Render component
  const store = createStore(reducers, talks, applyMiddleware(thunk))
  const component = renderer.create(
    <Provider store={store}>
       <TalkList/>
    </Provider>)
  let talkList = component.toJSON()
  expect(component).toMatchSnapshot() // Snapshot

  expect(talkList.children.length).toBe(3) // Further asserts

  // // Setup axios mocks
  // var mock = new MockAdapter(axios)
  // mock.onGet('/api/talks').reply(200, talks)
  // mock.onPost('/api/talk/vote', {id: 1}).reply(function() {
  //   talks[0].votes++
  //   return [201]
  // })
  //
  // // Not selector API ready yet...
  // const firstTalk = talkList.children[0]
  // const h4 = firstTalk.children[3]
  // const button = h4.children[3]
  // button.props.onClick()
  //
  // talkList = component.toJSON()
  // expect(talkList).toMatchSnapshot()
})
