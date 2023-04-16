import { Route, Routes } from "react-router-dom";
import { QuotesPage } from "../pages";

export default function HandleQuotesPageRoutes () {

    return (
        <Routes>
            <Route
                index
                element={
                    <QuotesPage />
                }
            />
        </Routes>
    );
};