import React from 'react'
import Loader from './giphy.gif'
const Spinner = () => {
    return (
        <div style={{ textAlign: "center" }}>
            <img src={Loader} style={{ margin: "auto" }} />
        </div>
    )
}

export default Spinner
