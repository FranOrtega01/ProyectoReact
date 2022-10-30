import React, {createContext, useContext, useState, useEffect} from "react";
import { auth } from '../firebase/firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, sendPasswordResetEmail, updateEmail, updatePassword, updateProfile } from "firebase/auth";

const AuthContext = createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({children}) {

    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }
    const logout = () => {
        return signOut(auth)
    }

    const resetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const emailUpdate = (email) => {
        return updateEmail(auth.currentUser, email)
    }
    const passwordUpdate = (password) => {
        return updatePassword(auth.currentUser, password)
    }

    const nameUpdate = (name) => {
        return updateProfile(auth.currentUser, {displayName: name})
    }

    useEffect(() => {     
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])
    

    const value = {
        currentUser,
        login,
        signup,
        logout,
        resetPassword,
        emailUpdate,
        passwordUpdate,
        nameUpdate
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
