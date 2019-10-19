import * as React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { Global } from '@emotion/core'

import Roots from './components/layout/Roots'
import Nav from './components/Nav'
import Home from './pages/Home/Home'
import FooterConent from './components/Footer'
import Artile from './pages/Artile/Artile'
// import Header from './components/layout/Header'
// import IndexPage from './pages/index'
// import HeroesPage from './pages/heroes'
// import TeamsPage from './pages/teams'
// import normalize from './styles/normalize'
// import globals from './styles/globals'

// If your app is big + you have routes with a lot of components, you should consider
// code-splitting your routes! If you bundle stuff up with Webpack, I recommend `react-loadable`.
//
// $ yarn add react-loadable
// $ yarn add --dev @types/react-loadable
//
// The given `pages/` directory provides an example of a directory structure that's easily
// code-splittable.

const Routes: React.SFC = () => (
  <Roots>
    <Nav />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/article" component={Artile} />
    </Switch>
    <FooterConent />
  </Roots>
)

export default Routes
