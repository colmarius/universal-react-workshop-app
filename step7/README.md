# Step 7

## Description
Add Redux

https://github.com/reactjs/redux/blob/master/docs/recipes/ServerRendering.md
https://github.com/reactjs/redux/tree/master/examples/universal

## How-to
- Add redux: `npm i redux react-redux redux-thunk --save`
- Modified index to set the store with Provider and create a store:
- Add a actions and reducers:
``` javascript
// (TODO)
```
- Change `index,js` to create the store, in two different cases (client / server rendered):
``` javascript
// (TODO)
```
- Refactor TalkList, removing state / wrapping with redux
``` javascript
// (TODO)
```

## TODO:
- Add redux in "client-side"
- Enable it "server side", see: https://www.codementor.io/reactjs/tutorial/redux-server-rendering-react-router-universal-web-app

## Notes

Technically, a container component is just a React component that uses store.subscribe()
to read a part of the Redux state tree and supply props to a presentational
component it renders.

## createStore
createStore(reducer, [preloadedState]
[preloadedState] (any): The initial state. You may optionally specify it to hydrate
the state from the server in universal apps, or to restore
a previously serialized user session.

## reducers
Il reducer viene eseguito al prima volta con un action con actiont type: "@@redux/INIT"

## ActionCreator
https://github.com/reactjs/redux/blob/master/docs/api/bindActionCreators.md

## connect
Connect genera un componente React facendo le subscribe del sotre (e.g. componentDidMount)
Il componente deve solo ragionare a "prop" and state

## dispatch
Any component wrapped with connect() call will receive a dispatch function as a prop,
and any state it needs from the global state.

## Ajax calls:

We use https://github.com/gaearon/redux-thunk middleware
By using this specific middleware, an action creator can return a function instead of an action object.
in this function we can dispatch further actions usint `dispatch`

With `redux-think` we can "create actions" that are functions, and not olny objects
```
export function fetchBook(id) {
 return dispatch => {
   dispatch(setLoadingBookState()); // Show a loading spinner
   fetch(`/book/${id}`, (response) => {
     dispatch(doneFetchingBook()); // Hide loading spinner
     if(response.status == 200){
       dispatch(setBook(response.json)); // Use a normal function to set the received state
     }else {
       dispatch(someError)
     }
   })
 }
}

function setBook(data) {
 return { type: 'SET_BOOK', data: data };
}
```

Per usarlo:
```
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

// Note: this API requires redux@>=3.1.0
const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);
```

## All (with connect) in the same file

http://ewanvalentine.io/a-brief-introduction-to-redux/
