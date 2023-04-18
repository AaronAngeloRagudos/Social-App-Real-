import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function AuthHandleSubmit (params) {
    params.e.preventDefault();

    if (params.e.target.id === 'auth_login_form') {
        loginUser(params.email, params.password);
    }
};


async function loginUser(email, password) {
    const login = signInWithEmailAndPassword(auth, email, password);
    
}