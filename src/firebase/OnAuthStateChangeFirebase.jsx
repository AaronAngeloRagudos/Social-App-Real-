import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const OnAuthStateChangeFirebase = createContext({});

export default function OnAuthStateChangeFirebaseProvider ({ children }) {
    const [loggedInUser, setLoggedInUser] = useState(null);
    
    useEffect(() => {
        const getLoggedInUser = onAuthStateChanged(auth, user => {
            setLoggedInUser(user);
        });
        return () => getLoggedInUser();
    }, []);

    return (
        <OnAuthStateChangeFirebase.Provider value={{ loggedInUser }}>
            { children }
        </OnAuthStateChangeFirebase.Provider>
    );
};