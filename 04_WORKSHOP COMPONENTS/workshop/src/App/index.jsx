import React, { Suspense, Component } from 'react';

import {
  Switch,
  Route
} from 'react-router-dom'

import './styles.css';

import userService from '../services/user-service';

import Navigation from '../Navigation';
import Aside from '../Aside';
import Main from '../Main';
import Footer from '../Footer';
import Profile from '../Profile';
const Login = React.lazy(() => import('../Login'));
const Register = React.lazy(() => import('../Register'));
const Create = React.lazy(() => import('../Create'));
const NotFound = React.lazy(() => import('../NotFound'));

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split("=");
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

const camelCased = myString => (
  myString.replace(/-([a-z])/g, (g) => g[1].toUpperCase())
);

class App extends Component {
  constructor(props) {
    super(props);
    const cookies = parseCookies();
    this.state = {
      username: null,
      // isAdmin: false,
      userId: "",
      isLogged: !!cookies["x-auth-token"]
    }
  }

  logout(history) {
    userService.getLogout().then(res => {
      // if (res === "Logout successfully!") {
      this.setState({
        username: null,
        // isAdmin: false,
        userId: "",
        isLogged: false
      }, () => {
        // localStorage.clear();
      })
      // }
      history.push('/');
      console.log(res)
    }).catch(err => {
      console.log(err);
    })
    return null;
  }

  pushToHome = (history) => {
    history.push('/');
  }

  componentDidMount() {
    // const isAdmin = localStorage.getItem('isAdmin') === "true";
    // const cookies = parseCookies();
    // if (localStorage.getItem('username')) {
    this.setState((prevState,newState) => ({
      // username: localStorage.getItem('username'),
      // isAdmin,
      // userId: localStorage.getItem('userId')
      // isLogged: !!cookies["x-auth-token"]
      isLogged: newState.isLogged
    }))
    // }
  }


  handleSubmit(event, data, isLoginPage, history) {
    event.preventDefault();

    userService.post(data, isLoginPage).then(res => {
      if (res.username && isLoginPage) {
        this.setState({
          username: res.username,
          // isAdmin: res.roles.includes('Admin'),
          userId: res._id,
          isLogged: true

        }, () => {
          // sessionStorage.setItem('username', `${res.username}`);
          // sessionStorage.setItem('userId', `${res._id}`);
          // sessionStorage.setItem('isAdmin', `${res.isAdmin}`);
        })
        console.log(this.state.isLogged)
        history.push('/')
      } else {
        history.push('/user/login')
      }
      console.log(res);

    }).catch(err => {
      console.log(err);
    })
  }

  handleFormElementChange(event) {
    const { value, id } = event.target;
    const parsedId = camelCased(id);
    this.setState({
      [parsedId]: value
    })
  }

  render() {
    return (
      <div className="App">
        <Navigation path="../logo192.png" isLogged={this.state.isLogged} />
        <div className="Container">
          <Aside isLogged={this.state.isLogged} />
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/" exact render={() => <Main path="../logo192.png" />} />
              <Route path="/post" render={() => <Create path="../logo192.png" />} />
              <Route
                path="/user/register"
                render={({ history }) => (!this.state.isLogged ? <Register
                  handleSubmit={this.handleSubmit}
                  handleFormElementChange={this.handleFormElementChange}
                  history={history}
                /> : this.pushToHome(history))}
              />
              <Route
                path="/user/login"
                render={({ history }) => (!this.state.isLogged ? <Login
                  handleSubmit={this.handleSubmit}
                  handleFormElementChange={this.handleFormElementChange}
                  history={history}
                /> : this.pushToHome(history))}
              />
              <Route
                path="/user/logout"
                render={({ history }) => this.logout(history)}
              />

              {/* <Route path="/register" component={Register} />
                <Route path="/login" component={Login} /> */}
              <Route path="/profile" render={() => <Profile path="../logo192.png" />} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
        <Footer path="../logo192.png" isLogged={this.state.isLogged} />

      </div>
    )
  }

}

export default App;