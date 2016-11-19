// It's a pure function. If we don't use
// `combineReducers` we don't even need redux stuff
// When a reducer doesn't recognize an action,
// it's supposed/idiomatic to return the state given to it
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'TALKS_UPDATED':
      return action.talks // In this case we repalce the whole state
    default:
      return state
  }
}
export default reducer
