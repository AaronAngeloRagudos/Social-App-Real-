import { Suspense, lazy } from "react";

const ExpandMoreIcon = lazy(() => import('../../common/icons/ExpandMoreIcon'));

export default function OpenListOfOptions({ savedUserData, toggle, setToggle }) {
    const image = savedUserData?.photoURL
        ? savedUserData.photoURL
        : 'https://firebasestorage.googleapis.com/v0/b/chatapp-409cd.appspot.com/o/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.svg?alt=media&token=226ea59e-a8ae-40a8-95f1-483b4753b38a';

    return (
        <button
            className="user_options_icon"
            type="button"
            title="Profile Settings"
            onClick={() => setToggle(!toggle)}
        >
            <img
                src={image}
                alt="user_profile"
            />
            <Suspense>
                <ExpandMoreIcon
                    toggle={toggle}
                />
            </Suspense>
        </button>
    );
};