//outdoor tools
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//indoor tools
import App from './components/App'
import reducer from './reducers'

var store = createStore(reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//render our App component once the entire DOM loads, and place that sweet 
//man within whatever has the id of 'root
document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
    <App />
    </Provider>,
  document.getElementById('root')
  )
})



