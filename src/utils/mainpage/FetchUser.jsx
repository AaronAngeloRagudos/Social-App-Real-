import { useContext, useEffect } from "react";
import { OnAuthStateChangeFirebase, firestore } from "../../firebase";
import { useDispatch } from "react-redux";
import { doc, getDoc } from "firebase/firestore";
import { whenUserIsLoggedIn } from '../../redux/slice/authSlice';

export default function FetchUser({ children, savedUserData }) {
    const { loggedInUser } = useContext(OnAuthStateChangeFirebase);
    const dispatch = useDispatch();

    useEffect(() => {
        async function getSavedUserInfo() {
            // if data is not in the redux store, or if there was
            // previously no logged in user, then get that from
            // firebase.
            if (!savedUserData) {
                try {
                    const acquireInfo = await getDoc(doc
                        (firestore, 'users-auth', loggedInUser.uid)
                    );
                    const info = acquireInfo.data();
                    if (info) {
                        const dateAndTime = convertDate(info.createdOn);
                        info.createdOn = dateAndTime;
                        dispatch(whenUserIsLoggedIn(info));
                    } else {
                        alert('Something went wrong with fetching your user data. Please contact customer support.')
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        }
        return async () => getSavedUserInfo();
    }, []);


    return (
        <>
            { children }
        </>
    );
};

function convertDate(data) {
    const fullDate = new Date(
        data.seconds * 1000
        +
        data.nanoseconds / 1000000
    );

    // month

    // are the months in single digits? Then add 0,
    // otherwise, let it be
    const month = fullDate.getMonth().toString().length === 1
    ? `0${fullDate.getMonth()}`
    : fullDate.getMonth();

    const day = fullDate.getDate().toString().length === 1
    ? `0${fullDate.getDate()}`
    : fullDate.getDate();

    const year = fullDate.getFullYear();

    const date = `${month}/${day}/${year}`;


    // time
    const hour = fullDate.getHours().toString().length === 1
    ? `0${fullDate.getHours()}`
    : fullDate.getHours();

    const minutes = fullDate.getMinutes().toString().length === 1
    ? `0${fullDate.getMinutes()}`
    : fullDate.getMinutes();

    const seconds = fullDate.getSeconds().toString().length === 1
    ? `0${fullDate.getSeconds()}`
    : fullDate.getSeconds();

    const time = `${hour}:${minutes}:${seconds}`

    const dateAndTime = {
        date,
        time
    }


    return dateAndTime;
}