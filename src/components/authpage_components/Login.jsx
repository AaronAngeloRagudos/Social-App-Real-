import { useEffect, useState } from "react";
import { AuthLoginInput } from "./input";
import { AuthSubmitButton } from "./buttons";
import { Link } from "react-router-dom";

export default function Login() {
    const [hidden, setHidden] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // lazy load functions only when it is required (i.e. when input is focused on or on change).
    async function importAnimatePlaceholder() {
        const { AuthAnimatePlaceholder } = await import('../../utils');
        return AuthAnimatePlaceholder;
    }

    useEffect(() => {
        function changeSubmitButtonState() {
            setIsDisabled(true);
            if (email && password) {
                setIsDisabled(false);
            }
        };

        return () => changeSubmitButtonState();
    }, [email, password, hidden]);

    return (
        <form
            id="auth_login_form"
            onSubmit={ async (e) => {
                const { AuthHandleSubmit } = await import(
                    '../../utils'
                );
                AuthHandleSubmit({ e, email, password })
            }}
        >
            <AuthLoginInput
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                importAnimatePlaceholder={importAnimatePlaceholder}
                hidden={hidden}
                setHidden={setHidden}
            />
            <AuthSubmitButton
                type='login'
                isDisabled={isDisabled}
            />
            <div className="auth_forgot_password_a_container">
            <Link
                to={'#'}
                className="auth_forgot_password_a"
                title="Recover your password"
            >
                Forgot Password?
            </Link>
            </div>
        </form>
    );
};