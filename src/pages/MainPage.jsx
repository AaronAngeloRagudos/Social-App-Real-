import { useSelector } from "react-redux";
import { FetchUser } from "../utils";
import { NavBar } from "../components";

import '../styles/mainpage/mainpage.css';

export default function MainPage() {
    const savedUserData = useSelector((state) =>
        state.authorization.user.loggedInUser);

    return (
        <FetchUser
            savedUserData={savedUserData}
        >
            <NavBar />
            <div className="mainpage_container">
                <div className="mainpage">
                    Your email is: {savedUserData?.email}
                </div>
            </div>
        </FetchUser>
    );
};
