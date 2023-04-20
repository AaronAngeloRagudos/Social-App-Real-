import { Suspense, lazy } from "react";
import { useSelector } from "react-redux";

import '../styles/navbar/navbar.css';

const SearchIcon = lazy(() => import('./common/icons/SearchIcon'));
const ExpandMoreIcon = lazy(() => import('./common/icons/ExpandMoreIcon'));

export default function NavBar() {
    const savedUserData = useSelector((state) =>
        state.authorization.user.loggedInUser);

    const image = savedUserData?.photoURL
        ? savedUserData.photoURL
        : 'https://firebasestorage.googleapis.com/v0/b/chatapp-409cd.appspot.com/o/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.svg?alt=media&token=226ea59e-a8ae-40a8-95f1-483b4753b38a';

    return (
        <nav
            id="navbar"
            className="navbar"
        >
            <div className="navigation_container">
                <div className="search_input_container" >
                    <Suspense>
                        <button
                            type="button"
                            title="Search"
                            name="Search"
                        >
                            <SearchIcon />
                        </button>
                    </Suspense>
                    <input
                        type="text"
                        id="search_input"
                        className="search_input"
                        placeholder="Search Chat Book..."
                        autoComplete="off"
                        aria-label="Search"
                        onChange={async (e) => {
                            const { HandleMainPageSearch } = await import('../utils');
                            HandleMainPageSearch(e);
                        }}
                    />
                </div>
                <div className="user_options_container">
                    <div className="user_options_icon_container">
                        <button
                            className="user_options_icon"
                            type="button"
                            title="Profile Settings"
                        >
                            <img
                                src={image}
                                alt="user_profile"
                            />
                            <Suspense>
                                <ExpandMoreIcon />
                            </Suspense>
                        </button>
                    </div>
                    <div className="user_options">
                        <ul>

                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};