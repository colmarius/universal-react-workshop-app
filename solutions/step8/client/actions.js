// Inisde this function we could diptch other actions.
// .e.g to activate spinners/signal errors and so.

import axios from 'axios'
export const TALKS_UPDATED = 'TALKS_UPDATED'

// Do the vote, reload  talks from server
// then return the TALKS_UPDATED action
export function vote(id) {
  console.log("VOTING", id)
  return dispatch =>
    axios.post('/api/talk/vote', {id}).then(dispatch(loadData()))
    .catch(err => console.log(err))
}

export function loadData() {
  return dispatch =>
    axios.get('/api/talks')
      .then(res => dispatch(talksUpdated(res.data))) // we should manage errors...
      .catch(err => console.log(err))
}

function talksUpdated(talks) {
  console.log("TALKS_UPDATED ACTION")
  return {
    type: TALKS_UPDATED,
    talks
  }
}
