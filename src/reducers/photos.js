import {RECIEVE_PHOTOS} from '../actions'

export default function photos (state = {
  dirs: []
}, action) {
  switch (action.type) {
  case RECIEVE_PHOTOS:
    return Object.assign({}, state, {
      dirs: action.dirs
    })
  default:
    return state
  }
}
