import { Link, useParams } from "react-router-dom";
import Error from "./Error";
import { Login, Register, SignInMethods } from '../components';
import '../styles/authpage/authpage.css';

export default function AuthPage() {
    const params = useParams();
    const { method } = params;

    const isInRoute =
        method === 'register'
            || method === 'login'
            || !method
            ? true
            : false;

    return (
        <>
            {
                isInRoute
                    ? <AuthPageJSX method={method} />
                    : <Error />
            }
        </>
    );
};

function AuthPageJSX({ method }) {

    return (
        <div className="auth_container">
            <article>
                <div className="auth_form_container auth_form_container_flex">
                    <div className="auth_text_container">
                        <h2>Welcome back!</h2>
                        <p>It's great to have you again</p>
                    </div>
                    <div className="auth_form">
                        <SignInMethods />
                        <div className="auth_or_container">
                            <span />
                            <p>OR</p>
                            <span />
                        </div>
                        {method === 'login' || !method ? <Login /> : ''}
                        {method === 'register' && <Register />}
                    </div>
                </div>
                <AuthLinkTo method={method} />
            </article>
        </div>
    );
};

function AuthLinkTo({ method }) {

    return (
        <div className="auth_form_change">
            {
                method === 'login'
                    || !method
                    ? (
                        <p>
                            Don't have an account?
                            <Link to={'/authpage/register'}>
                                Register
                            </Link>
                        </p>
                    ) :
                    method === 'register'
                    && (
                        <p>
                            Have an account?
                            <Link to={'/authpage/login'}>
                                Login
                            </Link>
                        </p>
                    )
            }
        </div>
    );
};