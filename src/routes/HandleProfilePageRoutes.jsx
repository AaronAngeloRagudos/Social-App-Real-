import { Route, Routes } from "react-router-dom";
import { ProfilePage } from "../pages";

export default function HandleProfilePageRoutes () {

    return (
        <Routes>
            <Route
                index
                element={
                    <ProfilePage />
                }
            />
        </Routes>
    );
};
