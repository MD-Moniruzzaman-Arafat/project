import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase.confiq";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider();

const Context = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loder, setLoder] = useState(true);

    // google SignIn
    const googleSignIn = () => {
        setLoder(true)
        return signInWithPopup(auth, googleProvider)
    }

    // create user
    const createUser = (email, password) => {
        setLoder(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const updateUser = (auth, auth2) => {
        return updateProfile(auth, auth2)
    }

    // signIn user
    const signInUser = (email, password) => {
        setLoder(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logOut
    const logOut = () => {
        setLoder(true)
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

    const authInfo = { createUser, signInUser, logOut, googleSignIn, updateUser, user, loder }



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