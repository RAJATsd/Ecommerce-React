import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
apiKey: "AIzaSyAuXvauukmGomi7tGFGgOBIiMASIw3oxso",
authDomain: "e-commdb-6cbe8.firebaseapp.com",
databaseURL: "https://e-commdb-6cbe8.firebaseio.com",
projectId: "e-commdb-6cbe8",
storageBucket: "e-commdb-6cbe8.appspot.com",
messagingSenderId: "596363736592",
appId: "1:596363736592:web:bb62c99f341b968fb83c95",
measurementId: "G-X96PS87D02"
}

export const createUserProfileDocument = async (userAuth,additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists)
    {
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch(error)
        {
            console.log('error creating user',error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;