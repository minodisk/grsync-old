import {RECIEVE_PHOTOS} from '../actions'

export default function dirs (state = [], action) {
  switch (action.type) {
    case RECIEVE_PHOTOS:
      return action.dirs
    default:
      return state
  }
}
