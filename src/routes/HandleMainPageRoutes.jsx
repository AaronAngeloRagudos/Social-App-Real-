import { Route, Routes } from "react-router-dom";
import { Error, Loader, SurveyUser } from '../pages';
import { HandleChatPageRoutes, HandleProfilePageRoutes, HandleQuotesPageRoutes } from './index';
import { Suspense, lazy } from "react";

const MainPage = lazy(() => import('../pages/MainPage'));

export default function HandleMainPageRoutes() {

  return (
    <Routes>
      <Route
        index
        element={
          <Suspense fallback={ <Loader /> }>
            <MainPage />
          </Suspense>
        }
      />
      <Route
        path="chatpage"
        element={
          <HandleChatPageRoutes />
        }
      />
      <Route
        path="profilepage"
        element={
          <HandleProfilePageRoutes />
        }
      />
      <Route
        path="quotespage"
        element={
          <HandleQuotesPageRoutes />
        }
      />
      <Route 
        path="new_user"
        element={
          <SurveyUser />
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
