import {combineReducers} from 'redux'
// import dirs from './dirs'
// import files from './files'

import {RECIEVE_PHOTOS, SHOW_FILES} from '../actions'

function mode (state, {type}) {
  switch (type) {
    case SHOW_FILES:
      return 'files'
    default:
      return 'dirs'
  }
}

function dirs (state = [], action) {
  switch (action.type) {
    case RECIEVE_PHOTOS:
      return action.dirs
    default:
      return state
  }
}

function files (state = [], {type, files}) {
  switch (type) {
    case SHOW_FILES:
      return files
    default:
      return state
  }
}

const rootReducer = combineReducers({
  mode,
  dirs,
  files
})

export default rootReducer
