import {SHOW_FILES} from '../actions'

export default function files (state = [], {type, files}) {
  switch (type) {
  case SHOW_FILES:
    return files
  default:
    return state
  }
}
