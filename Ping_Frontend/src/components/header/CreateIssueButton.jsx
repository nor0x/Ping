import React from "react";

import "./CreateIssueButton.css";

export const CreateIssueButton = () => {
  const handleClick = e => {
    e.preventDefault();
    console.log(`Click create issue button`);
  };

  return (
    <div className="create-issue-button">
      <a href="#" className="button is-link" onClick={handleClick}>
        <span>New Issue</span>
      </a>
    </div>
  );
};
