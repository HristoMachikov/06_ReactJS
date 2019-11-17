import React, { Suspense } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import './styles.css';

import Navigation from '../Navigation';
import Aside from '../Aside';
import Main from '../Main';
import Footer from '../Footer';
import Profile from '../Profile';
const Login = React.lazy(() => import('../Login'));
const Register = React.lazy(() => import('../Register'));
const Create = React.lazy(() => import('../Create'));
const NotFound = React.lazy(() => import('../NotFound'));

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation path="../logo192.png" />
        <div className="Container">
          <Aside />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact render={() => <Main path="../logo192.png" />} />
              <Route path="/post" render={() => <Create path="../logo192.png" />} />
              <Route path="/register" component={Register} />
              <Route path="/login" component={Login} />
              <Route path="/profile" render={() => <Profile path="../logo192.png" />} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
        <Footer path="../logo192.png" />
      </Router>
    </div>
  )
}

export default App;