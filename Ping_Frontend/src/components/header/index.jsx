import React from "react";

import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { CreateIssueButton } from "./CreateIssueButton";
import { LoginButton } from "./LoginButton";

import "./index.css";

export const Header = ({ isLogin, setModalState, setUserStatus }) => (
  <header className="heading">
    <Title />
    <SubTitle />
    {!isLogin && <LoginButton setUserStatus={setUserStatus} />}
    {isLogin && <CreateIssueButton setModalState={setModalState} />}
  </header>
);
