import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
    apiKey: "AIzaSyBCVwQX2Mb8GtWoIZjS2mBPGGYDKIwbwII",
    authDomain: "clientpanel-def5b.firebaseapp.com",
    databaseURL: "https://clientpanel-def5b.firebaseio.com",
    projectId: "clientpanel-def5b",
    storageBucket: "clientpanel-def5b.appspot.com",
    messagingSenderId: "670793099388"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase 