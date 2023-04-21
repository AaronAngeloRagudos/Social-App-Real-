import { Suspense, lazy, useState } from "react";
import { useSelector } from "react-redux";

import '../../styles/navbar/navbar.css';

import { SearchButton, OpenListOfOptions } from "./buttons";
import SearchInput from "./input/SearchInput";

const ListOfOptions = lazy(() => import('./buttons/ListOfOptions'));

export default function NavBar() {
    const savedUserData = useSelector((state) =>
        state.authorization.user.loggedInUser);

    const [toggle, setToggle] = useState(false);

    return (
        <nav
            id="navbar"
            className="navbar"
        >
            <div className="navigation_container">
                <div
                    className="search_input_container"
                    title="Search"
                    aria-label="Search"
                >
                    <SearchButton />
                    <SearchInput />
                </div>
                <div className="user_options_container">
                    <div className="user_options_icon_container">
                        <OpenListOfOptions
                            savedUserData={savedUserData}
                            toggle={toggle}
                            setToggle={setToggle}
                        />
                    </div>
                    <div className="user_options">
                        {
                            toggle
                                ? (
                                    <Suspense>
                                        <ListOfOptions />
                                    </Suspense>
                                ) : null
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};