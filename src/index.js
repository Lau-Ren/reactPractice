import React from 'react'
import ReactDom from 'react-dom'

import App from './components/app.js'
import { createStore } from 'redux'
import reducer from './reducer.js'
const store = createStore(reducer)


const render = () => {

	ReactDom.render(
	  <App state={store.getState()} store={store} />, 
	  document.getElementById('app')
	)
	
}

store.subscribe(render)

render()
