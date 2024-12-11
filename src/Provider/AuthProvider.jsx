import React, { useContext, useEffect, useState } from 'react';
import AuthCntext from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }


    useEffect ( () =>{
       const unsubscribe = onAuthStateChanged(auth,currentUser => {
            setUser(currentUser);
            setLoading(false);
            console.log('state camptured:',currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser
    }

    return (
        <AuthCntext.Provider value={authInfo}>
            {children}
        </AuthCntext.Provider>
    );
};

export default AuthProvider;