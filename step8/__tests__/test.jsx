
import React from 'react'
import TalkList from '../client/TalkList'
import {Provider} from 'react-redux'
import reducers from '../client/reducers'
import renderer from 'react-test-renderer'
import {createStore} from 'redux'
const talks = require('../server/data')

test('TalkList test', () => {
  const store = createStore(reducers, talks)
  const component = renderer.create(
    <Provider store={store}>
       <TalkList/>
    </Provider>)
  let talkList = component.toJSON();
  expect(component).toMatchSnapshot();

})
