import React, {Component} from 'react';

export default class Login extends Component {
  clickEvent() {
    window.localStorage.setItem('isLogin', true);
  }
  render() {
    const {from} = this.props.location.state || { from: {pathname: '/'} }
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <input type="button" value="Log in" onClick={()=>this.clickEvent()}/>
      </div>
    )
  }
}