import React from 'react'
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom'
import Menu from './Menu'
import AddClient from './components/AddClient';
import EditClient from './components/EditClient';
import Setting from './components/Setting';
import Dashboard from './components/Dashboard';
import ClientProfile from './components/ClientProfile';
import Login from './components/Login';
import Signin from './components/Signin';
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helper';

const Router = () => {
    return (
        <BrowserRouter>
            <>
                <Menu />
                <Switch>
                    <Route exact path='/' component={UserIsNotAuthenticated(Login)} />
                    <Route exact path='/dashboard' component={UserIsAuthenticated(Dashboard)} />
                    <Route exact path='/addclient' component={UserIsAuthenticated(AddClient)} />
                    <Route exact path='/editclient' component={UserIsAuthenticated(EditClient)} />
                    <Route exact path='/setting' component={UserIsAuthenticated(Setting)} />
                    <Route exact path='/signin' component={UserIsNotAuthenticated(Signin)} />
                    <Route exact path='/client/:id' component={UserIsAuthenticated(ClientProfile)} />
                    <Route exact path='/edit/:id' component={UserIsAuthenticated(EditClient)} />
                </Switch>
            </>
        </BrowserRouter>
    )
}


export default Router
