import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import configureStore from './configStore'
import { createBrowserHistory } from 'history'

import 'antd/dist/antd.css' // or 'antd/dist/antd.less'

const initialState = window.INITIAL_REDUX_STATE
const history = createBrowserHistory()
const store = configureStore(history, initialState)

ReactDOM.render(<App store={store} history={history} />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
