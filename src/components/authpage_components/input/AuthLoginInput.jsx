import { loginInput } from '../../../constants';
import { AuthAnimatePlaceholder } from '../../../utils';

export default function AuthLoginInput(props) {

    return (
        <>
            {
                loginInput.map((input, index) => (
                    <label
                        htmlFor={input.id}
                        className='auth_input_label'
                        title={input.title}
                        onFocus={() => props.AuthAnimatePlaceholder(input.id, index, 'onfocus')}
                        onBlur={() => props.AuthAnimatePlaceholder(input.id, index, 'outfocus')}
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
                                    (e) => {
                                        input.id === 'auth_email_input'
                                            ? props.setEmail(e.target.value)
                                            : props.setPassword(e.target.value); props.AuthAnimatePlaceholder(input.id, index, 'onfocus');
                                    }
                                }
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