import { Route, Routes } from "react-router-dom";
import { Error, MainPage } from '../pages';
import { HandleChatPageRoutes, HandleProfilePageRoutes, HandleQuotesPageRoutes } from './index';

export default function HandleMainPageRoutes() {

  return (
    <Routes>
      <Route
        index
        element={
          <MainPage />
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
        path="*"
        element={
          <Error />
        }
      />
    </Routes>
  );
};
