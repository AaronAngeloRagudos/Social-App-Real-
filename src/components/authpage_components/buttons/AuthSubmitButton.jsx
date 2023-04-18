import { SignInIcon } from '../icons';

export default function AuthSubmitButton(props) {
    const title = props.type === 'login'
    ? props.isDisabled
    ? 'Please accomplish the form'
    : 'Login'
    : props.isDisabled
    ? 'Please accomplish the form'
    : 'Register'

    return (
        <div className="auth_submit_button_container">
            <button
                type="submit"
                id="auth_submit_form_button"
                className="auth_submit"
                title={title}
                name="auth_submit_form_button"
                disabled={props.isDisabled}
            >
                <p>
                    {props.type}
                    <span>
                        <SignInIcon />
                    </span>
                </p>
            </button>
        </div>
    );
};