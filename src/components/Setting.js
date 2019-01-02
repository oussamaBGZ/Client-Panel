import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Setting extends Component {
    handelChange = (e) => {
        this.props[e.target.name](e.target.checked)
    }
    render() {
        return (
            <div className="container">
                <section className="section">
                    <div className="box">
                        <Link to="/dashboard" className="has-text-weight-bold"> <i className="fas fa-arrow-left"></i> Go back to dashboard</Link>
                    </div>
                    <nav className="panel has-text-weight-bold">
                        <p className="panel-heading is-capitalized">
                            Edit Settings
                    </p>

                        <li className="panel-block">
                            <span className="checkbox">
                                Not Allow Sign In: <input type="checkbox" name="NotAllowSignIn" onChange={this.handelChange} checked={this.props.setting.NotAllowSignIn} />
                            </span>
                        </li>
                        <li className="panel-block">
                            <span className="checkbox">
                                Disable Balance on Add: <input type="checkbox" name="DisableBalanceonAdd" onChange={this.handelChange} checked={this.props.setting.DisableBalanceonAdd} />
                            </span>
                        </li>
                        <li className="panel-block">
                            <span className="checkbox">
                                Disable Balance on Edit: <input type="checkbox" name="DisableBalanceonEdit" onChange={this.handelChange} checked={this.props.setting.DisableBalanceonEdit} />
                            </span>
                        </li>
                    </nav>
                </section>
            </div>
        )
    }
}

export default connect((state) => ({
    setting: state.SettingsReducer
}), dispatch => {
    return {
        NotAllowSignIn: value => dispatch({ type: 'NotAllowSignIn', checked: value }),
        DisableBalanceonAdd: value => dispatch({ type: 'DisableBalanceonAdd', checked: value }),
        DisableBalanceonEdit: value => dispatch({ type: 'DisableBalanceonEdit', checked: value })
    }
})(Setting)

