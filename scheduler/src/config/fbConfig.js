import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCGmQF1Hq8QHy3WkINZNq7HM0b9-eNtXuI",
    authDomain: "scheduler-a5efc.firebaseapp.com",
    databaseURL: "https://scheduler-a5efc.firebaseio.com",
    projectId: "scheduler-a5efc",
    storageBucket: "scheduler-a5efc.appspot.com",
    messagingSenderId: "695198438572",
    appId: "1:695198438572:web:aa42c852c71a1956327b09",
    measurementId: "G-JBDDP98N5F"
};

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots:true});

export default firebase;

