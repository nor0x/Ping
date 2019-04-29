import React, { useState } from "react";

import * as geoUtils from "../../lib/geoUtils";
import * as api from "../../api";

import "./index.css";

export const SubmitModal = ({ isCloseModal, setModalState }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Food");
  const [address, setAddress] = useState("");

  const modalClassName = isCloseModal ? "modal is-active" : "modal";

  const handleClick = () => {
    setModalState(false);
  };

  const handleSelect = ({ target }) => {
    setCategory(target.value);
  };

  const handleAddress = ({ target }) => {
    setAddress(target.value);
  };

  const handleSubmit = async () => {
    try {
      const latLng = await geoUtils.getLatLng(address);
      const payload = {
        title,
        description,
        category,
        ...latLng
      };

      console.log(payload);

      await api.addPing(payload);

      setTitle("");
      setDescription("");
      setAddress("");
      setCategory("Food");
      setModalState(false);
    } catch (e) {
      throw Error(e);
    }
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
              onChange={({ target }) => setTitle(target.value)}
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Description</label>
          <textarea
            className="textarea"
            placeholder="e.g. Hello world"
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>

        <div className="field">
          <label className="label">Address</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Contents of ping"
              onChange={handleAddress}
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
