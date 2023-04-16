import { Route, Routes } from "react-router-dom";
import { AuthPage, Error } from "../pages";
import HandleUserSignIn from "./HandleUserSignIn";

export default function HandleAuthPageRoutes() {

    return (
        <Routes>
            <Route
                index
                element={
                    <HandleUserSignIn childType={'signed-out'}>
                        <AuthPage />
                    </HandleUserSignIn>
                }
            />
            <Route 
                path=":method"
                element={
                    <HandleUserSignIn childType={'signed-out'}>
                        <AuthPage />
                    </HandleUserSignIn>
                }
            />
            <Route
                path="*"
                element={
                    <Error />
                }
            />
        </Routes>
    );
};