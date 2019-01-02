import React from 'react'
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { connect } from 'react-redux';
import Loader from './giphy.gif'
import { Link } from 'react-router-dom'

const ClientProfile = ({ client, match, firestore, history }) => {
    const handelClick = () => {
        firestore.delete({ collection: 'clients', doc: match.params.id })
            .then(history.push('/dashboard'))
    }
    if (client) {
        console.log(firestore)
        return (
            <div className="container">

                <section className="section">
                    <div className="box" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Link to="/dashboard" className="has-text-weight-bold"> <i className="fas fa-arrow-left"></i> Go back to dashboard</Link>
                        <div>
                            <button className="button is-danger" onClick={handelClick}>Delete</button> {' '}
                            <Link to={"/edit/" + match.params.id} className="button is-dark">Edit</Link>

                        </div>
                    </div>
                    <nav className="panel has-text-weight-bold">
                        <p className="panel-heading is-capitalized">
                            {client.name + ' ' + client.lastname}
                        </p>

                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="far fa-id-badge"></i>
                            </span>
                            Client ID: {match.params.id}
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fas fa-dollar-sign"></i>
                            </span>
                            Client Balance: <span className={parseFloat(client.balance) > 0 ? "has-text-danger" : "has-text-success"}> ${client.balance}</span>
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="far fa-envelope"></i>
                            </span>
                            Contact Email: {client.email}
                        </a>
                        <a className="panel-block">
                            <span className="panel-icon">
                                <i className="fas fa-phone" aria-hidden="true"></i>
                            </span>
                            Contact Phone: {client.phone}
                        </a>

                    </nav>
                </section>
            </div>
        )
    } else {
        return <div style={{ textAlign: 'center' }}><img src={Loader} /></div>
    }
}

export default compose(
    connect((state, props) => {
        const client = state.firestore.data.clients ?
            state.firestore.data.clients[props.match.params.id] :
            null
        return {
            client
        }
    }),
    firestoreConnect([
        { collection: 'clients' }
    ])
)(ClientProfile)



