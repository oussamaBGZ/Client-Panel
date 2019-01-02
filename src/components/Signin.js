import React, { Component } from 'react'
import { firebaseConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group';

class SignIn extends Component {
    state = {
        err: ""
    }

    handelSubmit = (e) => {
        e.preventDefault()
        const crd = {
            email: e.target.email.value,
            password: e.target.password.value,
        }
        this.props.firebase.createUser(crd).then(() => this.props.history.push('/')).catch(err => this.setState({ err: err.message }))

    }
    render() {
        if (!this.props.NotAllowSignIn) {
            return (
                <section className="section" >
                    <div className="container">
                        <CSSTransition
                            in={this.state.err ? true : false}
                            timeout={300}
                            classNames="message"
                            unmountOnExit
                        >
                            <div className="notification is-danger">
                                <button className="delete" onClick={() => this.setState({ err: "" })}></button>
                                {this.state.err}
                            </div>
                        </CSSTransition>
                        <div className="box">
                            <h1 className="title">Sign In</h1>
                            <form onSubmit={this.handelSubmit}>
                                <div className="field">
                                    <label className="label">Email</label>
                                    <div className="control">
                                        <input className="input" type="email" placeholder="e-mail" name="email" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Password</label>
                                    <div className="control">
                                        <input className="input" type="password" placeholder="password" name="password" />
                                    </div>
                                </div>
                                <br />
                                <button className="button is-info">Submit</button>
                            </form>
                        </div>
                    </div>
                </section>
            )
        } else {
            return <Redirect to="/" />
        }
    }
}

export default compose(
    firebaseConnect(),
    connect((state) => {
        return {
            NotAllowSignIn: state.SettingsReducer.NotAllowSignIn
        }
    })
)(SignIn)
