export default function AuthSubmitButton (props) {

    return (
        <button
            type="submit"
            id="auth_submit_form_button"
            className="auth_submit"
            title={props.type}
            name="auth_submit_form_button"
            disabled={props.isDisabled}
        >
            {props.type}
        </button>
    );
};