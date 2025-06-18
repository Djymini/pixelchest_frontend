import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import RouterForUserConnected from "./Routers/RouterForUserConnected";
import RouterForUserNotConnected from "./Routers/RouterForUserNotConnected";

function App() {
  const token: boolean = false;

  /*useEffect(() => {
    const token = getToken();
    if (token) {
      deleteTokenExpired(token, dispatch, setUserInfo, navigate)
    }
  }, []);*/

  const Routing = () => {
    return token ? <RouterForUserConnected/> : <RouterForUserNotConnected/>;
  };

  return (
      <>
        <Routing/>
      </>
  );
}

export default App;
