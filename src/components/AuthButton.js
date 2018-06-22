import React, {Component} from 'react';
export default class AuthButton extends Component {
  clickEvent() {
    window.localStorage.setItem('isLogin', false);
  }
  render () {
    return (
      <div>
        {this.props.isLogin ? <p>Welcome!<button onClick={this.clickEvent}>Sign out</button></p> : <p>You are not logged in.</p>}
      </div>
    )
  }
} 