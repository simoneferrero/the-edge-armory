import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import getStore from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  document.getElementById('root'),
)

serviceWorker.register()
