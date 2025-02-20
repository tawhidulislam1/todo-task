import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import Auth from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(Auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(Auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const loginUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(Auth, email, password);
    }
    const updateProfiles = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    };
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const authInfo = {
        createUser,
        loginUser,
        setUser,
        user,
        logOut,
        updateProfiles,

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;