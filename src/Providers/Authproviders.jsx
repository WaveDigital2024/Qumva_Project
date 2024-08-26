import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, TwitterAuthProvider, createUserWithEmailAndPassword, getAuth, linkWithPopup, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

import PropTypes from 'prop-types';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const Authproviders = ({ children }) => {
    const [user, setuser] = useState(null);
    const [loading, setloading] = useState(true);
    const [twitterUser, setTwitterUser] = useState(null); // separate state for Twitter user info

    useEffect(() => {
        const Unsubscribe = onAuthStateChanged(auth, currentUser => {
            setuser(currentUser);
            setloading(false);
        });
        return () => {
            Unsubscribe();
        }
    }, []);

    // create user with email and password
    const createUser = (email, password) => {
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // update user profile
    const UpdateProfile = (name) => {
        return updateProfile(auth.currentUser, {
            displayName: name
        });
    };

    // login with email and password
    const loginUser = (email, password) => {
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // logout user
    const logout = () => {
        setloading(true);
        return signOut(auth).then(() => {
            setTwitterUser(null); // Clear Twitter info upon logout
        });
    };

    // login with Google
    const googleProvider = new GoogleAuthProvider();
    const GoogleLogin = () => {
        setloading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // Twitter login - link Twitter account to the existing Firebase user if logged in
    const twitterProvider = new TwitterAuthProvider();
    // Twitter login - link Twitter account to the existing Firebase user if logged in

    const twitterLogin = () => {
        const currentUser = auth.currentUser;

        if (currentUser) {
            // Link Twitter account to the existing user
            return linkWithPopup(currentUser, twitterProvider)
                .then((result) => {
                    setTwitterUser(result.user);  // Store Twitter-specific info separately
                    return result.user;
                })
                .catch((error) => {
                    console.error("Error linking Twitter account:", error);
                });
        } else {
            // Sign in with Twitter if no user is logged in
            return signInWithPopup(auth, twitterProvider)
                .then((result) => {
                    setTwitterUser(result.user);  // Store Twitter-specific info separately
                    return result.user;
                })
                .catch((error) => {
                    console.error("Error signing in with Twitter:", error);
                });
        }
    };

    const authInfo = {
        user,
        twitterUser, // Separate state for Twitter login
        createUser,
        loginUser,
        logout,
        loading,
        GoogleLogin,
        UpdateProfile,
        twitterLogin
    };

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
