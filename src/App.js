import React, { Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Helmet from 'react-helmet'

import { location } from 'types'
import { getPageTitle } from 'utils'
import routes from 'routes'

import * as Pages from 'pages'
import { Header, Main, Footer } from 'components'

const propTypes = { location }

const App = props => (
  <Fragment>
    <Helmet>
      <title>{getPageTitle(props.location.pathname, routes)}</title>
    </Helmet>
    <Header />
    <Main>
      <Switch>
        {routes.map(route => <Route key={route.path} {...route} component={Pages[route.component]} />)}
        <Route component={Pages.NotFoundPage} />
      </Switch>
    </Main>
    <Footer />
  </Fragment>
)

App.propTypes = propTypes

export default App
