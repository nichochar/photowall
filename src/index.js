import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'
import rootReducer from './redux/reducer'
import {Provider} from 'react-redux'
import App from './components/App'

import './styles/stylesheet.css'

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Notice that we display App, the "connected to the redux store" component
ReactDOM.render(<Provider store={store}><BrowserRouter><App/></BrowserRouter></Provider>, document.getElementById('root'))

