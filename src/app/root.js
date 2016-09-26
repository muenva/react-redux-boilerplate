import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import getReduxStore from './redux-store'
import App from './app.component'
import Home from './home/home.component'
import About from './about/about.component'

const Root = () => (
  <Provider store={getReduxStore()}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='about' component={About} />
      </Route>
    </Router>
  </Provider>
)

export default Root
