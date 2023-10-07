import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase.confiq";

export const AuthContext = createContext(null)

const Context = ({ children }) => {

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // signIn user
    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const authInfo = { createUser, signInUser }



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