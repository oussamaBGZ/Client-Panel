import React from 'react'
import { Link } from 'react-router-dom'
const Clients = ({ clients }) => {
    return (
        <>
            {
                clients.map(el => <tr key={el.id}>
                    <td>{el.name}</td>
                    <td>{el.email}</td>
                    <td>${el.balance}</td>
                    <td><Link to={`/client/${el.id}`} className="button is-primary"><span>Profile</span>  <i className="fas fa-arrow-right" style={{ marginLeft: 10 }} /></Link></td>
                </tr>
                )
            }
        </>
    )
}

export default Clients
