import React from 'react'
import { render } from 'react-dom'
import { Provider as StoreProvider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { store } from 'store'

import { MediaQueryProvider } from 'components'

import App from './App'
import registerServiceWorker from './registerServiceWorker'

import './styles'

render(
  <StoreProvider store={store}>
    <MediaQueryProvider>
      <Router>
        <Route path="/" component={App} />
      </Router>
    </MediaQueryProvider>
  </StoreProvider>,
  document.getElementById('root')
)

registerServiceWorker()
