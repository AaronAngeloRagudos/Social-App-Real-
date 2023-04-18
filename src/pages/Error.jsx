import { Link } from "react-router-dom";

export default function Error () {

    return (
        <div>
            Oops! Looks like this path does not exist.

            <Link
                to={'/'}
            >
                Go to HOME
            </Link>
        </div>
    );
};