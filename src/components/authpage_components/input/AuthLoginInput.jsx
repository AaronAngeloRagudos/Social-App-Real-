import { loginInput } from '../../../constants';

export default function AuthLoginInput(props) {

    return (
        <>
            {
                loginInput.map((input, index) => (
                    <label
                        htmlFor={input.id}
                        className='auth_input_label'
                        title={input.title}
                        onFocus={ async () => {
                            const AuthAnimatePlaceholder = await props.importAnimatePlaceholder();
                            AuthAnimatePlaceholder(input.id, index, 'onfocus', props.setHidden);
                        }}
                        onBlur={ async () => {
                            const AuthAnimatePlaceholder = await props.importAnimatePlaceholder();
                            AuthAnimatePlaceholder(input.id, index, 'outfocus', props.setHidden);
                        }}
                        key={input.id}
                    >
                        <span className="placeholder_text">
                            {input.title}
                        </span>
                        <div className='auth_input_container'>
                            <input
                                type={input.type}
                                id={input.id}
                                name={input.name}
                                autoComplete={input.autoComplete}
                                className={input.className}
                                placeholder={input.placeholder}
                                title={input.title}
                                value={
                                    input.id === 'auth_email_input'
                                        ? props.email
                                        : props.password
                                }
                                onChange={
                                     async (e) => {
                                        input.id === 'auth_email_input'
                                            ? props.setEmail(e.target.value)
                                            : props.setPassword(e.target.value);
                                        const AuthAnimatePlaceholder = await props.importAnimatePlaceholder();
                                        AuthAnimatePlaceholder(input.id, index, 'onfocus', props.setHidden);
                                    }
                                }
                                required
                            />
                        </div>
                        {
                            input.id === 'auth_password_input'
                            &&
                            <div>
                                <button
                                    type="button"
                                    id="auth_show_password"
                                    hidden={props.hidden}
                                    title={'Show/Hide password'}
                                    onClick={async (e) => {
                                        const { AuthShowPassword } = await import(
                                            '../../../utils'
                                        )
                                        AuthShowPassword(e);
                                    }}
                                >
                                    SHOW
                                </button>
                            </div>
                        }
                    </label>
                ))
            }
        </>
    );
};