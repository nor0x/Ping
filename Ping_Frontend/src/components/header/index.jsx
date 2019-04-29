import React from "react";

import { Title } from "./Title";
import { SubTitle } from "./SubTitle";
import { CreateIssueButton } from "./CreateIssueButton";

import "./index.css";

export const Header = ({ setModalState }) => (
  <header className="heading">
    <Title />
    <SubTitle />
    <CreateIssueButton setModalState={setModalState} />
  </header>
);
