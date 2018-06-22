import React, {Component} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

import AuthButton from '../components/AuthButton';
import Login from './login/Login';
import Public from './public/Public';
import Protected from './protected/Protected';

class PrivateRoute extends Component {
  render () {
    if (this.props.isLogin) {
      return (
        <Route path={this.props.path} component={Protected}/>
      )
    } else {
      return (
        <Redirect from={this.props.path} to="/login" />
      )
    }
  }
}

class App extends Component {
  constructor () {
    super();
    this.state = {
      isLogin: false
    }
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        isLogin: (localStorage.getItem('isLogin')) === 'true' ? true : false
      })
    }, 200)
  }
  render () {
    return (
      <Router>
        <div>
          <AuthButton isLogin={this.state.isLogin} />
          <ul>
            <li><Link to="/public">Public Page</Link></li>
            <li><Link to="/protected">Protected Page</Link></li>
          </ul>
          <Switch>
            <Route path="/public" component={Public}/>
            <Route path="/login" component={Login} />
            <PrivateRoute isLogin={this.state.isLogin} path="/protected"/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;