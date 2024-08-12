/* eslint-disable prettier/prettier */
import React, { Component, Suspense } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


// Pages/login
const Login = React.lazy(() => import('./views/pages/login/Login'))

// Containers
const AppLayout = React.lazy(() => import('./layout/AppLayout'))


class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <Suspense fallback={loading}>
            <Switch>
              <Route
                exact
                path="/"
                name="Login Page"
                render={(props) => <Login {...props} />} />
              <Route
               path="/"
               name="Home"
               render={(props) => <AppLayout {...props} />}
                />
            </Switch>
          </Suspense>
        </HashRouter>
      </>
    )
  }
}

export default App
