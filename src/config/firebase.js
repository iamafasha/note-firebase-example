import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB5-zCL_nKZVIZtdeMXx8IpT5Hq6rjY-zE",
    authDomain: "notes-4cfd4.firebaseapp.com",
    projectId: "notes-4cfd4",
    storageBucket: "notes-4cfd4.appspot.com",
    messagingSenderId: "60433136776",
    appId: "1:601433136776:web:9e29fb283e876b0ccf093d"
  };

  export const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true,
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore()
export default firebase;