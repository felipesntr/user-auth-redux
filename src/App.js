import logo from "./logo.svg";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import {
  selectUserEmail,
  selectUserImage,
  selectUserName,
  setActiveUser,
  setUserLogoutState,
} from "./features/userSlice";

import { auth, provider } from "./firebase";

function App() {
  const dispatch = useDispatch();

  const userName = useSelector(selectUserName);

  const handleSignIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        dispatch(
          setActiveUser({
            userName: user.displayName,
            userEmail: user.email,
          })
        );
      })
      .catch((error) => alert(error.message));
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(setUserLogoutState());
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="App">
      <header className="App-header">
        {userName ? (
          <>
            <h1>Hello, {userName}. Have a good day.</h1>
            <button onClick={handleSignOut}>Sign Out</button>
          </>
        ) : (
          <>
            <h1>Sign In, please.</h1>
            <button onClick={handleSignIn}>Sign In</button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
