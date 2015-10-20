import {LOAD_THUMBNAIL} from '../actions'

export default function header(state = 0, action) {
  switch (action.type) {
  case LOAD_THUMBNAIL:
    return state + 1
  default:
    return state
  }
}
