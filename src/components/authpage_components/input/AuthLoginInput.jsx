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
                        onFocus={async () => {
                            const AuthAnimatePlaceholder = await props.importAnimatePlaceholder();
                            AuthAnimatePlaceholder({
                                id: input.id,
                                index,
                                focus: 'onfocus',
                                setHidden: props.setHidden
                            });
                        }}
                        onBlur={async () => {
                            const AuthAnimatePlaceholder = await props.importAnimatePlaceholder();
                            AuthAnimatePlaceholder({
                                id: input.id,
                                index,
                                focus: 'outfocus',
                                setHidden: props.setHidden
                            });
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
                                required
                                minLength={input.id === 'auth_password_input' ? 4 : 1}
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
                                        AuthAnimatePlaceholder({
                                            id: input.id,
                                            index,
                                            focus: 'onfocus',
                                            setHidden: props.setHidden
                                        });
                                        const AuthHandleInputChange = await props.AuthHandleInputChange();
                                        AuthHandleInputChange({
                                            value: e.target.value,
                                            input: input.id,
                                            type: 'login',
                                            setIsDisabled: props.setIsDisabled
                                        });
                                        if (input.id === 'auth_password_input') {
                                            const { AuthCheckPasswordStrength } = await import(
                                                '../../../utils'
                                            );
                                            AuthCheckPasswordStrength(e.target.value, index);
                                        }
                                    }
                                }
                            />
                        </div>
                        {
                            input.id === 'auth_password_input'
                            &&
                            <>
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
                                <div
                                    id='auth_password_strength_indicator'
                                    className='auth_password_strength_indicator'
                                >
                                <span className='auth_progress_bar'>&nbsp;</span>
                                </div>
                                <p className='auth_strength_text'>weak</p>
                            </>
                        }
                    </label>
                ))
            }
        </>
    );
};