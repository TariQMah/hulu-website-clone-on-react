import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBmiulw8pN4UgbQbre10eUbnYP16kDzd1o",
    authDomain: "hulu-app-clone-64509.firebaseapp.com",
    databaseURL: "https://hulu-app-clone-64509.firebaseio.com",
    projectId: "hulu-app-clone-64509",
    storageBucket: "hulu-app-clone-64509.appspot.com",
    messagingSenderId: "264705113208",
    appId: "1:264705113208:web:65df7271582e575d1fc18d",
    measurementId: "G-3507SRG8W6"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { auth };