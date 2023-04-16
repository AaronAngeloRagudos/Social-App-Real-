import { Route, Routes } from "react-router-dom";
import { ChatPage } from "../pages";

export default function HandleChatPageRoutes () {

    return (
        <Routes>
            <Route 
                index
                element={
                    <ChatPage />
                }
            />
        </Routes>
    );
};