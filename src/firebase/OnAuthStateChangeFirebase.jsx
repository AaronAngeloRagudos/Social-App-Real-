import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./index";
import { whenUserIsLoggedIn } from "../redux/slice/authSlice";

export default function OnAuthStateChangeFirebase ({ children }) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        const getLoggedInUser = onAuthStateChanged(auth, loggedinUser => {
            dispatch(whenUserIsLoggedIn(loggedinUser));
        });
        return () => getLoggedInUser();
    }, []);

    return children;
};