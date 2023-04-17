import { useState } from "react";
import { AuthLoginInput } from "./input";

export default function Login() {
    const [hidden, setHidden] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function importAnimatePlaceholder () {
        const { AuthAnimatePlaceholder } = await import('../../utils');
        return AuthAnimatePlaceholder;
    }

    return (
        <form>
            <AuthLoginInput
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                importAnimatePlaceholder={importAnimatePlaceholder}
                hidden={hidden}
                setHidden={setHidden}
            />
        </form>
    );
};