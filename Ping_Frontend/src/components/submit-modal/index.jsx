import React, { useState } from "react";

import "./index.css";

export const SubmitModal = ({ isCloseModal, setModalState }) => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [category, setCategory] = useState("");

  const modalClassName = isCloseModal ? "modal is-active" : "modal";

  const handleClick = () => {
    setModalState(false);
  };

  const handleSelect = e => {
    setCategory(e.target.value);
  };

  const handleSubmit = () => {
    const payload = {
      title,
      contents,
      category
    };

    console.log(payload);
  };

  return (
    <div className={modalClassName}>
      <div className="modal-background" />
      <div className="modal-content modal-content-style">
        <h2 className="title">Create issue</h2>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Title of ping"
              onChange={setTitle}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Contents</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Contents of ping"
              onChange={setContents}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Category</label>
          <div className="control">
            <div className="select">
              <select onChange={handleSelect}>
                <option>Food</option>
                <option>Medical resource</option>
                <option>Water</option>
              </select>
            </div>
          </div>
        </div>

        <div className="control control-style">
          <button className="button is-primary" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={handleClick}
      />
    </div>
  );
};
