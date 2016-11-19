// Inisde this function we could diptch other actions.
// .e.g to activate spinners/signal errors and so.

import axios from 'axios'
export const TALKS_UPDATED = 'TALKS_UPDATED'

// Do the vote, reload  talks from server
// then return the TALKS_UPDATED action
export function vote(id) {
  return dispatch =>
    axios.post('/api/talk/vote', {id}).then(dispatch(loadData()))
}

export function loadData() {
  return dispatch =>
    axios.get('/api/talks')
      .then(res => dispatch(talksUpdated(res.data))) // we should manage errors...
}

function talksUpdated(talks) {
  return {
    type: TALKS_UPDATED,
    talks
  }
}
