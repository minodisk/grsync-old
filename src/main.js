import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import {} from './main.styl'
import injectTapEventPlugin from 'react-tap-event-plugin'

injectTapEventPlugin()

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

const store = configureStore()

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
)
