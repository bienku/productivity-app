import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut as logOut,
    User,
} from 'firebase/auth';
import { auth } from '../firebase';

interface IAuthContext {
    currentUser: User | null;
    signIn: (email: string, password: string) => void;
    signUp: (email: string, password: string) => void;
    signOut: () => Promise<void> | void;
}

const initialState = {
    currentUser: null,
    signIn: () => {},
    signUp: () => {},
    signOut: () => {},
};

const AuthContext = createContext<IAuthContext>(initialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
            }
        });
    });

    const signIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
            })
            .catch((error) => {
                console.warn(error.code, error.message);
            });
    };

    const signUp = (email: string, password: string) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setCurrentUser(userCredential.user);
            })
            .catch((error) => {
                console.warn(error.code, error.message);
            });
    };

    const signOut = () => logOut(auth);

    return <AuthContext.Provider value={{ currentUser, signIn, signOut, signUp }}>{children}</AuthContext.Provider>;
};

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;
