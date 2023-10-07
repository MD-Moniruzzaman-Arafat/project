import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.confiq";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loder, setLoder] = useState(true);

    // google SignIn
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut = () => {
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log(currentUser);
            setLoder(false)
        });

        return () => {
            unSubscribe()
        }
    }, [])

    const authInfo = { createUser, signInUser, logOut, googleSignIn, user, loder }



    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

Context.propTypes = {
    children: PropTypes.node,
}

export default Context;