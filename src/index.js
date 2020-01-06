import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './components/App'
import registerServiceWorker from './registerServiceWorker'
import Config from './pages/Config/config.js';

ReactDOM.render(
  <App>
    <Config />
  </App>, document.getElementById('root'))

registerServiceWorker()
