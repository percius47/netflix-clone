import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyC7m1u633P-5KsD8hbtPdaP4YMXsEEC_zA",
    authDomain: "netflix-clone-4f141.firebaseapp.com",
    projectId: "netflix-clone-4f141",
    storageBucket: "netflix-clone-4f141.appspot.com",
    messagingSenderId: "191342886911",
    appId: "1:191342886911:web:49504a8945a3fc03fef1ca"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();


  export {auth};
  export default db;