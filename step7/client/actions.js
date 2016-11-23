import axios from 'axios'
export const TALKS_UPDATED = 'TALKS_UPDATED'

export function vote(id) {
  return dispatch =>
    axios.post('/api/talk/vote', { id })
      .then(dispatch(loadData()))
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
