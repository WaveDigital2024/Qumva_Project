import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,TwitterAuthProvider,  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

import PropTypes from 'prop-types';
// import { disconnect } from "wagmi/actions";
// import { axiosSecure } from "../Hooks/useAxiosSecure";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const Authproviders = ({ children }) => {
    const [user, setuser] = useState(null)
    const [loading, setloading] = useState(true)
    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser)
            setloading(false)

        })
        return () => {
            Unsubscribe()
        }
    }, [])



    // create user
    const createUser = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // update username
    const UpdateProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        })

    }
    // login user
    const loginUser = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // logout user
    const logout = () => {
        // disconnect()
        setloading(true)
        return signOut(auth)
    }

    // Login USer with Google
    const googleprovider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setloading(true)
        return signInWithPopup(auth, googleprovider)
    }

      // Twitter login
      const twitterProvider = new TwitterAuthProvider();
      const twitterLogin = () => {
          setloading(true);
          return signInWithPopup(auth, twitterProvider);
      };


    const authInfo = {
        user,
        createUser,
        loginUser,
        logout,
        loading,
        GoogleLogin,
        UpdateProfile,
        twitterLogin

    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};



Authproviders.propTypes = {
    children: PropTypes.node
};

export default Authproviders;