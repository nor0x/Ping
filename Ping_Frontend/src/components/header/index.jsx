import React from "react";

import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { CreateIssueButton } from "./CreateIssueButton";
import { LoginButton } from "./LoginButton";

import "./index.css";

export const Header = ({ isLogin, setModalState, setUserStatus }) => (
  <header className="heading">
    {!isLogin && <LoginButton setUserStatus={setUserStatus} />}
    {isLogin && <CreateIssueButton setModalState={setModalState} />}
    <Title />
    <SubTitle />
    <a href="http://m.me/2398405057063256" target="blank">
      <img className="messenger-button" src="/images/messenger-logo.svg" />
    </a>
  </header>
);
