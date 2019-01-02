import React from 'react'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, firebaseConnect } from 'react-redux-firebase';
import Clients from './Clients';
import Loader from './giphy.gif'
import { Link } from 'react-router-dom'
const Dashboard = (props) => {
    const { clients } = props

    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column is-three-quarters">
                        <i className="fas fa-users" style={{ fontSize: 30 }} />{' '}<label className="title">Clients</label>
                        <br /><br />
                        {clients ?
                            <table className="table" style={{ width: 100 + '%' }}>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Balance</th>
                                        <th>{' '}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <Clients clients={clients} />
                                </tbody>
                            </table> : <img src={Loader} style={{ margin: "auto" }} />}
                    </div>
                    <div className="column">
                        <Link to="/addclient" className={`button is-primary is-meduim is-fullwidth ${!clients ? 'is-loading' : ''}`}>+ New</Link>
                    </div>
                </div>
            </div>
        </section >
    )
}



const mapStateToProps = (state) => {
    return {
        clients: state.firestore.ordered.clients
    }
}

export default compose(
    firestoreConnect([
        { collection: 'clients' }
    ]),
    connect(mapStateToProps)
)(Dashboard)
