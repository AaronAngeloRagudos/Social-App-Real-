import { useContext } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { OnAuthStateChangeFirebase } from "../firebase";

export default function HandleUserSignIn({ children, childType }) {
  const { loggedInUser } = useContext(OnAuthStateChangeFirebase);

  // if user exists, return the children or the components beneath this,
  // else, navigate towards the pathname of /authpage.
  // check if we're signed in or signed out since two route handlers use this 
  // component.
  switch (childType) {
    case 'signed-in':
      return loggedInUser ? children : <Navigate to='/authpage' />;
    case 'signed-out':
      return loggedInUser ? <Navigate to='/' /> : children;
  };

};