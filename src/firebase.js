import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBb7Aswf4TvMvte1qpHnrywRMXDSC8zOAo',
  authDomain: 'simplecrudapp-4b11b.firebaseapp.com',
  databaseURL: 'https://simplecrudapp-4b11b-default-rtdb.firebaseio.com',
  projectId: 'simplecrudapp-4b11b',
  storageBucket: 'simplecrudapp-4b11b.appspot.com',
  messagingSenderId: '204669356621',
  appId: '1:204669356621:web:190a1b0518e3ee2f202a04',
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
