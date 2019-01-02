import React, { Component } from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Loader from './giphy.gif'
import { Link } from 'react-router-dom'

class EditClient extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        phone: '',
        balance: ''
    }

    handelSubmit = (e) => {
        e.preventDefault()
        const { firestore, history, match } = this.props
        const data = {
            name: e.target.name.value,
            lastname: e.target.lastname.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            balance: e.target.balance.value,
        }
        firestore.update({ collection: 'clients', doc: match.params.id }, data)
            .then(history.push('/dashboard'))

    }

    render() {
        if (this.props.client) {
            console.log(this.props)

            return (
                <section className="section">
                    <div className="container">
                        <h1 className="title">Edit Client</h1>
                        <Link to="/dashboard"> <i className="fas fa-arrow-left"></i> Go back to dashboard</Link>
                        <br />
                        <br />

                        <div className="box">
                            <form onSubmit={this.handelSubmit}>

                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" placeholder="FirstName input" name="name" defaultValue={this.props.client.name} required />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-signature"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Last Name</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" placeholder="Text input" name="lastname" defaultValue={this.props.client.lastname} required />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-user" />
                                        </span>

                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">phone</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="email" placeholder="Email input" name="email" defaultValue={this.props.client.email} required />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-envelope" />
                                        </span>

                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Phone</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="number" placeholder="Phone input" name="phone" defaultValue={this.props.client.phone} required />
                                        <span className="icon is-small is-left">
                                            <i className="fas fa-phone" />
                                        </span>

                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Balance</label>
                                    <div className="control has-icons-left has-icons-right">
                                        <input className="input" type="text" placeholder="balance input" name="balance" step="0.01" defaultValue={this.props.client.balance} disabled={this.props.DisableBalanceonEdit} required />
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
        } else {
            return <div style={{ textAlign: 'center' }}><img src={Loader} /></div>
        }
    }
}

export default compose(
    firestoreConnect(props => [
        { collection: 'clients', storeAs: 'client', doc: props.match.params.id }
    ]),
    connect((state, props) => {
        const client = state.firestore.data.clients ?
            state.firestore.data.clients[props.match.params.id] :
            null
        return {
            client,
            DisableBalanceonEdit: state.SettingsReducer.DisableBalanceonEdit
        }
    })

)(EditClient)


