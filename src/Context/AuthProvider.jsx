import { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import auth from "../Firebase/Firebase.init";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(false)
        return createUserWithEmailAndPassword(auth, email, password);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => unSubscribe();
    }, [])

    const loginUser = (email, password) => {
        setLoading(false);
        return signInWithEmailAndPassword(auth, email, password);
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