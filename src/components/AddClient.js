import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { connect } from 'react-redux';

class AddClient extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        balance: ''
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    handelSubmit = (e) => {
        e.preventDefault()
        const { firestore, history } = this.props
        firestore.add({ collection: 'clients' }, this.state)
            .then(history.push('/dashboard'))
    }
    render() {
        return (
            <section className="section">
                <div className="container">
                    <h1 className="title">Add Client</h1>
                    <Link to="/dashboard"> <i className="fas fa-arrow-left"></i> Go back to dashboard</Link>
                    <br />
                    <br />

                    <div className="box">
                        <form onSubmit={this.handelSubmit}>

                            <div className="field">
                                <label className="label">Name</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="FirstName input" name="name" onChange={this.handelChange} required />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-signature"></i>
                                    </span>
                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Last Name</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="Text input" name="lastname" onChange={(e) => this.handelChange(e)} required />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-user" />
                                    </span>

                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Email</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="email" placeholder="Email input" name="email" onChange={(e) => this.handelChange(e)} required />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-envelope" />
                                    </span>

                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Phone</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="number" placeholder="Phone input" name="phone" onChange={(e) => this.handelChange(e)} required />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-phone" />
                                    </span>

                                </div>
                            </div>
                            <div className="field">
                                <label className="label">Balance</label>
                                <div className="control has-icons-left has-icons-right">
                                    <input className="input" type="text" placeholder="balance input" name="balance" onChange={(e) => this.handelChange(e)} step="0.01" disabled={this.props.DisableBalanceonAdd} required />
                                    <span className="icon is-small is-left">
                                        <i className="fas fa-dollar-sign"></i>
                                    </span>

                                </div>
                            </div>

                            <div className="field is-grouped">
                                <div className="control">
                                    <button className="button is-link">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default compose(
    firestoreConnect(),
    connect((state) => {
        return {
            DisableBalanceonAdd: state.SettingsReducer.DisableBalanceonAdd
        }
    })
)(AddClient)


