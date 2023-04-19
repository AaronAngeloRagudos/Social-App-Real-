import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, firestore } from "../../firebase";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { filterWord } from "@aaronragudos/vulgarity-filter-library";

export default async function AuthHandleSubmit(params) {

    if (params.e.target.id === 'auth_login_form') {
        loginUser(
            params.email,
            params.password
        );
    } else if (params.e.target.id === 'auth_register_form') {

        if (await filterWord(params. displayName)) {
            return alert(`The username ${params.displayName} contains profanity. Please choose a different name.`);
        }

        if (await filterWord(params.fullName)) {
            return alert(`The name, ${params.fullName}, has been considered to be profane. Please choose a different name.`)
        }

        registerUser(
            params.email,
            params.displayName,
            params.fullName,
            params.password
        );
    }
};

async function loginUser(email, password) {
    try {
        const login = await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
    }
}

async function registerUser(email, displayName, fullName, password) {
    try {
        const register = await createUserWithEmailAndPassword(auth, email, password);

        if (register) {
            await updateProfile(auth.currentUser, {
                displayName: fullName,
            });
            await setDoc(doc(firestore, 'users-auth', register.user.uid), {
                userName: displayName,
                displayName: fullName,
                email,
                uid: register.user.uid,
                createdOn: serverTimestamp(),
            });
        }
    } catch (error) {
        console.log(error);
    }
}