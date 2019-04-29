import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "./LoginButton.css";

export const LoginButton = ({ setUserStatus }) => {
  const responseFacebook = () => {
    console.log("login success");
    setUserStatus(true);
  };

  return (
    <FacebookLogin
      appId="2322759604680392"
      autoLoad
      callback={responseFacebook}
      render={renderProps => (
        <button className="facebook-login-button" onClick={renderProps.onClick}>
          Login with Facebook
        </button>
      )}
    />
  );
};
