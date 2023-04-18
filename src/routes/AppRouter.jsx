import { Route, Routes } from "react-router-dom";
import { HandleAuthPageRoutes, HandleMainPageRoutes, HandleUserSignIn } from './index';
import { Error } from "../pages";

export default function AppRouter() {

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <HandleUserSignIn childType={'signed-in'}>
            <HandleMainPageRoutes />
          </HandleUserSignIn>
        }
      />
      <Route
        path="authpage/*"
        element={
          <HandleAuthPageRoutes />
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