import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class App extends Component {
  state = {
    toggle: false,
  }

  handelLogout = () => {
    this.props.firebase.logout()
  }

  render() {

    return (

      <div className="navbar is-primary">
        < div className="container" >
          <div className="navbar-brand">
            <h1 className="navbar-item">ClientPanel</h1>
            <button role="button" className={`navbar-burger ${this.state.toggle && 'is-active'}`} onClick={() => this.setState({ toggle: !this.state.toggle })}>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </button>
          </div>
          <div className={`navbar-menu  ${this.state.toggle && 'is-active'}`}>
            <div className="navbar-start">
              {this.props.auth.uid && <Link to="/dashboard" className="navbar-item">Dashboard</Link>}
            </div>
            <div className="navbar-end">
              {this.props.auth.uid ? <><a className="navbar-item">{this.props.auth.email}</a>
                <Link to="/setting" className="navbar-item">Settings</Link>
                <a className="navbar-item" onClick={this.handelLogout}>Logout</a></> :
                <><Link to="/" className="navbar-item">Login</Link>
                  {!this.props.NotAllowSignIn && <Link to="/signin" className="navbar-item">Sign In</Link>}</>}
            </div>
          </div>
        </div >
      </div >

    );
  }
}

export default compose(
  firebaseConnect(),
  connect((state) => {
    return {
      auth: state.firebase.auth,
      NotAllowSignIn: state.SettingsReducer.NotAllowSignIn
    }
  })
)(App);
