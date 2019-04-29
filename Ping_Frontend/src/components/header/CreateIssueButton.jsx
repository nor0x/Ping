import React from "react";

import "./CreateIssueButton.css";

export const CreateIssueButton = ({ setModalState }) => {
  const handleClick = e => {
    e.preventDefault();
    setModalState(true);
  };

  return (
    <div className="create-issue-button">
      <a href="#" className="button is-link" onClick={handleClick}>
        <span>New Issue</span>
      </a>
    </div>
  );
};
