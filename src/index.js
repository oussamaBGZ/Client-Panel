import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Router';
import * as serviceWorker from './serviceWorker';
import 'bulma/css/bulma.css'
import { createStore, compose } from 'redux'
import RootReducer from './reducers/RootReducer';
import { reactReduxFirebase } from 'react-redux-firebase';
import { Provider } from 'react-redux'
import fbCf from './fbCf'
import { reduxFirestore } from 'redux-firestore';

const store = createStore(RootReducer, compose(
    reactReduxFirebase(fbCf),
    reduxFirestore(fbCf),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
