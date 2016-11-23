import { TALKS_UPDATED } from './actions'

const reducer = (state = [], action) => {
  switch(action.type) {
    case TALKS_UPDATED:
      return action.talks
    default:
      return state
  }
}

export default reducer
