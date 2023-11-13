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
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages/login/recuperar
/* const Recuparar = React.lazy(() => import('./views/pages/recuperar/Recuparar')) */


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
             {/*  <Route
                exact
                path="/recuparar"
                name="Recuparar Contraseña"
                render={(props) => <Recuparar {...props} />}
              /> */}
              <Route
               path="/"
               name="Home"
               render={(props) => <DefaultLayout {...props} />}
                />

              {/* <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
              <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} /> */}

            </Switch>
          </Suspense>
        </HashRouter>
      </>
    )
  }
}

export default App
