import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import { firestoreReducer } from 'redux-firestore';
import SettingsReducer from "./SettingsReducer";
const RootReducer = combineReducers({
    firebase: firebaseReducer,
    firestore: firestoreReducer,
    SettingsReducer
})
export default RootReducer