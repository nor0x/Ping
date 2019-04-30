import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

import "./LoginButton.css";

export const LoginButton = ({ setUserStatus }) => {
  const responseFacebook = response => {
    console.log(response);
    if (response.accessToken) {
      setUserStatus(true);
      return
    }

    console.log("Fail to login");
    setUserStatus(false);
  };

  return (
    <FacebookLogin
      appId="2322759604680392"
      autoLoad
      callback={responseFacebook}
      onFailure={responseFacebook}
      render={renderProps => (
        <button className="facebook-login-button" onClick={renderProps.onClick}>
          Login with Facebook
        </button>
      )}
    />
  );
};
