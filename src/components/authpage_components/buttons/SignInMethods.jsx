import { GoogleIcon } from "../icons";

export default function SignInMethods () {

    return (
        <div className="auth_sign_in_methods_container">
            <button
                type="button"
                id="auth_google_sign_in"
                tabIndex={0}
                title='Sign in with Google'
            >
                <GoogleIcon />
                <p>
                    Sign in with Google
                </p>
            </button>
        </div>
    );
};