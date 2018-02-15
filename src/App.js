import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { getPageTitle } from 'utils'
import { NotFoundPage } from 'pages'
import { location } from 'types'
import { Header, Main, Footer } from 'components'
import { routes } from 'routes'

const propTypes = { location }

const App = props => (
  <Fragment>
    <Helmet>
      <title>{getPageTitle(props.location.pathname, routes)}</title>
    </Helmet>
    <Header />
    <Main>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} />)}
        <Route component={NotFoundPage} />
      </Switch>
    </Main>
    <Footer />
  </Fragment>
)

App.propTypes = propTypes

export default App
