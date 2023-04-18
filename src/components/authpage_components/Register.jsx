import { useEffect, useState } from "react";
import { AuthRegisterInput } from "./input";
import { AuthSubmitButton } from "./buttons";

export default function Register() {
    const [hidden, setHidden] = useState(true);
    const [isDisabled, setIsDisabled] = useState(true);
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');

    // lazy load functions only when it is required (i.e. when input is focused on or on change).
    async function importAnimatePlaceholder() {
        const { AuthAnimatePlaceholder } = await import('../../utils');
        return AuthAnimatePlaceholder;
    }

    useEffect(() => {
        function changeSubmitButtonState() {
            setIsDisabled(true);
            if (email && userName && fullName && password) {
                setIsDisabled(false);
            }
        };

        return () => changeSubmitButtonState();
    }, [email, password, hidden]);

    return (
        <form
            id="auth_register_form"
            onSubmit={async (e) => {
                const { AuthHandleSubmit } = await import(
                    '../../utils'
                );
                AuthHandleSubmit({
                    e,
                    email,
                    displayName: userName,
                    fullName,
                    password
                })
            }}
        >
            <AuthRegisterInput
                email={email}
                setEmail={setEmail}
                userName={userName}
                setUserName={setUserName}
                fullName={fullName}
                setFullName={setFullName}
                password={password}
                setPassword={setPassword}
                importAnimatePlaceholder={importAnimatePlaceholder}
                hidden={hidden}
                setHidden={setHidden}
            />
            <AuthSubmitButton
                type='register'
                isDisabled={isDisabled}
            />
        </form>
    );
};