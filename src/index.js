import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { MediaQueryProvider } from 'components'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './styles'

render(
  <MediaQueryProvider>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </MediaQueryProvider>,
  document.getElementById('root')
)

registerServiceWorker()
