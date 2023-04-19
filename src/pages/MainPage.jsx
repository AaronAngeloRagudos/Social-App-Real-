import { useContext, useEffect, useState } from "react";
import { OnAuthStateChangeFirebase, auth, firestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

export default function MainPage() {
    const { loggedInUser } = useContext(OnAuthStateChangeFirebase);

    

    return (
        <div className="mainpage">
           
        </div>
    );
};
