import { useState } from "react";
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

    async function AuthHandleInputChange() {
        const { AuthHandleInputChange } = await import('../../utils');
        return AuthHandleInputChange;
    };


    return (
        <form
            id="auth_register_form"
            onSubmit={async (e) => {
                e.preventDefault();
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
                setIsDisabled={setIsDisabled}
                AuthHandleInputChange={AuthHandleInputChange}
            />
            <AuthSubmitButton
                type='register'
                isDisabled={isDisabled}
            />
        </form>
    );
};